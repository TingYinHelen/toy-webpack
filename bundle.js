const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

const createAsset = (file) => {
  const body = fs.readFileSync(file, 'utf-8');
  const ast = parser.parse(body, { sourceType:'module' });
  // 收集依赖
  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      console.log('node: ', node);
      deps[node.source.value] = node.source.value;
    }
  });
  const { code } = babel.transformFromAst(ast, null, { presets: ['@babel/preset-env'] });
  return { deps, file, code };
}

const res = createAsset('./src/index.js');
console.log('res: ', res);
