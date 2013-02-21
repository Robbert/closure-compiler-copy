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
 * @fileoverview Definitions for Gecko's custom CSS properties. Copied from:
 * http://mxr.mozilla.org/mozilla2.0/source/dom/interfaces/css/nsIDOMCSS2Properties.idl
 *
 * @externs
 * @author nicksantos@google.com (Nick Santos)
 */


/** @type {string} */ CSS2Properties.prototype.MozAppearance;
/** @type {string} */ CSS2Properties.prototype.MozBackfaceVisibility;
/** @type {string} */ CSS2Properties.prototype.MozBackgroundClip;
/** @type {string} */ CSS2Properties.prototype.MozBackgroundInlinePolicy;
/** @type {string} */ CSS2Properties.prototype.MozBackgroundOrigin;
/** @type {string} */ CSS2Properties.prototype.MozBinding;
/** @type {string} */ CSS2Properties.prototype.MozBorderBottomColors;
/** @type {string} */ CSS2Properties.prototype.MozBorderEnd;
/** @type {string} */ CSS2Properties.prototype.MozBorderEndColor;
/** @type {string} */ CSS2Properties.prototype.MozBorderEndStyle;
/** @type {string} */ CSS2Properties.prototype.MozBorderEndWidth;
/** @type {string} */ CSS2Properties.prototype.MozBorderImage;
/** @type {string} */ CSS2Properties.prototype.MozBorderLeftColors;
/** @type {string} */ CSS2Properties.prototype.MozBorderRadius;
/** @type {string} */ CSS2Properties.prototype.MozBorderRadiusTopleft;
/** @type {string} */ CSS2Properties.prototype.MozBorderRadiusTopright;
/** @type {string} */ CSS2Properties.prototype.MozBorderRadiusBottomleft;
/** @type {string} */ CSS2Properties.prototype.MozBorderRadiusBottomright;
/** @type {string} */ CSS2Properties.prototype.MozBorderRightColors;
/** @type {string} */ CSS2Properties.prototype.MozBorderStart;
/** @type {string} */ CSS2Properties.prototype.MozBorderStartColor;
/** @type {string} */ CSS2Properties.prototype.MozBorderStartStyle;
/** @type {string} */ CSS2Properties.prototype.MozBorderStartWidth;
/** @type {string} */ CSS2Properties.prototype.MozBorderTopColors;
/** @type {string} */ CSS2Properties.prototype.MozBoxAlign;
/** @type {string} */ CSS2Properties.prototype.MozBoxDirection;
/** @type {string} */ CSS2Properties.prototype.MozBoxFlex;
/** @type {string} */ CSS2Properties.prototype.MozBoxOrdinalGroup;
/** @type {string} */ CSS2Properties.prototype.MozBoxOrient;
/** @type {string} */ CSS2Properties.prototype.MozBoxPack;
/** @type {string} */ CSS2Properties.prototype.MozBoxSizing;
/** @type {string} */ CSS2Properties.prototype.MozColumnCount;
/** @type {string} */ CSS2Properties.prototype.MozColumnGap;
/** @type {string} */ CSS2Properties.prototype.MozColumnRule;
/** @type {string} */ CSS2Properties.prototype.MozColumnRuleColor;
/** @type {string} */ CSS2Properties.prototype.MozColumnRuleStyle;
/** @type {string} */ CSS2Properties.prototype.MozColumnRuleWidth;
/** @type {string} */ CSS2Properties.prototype.MozColumnWidth;
/** @type {string} */ CSS2Properties.prototype.MozFloatEdge;
/** @type {string} */ CSS2Properties.prototype.MozFontFeatureSettings;
/** @type {string} */ CSS2Properties.prototype.MozFontLanguageOverride;
/** @type {string} */ CSS2Properties.prototype.MozForceBrokenImageIcon;
/** @type {string} */ CSS2Properties.prototype.MozImageRegion;
/** @type {string} */ CSS2Properties.prototype.MozMarginEnd;
/** @type {string} */ CSS2Properties.prototype.MozMarginStart;
/** @type {number|string} */ CSS2Properties.prototype.MozOpacity;
/** @type {string} */ CSS2Properties.prototype.MozOutline;
/** @type {string} */ CSS2Properties.prototype.MozOutlineColor;
/** @type {string} */ CSS2Properties.prototype.MozOutlineOffset;
/** @type {string} */ CSS2Properties.prototype.MozOutlineRadius;
/** @type {string} */ CSS2Properties.prototype.MozOutlineRadiusBottomleft;
/** @type {string} */ CSS2Properties.prototype.MozOutlineRadiusBottomright;
/** @type {string} */ CSS2Properties.prototype.MozOutlineRadiusTopleft;
/** @type {string} */ CSS2Properties.prototype.MozOutlineRadiusTopright;
/** @type {string} */ CSS2Properties.prototype.MozOutlineStyle;
/** @type {string} */ CSS2Properties.prototype.MozOutlineWidth;
/** @type {string} */ CSS2Properties.prototype.MozPaddingEnd;
/** @type {string} */ CSS2Properties.prototype.MozPaddingStart;
/** @type {string} */ CSS2Properties.prototype.MozPerspective;
/** @type {string} */ CSS2Properties.prototype.MozStackSizing;
/** @type {string} */ CSS2Properties.prototype.MozTabSize;
/** @type {string} */ CSS2Properties.prototype.MozTransform;
/** @type {string} */ CSS2Properties.prototype.MozTransformOrigin;
/** @type {string} */ CSS2Properties.prototype.MozTransition;
/** @type {string} */ CSS2Properties.prototype.MozTransitionDelay;
/** @type {string} */ CSS2Properties.prototype.MozTransitionDuration;
/** @type {string} */ CSS2Properties.prototype.MozTransitionProperty;
/** @type {string} */ CSS2Properties.prototype.MozTransitionTimingFunction;
/** @type {string} */ CSS2Properties.prototype.MozUserFocus;
/** @type {string} */ CSS2Properties.prototype.MozUserInput;
/** @type {string} */ CSS2Properties.prototype.MozUserModify;
/** @type {string} */ CSS2Properties.prototype.MozUserSelect;
/** @type {string} */ CSS2Properties.prototype.MozWindowShadow;


// These are non-standard Gecko CSSOM properties on Window.prototype.screen.

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.availTop
 */
Screen.prototype.availTop;

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.availLeft
 */
Screen.prototype.availLeft;

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.left
 */
Screen.prototype.left;

/**
 * @type {number}
 * @see https://developer.mozilla.org/En/DOM/window.screen.top
 */
Screen.prototype.top;
