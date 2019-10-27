<template lang="html">
	<div class="page-about">
		<navigation></navigation>
		<about-content></about-content>
	</div>
</template>

<script>

import Navigation from '../../shared-components/Navigation/Navigation.vue'
import AboutContent from './AboutContent.vue'

import AnimationStore from '../../stores/AnimationStore.js'
import MenuStore from '../../stores/MenuStore.js'
import {EventBus} from '../../event-bus.js'
import _ from 'lodash'

export default {

	beforeRouteLeave (to, from, next) {
		if (!MenuStore.state.isAnimated) {
			let delay = 1500
    	let targetedPage = to.name
    	AnimationStore.setRouterInfo(from.name, targetedPage)
    	EventBus.$emit('leave-page', {to: to, from: from})
    	_.delay(next, delay)
		}
  },

	components: {
		Navigation,
		AboutContent
	}
}
</script>

<style lang="scss">

	.page-about {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

</style>



// WEBPACK FOOTER //
// About.vue?16fdb87e