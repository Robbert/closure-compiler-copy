/** @typedef {{
  createNodeIterator: function(Node, number=, NodeFilter=, boolean=) : NodeIterator,
  createTreeWalker: function(Node, number=, NodeFilter=, boolean=) : TreeWalker
}} */
var TraversalDocument;

/**
 * @param {Node} root
 * @param {NodeFilter.WHAT_TO_SHOW=} whatToShow
 * @param {?NodeFilter=} filter
 * @param {boolean=} entityReferenceExpansion
 * @return {!NodeIterator}
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-Document
 * @nosideeffects
 */
Document.prototype.createNodeIterator = function(
    root, whatToShow, filter, entityReferenceExpansion) {};

/**
 * @param {Node} root
 * @param {NodeFilter.WHAT_TO_SHOW=} whatToShow
 * @param {?NodeFilter=} filter
 * @param {boolean=} entityReferenceExpansion
 * @return {!TreeWalker}
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-Document
 * @nosideeffects
 */
Document.prototype.createTreeWalker = function(
    root, whatToShow, filter, entityReferenceExpansion) {};

/**
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter
 * @constructor
 */
function NodeFilter()
{
  //
}

/**
 * Accept this node.
 * @const {number}
 */
NodeFilter.FILTER_ACCEPT                = 1;

/**
 * Reject this node.
 * @const {number}
 */
NodeFilter.FILTER_REJECT                = 2;

/**
 * Skip this node.
 * @const {number}
 */
NodeFilter.FILTER_SKIP                  = 3;

/** @const {number} */
NodeFilter.SHOW_ALL                     = 0xFFFFFFFF;

/** @const {number} */
NodeFilter.SHOW_ELEMENT                 = 0x00000001;

/** @const {number} */
NodeFilter.SHOW_ATTRIBUTE               = 0x00000002;

/** @const {number} */
NodeFilter.SHOW_TEXT                    = 0x00000004;

/** @const {number} */
NodeFilter.SHOW_CDATA_SECTION           = 0x00000008;

/** @const {number} */
NodeFilter.SHOW_ENTITY_REFERENCE        = 0x00000010;

/** @const {number} */
NodeFilter.SHOW_ENTITY                  = 0x00000020;

/** @const {number} */
NodeFilter.SHOW_PROCESSING_INSTRUCTION  = 0x00000040;

/** @const {number} */
NodeFilter.SHOW_COMMENT                 = 0x00000080;

/** @const {number} */
NodeFilter.SHOW_DOCUMENT                = 0x00000100;

/** @const {number} */
NodeFilter.SHOW_DOCUMENT_TYPE           = 0x00000200;

/** @const {number} */
NodeFilter.SHOW_DOCUMENT_FRAGMENT       = 0x00000400;

/** @const {number} */
NodeFilter.SHOW_NOTATION                = 0x00000800;

/**
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter-acceptNode-constants
 * @enum {number}
 */
NodeFilter.ACCEPT_NODE = {
    FILTER_ACCEPT:                   NodeFilter.FILTER_ACCEPT,
    FILTER_REJECT:                   NodeFilter.FILTER_REJECT,
    FILTER_SKIP:                     NodeFilter.FILTER_SKIP
};

/**
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter-whatToShow-constants
 * @enum {number}
 */
NodeFilter.WHAT_TO_SHOW = {
    SHOW_ALL:                        NodeFilter.SHOW_ALL,
    SHOW_ELEMENT:                    NodeFilter.SHOW_ELEMENT,
    SHOW_ATTRIBUTE:                  NodeFilter.SHOW_ATTRIBUTE,
    SHOW_TEXT:                       NodeFilter.SHOW_TEXT,
    SHOW_CDATA_SECTION:              NodeFilter.SHOW_CDATA_SECTION,
    SHOW_ENTITY_REFERENCE:           NodeFilter.SHOW_ENTITY_REFERENCE,
    SHOW_ENTITY:                     NodeFilter.SHOW_ENTITY,
    SHOW_PROCESSING_INSTRUCTION:     NodeFilter.SHOW_PROCESSING_INSTRUCTION,
    SHOW_COMMENT:                    NodeFilter.SHOW_COMMENT,
    SHOW_DOCUMENT:                   NodeFilter.SHOW_DOCUMENT,
    SHOW_DOCUMENT_TYPE:              NodeFilter.SHOW_DOCUMENT_TYPE,
    SHOW_DOCUMENT_FRAGMENT:          NodeFilter.SHOW_DOCUMENT_FRAGMENT,
    SHOW_NOTATION:                   NodeFilter.SHOW_NOTATION
};

/**
 * @param {Node} n
 * @return {NodeFilter.ACCEPT_NODE} Any of NodeFilter.FILTER_* constants.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter-acceptNode
 */
NodeFilter.prototype.acceptNode = function(n) {};

/**
 * @interface
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker
*/
function TreeWalker() {}

/**
 * @return {?Node} The new Node or null.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker-firstChild
 */
TreeWalker.prototype.firstChild = function() {};

/**
 * @return {?Node} The new Node or null..
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker-lastChild
 */
TreeWalker.prototype.lastChild = function() {};

/**
 * @return {?Node} The new Node or null.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker-nextNode
 */
TreeWalker.prototype.nextNode = function() {};

/**
 * @return {?Node} The new Node or null.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker-nextSibling
 */
TreeWalker.prototype.nextSibling = function() {};

/**
 * @return {?Node} The new Node or null.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker-parentNode
 */
TreeWalker.prototype.parentNode = function() {};

/**
 * @return {?Node} The new Node or null.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker-previousNode
 */
TreeWalker.prototype.previousNode = function() {};

/**
 * @return {?Node} The new Node or null.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker-previousSibling
 */
TreeWalker.prototype.previousSibling = function() {};

/**
 * @type {Node}
 */
TreeWalker.prototype.root;

/**
 * @type {number}
 */
TreeWalker.prototype.whatToShow;

/**
 * @type {NodeFilter}
 */
TreeWalker.prototype.filter;

/**
 * @type {boolean}
 */
TreeWalker.prototype.expandEntityReference;

/**
 * @type {Node}
 */
TreeWalker.prototype.currentNode;

/**
 * @interface
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeIterator
*/
function NodeIterator() {}

/**
 * Detach and invalidate the NodeIterator.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeIterator-detach
 */
NodeIterator.prototype.detach = function() {};

/**
 * @return {Node} Next node in the set.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeIterator-nextNode
 */
NodeIterator.prototype.nextNode = function() {};

/**
 * @return {Node} Previous node in the set.
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeIterator-previousNode
 */
NodeIterator.prototype.previousNode = function() {};
