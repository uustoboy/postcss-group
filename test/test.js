var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {

        expect(result.css).to.equal(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-crip', function () {

    it('handles background', function (done) {
        test('h1 { flc: 12px 20px #000; }', 'h1 { font-size:12px; line-height:20px; color: #000; }', {}, done);
    });

});
