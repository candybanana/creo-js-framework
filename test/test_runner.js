mocha.setup('bdd');

var should = chai.should();

require.config({
    baseUrl: '../',
    forceDefine: true,
    paths: {
        jquery: 'vendor/jquery/jquery',
        require: 'vendor/requirejs/require',
        chai: 'vendor/chai/chai',
        sinon: 'vendor/sinon/lib/sinon',
            match: 'vendor/sinon/lib/sinon/match',
            spy: 'vendor/sinon/lib/sinon/spy',
            call: 'vendor/sinon/lib/sinon/call',
            stub: 'vendor/sinon/lib/sinon/stub',
            assert: 'vendor/sinon/lib/sinon/assert',
            event: 'vendor/sinon/lib/sinon/util/event',
            fake_xml_http_request: 'vendor/sinon/lib/sinon/util/fake_xml_http_request',
            fake_server: 'vendor/sinon/lib/sinon/util/fake_server',
        tests: 'test/tests',
        specs: 'test/specs',
        creojs: '.'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        sinon: {
            exports: 'sinon'
        },
            match: {
                deps: ['sinon']
            },
            spy: {
                deps: ['sinon']
            },
            call: {
                deps: ['match']
            },
            stub: {
                deps: ['spy']
            },
            assert: {
                deps: ['stub']
            },
            event: {
                deps: ['sinon']
            },
            fake_xml_http_request: {
                deps: ['event']
            },
            fake_server: {
                deps: ['fake_xml_http_request']
            }  
    },
    urlArgs: '_=' + (new Date().getTime())
});