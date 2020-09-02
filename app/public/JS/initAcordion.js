export default function initAccordion() {

    const dts = document.querySelectorAll('[data-accordion="suave"]  dt')
    const activeAccordion = 'activeAccordion'

    if (dts.length) {
        dts[0].classList.add(activeAccordion)
        dts[0].nextElementSibling.classList.add(activeAccordion)

        function accordionList() {

            this.classList.toggle(activeAccordion)
            this.nextElementSibling.classList.toggle(activeAccordion)

        }

        dts.forEach((item) => {
            item.addEventListener('click', accordionList)

        })
    }

}

