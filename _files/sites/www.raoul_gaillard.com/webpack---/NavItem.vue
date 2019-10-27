<template lang="html">

	<div class="menu-link" @mouseover="mouseover" @mouseout="mouseout">
		<a class="menu-link__link" :to="to" ref="link" @click.prevent="onClick">
			<div class="menu-link__title" ref="title">
				{{ title }}
				<div class="menu-link__hover" ref="hoverLine"></div>
			</div>
			<div class="menu-link__subtitle">{{ subtitle }}</div>
		</a>
	</div>

</template>

<script>

import {TimelineLite, Expo} from 'gsap'
import {EventBus} from '../../event-bus.js'

import menuStore from '../../stores/MenuStore.js'

export default {

	props: ['to', 'title', 'subtitle'],

	data(){
		return {
			state: menuStore.state
		}
	},

	computed: {

		menuIsClosed(){
			return this.state.isClosed
		},

		menuIsAnimated(){
			return this.state.isAnimated
		},

		isCurrentRoute(){
			let isCurrentRoute = this.$route.name === this.to ? true : false
			return isCurrentRoute
		}

	},

	mounted: function(){
		this.hoverAnim = new TimelineLite({paused: true})
			this.hoverAnim.to(this.$refs.hoverLine, .6, {x: '-50%', scaleX: 1, autoAlpha: 1, ease: Expo.easeOut})

	},

	methods: {

		mouseover: function(){
			this.hoverAnim.play()
		},

		mouseout: function(){
			this.hoverAnim.reverse()
		},

		onClick(){

			if (!this.menuIsAnimated) {
				if (this.isCurrentRoute) {
					return EventBus.$emit('click-current-link')
				}
				else if (!this.menuIsAnimated) {
					this.$router.push( {name: this.to} )
				}
			}

		}

	},

}
</script>

<style lang="scss">

	.menu-link__link {
		text-decoration: none;
	}

	.menu-link {
		user-select: none;
		visibility: hidden;
		cursor: pointer;
		margin-bottom: 60px;
		transform: translateY(200px);
		&:last-child {
			margin-bottom: 0px;
		}
	}

	.menu-link__hover {
		width: 200px;
		z-index: -1;
		height: 50px;
		opacity: 0;
		position: absolute;
		margin-left: 50%;
		top: 50%;
		background-image: linear-gradient(-135deg, #FFC3CA 0%, #7E9DF6 100%);
		transform: translate3d(-50%, -50%, 0px) scaleX(0);
		transform-origin: left;
	}

	.menu-link__title {
		font-size: 112px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #ffffff;
		display: block;
		position: relative;
	}

	.menu-link__subtitle {
		font-family: 'PlayfairDisplay';
		font-style: italic;
		font-size: 14px;
		letter-spacing: 0.2em;
		color: #CCE4FF;
	}

</style>



// WEBPACK FOOTER //
// NavItem.vue?41771e7e