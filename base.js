define([
    'dom'
],
function(dom) {

    var base = {};

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
        }
    };

    base.util = {
        extend: $.extend
    };

    return base;
});
