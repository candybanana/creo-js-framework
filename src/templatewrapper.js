define('templatewrapper', ['twig', 'domwrapper'], function (twig, domwrapper) {
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

            return twig.twig({
                href:  path,
                async: false
            }).render(data);
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
        }
    };
});
