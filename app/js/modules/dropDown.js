import outSideClick from './Helpers/outSide.js'

export default function dropDownMenu(params) {

    const dropDown = document.querySelector('[data-dropdown]')
    const evets = ['click', 'touchstart']

    evets.forEach(item => {
        dropDown.addEventListener(item, handleDropDown)
    })

    function handleDropDown(event) {

        event.preventDefault()
        dropDown.classList.add('active')

        outSideClick(this, evets, () => {
            dropDown.classList.remove('active')
        })
    }


}
