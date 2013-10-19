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
 * @fileoverview Definitions for IE's custom CSS properties, as defined here:
 * http://msdn.microsoft.com/en-us/library/aa768661(VS.85).aspx
 *
 * This page is also useful for the IDL definitions:
 * http://source.winehq.org/source/include/mshtml.idl
 *
 * @externs
 * @author nicksantos@google.com
 */

/** @type {Element} */
StyleSheet.prototype.owningElement;

/** @type {boolean} */
StyleSheet.prototype.readOnly;

/** @type {StyleSheetList} */
StyleSheet.prototype.imports;

/** @type {string} */
StyleSheet.prototype.id;

/**
 * @param {string} bstrURL
 * @param {number} lIndex
 * @return {number}
 */
StyleSheet.prototype.addImport;

/**
 * @param {string} bstrSelector
 * @param {string} bstrStyle
 * @param {number=} opt_iIndex
 * @return {number}
 * @see http://msdn.microsoft.com/en-us/library/aa358796%28v=vs.85%29.aspx
 */
StyleSheet.prototype.addRule;

/**
 * @param {number} lIndex
 */
StyleSheet.prototype.removeImport;

/**
 * @param {number} lIndex
 */
StyleSheet.prototype.removeRule;

/** @type {string} */
StyleSheet.prototype.cssText;

/** @type {CSSRuleList} */
StyleSheet.prototype.rules;

// StyleSheet methods

/**
 * @param {string} propName
 * @return {string}
 * @see http://msdn.microsoft.com/en-us/library/aa358797(VS.85).aspx
 */
StyleSheet.prototype.getExpression;

/**
 * @param {string} name
 * @param {string} expression
 * @return {undefined}
 * @see http://msdn.microsoft.com/en-us/library/ms531196(VS.85).aspx
 */
StyleSheet.prototype.setExpression;

/**
 * @param {string} expression
 * @return {undefined}
 * @see http://msdn.microsoft.com/en-us/library/aa358798(VS.85).aspx
 */
StyleSheet.prototype.removeExpression;

/**
 * @param {string} name
 * @param {number=} opt_flags
 * @return {string|number|boolean|null}
 * @see http://msdn.microsoft.com/en-us/library/ms536429(VS.85).aspx
 */
CSSStyleDeclaration.prototype.getAttribute = function(name, opt_flags) {};

/**
 * @param {string} name
 * @return {string|number|boolean|null}
 * @see http://msdn.microsoft.com/en-us/library/aa358797(VS.85).aspx
 */
CSSStyleDeclaration.prototype.getExpression = function(name) {};

/**
 * @param {string} name
 * @param {number=} opt_flags
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/ms536696(VS.85).aspx
 */
CSSStyleDeclaration.prototype.removeAttribute =
    function(name, opt_flags) {};

/**
 * @param {string} name
 * @return {boolean}
 * @see http://msdn.microsoft.com/en-us/library/aa358798(VS.85).aspx
 */
CSSStyleDeclaration.prototype.removeExpression = function(name) {};

/**
 * @param {string} name
 * @param {*} value
 * @param {number=} opt_flags
 * @see http://msdn.microsoft.com/en-us/library/ms536739(VS.85).aspx
 */
CSSStyleDeclaration.prototype.setAttribute = function(name, value, opt_flags) {};

/**
 * @param {string} name
 * @param {string} expr
 * @param {string=} opt_language
 * @return {undefined}
 * @see http://msdn.microsoft.com/en-us/library/ms531196(VS.85).aspx
 */
CSSStyleDeclaration.prototype.setExpression =
    function(name, expr, opt_language) {};


// IE-only CSS style names.

/** @type {string} */ CSS2Properties.prototype.backgroundPositionX;

/** @type {string} */ CSS2Properties.prototype.backgroundPositionY;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms533883.aspx
 */
CSS2Properties.prototype.imeMode;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms534176(VS.85).aspx
 */
CSS2Properties.prototype.msInterpolationMode;

/** @type {string} */ CSS2Properties.prototype.overflowX;

/** @type {string} */ CSS2Properties.prototype.overflowY;

/** @type {number} */ CSS2Properties.prototype.pixelWidth;

/** @type {number} */ CSS2Properties.prototype.pixelHeight;

/** @type {number} */ CSS2Properties.prototype.pixelLeft;

/** @type {number} */ CSS2Properties.prototype.pixelTop;

/** @type {string} */ CSS2Properties.prototype.styleFloat;

/**
 * @type {string|number}
 * @see http://msdn.microsoft.com/en-us/library/ms535169(VS.85).aspx
 */
CSS2Properties.prototype.zoom;

/**
 * @type {string}
 * @see http://msdn.microsoft.com/en-us/library/ms535153(VS.85).aspx
 */
CSS2Properties.prototype.writingMode;

/**
 * IE-specific extensions.
 * @see http://blogs.msdn.com/b/ie/archive/2008/09/08/microsoft-css-vendor-extensions.aspx
 */

/** @type {string} */
CSS2Properties.prototype.MsAccelerator;

/** @type {string} */
CSS2Properties.prototype.MsBackgroundPositionX;

/** @type {string} */
CSS2Properties.prototype.MsBackgroundPositionY;

/** @type {string} */
CSS2Properties.prototype.MsBehavior;

/** @type {string} */
CSS2Properties.prototype.MsBlockProgression;

/** @type {string} */
CSS2Properties.prototype.MsFilter;

/** @type {string} */
CSS2Properties.prototype.MsImeMode;

/** @type {string} */
CSS2Properties.prototype.MsLayoutGrid;

/** @type {string} */
CSS2Properties.prototype.MsLayoutGridChar;

/** @type {string} */
CSS2Properties.prototype.MsLayoutGridLine;

/** @type {string} */
CSS2Properties.prototype.MsLayoutGridMode;

/** @type {string} */
CSS2Properties.prototype.MsLayoutGridType;

/** @type {string} */
CSS2Properties.prototype.MsLineBreak;

/** @type {string} */
CSS2Properties.prototype.MsLineGridMode;

/** @type {string} */
CSS2Properties.prototype.MsInterpolationMode;

/** @type {string} */
CSS2Properties.prototype.MsOverflowX;

/** @type {string} */
CSS2Properties.prototype.MsOverflowY;

/** @type {string} */
CSS2Properties.prototype.MsScrollbar3dlightColor;

/** @type {string} */
CSS2Properties.prototype.MsScrollbarArrowColor;

/** @type {string} */
CSS2Properties.prototype.MsScrollbarBaseColor;

/** @type {string} */
CSS2Properties.prototype.MsScrollbarDarkshadowColor;

/** @type {string} */
CSS2Properties.prototype.MsScrollbarFaceColor;

CSS2Properties.prototype.MsScrollbarHighlightColor;

/** @type {string} */
CSS2Properties.prototype.MsScrollbarShadowColor;

/** @type {string} */
CSS2Properties.prototype.MsScrollbarTrackColor;

/** @type {string} */
CSS2Properties.prototype.MsTextAlignLast;

/** @type {string} */
CSS2Properties.prototype.MsTextAutospace;

/** @type {string} */
CSS2Properties.prototype.MsTextJustify;

/** @type {string} */
CSS2Properties.prototype.MsTextKashidaSpace;

/** @type {string} */
CSS2Properties.prototype.MsTextOverflow;

/** @type {string} */
CSS2Properties.prototype.MsTextUnderlinePosition;

/** @type {string} */
CSS2Properties.prototype.MsWordBreak;

/** @type {string} */
CSS2Properties.prototype.MsWordWrap;

/** @type {string} */
CSS2Properties.prototype.MsWritingMode;

/** @type {string} */
CSS2Properties.prototype.MsZoom;

// See: http://msdn.microsoft.com/en-us/library/windows/apps/Hh702466.aspx

/** @type {string} */
CSS2Properties.prototype.msContentZooming;

/** @type {string} */
CSS2Properties.prototype.msTouchAction;

/** @type {string} */
CSS2Properties.prototype.msTransform;

/** @type {string} */
CSS2Properties.prototype.msTransition;
