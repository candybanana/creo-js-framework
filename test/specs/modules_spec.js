define('specs/modules_spec', ['creojs/base'], function (base) {
    return function (modules) {
        return {
            init: function(settings) {

                describe('Module creation tests', function() {


                    var dummymodule = function (modules) {
                        return {
                            init: function(settings) {/*dummy*/},
                            destroy: function() {/*dummy*/}
                        };
                    };

                    var baseSpy = sinon.spy(base.modules, 'create'),                  
                        myModules = base.debug.modules(true);

                    base.modules.create('dummymodule', dummymodule);

                    it('Check module was created', function() {

                        sinon.assert.called( baseSpy );
                        
                        //theModule.should.have.property('events');
                        
                    });

                });


            },
            destroy: function() {/*dummy*/}
        };
    };
});