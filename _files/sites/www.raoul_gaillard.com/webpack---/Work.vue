<template lang="html">
  <div class="work">
		<navigation></navigation>
    <router-view></router-view>
		<slider></slider>
  </div>
</template>

<script>

import Navigation from '../../shared-components/Navigation/Navigation.vue'
import Slider from '../../shared-components/Slider/Slider.vue'

import AnimationStore from '../../stores/AnimationStore.js'
import MenuStore from '../../stores/MenuStore.js'
import {EventBus} from '../../event-bus.js'
import _ from 'lodash'

export default {
	data() {
		return {}
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

	components: {
		Navigation,
		Slider,
	}
}

</script>

<style lang="scss">
</style>



// WEBPACK FOOTER //
// Work.vue?ab72f7ea