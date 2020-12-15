const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

const createAsset = (file) => {
  const body = fs.readFileSync(file, 'utf-8');
  const ast = parser.parse(body, { sourceType:'module' });
  // 收集依赖
  const deps = [];
  traverse(ast, {
    ImportDeclaration({ node }) {
      deps.push(node.source.value);
    }
  });
  const { code } = babel.transformFromAst(ast, null, { presets: ['@babel/preset-env'] });
  return { deps, file, code };
}

const createGraph = (file) => {
  const entry = createAsset(file);
  const temp = [entry];
  const depsGraph = {};

  for (const module of temp) {
    const deps = module.deps;
    deps && deps.forEach((depFile) => {
      temp.push(createAsset(depFile));
    });
  }

  temp.forEach((item) => {
    depsGraph[item.file] = {
      deps: item.deps,
      code: item.code,
    };
  });
  return depsGraph;
}

function bundle(file) {
  const depsGraph = JSON.stringify(createGraph(file));

  return `(function (graph) {
    function require(file) {
      eval(graph[file].code);
      return exports;
    }
    const exports = {};
    return require('${file}');
  })(${depsGraph})`;
}

const content = bundle('./src/index.js');

fs.writeFileSync('./dist/bundle.js', content);
