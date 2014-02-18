define('specs/event_spec', ['base'], function (base) {
    return function (modules) {
        return {
            init: function(settings) {

                describe('Event pub/sub tests', function() {

                    var baseSpy = sinon.spy(base.events, 'on');
                    base.events.on('myEvent', 'event_spec');
                    sinon.assert.called( baseSpy );

                    var myModules = base.debug.modules(true),
                        theModule = myModules.eventSpec;

                    it('Attach an event to a module', function() {
                        
                        theModule.should.have.property('events');
                        
                    });

                    it('Trigger an event', function() {
                        
                        var eventSpy = sinon.spy(base.events, 'trigger');
                        
                        base.events.trigger('myEvent', 'event_spec');
                        
                        sinon.assert.called( eventSpy );

                    });

                });


            },
            destroy: function() {/*dummy*/}
        };
    };
});