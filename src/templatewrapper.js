define('templatewrapper', ['twig', 'moment', 'marked', 'domwrapper'],
    function (twig, moment, marked, domwrapper) {

    'use strict';

    var helpersRegistered = false;

    return {
        /**
         * Returns a template object from a filepath
         *
         * @param  {string} path - the filepath to the template
         * @return {object}
         */
        get: function (path) {
            this.registerHelpers();

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

        /**
         * Registers all helpers with template lib
         */
        registerHelpers: function () {
            if (helpersRegistered === false) {
                twig.extendFunction('markdown', this.markdown);
                twig.extendFunction('oembed', this.oembed);

                twig.extendFilter('plural', this.plural);

                twig.extendFilter('full_date', $.proxy(this.fullDate, this));
                twig.extendFilter('machine_date', $.proxy(this.machineDate, this));
                twig.extendFilter('relative_date', $.proxy(this.relativeDate, this));

                helpersRegistered = true;
            }
        },

        /***********************************************************************
         * Helpers
         ***********************************************************************/

        /**
         * Pluralise the value
         *
         * @param  {string} value
         * @return {string}
         */
        plural: function (value) {
            var singular = [
                'news',
                'gaming-discussion',
                'off-topic-discussion'
            ];

            if (singular.indexOf(value) >= 0) {
                return value;
            }

            return value + 's';
        },
        /**
         * Builds a date object to be passed to date lib
         *
         * @param  {string} value
         * @return {Date}
         */
        getDateObject: function (value) {
            if (value.length === 8) {
                return new Date(
                    value.substr(0, 4),
                    value.substr(4, 2) - 1,
                    value.substr(6, 2)
                );
            }

            if (value.length === 14) {
                return new Date(
                    value.substr(0, 4),
                    value.substr(4, 2) - 1,
                    value.substr(6, 2),
                    value.substr(8, 2),
                    value.substr(10, 2),
                    value.substr(12, 2)
                );
            }
        },
        /**
         * Returns a fully formatted date
         *
         * @param  {string} value
         * @return {string}
         */
        fullDate: function (value) {
            return moment(this.getDateObject(value)).format('Do MMM YYYY');
        },
        /**
         * Returns a machine readable date
         *
         * @param  {string} value
         * @return {string}
         */
        machineDate: function (value) {
            return moment(this.getDateObject(value)).format('YYYY-MM-DD HH:mm:ss');
        },
        /**
         * Returns a relative date
         *
         * @param  {string} value
         * @return {string}
         */
        relativeDate: function (value) {
            var relative = moment(this.getDateObject(value)).fromNow();

            if (relative === 'seconds ago') {
                return 'just now';
            }

            return relative;
        },
        /**
         * Converts markdown to html
         *
         * @param  {string} value
         * @return {string}
         */
        markdown: function (value) {
            return marked(value);
        },
        /**
         * Renders oembed links
         *
         * @param  {string} value
         * @return {string}
         */
        oembed: function (value) {
            return value;
        }
    };
});
