Ext.data.JsonP.modules({"tagname":"class","name":"modules","autodetected":{},"files":[{"filename":"sandbox.js","href":"sandbox.html#modules"}],"members":[{"name":"addEvent","tagname":"method","owner":"modules","id":"method-addEvent","meta":{}},{"name":"create","tagname":"method","owner":"modules","id":"method-create","meta":{"private":true}},{"name":"filter","tagname":"method","owner":"modules","id":"method-filter","meta":{}},{"name":"listen","tagname":"method","owner":"modules","id":"method-listen","meta":{}},{"name":"notify","tagname":"method","owner":"modules","id":"method-notify","meta":{}},{"name":"parent","tagname":"method","owner":"modules","id":"method-parent","meta":{}},{"name":"query","tagname":"method","owner":"modules","id":"method-query","meta":{}},{"name":"removeEvent","tagname":"method","owner":"modules","id":"method-removeEvent","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-modules","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sandbox.html#modules' target='_blank'>sandbox.js</a></div></pre><div class='doc-contents'><p>Provides an abstract interface to for a module to access the base functionality.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEvent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-addEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-addEvent' class='name expandable'>addEvent</a>( <span class='pre'>element, selector, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind an event listener to a given element. ...</div><div class='long'><p>Bind an event listener to a given element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : String<div class='sub-desc'><p>Selector of the element to apply the event to.</p>\n</div></li><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>One or more space-separated event types and optional namespaces.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>(eventObject) Handler function to execute when the event is triggered.</p>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-create' class='name expandable'>create</a>( <span class='pre'>base</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>base</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-filter' class='name expandable'>filter</a>( <span class='pre'>element, selector</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reduce the set of matched elements to those that match the selector. ...</div><div class='long'><p>Reduce the set of matched elements to those that match the selector.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : String<div class='sub-desc'><p>Selector of the element to apply the filter to.</p>\n</div></li><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>A string containing a selector expression to match the current set of elements against.</p>\n</div></li></ul></div></div></div><div id='method-listen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-listen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-listen' class='name expandable'>listen</a>( <span class='pre'>evts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event handler attached to the ...</div><div class='long'><p>Trigger an event handler attached to the</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evts</span> : String<div class='sub-desc'><p>A string containing a JavaScript event type, such as click or submit.</p>\n</div></li></ul></div></div></div><div id='method-notify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-notify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-notify' class='name expandable'>notify</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers an event associated with a module ...</div><div class='long'><p>Triggers an event associated with a module</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : String<div class='sub-desc'><p>Event Name</p>\n</div></li></ul></div></div></div><div id='method-parent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-parent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-parent' class='name expandable'>parent</a>( <span class='pre'>element, selector</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector. ...</div><div class='long'><p>Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : String<div class='sub-desc'><p>A string containing a child selector expression, you want to return the parents of.</p>\n</div></li><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>A string containing a parents selector expression.</p>\n</div></li></ul></div></div></div><div id='method-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-query' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-query' class='name expandable'>query</a>( <span class='pre'>selector, context</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an ...</div><div class='long'><p>Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>A string containing a selector expression.</p>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>A DOM Element, Document, or jQuery to use as context.</p>\n</div></li></ul></div></div></div><div id='method-removeEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='modules'>modules</span><br/><a href='source/sandbox.html#modules-method-removeEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/modules-method-removeEvent' class='name expandable'>removeEvent</a>( <span class='pre'>element, evt, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unbind an event listener to a given element. ...</div><div class='long'><p>Unbind an event listener to a given element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : String<div class='sub-desc'><p>Selector of the element to remove the event from.</p>\n</div></li><li><span class='pre'>evt</span> : String<div class='sub-desc'><p>One or more space-separated event types and optional namespaces.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>(eventObject) Handler function to execute when the event is triggered.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});