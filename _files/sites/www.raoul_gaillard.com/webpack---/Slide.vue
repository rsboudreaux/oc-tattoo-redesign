<template lang="html">
	<div class="slide" :class=" 'slide__' + title ">
		<div class="slide-img" ref="slideImg">
			<img class="slide-img__shape"
			:src="shapePath"
			:srcset="shapePath2x + ' 2x'"
			alt="">
			<img class="slide-img__img"
			:src="illustrationPath"
			:srcset="illustrationPath2x + ' 2x'"
			alt="">
		</div>
		<div class="slide__info" ref="slideInfo">
			<div class="slide__id" :style="titleColorStyle">
				<div class="slide__id__text">0{{ slideId + 1 }}.</div>
			</div>

			<h2 class="slide__title" :style="titleColorStyle">{{ title }}</h2>
			<div class="slide__description" :style="textColorStyle">{{ description }}</div>

			<div class="slide__sub-info">
				<div class="slide__sub-info__info">
					<div class="slide__sub-info__info__title" :style="titleColorStyle">Role</div>
					<div class="slide__sub-info__info__description" :style="textColorStyle">{{ role }}</div>
				</div>

				<div class="slide__sub-info__info">
					<div class="slide__sub-info__info__title" :style="titleColorStyle">Context</div>
					<div class="slide__sub-info__info__description" :style="textColorStyle">{{ context }}</div>
				</div>

				<div class="slide__sub-info__info">
					<div class="slide__sub-info__info__title" :style="titleColorStyle">Year</div>
					<div class="slide__sub-info__info__description" :style="textColorStyle">{{ period }}</div>
				</div>

			</div>

			<a class="slide__button" v-if="caseStudy" @click.prevent="loadCaseStudy" @mouseover="buttonHover" @mouseout="buttonOut" ref="button" :style="buttonStyle">
				<div v-if="isLoading" class="slide__button-text" ref="buttonText">{{ loadingState }}</div>
				<div v-else="isLoading" class="slide__button-text" ref="buttonText">view more</div>
				<div class="slide__button__loader" ref="loadingBar" :style="loadingButtonStyle"></div>
			</a>
			<a class="slide__button" v-else="caseStudy" :href="url" target="_blank" @mouseover="buttonHover" @mouseout="buttonOut" ref="button" :style="buttonStyle">
				<div class="slide__button-text" ref="buttonText">Go to website</div>
				<div class="slide__button__loader" ref="loadingBar" :style="loadingButtonStyle"></div>
			</a>

		</div>
	</div>
</template>

<script>

import HexToRgba from '../../commons/script/HexToRgba.js'
import SplitText from '../../commons/script/SplitText.js'
import {TimelineLite, Expo} from 'gsap'
import {EventBus} from '../../event-bus.js'
import AssetsLoader from 'assets-loader'
import _ from 'lodash'

import SliderStore from '../../stores/SliderStore.js'
import MenuStore from '../../stores/MenuStore.js'
import AnimationStore from '../../stores/AnimationStore.js'
import LoaderStore from '../../stores/LoaderStore.js'

import LoaderMixin from '../Loader/LoaderMixin.js'

const slides = require('./slides.json').slides

export default {
	props: [
		'title',
		'description',
		'context',
		'role',
		'period',
		'slideId',
		'titleColor',
		'textColor',
		'shapePath',
		'shapePath2x',
		'illustrationPath',
		'illustrationPath2x',
		'caseStudy',
		'url'
 	],

	mixins: [LoaderMixin],

	data(){
		return {
			state: SliderStore.state,
			menuState: MenuStore.state,
			animationState: AnimationStore.state,
			loaderState: LoaderStore.state,
			imgName: this.title,
			isLoading: false,
			progress: 0,
			nextHook: false,
			buttonIsClickable: true,
			loadNextProject: false,
			textColorStyle: {
				color: this.textColor
			},
			titleColorStyle: {
				color: this.titleColor
			},
			loadingButtonStyle: {
				backgroundColor: new HexToRgba().convert(this.textColor, 0.3)
			},
			buttonStyle: {
				color: this.titleColor,
				borderColor: new HexToRgba().convert(this.textColor, 0.3)
			}
		}
	},

	computed: {
		pageReady(){
			return this.loaderState.pageReady
		},
		nextAppear(){
			return this.state.nextAppear
		},
		getSliderPosY(){
			return this.state.posY
		},
		currentSlideId(){
			return this.state.currentSlideId
		},
		menuIsClosed(){
			return this.menuState.isClosed
		},
		sliderIsAnimated(){
			return this.state.isAnimated
		},
		getCurrentAnimAppear(){
			return this.animationState.appear
		},
		getCurrentAnimLeave(){
			return this.animationState.leave
		},
		loadingState(){
			let progress = this.progress*100
			return 'Loading ' + progress.toFixed() + '%'
		}
	},

	mounted(){

		this.goUpAnim = new TimelineLite({paused: true})
			this.goUpAnim.staggerTo(this.$refs.slideInfo.children, .5, {y: -100, autoAlpha: 0,ease: Expo.easeIn, force3D: true}, .05)
			this.goUpAnim.to(this.$refs.slideImg, .8, {y: -window.innerHeight, ease: Expo.easeIn}, 0)
			this.goUpAnim.set(this.$el, {autoAlpha: 0})

		this.goDownAnim = new TimelineLite({paused: true})
			this.goDownAnim.staggerTo(this.$refs.slideInfo.children, .5, {y: 100, autoAlpha: 0,ease: Expo.easeIn, force3D: true}, -.05)
			this.goDownAnim.to(this.$refs.slideImg, .8, {y: window.innerHeight,ease: Expo.easeIn}, 0)
			this.goDownAnim.set(this.$el, {autoAlpha: 0})

		this.openMenuAnim = new TimelineLite({paused: true})
			this.openMenuAnim.call(()=>{
				this.closeMenuAnim.kill()
			})
			this.openMenuAnim.staggerTo(this.$refs.slideInfo.children, 1.4, {y: 0, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, .05)
			this.openMenuAnim.to(this.$refs.slideImg, 2, {z: 0,ease: Expo.easeOut}, 0)

		this.closeMenuAnim = new TimelineLite({paused: true})
			this.closeMenuAnim.call(()=>{
				this.openMenuAnim.kill()
			})
			this.closeMenuAnim.staggerTo(this.$refs.slideInfo.children, .2, {y: 100, autoAlpha: 0,ease: Expo.easeIn, force3D: true}, -.04)
			this.closeMenuAnim.to(this.$refs.slideImg, 1.5, {z: -800, ease: Expo.easeOut}, 0)

		this.buttonHoverAnim = new TimelineLite({paused: true})
			this.buttonHoverAnim.to(this.$refs.buttonText, .2,{y: -20, rotationX: 45,autoAlpha: 0, ease: Expo.easeIn})
			this.buttonHoverAnim.set(this.$refs.buttonText,{y: 20, rotationX: -45})
			this.buttonHoverAnim.to(this.$refs.buttonText, .2,{y: 0, rotationX: 0,autoAlpha: 1, ease: Expo.easeOut})
			this.buttonHoverAnim.to(this.$refs.button, .5, {borderColor: new HexToRgba().convert(this.textColor, 1), ease: Expo.easeInOut}, 0)

		this.events()
		this.loaderReady()
	},

	beforeDestroy(){
		this.unlistenEvents()
	},

	methods: {

		events(){
			EventBus.$on('slide-prev', this.slidePrev)
			EventBus.$on('slide-next', this.slideNext)
			EventBus.$on('toggle-menu', this.toggleMenu)
			EventBus.$on('leave-page', this.leavePage)
			EventBus.$on('close-case-study', this.closeCaseStudy)
			EventBus.$on('click-close-button', this.setNextHook)
			EventBus.$on('page-ready', this.loaderReady)
			EventBus.$on('hide-case-study', this.nextCaseStudy)
		},

		unlistenEvents(){
			EventBus.$off('slide-prev', this.slidePrev)
			EventBus.$off('slide-next', this.slideNext)
			EventBus.$off('toggle-menu', this.toggleMenu)
			EventBus.$off('click-close-button', this.setNextHook)
			EventBus.$off('leave-page', this.leavePage)
			EventBus.$off('close-case-study', this.closeCaseStudy)
			EventBus.$off('page-ready', this.loaderReady)
			EventBus.$off('hide-case-study', this.nextCaseStudy)
		},

		setNextHook(){
			this.nextHook = false
		},

		nextCaseStudy(payload){
			let currentSlideId = payload.currentId
			let oldSlideId = payload.oldId

			if (this.slideId === this.currentSlideId) {
				this.loadNextProject = true
				this.isLoading = true
			}

			this.nextHook = true

			if (this.slideId === currentSlideId) {
				this.buttonIsClickable = false
				TweenLite.set(this.$el, {autoAlpha: 1})
				TweenLite.set(this.$refs.slideInfo.children, {y: 100, autoAlpha: 0})
				TweenLite.set(this.$refs.slideInfo.children[0], {y: 100, autoAlpha: 1})
				TweenLite.set(this.$refs.slideInfo.children[1], {y: 100, autoAlpha: 1})
				TweenLite.set(this.$refs.slideImg, {y: 0})
				TweenLite.set(this.$refs.slideImg, {z: -100})
				TweenLite.set(this.$refs.slideInfo, {y: 0})
				TweenMax.staggerTo(this.$refs.slideInfo.children, 1, {y: 0, autoAlpha: 1, ease: Expo.easeOut, force3D: true}, .04)
				TweenLite.to(this.$refs.slideImg, 1.4, {z: 0, ease: Expo.easeOut}, 0)
				_.delay( ()=>{
					this.caseStudyClosed()
				}, 1500 )
			}

			if (this.slideId === oldSlideId) {
				this.buttonIsClickable = true
				TweenLite.set(this.$refs.slideImg, {z: 0})
				TweenLite.set(this.$el, {autoAlpha: 0})
			}

		},

		getOldSlideId(){
			let oldSlideId
			slides[this.currentSlideId - 1] ? oldSlideId = this.currentSlideId - 1 : oldSlideId = slides.length - 1
			return oldSlideId
		},

		loaderReady(){
			this.pageReady && this.appearPage()
		},

		leavePage(routerInfo){
			let leaveAnim = this.getCurrentAnimLeave
			SliderStore.setInactive()
			TweenLite.to(this.$refs.slideImg, 1, {z: 0,ease: Expo.easeOut})
			this.currentSlideId === this.slideId ? this[leaveAnim]() : undefined
		},

		appearPage(){
			let appearAnim = this.getCurrentAnimAppear
			this.currentSlideId === this.slideId ? this[appearAnim]() : undefined
		},

		caseStudyClosed(){
			EventBus.$emit('case-study-closed', this.loadNextProject)
			MenuStore.unblockMenu()
			MenuStore.menuIsNotAnimated()
			_.delay( ()=>{
				this.nextHook = false
				this.buttonIsClickable = true
				this.loadNextProject && this.caseStudy ? this.loadCaseStudy() : undefined
				this.loadNextProject = false
			}, 100 )
		},

		closeCaseStudy(){
			let tl = new TimelineLite({paused: true, onComplete: ()=>{
				this.caseStudyClosed()
			}})
				tl.set(this.$refs.slideInfo.children,{y: 100})
				tl.set(this.$refs.slideInfo.children[2], {autoAlpha: 0})
				tl.set(this.$refs.slideInfo.children[3], {autoAlpha: 0})
				tl.set(this.$refs.slideInfo.children[4], {autoAlpha: 0})
				tl.set(this.$refs.slideImg, {z: -100})
				tl.staggerTo(this.$refs.slideInfo.children, .6, {y: 0, autoAlpha: 1, ease: Expo.easeOut, force3D: true}, .04)
				tl.to(this.$refs.slideImg, 1.4, {z: 0, ease: Expo.easeOut}, 0)

			this.slideId === this.currentSlideId && !this.nextHook ? tl.play(0) : undefined
		},

		goToCaseStudy(){
			this.buttonIsClickable = false
			if (this.slideId === this.currentSlideId) {
				EventBus.$emit('go-to-case-study')
				this.$router.replace({name: 'case-study', params: {id: this.title}})
				let tl = new TimelineLite()
					tl.to(this.$refs.slideInfo.children, 2, {y: 100,ease: Expo.easeOut, force3D: true})
					tl.to(this.$refs.slideInfo.children[2], 1, {autoAlpha: 0,ease: Expo.easeOut, force3D: true}, 0)
					tl.to(this.$refs.slideInfo.children[3], 1, {autoAlpha: 0,ease: Expo.easeOut, force3D: true}, 0)
					tl.to(this.$refs.slideInfo.children[4], 1, {autoAlpha: 0,ease: Expo.easeOut, force3D: true}, 0)
					tl.to(this.$refs.slideImg, 2, {z: -100, ease: Expo.easeOut}, 0)
					tl.set(this.$refs.loadingBar, {scaleX: 0})
			}
			else {
				TweenLite.to(this.$refs.loadingBar, 1, {scaleX: 0, ease: Expo.easeOut})
			}
		},

		loadCaseStudy(){
			if (
				!this.buttonIsClickable
				|| ( this.getSliderPosY > 1 || this.getSliderPosY < -1 )
				|| this.sliderIsAnimated
				|| this.$route.name !== 'work'
			)
			{
				return undefined
			}
			let assetsToLoad
			let caseStudyName = this.title.toLowerCase()
			window.devicePixelRatio <= 1 ? assetsToLoad = this.findAssets('1x', caseStudyName) : assetsToLoad = this.findAssets('2x', caseStudyName)

			this.isLoading = true
			this.buttonOut()

			let loader = AssetsLoader().add(assetsToLoad)
			loader.on('progress', progress=>{
				if (this.progress === undefined || progress > this.progress) {
					this.progress = progress
					TweenLite.to(this.$refs.loadingBar, .6, {scaleX: progress, ease: Expo.easeOut})
				}
			})
			loader.on('complete', ()=>{
				this.goToCaseStudy()
				this.isLoading = false
				this.progress = 0
			})
			loader.start()
		},

		appearAnim(){
			let tl = new TimelineLite({paused: true, onComplete: ()=>{
				EventBus.$emit('appear-slide')
				SliderStore.setActive()
			}})
				tl.set(this.$el, {autoAlpha: 1})
				tl.set(this.$refs.slideInfo.children, {y: 100, autoAlpha: 0})
				tl.set(this.$refs.slideImg, {z: -800})
				tl.to(this.$refs.slideImg, 3, {z: 0,ease: Expo.easeOut})
				tl.staggerTo(this.$refs.slideInfo.children, 2, {y: 0, autoAlpha: 1,ease: Expo.easeOut}, .05, '-=2.5')

			let tlCaseStudy = new TimelineLite({paused: true})
				tlCaseStudy.set(this.$el, {autoAlpha: 1})
				tlCaseStudy.set(this.$refs.slideInfo.children, {y: 200, autoAlpha: 0})
				tlCaseStudy.set(this.$refs.slideImg, {z: -1000})
				tlCaseStudy.to(this.$refs.slideImg, 3, {z: -100, ease: Expo.easeOut})
				tlCaseStudy.to(this.$refs.slideInfo.children[0], 2, {y: 100, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, '-=3')
				tlCaseStudy.to(this.$refs.slideInfo.children[1], 2, {y: 100, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, '-=2.8')

				this.$route.name === 'case-study' ? tlCaseStudy.play(0) : tl.play(0)

		},

		appearDown(delay){
			let tl = new TimelineLite({paused: true, delay: delay, onComplete: ()=>{
				SliderStore.sliderIsNotAnimated()
				EventBus.$emit('appear-slide')
				SliderStore.setActive()
			}})
				tl.set(this.$refs.slideImg, {y: window.innerHeight*2})
				tl.set(this.$el, {autoAlpha: 1})
				tl.set(this.$refs.slideInfo, {y:0})
				tl.set(this.$refs.slideInfo.children, {y:100, autoAlpha: 0})
				tl.to(this.$refs.slideImg, .55, {y: 0,ease: Expo.easeOut})
				tl.staggerTo(this.$refs.slideInfo.children, .7, {y: 0, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, .05, 0)

			let tlCaseStudy = new TimelineLite({paused: true})
				tlCaseStudy.set(this.$refs.slideInfo.children, {y: 200, autoAlpha: 0})
				tlCaseStudy.set(this.$refs.slideImg, {y: window.innerHeight*2})
				tlCaseStudy.set(this.$el, {autoAlpha: 1})
				tlCaseStudy.set(this.$refs.slideInfo, {y:0})
				tlCaseStudy.to(this.$refs.slideImg, .55, {y: 0, z:-100,ease: Expo.easeOut})
				tlCaseStudy.to(this.$refs.slideInfo.children[0], 2, {y: 100, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, 0)
				tlCaseStudy.to(this.$refs.slideInfo.children[1], 2, {y: 100, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, '-=1.8')

			this.$route.name === 'case-study' ? tlCaseStudy.play() : tl.play()
		},

		appearUp(delay){
			let tl = new TimelineLite({delay: delay, onComplete: ()=>{
				SliderStore.sliderIsNotAnimated()
				EventBus.$emit('appear-slide')
				SliderStore.setActive()
			}})
				tl.set(this.$refs.slideImg, {y: -window.innerHeight*2})
				tl.set(this.$el, {autoAlpha: 1})
				tl.set(this.$refs.slideInfo, {y:0})
				tl.set(this.$refs.slideInfo.children, {y: -100, autoAlpha:0})
				tl.to(this.$refs.slideImg, .55, {y: 0, ease: Expo.easeOut})
				tl.staggerTo(this.$refs.slideInfo.children, .7, {y: 0, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, -.05, 0)
		},

		prevDown(){
			let tl = new TimelineLite()
				tl.staggerTo(this.$refs.slideInfo.children, .4, {y: 100, autoAlpha: 0,ease: Power1.easeIn, force3D: true}, -.04)
				tl.to(this.$refs.slideImg, .35, {y: window.innerHeight,ease: Power1.easeIn}, 0)
				tl.to(this.$refs.slideInfo, .4, {y: window.innerHeight,ease: Power1.easeIn}, 0)
				tl.set(this.$el, {autoAlpha: 0})
		},

		leaveDown(transitionTime = .8){
			let tl = new TimelineLite()
				tl.staggerTo(this.$refs.slideInfo.children, .5, {y: 100, autoAlpha: 0,ease: Expo.easeIn, force3D: true}, -.05)
				tl.to(this.$refs.slideImg, transitionTime, {y: window.innerHeight,ease: Expo.easeIn}, 0)
				tl.set(this.$el, {autoAlpha: 0})
		},

		leaveUp(transitionTime){
			let tl = new TimelineLite()
				tl.staggerTo(this.$refs.slideInfo.children, .4, {y: -100, autoAlpha: 0,ease: Power1.easeIn, force3D: true}, .04)
				tl.to(this.$refs.slideImg, transitionTime, {y: -window.innerHeight, ease: Power1.easeIn}, 0)
				tl.to(this.$refs.slideInfo, .4, {y: -window.innerHeight, ease: Power1.easeIn}, 0)
				tl.set(this.$el, {autoAlpha: 0})
		},

		leaveForward(){
			let tl = new TimelineLite()
				tl.add( TweenMax.to(this.$refs.slideImg, 1, {z: 1000, ease: Expo.easeIn, overwrite: 'all', force3D: true}) )
				tl.add( TweenMax.staggerTo(this.$refs.slideInfo.children, .5, {y: 100, autoAlpha: 0, ease: Expo.easeIn, overwrite: 'allOnStart'}, -.03), 0)
		},

		appearBackward(delay){
			let tl = new TimelineLite({paused: true, onComplete: ()=>{
				EventBus.$emit('appear-slide')
				SliderStore.setActive()
			}})
				tl.set(this.$el, {autoAlpha: 1})
				tl.set(this.$refs.slideInfo.children, {y: 100, autoAlpha: 0})
				tl.set(this.$refs.slideImg, {z: 1000})
				tl.to(this.$refs.slideImg, 1.5, {z: 0, opacity: 1, ease: Expo.easeOut, force3D: true})
				tl.staggerTo(this.$refs.slideInfo.children, .9, {y: 0, autoAlpha: 1,ease: Expo.easeOut, force3D: true}, .08, '-=.9')

			let tlCaseStudy = new TimelineLite({paused: true})
				tlCaseStudy.set(this.$el, {autoAlpha: 1})
				tlCaseStudy.set(this.$refs.slideImg, {z: 1000})
				tlCaseStudy.set(this.$refs.slideInfo.children, {y: 200, autoAlpha: 0})
				tlCaseStudy.to(this.$refs.slideImg, 1, {z: -100, ease: Expo.easeOut})
				tlCaseStudy.to(this.$refs.slideInfo.children[0], 2, {y: 100, autoAlpha: 1,ease: Expo.easeOut}, 0)
				tlCaseStudy.to(this.$refs.slideInfo.children[1], 2, {y: 100, autoAlpha: 1,ease: Expo.easeOut}, '-=1.8')

			this.$route.name === 'case-study' ? tlCaseStudy.play(0) : tl.play(0)
		},

		toggleMenu(){
			this.currentSlideId === this.slideId && this.menuIsClosed ? this.openMenuAnim.play(0) : undefined
			this.currentSlideId === this.slideId && !this.menuIsClosed ? this.closeMenuAnim.play(0) : undefined
		},

		buttonHover(){
			!this.isLoading ? this.buttonHoverAnim.play() : undefined
		},

		buttonOut(){
			this.buttonHoverAnim.reverse()
		},

		slidePrev(lastSlideId){
			lastSlideId === this.slideId ? this.prevDown(.35) : undefined
			this.currentSlideId === this.slideId ? this.appearUp(1) : undefined
		},

		slideNext(lastSlideId){
			lastSlideId === this.slideId ? this.leaveUp(.35) : undefined
			this.currentSlideId === this.slideId ? this.appearDown(1) : undefined
		}
	}
}
</script>

<style lang="scss">

	$medium-mq: 1500px;

	.slide {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		transform-style: preserve-3d;
		transform: translate3d(0px, 0px, 0px);
	}

	.slide__info {
		width: 40%;
		font-family: 'SorrenMedium';
	}

	.slide__id__text {
		font-size: 90px;
		letter-spacing: .05em;
		opacity: .2;
		transform: translateY(.1em);

		@media screen and (max-width: $medium-mq){
			font-size: 80px;
		}

	}

	.slide__title {
		text-transform: uppercase;
		font-size: 112px;
		letter-spacing: .05em;

		@media screen and (max-width: $medium-mq){
			font-size: 90px;
		}
	}

	.slide__description {
		font-family: 'PlayfairDisplay';
		font-size: 14px;
		line-height: 2em;
		max-width: 40em;

		@media screen and (max-width: $medium-mq){
			font-size: 12px;
		}

	}

	.slide__sub-info__info {
		display: inline-block;
		max-width: 50%;
		margin-left: 30px;
		margin-top: 30px;

		&:first-child {
			margin-left: 0px;
		}

	}

	.slide-img {
		width: 50%;
		height: 100%;

		transform-style: preserve-3d;
		transform: translate3d(0px, 0px, 0px);
		perspective-origin: 150% 50%;
	}

	.slide-img__shape {
		display: block;
		position: absolute;
		z-index: -100;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, -100px);

		@media screen and (max-width: $medium-mq){
			max-width: 300px;
		}

	}

	.slide-img__img {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0px);

		@media screen and (max-width: $medium-mq){
			max-width: 300px;
			max-height: 350px;
		}

	}

	.slide__shopsquare {
		.slide-img__img {
			@media screen and (max-width: $medium-mq){
				max-width: 300px;
				max-height: 300px;
			}
		}
	}

	.slide__sub-info__info__title {
		margin-bottom: 7px;
		font-size: 21px;
		letter-spacing: .09em;
		text-transform: uppercase;

		@media screen and (max-width: $medium-mq){
			font-size: 18px;
		}

	}

	.slide__sub-info__info__description {
		font-family: 'PlayfairDisplay';
		text-transform: capitalize;
		font-style: italic;
		font-size: 14px;
	}

	.slide__button {
		padding: .9em 2em;
		margin-top: 2em;
		border-style: solid;
		border-width: 1px;
		border-radius: 3px;

		display: inline-block;
		position: relative;

		font-family: 'SorrenMedium';
		text-decoration: none;
		font-size: 19px;
		letter-spacing: .09em;
		text-transform: uppercase;
		color: white;
		overflow: hidden;
		cursor: pointer;

		@media screen and (max-width: $medium-mq){
			font-size: 15px;
		}

	}

	.slide__button__splitted-text {
		display: inline-block;
		white-space: pre;
	}

	.slide__button__loader {
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		position: absolute;
		z-index: -1;

		transform: scaleX(0);
		transform-origin: left;
	}

</style>



// WEBPACK FOOTER //
// Slide.vue?5a8b5d67