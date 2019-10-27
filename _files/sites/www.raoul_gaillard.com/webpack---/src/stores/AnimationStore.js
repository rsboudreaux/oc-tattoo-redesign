const animMap = require('../anim-map.json')

class AnimationStore {

    constructor() {
        this.state = {
            from: '',
            to: '',
            appear: animMap.default.appear,
            leave: animMap.default.leave
        }
    }

    setAnimInfo(from, to) {
        if (animMap.from[from] === undefined ||  animMap.from[from].to[to] === undefined) {
            this.state.appear = animMap.default.appear
            this.state.leave = animMap.default.leave
        } else if (animMap.from[from].to[to] !== undefined) {
            this.state.appear = animMap.from[from].to[to].appear
            this.state.leave = animMap.from[from].to[to].leave
        }
    }

    setRouterInfo(from, to) {
        this.state.from = from
        this.state.to = to
        this.setAnimInfo(from, to)
    }

}

export default new AnimationStore()



// WEBPACK FOOTER //
// ./src/stores/AnimationStore.js