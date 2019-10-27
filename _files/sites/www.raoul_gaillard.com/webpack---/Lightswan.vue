<template lang="html">
	<div class="case-study__lightswan">
		<div class="case-study__photo-background-container">
			<div class="case-study__photo-background">
				<img class="case-study__photo" ref="paraPhoto" src="/assets/imgs/case-study/lightswan/card.png"
				srcset="/assets/imgs/case-study/lightswan/card@2x.png 2x"
				alt="">
			</div>
		</div>

		<div class="case-study__typography case-study__row">
			<div class="case-study__title">Typography</div>
			<div class="case-study__typography-block">
				<div class="case-study__mini-title">
					Europa - titling
				</div>
				<img class="case-study__typo-img" src="/assets/imgs/case-study/lightswan/typo1.svg" alt="">
			</div>
			<div class="case-study__typography-block">
				<div class="case-study__mini-title">
					Baskerville - text
				</div>
				<img class="case-study__typo-img" src="/assets/imgs/case-study/lightswan/typo2.svg" alt="">
			</div>
		</div>

		<div class="case-study__colors case-study__row">
			<div class="case-study__title">Colors</div>
			<div class="case-study__color-blocks">
				<div class="case-study__color-block" v-for="color in colors">
					<div class="case-study__color" :style="'background-color: '+color.hex "></div>
					<div class="case-study__mini-title">{{color.hex}}</div>
				</div>
			</div>
		</div>

		<div class="case-study__home">

			<div class="case-study__line case-study__row">

				<div class="case-study__half-block">
					<div class="case-study__title">Home</div>
					<div class="case-study__text-content">
						We chose to put Jesse Owens on the homepage of Lightswan. It was an important cultural reference for François Pumir and Florian Pittion-Rossillon. It’s also a strong symbol which corresponds to the image they want to give to their company. Forerunner, powerful and limitless.
					</div>
				</div>

				<div class="case-study__half-block">
					<div class="case-study__mobile-screen">
						<div class="case-study__screen-circle">
							<img src="/assets/imgs/case-study/lightswan/home-mobile.png"
							srcset="/assets/imgs/case-study/lightswan/home-mobile@2x.png 2x"
							alt="" ref="iphone1" class="case-study__mobile-screen__img">
						</div>
					</div>
				</div>

			</div>

			<div class="case-study__full-screenshot">
				<img class="case-study__full-screenshot__bg"
					src="/assets/imgs/case-study/lightswan/screen-bg.svg"
					alt="" ref="bg1">
				<img class="case-study__full-screenshot__img case-study__row case-study__img "
					src="/assets/imgs/case-study/lightswan/home-desktop.jpg"
					srcset="/assets/imgs/case-study/lightswan/home-desktop@2x.jpg 2x"
					alt="">
			</div>

			<div class="case-study__row">
					<img class="case-study__perspective-mockup"
					src="/assets/imgs/case-study/lightswan/perspective-mockup.png"
					srcset="/assets/imgs/case-study/lightswan/perspective-mockup@2x.png 2x"
					alt="">
			</div>

			<div class="case-study__line case-study__row case-study__article-mobile">

				<div class="case-study__half-block">
					<div class="case-study__title">Article</div>
					<div class="case-study__text-content">
						It was very important to have a blog on the website to share the vision of the company. It's content is the heart of Lightswan's communication strategy. This is why there are many custom blog functionalities like a custom player, A slideshow, different styling for pictures and custom blocks for quotes.
					</div>
				</div>

				<div class="case-study__half-block">
					<div class="case-study__mobile-screen">
						<div class="case-study__screen-circle">
							<img src="/assets/imgs/case-study/lightswan/article-mobile.png"
							srcset="/assets/imgs/case-study/lightswan/article-mobile@2x.png 2x"
							alt="" ref="iphone2">
						</div>
					</div>
				</div>

			</div>

			<div class="case-study__full-screenshot">
				<img class="case-study__full-screenshot__bg"
					src="/assets/imgs/case-study/lightswan/screen-bg.svg"
					alt="" ref="bg2">
				<img class="case-study__full-screenshot__img case-study__row case-study__img "
					src="/assets/imgs/case-study/lightswan/article-desktop.jpg"
					srcset="/assets/imgs/case-study/lightswan/article-desktop@2x.jpg 2x"
					alt="">
			</div>

			</div>
		</div>

	</div>
</template>

<script>
export default {

	data(){
		return {
			colors: [
				{hex: '#F7F3EA'},
				{hex: '#2A3142'},
				{hex: '#82CAC4'},
				{hex: '#EE8A73'}
			]
		}
	},

	mounted(){
		let parallaxElements = [
			{
				el: this.$refs.paraPhoto,
				ratio: .06
			},
			{
				el:this.$refs.iphone1,
				ratio: .07
			},
			{
				el:this.$refs.iphone2,
				ratio: .07
			},
			{
				el:this.$refs.bg1,
				ratio: -.1
			},
			{
				el:this.$refs.bg2,
				ratio: -.1
			}
		]
		this.$parent.smoothScroll.setParallaxElements(parallaxElements)
	},

}
</script>

<style lang="scss">

	.case-study__lightswan {

		.case-study__photo-background {
			background-color: #F7F3EA;
		}

		.case-study__photo {
			margin-top: 100px;
		}

		.case-study__color-block {

			.case-study__mini-title {
				opacity: 1;
				text-align: center;
				margin-top: .5em;
			}

		}

		.case-study__full-screenshot__bg {
			background-color: #F7F3EA;
			min-height: 2500px;
			max-height: 2500px;
		}

		.case-study__screen-circle {
			background-color: #F7F3EA;
		}

		.case-study__mobile-screen__img {
			margin-top: 100px;
		}

		.case-study__home {
			font-size: 30px;
			width: 100%;
			margin-top: 10em;
		}

		.case-study__perspective-mockup {
			display: block;
			margin-top: 10em;
		}

		.case-study__article-mobile {
			margin-top: 10em;
		}

	}

</style>



// WEBPACK FOOTER //
// Lightswan.vue?0a5ce66b