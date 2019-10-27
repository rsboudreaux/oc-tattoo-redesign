<template lang="html">
	<div class="close-button close-button__center-content" @click="click">
		<div class="close-button__mini-button-container close-button__center-content ">
			<div class="close-button__mini-button close-button__center-content">
				<div class="close-button__line close-button__first-line">
					<div class="close-button__line-fill"></div>
				</div>
				<div class="close-button__line close-button__second-line">
					<div class="close-button__line-fill"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {EventBus} from '../../event-bus.js'
import {TimelineLite, Expo} from 'gsap'

export default {
	name: 'close-button',

	data(){
		return {
			isActive: true
		}
	},

	mounted(){
		this.events()
		this.$lineFill = this.$el.querySelectorAll('.close-button__line-fill')
		this.appear()
	},

	beforeDestroy(){
		this.unlistenEvents()
	},

	methods: {
		events(){
			EventBus.$on('page-ready', this.pageReady)
			EventBus.$on('toggle-header', this.toggleHeader)
		},
		unlistenEvents(){
			EventBus.$off('page-ready', this.pageReady)
			EventBus.$off('toggle-header', this.toggleHeader)
		},
		toggleHeader(isOpen){
			isOpen ? this.appear() : undefined
		},
		pageReady(){
			this.appear()
		},
		appear(){
			TweenMax.staggerFromTo(this.$lineFill, .7, {scaleY: 0}, {scaleY: 1, ease: Expo.easeOut, overwrite: 'all', delay: .5}, .15)
		},
		leave(){
			TweenMax.staggerFromTo(this.$lineFill, .7, {scaleY: 0}, {scaleY: 1, ease: Expo.easeIn, overwrite: 'all'}, .15)
		},
		click(){
			if (this.$parent.isApear && this.isActive) {
				EventBus.$emit('click-close-button')
				this.$router.replace({name: 'work'})
				this.isActive = false
			}
		}
	}
}
</script>

<style lang="scss">

	.close-button {
		font-size: 46px;
		cursor: pointer;
		margin: auto;
		width: 1.2em;
		height: 1.2em;
		border-radius: 50%;
		background-image: linear-gradient(-135deg, #FFC3CA 0%, #7E9DF6 100%);
	}

	.close-button__mini-button-container {
		width: 1.1em;
		height: 1.1em;
		box-sizing: border-box;
		border-radius: 50%;
		background-color: #011933;
	}

	.close-button__mini-button {
		width: .97em;
		height: .97em;
		box-sizing: border-box;
		border-radius: 50%;
		border: 1px solid rgba(#ffffff, .3);
	}

	.close-button__line {
		width: 1px;
		height: 15px;
		transform-origin: left;
	}

	.close-button__line-fill {
		height: 100%;
		width: 100%;
		background-color: #ffffff;
	}

	.close-button__center-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.close-button__first-line {
		transform: rotate(45deg);

		.close-button__line-fill {
			transform-origin: top;
		}
	}

	.close-button__second-line {
		transform: rotate(135deg);

		.close-button__line-fill {
			transform-origin: bottom;
		}
	}

</style>



// WEBPACK FOOTER //
// CloseButton.vue?0cc7550c