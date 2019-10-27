class SplitText {

    constructor(elementToSplit, options) {

        this.elementToSplit = elementToSplit
        this.textToSplit = this.elementToSplit.textContent

        this.classToGive = options.classToGive

        this.splittedText = ''

        this.splitText(options.whatToSplit)

    }

    splitText(whatToSplit) {
        if (whatToSplit === "lines") {
            this.splitLine()
        } else {
            this.splitLetter()
        }
        this.elementToSplit.innerHTML = this.splittedText
    }

    splitLine() {
        let lines = this.textToSplit.split('<br>')
        this.splitElements(lines)
    }

    splitElements(elementsToSplit) {
        for (var i = 0; i < elementsToSplit.length; i++) {
            this.splittedText +=
                "<span class='" + this.classToGive + "'>" + elementsToSplit[i] + "</span>"
        }
        return this.splittedText
    }

    splitLetter() {
        this.splitElements(this.textToSplit)
    }

}

export default SplitText



// WEBPACK FOOTER //
// ./src/commons/script/SplitText.js