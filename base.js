define([
    'jquery'
],
function(dom) {

    var base = {};
    
    base.xhrRequests = {};

    /**
     * @property {object} base.dom - contains functionality for dom manipulation.
     */
    base.dom = {
        /**
         * Query
         *
         * @method {function} query - used to find dom elements.
         * @return {object} - returns element wrapped by dom library.
         */
        query: function (selector, context) {
            return (context && context.find) ? context.find(selector) : $(selector);
        },
        /**
         * Add event
         *
         * @param  {string}   element
         * @param  {string}   evt
         * @param  {callback} fn
         * @return {void}
         */
        on: function (element, evt, fn) {
            $(element).on(evt, null, fn);
        },
        /**
         * Remove event
         *
         * @param  {string}   element
         * @param  {string}   evt
         * @param  {callback} fn
         * @return {void}
         */
        off: function (element, evt, fn) {
            $(element).off(evt, null, fn);
        },
        /**
         * Get parents of an element
         *
         * @param  {object} element
         * @param  {string} selector
         * @return {object}
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
         *
         * @param  {string} element
         * @param  {string} selector
         * @return {object}
         */
        filter: function (element, selector) {
            var ret = {};
            ret = $(element).filter(selector);
            return ret;
        },
        /**
         * Is an element visible?
         *
         * @param  {string}  element
         * @return {boolean}
         */
        isVisible : function (element) {
            if ($(element).is(':visible') && $(element).css('display') !== 'none') {
                return true;
            }
            return false;
        },
        /**
         * Show an element
         *
         * @param  {string} element
         * @return {void}
         */
        show : function (element) {
            $(element).show();
        },
        /**
         * Hide an element
         *
         * @param  {string} element
         * @return {void}
         */
        hide : function (element) {
            $(element).hide();
        },
        /**
         * Wrap an element in dom library
         *
         * @param  {string} element
         * @return {object}
         */
        wrap: function (element) {
            return $(element);
        },

        /**
         * Handle ajax requests
         *
         * @param  {string} url to request
         * @param  {object} ajax setup properties
         * @param  {string} unique ID to identify this request
         */
        ajax: function(url, objSettings, requestId, fnDone, fnFail, fnComplete) {

            //Remove the cached query ready to call a fresh one
            if ( objSettings.cache === false ) {
                base.dom.clearRequest(requestId);
            }

            //Make request it hasn't already returns or if caching is turned off
            if( !base.xhrRequests[requestId] ) {
                base.xhrRequests[requestId] = $.ajax(url, objSettings);
            }
            
            //Execute the success callback
            if (typeof(fnDone) === 'function') {
                base.xhrRequests[requestId].done(function(response){
                    fnDone(response);
                });
            }

            //Fail callback
            if (typeof(fnFail) === 'function') {
                base.xhrRequests[requestId].fail(function(response){
                    fnFail(response);
                });
            } else {
                //Ideally we call a default error handler here
                // Or show the user an error message
                base.xhrRequests[requestId].fail(function(response){
                    throw new ReferenceError('Ajax call failed');
                });
            }

            //Complete (always calls for eitehr succes OR fail)
            if (typeof(fnComplete) === 'function') {
                base.xhrRequests[requestId].always(function(response){
                    fnComplete(response);
                });
            }

        },
        /**
         * Remove a request from the internal registery
         *
         * @param  {string} unique ID to identify this request
         */
        clearRequest: function(requestId) {
            delete base.xhrRequests[requestId];
        }


    };

    base.util = {
        extend: $.extend
    };

    return base;
});
