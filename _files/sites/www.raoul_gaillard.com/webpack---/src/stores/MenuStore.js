class MenuStore {

    constructor() {
        this.state = {
            isClosed: true,
            isAnimated: false,
            isBlocked: false
        }
    }

    openMenu() {
        this.state.isClosed = false
    }

    closeMenu() {
        this.state.isClosed = true
    }

    toggleMenu() {
        this.state.isClosed === true ? this.state.isClosed = false : this.state.isClosed = true
    }

    menuIsAnimated() {
        this.state.isAnimated = true
    }

    menuIsNotAnimated() {
        this.state.isAnimated = false
    }

    blockMenu() {
        this.state.isBlocked = true
    }

    unblockMenu() {
        this.state.isBlocked = false
    }

}

export default new MenuStore()



// WEBPACK FOOTER //
// ./src/stores/MenuStore.js