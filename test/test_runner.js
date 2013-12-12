mocha.setup('bdd');
var should = chai.should();

require.config({
    baseUrl: '../',
    forceDefine: true,
    paths: {
        jquery: 'vendor/jquery/jquery',
        tests: 'test/tests',
        specs: 'test/specs',
        creojs: 'src'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    },
    urlArgs: '_=' + (new Date().getTime())
});