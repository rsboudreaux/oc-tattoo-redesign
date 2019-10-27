<template lang="html">
	<video class="case-study__video " loop ref="video">
		<slot></slot>
	</video>
</template>

<script>

import inViewport from 'in-viewport'
import _ from 'lodash'

export default {

	mounted(){
		this.events()
	},

	beforeDestroy(){
		this.unlistenEvents()
	},

	methods: {

		events(){
			window.addEventListener('wheel', this.isVisible)
		},

		unlistenEvents(){
			window.removeEventListener('wheel', this.isVisible)
		},

		isVisible(){

			if ( inViewport(this.$refs.video) ) {
				if (this.$refs.video.paused) {
					this.$refs.video.play()
				}
			}

			else if (!this.$refs.video.paused) {
				this.$refs.video.pause()
			}

		}

	}

}
</script>

<style lang="scss">

.case-study__video {
	width: 100%;
	font-size: 30px;
	display: block;
	position: relative;
	background-color: #03162A;
	z-index: 1;
}

.case-study__video-row {
	width: 100%;
	padding: 5em;
	margin-top: 4em;
	margin-bottom: 5em;
	background-color: #03162a;
	margin-left: 50%;
	transform: translateX(-50%);
}

.case-study__video-half-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.case-study__video-half {
	width: 40%;
}


</style>



// WEBPACK FOOTER //
// CaseStudyVideo.vue?7c50eeeb