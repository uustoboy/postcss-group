const { src, dest, parallel } = require("gulp");

var postcss = require("postcss");

var plugin = require("./index");

function add() {
    postcss([plugin({
    	'az': ['azimuth','aa']
    })])
      .process("h1 { flcb:20px 20px #ccc; }")
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {});
}

function test(){
	var mocha = require('gulp-mocha');
	return src('test/*.js', { read: false })
        .pipe(mocha()).on('error', done);
}

exports.test = test;
exports.add = add;
