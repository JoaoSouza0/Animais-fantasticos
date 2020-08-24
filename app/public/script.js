const imgAnimals = document.querySelectorAll('.js-animals-imgList li')
const descriptAnimals = document.querySelectorAll('.js-animals-descript section')

function addActiveAnimals(index){

    descriptAnimals.forEach((item)=>{

        item.classList.remove('activeAnimals')

    })

    descriptAnimals[index].classList.add('activeAnimals')
    console.log(descriptAnimals[index])
}

imgAnimals.forEach((item, index)=>{

    item.addEventListener('click', ()=>{
            addActiveAnimals(index)
    })

})