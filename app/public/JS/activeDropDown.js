export default function initDropDown() {

    const dropDown = document.querySelectorAll('[data-dropdown]')

    dropDown.forEach((item) => {

        const events = ['click', 'touchstart']

        events.forEach((eventInside) => {

            item.addEventListener(eventInside, handleEvent)

        })
    })

    function handleEvent(e) {
        e.preventDefault()
        e.currentTarget.classList.toggle('active')
        clickOutSide()
        
    }


    function clickOutSide() {

        const events = ['click']
        const html = document.querySelector('html')
        handleEventOutSide.element = html

        events.forEach((eventInside) => {

            html.addEventListener(eventInside, handleEventOutSide)
        })

    }


    const handleEventOutSide = {
        element,

        handleEvent() {
            dropDown.forEach((item) => {
                item.classList.remove('active')
            })

            element.removeEventListener()

        }
    }


}