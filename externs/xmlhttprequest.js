/*
 * Copyright 2008 Closure Compiler Authors
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
 * @fileoverview Definitions for W3C's XMLHttpRequest specifications.
 * 
 * @see http://www.w3.org/TR/XMLHttpRequest/
 * @see http://www.w3.org/TR/XMLHttpRequest2/
 *
 * @externs
 */

/**
 * From http://www.w3.org/TR/XMLHttpRequest/
 *
 * (Draft)
 *
 * The XMLHttpRequest Object specification defines an API that provides
 * scripted client functionality for transferring data between a client and a
 * server.
 *
 * @constructor
 * @extends {XMLHttpRequestEventTarget}
 * @see http://www.w3.org/TR/XMLHttpRequest/#xmlhttprequest-object
 */
function XMLHttpRequest() {}

/** @override */
XMLHttpRequest.prototype.addEventListener =
    function(type, listener, useCapture) {};

/** @override */
XMLHttpRequest.prototype.removeEventListener =
    function(type, listener, useCapture) {};

/** @override */
XMLHttpRequest.prototype.dispatchEvent = function(evt) {};

/**
 * @param {string} method
 * @param {string} url
 * @param {?boolean=} opt_async
 * @param {?string=} opt_user
 * @param {?string=} opt_password
 * @return {undefined}
 * @see http://www.w3.org/TR/XMLHttpRequest/#open
 */
XMLHttpRequest.prototype.open = function(method, url, opt_async, opt_user,
    opt_password) {};

/**
 * @param {string} header
 * @param {string} value
 * @return {undefined}
 * @see http://www.w3.org/TR/XMLHttpRequest/#setrequestheader
 */
XMLHttpRequest.prototype.setRequestHeader = function(header, value) {};

/**
 * @param {ArrayBuffer|Blob|Document|FormData|string=} opt_data
 * @return {undefined}
 * @see http://www.w3.org/TR/XMLHttpRequest/#send
 * @see http://dev.w3.org/2006/webapi/XMLHttpRequest-2/#the-send-method
 */
XMLHttpRequest.prototype.send = function(opt_data) {};

/**
 * @return {undefined}
 * @see http://www.w3.org/TR/XMLHttpRequest/#abort
 */
XMLHttpRequest.prototype.abort = function() {};

/**
 * @return {string}
 * @see http://www.w3.org/TR/XMLHttpRequest/#getallresponseheaders
 */
XMLHttpRequest.prototype.getAllResponseHeaders = function() {};

/**
 * @param {string} header
 * @return {string}
 * @see http://www.w3.org/TR/XMLHttpRequest/#getresponseheader
 */
XMLHttpRequest.prototype.getResponseHeader = function(header) {};

/**
 * @type {?string}
 * @see http://www.w3.org/TR/XMLHttpRequest/#responsetext
 */
XMLHttpRequest.prototype.responseText;

/**
 * @type {boolean}
 * @see http://dev.w3.org/2006/webapi/XMLHttpRequest-2/#withcredentials
 */
XMLHttpRequest.prototype.withCredentials;

/**
 * @type {XMLHttpRequestUpload}
 * @see http://dev.w3.org/2006/webapi/XMLHttpRequest-2/#the-upload-attribute
 */
XMLHttpRequest.prototype.upload;

/**
 * @param {string} mimeType The mime type to override with.
 */
XMLHttpRequest.prototype.overrideMimeType = function(mimeType) {};

/**
 * @type {string}
 * @see http://dev.w3.org/2006/webapi/XMLHttpRequest-2/#the-responsetype-attribute
 */
XMLHttpRequest.prototype.responseType;

/**
 * @type {*}
 * @see http://dev.w3.org/2006/webapi/XMLHttpRequest-2/#the-responsetype-attribute
 */
XMLHttpRequest.prototype.response;


/**
 * @type {ArrayBuffer}
 * Implemented as a draft spec in Firefox 4 as the way to get a requested array
 * buffer from an XMLHttpRequest.
 * @see https://developer.mozilla.org/En/Using_XMLHttpRequest#Receiving_binary_data_using_JavaScript_typed_arrays
 */
XMLHttpRequest.prototype.mozResponseArrayBuffer;

/**
 * @type {?Document}
 * @see http://www.w3.org/TR/XMLHttpRequest/#responsexml
 */
XMLHttpRequest.prototype.responseXML;

/**
 * @type {number}
 * @see http://www.w3.org/TR/XMLHttpRequest/#readystate
 */
XMLHttpRequest.prototype.readyState;

/**
 * @type {number}
 * @see http://www.w3.org/TR/XMLHttpRequest/#status
 */
XMLHttpRequest.prototype.status;

/**
 * @type {string}
 * @see http://www.w3.org/TR/XMLHttpRequest/#statustext
 */
XMLHttpRequest.prototype.statusText;

/**
 * @type {Function}
 * @see http://www.w3.org/TR/XMLHttpRequest/#onreadystatechange
 */
XMLHttpRequest.prototype.onreadystatechange;


/**
 * XMLHttpRequestEventTarget defines events for checking the status of a data
 * transfer between a client and a server. This should be a common base class
 * for XMLHttpRequest and XMLHttpRequestUpload.
 *
 * @constructor
 * @implements {EventTarget}
 * @see http://www.w3.org/TR/XMLHttpRequest2/#xmlhttprequesteventtarget
 */
function XMLHttpRequestEventTarget() {}

/** @override */
XMLHttpRequestEventTarget.prototype.addEventListener = function(
    type, listener, useCapture) {};

/** @override */
XMLHttpRequestEventTarget.prototype.removeEventListener = function(
    type, listener, useCapture) {};

/** @override */
XMLHttpRequestEventTarget.prototype.dispatchEvent = function(evt) {};

/**
 * An event target to track the status of an upload.
 *
 * @constructor
 * @extends {XMLHttpRequestEventTarget}
 * @see http://www.w3.org/TR/XMLHttpRequest2/#xmlhttprequestupload
 */
function XMLHttpRequestUpload() {}

/**
 * The FormData object represents an ordered collection of entries. Each entry
 * has a name and value.
 *
 * @param {?Element=} opt_form An optional form to use for constructing the form
 *     data set.
 * @constructor
 * @see http://www.w3.org/TR/XMLHttpRequest2/#the-formdata-interface
 */
function FormData(opt_form) {}

/**
 * @param {string} name
 * @param {Blob|string} value
 */
FormData.prototype.append = function(name, value) {};
