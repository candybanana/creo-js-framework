define(
    'app',
    [
        'base',
        'modules/example'
    ],
    function (
        base,
        example
    ) {
        'use strict';

        var module = base.modules;

        module.create('example', example);
        module.startAll();
    }
);
