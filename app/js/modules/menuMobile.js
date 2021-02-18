import clickOutSide from './Helpers/outSide.js'

export default function menuMobile() {

    const menu = document.querySelector('[data-menu="list"]')
    const button = document.querySelector('[data-menu="button"]')

    if (button) {
        const events = ['click', 'touchstart']

        events.forEach((item) => {

            button.addEventListener(item, handleEvent)
        })

        function handleEvent() {

            menu.classList.add('active')
            button.classList.add('active')

            clickOutSide(menu, events, () => {

                menu.classList.remove('active')
                button.classList.remove('active')
            })
        }
    }
}

