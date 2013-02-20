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
 * @fileoverview Definitions for W3C's CSS specification
 *  The whole file has been fully type annotated.
 *  http://www.w3.org/TR/DOM-Level-2-Style/css.html
 * @externs
 *
 * TODO(nicksantos): When there are no more occurrences of w3c_range.js and
 * gecko_dom.js being included directly in BUILD files, bug dbeam to split the
 * bottom part of this file into a separate externs.
 */

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet
 */
function StyleSheet() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-type
 */
StyleSheet.prototype.type;

/**
 * @type {boolean}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-disabled
 */
StyleSheet.prototype.disabled;

/**
 * @type {Node}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-owner
 */
StyleSheet.prototype.ownerNode;

/**
 * @type {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet
 */
StyleSheet.prototype.parentStyleSheet;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-href
 */
StyleSheet.prototype.href;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-title
 */
StyleSheet.prototype.title;

/**
 * @type {MediaList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-media
 */
StyleSheet.prototype.media;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheetList
 */
function StyleSheetList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheetList-length
 */
StyleSheetList.prototype.length;

/**
 * @param {number} index
 * @return {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheetList-item
 */
StyleSheetList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList
 */
function MediaList() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList-mediaText
 */
MediaList.prototype.mediaText;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList-length
 */
MediaList.prototype.length;

/**
 * @param {number} index
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-MediaList-item
 */
MediaList.prototype.item = function(index) {};

/**
 * @interface
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-LinkStyle
 */
function LinkStyle() {}

/**
 * @type {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-LinkStyle-sheet
 */
LinkStyle.prototype.sheet;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-DocumentStyle
 */
function DocumentStyle() {}

/**
 * @type {StyleSheetList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet-DocumentStyle-styleSheets
 */
DocumentStyle.prototype.styleSheets;

/**
 * @constructor
 * @extends {StyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
 */
function CSSStyleSheet() {}

/**
 * @type {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-ownerRule
 */
CSSStyleSheet.prototype.ownerRule;

/**
 * @type {CSSRuleList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-cssRules
 */
CSSStyleSheet.prototype.cssRules;

/**
 * @param {string} rule
 * @param {number} index
 * @return {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
 */
CSSStyleSheet.prototype.insertRule = function(rule, index) {};

/**
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
 */
CSSStyleSheet.prototype.deleteRule = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRuleList
 */
function CSSRuleList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRuleList-length
 */
CSSRuleList.prototype.length;

/**
 * @param {number} index
 * @return {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRuleList-item
 */
CSSRuleList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
 */
function CSSRule() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.prototype.type;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-cssText
 */
CSSRule.prototype.cssText;

/**
 * @type {CSSStyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-sheet
 */
CSSRule.prototype.parentStyleSheet;

/**
 * @type {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-parentRule
 */
CSSRule.prototype.parentRule;

/**
 * Indicates that the rule is a {@see CSSUnknownRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.UNKNOWN_RULE = 0;

/**
 * Indicates that the rule is a {@see CSSStyleRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.STYLE_RULE = 1;

/**
 * Indicates that the rule is a {@see CSSCharsetRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.CHARSET_RULE = 2;

/**
 * Indicates that the rule is a {@see CSSImportRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.IMPORT_RULE = 3;

/**
 * Indicates that the rule is a {@see CSSMediaRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.MEDIA_RULE = 4;

/**
 * Indicates that the rule is a {@see CSSFontFaceRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.FONT_FACE_RULE = 5;

/**
 * Indicates that the rule is a {@see CSSPageRule}.
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule-ruleType
 */
CSSRule.PAGE_RULE = 6;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
 */
function CSSStyleRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule-selectorText
 */
CSSStyleRule.prototype.selectorText;

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule-style
 */
CSSStyleRule.prototype.style;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
 */
function CSSMediaRule() {}

/**
 * @type {MediaList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-mediaTypes
 */
CSSMediaRule.prototype.media;

/**
 * @type {CSSRuleList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-cssRules
 */
CSSMediaRule.prototype.cssRules;

/**
 * @param {string} rule
 * @param {number} index
 * @return {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-insertRule
 */
CSSMediaRule.prototype.insertRule = function(rule, index) {};

/**
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule-deleteRule
 */
CSSMediaRule.prototype.deleteRule = function(index) {};

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSFontFaceRule
 */
function CSSFontFaceRule() {}

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSFontFaceRule-style
 */
CSSFontFaceRule.prototype.style;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPageRule
 */
function CSSPageRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPageRule-name
 */
CSSPageRule.prototype.selectorText;

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPageRule-style
 */
CSSPageRule.prototype.style;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
 */
function CSSImportRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule-href
 */
CSSImportRule.prototype.href;

/**
 * @type {MediaList}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule-media
 */
CSSImportRule.prototype.media;

/**
 * @type {CSSStyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule-styleSheet
 */
CSSImportRule.prototype.styleSheet;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSCharsetRule
 */
function CSSCharsetRule() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSCharsetRule-encoding
 */
CSSCharsetRule.prototype.encoding;

/**
 * @constructor
 * @extends {CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSUnknownRule
 */
function CSSUnknownRule() {}

/**
 * @constructor
 * @extends {CSS2Properties}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
 * @see http://dev.w3.org/csswg/cssom/#the-cssstyledeclaration-interface
 */
function CSSStyleDeclaration() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-cssText
 * @see http://dev.w3.org/csswg/cssom/#widl-CSSStyleDeclaration-cssText
 */
CSSStyleDeclaration.prototype.cssText;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-length
 * @see http://dev.w3.org/csswg/cssom/#widl-CSSStyleDeclaration-length
 */
CSSStyleDeclaration.prototype.length;

/**
 * @type {?CSSRule}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-parentRule
 */
CSSStyleDeclaration.prototype.parentRule = null;

/**
 * @param {string} propertyName
 * @return {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyCSSValue
 */

/**
 * In Mozilla only supported via getComputedStyle
 *
 * @param {string} propertyName
 * @return {?CSSPrimitiveValue} Returns null when not obtained via getComputedStyle
 * @see https://developer.mozilla.org/en-US/docs/DOM/CSSStyleDeclaration
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyCSSValue
 */
CSSStyleDeclaration.prototype.getPropertyCSSValue = function(propertyName) {};

/**
 * @param {string} propertyName
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyPriority
 */
CSSStyleDeclaration.prototype.getPropertyPriority = function(propertyName) {};

/**
 * @param {string} propertyName
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
 */
CSSStyleDeclaration.prototype.getPropertyValue = function(propertyName) {};

/**
 * @param {number} index
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-item
 * @see http://dev.w3.org/csswg/cssom/#widl-CSSStyleDeclaration-item-DOMString-unsigned-long-index
 */
CSSStyleDeclaration.prototype.item = function(index) {};

/**
 * @param {string} propertyName
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
 */
CSSStyleDeclaration.prototype.removeProperty = function(propertyName) {};

/**
 * @param {string} propertyName
 * @param {string} value
 * @param {string} priority
 * @return {undefined}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
 */
CSSStyleDeclaration.prototype.setProperty = function(propertyName, value, priority) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
 */
function CSSValue() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-cssText
 */
CSSValue.prototype.cssText;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-cssValueType
 */
CSSValue.prototype.cssValueType;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_INHERIT = 0;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_PRIMITIVE_VALUE = 1;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_VALUE_LIST = 2;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue-types
 */
CSSValue.CSS_CUSTOM = 3;

/**
 * @constructor
 * @extends {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
function CSSPrimitiveValue() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.prototype.primitiveType;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_UNKNOWN = 0;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_NUMBER = 1;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PERCENTAGE = 2;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_EMS = 3;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_EXS = 4;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PX = 5;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_CM = 6;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_MM = 7;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_IN = 8;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PT = 9;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_PC = 10;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_DEG = 11;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_RAD = 12;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_GRAD = 13;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_MS = 14;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_S = 15;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_HZ = 16;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_KHZ = 17;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_DIMENSION = 18;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_STRING = 19;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_URI = 20;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_IDENT = 21;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_ATTR = 22;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_COUNTER = 23;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_RECT = 24;

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue
 */
CSSPrimitiveValue.CSS_RGBCOLOR = 25;

/**
 * @return {Counter}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getCounterValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getCounterValue = function() {};

/**
 * @param {number} unitType
 * @return {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getFloatValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getFloatValue = function(unitType) {};

/**
 * @return {RGBColor}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getRGBColorValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getRGBColorValue = function() {};

/**
 * @return {Rect}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getRectValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getRectValue = function() {};

/**
 * @return {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-getStringValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR}
 */
CSSPrimitiveValue.prototype.getStringValue = function() {};

/**
 * @param {number} unitType
 * @param {number} floatValue
 * @return {undefined}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-setFloatValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR},
 *                      {@see DomException.NO_MODIFICATION_ALLOWED_ERR}
 */
CSSPrimitiveValue.prototype.setFloatValue = function(unitType, floatValue) {};

/**
 * @param {number} stringType
 * @param {string} stringValue
 * @return {undefined}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-setStringValue
 * @throws DOMException {@see DomException.INVALID_ACCESS_ERR},
 *                      {@see DomException.NO_MODIFICATION_ALLOWED_ERR}
 */
CSSPrimitiveValue.prototype.setStringValue = function(stringType, stringValue) {};

/**
 * @constructor
 * @extends {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValueList
 */
function CSSValueList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValueList-length
 */
CSSValueList.prototype.length;

/**
 * @param {number} index
 * @return {CSSValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValueList-item
 */
CSSValueList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor
 */
function RGBColor() {}

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor-red
 */
RGBColor.prototype.red;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor-green
 */
RGBColor.prototype.green;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-RGBColor-blue
 */
RGBColor.prototype.blue;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect
 */
function Rect() {}

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-top
 */
Rect.prototype.top;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-right
 */
Rect.prototype.right;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-bottom
 */
Rect.prototype.bottom;

/**
 * @type {CSSPrimitiveValue}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Rect-left
 */
Rect.prototype.left;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter
 */
function Counter() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter-identifier
 */
Counter.prototype.identifier;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter-listStyle
 */
Counter.prototype.listStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-Counter-separator
 */
Counter.prototype.separator;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ViewCSS
 */
function ViewCSS() {}

/**
 * @param {Element} elt
 * @param {?string} pseudoElt
 * @return {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle
 */
ViewCSS.prototype.getComputedStyle = function(elt, pseudoElt) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DocumentCSS
 */
function DocumentCSS() {}

/**
 * @param {Element} elt
 * @param {string} pseudoElt
 * @return {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DocumentCSS-getOverrideStyle
 */
DocumentCSS.prototype.getOverrideStyle = function(elt, pseudoElt) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DOMImplementationCSS
 */
function DOMImplementationCSS() {}

/**
 * @param {string} title
 * @param {string} media
 * @return {CSSStyleSheet}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-DOMImplementationCSS-createCSSStyleSheet
 * @throws DOMException {@see DomException.SYNTAX_ERR}
 */
DOMImplementationCSS.prototype.createCSSStyleSheet = function(title, media) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle
 */
function ElementCSSInlineStyle() {}

/**
 * @type {CSSStyleDeclaration}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle-style
 */
ElementCSSInlineStyle.prototype.style;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties
 */
function CSS2Properties() {}

// CSS 2 properties

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-azimuth
 */
CSS2Properties.prototype.azimuth;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-background
 */
CSS2Properties.prototype.background;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-backgroundAttachment
 */
CSS2Properties.prototype.backgroundAttachment;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-backgroundColor
 */
CSS2Properties.prototype.backgroundColor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-backgroundImage
 */
CSS2Properties.prototype.backgroundImage;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-backgroundPosition
 */
CSS2Properties.prototype.backgroundPosition;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-backgroundRepeat
 */
CSS2Properties.prototype.backgroundRepeat;

/**
 * @implicitCast
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-border
 */
CSS2Properties.prototype.border;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderCollapse
 */
CSS2Properties.prototype.borderCollapse;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderColor
 */
CSS2Properties.prototype.borderColor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderSpacing
 */
CSS2Properties.prototype.borderSpacing;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSPrimitiveValue-borderStyle
 */
CSS2Properties.prototype.borderStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderTop
 */
CSS2Properties.prototype.borderTop;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderRight
 */
CSS2Properties.prototype.borderRight;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderBottom
 */
CSS2Properties.prototype.borderBottom;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderLeft
 */
CSS2Properties.prototype.borderLeft;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderTopColor
 */
CSS2Properties.prototype.borderTopColor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderRightColor
 */
CSS2Properties.prototype.borderRightColor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderBottomColor
 */
CSS2Properties.prototype.borderBottomColor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderLeftColor
 */
CSS2Properties.prototype.borderLeftColor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderTopStyle
 */
CSS2Properties.prototype.borderTopStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderRightStyle
 */
CSS2Properties.prototype.borderRightStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderBottomStyle
 */
CSS2Properties.prototype.borderBottomStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderLeftStyle
 */
CSS2Properties.prototype.borderLeftStyle;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderTopWidth
 */
CSS2Properties.prototype.borderTopWidth;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderRightWidth
 */
CSS2Properties.prototype.borderRightWidth;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderBottomWidth
 */
CSS2Properties.prototype.borderBottomWidth;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderLeftWidth
 */
CSS2Properties.prototype.borderLeftWidth;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-borderWidth
 */
CSS2Properties.prototype.borderWidth;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-bottom
 */
CSS2Properties.prototype.bottom;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-captionSide
 */
CSS2Properties.prototype.captionSide;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-clear
 */
CSS2Properties.prototype.clear;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-clip
 */
CSS2Properties.prototype.clip;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-color
 */
CSS2Properties.prototype.color;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-content
 */
CSS2Properties.prototype.content;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-counterIncrement
 */
CSS2Properties.prototype.counterIncrement;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-counterReset
 */
CSS2Properties.prototype.counterReset;

/**
 * This is not an official part of the W3C spec. In practice, this is a settable
 * property that works cross-browser. It is used in goog.dom.setProperties() and
 * needs to be extern'd so the --disambiguate_properties JS compiler pass works.
 * @type {string}
 */
CSS2Properties.prototype.cssText;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-cue
 */
CSS2Properties.prototype.cue;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-cueAfter
 */
CSS2Properties.prototype.cueAfter;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-cueBefore
 */
CSS2Properties.prototype.cueBefore;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-cursor
 */
CSS2Properties.prototype.cursor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-direction
 */
CSS2Properties.prototype.direction;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-display
 */
CSS2Properties.prototype.display;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-elevation
 */
CSS2Properties.prototype.elevation;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-emptyCells
 */
CSS2Properties.prototype.emptyCells;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-cssFloat
 */
CSS2Properties.prototype.cssFloat;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-font
 */
CSS2Properties.prototype.font;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-fontFamily
 */
CSS2Properties.prototype.fontFamily;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-fontSize
 */
CSS2Properties.prototype.fontSize;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-fontSizeAdjust
 */
CSS2Properties.prototype.fontSizeAdjust;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-fontStretch
 */
CSS2Properties.prototype.fontStretch;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-fontStyle
 */
CSS2Properties.prototype.fontStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-fontVariant
 */
CSS2Properties.prototype.fontVariant;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-fontWeight
 */
CSS2Properties.prototype.fontWeight;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-height
 */
CSS2Properties.prototype.height;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-left
 */
CSS2Properties.prototype.left;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-letterSpacing
 */
CSS2Properties.prototype.letterSpacing;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-lineHeight
 */
CSS2Properties.prototype.lineHeight;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-listStyle
 */
CSS2Properties.prototype.listStyle;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-listStyleImage
 */
CSS2Properties.prototype.listStyleImage;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-listStylePosition
 */
CSS2Properties.prototype.listStylePosition;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-listStyleType
 */
CSS2Properties.prototype.listStyleType;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-margin
 */
CSS2Properties.prototype.margin;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-marginTop
 */
CSS2Properties.prototype.marginTop;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-marginRight
 */
CSS2Properties.prototype.marginRight;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-marginBottom
 */
CSS2Properties.prototype.marginBottom;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-marginLeft
 */
CSS2Properties.prototype.marginLeft;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-markerOffset
 */
CSS2Properties.prototype.markerOffset;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-marks
 */
CSS2Properties.prototype.marks;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-maxHeight
 */
CSS2Properties.prototype.maxHeight;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-maxWidth
 */
CSS2Properties.prototype.maxWidth;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-minHeight
 */
CSS2Properties.prototype.minHeight;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-minWidth
 */
CSS2Properties.prototype.minWidth;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-orphans
 */
CSS2Properties.prototype.orphans;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-outline
 */
CSS2Properties.prototype.outline;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-outlineColor
 */
CSS2Properties.prototype.outlineColor;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-outlineStyle
 */
CSS2Properties.prototype.outlineStyle;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-outlineWidth
 */
CSS2Properties.prototype.outlineWidth;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-overflow
 */
CSS2Properties.prototype.overflow;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-padding
 */
CSS2Properties.prototype.padding;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-paddingTop
 */
CSS2Properties.prototype.paddingTop;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-paddingRight
 */
CSS2Properties.prototype.paddingRight;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-paddingBottom
 */
CSS2Properties.prototype.paddingBottom;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-paddingLeft
 */
CSS2Properties.prototype.paddingLeft;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-page
 */
CSS2Properties.prototype.page;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pageBreakAfter
 */
CSS2Properties.prototype.pageBreakAfter;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pageBreakBefore
 */
CSS2Properties.prototype.pageBreakBefore;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pageBreakInside
 */
CSS2Properties.prototype.pageBreakInside;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pause
 */
CSS2Properties.prototype.pause;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pauseAfter
 */
CSS2Properties.prototype.pauseAfter;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pauseBefore
 */
CSS2Properties.prototype.pauseBefore;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pitch
 */
CSS2Properties.prototype.pitch;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-pitchRange
 */
CSS2Properties.prototype.pitchRange;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-playDuring
 */
CSS2Properties.prototype.playDuring;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-position
 */
CSS2Properties.prototype.position;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-quotes
 */
CSS2Properties.prototype.quotes;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-richness
 */
CSS2Properties.prototype.richness;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-right
 */
CSS2Properties.prototype.right;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-size
 */
CSS2Properties.prototype.size;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-speak
 */
CSS2Properties.prototype.speak;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-speakHeader
 */
CSS2Properties.prototype.speakHeader;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-speakNumeral
 */
CSS2Properties.prototype.speakNumeral;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-speakPunctuation
 */
CSS2Properties.prototype.speakPunctuation;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-speechRate
 */
CSS2Properties.prototype.speechRate;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-stress
 */
CSS2Properties.prototype.stress;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-tableLayout
 */
CSS2Properties.prototype.tableLayout;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-textAlign
 */
CSS2Properties.prototype.textAlign;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-textDecoration
 */
CSS2Properties.prototype.textDecoration;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-textIndent
 */
CSS2Properties.prototype.textIndent;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-textShadow
 */
CSS2Properties.prototype.textShadow;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-textTransform
 */
CSS2Properties.prototype.textTransform;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-top
 */
CSS2Properties.prototype.top;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-unicodeBidi
 */
CSS2Properties.prototype.unicodeBidi;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-verticalAlign
 */
CSS2Properties.prototype.verticalAlign;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-visibility
 */
CSS2Properties.prototype.visibility;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-voiceFamily
 */
CSS2Properties.prototype.voiceFamily;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-volume
 */
CSS2Properties.prototype.volume;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-whiteSpace
 */
CSS2Properties.prototype.whiteSpace;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-widows
 */
CSS2Properties.prototype.widows;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-width
 */
CSS2Properties.prototype.width;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-wordSpacing
 */
CSS2Properties.prototype.wordSpacing;

/**
 * @type {string}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-wordWrap
 */
CSS2Properties.prototype.wordWrap;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties-zIndex
 */
CSS2Properties.prototype.zIndex;

// CSS 3 properties

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-ui/#box-sizing
 */
CSS2Properties.prototype.boxSizing;

/**
 * @type {string}
 * @implicitCast
 */
CSS2Properties.prototype.opacity;

// CSS 3 transforms

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-2d-transforms/#backface-visibility-property
 */
CSS2Properties.prototype.backfaceVisibility;

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-2d-transforms/#perspective
 */
CSS2Properties.prototype.perspective;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/css3-2d-transforms/#perspective-origin
 */
CSS2Properties.prototype.perspectiveOrigin;

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-2d-transforms/#effects
 */
CSS2Properties.prototype.transform;

/**
 * @type {string|number}
 * @see http://www.w3.org/TR/css3-2d-transforms/#transform-origin
 */
CSS2Properties.prototype.transformOrigin;

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-2d-transforms/#transform-style
 */
CSS2Properties.prototype.transformStyle;

// CSS 3 transitions

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-transitions/#transition
 */
CSS2Properties.prototype.transition;

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-transitions/#transition-delay
 */
CSS2Properties.prototype.transitionDelay;

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-transitions/#transition-duration
 */
CSS2Properties.prototype.transitionDuration;

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-transitions/#transition-property-property
 */
CSS2Properties.prototype.transitionProperty;

/**
 * @type {string}
 * @see http://www.w3.org/TR/css3-transitions/#transition-timing-function
 */
CSS2Properties.prototype.transitionTimingFunction;

/**
 * TODO(dbeam): Put this in separate file named w3c_cssom.js.
 * Externs for the CSSOM View Module.
 * @see http://www.w3.org/TR/cssom-view/
 */

// http://www.w3.org/TR/cssom-view/#extensions-to-the-window-interface

/**
 * @param {string} media_query_list
 * @return {MediaQueryList}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-matchmedia
 */
Window.prototype.matchMedia = function(media_query_list) {};

/**
 * @type {Screen}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-screen
 */
Window.prototype.screen;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-innerwidth
 */
Window.prototype.innerWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-innerheight
 */
Window.prototype.innerHeight;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrollx
 */
Window.prototype.scrollX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-pagexoffset
 */
Window.prototype.pageXOffset;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrolly
 */
Window.prototype.scrollY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-pageyoffset
 */
Window.prototype.pageYOffset;

/**
 * @param {number} x
 * @param {number} y
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scroll
 */
Window.prototype.scroll = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrollto
 */
Window.prototype.scrollTo = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @see http://www.w3.org/TR/cssom-view/#dom-window-scrollby
 */
Window.prototype.scrollBy = function(x, y) {};

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-screenx
 */
Window.prototype.screenX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-screeny
 */
Window.prototype.screenY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-outerwidth
 */
Window.prototype.outerWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-window-outerheight
 */
Window.prototype.outerHeight;

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#mediaquerylist
 */
function MediaQueryList() {}

/**
 * @type {string}
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-media
 */
MediaQueryList.prototype.media;

/**
 * @type {boolean}
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-matches
 */
MediaQueryList.prototype.matches;

/**
 * @param {MediaQueryListListener} listener
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-addlistener
 */
MediaQueryList.prototype.addListener = function(listener) {};

/**
 * @param {MediaQueryListListener} listener
 * @see http://www.w3.org/TR/cssom-view/#dom-mediaquerylist-removelistener
 */
MediaQueryList.prototype.removeListener = function(listener) {};

/**
 * @typedef {(function(!MediaQueryList) : void)}
 * @see http://www.w3.org/TR/cssom-view/#mediaquerylistlistener
 */
var MediaQueryListListener;

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#screen
 */
function Screen() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-availwidth
 */
Screen.prototype.availWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-availheight
 */
Screen.prototype.availHeight;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-width
 */
Screen.prototype.width;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-height
 */
Screen.prototype.height;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-colordepth
 */
Screen.prototype.colorDepth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-screen-pixeldepth
 */
Screen.prototype.pixelDepth;


// http://www.w3.org/TR/cssom-view/#extensions-to-the-document-interface

/**
 * @param {number} x
 * @param {number} y
 * @return {?Element}
 * @see http://www.w3.org/TR/cssom-view/#dom-document-elementfrompoint
 */
Document.prototype.elementFromPoint = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {CaretPosition}
 * @see http://www.w3.org/TR/cssom-view/#dom-document-caretpositionfrompoint
 */
Document.prototype.caretPositionFromPoint = function(x, y) {};


/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#caretposition
 */
function CaretPosition() {}

/**
 * @type {Node}
 * @see http://www.w3.org/TR/cssom-view/#dom-caretposition-offsetnode
 */
CaretPosition.prototype.offsetNode;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-caretposition-offset
 */
CaretPosition.prototype.offset;


// http://www.w3.org/TR/cssom-view/#extensions-to-the-element-interface

/**
 * @return {ClientRectList}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-getclientrects
 */
Element.prototype.getClientRects = function() {};

/**
 * @return {ClientRect}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-getboundingclientrect
 */
Element.prototype.getBoundingClientRect = function() {};

/**
 * @param {boolean=} opt_top
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollintoview
 */
Element.prototype.scrollIntoView = function(opt_top) {};

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrolltop
 */
Element.prototype.scrollTop;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollleft
 */
Element.prototype.scrollLeft;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollwidth
 */
Element.prototype.scrollWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-scrollheight
 */
Element.prototype.scrollHeight;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clienttop
 */
Element.prototype.clientTop;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clientleft
 */
Element.prototype.clientLeft;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clientwidth
 */
Element.prototype.clientWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-element-clientheight
 */
Element.prototype.clientHeight;

// http://www.w3.org/TR/cssom-view/#extensions-to-the-htmlelement-interface

/**
 * @type {Element}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetparent
 */
HTMLElement.prototype.offsetParent;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsettop
 */
HTMLElement.prototype.offsetTop;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetleft
 */
HTMLElement.prototype.offsetLeft;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetwidth
 */
HTMLElement.prototype.offsetWidth;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetheight
 */
HTMLElement.prototype.offsetHeight;


// http://www.w3.org/TR/cssom-view/#extensions-to-the-range-interface

/**
 * @return {ClientRectList}
 * @see http://www.w3.org/TR/cssom-view/#dom-range-getclientrects
 */
Range.prototype.getClientRects = function() {};

/**
 * @return {ClientRect}
 * @see http://www.w3.org/TR/cssom-view/#dom-range-getboundingclientrect
 */
Range.prototype.getBoundingClientRect = function() {};


// http://www.w3.org/TR/cssom-view/#extensions-to-the-mouseevent-interface

// MouseEvent: screen{X,Y} and client{X,Y} are in DOM Level 2/3 Event as well,
// so it seems like a specification issue. I've emailed www-style@w3.org in
// hopes of resolving the conflict, but in the mean time they can live here
// (http://lists.w3.org/Archives/Public/www-style/2012May/0039.html).

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-screenx
 */
//MouseEvent.prototype.screenX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-screeny
 */
//MouseEvent.prototype.screenY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-pagex
 */
MouseEvent.prototype.pageX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-pagey
 */
MouseEvent.prototype.pageY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-clientx
 */
//MouseEvent.prototype.clientX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-clienty
 */
//MouseEvent.prototype.clientY;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-x
 */
MouseEvent.prototype.x;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-y
 */
MouseEvent.prototype.y;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-offsetx
 */
MouseEvent.prototype.offsetX;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-mouseevent-offsety
 */
MouseEvent.prototype.offsetY;


// http://www.w3.org/TR/cssom-view/#rectangles

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#the-clientrectlist-interface
 */
function ClientRectList() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrectlist-length
 */
ClientRectList.prototype.length;

/**
 * @param {number} index
 * @return {ClientRect}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrectlist-item
 */
ClientRectList.prototype.item = function(index) {};

/**
 * @constructor
 * @see http://www.w3.org/TR/cssom-view/#the-clientrect-interface
 */
function ClientRect() {}

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-top
 */
ClientRect.prototype.top;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-right
 */
ClientRect.prototype.right;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-bottom
 */
ClientRect.prototype.bottom;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-left
 */
ClientRect.prototype.left;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-width
 */
ClientRect.prototype.width;

/**
 * @type {number}
 * @see http://www.w3.org/TR/cssom-view/#dom-clientrect-height
 */
ClientRect.prototype.height;
