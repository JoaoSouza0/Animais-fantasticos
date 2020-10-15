export default function activeToolTip() {
    const map = document.querySelectorAll('[data-tooltip]')

    map.forEach((item) => {

        item.addEventListener('mouseover', onMouseover)
    })

    function onMouseover() {
        const toolTip = createToolTip(this)

        onMouseLeave.toolTip = toolTip
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)

        onMouseMove.toolTip = toolTip
        this.addEventListener('mousemove', onMouseMove)

    }

    const onMouseLeave = {

        handleEvent() {
            this.toolTip.remove()
            this.toolTip.removeEventListener('mouseleave', onMouseLeave)
        }
    }

    const onMouseMove = {

        handleEvent(e) {
            this.toolTip.style.top = e.pageY + 15 + 'px'
            this.toolTip.style.left = e.pageX + 15 + 'px'
        }
    }


    function createToolTip(element) {

        const toolTipBox = document.createElement('div')

        toolTipBox.classList.add('tooltip')
        toolTipBox.innerText = element.getAttribute('title')

        document.body.appendChild(toolTipBox)

        return toolTipBox
    }
}

