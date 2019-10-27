<template lang="html">
	<a class="next-button" :class="{ 'is-hiding': isHiding }" @click.prevent.once="onClick" @mouseover.prevent="onMouseOver" @mouseout.prevent="onMouseOut">
		<div class="next-button__content" ref="buttonContent">
			<div class="next-button__subtitle">Next project</div>
			<div class="next-button__title-container">
				<span class="next-button__title">
					{{ nextSlide.title }}
					<div class="next-button__line" ref="hoverLine"></div>
				</span>
			</div>
		</div>
		<div class="next-button__background" ref="background"></div>
	</a>
</template>

<script>

import {TimelineLite, Expo} from 'gsap'
import {EventBus} from '../../event-bus'

import SliderStore from '../../stores/SliderStore.js'
import MenuStore from '../../stores/MenuStore.js'
const slides = require('../../shared-components/Slider/slides.json').slides

export default {

	name: 'next-button',

	data(){
		return {
			slide: this.$parent.slide,
			sliderState: SliderStore.state,
			blocked: false,
			isHiding: false
		}
	},

	created(){
		this.nextSlide = slides[this.getNextSlideId()]
	},

	mounted(){
		this.mouseOverAnim = new TimelineLite({paused: true})
			this.mouseOverAnim.to(this.$refs.hoverLine, .5, {autoAlpha: 1, scaleX: 1, ease: Expo.easeOut})
	},

	computed: {

		currentSlideId(){
			return this.sliderState.currentSlideId
		}

	},

	methods: {

		onClick(){
			let parentSmoothScroll = this.$parent.smoothScroll
			let offset = (parentSmoothScroll.height - window.innerHeight) * -1
			MenuStore.blockMenu()
			parentSmoothScroll.off()
			parentSmoothScroll.scrollTo(offset, this.nextProject)
		},

		nextProject(){
			this.newSlideId = this.getNextSlideId()
			this.oldSlideId = this.currentSlideId
			SliderStore.setSlideId(this.newSlideId)
			EventBus.$emit('next-case-study', {
				currentId: this.newSlideId,
				oldId: this.oldSlideId,
			})
			this.blocked = true
			this.leaveAnim()
		},

		getNextSlideId(){
			let nextSlideId
			slides[this.currentSlideId + 1] ? nextSlideId = this.currentSlideId + 1 : nextSlideId = 0
			return nextSlideId
		},

		leaveAnim(){
			let tl = new TimelineLite({onComplete: ()=>{ this.$router.replace( { name: 'work' }) } })
				tl.add(this.mouseOverAnim.reverse())
				tl.to(this.$refs.background, 1, {scaleY: 1.1, ease: Expo.easeOut}, '-=.1')
				tl.staggerTo(this.$refs.buttonContent.children, .7, {y: -200, autoAlpha: 0, ease: Expo.easeIn}, .06, '-=1')
				tl.call(this.hideCaseStudy)
				tl.to(this.$refs.background, 1, {transformOrigin: '0% 0%',scaleY: 0, ease: Expo.easeOut})
		},

		hideCaseStudy(){
			TweenLite.set(this.$el, {backgroundColor: 'rgba(0,0,0,0)'})
			this.isHiding = true
			EventBus.$emit('hide-case-study', {
				currentId: this.newSlideId,
				oldId: this.oldSlideId,
			})
		},

		onMouseOver(){
			!this.blocked && this.mouseOverAnim.play()
		},

		onMouseOut(){
			!this.blocked && this.mouseOverAnim.reverse()
		}

	}

}
</script>

<style lang="scss">

	.next-button {
		color: #ffffff;
		cursor: pointer;
		position: relative;
		width: 100%;
		font-size: 110px;
		padding: 1.7em 0em;
		display: block;
		background-color: #03162A;
		text-align: center;
		z-index: 10;

		&:before {
			content: '';
			position: absolute;
			top: 0px;
			display: block;
			background-color: #011933;
			width: 100%;
			height: 5px;
			transform: translateY(-5px);
		}

		@media screen and (max-width: 1300px){
			font-size: 80px;
		}

	}

	.next-button.is-hiding {
		&:before {
			visibility: hidden;
		}
	}

	.next-button__title {
		font-family: 'SorrenMedium';
		text-transform: uppercase;
		letter-spacing: .05em;
		position: relative;
		padding: 0em .1em;
		z-index: 1;
	}

	.next-button__subtitle {
		font-family: 'PlayfairDisplay';
		font-style: italic;
		font-size: .15em;
		letter-spacing: .05em;
		margin-bottom: .7em;
		color: #9AB8DC;
	}

	.next-button__line {
		width: 100%;
		height: .4em;
		opacity: 0;
		position: absolute;
		left: 0px;
		top: 50%;
		background-image: linear-gradient(-135deg, #FFC3CA 0%, #7E9DF6 100%);
		transform: translate3d(0px, -50%, 0px) scaleX(0);
		transform-origin: left;
		z-index: -1;
	}

	.next-button__background {
		background-color: darken(#03162A, 1);
		width: 100%;
		height: 100vh;
		bottom: 0px;
		left: 0px;
		transform: scaleY(0);
		transform-origin: bottom;
		position: absolute;
		z-index: 9;
	}

	.next-button__content {
		position: relative;
		z-index: 11;
	}

</style>



// WEBPACK FOOTER //
// NextButton.vue?44fb95ca