define('templatewrapper', ['twig', 'moment', 'domwrapper'], function (moment, twig, domwrapper) {
    'use strict';

    return {
        /**
         * Returns a template object from a filepath
         *
         * @param  {string} path - the filepath to the template
         * @return {object}
         */
        get: function (path) {
            return twig.twig({
                href:  path,
                async: false
            });
        },
        /**
         * Renders a template from filepath and data object
         *
         * @param  {string} path
         * @param  {object} data = {}
         * @return {string}
         */
        render: function (path, data) {
            var data = data || {};

            return this.get(path).render(data);
        },
        /**
         * Renders HTML with given data object
         *
         * @param  {string} html
         * @param  {object} data
         * @return {string}
         */
        renderHtml: function (html, data) {
            var data = data || {};

            return twig.twig({ data: html }).render(data);
        },


        /***********************************************************************
         * Helpers
         ***********************************************************************/

        fullDate: function (value) {
            return moment(value).format('Do MMM YYYY');
        },
        machineDate: function (value) {
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
        },
        relativeDate: function (value) {
            var relative = moment(value).fromNow();

            if (relative === 'seconds ago') {
                return 'just now';
            }

            return relative;
        },
        markdown: function (value) {

        },

    };
});
