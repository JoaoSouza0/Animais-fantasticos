function initTab() {

    const imgAnimals = document.querySelectorAll('.js-animals-imgList li')
    const descriptAnimals = document.querySelectorAll('.js-animals-descript section')

    if (imgAnimals.length && descriptAnimals.length) {
        descriptAnimals[0].classList.add('activeAnimals')

        function addActiveAnimals(index) {

            descriptAnimals.forEach((item) => {

                item.classList.remove('activeAnimals')

            })

            descriptAnimals[index].classList.add('activeAnimals')
            console.log(descriptAnimals[index])
        }

        imgAnimals.forEach((item, index) => {

            item.addEventListener('click', () => {
                addActiveAnimals(index)
            })

        })
    }
}

initTab()


function initAccordion() {

    const dts = document.querySelectorAll('.js-animals-faq dl dt')
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
initAccordion()


function initScrollSmooth() {


    function scrollToSection(event) {

        event.preventDefault()
        const href = this.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

        /* window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',

        }) */
    }


    const linksInternal = document.querySelectorAll('.js-menu a[href^="#"]')

    linksInternal.forEach((item) => {

        item.addEventListener('click', scrollToSection)

    })

}

initScrollSmooth()

function initShowSection() {

    const allSection = document.querySelectorAll('.js-section')

    if (allSection.length) {
        const windowHalf = window.innerHeight * 0.3


        function showSection() {

            allSection.forEach((item) => {

                const itemTop = item.getBoundingClientRect().top - windowHalf
                const isSectionVisible = itemTop - windowHalf

                if (isSectionVisible < 0) {
                    item.classList.add('activeSection')
                }

            })

        }

        showSection()
        window.addEventListener('scroll', showSection)
    }

}

initShowSection()