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

describe('postcss-group', function () {

    it('handles faflc', function (done) {
        test('h1 { faflc: "微软雅黑" 12px 14px #000; }', 'h1 { font-family: "微软雅黑"; font-size: 12px; line-height: 14px; color: #000; }', { from: undefined }, done);
    });

    it('handles fc', function (done) {
        test('h1 { fc: 12px #000; }', 'h1 { font-size: 12px; color: #000; }', { from: undefined }, done);
    });

    it('handles fcb', function (done) {
        test('h1 { fcb: 12px #000 bold; }', 'h1 { font-size: 12px; color: #000; font-weight: bold; }', { from: undefined }, done);
    });

    it('handles flc', function (done) {
        test('h1 { flc: 12px 20px #000; }', 'h1 { font-size: 12px; line-height: 20px; color: #000; }', { from: undefined }, done);
    });

    it('handles flcb', function (done) {
        test('h1 { flcb: 12px 14px #000 bold; }', 'h1 { font-size: 12px; line-height: 14px; color: #000; font-weight: bold; }', { from: undefined }, done);
    });

    it('handles flh', function (done) {
        test('h1 { flh: 12px 14px; }', 'h1 { font-size: 12px; line-height: 14px; }', { from: undefined }, done);
    });

    it('handles hflh', function (done) {
        test('h1 { hflh: 20px 14px 20px; }', 'h1 { height: 20px; font-size: 14px; line-height: 20px; }', { from: undefined }, done);
    });

    it('handles hflc', function (done) {
        test('h1 { hflc: 20px 12px 14px #000; }', 'h1 { height: 20px; font-size: 12px; line-height: 14px; color: #000; }', { from: undefined }, done);
    });

    it('handles hflcb', function (done) {
        test('h1 { hflcb: 20px 12px 14px #000 bold; }', 'h1 { height: 20px; font-size: 12px; line-height: 14px; color: #000; font-weight: bold; }', { from: undefined }, done);
    });

    it('handles hl', function (done) {
        test('h1 { hl: 20px 12px; }', 'h1 { height: 20px; line-height: 12px; }', { from: undefined }, done);
    });

    it('handles mawh', function (done) {
        test('h1 { mawh: 20px 20px; }', 'h1 { max-width: 20px; max-height: 20px; }', { from: undefined }, done);
    });

    it('handles miwh', function (done) {
        test('h1 { miwh: 20px 20px; }', 'h1 { min-width: 20px; min-height: 20px; }', { from: undefined }, done);
    });

    it('handles mmh', function (done) {
        test('h1 { mmh: 20px 20px; }', 'h1 { min-height: 20px; max-height: 20px; }', { from: undefined }, done);
    });

    it('handles mmw', function (done) {
        test('h1 { mmw: 20px 20px; }', 'h1 { min-width: 20px; max-width: 20px; }', { from: undefined }, done);
    });

    it('handles mlr', function (done) {
        test('h1 { mlr: 20px 20px; }', 'h1 { margin-left: 20px; margin-right: 20px; }', { from: undefined }, done);
    });

    it('handles mtb', function (done) {
        test('h1 { mtb: 20px 20px; }', 'h1 { margin-top: 20px; margin-bottom: 20px; }', { from: undefined }, done);
    });

    it('handles plr', function (done) {
        test('h1 { plr: 20px 20px; }', 'h1 { padding-left: 20px; padding-right: 20px; }', { from: undefined }, done);
    });

    it('handles ptb', function (done) {
        test('h1 { ptb: 20px 20px; }', 'h1 { padding-top: 20px; padding-bottom: 20px; }', { from: undefined }, done);
    });

    it('handles wh', function (done) {
        test('h1 { wh: 20px 20px; }', 'h1 { width: 20px; height: 20px; }', { from: undefined }, done);
    });

    it('handles whfl', function (done) {
        test('h1 { whfl: 20px 20px 12px 20px; }', 'h1 { width: 20px; height: 20px; font-size: 12px; line-height: 20px; }', { from: undefined }, done);
    });

    it('handles whflc', function (done) {
        test('h1 { whflc: 20px 20px 12px 20px #000; }', 'h1 { width: 20px; height: 20px; font-size: 12px; line-height: 20px; color: #000; }', { from: undefined }, done);
    });

    it('handles whflcb', function (done) {
        test('h1 { whflcb: 20px 20px 12px 20px #000 bold; }', 'h1 { width: 20px; height: 20px; font-size: 12px; line-height: 20px; color: #000; font-weight: bold; }', { from: undefined }, done);
    });

    it('handles whl', function (done) {
        test('h1 { whl: 20px 20px 20px; }', 'h1 { width: 20px; height: 20px; line-height: 20px; }', { from: undefined }, done);
    });

    it('handles wl', function (done) {
        test('h1 { wl: 20px 20px; }', 'h1 { width: 20px; line-height: 20px; }', { from: undefined }, done);
    });

});
