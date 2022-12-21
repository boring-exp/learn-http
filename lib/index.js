"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _base = _interopRequireDefault(require("./base.js"));
var _c$info, _c$info$name;
console.log(_base["default"]);
var a = 1;
var b = function b() {
  return console.log('hello world');
};
var c = {
  name: 'pjw',
  age: '24',
  info: {}
};
var name = c.name,
  peopelAge = c.age,
  info = c.info;

// const test = c && c.info && c.info.name
var test = c === null || c === void 0 ? void 0 : (_c$info = c.info) === null || _c$info === void 0 ? void 0 : (_c$info$name = _c$info.name) === null || _c$info$name === void 0 ? void 0 : _c$info$name.age;
var array = [1, 2, 3, 4];
(0, _forEach["default"])(array).call(array, function (item) {
  return console.log(item);
});
var asyncTask = new _promise["default"](function (resolve, reject) {
  resolve(1);
});