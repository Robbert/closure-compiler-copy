/*
 * Copyright 2009 Closure Compiler Authors
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
 * @fileoverview Definitions for ECMAScript 6.
 * @see https://developer.mozilla.org/en-US/docs/JavaScript/ECMAScript_6_support_in_Mozilla
 * @externs
 */

/**
 * @constructor
 * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Map
 */
function Map()
{
	
}

/**
 * @param {*} key
 * @param {*} value
 */
Map.prototype.set = function (key, value) {};

/**
 * @param {*} key
 */
Map.prototype.get = function (key) {};

/**
 * @param {*} key
 * @return {boolean}
 */
Map.prototype.has = function (key) {};

/**
 * @param {*} key
 * @return {boolean} Will return false
 */
Map.prototype.delete = function (key) {};

Map.prototype.clear = function () {};

/**
 * In Firefox 18 and earlier .size was a method.
 * Map.prototype.size = function (key) {};
 *
 * @type {number}
 */
Map.prototype.size;