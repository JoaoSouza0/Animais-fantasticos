export default function initShowSection() {

    const allSection = document.querySelectorAll('[data-anima="scroll"]')

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