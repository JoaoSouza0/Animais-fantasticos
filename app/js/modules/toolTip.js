export default function initToolTip() {


    const map = document.querySelector('[data-mapa]')

    map.addEventListener('mouseover', handleMap)


    function handleMap(e) {
        const toolTipBox = criarToolTip()
        toolTipBox.style.top = (e.pageY + 20) + 'px'
        toolTipBox.style.left = (e.pageX + 20) + 'px'
        onMouseMove.element = toolTipBox
        removeToolTip.element = toolTipBox

        this.addEventListener('mouseleave', removeToolTip)
        this.addEventListener('mousemove', onMouseMove)
    }

    const onMouseMove = {

        handleEvent(e) {
            this.element.style.top = (e.pageY + 20) + 'px'
            this.element.style.left = (e.pageX + 20) + 'px'
        }

    }

    const removeToolTip = {

        handleEvent() {
            this.element.remove()
            map.removeEventListener('mouseleave', removeToolTip)
            map.removeEventListener('mousemove', onMouseMove)
        }

    }


    function criarToolTip(event) {
        const toolTip = document.createElement('div')
        const msg = map.getAttribute('title')
        toolTip.innerText = msg
        toolTip.classList.add('tooltip')
        document.body.appendChild(toolTip)

        return toolTip
    }
}
