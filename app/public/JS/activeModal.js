export default function initModal() {
    const openLinkModal = document.querySelector('[data-menu="suave"] [data-modal="login"]')
    const modal = document.querySelector('[data-modal="container"]')
    const closeLinkModal = document.querySelector('[data-modal="container"] .close')

    if (openLinkModal && modal && closeLinkModal) {

        function putActive(e) {

            e.preventDefault()
            modal.classList.toggle('active-modal')
        }

        function clickOutside(e) {
            if (e.target === this) {
                putActive(e)
            }

        }
        openLinkModal.addEventListener('click', putActive)
        closeLinkModal.addEventListener('click', putActive)
        modal.addEventListener('click', clickOutside)

    }
}



