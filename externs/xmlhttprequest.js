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
 * @implements {EventTarget}
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
