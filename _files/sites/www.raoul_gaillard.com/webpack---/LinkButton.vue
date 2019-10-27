<template lang="html">

	<a class="slide__button link-button" :style="buttonStyle" :href="url" target="_blank" @mouseover="buttonHover" @mouseout="buttonOut" ref="button">
		<div class="slide__button-text" ref="buttonText">Go to website</div>
	</a>

</template>

<script>

import HexToRgba from '../../commons/script/HexToRgba.js'

export default {
	props: ['url'],

	data(){
		return {
			textColor: '#ffffff',
			buttonStyle: {
				borderColor: new HexToRgba().convert('#ffffff', 0.3)
			}
		}
	},

	mounted(){
		this.buttonHoverAnim = new TimelineLite({paused: true})
			this.buttonHoverAnim.to(this.$refs.buttonText, .2,{y: -20, rotationX: 45,autoAlpha: 0, ease: Expo.easeIn})
			this.buttonHoverAnim.set(this.$refs.buttonText,{y: 20, rotationX: -45})
			this.buttonHoverAnim.to(this.$refs.buttonText, .2,{y: 0, rotationX: 0,autoAlpha: 1, ease: Expo.easeOut})
			this.buttonHoverAnim.to(this.$refs.button, .5, {borderColor: new HexToRgba().convert(this.textColor, 1), ease: Expo.easeInOut}, 0)
	},

	methods: {

		buttonHover(){
			this.buttonHoverAnim.play()
		},

		buttonOut(){
			this.buttonHoverAnim.reverse()
		}

	}

}
</script>

<style lang="scss">

	.link-button {
		margin-top: 2.5em;
	}

</style>



// WEBPACK FOOTER //
// LinkButton.vue?d013b8aa