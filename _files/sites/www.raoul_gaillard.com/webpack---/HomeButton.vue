<template lang="html">

	<div class="home-button">
		<div class="home-button__wrapper">
			<div class="home-button__text" ref="buttonText">See my work</div>
			<router-link class="home-button__square" to="/work" ref="square" @mouseover.native="mouseover" @mouseout.native="mouseout"></router-link>
			<div class="home-button__arrow" ref="arrow">
				<div class="home-button__arrow__line" ref="line"></div>
				<img class="home-button__arrow__img" ref="arrowImg" src="/assets/imgs/arrow.svg" alt="">
			</div>
		</div>
	</div>

</template>

<script>

	import {TimelineLite, Expo} from 'gsap'
	import {EventBus} from '../../event-bus.js'
	import SplitText from '../../commons/script/SplitText.js'

	import LoaderStore from '../../stores/LoaderStore.js'

	export default {

		data(){
			return {
				loaderState: LoaderStore.state
			}
		},

		computed: {

			pageReady(){
				return this.loaderState.pageReady
			}

		},

		mounted: function(){

			let splittedText = new SplitText(this.$refs.buttonText, {classToGive: 'home-btn-st'})
			this.$splittedText = this.$el.querySelectorAll('.home-btn-st')

			this.appearAnim = new TimelineLite({paused: true, delay: .5})
				this.appearAnim.staggerFrom(this.$splittedText, 2, {y:-10, autoAlpha: 0, ease: Expo.easeOut}, .03)
				this.appearAnim.from(this.$refs.arrowImg, 1.5, {y:-50, autoAlpha: 0, ease: Expo.easeOut}, .05, 0)
				this.appearAnim.from(this.$refs.line, 1.5, {scaleY:0, autoAlpha: 0, ease: Expo.easeOut}, .05, 0)
				this.appearAnim.from(this.$refs.square.$el, 1.5, {autoAlpha: 0, ease: Expo.easeOut}, .05, 0)

			this.pageReady && this.appearAnim.play()

			this.homeButtonHoverAnim = new TimelineLite({paused: true})
				this.homeButtonHoverAnim.to(this.$refs.square.$el, .5, {y:5, rotateY:90, ease: Expo.easeInOut})
				this.homeButtonHoverAnim.to(this.$refs.line, .5, {y:5, scaleY:1.3, ease: Expo.easeInOut}, 0)
				this.homeButtonHoverAnim.to(this.$refs.arrowImg, .5, {y:12, ease: Expo.easeInOut}, 0)
				this.homeButtonHoverAnim.to(this.$refs.buttonText, .5, {y:5, ease: Expo.easeInOut}, 0)

			this.leaveAnim = new TimelineLite({paused: true})
				this.leaveAnim.to(this.$el, .6, {autoAlpha: 0, ease: Expo.easeIn})

			this.events()

		},

		beforeDestroy(){
			this.unlistenEvents()
		},

		methods: {
			mouseover(){
				this.homeButtonHoverAnim.play()
			},
			mouseout(){
				this.homeButtonHoverAnim.reverse()
			},
			leavePage(){
				this.leaveAnim.play(0)
			},
			loaderReady(){
				this.appearAnim.play()
			},
			events(){
				EventBus.$on('leave-page', this.leavePage)
				EventBus.$on('page-ready', this.loaderReady)
			},
			unlistenEvents(){
				EventBus.$off('leave-page', this.leavePage)
				EventBus.$off('page-ready', this.loaderReady)
			}
		}
	}
</script>

<style lang="scss">

	$border-width: 4px;
	$border-color-1: #99A8E5;
	$border-color-2: #1E2A77;

	.home-button {
		position: absolute;
		bottom: 60px;
		width: 100%;
		text-decoration: none;
	}

	.home-button__text {
		font-family: 'SorrenMedium';
		font-size: 19px;
		color: #ffffff;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 15px;
	}

	.home-button__square {
		width: 38px;
		margin: auto;
		display: block;
		cursor: pointer;
		height: 60px;
		box-sizing: border-box;
		border-top: $border-width solid $border-color-1;
  	border-bottom: $border-width solid 	$border-color-2;
  	background-position: 0 0, 100% 0 ;
  	background-repeat: no-repeat;
  	background-size: $border-width 100%;
  	background-image: linear-gradient(to bottom, $border-color-1 0%, 	$border-color-2 100%), linear-gradient(to bottom, $border-color-1 0%, 	$border-color-2 100%);
	}

	.home-button__arrow {
		text-align: center;
		position: absolute;
		margin-left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}

	.home-button__arrow__line {
		width: 1px;
		height: 50px;
		margin: auto;
		background-color: #ffffff;
		transform-origin: top;
	}

	.home-button__arrow__img {
		transform: translateY(-5px);
	}

	.home-btn-st {
		display: inline-block;
		white-space: pre;
	}

</style>



// WEBPACK FOOTER //
// HomeButton.vue?60c15b43