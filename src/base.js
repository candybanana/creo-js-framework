define(
    //Module Name
    'base',

    //Dependancies
    ['sandbox','domwrapper', 'templatewrapper'],
    function (sandbox, domwrapper, templatewrapper) {

        'use strict';

       /**
        * Provides methods to manage modules and event listeners for the app
        * @class base
        */
        var base = domwrapper,
            moduleData = {},
            config;

        /**
         * Template functionality
         *
         * @class base.template
         */
        base.template = templatewrapper;

       /**
        * Module management methods
        * @class base.modules
        */
        base.modules = {

            /**
             * Registers the given module so instances of it can be managed
             * @param {String}   id Name of the module
             * @param {Function} fn The module's method/class
             * @param {Object}   cfg Options to extend default functionality of the module
             */
            create: function (id, fn, cfg) {
                var temp;

                if (typeof id === 'string' && typeof fn === 'function') {
                    temp = fn(sandbox.create(base));

                    if (typeof temp.init === 'function' && typeof temp.destroy === 'function') {
                        temp = null;

                        cfg = typeof cfg === 'object' ? cfg : {};

                        moduleData[id] = {
                            id: id,
                            create: fn,
                            instance: null,
                            config: cfg,
                            events: null
                        };
                    } else {
                        if (typeof temp.init !== 'function') {
                            throw new Error('Module: "'+ id +'" has no init method');
                        } else if (typeof temp.destroy !== 'function') {
                            throw new Error('Module: "'+ id +'" has no destroy method');
                        }
                    }
                } else if (typeof id === 'string') {
                    throw new Error('Modules MUST have both init and destroy methods');
                }
            },

            /**
             * Starts a given module
             * @param {String}   id Name of the module
             * @param {Object}   cfg Options to extend default functionality of the module
             */
            start: function(id, cfg) {

                var module = moduleData[id];

                // augment the modules default configuration.
                base.util.extend(module.config, cfg);

                if (module) {
                    module.instance = module.create(sandbox.create(base, id));
                    module.instance.init(cfg);
                }
            },

            /**
             * Starts all modules
             */
            startAll: function() {
                var id;

                for (id in moduleData) {
                    if (moduleData.hasOwnProperty(id) && moduleData[id].instance === null) {
                        base.modules.start(id, moduleData[id].config);
                    }
                }
            },

            /**
             * Stops a given module
             * @param {String}   id Name of the module
             */
            stop: function(id) {
                var module = moduleData[id];

                if (module && module.instance !== null) {
                    module.instance.destroy();
                    module.instance = null;
                } else {
                    throw new Error('Failed to stop module ['+ id +']');
                }
            }
        };


       /**
        * Event management methods
        * @class base.events
        */
        base.events = {

            /**
             * Registers an event to a module
             * @param {String}   evt Event Name
             * @param {String}   id Module Id
             */
            on: function(evt, id) {
                if ( moduleData[id] ) {
                    moduleData[id].events[evt] = evt;
                }
            },

            /**
             * Triggers an event
             * @param {String}   evt Event Name
             */
            trigger: function (evt) {
                var id,
                    module;

                // ensure the event has type/data properties.
                for (id in moduleData) {
                    if (moduleData.hasOwnProperty(id)) {
                        module = moduleData[id];

                        if ( module.events && module.events[evt.type]) {
                            module.events[evt.type](evt.data);
                        }
                    }
                }
            },

            /**
             * Removes all events of a module
             * @param {String}   id Module Id
             */
            clear: function (id) {
                if ( moduleData[id] ) {
                    moduleData[id].events = null;
                }
            }

        };

        /**
         * Getting and setting of cookies
         *
         * @class cookie
         */
        base.cookie = {
            /**
             * Get the value ofa cookie by key
             *
             * @param  {string} key
             * @return {string}
             */
            get: function (key) {
                var name    = key + "=";
                var cookies = document.cookie.split(';');

                for (var i = 0; i < cookies.length; i++) {
                    var c = cookies[i].trim();

                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length - 3);
                    }
                }

                return undefined;
            },
            /**
             * Set a cookie
             *
             * @param {string} key
             * @param {string} value
             * @param {string} expires
             */
            set: function (key, value, expires) {
                document.cookie = key + '=' + value + '; expires=' + expires + ' GMT';
            },
            /**
             * Expire a cookie by key
             *
             * @param {string} key
             */
            delete: function (key) {
                document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            }
        };

       /**
        * Debugging utilities
        * @class debug
        */
        base.debug = {
            /**
             * Can be set to false for production evironments to avoid console.logs
             */
            enabled: true,

            /**
             * Wrapper for console.log
             * @param {Mixed} msg Param to log in console
             */
            log: function ( msg ){
                if( base.debug.enabled ) console.log( msg );
            },
            /**
             * Logs each event that has been registered
             */
            events: function() {
                var id;
                for (id in moduleData ) {
                    if (moduleData.hasOwnProperty(id)) {
                        base.debug.log({
                            id: id,
                            events: moduleData[id].events || 'None attached'
                        });
                    }
                }
            },

            /**
             * Logs each module that has been registered
             * @param {Boolean} object if true return the moduleData object else console.log all module data
             */
            modules: function(object) {
                if(object) {
                    return moduleData;
                } else {
                    base.debug.log(moduleData);
                }

            },
        };

        //Pass debug to global scope
        window.debug = base.debug;

        return base;
    }
);
