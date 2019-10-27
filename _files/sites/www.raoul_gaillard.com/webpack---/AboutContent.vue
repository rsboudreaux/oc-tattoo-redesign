<template lang="html">

	<div class="about-content" ref="aboutContent">
		<div class="about-content__title" v-html="title"></div>
		<div class="about-content__mobile-message">See my work on desktop</div>
		<div class="about-content__content-container" ref="contentContainer">

			<div class="about-content__content" v-html="content"></div>
			<div class="about-content__social">
				<div class="about-content__social-title">{{ socialTitle }}</div>
				<div class="about-content__networks" ref="network">
					<div class="about-content__network" v-for="network in networks">
						<a class="about-content__network__link" :href="network.link" target="_blank">{{ network.name }}</a>
					</div>
				</div>
			</div>

		</div>

	</div>

</template>

<script>

import {TimelineLite, TweenLite,Expo} from 'gsap'
import {EventBus} from '../../event-bus.js'
import MenuStore from '../../stores/MenuStore.js'
import LoaderStore from '../../stores/LoaderStore.js'
const aboutText = require('./about.json').about

export default {

	name: 'about-content',

	props: {

		isMobile: {
			type: Boolean,
			default: false
		}

	},

	data(){
		return {
			title: aboutText.title,
			content: aboutText.content,
			socialTitle: aboutText.socialTitle,
			networks: aboutText.socialNetworks,
			menuState: MenuStore.state,
			loaderState: LoaderStore.state,
			isAppeared: false
		}
	},

	computed: {

		pageReady(){
			return this.loaderState.pageReady
		},

		menuIsClosed(){
			return this.menuState.isClosed
		}

	},

	mounted(){
		this.$bigTitle = this.$el.querySelectorAll('.about-content__big-title')
		this.events()
		this.loaderReady()
	},

	beforeDestroy(){
		this.unlistenEvents()
	},

	methods: {

		events(){
			EventBus.$on('leave-page', this.leave)
			EventBus.$on('toggle-menu', this.toggleMenu)
			EventBus.$on('page-ready', this.loaderReady)
		},

		unlistenEvents(){
			EventBus.$off('leave-page', this.leave)
			EventBus.$off('toggle-menu', this.toggleMenu)
			EventBus.$off('page-ready', this.loaderReady)
		},

		loaderReady(){
			if ( (this.isMobile || this.pageReady) && !this.isAppeared) {
				this.appear()
				this.isAppeared = true
			}
		},

		appear(){
			let tl = new TimelineLite({delay: .3})
				tl.staggerFromTo(this.$refs.aboutContent.children, 1.5, {y: 40, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Expo.easeOut}, .1)
				tl.fromTo(this.$refs.network, 1.5, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: Expo.easeOut}, '-=1.3')
		},

		leave(){

			if (this.isMobile) {
				return undefined
			}

			let tl = new TimelineLite()
				tl.add(TweenMax.staggerTo(this.$refs.aboutContent.children, .3, {y: 40, autoAlpha: 0, ease: Expo.easeIn, overwrite: 'all'}, -.08))
		},

		toggleMenu(){
			this.menuIsClosed ? this.appear() : this.leave()
		}
	}

}
</script>

<style lang="scss">

	$about-blue: #828ED4;
	$about-title-gradient-1: #FFC3CA;
	$about-title-gradient-2: #A8A9E7;

	$medium-mq: 1300px;

	.about-content {
		max-width: 27em;
		margin: auto;

		font-size: 20px;
		font-family: 'PlayfairDisplay';
		text-align: center;
		color: #ffffff;
	}

	.about-content__title {
		font-style: italic;
		text-align: left;
		letter-spacing: .12em;
	}

	.about-content__big-title {
		font-size: 80px;
		font-family: 'SorrenMedium';
		text-transform: uppercase;
		font-style: normal;
		letter-spacing: .12em;
		display: inline-block;
		vertical-align: middle;
		margin: 0px 10px;

		background-image: linear-gradient($about-title-gradient-1, $about-title-gradient-2);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.about-content__content {
		line-height: 1.8em;
		font-size: 16px;
		margin: 3.5em 0em;
	}

	.about-content__content-container {
		margin: 0em auto;
		font-size: 14px;
		max-width: 35em;
		text-align: left;
	}

	.about-content__link {
		font-style: italic;
		text-decoration: none;
		color: $about-blue;
		transition: color .4s ease;

		&:hover {
			color: lighten($about-blue, 12);
		}

	}

	.about-content__mobile-message {
		display: none;
		font-size: 14px;
		margin-top: 3em;
		font-style: italic;
		text-transform: uppercase;
		letter-spacing: .2em;
		line-height: 1.5em;
		color: #9AB8DC;
	}

	.about-content__social-title {
		font-size: 15px;
		margin-bottom: .6em;
		letter-spacing: .1em;
		font-style: italic;
		color: $about-blue;
	}

	.about-content__network {
		display: inline-block;
		&:after {
			content: '-';
			color: $about-blue;
			margin: 0em .5em;
		}

		&:last-child {
			&:after {
				display: none;
				content: '';
			}
		}
	}

	.about-content__network__link {
		text-decoration: none;
		display: inline-block;
		vertical-align: middle;
		color: $about-blue;
		font-family: 'SorrenMedium';
		text-transform: uppercase;
		letter-spacing: .1em;
		font-size: 32px;
		line-height: 1.5em;
		transition: all .4s ease;

		&:hover {
			color: lighten($about-blue, 12);
		}

	}

	@media screen and (min-width: 760px) and (max-width: 960px) {
		.about-content__social-title { font-size: 15px;}
		.about-content__mobile-message { display: block;}
		.about-content { font-size: 14px; margin: 3em 3em; text-align: left; max-width: none; display: block; visibility: visible; opacity: 1;}
		.about-content__content-container { font-size: 15px;}
		.about-content__big-title { font-size: 60px;}
		.about-content__title { font-size: 24px; letter-spacing: .08em; line-height: 3em;}
	}

	@media screen and (max-width: 760px){
		.about-content__social-title { font-size: 15px;}
		.about-content__mobile-message { display: block;}
		.about-content { font-size: 14px; margin: 3em 2em; text-align: left; max-width: none; display: block; visibility: visible; opacity: 1;}
		.about-content__content-container { font-size: 14px;}
		.about-content__big-title { font-size: 36px;}
		.about-content__title { font-size: 19px; letter-spacing: .02em; line-height: 2em;}
	}

	@media screen and (min-width: 961px) and (max-width: 1300px){
		.about-content__social-title { font-size: 14px;}
		.about-content {max-width: 29em;}
		.about-content__content-container { font-size: 16px;}
		.about-content__big-title { font-size: 50px;}
		.about-content__title { font-size: 20px; line-height: 3em;}
	}

	@media screen and (max-width: 340px){
		.about-content__big-title{ font-size: 30px;}
	}

	@media screen and (max-width: 960px){
		.about-content__content-container { max-width: none; }
	}

</style>



// WEBPACK FOOTER //
// AboutContent.vue?01951b72