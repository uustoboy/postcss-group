var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe("postcss-group", function() {
  it("handles background", function(done) {
    test("h1 { flc: 12px 12px #fff; }", "h1 { font-size:12px;line-height:12px;color:#fff }", {}, done);
  });
});
