<template lang="html">

  <div ref="menu" class="menu menu--light">
    <div class="menu-hit" @click="toggleClose" @mouseover="iconMouseOver" @mouseout="iconMouseOut"></div>
    <div class="menu-icon__container">
      <div ref="menuIcon" class="menu-icon">
        <div class="menu-line menu-line--big"></div>
        <div class="menu-line menu-line--little"></div>
        <div class="menu-line menu-line--big"></div>
      </div>
      <span ref="menuCircleHover" class="menu-circle-hover"></span>
    </div>
    <div class="menu-links" ref="menuLinks">
      <nav-item
        v-for="navItem in navItems"
        v-bind:title="navItem.title"
        v-bind:subtitle="navItem.subtitle"
        v-bind:to="navItem.to">
      </nav-item>
    </div>
    <div class="menu-background" ref="menuBackground"></div>
  </div>

</template>

<script>

import {TimelineLite, TweenLite, Power4, Power0, Expo} from 'gsap'
import SplitText from '../../commons/script/SplitText.js'
import _ from 'lodash'

import {EventBus} from '../../event-bus.js'
import NavItem from './NavItem.vue'

import menuStore from '../../stores/MenuStore.js'
import sliderStore from '../../stores/SliderStore.js'
import LoaderStore from '../../stores/LoaderStore.js'

const slides = require('../ThreeBackground/slides.json')

export default {

  name: 'navigation',

  data: function(){
    return {
      state: menuStore.state,
      sliderState: sliderStore.state,
      loaderState: LoaderStore.state,
      navItems: [
        {
          title: 'Home',
          subtitle: 'Fresh start',
          to: 'home'
        },
        {
          title: 'Work',
          subtitle: 'Some of my productions',
          to: 'work'
        },
        {
          title: 'About',
          subtitle: 'Me myself and I',
          to: 'about'
        }
      ]
    }
  },

  computed: {
    pageReady(){
      return this.loaderState.pageReady
    },
    isClosed(){
      return this.state.isClosed
    },
    isBlocked(){
      return this.state.isBlocked
    },
    currentSlideId(){
      return this.sliderState.currentSlideId
    },
    sliderIsAnimated(){
      return this.sliderState.isAnimated
    },
    menuIsNotAnimated(){
      return !this.state.isAnimated
    }
  },

  mounted: function(){
    let el = this.$el

    this.throttledOnResize = _.throttle(this.onResize, 300)

    this.$menuLines = this.$refs.menuIcon.children
    this.$menuCircleHover = this.$refs.menuCircleHover
    this.$menuLinks = this.$refs.menuLinks.children

    this.changeColor(this.$route.name)
    this.events()

    this.iconEnterAnim = new TimelineLite({paused: true})
      this.iconEnterAnim.from(this.$menuLines[0], 0.4, {scaleX:0, ease:Power4.easeInOut}, '0.5')
      this.iconEnterAnim.from(this.$menuLines[2], 0.4, {scaleX:0, ease:Power4.easeInOut}, '-=0.2')
      this.iconEnterAnim.from(this.$menuLines[1], 0.4, {scaleX:0, ease:Power4.easeInOut}, '-=0.3')

    this.pageReady && this.iconEnterAnim.play()

    this.openMenuAnim = new TimelineLite({paused: true,
    onStart: ()=>{
      menuStore.menuIsAnimated()
    },
    onComplete: ()=>{
      menuStore.menuIsNotAnimated()
    }})
    this.openMenuAnim
      .to(this.$menuLines[1], 0.5, {x:-10, autoAlpha: 0, ease: Expo.easeInOut})
      .to(this.$menuLines[0], 0.5, {rotation: 45, scaleX:0.68 , ease: Expo.easeInOut}, 0)
      .to(this.$menuLines[2], 0.5, {rotation:-45, scaleX:0.68 , ease: Expo.easeInOut}, 0)
      .set(this.$refs.menuLinks, {autoAlpha: 1}, 0)
      .to(this.$refs.menuBackground, 1, {autoAlpha: 1, ease: Expo.easeOut}, 0)
      .staggerTo(this.$menuLinks, 1.5, {y:0 , autoAlpha:1,  ease: Expo.easeOut, force3D: true}, 0.08, 0)

    this.closeMenuAnim = new TimelineLite({paused: true,
    onStart: ()=>{
      menuStore.menuIsAnimated()
    },
    onComplete: ()=>{
      menuStore.menuIsNotAnimated()
    }})
    this.closeMenuAnim
      .to(this.$menuLines[1], 0.5, {x:0, autoAlpha: 1, ease: Expo.easeInOut})
      .to(this.$menuLines[0], 0.5, {rotation: 0, scaleX:1 , ease: Expo.easeInOut}, 0)
      .to(this.$menuLines[2], 0.5, {rotation:0, scaleX:1 , ease: Expo.easeInOut}, 0)
      .to(this.$refs.menuBackground, 1, {autoAlpha: 0, ease: Expo.easeIn}, 0)
      .staggerTo(this.$menuLinks, 0.5, {y:200, autoAlpha:0, ease: Power4.easeIn}, -0.05, 0)
      .set(this.$refs.menuLinks, {autoAlpha: 0})

    this.iconMouseOverAnim = new TimelineLite({paused: true})
    this.iconMouseOverAnim
      .to(this.$menuLines[1], 0.3, {x:12,ease:Expo.easeOut}, 0)

    this.circleWaveAnim = new TimelineLite({paused: true})
      .set(this.$menuCircleHover, {scale: 0, autoAlpha: 0})
      .to(this.$menuCircleHover, 0.6, {scale: 2, autoAlpha: .7, ease:Expo.easeInOut})
      .to(this.$menuCircleHover, 0.5, {autoAlpha: 0, ease:Expo.easeInOut}, '-=0.4')

    this.iconMouseOutAnim = new TimelineLite({paused: true})
    this.iconMouseOutAnim
      .to(this.$menuLines[1], 0.3, {x: 0 ,ease:Expo.easeIn}, 0)
  },

  beforeDestroy(){
    this.unlistenEvents()
  },

  methods: {

    events(){
      window.addEventListener( 'resize', this.throttledOnResize )
      EventBus.$on('slide-next', this.changeSlide)
      EventBus.$on('slide-prev', this.changeSlide)
      EventBus.$on('leave-page', this.leavePage)
      EventBus.$on('close-menu', this.closeMenu)
      EventBus.$on('page-ready', this.loaderReady)
      EventBus.$on('next-case-study', this.nextCaseStudy)
      EventBus.$on('hide-case-study', this.loaderReady)
      EventBus.$on('click-current-link', this.closeMenu)
    },

    unlistenEvents(){
      window.removeEventListener( 'resize', this.throttledOnResize )
      EventBus.$off('click-current-link', this.toggleClose)
      EventBus.$off('slide-next', this.changeSlide)
      EventBus.$off('slide-prev', this.changeSlide)
      EventBus.$off('leave-page', this.leavePage)
      EventBus.$off('page-ready', this.loaderReady)
      EventBus.$off('next-case-study', this.nextCaseStudy)
      EventBus.$off('hide-case-study', this.loaderReady)
      EventBus.$off('close-menu', this.closeMenu)
    },

    onResize(){
      if ( window.innerWidth < 960 && !this.isClosed ) {
        this.closeMenu()
      }
    },

    nextCaseStudy(){
      this.iconEnterAnim.reverse()
    },

    loaderReady(){
      this.changeColor(this.$route.name)
      this.iconEnterAnim.play()
    },

    changeSlide(){
      return this.changeColor(this.$route.name)
    },

    changeColor(routeName){
      let gradient
      if (slides[routeName] === undefined) {
        gradient = slides['default'][0].navigationGradient
      }
      else if ( slides[slides[routeName]] ) {
        return this.changeColor(slides[routeName])
      }
      else {
        gradient = slides[routeName][this.currentSlideId].navigationGradient
      }
      let backgroundImage = "linear-gradient(to right ,"+gradient[0]+","+gradient[1]+")"
      let tl = new TimelineLite()
        tl.to(this.$menuLines, 3,{backgroundImage: backgroundImage, ease: Power0.easeInOut})
    },

    toggleClose: function(){
      if (this.menuIsNotAnimated && !this.sliderIsAnimated && !this.isBlocked) {
        if (this.isClosed){
          this.openMenu()
        }
        else if(!this.isClosed){
          this.closeMenu()
        }
      }
    },

    leavePage(){
      this.closeMenuAnim.eventCallback('onComplete', ()=>{
        menuStore.menuIsNotAnimated()
        this.iconEnterAnim.reverse(0)
      })

      if(!this.isClosed){
        menuStore.closeMenu()
        this.closeMenuAnim.play(0)
      }
      else {
        this.iconEnterAnim.reverse(0)
      }
    },

    iconMouseOver: function(){
      if ( this.isClosed && (!this.iconMouseOverAnim.isActive() || !this.iconMouseOutAnim.isActive())) {
        this.iconMouseOverAnim.play()
        this.circleWaveAnim.play(0)
      }
    },

    iconMouseOut: function(){
      if (this.isClosed) {
        this.iconMouseOverAnim.reverse()
      }
    },

    openMenu: function(){
      this.openMenuAnim.play(0)
      menuStore.openMenu()
      this.$route.name !== 'case-study' ? EventBus.$emit('toggle-menu', this.isClosed) : undefined
    },

    closeMenu: function(){
      this.closeMenuAnim.play(0)
      menuStore.closeMenu()
      this.$route.name !== 'case-study' ? EventBus.$emit('toggle-menu', this.isClosed) : undefined
    }
  },

  components: {
    NavItem
  }

}

</script>

<style lang="scss">

  .menu {
    width: 100%;
    height: 100%;
    position: absolute;
    font-family: 'SorrenMedium';
    overflow: hidden;
  }

  .menu-hit {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 110px;
    cursor: pointer;
    z-index: 11;
  }

  .menu-icon__container {
    position: relative;
    width: 100px;
    height: 100px;
    z-index: 10;
  }

  .menu-icon {
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu-line {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(-134deg, #8A86BE 0%, #EEE0FB 100%, #B397B8 100%);
    margin-bottom: 11px;
    transform-origin: left;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .menu-line--little {
    width: 40%;
  }

  .menu--light {
    color: #ffffff;
  }

  .menu-circle-hover {
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    opacity: 0;
    border-radius: 50%;
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .menu-background {
    width: 100%;
    height: 100%;
    z-index: 9;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    top: 0;
    left: 0;
    background-color: rgba(#011832, .9);
  }

  .menu-links {
    position: absolute;
    width: 100%;
    text-align: center;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    visibility: hidden;
  }

</style>



// WEBPACK FOOTER //
// Navigation.vue?5b241fe2