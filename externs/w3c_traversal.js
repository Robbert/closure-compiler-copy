/**
 * @param {Node} root
 * @param {NodeFilter.WHAT_TO_SHOW} whatToShow
 * @param {NodeFilter} filter
 * @param {boolean} entityReferenceExpansion
 * @return {NodeIterator}
 */
Document.prototype.createNodeIterator = function (root, whatToShow, filter, entityReferenceExpansion) {};

/**
 * @param {Node} root
 * @param {NodeFilter.WHAT_TO_SHOW} whatToShow
 * @param {NodeFilter} filter
 * @param {boolean} entityReferenceExpansion
 * @return {TreeWalker}
 */
Document.prototype.createTreeWalker = function (root, whatToShow, filter, entityReferenceExpansion) {};

/**
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-TreeWalker
 * @constructor
 */
function TreeWalker()
{
    /*
    // Introduced in DOM Level 2:
    interface TreeWalker {
      readonly attribute Node             root;
      readonly attribute unsigned long    whatToShow;
      readonly attribute NodeFilter       filter;
      readonly attribute boolean          expandEntityReferences;
               attribute Node             currentNode;
                                            // raises(DOMException) on setting

      Node               parentNode();
      Node               firstChild();
      Node               lastChild();
      Node               previousSibling();
      Node               nextSibling();
      Node               previousNode();
      Node               nextNode();
    };
    */
}

/**
 * @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter
 * @constructor
 */
function NodeFilter()
{
  //
}

/**
 * @param {Node} n
 * @return {NodeFilter.ACCEPT_NODE}
 */
NodeFilter.prototype.accept = function (n) {};

/**
 * @enum {number}
 */
NodeFilter.ACCEPT_NODE = {
    FILTER_ACCEPT:                   1,
    FILTER_REJECT:                   2,
    FILTER_SKIP:                     3
};

/**
 * @enum {number}
 */
NodeFilter.WHAT_TO_SHOW = {
    SHOW_ALL:                        0xFFFFFFFF,
    SHOW_ELEMENT:                    0x00000001,
    SHOW_ATTRIBUTE:                  0x00000002,
    SHOW_TEXT:                       0x00000004,
    SHOW_CDATA_SECTION:              0x00000008,
    SHOW_ENTITY_REFERENCE:           0x00000010,
    SHOW_ENTITY:                     0x00000020,
    SHOW_PROCESSING_INSTRUCTION:     0x00000040,
    SHOW_COMMENT:                    0x00000080,
    SHOW_DOCUMENT:                   0x00000100,
    SHOW_DOCUMENT_TYPE:              0x00000200,
    SHOW_DOCUMENT_FRAGMENT:          0x00000400,
    SHOW_NOTATION:                   0x00000800
};

/** @type {Node} */
TreeWalker.prototype.root;

/** @type {number} */
TreeWalker.prototype.whatToShow;

/** @type {number} */
TreeWalker.prototype.filter;

/** @type {boolean} */
TreeWalker.prototype.expandEntityReferences;

/** @type {Node} */
TreeWalker.prototype.currentNode;

/**
 * @return {Node}
 */
TreeWalker.prototype.parentNode = function (){};

/**
 * @return {Node}
 */
TreeWalker.prototype.firstChild = function (){};

/**
 * @return {Node}
 */
TreeWalker.prototype.lastChild = function (){};

/**
 * @return {Node}
 */
TreeWalker.prototype.previousSibling = function (){};

/**
 * @return {Node}
 */
TreeWalker.prototype.nextSibling = function (){};

/**
 * @return {Node}
 */
TreeWalker.prototype.previousNode = function (){};

/**
 * @return {Node}
 */
TreeWalker.prototype.nextNode = function (){};

/**
 * @constructor
 */
function NodeIterator()
{
    //
}
