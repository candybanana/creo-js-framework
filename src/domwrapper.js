define('domwrapper', ['jquery'],
    function() {

        'use strict';
       /**
        * A module to abstract the 3rd party library
        * @class domwrapper
        */
        var domwrapper = {};

        /**
         * Keeps a log of each call to the ajax method
         */
        domwrapper.xhrRequests = {};

        /**
         * Provides utility methods
         * @class  domwrapper.util
         */
        domwrapper.util = {
            /**
             * Merge the contents of two or more objects together into the first object
             */
            extend: $.extend
        };

        /**
         * Contains functionality for dom manipulation
         * @class  domwrapper.dom
         */
        domwrapper.dom = {
            /**
             * Queries the DOM and returns a wrapped DOM object
             * @param  {Object} selector
             * @param  {Object} context
             * @return {Object} element wrapped by dom library
             */
            query: function (selector, context) {
                return (context && context.find) ? context.find(selector) : $(selector);
            },

            /**
             * Get parents of an element
             * @param  {Object}   element
             * @param  {String} selector
             * @return {Object}
             */
            parents: function (element, selector) {
                var ret = {};
                if (typeof element === 'object') {
                    ret = $(element).parents(selector);
                }
                return ret;
            },

            /**
             * Filter results object
             * @param  {Object} element
             * @param  {String} selector
             * @return {Object} filtered results
             */
            filter: function (element, selector) {
                var ret = {};
                ret = $(element).filter(selector);
                return ret;
            },

            /**
             * Add event
             * @param  {String}   element
             * @param  {String}   evt
             * @param  {Function} fn
             */
            on: function (element, evt, fn) {
                $(element).on(evt, null, fn);
            },

            /**
             * Remove event
             * @param  {String}   element
             * @param  {String}   eventName
             * @param  {Function} fn
             */
            off: function (element, evt, fn) {
                $(element).off(evt, null, fn);
            },

            /**
             * Is an element visible?
             * @param  {Object} element
             * @return {Boolean}
             */
            isVisible : function (element) {
                if ($(element).is(':visible') && $(element).css('display') !== 'none') {
                    return true;
                }
                return false;
            },

            /**
             * Show an element
             * @param  {Object} element
             */
            show : function (element) {
                $(element).show();
            },

            /**
             * Hide an element
             * @param  {Object} element
             */
            hide : function (element) {
                $(element).hide();
            },

            /**
             * Wrap an element in dom library
             * @param  {Object} element
             * @return {Object}
             */
            wrap: function (element) {
                return $(element);
            },

            /**
             * Make and log ajax requests
             * @param  {String} url to request
             * @param  {Object} ajax setup properties
             * @param  {String} unique ID to identify this request
             * @param  {Function} fnDone Callback for ajax success
             * @param  {Function} fnFail Callback for ajax error
             * @param  {Function} fnComplete Callback for ajax success and/or error (always fires regardless)
             */
            ajax: function(url, objSettings, requestId, fnDone, fnFail, fnComplete) {

                //Remove the cached query ready to call a fresh one
                if ( objSettings.cache === false ) {
                    domwrapper.dom.clearRequest(requestId);
                }

                //Make request it hasn't already returns or if caching is turned off
                if( !domwrapper.xhrRequests[requestId] ) {
                    domwrapper.xhrRequests[requestId] = $.ajax(url, objSettings);
                }

                //Execute the success callback
                if (typeof fnDone === 'function') {
                    domwrapper.xhrRequests[requestId].done(function(response){
                        fnDone(response);
                    });
                }

                //Fail callback
                if (typeof fnFail  === 'function') {
                    domwrapper.xhrRequests[requestId].fail(function(response){
                        fnFail(response);
                    });
                } else {
                    //Ideally we call a default error handler here
                    // Or show the user an error message
                    domwrapper.xhrRequests[requestId].fail(function(response){
                        throw new ReferenceError('Ajax call failed');
                    });
                }

                //Complete (always calls for either success OR fail)
                if (typeof fnComplete === 'function') {
                    domwrapper.xhrRequests[requestId].always(function(response){
                        fnComplete(response);
                    });
                }

            },

            /**
             * Remove a request from the internal registery
             * @param  {String} unique ID to identify this request
             */
            clearRequest: function(requestId) {
                delete domwrapper.xhrRequests[requestId];
            }

        };

        if (typeof domwrapper.dom !== 'object') {
            throw new ReferenceError('domwrapper must have a dom object');
        }

        if (typeof domwrapper.dom.query !== 'function') {
            throw new ReferenceError('domwrapper must have a query method');
        }

        if (typeof domwrapper.util.extend !== 'function') {
            throw new ReferenceError('domwrapper must have an extend method');
        }

        return domwrapper;
    }
);
