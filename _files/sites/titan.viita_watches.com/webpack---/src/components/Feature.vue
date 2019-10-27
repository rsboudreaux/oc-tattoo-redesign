<template>

  <div class="feature">

    <div class="feature-black-bg"></div>
    <div class="feature-bg-pic-container">
      <img class="feature-bg-pic" v-bind:src="feature.featureBgPic" alt="VIITA Titan Feature"></img>
    </div>

    <div class="feature-big-text-container" >
      <div class="feature-big-text-box">
        <h2 class="feature-big-text"> {{ feature.featureName }} </h2>
      </div>
    </div>

    <div class="feature-small-text-outer">

      <div class="feature-detail-outer">

        <div class="feature-name-container">
          <div class="feature-name-box box1">
            <div class="feature-name feature-line1">  {{ feature.featureNameFirst }} </div>
          </div>
          <div class="feature-name-box box2">
            <div class="feature-name feature-line2">  {{ feature.featureNameSecond }} </div>
          </div>
        </div>

        <div class="feature-detail"> {{ feature.featureDetail }} </div>

      </div>

    </div>

    <div class="feature-watch-mask">
      <div class="feature-watch-outer">
        <div class="feature-twister">
          <img class="feature-watch" v-bind:src="feature.featureWatch" alt="VIITA Titan Watch"></img>
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
  props: ['feature'],

  data: function() {
    return {
      // active:true
    }
  },

  computed: {




  },

  methods: {

    funcFeatureIsActive: function() {

        let featureTop = $('.fake'+this.feature.id).offset().top
        let featureBottom = featureTop + $('.fake'+this.feature.id).outerHeight()

        let viewportTop = $(window).scrollTop()
        let viewportCenter = viewportTop + $(window).height() / 2


        return featureTop < viewportCenter && featureBottom > viewportCenter
    },

    // getId: function() {
    //   return this.feature.id
    // }

  },

  mounted: function() {


    $(window).on('resize scroll', () =>  {           // CHECK IF IN VIEPORT -> https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2

      this.$emit('changeActive', {
        id:this.feature.id,
        isActive:this.funcFeatureIsActive()
      } )
      // this.funcFeatureIsActive()
      // this.$emit('changeActive', true)            // CHECK VUE Tutorial #24 for event export to root app.vue

    })

    let controllerFeatures
    let bigTextWidth = 0
    let screenSize = 0
    let slideDistance = 0
    let sceneFeatureMegaAnimation
    let tlFeatureMegaAnimation

    // let _this = this;
    // let _app = this.$root;   // KANN MAN WEGLASSEN WEGEN ES6 ARROW FUNCTIONS (da bleiben die THIS parent function scope und ändern sich nie)


    setTimeout( () => {
        let splitFeatureDetail = new SplitText($(this.$el).find(".feature-detail"), {type:"lines", wordsClass:"word word++", charsClass:"char char++", linesClass: "line line++"});
    }, 700);


    const funcFeatureMegaAnimation = () => {   //wrapped in a function um es später bei resize aufrufen zu können!

      const funcCalculations = () => {
        bigTextWidth = $(this.$el).find('.feature-big-text').width()
        // bigTextWidth = $(_this.$el).find(".feature-big-text").width()
        screenSize = $( window ).width()
        slideDistance = bigTextWidth - screenSize + 300  // + wegen padding links und rechts
      }

      funcCalculations()

      controllerFeatures = new ScrollMagic.Controller();


// FEATURE BACKGROUND SCALE

      // const tlFeatureBgScale =  new TimelineMax({
      //   // paused:true
      // });
      //     tlFeatureBgScale
      //     .to($(this.$el).find('.background-fallback'), 2,
      //       {scale:1, ease:Power2.easeInOut},0
      //     )
      // const sceneFeatureBgScale = new ScrollMagic.Scene({
      //   triggerElement: '.fake1',
      //   triggerHook: 1,
      //   duration: '200%',
      // })
      //   .setTween(tlFeatureBgScale)
      //   .addTo(controllerFeatures)
      //   // .addIndicators()



// BIG TEXT SLIDE ANIMATION

      tlFeatureMegaAnimation =  new TimelineMax({
        // paused:true
      });
        tlFeatureMegaAnimation   // 4 sekunden Animation auf 400% duration - so wird animation getimed
        .fromTo(this.$el, 0.1,
          {opacity:0},
          {opacity:1, ease:Power0.easeNone},0
        )
        .fromTo($(this.$el).find('.feature-big-text-container'), 0.5,
          {opacity:0, y:30},
          {opacity:1, y:0},0
        )
        .fromTo($(this.$el).find('.feature-big-text'), 3.8,
          {x:0},
          {x:-slideDistance, ease:Power1.easeInOut},0.3
        )
        .to($(this.$el).find('.feature-big-text-container'), 0.6,
          {opacity:0.12},1.3
        )
        .to($(this.$el).find('.feature-big-text-container'), 0.2,
          {opacity:0},3.8
        )

        .fromTo($(this.$el).find('.feature-watch'), 0.5,
          {y:20},
          {y:0, ease:Power3.easeInOut},1.3
        )
        .fromTo($(this.$el).find('.feature-twister'), 3,
          {x:50, rotationX:0, rotationY:-8, rotationZ:-4},
          {x:-50,rotationX:15, rotationY:8, rotationZ:4, ease:Power0.easeInOut},1
        )
        .to($(this.$el).find('.feature-watch'), 0.4,
          {y:20, ease:Power3.easeInOut},3.5
        )

        .fromTo($(this.$el).find('.feature-black-bg'), 1,
          {scaleX:0},
          {scaleX:1, transformOrigin:"right", ease:Power2.easeInOut},1
        )
        .fromTo($(this.$el).find('.feature-watch-mask'), 1,
          {width: 0},
          {width: '100%', transformOrigin:"right", ease:Power2.easeInOut},1
        )
        .fromTo($(this.$el).find('.feature-bg-pic-container'), 1,
          {width: 0},
          {width: '50%', ease:Power2.easeInOut, transformOrigin: "right"},1.2
        )
        .fromTo($(this.$el).find('.feature-bg-pic'), 2.8,
          {scale:1},
          {scale:1.2, ease:Power2.easeOut, force3D:false},1.2
        )
        .to($(this.$el).find('.feature-black-bg'), 0.5,
          {scaleX:0, transformOrigin:"right", ease:Power2.easeInOut},3.5
        )
        .to($(this.$el).find('.feature-watch-mask'), 0.5,
          {width:0, transformOrigin:"right", ease:Power2.easeInOut},3.5
        )
        .to($(this.$el).find('.feature-bg-pic-container'), 0.8,
          {width:0, ease:Power2.easeInOut, transformOrigin: "right"},3.2
        )


        .staggerFromTo($(this.$el).find('.feature-name'), 0.5,
          {y:-150},
          {y:0, ease:Power2.easeInOut},0.2, 1.5
        )
        .staggerFromTo($(this.$el).find('.feature-detail .line'), 0.5,
          {opacity: 0, y:30},
          {opacity: 1, y:0, ease:Power2.easeInOut},0.03, 1.5
        )
        .staggerTo($(this.$el).find('.feature-name'), 0.5,
          {y:-150, ease:Power2.easeInOut},-0.2, 3.1
        )
        .staggerTo($(this.$el).find('.feature-detail .line'), 0.5,
          {opacity: 0, y:30, ease:Power2.easeInOut},-0.03, 3.1
        )


        sceneFeatureMegaAnimation = new ScrollMagic.Scene({
            triggerElement: '.fake'+this.feature.id,
            triggerHook: 1,
            duration: '400%',
          })
          sceneFeatureMegaAnimation
            .setTween(tlFeatureMegaAnimation)
            .addTo(controllerFeatures)
            // .addIndicators()

      }


      setTimeout( () => {      // Timeout needed wegen Font Fout (nachladen und splittext fail)
        funcFeatureMegaAnimation();
      }, 700);



      $(window).on('resize', () => {

        setTimeout( () => {      // Timeout needed wegen Font Fout (nachladen und splittext fail)

          tlFeatureMegaAnimation.kill()
          controllerFeatures.destroy(true)
          controllerFeatures = null;

          funcFeatureMegaAnimation()  // recalled bei resize um neue textHeight zu injecten

        }, 700);

      })

  }
}

</script>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Styles ███████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<style lang="scss">

@import "src/styles/variables.scss";


.feature {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  // cursor: default;
}

.feature-black-bg{
  position: absolute;
  width: 100%;
  top:0;
  height: 100%;
  background-color: $titanMainColor;
}

.feature-bg-pic-container{
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  // background-color: yellow;


  .feature-bg-pic{
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100%;
    object-fit: cover;
    // background-color: $titanMainColor;
    // background-image: url("/src/assets/titan_intro_bg5_tiny.jpg");
    // background-position: center;
    // // background-size: cover;
  }
}



.feature-big-text-container {
  position: absolute;
  top:0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.feature-big-text-box{
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}

.feature-big-text {
  position: relative;
  font-size: 80vh;
  white-space: nowrap;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
  color: transparent;
  padding-left: 150px;
  padding-right: 150px;

  // @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
  //   padding-left: 70px;
  //   padding-right: 70px;
  // }
  // @media screen and (max-width: $phone) {
  //   padding-left: 70px;
  //   padding-right: 70px;
  // }
}


//TEXTE

.feature-small-text-outer {
  position: absolute;
  top:0;
  width: 50%;
  height: 100%;

  @media screen and (max-width: $tabletLandscape) {
    z-index: 10;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: 100%;
    z-index: 10;
  }
  @media screen and (max-width: $phone) {
    width: 100%;
    z-index: 10;
  }
}

.feature-detail-outer {
  position: absolute;
  display: inline-block;
  left: 50%;
  height: 100%;
  // width: 235px;
  transform: translate(-50%);

  @media screen and (max-width: $tabletPortait) and (min-width: $abovePhone) {
    left: 122px;
    transform: none;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    left: 20px;
    transform: none;
    width: 100%;
    height: auto;
    bottom: 60px;
  }
  @media screen and (max-width: $phone) {
    left: 20px;
    transform: none;
    width: 100%;
    height: auto;
    bottom: 60px;
  }
}

.feature-name-container {
  @include mainFont;
  position: absolute;
  font-size: 130px;
  line-height: 110px;
  // left: 38.2%;
  bottom: 50%;
  transform: translate(-52%, 0) rotate(-90deg);
  display: inline-block;

  @media screen and (min-width: $megaScreen) {
    font-size: 180px;
    line-height: 150px;
    // bottom: 45%;
  }
  @media screen and (max-width: $tabletLandscape) {
    font-size: 90px;
    line-height: 75px;
    bottom: 45%;
  }
  @media screen and (max-width: $tabletPortait) and (min-width: $abovePhone) {
    bottom: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    position: relative;
    transform: none;
    font-size: 60px;
    line-height: 50px;
    bottom: auto;
    top: none;
    left: none;
  }
  @media screen and (max-width: $phone) {
    position: relative;
    transform: none;
    font-size: 60px;
    line-height: 50px;
    bottom: auto;
    top: none;
    left: none;
  }

  .feature-name-box {
    position: absolute;
    width: auto;
    height: auto;
    overflow: hidden;
    white-space: nowrap;

    @media screen and (max-width: $tabletPortait) {

    }
    @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
      position: relative;

    }
    @media screen and (max-width: $phone) {
      position: relative;

    }

    .feature-line1 {
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
      color: transparent;

      @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
        -webkit-text-stroke-width: 1px;
      }
      @media screen and (max-width: $phone) {
        -webkit-text-stroke-width: 1px;
      }
    }
  }

  .box1{
    // position: absolute;
    top:-110px;

    @media screen and (min-width: $megaScreen) {
      top:-150px;
    }
    @media screen and (max-width: $tabletLandscape) {
      top:-75px;
    }
    @media screen and (max-width: $tabletLandscape) {

    }
    @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
      top: auto;
    }
    @media screen and (max-width: $phone) {
      top: auto;
    }
  }

}

.feature-detail {
  position: relative;
  width: 225px;
  top: 75%;
  transform: translateY(-50%);
  @include secFont;

  @media screen and (min-width: $megaScreen) {
    font-size: 20px;
    line-height: 32px;
    width: 300px;
  }
  @media screen and (max-width: $tabletLandscape) {
    font-size: 13px;
    line-height: 20px;
    margin-top: 20px;
    top: 70%;
  }
  @media screen and (max-width: $tabletPortait) and (min-width: $abovePhone) {
    margin-left: -30px;
    width: 200px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: 230px;
    font-size: 12px;
    line-height: 18px;
    top: auto;
    margin-top: 20px;
    transform: none;
  }
  @media screen and (max-width: $phone) {
    width: 230px;
    font-size: 12px;
    line-height: 18px;
    top: auto;
    margin-top: 20px;
    transform: none;
  }
}






.feature-watch-mask {
  position: absolute;
  overflow: hidden;
  top:0;
  right: 0;
  width: 100%;
  height: 100%;
  // background-color: red;
}

.feature-watch-outer {
  position: absolute;
  width: 25vw;
  right: 25vw;
  top: 50vh;
  transform: translate(-50%,-50%);
  perspective: 1200px;

  @media screen and (max-width: $tabletLandscape) {
    width: 35vw;
  }
  @media screen and (max-width: $tabletPortait) {
    width: 50vw;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    height: 50%;
    top: 80px;
    right: 50vw;
    transform: translateX(50%);
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    height: 50%;
    top: 70px;
    right: 50vw;
    transform: translateX(50%);
  }
}
.feat1 .feature-watch-outer {
  right: 22vw;
  top: 53vh;
  @media screen and (max-width: $tabletLandscape) {
    right: 8vw;
    top: 53vh;
  }
  @media screen and (max-width: $tabletPortait) {
    right: -7vw;
    top: 53vh;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    right: 41vw;
    top: 80px;
    height: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    right: 30vw;
    top: 50%;
    height: 80%;
    transform: translateY(-50%);
  }
}
.feat2 .feature-watch-outer {
  right: 27vw;
  top: 53vh;
  @media screen and (max-width: $tabletLandscape) {
    right: 17vw;
    top: 53vh;
  }
  @media screen and (max-width: $tabletPortait) {
    right: 5vw;
    top: 53vh;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    right: 50vw;
    top: 80px;
    height: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    right: 37vw;
    top: 50%;
    height: 80%;
    transform: translateY(-50%);
  }
}
.feat3 .feature-watch-outer {
  width: 21vw;
  right: 29vw;
  @media screen and (max-width: $tabletLandscape) {
    width: 30vw;
    right: 20vw;
  }
  @media screen and (max-width: $tabletPortait) {
    width: 42vw;
    right: 9vw;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    right: 50vw;
    top: 80px;
    height: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    right: 37vw;
    top: 50%;
    height: 80%;
    transform: translateY(-50%);
  }
}
.feat4 .feature-watch-outer {
  width: 23vw;
  right: 27vw;
  @media screen and (max-width: $tabletLandscape) {
    width: 32vw;
    right: 19vw;
  }
  @media screen and (max-width: $tabletPortait) {
    width: 45vw;
    right: 5vw;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    right: 50vw;
    top: 80px;
    height: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    right: 37vw;
    top: 50%;
    height: 80%;
    transform: translateY(-50%);
  }
}
.feat5 .feature-watch-outer {
  width: 22vw;
  right: 28vw;
  top: 53vh;
  @media screen and (max-width: $tabletLandscape) {
    width: 30vw;
    right: 22vw;
  }
  @media screen and (max-width: $tabletPortait) {
    width: 42vw;
    right: 7vw;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    right: 50vw;
    top: 80px;
    height: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    right: 37vw;
    top: 50%;
    height: 80%;
    transform: translateY(-50%);
  }
}
.feat6 .feature-watch-outer {
  right: 27vw;
  top: 53vh;
  @media screen and (max-width: $tabletLandscape) {
    right: 17vw;
    top: 53vh;
  }
  @media screen and (max-width: $tabletPortait) {
    right: 5vw;
    top: 53vh;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    right: 50vw;
    top: 80px;
    height: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    right: 37vw;
    top: 50%;
    height: 80%;
    transform: translateY(-50%);
  }
}
.feat7 .feature-watch-outer {
  width: 21vw;
  right: 29vw;
  @media screen and (max-width: $tabletLandscape) {
    width: 30vw;
    right: 20vw;
  }
  @media screen and (max-width: $tabletPortait) {
    width: 42vw;
    right: 9vw;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    right: 50vw;
    top: 80px;
    height: 50%;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    right: 37vw;
    top: 50%;
    height: 80%;
    transform: translateY(-50%);
  }
}

.feature-twister{
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    height: 100%;
  }
  @media screen and (max-width: $phone) {
    height: 100%;
  }
}

.feature-watch {
  position: relative;
  width: 100%;

  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    width: auto;
    height: 100%;
  }
  @media screen and (max-width: $phone) {
    width: auto;
    height: 100%;
  }
  // opacity: 0;
}

</style>



// WEBPACK FOOTER //
// src/components/Feature.vue