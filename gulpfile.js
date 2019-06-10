const { src, dest, parallel } = require("gulp");

var postcss = require("postcss");

var plugin = require("./index");

function add() {
    postcss([plugin()])
      .process("h1 { flcb:20px 20px #ccc; }")
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {});
}

exports.add = add;
