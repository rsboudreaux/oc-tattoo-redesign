class SliderStore {

    constructor() {
        this.state = {
            currentSlideId: 0,
            isAnimated: false,
            posY: 0,
            isSliding: false,
            isActive: false,
            isSliding: false,
            caseStudyIsOpen: false,
            lookAt: true
        }
    }

    increment() {
        this.state.currentSlideId++
    }

    setIsSliding(isSliding) {
        this.state.isSliding = isSliding
    }

    decrement() {
        this.state.currentSlideId--
    }

    setLookAt(lookAt) {
        this.state.lookAt = lookAt
    }

    setSlideId(slideIdToSet) {
        this.state.currentSlideId = slideIdToSet
    }

    sliderIsAnimated() {
        this.state.isAnimated = true
    }

    sliderIsNotAnimated() {
        this.state.isAnimated = false
    }

    setPosY(posY) {
        this.state.posY = posY
    }

    setActive() {
        this.state.isActive = true
    }

    setInactive() {
        this.state.isActive = false
    }

    openCaseStudy() {
        this.state.caseStudyIsOpen = true
    }

    closeCaseStudy() {
        this.state.caseStudyIsOpen = false
    }

    reset() {
        this.state.currentSlideId = 0
    }

}

export default new SliderStore()



// WEBPACK FOOTER //
// ./src/stores/SliderStore.js