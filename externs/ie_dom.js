/*
 * Copyright 2008 The Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for all the extensions over the
 *  W3C's DOM specification by IE in JScript. This file depends on
 *  w3c_dom2.js. The whole file has NOT been fully type annotated.
 *
 * When a non-standard extension appears in both Gecko and IE, we put
 * it in gecko_dom.js
 *
 * @externs
 */

// TODO(nicksantos): Rewrite all the DOM interfaces as interfaces, instead
// of kludging them as an inheritance hierarchy.

/**
 * @constructor
 * @extends {Document}
 * @see http://msdn.microsoft.com/en-us/library/ms757878(VS.85).aspx
 */
function XMLDOMDocument() {}

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms761398(VS.85).aspx
 */
XMLDOMDocument.prototype.async;

/**
 * @type {!Function}
 * @see http://msdn.microsoft.com/en-us/library/ms762647(VS.85).aspx
 */
XMLDOMDocument.prototype.ondataavailable;

/**
 * @type {!Function}
 * @see http://msdn.microsoft.com/en-us/library/ms764640(VS.85).aspx
 */
XMLDOMDocument.prototype.onreadystatechange;

/**
 * @type {!Function}
 * @see http://msdn.microsoft.com/en-us/library/ms753795(VS.85).aspx
 */
XMLDOMDocument.prototype.ontransformnode;

/**
 * @type {Object}
 * @see http://msdn.microsoft.com/en-us/library/ms756041(VS.85).aspx
 */
XMLDOMDocument.prototype.parseError;

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms761353(VS.85).aspx
 */
XMLDOMDocument.prototype.preserveWhiteSpace;

/**
 * @type {number}
 * @see http://msdn.microsoft.com/en-us/library/ms753702(VS.85).aspx
 */
XMLDOMDocument.prototype.readyState;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms762283(VS.85).aspx
 * @type {boolean}
 */
XMLDOMDocument.prototype.resolveExternals;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms760290(v=vs.85).aspx
 * @param {string} name
 * @param {*} value
 */
XMLDOMDocument.prototype.setProperty = function(name, value) {};

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms767669(VS.85).aspx
 */
XMLDOMDocument.prototype.url;

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms762791(VS.85).aspx
 */
XMLDOMDocument.prototype.validateOnParse;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms763830(VS.85).aspx
 */
XMLDOMDocument.prototype.abort = function() {};

/**
 * @param {*} type
 * @param {string} name
 * @param {string} namespaceURI
 * @return {Node}
 * @see http://msdn.microsoft.com/en-us/library/ms757901(VS.85).aspx
 * @nosideeffects
 */
XMLDOMDocument.prototype.createNode = function(type, name, namespaceURI) {};

/**
 * @param {string} xmlSource
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms762722(VS.85).aspx
 * @override
 */
XMLDOMDocument.prototype.load = function(xmlSource) {};

/**
 * @param {string} xmlString
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms754585(VS.85).aspx
 * @override
 */
XMLDOMDocument.prototype.loadXML = function(xmlString) {};

/**
 * @param {string} id
 * @return {Node}
 * @nosideeffects
 * @see http://msdn.microsoft.com/en-us/library/ms766397(VS.85).aspx
 */
XMLDOMDocument.prototype.nodeFromID = function(id) {};

//==============================================================================
// XMLNode methods and properties
// In a real DOM hierarchy, XMLDOMDocument inherits from XMLNode and Document.
// Since we can't express that in our type system, we put XMLNode properties
// on Node.

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms767570(VS.85).aspx
 */
Node.prototype.baseName;

/**
 * @type {?string}
 * @see http://msdn.microsoft.com/en-us/library/ms762763(VS.85).aspx
 */
Node.prototype.dataType;

/**
 * @type {Node}
 * @see http://msdn.microsoft.com/en-us/library/ms764733(VS.85).aspx
 */
Node.prototype.definition;

/**
 * IE5 used document instead of ownerDocument.
 * Old versions of WebKit used document instead of contentDocument.
 * @type {Document}
 */
Node.prototype.document;


/**
 * Inserts the given HTML text into the element at the location.
 * @param {string} sWhere Where to insert the HTML text, one of 'beforeBegin',
 *     'afterBegin', 'beforeEnd', 'afterEnd'.
 * @param {string} sText HTML text to insert.
 * @see http://msdn.microsoft.com/en-us/library/ms536452(VS.85).aspx
 */
Node.prototype.insertAdjacentHTML = function(sWhere, sText) {};


/**
 * @type {*}
 * @see http://msdn.microsoft.com/en-us/library/ms762308(VS.85).aspx
 */
Node.prototype.nodeTypedValue;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms757895(VS.85).aspx
 */
Node.prototype.nodeTypeString;

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms762237(VS.85).aspx
 */
Node.prototype.parsed;

/**
 * @type {Element}
 * @see http://msdn.microsoft.com/en-us/library/ms534327(VS.85).aspx
 */
Node.prototype.parentElement;

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms753816(VS.85).aspx
 */
Node.prototype.specified;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms762687(VS.85).aspx
 */
Node.prototype.text;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms755989(VS.85).aspx
 */
Node.prototype.xml;

/**
 * @param {string} expression An XPath expression.
 * @return {NodeList}
 * @see http://msdn.microsoft.com/en-us/library/ms754523(VS.85).aspx
 * @nosideeffects
 */
Node.prototype.selectNodes = function(expression) {};

/**
 * @param {string} expression An XPath expression.
 * @return {Node}
 * @see http://msdn.microsoft.com/en-us/library/ms757846(VS.85).aspx
 * @nosideeffects
 */
Node.prototype.selectSingleNode = function(expression) {};

/**
 * @param {Node} stylesheet XSLT stylesheet.
 * @return {string}
 * @see http://msdn.microsoft.com/en-us/library/ms761399(VS.85).aspx
 * @nosideeffects
 */
Node.prototype.transformNode = function(stylesheet) {};

/**
 * @param {Node} stylesheet XSLT stylesheet.
 * @param {Object} outputObject
 * @see http://msdn.microsoft.com/en-us/library/ms766561(VS.85).aspx
 */
Node.prototype.transformNodeToObject =
    function(stylesheet, outputObject) {};

//==============================================================================
// Node methods

/**
 * @param {boolean=} opt_bRemoveChildren Whether to remove the entire sub-tree.
 *    Defaults to false.
 * @return {Node} The object that was removed.
 * @see http://msdn.microsoft.com/en-us/library/ms536708(VS.85).aspx
 */
Node.prototype.removeNode = function(opt_bRemoveChildren) {};

/**
 * @constructor
 */
function ClipboardData() {}

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535220(VS.85).aspx
 * @param {string=} opt_type Type of clipboard data to clear. 'Text' or
 *     'URL' or 'File' or 'HTML' or 'Image'.
 */
ClipboardData.prototype.clearData = function(opt_type) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535220(VS.85).aspx
 * @param {string} type Type of clipboard data to set ('Text' or 'URL').
 * @param {string} data Data to set
 * @return {boolean} Whether the data were set correctly.
 */
ClipboardData.prototype.setData = function(type, data) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535220(VS.85).aspx
 * @param {string} type Type of clipboard data to get ('Text' or 'URL').
 * @return {string} The current data
 * @nosideeffects
 */
ClipboardData.prototype.getData = function(type) { };

/** @type {function(new:ActiveXObject, string, string=)} */
Window.prototype.ActiveXObject;

/**
 * @param {number|undefined|null} immediateID
 * @see https://developer.mozilla.org/en-US/docs/DOM/window.clearImmediate
 * @see http://msdn.microsoft.com/en-us/library/ie/hh924825(v=vs.85).aspx
 * @see https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html#si-clearImmediate
 */
Window.prototype.clearImmediate = function(immediateID) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535220(VS.85).aspx
 * @type ClipboardData
 */
Window.prototype.clipboardData;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533724(VS.85).aspx
 */
Window.prototype.dialogHeight;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533725(VS.85).aspx
 */
Window.prototype.dialogLeft;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533726(VS.85).aspx
 */
Window.prototype.dialogTop;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533727(VS.85).aspx
 */
Window.prototype.dialogWidth;

/**
 * Support for doScroll is removed in Internet Explorer 11:
 * @see http://msdn.microsoft.com/en-us/library/ie/bg182625(v=vs.85).aspx
 * 
 * @param {string} component
 */
Window.prototype.doScroll = function (component) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535863(VS.85).aspx
 */
Window.prototype.event;

/**
 * @see http://msdn.microsoft.com/en-us/library/cc197012(VS.85).aspx
 */
Window.prototype.maxConnectionsPer1_0Server;

/**
 * @see http://msdn.microsoft.com/en-us/library/cc197013(VS.85).aspx
 */
Window.prototype.maxConnectionsPerServer;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534198(VS.85).aspx
 */
Window.prototype.offscreenBuffering;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534389(VS.85).aspx
 */
Window.prototype.screenLeft;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534389(VS.85).aspx
 */
Window.prototype.screenTop;

/**
 * @type {function(new:XDomainRequest)}
 * @see http://msdn.microsoft.com/en-us/library/cc287985(VS.85).aspx
 */
Window.prototype.XDomainRequest;

/**
 * @type {function(new:XMLHttpRequest)}
 * @see http://msdn.microsoft.com/en-us/library/ms535157(VS.85).aspx
 */
Window.prototype.XMLHttpRequest;

// Functions

/**
 * @see http://msdn.microsoft.com/en-us/library/mm536343(v=vs.85).aspx
 * @param {string} event
 * @param {function(Event)} handler
 * @return {boolean}
 */
Window.prototype.attachEvent = function (event, handler) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536392(VS.85).aspx
 */
Window.prototype.createPopup;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536411(VS.85).aspx
 * @param {string} evtType
 * @param {Function} fn
 */
Window.prototype.detachEvent = function (evtType, fn) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536420(VS.85).aspx
 */
Window.prototype.execScript;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536425(VS.85).aspx
 */
Window.prototype.focus;

/**
 * @param {number} x
 * @param {number} y
 * @see http://msdn.microsoft.com/en-us/library/ms536618(VS.85).aspx
 */
Window.prototype.moveBy = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @see http://msdn.microsoft.com/en-us/library/ms536626(VS.85).aspx
 */
Window.prototype.moveTo = function(x, y) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536638(VS.85).aspx
 */
Window.prototype.navigate;

/**
 * @param {*=} opt_url
 * @param {string=} opt_windowName
 * @param {string=} opt_windowFeatures
 * @param {boolean=} opt_replace
 * @return {Window}
 * @see http://msdn.microsoft.com/en-us/library/ms536651(VS.85).aspx
 */
Window.prototype.open = function(opt_url, opt_windowName, opt_windowFeatures,
                                 opt_replace) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536672(VS.85).aspx
 */
Window.prototype.print = function() {};

/**
 * @param {string} message
 * @param {string=} opt_defValue
 * @return {?string}
 * @see http://msdn.microsoft.com/en-us/library/ms536673(VS.85).aspx
 */
Window.prototype.prompt = function(message, opt_defValue) {};

/**
 * @param {number} width
 * @param {number} height
 * @see http://msdn.microsoft.com/en-us/library/ms536722(VS.85).aspx
 */
Window.prototype.resizeBy = function(width, height) {};

/**
 * @param {number} width
 * @param {number} height
 * @see http://msdn.microsoft.com/en-us/library/ms536723(VS.85).aspx
 */
Window.prototype.resizeTo = function(width, height) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536738(VS.85).aspx
 */
Window.prototype.setActive;

/**
 * @param {function()} callback
 * @return {number}
 * @see https://developer.mozilla.org/en-US/docs/DOM/window.setImmediate
 * @see http://msdn.microsoft.com/en-us/library/ie/hh773176(v=vs.85).aspx
 * @see https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html#si-setImmediate
 */
Window.prototype.setImmediate = function(callback) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536758(VS.85).aspx
 */
Window.prototype.showHelp;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536761(VS.85).aspx
 */
Window.prototype.showModelessDialog;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535246%28v=vs.85%29.aspx
 * @const
 */
Window.prototype.external;

/**
 * @constructor
 */
function History() { };

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535864(VS.85).aspx
 * @param {number|string} delta The number of entries to go back, or
 *     the URL to which to go back. (URL form is supported only in IE)
 */
History.prototype.go = function(delta) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535864(VS.85).aspx
 * @param {number=} opt_distance The number of entries to go back
 *     (Mozilla doesn't support distance -- use #go instead)
 */
History.prototype.back = function(opt_distance) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535864(VS.85).aspx
 * @type {number}
 */
History.prototype.length;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535864(VS.85).aspx
 */
History.prototype.forward = function() {};

/**
 * @type {boolean}
 * @implicitCast
 * @see http://msdn.microsoft.com/en-us/library/ie/ms533072(v=vs.85).aspx
 */
HTMLFrameElement.prototype.allowTransparency;

/**
 * @type {Window}
 * @see http://msdn.microsoft.com/en-us/library/ms533692(VS.85).aspx
 */
HTMLFrameElement.prototype.contentWindow;

/**
 * @type {boolean}
 * @implicitCast
 * @see http://msdn.microsoft.com/en-us/library/ie/ms533072(v=vs.85).aspx
 */
HTMLIFrameElement.prototype.allowTransparency;

/**
 * @type {Window}
 * @see http://msdn.microsoft.com/en-us/library/ms533692(VS.85).aspx
 */
HTMLIFrameElement.prototype.contentWindow;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536385(VS.85).aspx
 */
HTMLBodyElement.prototype.createControlRange;

/**
 * @constructor
 */
function ControlRange() {}

ControlRange.prototype.add;
ControlRange.prototype.addElement;
ControlRange.prototype.execCommand;
ControlRange.prototype.item;
ControlRange.prototype.queryCommandEnabled;
ControlRange.prototype.queryCommandIndeterm;
ControlRange.prototype.queryCommandState;
ControlRange.prototype.queryCommandSupported;
ControlRange.prototype.queryCommandValue;
ControlRange.prototype.remove;
ControlRange.prototype.scrollIntoView;
ControlRange.prototype.select;

/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms535872.aspx
 */
function TextRange() {}

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533538(VS.85).aspx
 */
TextRange.prototype.boundingHeight;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533539(VS.85).aspx
 */
TextRange.prototype.boundingLeft;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533540(VS.85).aspx
 */
TextRange.prototype.boundingTop;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533541(VS.85).aspx
 */
TextRange.prototype.boundingWidth;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533874(VS.85).aspx
 */
TextRange.prototype.htmlText;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534200(VS.85).aspx
 */
TextRange.prototype.offsetLeft;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534303(VS.85).aspx
 */
TextRange.prototype.offsetTop;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534676(VS.85).aspx
 */
TextRange.prototype.text;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536371(VS.85).aspx
 */
TextRange.prototype.collapse;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536373(VS.85).aspx
 */
TextRange.prototype.compareEndPoints;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536416(VS.85).aspx
 */
TextRange.prototype.duplicate;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536419(VS.85).aspx
 */
TextRange.prototype.execCommand;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536421(VS.85).aspx
 */
TextRange.prototype.expand;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536422(VS.85).aspx
 */
TextRange.prototype.findText;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536432(VS.85).aspx
 */
TextRange.prototype.getBookmark;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx
 */
TextRange.prototype.getBoundingClientRect;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536435(VS.85).aspx
 */
TextRange.prototype.getClientRects;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536450(VS.85).aspx
 */
TextRange.prototype.inRange;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536458(VS.85).aspx
 */
TextRange.prototype.isEqual;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536616(VS.85).aspx
 */
TextRange.prototype.move;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536620(VS.85).aspx
 */
TextRange.prototype.moveEnd;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536623(VS.85).aspx
 */
TextRange.prototype.moveStart;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536628(VS.85).aspx
 */
TextRange.prototype.moveToBookmark;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536630(VS.85).aspx
 */
TextRange.prototype.moveToElementText;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536632(VS.85).aspx
 */
TextRange.prototype.moveToPoint;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536654(VS.85).aspx
 */
TextRange.prototype.parentElement;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536656(VS.85).aspx
 */
TextRange.prototype.pasteHTML;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536676(VS.85).aspx
 */
TextRange.prototype.queryCommandEnabled;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536678(VS.85).aspx
 */
TextRange.prototype.queryCommandIndeterm;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536679(VS.85).aspx
 */
TextRange.prototype.queryCommandState;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536681(VS.85).aspx
 */
TextRange.prototype.queryCommandSupported;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536683(VS.85).aspx
 */
TextRange.prototype.queryCommandValue;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536730(VS.85).aspx
 */
TextRange.prototype.scrollIntoView;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536735(VS.85).aspx
 */
TextRange.prototype.select;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536745(VS.85).aspx
 */
TextRange.prototype.setEndPoint;

/**
 * @return {undefined}
 * @see http://msdn.microsoft.com/en-us/library/ms536418(VS.85).aspx
 */
Selection.prototype.clear = function() {};

/**
 * @return {TextRange|ControlRange}
 * @see http://msdn.microsoft.com/en-us/library/ms536394(VS.85).aspx
 * @nosideeffects
 */
Selection.prototype.createRange = function() {};

/**
 * @return {Array.<TextRange>}
 * @see http://msdn.microsoft.com/en-us/library/ms536396(VS.85).aspx
 * @nosideeffects
 */
Selection.prototype.createRangeCollection = function() {};

/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms537447(VS.85).aspx
 */
function controlRange() {}


Document.prototype.loadXML;


// http://msdn.microsoft.com/en-us/library/ms531073(VS.85).aspx

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533065(VS.85).aspx
 */
Document.prototype.activeElement;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533553(VS.85).aspx
 */
Document.prototype.charset;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533693(VS.85).aspx
 */
Document.prototype.cookie;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533714(VS.85).aspx
 */
Document.prototype.defaultCharset;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533731(VS.85).aspx
 */
Document.prototype.dir;

/**
 * @see http://msdn.microsoft.com/en-us/library/cc196988(VS.85).aspx
 */
Document.prototype.documentMode;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533747(VS.85).aspx
 */
Document.prototype.expando;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533750(VS.85).aspx
 */
Document.prototype.fileCreatedDate;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533751(VS.85).aspx
 */
Document.prototype.fileModifiedDate;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533752(VS.85).aspx
 */
Document.prototype.fileSize;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534331(VS.85).aspx
 * @type {Window}
 */
Document.prototype.parentWindow;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534353(VS.85).aspx
 */
Document.prototype.protocol;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms534359(VS.85).aspx
 */
Document.prototype.readyState;

/**
 * @type {Selection}
 * @see http://msdn.microsoft.com/en-us/library/ms535869(VS.85).aspx
 */
Document.prototype.selection;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534704(VS.85).aspx
 */
Document.prototype.uniqueID;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534708(VS.85).aspx
 */
Document.prototype.URL;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534709(VS.85).aspx
 */
Document.prototype.URLUnencoded;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535155(VS.85).aspx
 */
Document.prototype.XMLDocument;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535163(VS.85).aspx
 */
Document.prototype.XSLDocument;

// functions

/**
 * @see http://msdn.microsoft.com/en-us/library/mm536343(v=vs.85).aspx
 * @param {string} event
 * @param {function(Event)} handler
 * @return {boolean}
 */
Document.prototype.attachEvent = function (event, handler) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536390(VS.85).aspx
 */
Document.prototype.createEventObject;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms531194(VS.85).aspx
 */
Document.prototype.createStyleSheet;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536411(VS.85).aspx
 * @param {string} evtType
 * @param {Function} fn
 */
Document.prototype.detachEvent;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536425(VS.85).aspx
 */
Document.prototype.focus;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536447(VS.85).aspx
 * @return {boolean}
 * @nosideeffects
 */
Document.prototype.hasFocus = function() {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536614(VS.85).aspx
 */
Document.prototype.mergeAttributes;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536685(VS.85).aspx
 */
Document.prototype.recalc;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536689(VS.85).aspx
 */
Document.prototype.releaseCapture;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536738(VS.85).aspx
 */
Document.prototype.setActive;


// collections

/**
 * @see http://msdn.microsoft.com/en-us/library/ms537434(VS.85).aspx
 */
Document.prototype.all;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms537445(VS.85).aspx
 */
Document.prototype.childNodes;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms537459(VS.85).aspx
 */
Document.prototype.frames;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms537461(VS.85).aspx
 */
Document.prototype.images;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms537470(VS.85).aspx
 * @type {DocumentNamespaces}
 */
Document.prototype.namespaces;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms537487(VS.85).aspx
 */
Document.prototype.scripts;

/**
 * @param {string} sUrl
 * @return {number}
 * @see http://msdn.microsoft.com/en-us/library/ms535922(VS.85).aspx
 */
Element.prototype.addBehavior = function(sUrl) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/mm536343(v=vs.85).aspx
 * @param {string} event
 * @param {function(Event)} handler
 * @return {boolean}
 */
Element.prototype.attachEvent = function (event, handler) {};

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms533546(VS.85).aspx
 */
Element.prototype.canHaveChildren;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms533559(v=vs.85).aspx
 */
Element.prototype.classid;

/**
 * @param {number} iCoordX Integer that specifies the client window coordinate
 *     of x.
 * @param {number} iCoordY Integer that specifies the client window coordinate
 *     of y.
 * @return {string} The component of an element located at the specified
 *     coordinates.
 * @see http://msdn.microsoft.com/en-us/library/ms536375(VS.85).aspx
 * @nosideeffects
 */
Element.prototype.componentFromPoint = function(iCoordX, iCoordY) {};

/**
 * @param {Element} el The element to check
 * @return {boolean} If the element is contained within this one.
 * @see http://msdn.microsoft.com/en-us/library/ms536377(VS.85).aspx
 * @nosideeffects
 */
Element.prototype.contains = function(el) {};

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms533690(VS.85).aspx
 */
Element.prototype.contentEditable;

/**
 * @return {TextRange}
 * @see http://msdn.microsoft.com/en-us/library/ms536401(VS.85).aspx
 * @nosideeffects
 */
Element.prototype.createTextRange = function () {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535231(VS.85).aspx
 * @type {Object.<string, string>}
 */
Element.prototype.currentStyle;

/**
 * @param {string} event
 * @param {Function} handler
 * @see http://msdn.microsoft.com/en-us/library/mm536343(v=vs.85).aspx
 */
Element.prototype.detachEvent = function (event, handler) { };;

/**
 * @param {string=} opt_action
 * @see http://msdn.microsoft.com/en-us/library/ms536414%28VS.85%29.aspx
 */
Element.prototype.doScroll = function(opt_action) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536423(VS.85).aspx
 * @param {string} type
 * @param {*=} evt
 * @return {boolean}
 */
Element.prototype.fireEvent = function (type, evt) { };

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms533783(VS.85).aspx
 */
Element.prototype.hideFocus;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms533899.aspx
 */
Element.prototype.innerText;

/**
 * @type {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms537838(VS.85).aspx
 */
Element.prototype.isContentEditable;

/**
 * @param {number} pointerId Id of the pointer that is assign to the element.
 * @see http://msdn.microsoft.com/en-us/library/ie/hh771882(v=vs.85).aspx
 */
Element.prototype.msSetPointerCapture = function(pointerId) {};

/**
 * @param {number} pointerId
 * @see http://msdn.microsoft.com/en-us/library/ie/hh771880.aspx
 */
Element.prototype.msReleasePointerCapture = function(pointerId) {};

/**
 * @type {?function(Event)}
 * @see http://msdn.microsoft.com/en-us/library/ms536903(v=vs.85).aspx
 */
Element.prototype.onbeforedeactivate;

/**
 * @type {?function(Event)}
 * @see http://msdn.microsoft.com/en-us/library/ms536945(VS.85).aspx
 */
Element.prototype.onmouseenter;

/**
 * @type {?function(Event)}
 * @see http://msdn.microsoft.com/en-us/library/ms536946(VS.85).aspx
 */
Element.prototype.onmouseleave;

/**
 * @type {?function(Event)}
 * @see http://msdn.microsoft.com/en-us/library/ms536969(VS.85).aspx
 */
Element.prototype.onselectstart;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/aa752326(VS.85).aspx
 */
Element.prototype.outerHTML;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms534359(VS.85).aspx
 */
Element.prototype.readyState;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536689(VS.85).aspx
 */
Element.prototype.releaseCapture = function() {};

/**
 * @param {number} iID
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms536700(VS.85).aspx
 */
Element.prototype.removeBehavior = function(iID) {};

/**
 * @type {RuntimeStyle}
 * @see http://msdn.microsoft.com/en-us/library/aa703996(VS.85).aspx
 */
Element.prototype.runtimeStyle;

/**
 * @param {boolean=} opt_bContainerCapture Events originating in a container are
 *     captured by the container. Defaults to true.
 * @see http://msdn.microsoft.com/en-us/library/ms536742(VS.85).aspx
 */
Element.prototype.setCapture = function(opt_bContainerCapture) {};

/**
 * @type {number}
 * @see http://msdn.microsoft.com/en-us/library/ms534635(VS.85).aspx
 */
Element.prototype.sourceIndex;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms537840.aspx
 */
Element.prototype.unselectable;

/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/aa752462(v=vs.85).aspx
 */
function HTMLFiltersCollection() {}

/**
 * @see http://msdn.microsoft.com/en-us/library/aa752463(v=vs.85).aspx
 * @type {number}
 */
HTMLFiltersCollection.prototype.length;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms537452(v=vs.85).aspx
 * @type {HTMLFiltersCollection}
 */
Element.prototype.filters;

/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms532853(v=vs.85).aspx
 */
function HTMLFilter() {}

/**
 * @see http://msdn.microsoft.com/en-us/library/ms532954(v=vs.85).aspx
 */
HTMLFilter.prototype.apply = function() {};

/**
 * @constructor
 * @extends {HTMLFilter}
 * @see http://msdn.microsoft.com/en-us/library/ms532967(v=vs.85).aspx
 */
function AlphaFilter() {}

/**
 * @see http://msdn.microsoft.com/en-us/library/ms532910(v=vs.85).aspx
 * @type {number}
 */
AlphaFilter.prototype.Opacity;

/**
 * @constructor
 * @extends {HTMLFilter}
 * @see http://msdn.microsoft.com/en-us/library/ms532969(v=vs.85).aspx
 */
function AlphaImageLoaderFilter() {}

/**
 * @see http://msdn.microsoft.com/en-us/library/ms532920(v=vs.85).aspx
 * @type {string}
 */
AlphaImageLoaderFilter.prototype.sizingMethod;

/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms535866(VS.85).aspx
 */
function Location() {}

/**
 * @see http://trac.webkit.org/changeset/113945
 * @type {DOMStringList}
 */
Location.prototype.ancestorOrigins;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533775(VS.85).aspx
 * @type {string}
 */
Location.prototype.hash;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533784(VS.85).aspx
 * @type {string}
 */
Location.prototype.host;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533785(VS.85).aspx
 * @type {string}
 */
Location.prototype.hostname;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms533867(VS.85).aspx
 * @type {string}
 */
Location.prototype.href;

/**
 * @see https://docs.google.com/document/view?id=1r_VTFKApVOaNIkocrg0z-t7lZgzisTuGTXkdzAk4gLU&hl=en
 * @type {string}
 */
Location.prototype.origin;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534332(VS.85).aspx
 * @type {string}
 */
Location.prototype.pathname;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534342(VS.85).aspx
 */
Location.prototype.port;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534353(VS.85).aspx
 * @type {string}
 */
Location.prototype.protocol;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms534620(VS.85).aspx
 * @type {string}
 */
Location.prototype.search;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536342(VS.85).aspx
 * @param {string} url
 */
Location.prototype.assign = function(url) {};

/**
 * @param {boolean=} opt_forceReload If true, reloads the page from
 *     the server. Defaults to false.
 * @see http://msdn.microsoft.com/en-us/library/ms536691(VS.85).aspx
 */
Location.prototype.reload = function(opt_forceReload) {};

/**
 * @param {string} url
 * @see http://msdn.microsoft.com/en-us/library/ms536712(VS.85).aspx
 */
Location.prototype.replace = function(url) {};


// For IE, returns an object representing key-value pairs for all the global
// variables prefixed with str, e.g. test*

/** @param {*=} opt_str */
function RuntimeObject(opt_str) {}


/**
 * @type {StyleSheet}
 * @see http://msdn.microsoft.com/en-us/library/dd347030(VS.85).aspx
 */
HTMLStyleElement.prototype.styleSheet;


/**
 * IE implements Cross Origin Resource Sharing (cross-domain XMLHttpRequests)
 * via the XDomainRequest object.
 *
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx
 * @see http://www.w3.org/TR/cors/
 */
function XDomainRequest() {}

/**
 * Aborts the request.
 * @see http://msdn.microsoft.com/en-us/library/cc288129(v=vs.85).aspx
 */
XDomainRequest.prototype.abort = function() {};

/**
 * Sets the method and URL for the request.
 * @param {string} bstrMethod Either "GET" or "POST"
 * @param {string} bstrUrl The target URL
 * @see http://msdn.microsoft.com/en-us/library/cc288168(v=vs.85).aspx
 */
XDomainRequest.prototype.open = function(bstrMethod, bstrUrl) {};

/**
 * Sends the request.
 * @param {string=} varBody The POST body to send to the server. If omitted,
 *     the behavior is identical to sending an empty string.
 * @see http://msdn.microsoft.com/en-us/library/cc288207(v=vs.85).aspx
 */
XDomainRequest.prototype.send = function(varBody) {};

/**
 * Called if the request could not be completed. Note that error information is
 * not available.
 * @see http://msdn.microsoft.com/en-us/library/ms536930%28v=VS.85%29.aspx
 * @type {?function(Event)}
 */
XDomainRequest.prototype.onerror;

/**
 * Called when the response has finished.
 * @see http://msdn.microsoft.com/en-us/library/ms536942%28v=VS.85%29.aspx
 * @type {?function()}
 */
XDomainRequest.prototype.onload;

/**
 * Called every time part of the response has been received.
 * @see http://msdn.microsoft.com/en-us/library/cc197058%28v=VS.85%29.aspx
 * @type {?function(Event)}
 */
XDomainRequest.prototype.onprogress;

/**
 * Called if the timeout period has elapsed.
 * @see http://msdn.microsoft.com/en-us/library/cc197061%28v=VS.85%29.aspx
 * @type {?function(Event)}
 */
XDomainRequest.prototype.ontimeout;

/**
 * The current response body.
 * @see http://msdn.microsoft.com/en-us/library/cc287956%28v=VS.85%29.aspx
 * @type {string}
 */
XDomainRequest.prototype.responseText;

/**
 * The timeout (in milliseconds) for the request.
 * @type {number}
 */
XDomainRequest.prototype.timeout;

/**
 * The Content-Type of the response, or an empty string.
 * @type {string}
 */
XDomainRequest.prototype.contentType;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms533542(v=vs.85).aspx
 */
Navigator.prototype.browserLanguage;

/**
 * @type {boolean}
 * @see http://blogs.msdn.com/b/ie/archive/2011/09/20/touch-input-for-ie10-and-metro-style-apps.aspx
 */
Navigator.prototype.msPointerEnabled;

/**
 * @type {number}
 * @see http://msdn.microsoft.com/en-us/library/ms533721(v=vs.85).aspx
 */
Screen.prototype.deviceXDPI;

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535889(v=vs.85).aspx
 * @constructor
 */
function RuntimeStyle()
{

}

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536429(v=vs.85).aspx
 * @nosideeffects
 */
RuntimeStyle.prototype.getAttribute = Element.prototype.getAttribute;

/**
 * @param {string} propertyName
 * @return {string}
 * @nosideeffects
 * @see http://msdn.microsoft.com/en-us/library/aa358797(v=vs.85).aspx
 */
RuntimeStyle.prototype.getExpression = function (propertyName)
{

};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536696(v=vs.85).aspx
 */
RuntimeStyle.prototype.removeAttribute = Element.prototype.getAttribute;

/**
 * @private
 * @enum {string}
 */
RuntimeStyle.ExpressionLanguage = {
	JSCRIPT: "JScript",
	VBSCRIPT: "VBScript",
	JAVASCRIPT: "JavaScript"
};

/**
 * @param {string} propertyName
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/aa358798(v=vs.85).aspx
 */
RuntimeStyle.prototype.removeExpression = function (propertyName)
{
	
};

/**
 * @param {string} propertyName
 * @param {string} expression
 * @param {RuntimeStyle.ExpressionLanguage=} language Optional, defaults to "JScript"
 * @see http://msdn.microsoft.com/en-us/library/ms531196(v=vs.85).aspx
 */
RuntimeStyle.prototype.setExpression = function (propertyName, expression, language)
{
	
};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms536429(v=vs.85).aspx
 */
RuntimeStyle.prototype.setAttribute = Element.prototype.setAttribute;


/** @type {string} */
RuntimeStyle.prototype.accelerator;

/** @type {string} */
RuntimeStyle.prototype.background;

/** @type {string} */
RuntimeStyle.prototype.backgroundAttachment;

/** @type {string} */
RuntimeStyle.prototype.backgroundClip;

/** @type {string} */
RuntimeStyle.prototype.backgroundColor;

/** @type {string} */
RuntimeStyle.prototype.backgroundImage;

/** @type {string} */
RuntimeStyle.prototype.backgroundOrigin;

/** @type {string} */
RuntimeStyle.prototype.backgroundPosition;

/** @type {string} */
RuntimeStyle.prototype.backgroundPositionX;

/** @type {string} */
RuntimeStyle.prototype.backgroundPositionY;

/** @type {string} */
RuntimeStyle.prototype.backgroundRepeat;

/** @type {string} */
RuntimeStyle.prototype.backgroundSize;

/** @type {string} */
RuntimeStyle.prototype.behavior;

/** @type {string} */
RuntimeStyle.prototype.border;

/** @type {string} */
RuntimeStyle.prototype.borderBottom;

/** @type {string} */
RuntimeStyle.prototype.borderBottomColor;

/** @type {string} */
RuntimeStyle.prototype.borderBottomLeftRadius;

/** @type {string} */
RuntimeStyle.prototype.borderBottomRightRadius;

/** @type {string} */
RuntimeStyle.prototype.borderBottomStyle;

/** @type {string} */
RuntimeStyle.prototype.borderBottomWidth;

/** @type {string} */
RuntimeStyle.prototype.borderCollapse;

/** @type {string} */
RuntimeStyle.prototype.borderColor;

/** @type {string} */
RuntimeStyle.prototype.borderLeft;

/** @type {string} */
RuntimeStyle.prototype.borderLeftColor;

/** @type {string} */
RuntimeStyle.prototype.borderLeftStyle;

/** @type {string} */
RuntimeStyle.prototype.borderLeftWidth;

/** @type {string} */
RuntimeStyle.prototype.borderRadius;

/** @type {string} */
RuntimeStyle.prototype.borderRight;

/** @type {string} */
RuntimeStyle.prototype.borderRightColor;

/** @type {string} */
RuntimeStyle.prototype.borderRightStyle;

/** @type {string} */
RuntimeStyle.prototype.borderRightWidth;

/** @type {string} */
RuntimeStyle.prototype.borderSpacing;

/** @type {string} */
RuntimeStyle.prototype.borderStyle;

/** @type {string} */
RuntimeStyle.prototype.borderTop;

/** @type {string} */
RuntimeStyle.prototype.borderTopColor;

/** @type {string} */
RuntimeStyle.prototype.borderTopLeftRadius;

/** @type {string} */
RuntimeStyle.prototype.borderTopRightRadius;

/** @type {string} */
RuntimeStyle.prototype.borderTopStyle;

/** @type {string} */
RuntimeStyle.prototype.borderTopWidth;

/** @type {string} */
RuntimeStyle.prototype.borderWidth;

/** @type {string} */
RuntimeStyle.prototype.bottom;

/** @type {string} */
RuntimeStyle.prototype.boxShadow;

/** @type {string} */
RuntimeStyle.prototype.boxSizing;

/** @type {string} */
RuntimeStyle.prototype.captionSide;

/** @type {string} */
RuntimeStyle.prototype.clear;

/** @type {string} */
RuntimeStyle.prototype.clip;

/** @type {string} */
RuntimeStyle.prototype.color;

/** @type {string} */
RuntimeStyle.prototype.content;

/** @type {string} */
RuntimeStyle.prototype.counterIncrement;

/** @type {string} */
RuntimeStyle.prototype.counterReset;

/** @type {string} */
RuntimeStyle.prototype.cssText;

/** @type {string} */
RuntimeStyle.prototype.cursor;

/** @type {string} */
RuntimeStyle.prototype.direction;

/** @type {string} */
RuntimeStyle.prototype.emptyCells;

/** @type {string} */
RuntimeStyle.prototype.font;

/** @type {string} */
RuntimeStyle.prototype.fontFamily;

/** @type {string} */
RuntimeStyle.prototype.fontSize;

/** @type {string} */
RuntimeStyle.prototype.fontSizeAdjust;

/** @type {string} */
RuntimeStyle.prototype.fontStretch;

/** @type {string} */
RuntimeStyle.prototype.fontStyle;

/** @type {string} */
RuntimeStyle.prototype.fontVariant;

/** @type {string} */
RuntimeStyle.prototype.fontWeight;

/** @type {string} */
RuntimeStyle.prototype.height;

/** @type {string} */
RuntimeStyle.prototype.imeMode;

/** @type {string} */
RuntimeStyle.prototype.layoutFlow;

/** @type {string} */
RuntimeStyle.prototype.layoutGrid;

/** @type {string} */
RuntimeStyle.prototype.layoutGridChar;

/** @type {string} */
RuntimeStyle.prototype.layoutGridLine;

/** @type {string} */
RuntimeStyle.prototype.layoutGridMode;

/** @type {string} */
RuntimeStyle.prototype.layoutGridType;

/** @type {string} */
RuntimeStyle.prototype.left;

/** @type {string} */
RuntimeStyle.prototype.letterSpacing;

/** @type {string} */
RuntimeStyle.prototype.lineBreak;

/** @type {string} */
RuntimeStyle.prototype.lineHeight;

/** @type {string} */
RuntimeStyle.prototype.listStyle;

/** @type {string} */
RuntimeStyle.prototype.listStyleImage;

/** @type {string} */
RuntimeStyle.prototype.listStylePosition;

/** @type {string} */
RuntimeStyle.prototype.listStyleType;

/** @type {string} */
RuntimeStyle.prototype.margin;

/** @type {string} */
RuntimeStyle.prototype.marginBottom;

/** @type {string} */
RuntimeStyle.prototype.marginLeft;

/** @type {string} */
RuntimeStyle.prototype.marginRight;

/** @type {string} */
RuntimeStyle.prototype.marginTop;

/** @type {string} */
RuntimeStyle.prototype.maxHeight;

/** @type {string} */
RuntimeStyle.prototype.maxWidth;

/** @type {string} */
RuntimeStyle.prototype.minHeight;

/** @type {string} */
RuntimeStyle.prototype.minWidth;

/** @type {string} */
RuntimeStyle.prototype.msBlockProgression;

/** @type {string} */
RuntimeStyle.prototype.msInterpolationMode;

/** @type {string} */
RuntimeStyle.prototype.msProgressAppearance;

/** @type {string} */
RuntimeStyle.prototype.opacity;

/** @type {string} */
RuntimeStyle.prototype.orphans;

/** @type {string} */
RuntimeStyle.prototype.outline;

/** @type {string} */
RuntimeStyle.prototype.outlineColor;

/** @type {string} */
RuntimeStyle.prototype.outlineStyle;

/** @type {string} */
RuntimeStyle.prototype.outlineWidth;

/** @type {string} */
RuntimeStyle.prototype.overflow;

/** @type {string} */
RuntimeStyle.prototype.overflowX;

/** @type {string} */
RuntimeStyle.prototype.overflowY;

/** @type {string} */
RuntimeStyle.prototype.padding;

/** @type {string} */
RuntimeStyle.prototype.paddingBottom;

/** @type {string} */
RuntimeStyle.prototype.paddingLeft;

/** @type {string} */
RuntimeStyle.prototype.paddingRight;

/** @type {string} */
RuntimeStyle.prototype.paddingTop;

/** @type {string} */
RuntimeStyle.prototype.pageBreakAfter;

/** @type {string} */
RuntimeStyle.prototype.pageBreakBefore;

/** @type {string} */
RuntimeStyle.prototype.pageBreakInside;

/** @type {string} */
RuntimeStyle.prototype.pixelBottom;

/** @type {string} */
RuntimeStyle.prototype.pixelHeight;

/** @type {string} */
RuntimeStyle.prototype.pixelLeft;

/** @type {string} */
RuntimeStyle.prototype.pixelRight;

/** @type {string} */
RuntimeStyle.prototype.pixelTop;

/** @type {string} */
RuntimeStyle.prototype.pixelWidth;

/** @type {string} */
RuntimeStyle.prototype.posBottom;

/** @type {string} */
RuntimeStyle.prototype.posHeight;

/** @type {string} */
RuntimeStyle.prototype.position;

/** @type {string} */
RuntimeStyle.prototype.posLeft;

/** @type {string} */
RuntimeStyle.prototype.posRight;

/** @type {string} */
RuntimeStyle.prototype.posTop;

/** @type {string} */
RuntimeStyle.prototype.posWidth;

/** @type {string} */
RuntimeStyle.prototype.quotes;

/** @type {string} */
RuntimeStyle.prototype.right;

/** @type {string} */
RuntimeStyle.prototype.rubyAlign;

/** @type {string} */
RuntimeStyle.prototype.rubyOverhang;

/** @type {string} */
RuntimeStyle.prototype.rubyPosition;

/** @type {string} */
RuntimeStyle.prototype.scrollbar3dLightColor;

/** @type {string} */
RuntimeStyle.prototype.scrollbarArrowColor;

/** @type {string} */
RuntimeStyle.prototype.scrollbarBaseColor;

/** @type {string} */
RuntimeStyle.prototype.scrollbarDarkShadowColor;

/** @type {string} */
RuntimeStyle.prototype.scrollbarFaceColor;

/** @type {string} */
RuntimeStyle.prototype.scrollbarHighlightColor;

/** @type {string} */
RuntimeStyle.prototype.scrollbarShadowColor;

/** @type {string} */
RuntimeStyle.prototype.scrollbarTrackColor;

/** @type {string} */
RuntimeStyle.prototype.styleFloat;

/** @type {string} */
RuntimeStyle.prototype.tableLayout;

/** @type {string} */
RuntimeStyle.prototype.textAlign;

/** @type {string} */
RuntimeStyle.prototype.textAlignLast;

/** @type {string} */
RuntimeStyle.prototype.textAutospace;

/** @type {string} */
RuntimeStyle.prototype.textDecoration;

/** @type {string} */
RuntimeStyle.prototype.textDecorationBlink;

/** @type {string} */
RuntimeStyle.prototype.textDecorationLineThrough;

/** @type {string} */
RuntimeStyle.prototype.textDecorationNone;

/** @type {string} */
RuntimeStyle.prototype.textDecorationOverline;

/** @type {string} */
RuntimeStyle.prototype.textDecorationUnderline;

/** @type {string} */
RuntimeStyle.prototype.textIndent;

/** @type {string} */
RuntimeStyle.prototype.textJustify;

/** @type {string} */
RuntimeStyle.prototype.textKashidaSpace;

/** @type {string} */
RuntimeStyle.prototype.textOverflow;

/** @type {string} */
RuntimeStyle.prototype.textTransform;

/** @type {string} */
RuntimeStyle.prototype.textUnderlinePosition;

/** @type {string} */
RuntimeStyle.prototype.top;

/** @type {string} */
RuntimeStyle.prototype.unicodeBidi;

/** @type {string} */
RuntimeStyle.prototype.verticalAlign;

/** @type {string} */
RuntimeStyle.prototype.visibility;

/** @type {string} */
RuntimeStyle.prototype.widows;

/** @type {string} */
RuntimeStyle.prototype.width;

/** @type {string} */
RuntimeStyle.prototype.wordBreak

/** @type {string} */
RuntimeStyle.prototype.wordSpacing;

/** @type {string} */
RuntimeStyle.prototype.wordWrap;

/** @type {string} */
RuntimeStyle.prototype.writingMode;

/** @type {string} */
RuntimeStyle.prototype.zIndex

/** @type {string} */
RuntimeStyle.prototype.zoom;

/**
 * @constructor
 */
function CurrentStyle()
{
	//
}

/** @type {string} */
CurrentStyle.prototype.accelerator;

/** @type {string} */
CurrentStyle.prototype.animation;

/** @type {string} */
CurrentStyle.prototype.animationDelay;

/** @type {string} */
CurrentStyle.prototype.animationDirection;

/** @type {string} */
CurrentStyle.prototype.animationDuration;

/** @type {string} */
CurrentStyle.prototype.animationFillMode;

/** @type {string} */
CurrentStyle.prototype.animationIterationCount;

/** @type {string} */
CurrentStyle.prototype.animationName;

/** @type {string} */
CurrentStyle.prototype.animationPlayState;

/** @type {string} */
CurrentStyle.prototype.animationTimingFunction;

/** @type {string} */
CurrentStyle.prototype.backfaceVisibility;

/** @type {string} */
CurrentStyle.prototype.background;

/** @type {string} */
CurrentStyle.prototype.backgroundAttachment;

/** @type {string} */
CurrentStyle.prototype.backgroundClip;

/** @type {string} */
CurrentStyle.prototype.backgroundColor;

/** @type {string} */
CurrentStyle.prototype.backgroundImage;

/** @type {string} */
CurrentStyle.prototype.backgroundOrigin;

/** @type {string} */
CurrentStyle.prototype.backgroundPosition;

/** @type {string} */
CurrentStyle.prototype.backgroundPositionX;

/** @type {string} */
CurrentStyle.prototype.backgroundPositionY;

/** @type {string} */
CurrentStyle.prototype.backgroundRepeat;

/** @type {string} */
CurrentStyle.prototype.backgroundSize;

/** @type {string} */
CurrentStyle.prototype.baselineShift;

/** @type {string} */
CurrentStyle.prototype.behavior;

/** @type {string} */
CurrentStyle.prototype.blockDirection;

/** @type {string} */
CurrentStyle.prototype.border;

/** @type {string} */
CurrentStyle.prototype.borderBottom;

/** @type {string} */
CurrentStyle.prototype.borderBottomColor;

/** @type {string} */
CurrentStyle.prototype.borderBottomLeftRadius;

/** @type {string} */
CurrentStyle.prototype.borderBottomRightRadius;

/** @type {string} */
CurrentStyle.prototype.borderBottomStyle;

/** @type {string} */
CurrentStyle.prototype.borderBottomWidth;

/** @type {string} */
CurrentStyle.prototype.borderCollapse;

/** @type {string} */
CurrentStyle.prototype.borderColor;

/** @type {string} */
CurrentStyle.prototype.borderLeft;

/** @type {string} */
CurrentStyle.prototype.borderLeftColor;

/** @type {string} */
CurrentStyle.prototype.borderLeftStyle;

/** @type {string} */
CurrentStyle.prototype.borderLeftWidth;

/** @type {string} */
CurrentStyle.prototype.borderRadius;

/** @type {string} */
CurrentStyle.prototype.borderRight;

/** @type {string} */
CurrentStyle.prototype.borderRightColor;

/** @type {string} */
CurrentStyle.prototype.borderRightStyle;

/** @type {string} */
CurrentStyle.prototype.borderRightWidth;

/** @type {string} */
CurrentStyle.prototype.borderSpacing;

/** @type {string} */
CurrentStyle.prototype.borderStyle;

/** @type {string} */
CurrentStyle.prototype.borderTop;

/** @type {string} */
CurrentStyle.prototype.borderTopColor;

/** @type {string} */
CurrentStyle.prototype.borderTopLeftRadius;

/** @type {string} */
CurrentStyle.prototype.borderTopRightRadius;

/** @type {string} */
CurrentStyle.prototype.borderTopStyle;

/** @type {string} */
CurrentStyle.prototype.borderTopWidth;

/** @type {string} */
CurrentStyle.prototype.borderWidth;

/** @type {string} */
CurrentStyle.prototype.bottom;

/** @type {string} */
CurrentStyle.prototype.boxShadow;

/** @type {string} */
CurrentStyle.prototype.boxSizing;

/** @type {string} */
CurrentStyle.prototype.breakAfter;

/** @type {string} */
CurrentStyle.prototype.breakBefore;

/** @type {string} */
CurrentStyle.prototype.breakInside;

/** @type {string} */
CurrentStyle.prototype.captionSide;

/** @type {string} */
CurrentStyle.prototype.clear;

/** @type {string} */
CurrentStyle.prototype.clip;

/** @type {string} */
CurrentStyle.prototype.clipBottom;

/** @type {string} */
CurrentStyle.prototype.clipLeft;

/** @type {string} */
CurrentStyle.prototype.clipPath;

/** @type {string} */
CurrentStyle.prototype.clipRight;

/** @type {string} */
CurrentStyle.prototype.clipTop;

/** @type {string} */
CurrentStyle.prototype.color;

/** @type {string} */
CurrentStyle.prototype.columnCount

/** @type {string} */
CurrentStyle.prototype.columnFill;

/** @type {string} */
CurrentStyle.prototype.columnGap;

/** @type {string} */
CurrentStyle.prototype.columnRule;

/** @type {string} */
CurrentStyle.prototype.columnRuleColor;

/** @type {string} */
CurrentStyle.prototype.columnRuleStyle;

/** @type {string} */
CurrentStyle.prototype.columnRuleWidth;

/** @type {string} */
CurrentStyle.prototype.columnSpan;

/** @type {string} */
CurrentStyle.prototype.columnWidth;

/** @type {string} */
CurrentStyle.prototype.constructor;

/** @type {string} */
CurrentStyle.prototype.content;

/** @type {string} */
CurrentStyle.prototype.counterIncrement;

/** @type {string} */
CurrentStyle.prototype.counterReset;

/** @type {string} */
CurrentStyle.prototype.cssFloat;

/** @type {string} */
CurrentStyle.prototype.cssText;

/** @type {string} */
CurrentStyle.prototype.cursor;

/** @type {string} */
CurrentStyle.prototype.direction;

/** @type {string} */
CurrentStyle.prototype.display;

/** @type {string} */
CurrentStyle.prototype.dominantBaseline;

/** @type {string} */
CurrentStyle.prototype.emptyCells;

/** @type {string} */
CurrentStyle.prototype.fill;

/** @type {string} */
CurrentStyle.prototype.fillOpacity;

/** @type {string} */
CurrentStyle.prototype.fillRule;

/** @type {string} */
CurrentStyle.prototype.filter;

/** @type {string} */
CurrentStyle.prototype.font;

/** @type {string} */
CurrentStyle.prototype.fontFamily;

/** @type {string} */
CurrentStyle.prototype.fontSize;

/** @type {string} */
CurrentStyle.prototype.fontSizeAdjust;

/** @type {string} */
CurrentStyle.prototype.fontStretch;

/** @type {string} */
CurrentStyle.prototype.fontStyle;

/** @type {string} */
CurrentStyle.prototype.fontVariant;

/** @type {string} */
CurrentStyle.prototype.fontWeight;

/** @type {string} */
CurrentStyle.prototype.fontWeight;

/** @type {string} */
CurrentStyle.prototype.glyphOrientationHorizontal;

/** @type {string} */
CurrentStyle.prototype.glyphOrientationVertical;

/** @type {string} */
CurrentStyle.prototype.hasLayout;

/** @type {string} */
CurrentStyle.prototype.height;

/** @type {string} */
CurrentStyle.prototype.imeMode;

/** @type {string} */
CurrentStyle.prototype.kerning;

/** @type {string} */
CurrentStyle.prototype.layoutFlow;

/** @type {string} */
CurrentStyle.prototype.layoutGrid;

/** @type {string} */
CurrentStyle.prototype.layoutGridChar;

/** @type {string} */
CurrentStyle.prototype.layoutGridLine;

/** @type {string} */
CurrentStyle.prototype.layoutGridMode;

/** @type {string} */
CurrentStyle.prototype.layoutGridType;

/** @type {string} */
CurrentStyle.prototype.left;

/** @type {string} */
CurrentStyle.prototype.length;

/** @type {string} */
CurrentStyle.prototype.letterSpacing;

/** @type {string} */
CurrentStyle.prototype.lineBreak;

/** @type {string} */
CurrentStyle.prototype.lineHeight;

/** @type {string} */
CurrentStyle.prototype.listStyle;

/** @type {string} */
CurrentStyle.prototype.listStyleImage;

/** @type {string} */
CurrentStyle.prototype.listStylePosition;

/** @type {string} */
CurrentStyle.prototype.listStyleType;

/** @type {string} */
CurrentStyle.prototype.margin;

/** @type {string} */
CurrentStyle.prototype.marginBottom;

/** @type {string} */
CurrentStyle.prototype.marginLeft;

/** @type {string} */
CurrentStyle.prototype.marginRight;

/** @type {string} */
CurrentStyle.prototype.marginTop;

/** @type {string} */
CurrentStyle.prototype.marker;

/** @type {string} */
CurrentStyle.prototype.markerEnd;

/** @type {string} */
CurrentStyle.prototype.markerMid;

/** @type {string} */
CurrentStyle.prototype.markerStart;

/** @type {string} */
CurrentStyle.prototype.mask;

/** @type {string} */
CurrentStyle.prototype.maxHeight;

/** @type {string} */
CurrentStyle.prototype.maxWidth;

/** @type {string} */
CurrentStyle.prototype.minHeight;

/** @type {string} */
CurrentStyle.prototype.minWidth;

/** @type {string} */
CurrentStyle.prototype.msBlockProgression;

/** @type {string} */
CurrentStyle.prototype.msBoxAlign;

/** @type {string} */
CurrentStyle.prototype.msBoxDirection;

/** @type {string} */
CurrentStyle.prototype.msBoxFlex;

/** @type {string} */
CurrentStyle.prototype.msBoxLineProgression;

/** @type {string} */
CurrentStyle.prototype.msBoxLines;

/** @type {string} */
CurrentStyle.prototype.msBoxOrdinalGroup;

/** @type {string} */
CurrentStyle.prototype.msBoxOrient;

/** @type {string} */
CurrentStyle.prototype.msGridColumn;

/** @type {string} */
CurrentStyle.prototype.msGridColumnAlign;

/** @type {string} */
CurrentStyle.prototype.msGridColumns;

/** @type {string} */
CurrentStyle.prototype.msGridColumnSpan;

/** @type {string} */
CurrentStyle.prototype.msGridRow;

/** @type {string} */
CurrentStyle.prototype.msGridRowAlign;

/** @type {string} */
CurrentStyle.prototype.msGridRows;

/** @type {string} */
CurrentStyle.prototype.msGridRowSpan;

/** @type {string} */
CurrentStyle.prototype.msInterpolationMode;

/** @type {string} */
CurrentStyle.prototype.msProgressAppearance;

/** @type {string} */
CurrentStyle.prototype.opacity;

/** @type {string} */
CurrentStyle.prototype.orphans;

/** @type {string} */
CurrentStyle.prototype.outline;

/** @type {string} */
CurrentStyle.prototype.outlineColor;

/** @type {string} */
CurrentStyle.prototype.outlineStyle;

/** @type {string} */
CurrentStyle.prototype.outlineWidth;

/** @type {string} */
CurrentStyle.prototype.overflow;

/** @type {string} */
CurrentStyle.prototype.overflowX;

/** @type {string} */
CurrentStyle.prototype.overflowY;

/** @type {string} */
CurrentStyle.prototype.padding;

/** @type {string} */
CurrentStyle.prototype.paddingBottom;

/** @type {string} */
CurrentStyle.prototype.paddingLeft;

/** @type {string} */
CurrentStyle.prototype.paddingRight;

/** @type {string} */
CurrentStyle.prototype.paddingTop;

/** @type {string} */
CurrentStyle.prototype.pageBreakAfter;

/** @type {string} */
CurrentStyle.prototype.pageBreakBefore;

/** @type {string} */
CurrentStyle.prototype.pageBreakInside;

/** @type {string} */
CurrentStyle.prototype.parentRule;

/** @type {string} */
CurrentStyle.prototype.perspective;

/** @type {string} */
CurrentStyle.prototype.perspectiveOrigin;

/** @type {string} */
CurrentStyle.prototype.pointerEvents;

/** @type {string} */
CurrentStyle.prototype.position;

/** @type {string} */
CurrentStyle.prototype.quotes;

/** @type {string} */
CurrentStyle.prototype.right;

/** @type {string} */
CurrentStyle.prototype.rubyAlign;

/** @type {string} */
CurrentStyle.prototype.rubyOverhang;

/** @type {string} */
CurrentStyle.prototype.rubyPosition;

/** @type {string} */
CurrentStyle.prototype.scrollbar3dLightColor;

/** @type {string} */
CurrentStyle.prototype.scrollbarArrowColor;

/** @type {string} */
CurrentStyle.prototype.scrollbarBaseColor;

/** @type {string} */
CurrentStyle.prototype.scrollbarDarkShadowColor;

/** @type {string} */
CurrentStyle.prototype.scrollbarFaceColor;

/** @type {string} */
CurrentStyle.prototype.scrollbarHighlightColor;

/** @type {string} */
CurrentStyle.prototype.scrollbarShadowColor;

/** @type {string} */
CurrentStyle.prototype.scrollbarTrackColor;

/** @type {string} */
CurrentStyle.prototype.stopColor;

/** @type {string} */
CurrentStyle.prototype.stopOpacity;

/** @type {string} */
CurrentStyle.prototype.stroke;

/** @type {string} */
CurrentStyle.prototype.strokeDasharray;

/** @type {string} */
CurrentStyle.prototype.strokeDashoffset;

/** @type {string} */
CurrentStyle.prototype.strokeLinecap;

/** @type {string} */
CurrentStyle.prototype.strokeLinejoin;

/** @type {string} */
CurrentStyle.prototype.strokeMiterlimit;

/** @type {string} */
CurrentStyle.prototype.strokeOpacity;

/** @type {string} */
CurrentStyle.prototype.strokeWidth;

/** @type {string} */
CurrentStyle.prototype.styleFloat;

/** @type {string} */
CurrentStyle.prototype.tableLayout;

/** @type {string} */
CurrentStyle.prototype.textAlign;

/** @type {string} */
CurrentStyle.prototype.textAlignLast;

/** @type {string} */
CurrentStyle.prototype.textAutospace;

/** @type {string} */
CurrentStyle.prototype.textDecoration;

/** @type {string} */
CurrentStyle.prototype.textIndent;

/** @type {string} */
CurrentStyle.prototype.textJustify;

/** @type {string} */
CurrentStyle.prototype.textKashidaSpace;

/** @type {string} */
CurrentStyle.prototype.textOverflow;

/** @type {string} */
CurrentStyle.prototype.textTransform;

/** @type {string} */
CurrentStyle.prototype.textUnderlinePosition;

/** @type {string} */
CurrentStyle.prototype.top;

/** @type {string} */
CurrentStyle.prototype.transform;

/** @type {string} */
CurrentStyle.prototype.transformOrigin;

/** @type {string} */
CurrentStyle.prototype.transformStyle;

/** @type {string} */
CurrentStyle.prototype.transition;

/** @type {string} */
CurrentStyle.prototype.transitionDelay;

/** @type {string} */
CurrentStyle.prototype.transitionDuration;

/** @type {string} */
CurrentStyle.prototype.transitionProperty;

/** @type {string} */
CurrentStyle.prototype.transitionTimingFunction;

/** @type {string} */
CurrentStyle.prototype.unicodeBidi;

/** @type {string} */
CurrentStyle.prototype.verticalAlign;

/** @type {string} */
CurrentStyle.prototype.visibility;

/** @type {string} */
CurrentStyle.prototype.whiteSpace;

/** @type {string} */
CurrentStyle.prototype.widows;

/** @type {string} */
CurrentStyle.prototype.width;

/** @type {string} */
CurrentStyle.prototype.wordBreak;

/** @type {string} */
CurrentStyle.prototype.wordSpacing;

/** @type {string} */
CurrentStyle.prototype.wordWrap;

/** @type {string} */
CurrentStyle.prototype.writingMode;

/** @type {string} */
CurrentStyle.prototype.zIndex;

/** @type {string} */
CurrentStyle.prototype.zoom;

/**
 * @constructor
 * @extends {Array}
 */
function DocumentNamespaces()
{

}

/**
 * @param {string} prefix
 * @param {string} namespace
 * @param {string=} behavior
 */
DocumentNamespaces.prototype.add = function (prefix, namespace, behavior) {};

/**
 * @param {number} index
 * @return {Namespace}
 */
DocumentNamespaces.prototype.item = function (index) {};

/**
 * @see http://msdn.microsoft.com/en-us/library/ms535854(v=vs.85).aspx
 * @constructor
 */
function Namespace()
{

}

/** @type {string} */
Namespace.prototype.name;

/** @type {string} */
Namespace.prototype.readyState;

/** @type {string} */
Namespace.prototype.urn;
