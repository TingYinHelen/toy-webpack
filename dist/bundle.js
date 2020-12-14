(function (graph) {
    function require(file) {
      file = file.indexOf('src') > -1 ? file : './src/' + file.slice(2);
      console.log('graph[file].code============', graph[file].code);
      eval(graph[file].code);
    }
    const exports = {};
    require('./src/index.js');
  })({"./src/index.js":{"deps":["./src/addRandom.js","./src/minus.js"],"code":"\"use strict\";\n\nvar _addRandom = require(\"./src/addRandom.js\");\n\nvar _minus = require(\"./src/minus.js\");\n\nconsole.log('addRandom:', (0, _addRandom.addRandom)());\nconsole.log('minus:', (0, _minus.minus)(10, 5));"},"./src/addRandom.js":{"deps":["./add.js"],"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addRandom = void 0;\n\nvar _add = require(\"./add.js\");\n\nvar addRandom = (0, _add.add)(Math.random(), Math.random());\nexports.addRandom = addRandom;"},"./src/minus.js":{"deps":[],"code":"\"use strict\";\n\nvar minus = function minus(a, b) {\n  return a - b;\n};"}})