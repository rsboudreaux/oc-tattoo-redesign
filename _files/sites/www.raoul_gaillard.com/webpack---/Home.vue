<template lang="html">
	<div class="home">
		<navigation></navigation>
		<home-title></home-title>
		<home-button></home-button>
	</div>
</template>

<script>

import Navigation from '../../shared-components/Navigation/Navigation.vue'
import HomeButton from './HomeButton.vue'
import HomeTitle from './HomeTitle.vue'

import AnimationStore from '../../stores/AnimationStore.js'
import MenuStore from '../../stores/MenuStore.js'
import {EventBus} from '../../event-bus.js'
const animMap = require('../../anim-map.json')

import _ from 'lodash'
import VirtualScroll from 'virtual-scroll'

export default {
	name: 'home',

	data() {
		return {}
	},

	mounted(){
		this.vs = new VirtualScroll({
			el: this.$el
		})
		this.onceWheel = _.once(this.wheel)
		_.delay(this.events, 1500)
	},

	beforeDestroy(){
		this.unlistenEvents()
	},

	beforeRouteLeave (to, from, next) {
		if (!MenuStore.state.isAnimated) {
			let delay = 1500
			let targetedPage = to.name
			AnimationStore.setRouterInfo(from.name, targetedPage)
			EventBus.$emit('leave-page', {to: to, from: from})
			_.delay(next, delay)
		}
  },

	methods: {

		events(){
			this.vs.on(this.onceWheel)
		},

		unlistenEvents(){
			this.vs.destroy()
		},

		wheel(){
			this.$router.push('work')
		},

	},

	components: {
		Navigation,
		HomeButton,
		HomeTitle
	}
}
</script>

<style lang="scss">
</style>



// WEBPACK FOOTER //
// Home.vue?cfea3372