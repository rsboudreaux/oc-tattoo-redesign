<template>

  <div id="interface">

    <div class="interface-logo bigItUp" v-on:click="goToHome">
      <img src="/src/assets/viita_logo_white.svg" alt="VIITA Titan Logo"></img>
    </div>

    <div class="interface-number"> {{number}} </div>

    <div class="interface-ti22-outer">
      <div class="interface-ti"> TI </div>
      <div class="interface-22"> 22 </div>
    </div>


    <div class="language-selector-outer">
      <div class="language-selector">
        <a class="en" href="/en/">EN</a>
        <a class="de false" href="/de/">DE</a>
      </div>
    </div>
    <a class="interface-buyWatch-btn bigItUp" @mouseenter="funcInterfaceBtn" @mouseleave="funcInterfaceBtnOut" href="https://www.viita-watches.com/product/viita-titan-hrv/"  target="_blank" rel="noopener">
      <div class="interface-btn-hover-bg"></div>
      <div class="interface-buyWatch-txt">
        BUY NOW
      </div>
    </a>

  </div>

</template>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Scripts ██████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<script>
export default {
  data: function() {
    return {
      number: '47,867'
    }
  },
  methods: {

    funcInterfaceBtn: function() {
      const tlInterfaceBtn =  new TimelineMax({
        // paused:true
      });
          tlInterfaceBtn
          .fromTo('.interface-btn-hover-bg', 0.3,
            {width:0},
            {width:'100%', ease:Power2.easeInOut, transformOrigin:"left"},0
          )
          .to('.interface-buyWatch-txt', 0.3,
            {color:"black", ease:Power2.easeInOut},0
          )
    },

    funcInterfaceBtnOut: function() {
      const tlInterfaceBtnOut =  new TimelineMax({
        // paused:true
      });
          tlInterfaceBtnOut
          .to('.interface-btn-hover-bg', 0.3,
            {width:0, ease:Power2.easeInOut},0
          )
          .to('.interface-buyWatch-txt', 0.3,
            {color:"white", ease:Power2.easeInOut},0
          )
    },

    goToHome: function() {
      TweenLite.to(window, 3, {scrollTo:{y:0,autoKill:false},ease:Power2.easeOut});
    }

  },
  mounted: function() {


  }
}
</script>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Styles ███████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<style lang="scss">

@import "src/styles/variables.scss";


#interface {
  position: absolute;
  top:0;
  z-index: 4;
}

.interface-logo {
  position: fixed;
  left: 70px;
  top: 70px;
  width: 90px;
  height: 30px;
  // cursor: pointer;

  @media screen and (max-width: $tabletLandscape) {
    left: 50px;
    top: 50px;
    width: 80px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    left: 20px;
    top: 25px;
    width: 70px;
  }
  @media screen and (max-width: $phone) {
    left: 20px;
    top: 25px;
    width: 70px;
  }
}

.interface-number {
  position: fixed;
  width: 120px;
  right: 18px;
  top: 50%;
  font-size: 20px;
  text-align: center;
  letter-spacing: 10px;
  transform: translate(0, -50%) rotate(-90deg);
  // cursor: default;

  @media screen and (max-width: $tabletLandscape) {
    right: -4px;
    font-size: 16px;
    letter-spacing: 8px;
  }
  @media screen and (max-width: $tabletPortait) {
    display: none;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    display: none;
  }
  @media screen and (max-width: $phone) {
    display: none;
  }
}

.interface-ti22-outer{
  position: fixed;
  right: 0;
  bottom: 0;
  // cursor: default;
  // display: none;
}

.interface-ti {
  position: fixed;
  font-size: 70px;
  letter-spacing: 4px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  color: transparent;
  right: 94px;
  bottom: 56px;

  @media screen and (max-width: $tabletLandscape) {
    -webkit-text-stroke-width: 1px;
    font-size: 55px;
    right: 65px;
    bottom: 39px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    font-size: 35px;
    letter-spacing: 1px;
    -webkit-text-stroke-width: 1px;
    right: 34px;
    bottom: 14px;
  }
  @media screen and (max-width: $phone) {
    font-size: 35px;
    letter-spacing: 1px;
    -webkit-text-stroke-width: 1px;
    right: 34px;
    bottom: 14px;
  }
}

.interface-22 {
  font-size: 35px;
  position: absolute;
  right: 69px;
  bottom: 92px;

  @media screen and (max-width: $tabletLandscape) {
    font-size: 24px;
    right: 49px;
    bottom: 70px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    font-size: 18px;
    right: 20px;
    bottom: 31px;
  }
  @media screen and (max-width: $phone) {
    font-size: 18px;
    right: 20px;
    bottom: 31px;
  }
}

.language-selector-outer {
  position: fixed;
  right: 200px;
  top: 70px;
  height: 44px;
  @include mainFont;
  padding: 0;

  @media screen and (max-width: $tabletLandscape) {
    right: 180px;
    top: 50px;
  }

  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5) {
    right: 110px;
    top: 20px;
    height: 34px;
    font-size: 17px;
  }
  @media screen and (max-width: $phone) {
    right: 110px;
    top: 20px;
    height: 34px;
    font-size: 17px;
  }

  .language-selector {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    .en {
      display: inline-block;
      margin-right: 8px;
      cursor: none;
    }
    .de {
      display: inline-block;
      cursor: none;
    }

    .false {
      opacity: 0.3;
      transition: opacity 0.2s;
    }
    .false:hover {
      opacity: 1;
    }
  }
}

.interface-buyWatch-btn {
  position: fixed;
  right: 70px;
  top: 70px;
  border: 2px solid white;
  width: 110px;
  height: 40px;
  @include mainFont;
  background-color: transparent;
  padding: 0;
  box-sizing: content-box;
  cursor: none;

  @media screen and (max-width: $tabletLandscape) {
    right: 50px;
    top: 50px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    right: 20px;
    top: 20px;
    width: 70px;
    height: 30px;
    font-size: 17px;
  }
  @media screen and (max-width: $phone) {
    right: 20px;
    top: 20px;
    width: 70px;
    height: 30px;
    font-size: 17px;
  }

  .interface-buyWatch-txt {
    position: absolute;
    white-space: nowrap;
    text-align: center;
    // padding-left: 30px;
    // padding-right: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .interface-btn-hover-bg {
    position: absolute;
    top:0;
    left:0;
    width: 0;
    height: 100%;
    background-color: white;
  }
}


</style>



// WEBPACK FOOTER //
// src/components/Interface.vue