(function (graph) {
    function require(file) {
      console.log('file---------', file);
      console.log('code---------', graph[file].code);
      eval(graph[file].code);
      return exports;
    }
    const exports = {};
    return require('./src/index.js');
  })({"./src/index.js":{"deps":["./src/addRandom.js","./src/minus.js"],"code":"\"use strict\";\n\nvar _addRandom = require(\"./src/addRandom.js\");\n\nvar _minus = require(\"./src/minus.js\");\n\nconsole.log('addRandom:', _addRandom.addRandom);\nconsole.log('minus:', (0, _minus.minus)(10, 5));"},"./src/addRandom.js":{"deps":["./src/add.js"],"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addRandom = void 0;\n\nvar _add = require(\"./src/add.js\");\n\nvar addRandom = (0, _add.add)(Math.random(), Math.random());\nexports.addRandom = addRandom;"},"./src/minus.js":{"deps":[],"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = void 0;\n\nvar minus = function minus(a, b) {\n  return a - b;\n};\n\nexports.minus = minus;"},"./src/add.js":{"deps":[],"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.add = void 0;\n\nvar add = function add(a, b) {\n  return a + b;\n};\n\nexports.add = add;"}})