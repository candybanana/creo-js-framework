define('creo/core', [
    'creo/sandbox',
    'creo/base'
],
function (sandbox, base) {
    var moduleData = {}, core = {}, config;

    (function() {
        if (typeof base.dom !== 'object') {
            throw new ReferenceError('Base must have a dom object');
        }

        if (typeof base.dom.query !== 'function') {
            throw new ReferenceError('Base must have a query method');
        }

        if (typeof base.util.extend !== 'function') {
            throw new ReferenceError('Base must have a extend method');
        }
        
        core = base;
    }());

    core.modules = {
        audit: function() {
            var id;
            for ( id in moduleData ) {
                if (moduleData.hasOwnProperty(id)) {
                    console.log(moduleData[id]);
                }
            }
        },
        createModules: function(modules) {
            var id,
                temp;

            for (id in modules) {
                if (modules.hasOwnProperty(id)) {
                    if ( typeof modules[id].init !== 'function' ) {
                        throw new Error('Module ['+ id +'] has no constructor');
                    }

                    // create a temporary instance of the module for
                    // validation.
                    temp = modules[id].init(sandbox.create(core, modules[id].element));

                    if (typeof temp.init === 'function' && typeof temp.destroy === 'function') {
                        temp = null;

                        moduleData[id] = {
                            id: id,
                            create: modules[id].init,
                            instance: null,
                            config: {}
                        };
                    }

                    if (modules[id].hasOwnProperty('submodules')) {
                        console.log(modules[id].submodules);
                    }
                }
            }
        },
        create: function (id, fn, cfg) {
            var temp;

            if (typeof id === 'string' && typeof fn === 'function') {
                temp = fn(sandbox.create(core));

                if (typeof temp.init === 'function') {
                    temp = null;

                    cfg = typeof cfg === 'object' ? cfg : {};

                    moduleData[id] = {
                        id: id,
                        create: fn,
                        instance: null,
                        config: cfg
                    };
                } else {
                    throw new Error('Modules MUST have an init method');
                }
            }
        },
        start: function(id, cfg) {
            var module = moduleData[id];
            // augment the modules default configuration.
            core.util.extend(module.config, config);

            if (module) {
                module.instance = module.create(sandbox.create(core, id));
                module.instance.init(cfg);
            }
        },
        startAll: function() {
            var id;

            for (id in moduleData) {
                if (moduleData.hasOwnProperty(id) && moduleData[id].instance === null) {
                    core.modules.start(id, moduleData[id].config);
                }
            }
        },
        stop: function(id) {
            var module = moduleData[id];

            if (module && module.instance !== null) {
                module.instance.destroy();
                module.instance = null;
            } else {
                throw new Error('Failed to stop module ['+ id +']');
            }
        },
        find: function (id) {
            return  moduleData[id] || undefined;
        }
    };

    core.events = {
        audit: function() {
            var id;
            for (id in moduleData ) {
                if (moduleData.hasOwnProperty(id)) {
                    console.log({
                        id: id,
                        events: moduleData[id].events
                    });
                }
            }
        },
        register: function(evt, id) {
            if (moduleData[id] ) {
                moduleData[id].events = evt;
            }
        },
        clear: function (id) {
            if (moduleData[id] ) {
                moduleData[id].events = null;
            }
        },
        trigger: function (evt) {
            var id,
                module;

            // ensure the event has type/data properties.
            if (evt.hasOwnProperty('type')) {
                for (id in moduleData) {
                    if (moduleData.hasOwnProperty(id)) {
                        module = moduleData[id];

                        if ( module.events && module.events[evt.type]) {
                            module.events[evt.type](evt.data);
                        }
                    }
                }
            } else {
                throw new Error('Event object is missing its type property.');
            }
        }
    };

    return core;
});
