<template>

  <div class="footer">

    <div class="footer-outer">

      <div class="footer-bg"></div>

      <!-- MEISTES ZEUGS IN APP.VUE -->

    </div>


  </div>

</template>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Scripts ██████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<script>

export default {
  props: ['bullet'],

  data: function() {
    return {
      // active:true
    }
  },

  computed: {




  },

  methods: {


  },

  mounted: function() {
    let controllerFooter = new ScrollMagic.Controller();
    let tlFooter
    let tlDisplayNoneFeatures
    let sceneFooter
    let sceneDisplayNone

    setTimeout( () => {
        let splitBuy = new SplitText('.footer-megaText', {type:"chars", wordsClass:"word word++", charsClass:"char charBuy++", linesClass: "line line++"});
    }, 300);

    let windowWidthBuy = $( window ).width()

    tlDisplayNoneFeatures = TweenMax.set('.feature-fix-container', {visibility:'hidden'})

        sceneDisplayNone = new ScrollMagic.Scene({
            triggerElement: this.$el,
            triggerHook: 1
          })
          sceneDisplayNone
            .setTween(tlDisplayNoneFeatures)
            .addTo(controllerFooter)
            // .addIndicators()

    const funcTlFooter = () => {

      tlFooter =  new TimelineMax({
        // paused:true
      });
        tlFooter   // 4 sekunden Animation auf 400% duration - so wird animation getimed

        .to('.footer-fixed-stuff', 0.1, {display:'block'})
        // .fromTo('.footer-megaText-scaler', 1,
        //   {scale:1.3},
        //   {scale:1, ease:Power3.easeInOut, force3D:false},0
        // )
        .fromTo('.charBuy1', 1.5,
          {scale: 1.5, opacity:0, x:-windowWidthBuy/8, rotationY:70, rotationX:10, rotationZ:-6},
          {scale: 1, opacity:1, x:0, rotationY:0, rotationX:0, rotationZ:0, ease:Power3.easeInOut, force3D:false},0.3
        )
        .fromTo('.charBuy2', 1.5,
          {scale: 1.5, opacity:0, x:0, rotationY:0, rotationX:-20, rotationZ:0},
          {scale: 1, opacity:1, x:0, rotationY:0, rotationX:0, rotationZ:0, ease:Power3.easeInOut, force3D:false},0.3
        )
        .fromTo('.charBuy3', 1.5,
          {scale: 1.5, opacity:0, x:windowWidthBuy/8, rotationY:-70, rotationX:10, rotationZ:6},
          {scale: 1, opacity:1, x:0, rotationY:0, rotationX:0, rotationZ:0, ease:Power3.easeInOut, force3D:false},0.3
        )
        .fromTo('.footer-watch', 1,
          {opacity:0, y:10},
          {opacity:1, y:0, ease:Power3.easeInOut},0.3
        )
        .fromTo('.footer-twister', 1,
          {x:50, rotationX:15, rotationY:10, rotationZ:6},
          {x:0,rotationX:0, rotationY:0, rotationZ:0, ease:Power2.easeInOut},0.3
        )
        .fromTo('.footer-buyWatch-btn-outer', 0.6,
          {y:30, opacity:0},
          {y:0, opacity:1, ease:Power3.easeInOut},0.4
        )


        sceneFooter = new ScrollMagic.Scene({
            triggerElement: this.$el,
            triggerHook: 1,
            // duration: '200%',
          })
          sceneFooter
            .setTween(tlFooter)
            .addTo(controllerFooter)
            // .addIndicators()
    }

    setTimeout( () => {
      funcTlFooter()
    }, 300);

  }
}

</script>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Styles ███████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<style lang="scss">

@import "src/styles/variables.scss";

.footer {
  position: relative;
  width: 100%;
  height: 50vh;
  // z-index: 1;
}

.footer-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
}

</style>



// WEBPACK FOOTER //
// src/components/Footer.vue