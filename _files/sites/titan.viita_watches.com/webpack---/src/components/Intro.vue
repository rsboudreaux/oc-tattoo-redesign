<template>

  <div id="intro">

    <div class="intro-bg-outer">
      <div class="intro-bg-pic-container1">
        <img class="intro-bg-pic" src="/src/assets/titan_intro_bg1_tiny.jpg" alt="VIITA Cliff"></img>
      </div>
      <div class="intro-bg-pic-container2">
        <img class="intro-bg-pic" src="/src/assets/titan_intro_bg2_tiny.jpg" alt="VIITA Mountain"></img>
      </div>
      <div class="intro-bg-pic-container3">
        <img class="intro-bg-pic" src="/src/assets/titan_intro_bg5_tiny.jpg" alt="VIITA Runner"></img>
      </div>
      <div class="intro-bg-pic-container4">
        <img class="intro-bg-pic" src="/src/assets/titan_intro_bg4_tiny.jpg" alt="VIITA Street"></img>
      </div>
    </div>

    <div class="intro-headline-outer">
      <h1 class="intro-headline">NATURE'S</br>STRONGEST</h1>
      <h1 class="intro-white">CRAFTED INTO A </br> SMARTWATCH.</h1>
      <h1 class="intro-text">Manufactured out of Titanium, created to push you through your most challenging adventures.</h1>
    </div>

    <div class="intro-watch-outer-mobile">
      <div class="intro-twister-mobile">
        <img class="intro-watch-mobile" src="/src/assets/viita_titan_main.png" alt="VIITA Titan Watch"></img>
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
      headline12: "NATURE'S STRONGEST",
      headline34: "CRAFTED INTO A SMARTWATCH"
    }
  },
  computed: {

    tlWatch: function() {

        }

  },

  mounted: function() {

    const controllerIntro = new ScrollMagic.Controller();
    let windowSize = $(window).width();


  // FEATURE GETS VISIBLE ANIMATION

    // let splitFeatureBigText = new SplitText(".feature-big-text", {type:"chars", wordsClass:"word word++", charsClass:"char char++", linesClass: "lineIntro line++"});
    const tlFeatureVisible =  new TimelineMax({
      // paused:true
    });
        tlFeatureVisible
        .fromTo('.navigation', 0.1,
          {opacity:0},
          {opacity:1, ease:Power0.easeNone},0
        )

    const sceneFeatureVisible = new ScrollMagic.Scene({
      triggerElement: '.fake1',
      triggerHook: 1,
    })
      .setTween(tlFeatureVisible)
      .addTo(controllerIntro)
      // .addIndicators()



// WATCH ANIMATION

    let textHeight = $( '.intro-headline-outer' ).height();
    // console.log(textHeight);

    const funcIntroWatchAnimation = () => {        //outer function für responsive

        const tlIntroWatchIn =  new TimelineMax({
          // paused:true
        });
            tlIntroWatchIn
            .to('.intro-fixed-watch-container',0.1,
              {visibility:'visible'}
            )
            .fromTo('.intro-watch', 0.4,
              {autoAlpha:0, y:20, x:0},
              {autoAlpha:1, y:0, x:0, ease:Power1.easeInOut},0
            )
            .to('.intro-watch', 0.4,
              {autoAlpha:0, y:0, x:-50, ease:Power1.easeInOut},1
            )
            .fromTo('.intro-watch2', 0.4,
              {autoAlpha:0, y:0, x:50},
              {autoAlpha:1, y:0, x:0, ease:Power1.easeInOut},1
            )
            .to('.intro-watch2', 0.4,
              {autoAlpha:0, y:0, x:-50, ease:Power1.easeInOut},2
            )
            .fromTo('.intro-watch3', 0.4,
              {autoAlpha:0, y:0, x:50},
              {autoAlpha:1, y:0, x:0, ease:Power1.easeInOut},2
            )
            .to('.intro-watch3', 0.4,
              {autoAlpha:0, y:20, ease:Power1.easeInOut},3
            )
            .fromTo('.intro-twister', 3.4,
              {rotationX:0, rotationY:-8, rotationZ:-5},
              {rotationX:10, rotationY:8, rotationZ:5, ease:Power0.easeInOut},0.2
            )
            .to('.intro-fixed-watch-container',0.1,
              {visibility:'hidden'}
            )
        let funcSceneIntroWatchIn = () => {   //wrapped in a function um es später bei resize aufrufen zu können!

          let sceneIntroWatchIn = new ScrollMagic.Scene({
            triggerElement: "#intro",
            triggerHook: 0.3,
            duration: textHeight+700,
          })
          .setTween(tlIntroWatchIn)
          .addTo(controllerIntro)
          // .addIndicators()
        }

        funcSceneIntroWatchIn();

        $(window).on('resize', () => {

          textHeight = $( '.intro-headline-outer' ).height();

          funcSceneIntroWatchIn();  // recalled bei resize um neue textHeight zu injecten

        })

    }


    // $(window).on('resize', () => {
      if (windowSize >= 768){

          funcIntroWatchAnimation()

      }
    // })



// INTRO TEXT ANIMATION

    // setTimeout(function () {
    //   let splitIntroHeadline = new SplitText(".intro-headline", {type:"lines", wordsClass:"word word++", charsClass:"char char++", linesClass: "lineIntro line++"});
    //   let splitIntroWhite = new SplitText(".intro-white", {type:"lines", wordsClass:"word word++", charsClass:"char char++", linesClass: "lineIntro line++"});
    //   let splitIntroText = new SplitText(".intro-text", {type:"lines", wordsClass:"word word++", charsClass:"char char++", linesClass: "lineIntro line++"});
    // }, 100);


    const funcIntroPicAnimation = () => {   //wrapped in a function um es später bei resize aufrufen zu können!


  // BG PICS ANIMATIONS

      const tlIntroBgPic1 =  new TimelineMax({
        // paused:true
      });
          tlIntroBgPic1
          .fromTo('.intro-bg-pic-container1', 2,
            {y:"30%"},
            {y:"-30%", ease:Power1.easeInOut},0
          )
          .fromTo($('.intro-bg-pic-container1').find('.intro-bg-pic'), 2,
            {scale:1},
            {scale:1.6, ease:Power1.easeInOut, force3D:false},0
          )
      const sceneIntroBgParallax1 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 1,
        duration: '200%',
      })
        .setTween(tlIntroBgPic1)
        .addTo(controllerIntro)
        // .addIndicators()


      const tlIntroBgPic2 =  new TimelineMax({
        // paused:true
      });
          tlIntroBgPic2
          .fromTo('.intro-bg-pic-container2', 2,
            {y:"60%"},
            {y:"-60%", ease:Power1.easeInOut},0
          )
          .fromTo($('.intro-bg-pic-container2').find('.intro-bg-pic'), 2,
            {scale:1},
            {scale:1.6, ease:Power1.easeInOut, force3D:false},0
          )
      const sceneIntroBgParallax2 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 0,
        duration: '200%',
      })
        .setTween(tlIntroBgPic2)
        .addTo(controllerIntro)
        // .addIndicators()


      const tlIntroBgPic3 =  new TimelineMax({
        // paused:true
      });
          tlIntroBgPic3
          .fromTo('.intro-bg-pic-container3', 2,
            {y:"40%"},
            {y:"-40%", ease:Power1.easeInOut},0
          )
          .fromTo($('.intro-bg-pic-container3').find('.intro-bg-pic'), 2,
            {scale:1},
            {scale:2, ease:Power1.easeInOut, transformOrigin:"center 60%", force3D:false},0
          )
      const sceneIntroBgParallax3 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 0,
        duration: '270%',
      })
        .setTween(tlIntroBgPic3)
        .addTo(controllerIntro)
        // .addIndicators()


      const tlIntroBgPic4 =  new TimelineMax({
        // paused:true
      });
          tlIntroBgPic4
          .fromTo('.intro-bg-pic-container4', 2,
            {y:"100%"},
            {y:"-100%", ease:Power1.easeInOut},0
          )
          .fromTo($('.intro-bg-pic-container4').find('.intro-bg-pic'), 2,
            {scale:1},
            {scale:1.4, ease:Power1.easeInOut, transformOrigin:"center 80%", force3D:false},0
          )
      const sceneIntroBgParallax4 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 0,
        duration: '200%',
      })
        .setTween(tlIntroBgPic4)
        .addTo(controllerIntro)
        // .addIndicators()

    }

    if (windowSize >= 768){
      funcIntroPicAnimation()
    }

  }
}
</script>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Styles ███████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<style lang="scss">

@import "src/styles/variables.scss";

#intro {
  position: relative;
  height: auto;
  width: 100%;
  background-color: $titanMainColor;
  overflow: hidden;
  z-index: 3;
}


.intro-bg-pic-container1 {
  position: absolute;
  overflow: hidden;
  left: 33%;
  top: 300px;
  transform: translate(-50%);
  width: 20%;

  @media screen and (max-width: $tabletIpadPro) {
    left: 25%;
    top: 220px;
    width: 28%;
  }
  @media screen and (max-width: $tabletPortait) {
    left: 40%;
    top: 220px;
    width: 28%;
  }
  @media screen and (max-width: $phone) {
    left: 10%;
    top: 30px;
    transform: translate(0);
    width: 40%;
    max-width: 160px;
  }
}

.intro-bg-pic-container2 {
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 30%;
  transform: translateY(-50%);
  width: 32%;

  @media screen and (max-width: $tabletIpadPro) {
    right: 0;
    top: 28%;
    width: 45%;
  }
  @media screen and (max-width: $tabletPortait) {
    right: 0;
    top: 28%;
    width: 50%;
  }
  @media screen and (max-width: $phone) {
    right: 0;
    top: 300px;
    transform: translateY(-50%);
    width: 60%;
    max-width: 240px;
    display: block;
  }
}

.intro-bg-pic-container3 {
  position: absolute;
  overflow: hidden;
  left: 0;
  bottom: 100px;
  width: 25%;

  @media screen and (max-width: $tabletIpadPro) {
    left: 0;
    bottom: 200px;
    width: 32%;
  }
  @media screen and (max-width: $tabletPortait) {
    left: 0;
    bottom: 250px;
    width: 38%;
  }
  @media screen and (max-width: $phone) {
    left: 0;
    bottom: 120px;
    width: 35%;
    max-width: 140px;
  }
}

.intro-bg-pic-container4 {
  position: absolute;
  overflow: hidden;
  left: 55%;
  top: 40%;
  width: 20%;

  @media screen and (max-width: $tabletIpadPro) {
    left: 60%;
    top: 38%;
    width: 24%;
  }
  @media screen and (max-width: $tabletPortait) {
    left: 55%;
    top: 33%;
    width: 30%;
  }
  @media screen and (max-width: $phone) {
    right: 20%;
    left: auto;
    top: 35%;
    width: 30%;
    max-width: 120px;
    display: none;
  }
  // -webkit-box-shadow: 0px 17px 65px 13px rgba(0,0,0,0.63);
  // -moz-box-shadow: 0px 17px 65px 13px rgba(0,0,0,0.63);
  // box-shadow: 0px 17px 65px 13px rgba(0,0,0,0.63);
}

.intro-bg-pic {
  position: relative;
  width: 100%;
  height: 100%;
}


.intro-headline-outer {
  position: absolute;
  padding-top: 500px;
  padding-bottom: 500px;
  position: relative;
  left: 70px;
  width: calc(50% - 140px);
  font-size: 178px;
  line-height: 148px;

  @media screen and (max-width: 1700px) {
    font-size: 137px;
    line-height: 114px;
  }
  @media screen and (max-width: $tabletIpadPro) {
    line-height: 78px;
    font-size: 92px;
    left: 50px;
    width: calc(50% - 100px);
    padding-top: 400px;
    padding-bottom: 400px;
  }
  @media screen and (max-width: $tabletPortait) {
    line-height: 56px;
    font-size: 63px;
    left: 50px;
    width: calc(50% - 100px);
    padding-top: 400px;
    padding-bottom: 400px;
  }
  @media screen and (max-width: $phone) {
    line-height: 43px;
    font-size: 50px;
    padding-top: 100px;
    padding-bottom: 150px;
    left: 20px;
    width: calc(100% - 40px);
    text-align: center;
  }
  @media screen and (min-width: $megaScreen) {
    line-height: 210px;
    font-size: 250px;
  }
}

.intro-headline {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  color: transparent;

  @media screen and (max-width: $tabletLandscape) {
    -webkit-text-stroke-width: 1px;
  }
}

.intro-white {
  color: white;
}

.intro-text {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  color: transparent;
  text-transform: uppercase;

  @media screen and (max-width: $tabletLandscape) {
    -webkit-text-stroke-width: 1px;
  }
  @media screen and (max-width: $phone) {
    margin-top: 280px;
    @include secFont;
    -webkit-text-stroke-width: 0px;
    -webkit-text-stroke-color: white;
    color: white;
    text-transform: none;
    text-align: center;
    // width: 280px;
    margin-left: 15%;
    margin-right: 15%;
  }
}

.intro-watch-outer-mobile {
  position: absolute;
  width: auto;
  height: 250px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: none;

  @media screen and (max-width: $phone) {
    display: block;
  }

  .intro-twister-mobile {
    position: relative;
    height: 100%;
    width: auto;
  }

  .intro-watch-mobile {
    position: relative;
    height: 100%;
    width: auto;

  }
}

</style>



// WEBPACK FOOTER //
// src/components/Intro.vue