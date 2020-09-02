export default function initScrollSmooth() {


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


    const linksInternal = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

    linksInternal.forEach((item) => {

        item.addEventListener('click', scrollToSection)

    })

}