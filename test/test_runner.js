// CreoJS Test suite set-up

require.config({
    baseUrl: '../',
    forceDefine: true,
    paths: {
        requirejs: 'vendor/requirejs/require',
        jquery: 'vendor/jquery/jquery',
        sinon: 'vendor/sinon/lib/sinon',
        match: 'vendor/sinon/lib/sinon/match',
        spy: 'vendor/sinon/lib/sinon/spy',
        call: 'vendor/sinon/lib/sinon/call',
        stub: 'vendor/sinon/lib/sinon/stub',
        assert: 'vendor/sinon/lib/sinon/assert',
        event: 'vendor/sinon/lib/sinon/util/event',
        fake_xml_http_request: 'vendor/sinon/lib/sinon/util/fake_xml_http_request',
        fake_server: 'vendor/sinon/lib/sinon/util/fake_server',
        chai: 'vendor/chai/chai',
        mocha: 'vendor/mocha/mocha',
        tests: 'test/tests',
        specs: 'test/specs',
        base: 'src/base',
        modules: 'src/modules',
        domwrapper: 'src/domwrapper',
        sandbox: 'src/sandbox'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    },
    urlArgs: '_=1399564059152'
});

requirejs.onError = function (err) {
    console.log('RequireJS error: ' + err.requireType);
    if (err.requireType === 'timeout') {
        console.log('RequireJS modules error: ' + err.requireModules);
    }

    throw err;
};

(function(){
    require(
        [
            'sinon',
            'match',
            'spy',
            'call',
            'stub',
            'assert',
            'event',
            'fake_xml_http_request',
            'fake_server'
        ],
        function(
            sinon,
            match,
            spy,
            call,
            stub,
            assert,
            event,
            fake_xml_http_request,
            fake_server
        ){ 
            
            mocha.setup('bdd');
            var should = chai.should();

            require(
                [
                'base',
                'specs/modules_spec',
                'specs/event_spec',
                'specs/ajax_spec',
                'specs/demo_spec',

                ],
                function(
                    base,
                    modulesSpec,
                    eventSpec,
                    ajaxSpec,
                    demoSpec
                ){

                    // defining of the test must come before
                    base.modules.create('modulesSpec', modulesSpec);
                    base.modules.create('eventSpec', eventSpec);
                    base.modules.create('ajaxSpec', ajaxSpec);
                    base.modules.create('demoSpec', demoSpec);
                    base.modules.startAll();

                    // you run the test suite
                    mocha.run();
                });
        });
})();
