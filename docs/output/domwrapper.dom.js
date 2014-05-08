Ext.data.JsonP.domwrapper_dom({"tagname":"class","name":"domwrapper.dom","autodetected":{},"files":[{"filename":"domwrapper.js","href":"domwrapper.html#domwrapper-dom"}],"members":[{"name":"ajax","tagname":"method","owner":"domwrapper.dom","id":"method-ajax","meta":{}},{"name":"clearRequest","tagname":"method","owner":"domwrapper.dom","id":"method-clearRequest","meta":{}},{"name":"filter","tagname":"method","owner":"domwrapper.dom","id":"method-filter","meta":{}},{"name":"hide","tagname":"method","owner":"domwrapper.dom","id":"method-hide","meta":{}},{"name":"isVisible","tagname":"method","owner":"domwrapper.dom","id":"method-isVisible","meta":{}},{"name":"off","tagname":"method","owner":"domwrapper.dom","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"domwrapper.dom","id":"method-on","meta":{}},{"name":"parents","tagname":"method","owner":"domwrapper.dom","id":"method-parents","meta":{}},{"name":"query","tagname":"method","owner":"domwrapper.dom","id":"method-query","meta":{}},{"name":"show","tagname":"method","owner":"domwrapper.dom","id":"method-show","meta":{}},{"name":"wrap","tagname":"method","owner":"domwrapper.dom","id":"method-wrap","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-domwrapper.dom","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/domwrapper.html#domwrapper-dom' target='_blank'>domwrapper.js</a></div></pre><div class='doc-contents'><p>Contains functionality for dom manipulation</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-ajax' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-ajax' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-ajax' class='name expandable'>ajax</a>( <span class='pre'>url, ajax, unique, fnDone, fnFail, fnComplete</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Make and log ajax requests ...</div><div class='long'><p>Make and log ajax requests</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>to request</p>\n</div></li><li><span class='pre'>ajax</span> : Object<div class='sub-desc'><p>setup properties</p>\n</div></li><li><span class='pre'>unique</span> : String<div class='sub-desc'><p>ID to identify this request</p>\n</div></li><li><span class='pre'>fnDone</span> : Function<div class='sub-desc'><p>Callback for ajax success</p>\n</div></li><li><span class='pre'>fnFail</span> : Function<div class='sub-desc'><p>Callback for ajax error</p>\n</div></li><li><span class='pre'>fnComplete</span> : Function<div class='sub-desc'><p>Callback for ajax success and/or error (always fires regardless)</p>\n</div></li></ul></div></div></div><div id='method-clearRequest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-clearRequest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-clearRequest' class='name expandable'>clearRequest</a>( <span class='pre'>unique</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a request from the internal registery ...</div><div class='long'><p>Remove a request from the internal registery</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>unique</span> : String<div class='sub-desc'><p>ID to identify this request</p>\n</div></li></ul></div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-filter' class='name expandable'>filter</a>( <span class='pre'>element, selector</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Filter results object ...</div><div class='long'><p>Filter results object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>filtered results</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-hide' class='name expandable'>hide</a>( <span class='pre'>element</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hide an element ...</div><div class='long'><p>Hide an element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-isVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-isVisible' class='name expandable'>isVisible</a>( <span class='pre'>element</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Is an element visible? ...</div><div class='long'><p>Is an element visible?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-off' class='name expandable'>off</a>( <span class='pre'>element, eventName, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove event ...</div><div class='long'><p>Remove event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-on' class='name expandable'>on</a>( <span class='pre'>element, evt, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add event ...</div><div class='long'><p>Add event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>evt</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-parents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-parents' class='name expandable'>parents</a>( <span class='pre'>element, selector</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get parents of an element ...</div><div class='long'><p>Get parents of an element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-query' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-query' class='name expandable'>query</a>( <span class='pre'>selector, context</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Queries the DOM and returns a wrapped DOM object ...</div><div class='long'><p>Queries the DOM and returns a wrapped DOM object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>element wrapped by dom library</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-show' class='name expandable'>show</a>( <span class='pre'>element</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show an element ...</div><div class='long'><p>Show an element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-wrap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='domwrapper.dom'>domwrapper.dom</span><br/><a href='source/domwrapper.html#domwrapper-dom-method-wrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/domwrapper.dom-method-wrap' class='name expandable'>wrap</a>( <span class='pre'>element</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Wrap an element in dom library ...</div><div class='long'><p>Wrap an element in dom library</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});