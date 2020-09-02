export default function initTab() {

    const imgAnimals = document.querySelectorAll('[data-content="imgList"] li')
    const descriptAnimals = document.querySelectorAll('[data-content="descript"] section')

    if (imgAnimals.length && descriptAnimals.length) {

        
        descriptAnimals[0].classList.add(`activeAnimals`, descriptAnimals[0].dataset.anima)

        function addActiveAnimals(index) {

            const data = descriptAnimals[index].dataset.anima

            descriptAnimals.forEach((item) => {

                item.classList.remove(`activeAnimals`,item.dataset.anima)
            })

            descriptAnimals[index].classList.add(`activeAnimals`,data)

        }

        imgAnimals.forEach((item, index) => {

            item.addEventListener('click', () => {
                addActiveAnimals(index)
            })

        })
    }
}


