<template lang="html">
	<div class="case-study">
		<div class="case-study__header" ref="header">
			<close-button></close-button>
		</div>
		<div class="case-study__scroll-zone" ref="scrollZone">
			<div class="case-study__pane" ref="pane"></div>
			<div class="case-study-content-background" ref="contentBackground">
				<div class="case-study__content case-study__row" ref="content">
					<div class="case-study__infos" ref="infos">
						<div class="case-study__info">
							<div class="case-study__info__title">Context</div>
							<div class="case-study__info__text">{{ slide.context }}</div>
						</div>
						<div class="case-study__info">
							<div class="case-study__info__title">Role</div>
							<div class="case-study__info__text">{{ slide.role }}</div>
						</div>
						<div class="case-study__info">
							<div class="case-study__info__title">Year</div>
							<div class="case-study__info__text">{{ slide.period }}</div>
						</div>
					</div>
					<div class="case-study__intro case-study__row">
						<div class="case-study__title">Presentation</div>
						<div class="case-study__intro__text">{{ slide.description }}</div>
						<link-button v-if="slide.url !== ''" :url="slide.url"></link-button>
					</div>

					<component v-bind:is="projectName"></component>

			</div>
		</div>
		<next-button></next-button>
	</div>
</div>
</template>

<script>

import CloseButton from '../../shared-components/CaseStudy/CloseButton.vue'
import NextButton from '../../shared-components/CaseStudy/NextButton.vue'
import Lightswan from '../../shared-components/CaseStudy/Lightswan.vue'
import Maje from '../../shared-components/CaseStudy/Maje.vue'
import Shopsquare from '../../shared-components/CaseStudy/Shopsquare.vue'
import LinkButton from '../../shared-components/CaseStudy/LinkButton.vue'

import {TimelineLite, Expo} from 'gsap'
import SmoothScroll from '../../commons/script/Parallax.js'
import {EventBus} from  '../../event-bus.js'
import _ from 'lodash'

import SliderStore from '../../stores/SliderStore.js'
import MenuStore from '../../stores/MenuStore.js'
import AnimationStore from '../../stores/AnimationStore.js'
import LoaderStore from '../../stores/LoaderStore.js'

const slides = require('../../shared-components/Slider/slides.json').slides

export default {

	name: 'case-study',

	data(){
		return {
			isOpen: true,
			stopAf: false,
			isApear: false,
			menuState: MenuStore.state,
			loaderState: LoaderStore.state,
			projectName: ''
		}
	},

	computed: {

		pageReady(){
			return this.loaderState.pageReady
		},

		menuIsOpen(){
			return !this.menuState.isClosed
		}

	},

	created(){
		let projectId = SliderStore.state.currentSlideId
		this.slide = slides[projectId]
		this.blockColorStyle = {
			backgroundColor: this.slide.backgroundColor
		}
	},

	mounted(){
		EventBus.$on('page-ready', this.loaderReady)
		SliderStore.openCaseStudy()
		this.closeHeaderAnim = new TimelineLite({paused: true})
			this.closeHeaderAnim.to(this.$refs.header, .7, {y: -100, ease: Expo.easeInOut})

		this.loaderReady()

		this.smoothScroll = new SmoothScroll(.1, {
			el: this.$refs.scrollZone,
			mouseMultiplier: .4
		})

	},

	beforeDestroy(){
		SliderStore.closeCaseStudy()
		this.unlistenEvents()
		this.smoothScroll.destroy()
	},

	beforeRouteLeave (to, from, next) {
		if (!MenuStore.state.isAnimated) {
			this.leave(next)
		}
	},

	beforeRouteEnter(to, from, next){
		let projectToSearch = to.params.id
		let projectId = _.findIndex(slides, {'title': projectToSearch, 'case-study': true})
		if (projectId < 0) {
			return window.location = '/work'
		}
		else {
			SliderStore.setSlideId(projectId)
			next(vm=>{
				vm.projectName = projectToSearch.toLowerCase()
			})
		}
	},

	methods: {

		events(){
			window.addEventListener('wheel', this.wheel)
			window.addEventListener( 'resize', _.throttle(this.resize, 200) )
			EventBus.$on('case-study-closed', this.leaveWorkPage)
			EventBus.$on('next-case-study', this.nextCaseStudy)
			EventBus.$on('hide-case-study', this.hideCaseStudy)
		},

		unlistenEvents(){
			window.removeEventListener('wheel', this.wheel)
			window.removeEventListener( 'resize', _.throttle(this.resize, 200) )
			EventBus.$off('page-ready', this.loaderReady)
			EventBus.$off('case-study-closed', this.leaveWorkPage)
			EventBus.$off('next-case-study', this.nextCaseStudy)
			EventBus.$off('hide-case-study', this.hideCaseStudy)
		},

		resize(){
			this.smoothScroll.onResize()
		},

		loaderReady(){
			this.pageReady && this.appearAnim()
		},

		nextCaseStudy(){
			this.smoothScroll.destroy()
			window.removeEventListener('wheel', this.wheel)
			this.stopAf = true
			this.isOpen = false
			this.closeHeaderAnim.play()
		},

		hideCaseStudy(){
			TweenLite.set(this.$refs.contentBackground, {autoAlpha: 0})
		},

		appearAnim(){
			let tl = new TimelineLite({onComplete: this.appear})
				tl.fromTo(this.$refs.scrollZone, .8, {y: window.innerHeight}, {y: 0, ease: Expo.easeOut})
				tl.staggerFromTo(this.$refs.infos.children, 1, {y: 20, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Expo.easeOut, force3D: true}, .05, "-=.3")
				tl.fromTo(this.$refs.header, 1, {y:-100}, {y: 0, ease: Expo.easeOut}, '-=1.5')
		},

		leaveWorkPage(){
			if (this.next !== undefined) {
				return _.delay(this.next, 100)
			}
		},

		appear(){
			SliderStore.setActive()
			this.smoothScroll.init()
			this.events()
			this.getScrollValue()
			this.isOpen = true
			this.isApear = true
		},

		getScrollValue(){
			!this.stopAf ? requestAnimationFrame(this.getScrollValue) : undefined
			let newPosY = this.smoothScroll.currentY * .7
			SliderStore.setPosY(newPosY)
		},

		leaveAnim(){
			let tl = new TimelineLite()
				tl.staggerTo(this.$refs.infos.children, .5, {y: 20, autoAlpha: 0, ease: Expo.easeIn}, .05)
				tl.to(this.$refs.scrollZone, .5, {y: window.innerHeight, ease: Expo.easeIn}, 0)
				tl.to(this.$refs.header, .4, {y: -100, ease: Expo.easeIn}, 0)
		},

		leaveSequence(){
			EventBus.$emit('close-case-study')
			this.stopAf = true
			this.smoothScroll.destroy()
			this.leaveAnim()
		},

		leave(next){
			window.removeEventListener('wheel', this.wheel)
			this.menuIsOpen && EventBus.$emit('close-menu')
			MenuStore.menuIsAnimated()
			this.smoothScroll.off()
			this.smoothScroll.scrollTo(0, this.leaveSequence)
			this.next = next
		},

		wheel(){
			if (event.deltaY > 0 && this.isOpen) {
				this.isOpen = false
				this.closeHeaderAnim.play()
			}
			else if (event.deltaY < 0 && !this.isOpen) {
				this.isOpen = true
				this.closeHeaderAnim.reverse()
			}
		}
	},

	components: {
		CloseButton,
		NextButton,
		LinkButton,
		Lightswan,
		Maje,
		Shopsquare
	}

}
</script>

<style lang="scss">

	.case-study {
		height: 100%;
		position: relative;
		z-index: 1;
		font-size: 30px;
	}

	.case-study__header {
		background-color: #011933;
		height: 90px;
		width: 100%;
		top: 0px;
		left: 0px;
		z-index: 1;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.case-study__pane {
		height: 95vh;
		width: 100%;
	}

	.case-study-content-background {
		width: 100%;
		height: 100%;
		background-color: #011933;
		padding-bottom: 5em;
	}

	.case-study__content {
		min-height: 100%;
		color: #ffffff;
	}

	.case-study__row {
		width: 760px;
		margin: auto;
	}

	.case-study__scroll-zone {
		position: absolute;
		width: 100%;
	}

	.case-study__infos {
		font-size: 21px;
		padding: 2.5em 0em;
		width: 95%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: darken(#011933, 2);
		transform: translateY(-50%);
		transform-origin: bottom;
	}

	.case-study__info {
		display: inline-block;
		text-align: center;
		margin-left: 5em;

		&:first-child {
			margin-left: 0px;
		}

	}

	.case-study__info__title {
		font-family: 'SorrenMedium';
		text-transform: uppercase;
		letter-spacing: .08em;
		margin-bottom: .2em;
	}

	.case-study__info__text {
		font-family: 'PlayfairDisplay';
		font-style: italic;
		text-transform: capitalize;
		font-size: .7em;
		opacity: .5;
	}

	.case-study__intro {
		font-size: 30px;
		margin-top: 1.5em;
	}

	.case-study__title {
		font-family: 'SorrenMedium';
		letter-spacing: .09em;
		text-transform: uppercase;
		margin-bottom: 1.3em;

		&:after {
			content: '';
			margin-top: .2em;
			display: block;
			width: 1em;
			height: 2px;
			background-color: #ffffff;
		}
	}

	.case-study__intro__text {
		font-family: 'PlayfairDisplay';
		font-size: .8em;
		line-height: 1.5em;
		color: #CCE4FF;
	}

	.case-study__photo-background-container {
		height: 400px;
		display: flex;
		justify-content: center;
		align-items: center;

		margin: 250px 0px;
	}

	.case-study__photo-background {
		position: absolute;
		left: 0px;
		width: 100%;
		height: 400px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.case-study__photo  {
		position: relative;
		display: block;
	}

	.case-study__typography {
		font-size: 30px;
	}

	.case-study__typography-block {
		margin-top: 1em;
		padding: 1.8em 1.8em;
		background-color: darken(#011933, 2);
	}

	.case-study__typo-img {
		margin-top: .5em;
	}

	.case-study__mini-title {
		font-family: 'SorrenMedium';
		text-transform: uppercase;
		letter-spacing: .07em;
		font-size: .8em;
		opacity: .3;
	}

	.case-study__colors {
		font-size: 30px;
		margin-top: 6em;
	}

	.case-study__color-block {
		display: inline-block;
		margin-left: 1.3em;

		&:first-child {
			margin-left: 0em;
		}

	}

	.case-study__color {
		height: 3em;
		width: 3em;
		border-radius: 50%;
	}

	.case-study__text-content {
		font-family: 'PlayfairDisplay';
		font-size: 14px;
		line-height: 2em;
		opacity: .6;
	}

	.case-study__line {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.case-study__half-block {
		position: relative;
		display: inline-block;
		width: 50%;
	}

	.case-study__mobile-screen {
		margin: auto;
		position: relative;
		width: 50%;
	}

	.case-study__screen-circle {
		width: 350px;
		border-radius: 50%;
		height: 350px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.case-study__full-screenshot {
		width: 100%;
		margin-top: 10em;
	}

	.case-study__full-screenshot__bg {
		width: 100%;
		margin-top: 160px;
		position: absolute;
		left: 0px;
	}

	.case-study__full-screenshot__img {
		display: block;
		position: relative;
	}

	.case-study__img {
		box-shadow: 0 0 30px 0 rgba(0,0,0,.40);
	}

</style>



// WEBPACK FOOTER //
// CaseStudy.vue?adddcf6c