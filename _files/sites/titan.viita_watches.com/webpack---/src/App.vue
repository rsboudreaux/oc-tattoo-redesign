<template>
  <div id="app">
    <background-component></background-component>
    <home-component></home-component>
    <intro-component></intro-component>

    <div class="feature-scrolltrigger">
      <div class="fake-feature fake1"></div>
      <div class="fake-feature fake2"></div>
      <div class="fake-feature fake3"></div>
      <div class="fake-feature fake4"></div>
      <div class="fake-feature fake5"></div>
      <div class="fake-feature fake6"></div>
      <div class="fake-feature fake7"></div>
    </div>

    <div class="feature-fix-container">
      <feature-component v-for="(feature,key) in features" :key="key" v-bind:class= "{['feat' + (key + 1) ]: true, active:feature.active}" v-bind:feature="feature" @changeActive="changeActive($event)"></feature-component>
    </div>

    <div class="intro-fixed-watch-container">
      <div class="intro-watch-outer">
        <div class="intro-twister">
          <img class="intro-watch" src="/src/assets/viita_titan_main.png" alt="VIITA Titan"></img>
        </div>
      </div>
      <div class="intro-watch-outer">
        <div class="intro-twister">
          <img class="intro-watch2" src="/src/assets/viita_titan_housing2.png" alt="VIITA Titan Housing"></img>
        </div>
      </div>
      <div class="intro-watch-outer">
        <div class="intro-twister">
          <img class="intro-watch3" src="/src/assets/viita_titan_ceramicbezel.png" alt="VIITA CERAMIC BEZEL"></img>
        </div>
      </div>
    </div>

    <div class="footer-fixed-stuff">
      <div class="footer-megaText-container">
        <div class="footer-megaText-box">
          <div class="footer-megaText-scaler">
            <div class="footer-megaText"> BUY </div>
          </div>
        </div>
      </div>
      <div class="footer-watch-outer">
        <div class="footer-twister">
          <img class="footer-watch" src="/src/assets/viita_titan_housing2.png" alt="VIITA Titan Housing"></img>
        </div>
      </div>
      <div class="footer-buyWatch-btn-outer">
        <a class="footer-buyWatch-btn bigItUp" @mouseenter="funcFooterBtn" @mouseleave="funcFooterBtnOut" href="https://www.viita-watches.com/product/viita-titan-hrv/"  target="_blank" rel="noopener">
          <div class="footer-btn-hover-bg"></div>
          <div class="footer-buyWatch-txt">
            SHOP NOW
          </div>
        </a>
        <a class="imprint" href="https://www.viita-watches.com/imprint/?noredirect=en_US" target="_blank" rel="noopener">IMPRINT</a>
      </div>
    </div>

    <footer-component></footer-component>

    <interface-component></interface-component>

    <div class="theBall-outer">
      <div class="theBall"></div>
    </div>

    <div class="navigation">
      <bullet-component v-for="(bullet,key) in bullets" :key="key" v-bind:class= "{['bullet' + (key + 1) ]: true, active:bullet.active}" v-bind:bullet="bullet" @getBulletNumber="getBulletNumber($event)"></bullet-component>
    </div>



  </div>
</template>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Scripts ██████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<script>
import backgroundcomponent from './components/Background.vue'
import homecomponent from './components/Home.vue'
import introcomponent from './components/Intro.vue'
import featurecomponent from './components/Feature.vue'
import bulletcomponent from './components/Bullet.vue'
import interfacecomponent from './components/Interface.vue'
import footercomponent from './components/Footer.vue'


export default {
  components:{
    'background-component': backgroundcomponent,
    'home-component': homecomponent,
    'intro-component': introcomponent,
    'feature-component': featurecomponent,
    'bullet-component': bulletcomponent,
    'interface-component': interfacecomponent,
    'footer-component': footercomponent
  },
  data() {  //andere schreibweise für function() {
    return {
      bullets: [
        {
          id:1,
          active: false,
          featureName:"TITAN HOUSING"
        },
        {
          id:2,
          active: false,
          featureName:"CERAMIC BEZEL"
        },
        {
          id:3,
          active: false,
          featureName:"SAPPHIRE GLASS"
        },
        {
          id:4,
          active: false,
          featureName:"WATERPROOF"
        },
        {
          id:5,
          active: false,
          featureName:"BUILT-IN GPS"
        },
        {
          id:6,
          active: false,
          featureName:"MACHINE LEARNING"
        },
        {
          id:7,
          active: false,
          featureName:"MORE FEATURES"
        }
      ],
      features: [
        {
          id:1,
          active: false,
          featureName:"TITAN HOUSING",
          featureNameFirst:"TITAN",
          featureNameSecond:"HOUSING",
          featureDetail:"Titanium is the material from which real luxury watches are manufactured. Anti allergen and therefore suitable for every skin type. 42% lighter and dramatically harder than stainless steel.",
          featureWatch:"/src/assets/viita_titan_housing2.png",
          featureBgPic:"/src/assets/feature_bg_housing_tiny.jpg",
        },
         {
           id:2,
           active: false,
           featureName:"CERAMIC BEZEL",
           featureNameFirst:"CERAMIC",
           featureNameSecond:"BEZEL",
           featureDetail:"Manufactured under high pressure, the ceramic bezel combines all the features you would want for a high-quality luxury watch: aesthetics, lightness and scratch resistance.",
           featureWatch:"/src/assets/viita_titan_ceramicbezel.png",
           featureBgPic:"/src/assets/feature_bg_bezel_tiny.jpg",
         },
         {
           id:3,
           active: false,
           featureName:"SAPPHIRE GLASS",
           featureNameFirst:"SAPPHIRE",
           featureNameSecond:"GLASS",
           featureDetail:"At the watch glass, the wheat separates from the chaff. Genuine, scratch resistant and almost indestructible sapphire crystal adorns the high resolution display against environmental influences.",
           featureWatch:"/src/assets/viita_titan_saphirglas.png",
           featureBgPic:"/src/assets/feature_bg_saphire_tiny.jpg",
         },
         {
           id:4,
           active: false,
           featureName:"10 ATM WATERPROOF",
           featureNameFirst:"WATER",
           featureNameSecond:"PROOF",
           featureDetail:"Not 3 ATM, not even 5 ATM. The VIITA TITAN HRV is waterproof up to 10 ATM. So, you can swim, snorkel and take a shower without worrying about your watch.",
           featureWatch:"/src/assets/viita_titan_waterproof.png",
           featureBgPic:"/src/assets/feature_bg_waterproof2_tiny.jpg",
         },
         {
           id:5,
           active: false,
           featureName:"BUILT-IN GPS",
           featureNameFirst:"BUILT-IN",
           featureNameSecond:"GPS",
           featureDetail:"Leave your smartphone at home. In training mode, our built-in GPS records all movements and visualizes them on your VIITA.",
           featureWatch:"/src/assets/viita_titan_gps.png",
           featureBgPic:"/src/assets/feature_bg_gps_tiny.jpg",
         },
         {
           id:6,
           active: false,
           featureName:"MACHINE LEARNING",
           featureNameFirst:"MACHINE",
           featureNameSecond:"LEARNING",
           featureDetail:"Your VIITA TITAN HRV analyzes your heart rate variability 24/7 and uses machine learning to calculate your individual training recommendation in real time.",
           featureWatch:"/src/assets/viita_titan_algorithm.png",
           featureBgPic:"/src/assets/feature_bg_algo_tiny.jpg",
         },
         {
           id:7,
           active: false,
           featureName:"MORE FEATURES",
           featureNameFirst:"MORE",
           featureNameSecond:"FEATURES",
           featureDetail:"And features like regeneration & stress analysis, drink management, the ability to track over 19 different activities and, of course, smartphone notifications.",
           featureWatch:"/src/assets/viita_titan_additional.png",
           featureBgPic:"/src/assets/feature_bg_additional_tiny.jpg",
         }
      ]
    }
  },

  methods: {
    changeActive: function(feature) {
      this.features[feature.id - 1].active = feature.isActive
      this.bullets[feature.id - 1].active = feature.isActive
      // console.log(feature.id)
    },
    getBulletNumber: function(bullet) {
      // console.log(this.features[bullet.bulletNumber - 1]);
      // console.log("feat"+[bullet.bulletNumber])
      let featuresAll = document.getElementsByClassName('fake-feature');
      let selectedFeature = featuresAll[bullet.bulletNumber - 1];
      let bulletFeatureTop = $(selectedFeature).offset().top
      let centerOfFeature = bulletFeatureTop + $(window).height() * 1.3
      TweenLite.to(window, 3, {scrollTo:{y:centerOfFeature,autoKill:false}, ease:Power2.easeOut} );
    },

    funcFooterBtn: function() {
      const tlFooterBtn =  new TimelineMax({
        // paused:true
      });
          tlFooterBtn
          .fromTo('.footer-btn-hover-bg', 0.3,
            {width:0},
            {width:'150px', ease:Power2.easeInOut, transformOrigin:"left"},0
          )
          .to('.footer-buyWatch-txt', 0.3,
            {color:"black", ease:Power2.easeInOut},0
          )
    },

    funcFooterBtnOut: function() {
      const tlFooterBtnOut =  new TimelineMax({
        // paused:true
      });
          tlFooterBtnOut
          .to('.footer-btn-hover-bg', 0.3,
            {width:0, ease:Power2.easeInOut},0
          )
          .to('.footer-buyWatch-txt', 0.3,
            {color:"white", ease:Power2.easeInOut},0
          )
    },

  },

  mounted: function() {

      SmoothScroll({

        animationTime    : 1000, // [ms]
        // stepSize         : 100, // [px]

        accelerationDelta : 12,  // 50
        accelerationMax   : 3,   // 3

      })

      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // Mauszeiger BALL animation auf Mausposi ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙


      let mousePosX = 0
      let mousePosY = 0
      let distanceX = 0
      let distanceY = 0
      let dragdelay = 0.20
      let dragDistance = 1
      let distance = 1
      let nochSchleiferX = 0
      let nochSchleiferY = 0
      let windowWidth = $(window).width()
      let windowHeight = $(window).height()
      const theBall = $('.theBall')
      const theBallOuter = $('.theBall-outer')
      let ballRadius = theBall.height() / 2
      let theBallPosi

      $( window ).on( "mousemove", function( event ) {
        mousePosX = event.pageX + theBallOuter.width()/2
        mousePosY = event.pageY - $(window).scrollTop() + theBallOuter.width()/2
      })

      //NACHDRAG VERSION: IMPERFORMANT
      // const theBallDrag = function() {
      //   theBallPosi = theBall.offset()
      //   distanceX = mousePosX - theBallPosi.left // distanz für nachdraggen -> https://tinyurl.com/yc69385s
      //   distanceY = mousePosY - theBallPosi.top + $(window).scrollTop() // distanz für nachdraggen -> https://tinyurl.com/yc69385s
      //   distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      //
      //   if (mousePosX > 0 || mousePosY > 0) {
      //     if (distance > 1) {
      //       nochSchleiferX += ((distanceX-ballRadius) * dragdelay);
      //       nochSchleiferY += ((distanceY-ballRadius) * dragdelay);
      //     }
      //   }
      //   // console.log(nochSchleiferX);
      //
      //   theBall.css('transform', 'translate('+nochSchleiferX+'px,'+nochSchleiferY+'px)')
      //   requestAnimationFrame(theBallDrag)
      //
      // }
      // theBallDrag()

      const theBallDrag = function() {

        theBallOuter.css('transform', 'translate('+mousePosX+'px,'+mousePosY+'px)')
        requestAnimationFrame(theBallDrag)

      }
      theBallDrag()

      $( ".bigItUp" ).hover(
        function() {
          $(".theBall").addClass( "huuuuuge" )
        },
        function () {
          $(".theBall").removeClass("huuuuuge")
        }
      )


      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // TRIGGER RESIZE WENN MAN AUF MOBILE WECHSELT: ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙

      let ww = $(window).width();
      let limit = 767;
      // $('body').html( Math.random() * 300+' WindowWidth= '+ww);

      function refresh() {
         ww = $(window).width();
         let w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
      }

      let tOut;
      $(window).resize(function() {
          let resW = $(window).width();
          clearTimeout(tOut);
          // $('body').html( resW );
          if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {
              tOut = setTimeout(refresh, 100);
          }
      });

      //TRIGGER RESIZE WENN MAN AUF TABLET ORIENTATION WECHSELT:

      let ww2 = $(window).width();
      let limit2 = 1023;
      // $('body').html( Math.random() * 300+' WindowWidth= '+ww);

      function refresh2() {
         ww2 = $(window).width();
         let w2 =  ww2<limit2 ? (location.reload(true)) :  ( ww2>limit2 ? (location.reload(true)) : ww2=limit2 );
      }

      let tOut2;
      $(window).resize(function() {
          let resW2 = $(window).width();
          clearTimeout(tOut2);
          // $('body').html( resW );
          if ( (ww2>limit2 && resW2<limit2) || (ww2<limit2 && resW2>limit2) ) {
              tOut2 = setTimeout(refresh2, 100);
          }
      });

      //TRIGGER RESIZE WENN MAN VON TABLET AUF DESKTOP WECHSELT:

      let ww3 = $(window).width();
      let limit3 = 1199;
      // $('body').html( Math.random() * 300+' WindowWidth= '+ww);

      function refresh3() {
         ww3 = $(window).width();
         let w3 =  ww3<limit3 ? (location.reload(true)) :  ( ww3>limit3 ? (location.reload(true)) : ww3=limit3 );
      }

      let tOut3;
      $(window).resize(function() {
          let resW3 = $(window).width();
          clearTimeout(tOut3);
          // $('body').html( resW );
          if ( (ww3>limit3 && resW3<limit3) || (ww3<limit3 && resW3>limit3) ) {
              tOut3 = setTimeout(refresh3, 100);
          }
      });

      //TRIGGER RESIZE WENN MAN AUF MEGASCREEN WECHSELT:

      let ww4 = $(window).width();
      let limit4 = 2259;
      // $('body').html( Math.random() * 300+' WindowWidth= '+ww);

      function refresh4() {
         ww4 = $(window).width();
         let w4 =  ww4<limit4 ? (location.reload(true)) :  ( ww4>limit4 ? (location.reload(true)) : ww4=limit4 );
      }

      let tOut4;
      $(window).resize(function() {
          let resW4 = $(window).width();
          clearTimeout(tOut4);
          // $('body').html( resW );
          if ( (ww4>limit4 && resW4<limit4) || (ww4<limit4 && resW4>limit4) ) {
              tOut4 = setTimeout(refresh3, 100);
          }
      });

  }

}
</script>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Styles ███████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<style lang="scss">

@import "src/styles/variables.scss";

html, body, h1, h2, h3, p {
  margin: 0;
  padding: 0;
}

html {
  position: absolute;
  height: 100vh;
  width: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  touch-action: manipulation;
  // -webkit-overflow-scrolling: touch;
  // hyphens: auto;

}

body {
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100%;
  cursor: none;
  @include mainFont;
}

h1 {
  display: block;
  font-size: inherit;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  font-weight: bold;
}

p {
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

a {
    text-decoration: none;
    color: inherit,
}

::selection {
  background: $titanMainColor; /* WebKit/Blink Browsers */
  color: $titanMainColor;
}
::-moz-selection {
  background: $titanMainColor; /* Gecko Browsers */
  color: $titanMainColor;
}

#app{
  position: relative;
  height: 100vh;
  width: 100%;
}

.navigation {
  z-index: 3;
  position: fixed;
  bottom: 70px;
  left: 70px;
  // mix-blend-mode: exclusion;

  @media screen and (max-width: $tabletLandscape) {
    bottom: 50px;
    left: 50px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    bottom: 0px;
    left: 12px;
    height: 30px;
  }
  @media screen and (max-width: $phone) {
    bottom: 0px;
    left: 12px;
    height: 30px;
  }
}

.feature-fix-container{
  position: fixed;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  z-index: 2;
}

.feature-scrolltrigger {
  position: relative;
}

.fake-feature {
  position: relative;
  height: 400vh;
}


.intro-fixed-watch-container{
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  visibility: hidden;

  @media screen and (max-width: $phone) {
    display:none;
    position: absolute;
  }

}

.intro-watch-outer {
  position: absolute;
  width: 25%;
  left: 50%;
  top: 52%;
  transform: translate(-50%,-50%);
  perspective: 1200px;

  @media screen and (max-width: $tabletLandscape) {
    width: 30%;
  }
}

.intro-twister {
  position: relative;
  height: 100%;
  width: auto;
}

.intro-watch {
  position: relative;
  width: 100%;
  left: 3%
}
.intro-watch2 {
  position: relative;
  top: 5%;
  left: 11%;
  width: 110%;
}
.intro-watch3 {
  position: relative;
  top: 5%;
  right: 10%;
  width: 110%;
}


// FOOTER:

.footer-fixed-stuff {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index:1;
}

.footer-megaText-container {
  position: absolute;
  top:0;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
}

.footer-megaText-box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  perspective: 500px;
}

.footer-megaText {
  position: relative;
  font-size: 70vh;
  white-space: nowrap;

  @media screen and (max-width: $tabletPortait) {
    font-size: 50vh;
  }
  @media screen and (max-width: $phone) {
    font-size: 35vh;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    font-size: 70vh;
  }
}

.footer-watch-outer {
  position: absolute;
  height: 70vh;
  left: 53%;
  top: 52vh;
  transform: translate(-50%,-50%);
  perspective: 1200px;

  @media screen and (max-width: $tabletPortait) {
    height: 50vh;
  }
  @media screen and (max-width: $phone) {
    height: 40vh;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    height: 70vh;
  }
}

.footer-twister{
  position: relative;
  height: 100%;
}

.footer-watch {
  position: relative;
  height: 100%;
}

.footer-buyWatch-btn-outer{
  position: absolute;
  height: 100vh;
  width: 100%;
}

.footer-buyWatch-btn {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid white;
  width: 150px;
  height: 50px;
  @include mainFont;
  background-color: transparent;
  padding: 0;
  box-sizing: content-box;
  z-index:10;

  @media screen and (max-width: $tabletLandscape) {
    bottom: 50px;
    width: 150px;
    height: 50px;
  }
  @media screen and (max-width: $phone) {
    bottom: 90px;
    width: 150px;
    height: 50px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    bottom: 20px;
    width: 100px;
    height: 30px;
  }

  .footer-buyWatch-txt {
    position: absolute;
    white-space: nowrap;
    text-align: center;
    // padding-left: 30px;
    // padding-right: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
      font-size: 16px;
    }
  }
  .footer-btn-hover-bg {
    position: absolute;
    top:0;
    left:0;
    width: 0;
    height: 100%;
    background-color: white;
  }
}

.imprint {
  position: absolute;
  left: 50%;
  bottom: 27px;
  transform: translateX(-50%);
  line-height: 15px;
  opacity: 0.2;
  z-index: 10;
  transition: opacity 0.2s;
  cursor: none;

  @media screen and (max-width: $tabletLandscape) {
    bottom: 18px;
  }
  @media screen and (max-width: $phone) {
    bottom: 60px;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    bottom: 20px;
    left:75%;
  }
}
.imprint:hover {
  opacity:1;
}

.theBall-outer {
  position: fixed;
  mix-blend-mode: exclusion;
  width: 30px;
  height: 30px;
  top: -30px;
  left: -30px;
  z-index: 5;
  pointer-events: none !important;
}

.theBall {
  position: absolute;
  background-color: white;
  mix-blend-mode: exclusion;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center center;

  @media screen and (max-width: $tabletLandscape) {
    display: none;
  }
}
.huuuuuge {
  transform: scale(2);
}


</style>



// WEBPACK FOOTER //
// src/App.vue