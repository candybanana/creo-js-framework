/**
 * Clones / deep copies an object.
 *
 * @param Object obj
 *   Any object.
 *
 * @return Object
 *   obj--cloned.
 */
function clone(obj) {
    if (obj === null || typeof(obj) !== 'object') {
      return obj;
    }

    var temp = new Object();

    for (var key in obj) {
      temp[key] = clone(obj[key]);
    }
    return temp;
}

//Create a dummy module to do an ajax request.
define('mockajax', ['creojs/core'], function (core) {
    return function (sandbox) {
        return {
            init: function(settings) {
                sandbox.ajax( '', settings );
            }
        };
    };
});

describe('Basic ajax calls', function() {

    it('Ajax request should create a request ID in the manifest', function(done) {

        require([
            'creojs/core',
            'mockajax'
        ], function(core, mockajax) {

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
                coreSpy = sinon.spy(core.dom, 'ajax');

            core.modules.create('mockajax', mockajax, ajaxSettings);
            core.modules.startAll();

            //Ajax method in core library should be called.
            sinon.assert.called( coreSpy );

            var requestLog = core.xhrRequests;
            var dataSet = coreSpy.args[0][2];

            dataSet.should.equal(ajaxSettings.requestId);

            requestLog.should.have.property('myRequest');
        });
        
    });

});