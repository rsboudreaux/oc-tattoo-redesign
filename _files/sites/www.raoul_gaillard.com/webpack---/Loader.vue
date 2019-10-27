<template lang="html">
	<div class="loader-container">
		<div class="loader">
			<div class="loader__text">
				<img src="/assets/imgs/loading.svg" alt="">
			</div>
			<div class="loader__lines" ref="loaderLines">
				<div class="loader__thin-line"></div>
				<div class="loader__big-line" ref="loaderBigLine"></div>
			</div>
			<div class="loader__state">
				{{ loadingState }}%
			</div>
		</div>
	</div>
</template>

<script>

import AssetsLoader from 'assets-loader'
import {EventBus} from '../../event-bus.js'
import LoaderMixin from './LoaderMixin.js'
import LoaderStore from '../../stores/LoaderStore.js'
import {TimelineLite, Expo, TweenMax, Power1} from 'gsap'
import _ from 'lodash'

export default {

	mixins: [LoaderMixin],

	data(){
		return {
			linesScale: 0,
			state: LoaderStore.state,
			targetState: 100/3/100,
			complete: false
		}
	},

	computed: {

		pageReady(){
			return this.state.pageReady
		},

		loadingState(){
			return Math.floor(this.linesScale * 100)
		}

	},

	mounted(){
		let loader = AssetsLoader()
		let assetsToLoad

		if (window.devicePixelRatio <= 1 ) {
			assetsToLoad = this.findAssets('1x')
		}
		else {
			assetsToLoad = this.findAssets('2x')
		}
		loader.add(assetsToLoad)

		loader.on('progress', progress=>{
			this.setProgression(progress)
		})
		loader.on('complete', assets=>{
			this.complete = true
		})
		loader.start()

		this.progress()
	},

	methods: {

		setPageReady(){
			this.linesScale = 1

			let tl = new TimelineLite()
			tl.staggerTo(this.$refs.loaderLines.children, 1, { scaleX: 0, ease: Expo.easeInOut}, -.08)
			tl.call(()=>{
				LoaderStore.setPageReady()
				EventBus.$emit('page-ready')
			}, [], null, '-=.4')
			tl.to(this.$el, .5, {autoAlpha: 0, ease: Power1.easeIn}, '-=.4')

		},

		setProgression(progress){
			progress > this.targetState ? this.targetState = progress : undefined
		},

		progress(){
			this.linesScale += (this.targetState - this.linesScale) * 0.05

			this.$refs.loaderBigLine.style.webkitTransform = "scaleX("+this.linesScale+")";
			this.$refs.loaderBigLine.style.MozTransform = "scaleX("+this.linesScale+")";
			this.$refs.loaderBigLine.style.msTransform = "scaleX("+this.linesScale+")";
			this.$refs.loaderBigLine.style.OTransform = "scaleX("+this.linesScale+")";
			this.$refs.loaderBigLine.style.transform = "scaleX("+this.linesScale+")";
			this.linesScale < .99 ? requestAnimationFrame(this.progress.bind(this)) : undefined
			this.linesScale < 1 && this.linesScale > .99 && this.complete ? this.setPageReady() : undefined
		}
	}

}
</script>

<style lang="scss">

	.loader-container {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(1, 24, 50);
		background-size: contain;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		user-select: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.loader__text {
		transform: translate(-20px, 15px);
	}

	.loader__lines {
		width: 250px;
		height: 50px;
		position: relative;
		z-index: -1;
		transform-origin: left;
		display: inline-block;
		vertical-align: middle;
	}

	.loader__thin-line {
		width: 100%;
		height: 1px;
		background-color: #ffffff;
		transform-origin: left;
		position: absolute;
		display: block;
		top: 50%;
	}

	.loader__big-line {
		width: 100%;
		height: 100%;
		margin-left: 20px;
		position: relative;
		z-index: -1;
		transform-origin: left;
		background-image: linear-gradient(-135deg, #FFC3CA 0%, #7E9DF6 100%);
	}

	.loader__state {
		color: #ffffff;
		font-family: 'PlayfairDisplay';
		font-style: italic;
		font-size: 25px;
		min-width: 3em;
		margin-left: .6em;
		display: inline-block;
		vertical-align: middle;
	}

</style>



// WEBPACK FOOTER //
// Loader.vue?6e5322a8