define("modules",{create:function(e){return{query:function(n,t){return"object"==typeof t&&"function"==typeof t.find?e.dom.query(n,t):e.dom.query(n)},parent:function(n,t){return e.dom.parents(n,t)},filter:function(n,t){return e.dom.filter(n,t)},addEvent:function(n,t,r){var o="string"==typeof n?this.find(n):n;return e.dom.on(o,t,function(n){var t=n.currentTarget?n.currentTarget:n.srcElement;r(e.dom.wrap(t),n)}),!1},removeEvent:function(n,t,r){e.dom.off(n,t,r)},notify:function(n){e.events.trigger(n)},listen:function(n){e.events.register(n,id)},isVisible:function(n){return"object"==typeof n?e.dom.isVisible(n):void 0},click:function(e,n){this.addEvent(e,"click",n)},string:{camelcase:function(e){return e.toLowerCase().replace(/\b[a-z]/g,function(e){return e.toUpperCase()})}},ajax:function(n,t){var r,o,i,u,f,c,s={};for(r in t)if(t.hasOwnProperty(r))switch(o=t[r],r){case"success":case"error":case"complete":"success"===r&&(u=o),"error"===r&&(f=o),"complete"===r&&(c=o);break;case"requestId":i=o;break;default:s[r]=o}e.dom.ajax(n,s,i,u,f,c)}}}}),define("domwrapper",["jquery"],function(){var e={};if(e.xhrRequests={},e.util={extend:$.extend},e.dom={query:function(e,n){return n&&n.find?n.find(e):$(e)},parents:function(e,n){var t={};return"object"==typeof e&&(t=$(e).parents(n)),t},filter:function(e,n){var t={};return t=$(e).filter(n)},on:function(e,n,t){$(e).on(n,null,t)},off:function(e,n,t){$(e).off(n,null,t)},isVisible:function(e){return $(e).is(":visible")&&"none"!==$(e).css("display")?!0:!1},show:function(e){$(e).show()},hide:function(e){$(e).hide()},wrap:function(e){return $(e)},ajax:function(n,t,r,o,i,u){t.cache===!1&&e.dom.clearRequest(r),e.xhrRequests[r]||(e.xhrRequests[r]=$.ajax(n,t)),"function"==typeof o&&e.xhrRequests[r].done(function(e){o(e)}),"function"==typeof i?e.xhrRequests[r].fail(function(e){i(e)}):e.xhrRequests[r].fail(function(){throw new ReferenceError("Ajax call failed")}),"function"==typeof u&&e.xhrRequests[r].always(function(e){u(e)})},clearRequest:function(n){delete e.xhrRequests[n]}},"object"!=typeof e.dom)throw new ReferenceError("domwrapper must have a dom object");if("function"!=typeof e.dom.query)throw new ReferenceError("domwrapper must have a query method");if("function"!=typeof e.util.extend)throw new ReferenceError("domwrapper must have a extend method");return e}),define("base",["modules","domwrapper"],function(e,n){var t=n,r={};return t.modules={create:function(n,o,i){var u;if("string"==typeof n&&"function"==typeof o){if(u=o(e.create(t)),"function"!=typeof u.init||"function"!=typeof u.destroy)throw new Error("Modules MUST have an init and destroy methods");u=null,i="object"==typeof i?i:{},r[n]={id:n,create:o,instance:null,config:i,events:null}}else if("string"==typeof n)throw new Error("Modules MUST have an init and destroy methods")},start:function(n,o){var i=r[n];t.util.extend(i.config,o),i&&(i.instance=i.create(e.create(t,n)),i.instance.init(o))},startAll:function(){var e;for(e in r)r.hasOwnProperty(e)&&null===r[e].instance&&t.modules.start(e,r[e].config)},stop:function(e){var n=r[e];if(!n||null===n.instance)throw new Error("Failed to stop module ["+e+"]");n.instance.destroy(),n.instance=null}},t.events={on:function(e,n){r[n]&&(r[n].events[e]=e)},trigger:function(e){var n,t;for(n in r)r.hasOwnProperty(n)&&(t=r[n],t.events&&t.events[e.type]&&t.events[e.type](e.data))},clear:function(e){r[e]&&(r[e].events=null)}},t.debug={enabled:!0,log:function(e){t.debug.enabled&&console.log(e)},events:function(){var e;for(e in r)r.hasOwnProperty(e)&&t.debug.log({id:e,events:r[e].events||"None attached"})},modules:function(e){return e?r:(t.debug.log(r),void 0)}},window.debug=t.debug,t});