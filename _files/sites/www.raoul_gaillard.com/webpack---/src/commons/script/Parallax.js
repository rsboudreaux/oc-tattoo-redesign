import SmoothScroll from './SmoothScroll.js'
import InViewport from 'in-viewport'

export default class Parallax extends SmoothScroll {

    constructor(options, vsOptions = {}) {
        super(options, vsOptions)
        this.parallaxElements = options.parallaxElements || []
    }

    onScroll(e) {
        super.onScroll(e)
        this.testParallaxElements()
    }

    setParallaxElements(parallaxElements) {
        this.parallaxElements = parallaxElements
    }

    testParallaxElements() {

        for (var i = 0; i < this.parallaxElements.length; i++) {
            InViewport(this.parallaxElements[i].el) ? this.parallaxElements[i].inViewport = true : this.parallaxElements[i].inViewport = false
        }

    }

    getCurrentTransformStyle(element) {

    }

    moveElement(elementToMove) {
        let distanceToMove

        if (elementToMove.newPosY !== undefined) {
            distanceToMove = elementToMove.newPosY + (this.currentY - this.oldY) * elementToMove.ratio
        } else {
            distanceToMove = (this.currentY - this.oldY) * elementToMove.ratio
        }

        this.applyTransform(elementToMove.el, distanceToMove)
        return distanceToMove
    }

    moveElements() {
        for (var i = 0; i < this.parallaxElements.length; i++) {
            if (this.parallaxElements[i].inViewport) {
                this.parallaxElements[i].newPosY = this.moveElement(this.parallaxElements[i])
            }
        }
    }

    animate() {
        super.animate()
        this.parallaxElements && this.moveElements()
    }

    destroy() {
        this.parallaxElements = null
        super.destroy()
    }

}



// WEBPACK FOOTER //
// ./src/commons/script/Parallax.js