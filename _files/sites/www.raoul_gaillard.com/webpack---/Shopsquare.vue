<template lang="html">

	<div class="case-study__shopsquare">

		<div class="case-study__photo-background-container">
			<div class="case-study__photo-background"></div>
			<img class="case-study__photo" src="/assets/imgs/case-study/shopsquare/shoes.png"
			srcset="/assets/imgs/case-study/shopsquare/shoes@2x.png 2x"
			alt="" ref="shoes">
		</div>

		<div class="case-study__row case-study__section">
			<div class="case-study__title">My work at Shopsquare</div>
			<div class="case-study__text-content">
				I’ve worked for shopsquare for 6 months as a fullstack developer. Shopsquare was built completely in Laravel, a great PHP framework. This is a good technical choice when you have a classic e-commerce website. Shopsquare has to deal with millions of products that come from multiple data sources and respond in a second. So one of my missions was to combine Laravel to Algolia.
			</div>
		</div>

		<div class="case-study__video-row">
			<case-study-video class="case-study__row">
				<source src="/assets/videos/case-study/shopsquare/desktop-xp.mp4" type="video/mp4">
			</case-study-video>
		</div>

		<div class="case-study__row case-study__section">
			<div class="case-study__title">What I learned</div>
			<div class="case-study__text-content">
				More than technical knowledge, what I learned at Shosquare is how a Startup work. Further than the classical ping-pong-table, I have integrated a great team of motivated people who get up in the morning with one purpose: enhance their product, take decisions and learn from their mistakes.
			</div>
		</div>

		<div class="case-study__row case-study__video-row case-study__video-half-row">
			<case-study-video class="case-study__video-half"><source src="/assets/videos/case-study/shopsquare/mobile-xp.mp4" type="video/mp4"></case-study-video>
			<case-study-video class="case-study__video-half"><source src="/assets/videos/case-study/shopsquare/mobile-search.mp4" type="video/mp4"></case-study-video>
		</div>

	</div>

</template>

<script>

import CaseStudyVideo from './CaseStudyVideo.vue'

export default {

	mounted(){
		let parallaxElements = [
			{
				el: this.$refs.shoes,
				ratio: .06
			}
		]

		this.$parent.smoothScroll.setParallaxElements(parallaxElements)
	},

	components: {
		CaseStudyVideo
	}

}
</script>

<style lang="scss">

.case-study__shopsquare {

	font-size: 30px;

	.case-study__photo-background {
		background-color: #E3F0FF;
	}

	.case-study__photo {
		margin-top: 100px;
	}

}

</style>



// WEBPACK FOOTER //
// Shopsquare.vue?00c6ec5a