<template>

  <div class="bullet">

    <div class="bullet-outer bigItUp" @click="getBulletNumber">
      <div class="bullet-line">
      </div>
      <div class="bullet-name">
        {{bullet.featureName}}
      </div>
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

    getBulletNumber: function () {
      // let featureScrollTop = $(this.$el).offset().top

      this.$emit('getBulletNumber', {
        bulletNumber:this.bullet.id
      } )

      // console.log(this.bullet.id);
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

.bullet {
  position: relative;
  margin-right: 5px;
  width: 40px;
  height: 16px;
  transition: all 0.5s;
  // cursor: pointer;

  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    display: inline-block;
    margin-right: 5px;
    width: 15px;
    height: 30px;
  }
  @media screen and (max-width: $phone) {
    display: inline-block;
    margin-right: 5px;
    width: 15px;
    height: 30px;
  }
}
.bullet:hover .bullet-line  {

  @media screen and (min-width: $abovePhone) {
    width: 40px;
    opacity: 1;
  }
  @media screen and (min-width: $abovePhone) and (max-width: $tabletPortait) and (orientation:landscape) {
    width: 2px;
    opacity: 1;
  }
}

.bullet:hover .bullet-name  {
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    opacity: 1;
    left: 50px;
  }
  @media screen and (min-width: $abovePhone) {
    opacity: 1;
    left: 50px;
  }
}

.bullet-outer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.bullet-line  {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  width: 10px;
  height: 2px;
  opacity: 0.2;
  transition: all 0.5s;
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.75);

  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    transform: none;
    width: 2px;
    height: 10px;
  }
  @media screen and (max-width: $phone) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    transform: none;
    width: 2px;
    height: 10px;
  }
}

.bullet-name {
  position: absolute;
  line-height: 16px;
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  font-size: 20px;
  opacity:0;
  transition: all 0.4s;

  @media screen and (max-width: $tabletLandscape) {
    display: none;
  }
  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    display: none;
  }
  @media screen and (max-width: $phone) {
    display: none;
  }
}


.active .bullet-line  {
  opacity: 1;
  width: 40px;

  @media screen and (max-width: $tabletPortait) and (min-aspect-ratio: 8/5)  {
    opacity: 1;
    width: 2px;
    height: 30px;
  }
  @media screen and (max-width: $phone) {
    opacity: 1;
    width: 2px;
    height: 30px;
  }
}


</style>



// WEBPACK FOOTER //
// src/components/Bullet.vue