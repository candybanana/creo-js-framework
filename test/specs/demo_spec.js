//Create a dummy test spec
define('specs/demo_spec', ['creojs/base'], function (base) {
    return function (modules) {
        return {
            init: function(settings) {

                describe('Demo test', function() {

                    it('Simple assertion example', function() {

                            var demo = 'demo';

                            demo.should.equal('demo');
                        
                    });

                    //Spy example - Spies are used to examine details about method calls
                    it('Example of method spy test', function() {

                            // Dummy method
                            var demo = { method: function() {} };

                            // Create spy for the above method
                            var demoSpy = sinon.spy(demo, 'method');

                            //Call the method
                            demo.method();

                            // Assert that the method was called via the spy
                            sinon.assert.called( demoSpy );

                        
                    });

                });


            },
            destroy: function() {}
        };
    };
});