define(

    //Module Name
    'sandbox',

     /**
      * Provides an abstract interface to for a module to access the base functionality.
      * @class modules
      */
    {
    create: function (base) {
        'use strict';

        return {

            /**
             * Extensions of base
             */
            cookie:   base.cookie,
            template: base.template,

            /**
             * Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.
             * @param {String}  selector A string containing a selector expression.
             * @param {Object} context A DOM Element, Document, or jQuery to use as context.
             */
            query: function (selector, context) {
                if (typeof context === 'object'  && typeof context.find === 'function') {
                    return base.dom.query(selector,context);
                }

                return base.dom.query(selector);
            },

            /**
             * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
             * @param {String} element A string containing a child selector expression, you want to return the parents of.
             * @param {String} selector A string containing a parents selector expression.
             */
            parent: function (element, selector) {
                return base.dom.parents(element,selector);
            },

            /**
             * Reduce the set of matched elements to those that match the selector.
             * @param {String} element Selector of the element to apply the filter to.
             * @param {String} selector A string containing a selector expression to match the current set of elements against.
             */
            filter: function (element, selector) {
                return base.dom.filter(element,selector);
            },

            /**
             * Bind an event listener to a given element.
             * @param {String} element Selector of the element to apply the event to.
             * @param {String} selector One or more space-separated event types and optional namespaces.
             * @param {Function} fn(eventObject) Handler function to execute when the event is triggered.
             */
            addEvent: function (element, evtType, fn) {
                // if a string is passed through then perform a search
                // within the current context.
                var el = ( typeof element === 'string' ) ? this.query( element ) : element;
                // attach the event.
                base.dom.on( el, evtType, function ( evt ) {
                    var ret = ( evt.currentTarget ) ?
                        evt.currentTarget :
                        evt.srcElement;
                    fn(base.dom.wrap(ret), evt);
                });
                return false;
            },

            /**
             * Unbind an event listener to a given element.
             * @param {String} element Selector of the element to remove the event from.
             * @param {String} evt One or more space-separated event types and optional namespaces.
             * @param {Function} fn(eventObject) Handler function to execute when the event is triggered.
             */
            removeEvent: function (element, evt, fn) {
                base.dom.off(element,evt,fn);
            },

            /**
             * Triggers an event associated with a module
             * @param {String}   evt Event Name
             */
            notify: function (evt) {
                base.events.trigger(evt);
            },

            /**
             * Trigger an event handler attached to the
             * @param {String} evts A string containing a JavaScript event type, such as click or submit.
             * @param {Function} fn Callback for event triggering
             */
            listen: function (evt, fn) {
                base.events.on(evt, fn);
            },

            isVisible : function (element) {
                if (typeof element === 'object') {
                    return base.dom.isVisible(element);
                }
            },

            click: function ( el, fn ) {
               this.addEvent( el, 'click', fn );
            },

            string: {
                camelcase : function(str) {
                    return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                        return letter.toUpperCase();
                    });
                }
            },

            ajax: function(url, objSettings) {

                var objSet = {},
                    key,
                    value,
                    requestId,
                    fnDone,
                    fnFail,
                    fnComplete;

                //Iterate the settings object to seperate callbacks from settings
                for (key in objSettings) {

                    if (objSettings.hasOwnProperty(key)) {
                        value = objSettings[key];

                        switch (key) {
                            case 'success': case 'error': case 'complete':
                                if (key === 'success') {
                                    fnDone = value;
                                }
                                if (key === 'error') {
                                    fnFail = value;
                                }
                                if (key ===  'complete') {
                                    fnComplete = value;
                                }
                                break;
                            case 'requestId':
                                requestId = value;
                                break;
                            default: objSet[key] = value;
                        }
                    }

                }

                base.dom.ajax(url, objSet, requestId, fnDone, fnFail, fnComplete);

            }
        };
    }
});
