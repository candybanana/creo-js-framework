define('modules/example', function () {
    'use strict';

    return function (sandbox) {

        return {
            init: function() {

                $('body').html('Example module started!')
            },

            destroy: function() {}
        };

    };

});
