const assets = require('./assets.json')

let LoaderMixin = {
    methods: {

        findAssets(size, caseStudyName) {
            let assetsToLoad = []
            assetsToLoad = assetsToLoad.concat(assets['default'][size])

            if (this.$route.name === 'case-study') {
                let caseStudyName = this.$route.params.id
                if (assets['case-study'][caseStudyName] !== undefined) {
                    let assetsPath = assets['case-study'][caseStudyName]
                    assetsToLoad = assetsToLoad.concat(assetsPath[size])
                }
            } else if (caseStudyName !== undefined && assets['case-study'][caseStudyName] !== undefined) {
                let assetsPath = assets['case-study'][caseStudyName]
                assetsToLoad = assetsToLoad.concat(assetsPath[size])
            }

            return assetsToLoad
        }

    }
}

export default LoaderMixin



// WEBPACK FOOTER //
// ./src/shared-components/Loader/LoaderMixin.js