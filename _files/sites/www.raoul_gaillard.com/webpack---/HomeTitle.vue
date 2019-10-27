<template lang="html">

	<div class="name-title">

		<div class="name-title__title-container" ref="titleContainer">
			<div class="name-title__main-container">
				<div class="name-title__title" ref="title">{{ name }}</div>
				<div class="name-title__square" ref="square"></div>
			</div>
			<div class="name-title__subtitle" ref="subtitle">{{ subtitle }}</div>
		</div>

	</div>

</template>

<script>
import {TimelineLite, TweenLite,Expo} from 'gsap'
import SplitText from '../../commons/script/SplitText.js'
import {EventBus} from '../../event-bus.js'

import AnimationStore from '../../stores/AnimationStore.js'
import LoaderStore from '../../stores/LoaderStore.js'
import MenuStore from '../../stores/MenuStore.js'

export default {

	data() {
		return {
			name: 'Raoul Gaillard',
			subtitle: "I’m a Creative Developer. I'm looking for a full time position in 2019.",
			animationState: AnimationStore.state,
			loaderState: LoaderStore.state,
			menuState: MenuStore.state
		}
	},

	computed: {
		getCurrentAnimAppear(){
			return this.animationState.appear
		},
		getCurrentAnimLeave(){
			return this.animationState.leave
		},
		pageReady(){
			return this.loaderState.pageReady
		},
		menuIsClosed(){
			return this.menuState.isClosed
		}
	},

	mounted() {

		let splittedSubtitle = new SplitText(this.$refs.subtitle, {
			classToGive: 'subtitle-lines',
			whatToSplit: 'lines'
		})

		this.pageReady && this.appearPage()
		this.events()

		this.openMenuAnim = new TimelineLite({paused: true})
			this.openMenuAnim.to(this.$refs.title, 1.5, {z:-500, ease: Expo.easeOut})
			this.openMenuAnim.staggerTo(this.$refs.subtitle.children, 2, { y:20, autoAlpha: 0, ease: Expo.easeOut}, .1, 0)
			this.openMenuAnim.to(this.$refs.square, 1.5, {z:-1000, ease: Expo.easeOut}, 0)

		this.closeMenuAnim = new TimelineLite({paused: true})
			this.closeMenuAnim.to(this.$refs.title, 1.5, {z:0, ease: Expo.easeOut})
			this.closeMenuAnim.staggerTo(this.$refs.subtitle.children, 2, { y:0, autoAlpha: 1, ease: Expo.easeOut}, .1, .5)
			this.closeMenuAnim.to(this.$refs.square, 1.5, {z:-300, ease: Expo.easeOut}, 0)

	},

	beforeDestroy(){
		this.unlistenEvents()
	},

	methods: {
		events(){
			EventBus.$on('toggle-menu', this.toggleMenu)
			EventBus.$on('add-mousemove', this.addMousemove)
			EventBus.$on('leave-page', this.leavePage)
			EventBus.$on('page-ready', this.appearPage)
		},

		unlistenEvents(){
			window.removeEventListener('mousemove', this.mousemove)
			EventBus.$off('add-mousemove', this.addMousemove)
			EventBus.$off('toggle-menu', this.toggleMenu)
			EventBus.$off('leave-page', this.leavePage)
			EventBus.$off('page-ready', this.appearPage)
		},

		addMousemove(){
			window.addEventListener('mousemove', this.mousemove)
		},

		mousemove(e){

			if (!this.menuIsClosed) {
				return undefined
			}

			let centroX = e.clientX - window.innerWidth / 2
			let centroY = window.innerHeight / 2 - (e.clientY + 100)
			let degX = centroX * .01
			let degY = centroY * .03
			TweenLite.killTweensOf(this.$refs.title, true, {rotationY: true, rotationX: true})
			TweenLite.killTweensOf(this.$refs.square, true, {rotationY: true, rotationX: true})
			TweenLite.to(this.$refs.title, .8,{rotationY: degX, rotationX: degY})
			TweenLite.to(this.$refs.square, .8,{rotationY: degX, rotationX: degY})
		},

		leavePage(){
			let leaveAnim = this.getCurrentAnimLeave
			TweenLite.to(this.$refs.square, .8, {z: -300, ease: Expo.easeOut})
			TweenLite.to(this.$refs.title, .8, {z: 0, ease: Expo.easeOut})
			this[leaveAnim]()
		},

		appearPage(){
			let appearAnim = this.getCurrentAnimAppear
			this[appearAnim]()
		},

		appearUp(){
			let tl = new TimelineLite()
				tl.staggerFromTo(this.$refs.subtitle.children, 2, {y:20, autoAlpha: 0}, { y:0, autoAlpha: 1, ease: Expo.easeOut}, .1, .5)
				tl.from(this.$refs.square, 1.5, {y: -window.innerHeight, ease: Expo.easeOut}, 0)
				tl.from(this.$refs.title, 1.5, {y: -window.innerHeight, ease: Expo.easeOut}, 0)
		},

		leaveUp(){
			let tl = new TimelineLite()
				tl.add(TweenMax.staggerTo(this.$refs.subtitle.children, .5, { y:-20, autoAlpha: 0, ease: Expo.easeIn, overwrite: 'allOnStart'}, .05))
				tl.to(this.$refs.square, 1, {y: -window.innerHeight, ease: Expo.easeIn}, 0)
				tl.to(this.$refs.title, 1, {y: -window.innerHeight, ease: Expo.easeIn}, 0)
		},

		appearBackward(){
			let tl = new TimelineLite()
				tl.set(this.$refs.square, {z: 500, opacity: 0})
				tl.set(this.$refs.title, {z: 500, opacity: 0})
				tl.to(this.$refs.square, 1.5, {z: -300, opacity: 1 ,ease: Expo.easeOut}, 0)
				tl.to(this.$refs.title, 1.5, {z: 0, opacity: 1 ,ease: Expo.easeOut}, 0)
				tl.staggerFromTo(this.$refs.subtitle.children, 2, {y:20, autoAlpha: 0}, { y:0, autoAlpha: 1, ease: Expo.easeOut}, .1, .5)
		},

		leaveForward(){
			let tl = new TimelineLite()
				tl.add(TweenMax.staggerTo(this.$refs.subtitle.children, .5, { y:-20, autoAlpha: 0, ease: Expo.easeIn, overwrite: 'allOnStart'}, .05))
				tl.add( TweenLite.to(this.$refs.square, 1, {z: 1000, opacity: 0, ease: Expo.easeIn, overwrite: 'all'}), 0)
				tl.add( TweenLite.to(this.$refs.title, 1, {z: 1000, opacity: 0, ease: Expo.easeIn, overwrite: 'all'}), 0)
		},

		appearAnim(){
			let appearAnim = new TimelineLite({onComplete: this.addMousemove})
				appearAnim.fromTo(this.$refs.title, 3,{z: -500, autoAlpha:0}, {z:0, autoAlpha: 1, ease: Expo.easeOut})
				appearAnim.staggerFromTo(this.$refs.subtitle.children, 2, {y:20, autoAlpha: 0}, { y:0, autoAlpha: 1, ease: Expo.easeOut}, .1, .5)
				appearAnim.fromTo(this.$refs.square, 3, {z:-1000, autoAlpha: 0}, {z: -300, autoAlpha: 1, ease: Expo.easeOut}, 0)
		},

		leaveAnim(){
			this.leaveUp()
		},

		toggleMenu(isClosed){
			this.closeMenuAnim.isActive() ? this.closeMenuAnim.kill() : undefined
			this.openMenuAnim.isActive() ? this.openMenuAnim.kill() : undefined
			isClosed ? this.closeMenuAnim.play(0) : this.openMenuAnim.play(0)
		},

	}
}
</script>

<style lang="scss">

	$medium-mq: 1500px;

	.name-title {
		height: 100%;
		width: 100%;
		font-size: 108px;
		position: absolute;
		z-index: -1;
		perspective: 1000px;
	}

	.home-title-st {
		display: inline-block;
		white-space: pre-wrap;
	}

	.name-title__title-container {
		transform: translateY(-50%);
		position: relative;
		top: 50%;
	}

	.name-title__main-container {
		perspective: 1000px;
	}

	.name-title__title {
    font-family: 'SorrenMedium';
		font-size: 1em;
		letter-spacing: .3em;
		text-transform: uppercase;
		color: #ffffff;
		text-align: center;
		position: relative;
		white-space: nowrap;

		@media screen and (max-width: $medium-mq){
			font-size: 90px;
		}

	}

	.name-title__subtitle {
		font-size: 14px;
		padding-top: 60px;
		line-height: 2em;
		font-family: 'PlayfairDisplay';
		font-style: italic;
		color: #CCE4FF;
		position: relative;
		text-align: center;
		margin: auto;
		max-width: 250px;
	}

	.subtitle-lines {
		display: inline-block;
	}

	.name-title__square {
		position: absolute;
		width: 6em;
		height: 1.6em;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, -300px);
		border: 15px solid #001429;
		z-index: -1;
	}

</style>



// WEBPACK FOOTER //
// HomeTitle.vue?164c92b2