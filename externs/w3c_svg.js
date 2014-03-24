/**
 * @interface
 */
function SVGElementInstance()
{

}

/** @type {SVGElement} */
SVGElementInstance.prototype.correspondingElement;

/** @type {SVGUseElement} */
SVGElementInstance.prototype.correspondingUseElement;

/** @type {SVGElementInstance} */
SVGElementInstance.prototype.parentNode;

/** @type {SVGElementInstanceList} */
SVGElementInstance.prototype.childNodes;

/** @type {SVGElementInstance} */
SVGElementInstance.prototype.firstChild;

/** @type {SVGElementInstance} */
SVGElementInstance.prototype.lastChild;

/** @type {SVGElementInstance} */
SVGElementInstance.prototype.previousSibling;

/** @type {SVGElementInstance} */
SVGElementInstance.prototype.nextSibling;