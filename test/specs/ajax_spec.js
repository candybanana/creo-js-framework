//Create a dummy module to do an ajax request.
define('mockajax', ['creojs/base'], function (base) {
    return function (modules) {
        return {
            init: function(settings) {
                modules.ajax( '', settings );
            },
            destroy: function() {}
        };
    };
});

describe('Basic ajax calls', function() {

    it('Ajax request should create a request ID in the manifest', function(done) {

        require([
            'creojs/base',
            'mockajax'
        ], function(base, mockajax) {

            var ajaxSettings = {
                    requestId: 'myRequest',
                    data: {
                        users: 0,
                        comments: 3
                    },
                    success: function(response) {
                        done();
                    }
                },
                baseSpy = sinon.spy(base.dom, 'ajax');

            base.modules.create('mockajax', mockajax, ajaxSettings);
            base.modules.startAll();

            //Ajax method in base library should be called.
            sinon.assert.called( baseSpy );

            var requestLog = base.xhrRequests;
            var dataSet = baseSpy.args[0][2];

            dataSet.should.equal(ajaxSettings.requestId);

            requestLog.should.have.property('myRequest');
        });
        
    });

});