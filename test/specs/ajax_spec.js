//Create a dummy module to do an ajax request.
define('specs/ajax_spec', ['creojs/base'], function (base) {
    return function (modules) {
        return {
            init: function(settings) {

                describe('Basic ajax calls', function() {

                    it('Ajax request should create a request ID in the manifest', function(done) {

                            var baseSpy = sinon.spy(base.dom, 'ajax');

                            modules.ajax(
                
                                // Url (leave blank for test)
                                '',
                                
                                // Ajax config
                                {
                                    requestId: 'myRequest',
                                    data: {
                                        users: 0,
                                        comments: 3
                                    },
                                    success: function(response) { done(); }
                                } 
                            );

                            //Ajax method in base library should be called.
                            sinon.assert.called( baseSpy );

                            var requestLog = base.xhrRequests;
                            var dataSet = baseSpy.args[0][2];

                            dataSet.should.equal('myRequest');

                            requestLog.should.have.property('myRequest');
                        
                    });

                });


            },
            destroy: function() {}
        };
    };
});