<template>

  <div id="background">

      <div class="background-fallback"></div>
      <canvas id="background-canvas"></canvas>

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

  mounted: function () {

    let myCanvas = document.getElementById('background-canvas')
    let viewportWidth = $(window).width()
    let viewportHeight = $(window).height()
    var size = [viewportWidth, viewportHeight]
    var ratio = size[0] / size[1]
    var pic_w_orig = 2000
    var pic_h_orig = 2000

    const ticker = new PIXI.ticker.Ticker()
    let waveFilter
    let count = 0

    //Create the renderer
    const renderer = PIXI.autoDetectRenderer(viewportWidth, viewportHeight, {
      view: myCanvas,
      antialias: true,
      legacy:true
    });

    //Create a container object called the `stage`
    const stage = new PIXI.Container()

    //customize the renderer:
    renderer.backgroundColor = 0x000000
    // renderer.view.style.position = "absolute"
    // renderer.view.style.display = "block"
    renderer.autoResize = true

    //load images:
    PIXI.loader
      .add("/src/assets/marble_bg_tiny.jpg")
      .load(myPixiStuff)

    function myPixiStuff() {

      const bgPic = PIXI.Sprite.fromImage('/src/assets/marble_bg_tiny.jpg')

      //Add picture to the stage
      stage.addChild(bgPic)

      const displacementSprite = PIXI.Sprite.fromImage('/src/assets/displ_map.jpg')
      displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // CREATING THE DISP MAP ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙


      let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite)
      // let bloomFilter = new PIXI.filters.AdvancedBloomFilter
      // bloomFilter.bloomScale = 1
      // bloomFilter.blur = 7
      // displacementFilter.blendMode = PIXI.BLEND_MODES.SCREEN;   //ADD BLEND MODE DIREKT AUF DEN FILTER NICHT EXTRA AUFS BILD!!!!!

      stage.addChild(displacementSprite)

      bgPic.filters = [displacementFilter]


      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // RESCALE ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙

      // re-scale image when viewport resizes
      // get the parent element size
      // use largest scale factor of horizontal/vertical
      const resize = () => {
        viewportWidth = $(window).width()
        viewportHeight = $(window).height()
        let scale_w = viewportWidth / pic_w_orig
        let scale_h = viewportHeight / pic_h_orig
        let scale = scale_w > scale_h ? scale_w : scale_h

        let finalWidth = scale * pic_w_orig
        let finalHeight = scale * pic_h_orig

        // scale the video
        bgPic.width = finalWidth*1.02
        bgPic.height = finalHeight*1.02
        bgPic.x = (viewportWidth - finalWidth*1.02)/2
        bgPic.y = (viewportHeight - finalHeight*1.02)/2

        //this part resizes the canvas but keeps ratio the same
        renderer.view.style.width = finalWidth + "px";
        renderer.view.style.height = finalHeight + "px";
        //this part adjusts the ratio:
        renderer.resize(finalWidth,finalHeight);
      }

      resize()

      $(window).on('resize', () => {
        resize()
      })



      function animate() {
        requestAnimationFrame(animate);

        displacementSprite.x = count*1600;
        displacementSprite.y = count*-1600;

        count += 0.0006;

        renderer.render(stage)
      }

      animate()


      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // CREATING THE FILTER ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙

      // const fragSrc = `
      //   precision mediump float;
      //   varying vec2 vTextureCoord;
      //   uniform sampler2D uSampler;
      //   uniform float u_time;
      //
      //   void main() {
      //     vec2 position = vTextureCoord;
      //     float frequency = 80.0;
      //     float amplitude = 0.0005;
      //     float amplitudeY = 0.0007;
      //     float speed = 0.03;
      //     float distortion=sin(position.y * frequency + u_time * speed) * amplitude;
      //     float distortion2=sin(position.y * frequency + u_time * speed) * amplitudeY;
      //     vec4 color = texture2D(uSampler, vec2(position.x + distortion, position.y + distortion2));
      //     gl_FragColor=color;
      //   }
      // `
      //   .split('\n')
      //   .reduce((c, a) => `${c + a.trim()}\n`)
      //
      //
      // const createFilter = () => {
      //   const uniforms = { u_time: { type: 'f', value: 0 } }
      //   waveFilter = new PIXI.Filter(null, fragSrc, uniforms)
      //   waveFilter.apply = function(filterManager, input, output) {
      //     // this.uniforms.dimensions[0] = input.sourceFrame.width
      //     // this.uniforms.u_time = 0 //[1] = input.sourceFrame.height
      //     filterManager.applyFilter(this, input, output)
      //   }
      //   return waveFilter
      // }
      // console.log(createFilter);
      //
      // const wobbleFilter = createFilter()
      // bgPic.filters = [wobbleFilter]
      //
      // ticker.autoStart = true
      //
      // ticker.add(delta => {
      //   if (waveFilter) {
      //     bgPic.filters[0].uniforms.u_time += delta * 0.5
      //   }
      //   renderer.render(stage)
      // })

      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // END OF SHADER ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙
      // ⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙⊙

    }


  }
}
</script>

<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  Styles ███████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->
<!--  ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ -->

<style lang="scss">

@import "src/styles/variables.scss";


#background {
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

.background-fallback {
  position: absolute;
  height: 100%;
  width: 100%;
  /* position: fixed; */
  background-image: url("/src/assets/marble_bg_tiny.jpg");
  background-position: center;
  background-size: cover;
  display: none;
  @media screen and (max-width: $tabletLandscape) {
    display: block;
  }
}
#background-canvas {
  position: absolute;
  height: 100%;
  width: 100%;

  @media screen and (max-width: $tabletLandscape) {
    display: none;
  }
  // background-color: red;
}


</style>



// WEBPACK FOOTER //
// src/components/Background.vue