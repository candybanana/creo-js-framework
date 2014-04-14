require.config({
    forceDefine: true,
    paths: {
        jquery:         'vendor/jquery/jquery',
        base:           'src/base',
        domwrapper:     'src/domwrapper',
        sandbox:        'src/sandbox',
        
    }
});

require(['app']);
