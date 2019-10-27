<template lang="html">

		<div class="slide-indicator">
			<div class="slide-indicator__current-slide" ref="currentSlide">{{ currentSlideId + 1 }}</div>
			<div class="slide-indicator__separator" ref="separator"></div>
			<div class="slide-indicator__slider-length" ref="sliderLength">{{ sliderLength }}</div>
			<div class="slide-indicator__slider-name" ref="sliderName">{{ sliderName }}</div>
		</div>

</template>

<script>

import SplitText from '../../commons/script/SplitText.js'
import {TimelineLite, Expo} from 'gsap'
import {EventBus} from '../../event-bus.js'

import SliderStore from '../../stores/SliderStore.js'
import LoaderStore from '../../stores/LoaderStore.js'

const slides = require('./slides.json').slides

export default {

	data(){
		return {
			state: SliderStore.state,
			loaderState: LoaderStore.state,
			currentSlideId: SliderStore.state.currentSlideId,
			sliderLength: slides.length,
			sliderName: 'Projects',
			isVisible: false
		}
	},

	computed: {
		pageReady(){
			return this.loaderState.pageReady
		},
		titleColor(){
			return slides[this.state.currentSlideId].titleColor
		},
		textColor(){
			return slides[this.state.currentSlideId].textColor
		},
		currentTitleColor(){
			return slides[SliderStore.state.currentSlideId].titleColor
		},
		currentTextColor(){
			return slides[SliderStore.state.currentSlideId].textColor
		}
	},

	mounted(){

		let splittedSliderName = new SplitText(this.$refs.sliderName, {
			classToGive: 'slide-indicator__slider-name__splitted'
		})

		this.$route.name !== 'case-study' && this.pageReady ? this.appearAnim() : undefined

		this.events()
	},

	beforeDestroy(){
		this.unlistenEvents()
	},

	methods: {

		events(){
			EventBus.$on('slide-next',this.nextAnim)
			EventBus.$on('slide-prev', this.prevAnim)
			EventBus.$on('leave-page', this.leaveAnim)
			EventBus.$on('go-to-case-study', this.leaveAnim)
			EventBus.$on('close-case-study', this.appearAnim)
			EventBus.$on('page-ready', this.loaderReady)
			EventBus.$on('hide-case-study', this.nextCaseStudy)
		},

		unlistenEvents(){
			EventBus.$off('slide-next',this.nextAnim)
			EventBus.$off('slide-prev', this.prevAnim)
			EventBus.$off('leave-page', this.leaveAnim)
			EventBus.$off('go-to-case-study', this.leaveAnim)
			EventBus.$off('close-case-study', this.appearAnim)
			EventBus.$off('page-ready', this.loaderReady)
			EventBus.$off('hide-case-study', this.nextCaseStudy)
		},

		nextCaseStudy(){
			this.setNewSlideId()
			this.appearAnim()
		},

		loaderReady(){
			this.$route.name !== 'case-study' ? this.appearAnim() : undefined
		},

		appearAnim(){

			let tl = new TimelineLite({delay: .5, paused: true})
				tl.set(this.$el, {autoAlpha: 1})
				tl.set(this.$refs.currentSlide, {color: this.currentTitleColor})
				tl.set(this.$refs.sliderLength, {color: this.currentTitleColor})
				tl.set(this.$refs.separator, {backgroundColor: this.currentTitleColor})
				tl.set(this.$refs.sliderName, {color: this.currentTextColor})
				tl.fromTo(this.$refs.currentSlide, 1.5, {y: -30,autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Expo.easeOut})
				tl.fromTo(this.$refs.sliderLength, 1.5, {y: 30,autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Expo.easeOut}, 0)
				tl.fromTo(this.$refs.separator, 1.5, {scaleY: 0,autoAlpha: 0}, {scaleY: 1, autoAlpha: 1, ease: Expo.easeOut}, '-=1.5')
				tl.staggerFromTo(this.$refs.sliderName.children, 2, {y: 10, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Expo.easeOut, force3D: true }, .06, 0)

				if (!this.isVisible) {
					tl.play()
					this.isVisible = true
				}

		},

		leaveAnim(){
			this.isVisible = false

			let tl = new TimelineLite()
				tl.to(this.$refs.currentSlide, .6, {y: -30,autoAlpha: 0, ease: Expo.easeIn})
				tl.to(this.$refs.sliderLength, .6, {y: 30,autoAlpha: 0, ease: Expo.easeIn}, 0)
				tl.to(this.$refs.separator, .6, {scaleY: 0,autoAlpha: 0, ease: Expo.easeIn}, '-=1')
				tl.staggerTo(this.$refs.sliderName.children, .4, {y: 5, autoAlpha: 0, ease: Expo.easeIn, force3D: true }, -.04, 0)
		},

		prevAnim(){
			let tl = new TimelineLite()
				tl.to(this.$refs.currentSlide, 1, {y: 30, autoAlpha: 0, ease: Expo.easeIn})
				tl.set(this.$refs.currentSlide, {y: -30})
				tl.call(this.setNewSlideId)
				tl.to(this.$refs.currentSlide, 2, {y: 0, color: this.titleColor, autoAlpha: 1, ease: Expo.easeOut})
				tl.to(this.$refs.sliderLength, 2, {color: this.titleColor, ease: Expo.easeOut}, '-=2')
				tl.to(this.$refs.separator, 2, {backgroundColor: this.titleColor, ease: Expo.easeOut}, '-=2')
				tl.to(this.$refs.sliderName, 2, {color: this.textColor, ease: Expo.easeOut}, '-=2')
		},

		nextAnim(){
			let tl = new TimelineLite()
				tl.to(this.$refs.currentSlide, 1, {y: -30, autoAlpha: 0, ease: Expo.easeIn})
				tl.set(this.$refs.currentSlide, {y: 30})
				tl.call(this.setNewSlideId)
				tl.to(this.$refs.currentSlide, 2, {y: 0, color: this.titleColor, autoAlpha: 1, ease: Expo.easeOut})
				tl.to(this.$refs.sliderLength, 2, {color: this.titleColor, ease: Expo.easeOut}, '-=2')
				tl.to(this.$refs.separator, 2, {backgroundColor: this.titleColor, ease: Expo.easeOut}, '-=2')
				tl.to(this.$refs.sliderName, 2, {color: this.textColor, ease: Expo.easeOut}, '-=2')
		},

		setNewSlideId(){
			this.currentSlideId = SliderStore.state.currentSlideId
		}
	}

}
</script>

<style lang="scss">

	.slide-indicator {
		position: absolute;
		left: 40px;
		top: 50%;
		transform: translateY(-50%);
		font-family: 'SorrenMedium';
		text-transform: uppercase;
		font-size: 22px;
		text-align: center;
		visibility: hidden;
	}

	.slide-indicator__separator {
		display: inline-block;
		width: 1px;
		height: 2.4em;
		margin: 0px .3em;
		transform-origin: center;
	}

	.slide-indicator__slider-length {
		display: inline-block;
		font-size: 1.5em;
	}

	.slide-indicator__current-slide {
		display: inline-block;
		vertical-align: bottom;
		font-size: 3em;
		width: .2em;
	}

	.slide-indicator__slider-name {
		margin-top: .4em;
		letter-spacing: .07em;
	}

	.slide-indicator__slider-name__splitted {
		display: inline-block;
		white-space: pre;
	}

</style>



// WEBPACK FOOTER //
// SlideIndicator.vue?9b828cd0