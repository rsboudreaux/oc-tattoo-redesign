<template lang="html">
  <div class="case-study__maje">
    <div class="case-study__photo-background-container">
			<div class="case-study__photo-background"></div>
			<img class="case-study__photo" src="/assets/imgs/case-study/maje/woman.png"
			srcset="/assets/imgs/case-study/maje/woman@2x.png 2x"
			alt="" ref="woman">
		</div>

    <div class="case-study__row case-study__section">
      <div class="case-study__title">My work at maje</div>
      <div class="case-study__text-content">
        During 1 year I worked as a freelance developer with Kaam&Roffler agency for Maje France. Before the season to come, I had a meeting at the Paris Maje headquarter with the digital creative team. They presented the design of the pages and we discussed the interactions that we had in mind. You can see some of them below.
      </div>
    </div>

    <case-study-video class="case-study__row case-study__video-row">
      <source src="/assets/videos/case-study/maje/maje1.mp4" type="video/mp4">
    </case-study-video>

    <case-study-video class="case-study__row case-study__video-row">
      <source src="/assets/videos/case-study/maje/maje2.mp4" type="video/mp4">
    </case-study-video>

    <case-study-video class="case-study__row case-study__video-row">
      <source src="/assets/videos/case-study/maje/maje3.mp4" type="video/mp4">
    </case-study-video>

    <case-study-video class="case-study__row case-study__video-row">
      <source src="/assets/videos/case-study/maje/maje4.mp4" type="video/mp4">
    </case-study-video>

  </div>
</template>

<script>
import CaseStudyVideo from "./CaseStudyVideo.vue";

export default {
  mounted() {
    let parallaxElements = [
      {
        el: this.$refs.woman,
        ratio: 0.07
      }
    ];
    this.$parent.smoothScroll.setParallaxElements(parallaxElements);
  },

  components: {
    CaseStudyVideo
  }
};
</script>

<style lang="scss">
.case-study__maje {
  font-size: 30px;

  .case-study__photo-background {
    background-color: #313596;
  }

  .case-study__photo {
    margin-top: 100px;
  }

  .case-study__section {
    margin-top: 10em;
    margin-bottom: 6em;
  }
}
</style>



// WEBPACK FOOTER //
// Maje.vue?7d187a6a