
export default function initAnimaScroll() {

    const section = document.querySelectorAll('[data-anime="scroll"]')
    const meiaTela = window.innerHeight * 0.6

    function tAnimaScroll() {
        section.forEach((item) => {

            const sectionTop = item.getBoundingClientRect().top
            const isSectionVisible = (sectionTop - meiaTela) < 0
           
            if (isSectionVisible) {
                item.classList.add('active')
            } else if( item.classList.contains('active')){
                item.classList.remove('active')
            }

        })
    }
    tAnimaScroll()

    window.addEventListener('scroll', tAnimaScroll)
}
