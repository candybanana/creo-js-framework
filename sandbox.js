define('creojs/sandbox', {
    create: function (core) {
        return {

            query: function (selector, context) {
                if (typeof context === 'object'  && typeof context.find === 'function') {
                    return core.dom.query(selector,context);
                }

                return core.dom.query(selector);
            },

            parent: function (element, selector) {
                return core.dom.parents(element,selector);
            },

            filter: function (element, selector) {
                return core.dom.filter(element,selector);
            },

            url: function (src) {
                if (env.cdn) {
                    return env.cdn + src;
                } else {
                    return src;
                }
            },

            addEvent: function (el, evtType, fn) {
                // if a string is passed through then perform a search
                // within the current context.
                var element = ( typeof el === 'string' ) ? this.find( el ) : el;
                // attach the event.
                core.dom.on( element, evtType, function ( evt ) {
                    var ret = ( evt.currentTarget ) ?
                        evt.currentTarget :
                        evt.srcElement;
                    fn(core.dom.wrap(ret), evt);
                });
                return false;
            },

            removeEvent: function (element, evt, fn) {
                core.dom.off(element,evt,fn);
            },

            notify: function (evt,context) {
                core.events.trigger(evt,context);
            },

            listen : function (evts) {
                core.events.register(evts, id);
            },

            ignore : function () {
                core.events.clear(id);
            },

            isVisible : function (element) {
                if (typeof element === 'object') {
                    return core.dom.isVisible(element);
                }
            },

            show : function (element) {
                core.dom.show(element);
            },

            hide : function (element) {
                core.dom.hide(element);
            },

            string: {
                camelcase : function(str) {
                    return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                        return letter.toUpperCase();
                    });
                }
            },

            click: function ( el, fn ) {
               this.addEvent( el, 'click', fn );
            },

            log: function ( msg ){
                if ( typeof console === 'object' && typeof console.log === 'function' ) {
                    console.log( msg );
                }
            },

            ajax: function(url, objSettings) {

                var objSet = {},
                        requestId,
                        fnDone,
                        fnFail,
                        fnComplete;

                //Iterate the settings object to seperate callbacks from settings
                $.each(objSettings, function(key, value) {        

                    switch (key) {
                        case 'success': case 'error': case 'complete': 
                            if (key == 'success') {
                                fnDone = value;
                            }
                            if (key == 'error') {
                                fnFail = value;
                            }
                            if (key ==  'complete') {
                                fnComplete = value;
                            }
                            break;
                        case 'requestId':
                            requestId = value;
                            break;
                        default: objSet[key] = value;
                    }

                });

                core.dom.ajax(url, objSet, requestId, fnDone, fnFail, fnComplete);
 
            }


        };
    }
});
