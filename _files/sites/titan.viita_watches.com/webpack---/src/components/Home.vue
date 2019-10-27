<template>

  <div id="home">

    <div class="home-outer">

      <!-- <div class="home-blackbox-twister"> -->
      <div class="home-blackbox-top-outer">
        <div class="home-blackbox home-blackbox-top"></div>
      </div>
      <div class="home-blackbox-right-outer">
        <div class="home-blackbox home-blackbox-right"></div>
      </div>
      <div class="home-blackbox-bottom-outer">
        <div class="home-blackbox home-blackbox-bottom"></div>
      </div>
      <div class="home-blackbox-left-outer">
        <div class="home-blackbox home-blackbox-left"></div>
      </div>
      <!-- </div> -->

      <div class="home-center-outer">

        <h1 class="home-titan-center">{{title}}</h1>

        <div class="home-viita-logo-vertical-outer">
          <div class="home-viita-logo-vertical">
            <img src="/src/assets/viita_logo_white.svg" alt="VIITA Titan Logo"></img>
          </div>
        </div>

        <div class="home-hrv-outer">
          <div class="home-hrv"> HRV </div>
          <div class="home-hrv-line"></div>
        </div>

      </div>

    </div>

  </div>

</template>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Scripts ██████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<script>
export default {
  data: function() {
    return {
      title:"TITAN"
    }
  },
  methods: {

    // splitText: function() {
    //
    //   let splitText = new SplitText(".home-titan-center", {type:"chars", wordsClass:"word word++", charsClass:"char char++", linesClass: "line line++"});
    //
    // }


    //   test: function() {
    //     const dasIstDerTest =  new TimelineMax()
    //         .fromTo(document.querySelector('.home-blackbox-left'), 1,
    //         // .fromTo(document.querySelector('.home-titan-center'), 1,
    //           {scaleX:0},
    //           {scaleX:1, ease:Power2.easeOut, transformOrigin:'left center'}
    //         ).progress(0)
    // }
  },

  mounted: function() {

    let windowSize = $(window).width();
    const controllerHome = new ScrollMagic.Controller();

    const stTitan = new SplitText(".home-titan-center", {type:"chars", wordsClass:"word word++", charsClass:"char-titan char-titan++", linesClass: "line line++"});
    const stHrv = new SplitText(".home-hrv", {type:"chars", wordsClass:"word word++", charsClass:"char char++", linesClass: "line line++"});

    // $(".char-titan").wrap("<div class='char-inner-titan'></div>");
    $(".char-titan1").wrap("<div class='char-inner-titan1'></div>");
    $(".char-titan2").wrap("<div class='char-inner-titan2'></div>");
    $(".char-titan3").wrap("<div class='char-inner-titan3'></div>");
    $(".char-titan4").wrap("<div class='char-inner-titan4'></div>");
    $(".char-titan5").wrap("<div class='char-inner-titan5'></div>");

// INITIAL ANIMATION

    const funcIntroAnimation = () => {

      const introAnimation =  new TimelineMax({
        // paused:true
      })
          .fromTo('.background-fallback', 0.8,
            {opacity:0},
            {opacity:1, ease:Power0.easeNone}, 0.2
          )
          .fromTo('#background-canvas', 0.8,
            {opacity:0},
            {opacity:1, ease:Power0.easeNone}, 0.4
          )
          .fromTo('.char-inner-titan1', 0.8,
            {rotationY:70, rotationX:10, rotationZ:-6, x:"-160px", y:"10px", ease:Power3.easeInOut},
            {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},1.6
          )
          .fromTo('.char-inner-titan2', 0.8,
            {rotationY:40, rotationX:7, rotationZ:-3, x:"-80px", y:"50px", ease:Power3.easeInOut},
            {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},1.6
          )
          .fromTo('.char-inner-titan3', 0.8,
            {rotationY:10, rotationX:4, rotationZ:-1, x:"-15px", y:"30px", ease:Power3.easeInOut},
            {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},1.6
          )
          .fromTo('.char-inner-titan4', 0.8,
            {rotationY:-40, rotationX:7, rotationZ:3, x:"60px", y:"-5px", ease:Power3.easeInOut},
            {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},1.6
          )
          .fromTo('.char-inner-titan5', 0.8,
            {rotationY:-70, rotationX:10, rotationZ:6, x:"130px", y:"40px", ease:Power3.easeInOut},
            {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},1.6
          )
          .fromTo($('.home-titan-center'), 0.6,
            {opacity:0},
            {opacity:1}, 1.6
          )
          // .staggerFromTo($('.home-titan-center').find("div.char-inner-titan"), 0.6,
          //   {rotationY:90, rotationZ:-5},
          //   {rotationY:0, rotationZ:0, ease:Power2.easeOut, transformOrigin:'left center'},0.1 ,1.5
          // )
          .staggerFromTo($('.home-hrv').find("div.char"), 0.8,
            {rotationY:90, rotationZ:-5},
            {rotationY:0, rotationZ:0, ease:Power2.easeOut}, 0.1, 2.4
          )
          .fromTo('.home-hrv-line', 0.8,
            {scaleX:0},
            {scaleX:1, ease:Power2.easeOut, transformOrigin:'left center'}, 2.5
          )
          .fromTo('.home-viita-logo-vertical', 0.8,
            {y:50, opacity:0},
            {y:0, opacity:1, ease:Power2.easeOut}, 2.2
          )
          .fromTo('.home-blackbox-top', 2,
            {scaleY:0},
            {scaleY:1, ease:Power4.easeInOut, transformOrigin:'top center'},0.5
          )
          .fromTo('.home-blackbox-right', 2,
            {scaleX:0},
            {scaleX:1, ease:Power4.easeInOut, transformOrigin:'right center'},0.5
          )
          .fromTo('.home-blackbox-bottom', 2,
            {scaleY:0},
            {scaleY:1, ease:Power4.easeInOut, transformOrigin:'bottom center'},0.5
          )
          .fromTo('.home-blackbox-left', 2,
            {scaleX:0},
            {scaleX:1, ease:Power4.easeInOut, transformOrigin:'left center'},0.5
          )
          .fromTo('.background-fallback', 2,
            {scale:1.2},
            {scale:1, ease:Power4.easeInOut}, 0.5
          )

    }

    // if (windowSize >= 768){

      funcIntroAnimation()

    // }




// BOX OPENER ANIMATION

    const funcHomeOutroBox = () => {

      const tlHomeOutroBox =  new TimelineMax({
        // paused:true
      });
          tlHomeOutroBox
          // .staggerFromTo($('.home-titan-center').find("div.char"), 10,
          //   {scaleX:1, opacity:1, rotationX:0, rotationY:0, rotationZ:0},
          //   {scaleX:1, opacity:1, rotationX:0, rotationY:90, rotationZ:-5, ease:Power2.easeOut, transformOrigin:'left center'}, 0.1,0
          // )
          .fromTo('.home-blackbox-top-outer', 2,
            {scaleY:1},
            {scaleY:0, ease:Power2.easeInOut, transformOrigin:'top center'},0
          )
          .fromTo('.home-blackbox-right-outer', 2,
            {scaleX:1},
            {scaleX:0, ease:Power2.easeInOut, transformOrigin:'right center'},0
          )
          .fromTo('.home-blackbox-bottom-outer', 2,
            {scaleY:1},
            {scaleY:0, ease:Power2.easeInOut, transformOrigin:'bottom center'},0
          )
          .fromTo('.home-blackbox-left-outer', 2,
            {scaleX:1},
            {scaleX:0, ease:Power2.easeInOut, transformOrigin:'left center'},0
          )
          .fromTo('.background-fallback', 2,
            {scale:1},
            {scale:1.3, ease:Power2.easeInOut},0
          )


      const sceneOutroBox = new ScrollMagic.Scene({
        triggerElement: "#home",
        triggerHook: 0,
        duration: '90%',
      })
        .setTween(tlHomeOutroBox)
        .addTo(controllerHome)
        // .addIndicators()

    }


    // if (windowSize >= 768){

      funcHomeOutroBox()

    // }


    const tlTitanLetters =  new TimelineMax({
      // paused:true
    });
        tlTitanLetters
        // .fromTo('.char-titan1', 2,
        //   {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},
        //   {rotationY:70, rotationX:10, rotationZ:-6, x:"-160%", y:"10%", ease:Power1.easeInOut},0
        // )
        // .fromTo('.char-titan2', 2,
        //   {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},
        //   {rotationY:40, rotationX:7, rotationZ:-3, x:"-80%", y:"50%", ease:Power1.easeInOut},0
        // )
        // .fromTo('.char-titan3', 2,
        //   {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},
        //   {rotationY:10, rotationX:4, rotationZ:-1, x:"-15%", y:"30%", ease:Power1.easeInOut},0
        // )
        // .fromTo('.char-titan4', 2,
        //   {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},
        //   {rotationY:-40, rotationX:7, rotationZ:3, x:"60%", y:"-5%", ease:Power1.easeInOut},0
        // )
        // .fromTo('.char-titan5', 2,
        //   {rotationY:0, rotationX:0, rotationZ:0, x:0, y:0},
        //   {rotationY:-70, rotationX:10, rotationZ:6, x:"130%", y:"40%", ease:Power1.easeInOut},0
        // )
        .fromTo('.char-titan1', 2,
          {x:0, y:0},
          {x:"-160%", y:"10%", ease:Power1.easeInOut},0
        )
        .fromTo('.char-titan2', 2,
          {x:0, y:0},
          {x:"-80%", y:"50%", ease:Power1.easeInOut},0
        )
        .fromTo('.char-titan3', 2,
          {x:0, y:0},
          {x:"-15%", y:"30%", ease:Power1.easeInOut},0
        )
        .fromTo('.char-titan4', 2,
          {x:0, y:0},
          {x:"60%", y:"-5%", ease:Power1.easeInOut},0
        )
        .fromTo('.char-titan5', 2,
          {x:0, y:0},
          {x:"130%", y:"40%", ease:Power1.easeInOut},0
        )
        .fromTo('.home-viita-logo-vertical-outer', 0.3,
          {opacity:1, x:0},
          {opacity:0, x:"-6%", ease:Power1.easeInOut},0
        )
        .fromTo('.home-hrv-outer', 0.3,
          {opacity:1, x:0},
          {opacity:0, x:"20%", ease:Power1.easeInOut},0
        )
        .fromTo('.home-titan-center', 2,
          {y:0},
          {y:'20%', ease:Power1.easeInOut},0
        )
        // .fromTo('.home-blackbox-twister', 2,
        //   {rotation:0},
        //   {rotation:300, ease:Power2.easeOut}, 0
        // )


    const sceneIntroBgParallax1 = new ScrollMagic.Scene({
      triggerElement: "#home",
      triggerHook: 0,
      duration: '120%',
    })
      .setTween(tlTitanLetters)
      .addTo(controllerHome)
      // .addIndicators()




  }

}
</script>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Styles ███████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<style lang="scss">

@import "src/styles/variables.scss";

#home {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 4;
  // cursor: default;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome and Opera */

  @media screen and (max-aspect-ratio: 8/8)  {
    overflow: hidden;
  }
}

p {
  text-align: center;
  color: green;
}

.home-outer {
  height: 100%;
  width: 100%;
}

.home-center-outer {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.home-blackbox {
  position: absolute;
  background-color: $titanMainColor;
}

.home-blackbox-twister {
  height: 100%;
  width: 100%;
  position: absolute;
}

.home-blackbox-top-outer {
  position: absolute;
  top: 0;
  height: calc(50% - #{$BoxSizeDesktop});
  width: 100%;

  @media screen and (max-width: $tabletLandscape) {
    height: calc(50% - #{$BoxSizeTabletLandscape});
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    height: calc(50% - #{$BoxSizeMobile});
  }
  @media screen and (max-width: $phone) {
    height: calc(50% - #{$BoxSizeMobile});
  }
}

.home-blackbox-top {
  top: 0;
  height: 100%;
  width: 100%;
}

.home-blackbox-right-outer {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(50% - #{$BoxSizeDesktop});
  height: 100%;

  @media screen and (max-width: $tabletLandscape) {
    width: calc(50% - #{$BoxSizeTabletLandscape});
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: calc(50% - #{$BoxSizeMobile});
  }
  @media screen and (max-width: $phone) {
    width: calc(50% - #{$BoxSizeMobile});
  }
}
.home-blackbox-right {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.home-blackbox-bottom-outer {
  position: absolute;
  bottom: 0;
  height: calc(50% - #{$BoxSizeDesktop});
  width: 100%;

  @media screen and (max-width: $tabletLandscape) {
    height: calc(50% - #{$BoxSizeTabletLandscape});
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    height: calc(50% - #{$BoxSizeMobile});
  }
  @media screen and (max-width: $phone) {
    height: calc(50% - #{$BoxSizeMobile});
  }
}

.home-blackbox-bottom {
  bottom: 0;
  height: 100%;
  width: 100%;
}

.home-blackbox-left-outer {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(50% - #{$BoxSizeDesktop});
  height: 100%;

  @media screen and (max-width: $tabletLandscape) {
    width: calc(50% - #{$BoxSizeTabletLandscape});
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: calc(50% - #{$BoxSizeMobile});
  }
  @media screen and (max-width: $phone) {
    width: calc(50% - #{$BoxSizeMobile});
  }
}
.home-blackbox-left {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.home-titan-center{
  font-size: 520px;
  position: relative;
  white-space: nowrap;
  perspective: 500px;

  @media screen and (max-width: $tabletLandscape) {
    font-size: 375px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    font-size: 162px;
  }
  @media screen and (max-width: $phone) {
    font-size: 162px;
  }

  // div span {
  //   white-space: nowrap;
  // }

}

// .char-inner-titan {
//   position: relative;
//   display: inline-block;
//   perspective: 800px;
// }
.char-inner-titan1, .char-inner-titan2, .char-inner-titan3, .char-inner-titan4, .char-inner-titan5, {
  position: relative;
  display: inline-block;
  // perspective: 800px;
}

.home-viita-logo-vertical {
  position: absolute;
  width: 150px;
  bottom: 156px;
  left: -80px;
  transform: rotate(-90deg);

  @media screen and (max-width: $tabletLandscape) {
    width: 110px;
    bottom: 110px;
    left: -60px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: 50px;
    bottom: 45px;
    left: -29px;
  }
  @media screen and (max-width: $phone) {
    width: 50px;
    bottom: 45px;
    left: -29px;
  }
}

.home-hrv-outer {
  position: absolute;
  top: 94px;
  right: -110px;

  @media screen and (max-width: $tabletLandscape) {
    top: 70px;
    right: -70px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    top: 29px;
    right: -30px;
  }
  @media screen and (max-width: $phone) {
    top: 29px;
    right: -30px;
  }
}

.home-hrv {
  font-size: 100px;

  @media screen and (max-width: $tabletLandscape) {
    font-size: 65px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    font-size: 30px;
  }
  @media screen and (max-width: $phone) {
    font-size: 30px;
  }
}

.home-hrv-line {
  background-color: white;
  height: 7px;
  width: auto;
  margin-top: -6px;

  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    height: 3px;
    margin-top: -3px;
  }
  @media screen and (max-width: $phone) {
    height: 3px;
    margin-top: -3px;
  }
}

</style>



// WEBPACK FOOTER //
// src/components/Home.vue