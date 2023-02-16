let menuIcon = document.querySelector('#hero__icon-menu')
let closeIcon = document.querySelector('#box__icon-close')
let menuBox = document.querySelector('.hero__box')

const filmes = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const backButton = document.querySelector('[data-js="carousel__button--prev"]')

let indexFilmeAtual = 0

window.sr = ScrollReveal({ reset: true })
sr.reveal('.serie__image', {duration: 1200,})

menuIcon.addEventListener('click',()=>{
    menuBox.classList.toggle('active')
})





function classAddRemove(indexFilmeAtual){
    filmes.forEach(filme => {
        filme.classList.remove('carousel__item--visible')
    })

    filmes[indexFilmeAtual].classList.add('carousel__item--visible')
}

nextButton.addEventListener('click', ()=>{
    if(indexFilmeAtual === filmes.length - 1){
        indexFilmeAtual = 0
    }else{
        indexFilmeAtual++
    }
    
   
  classAddRemove(indexFilmeAtual)
})

backButton.addEventListener('click', ()=>{
    if(indexFilmeAtual === 0){
        indexFilmeAtual = filmes.length - 1
    }else{
        indexFilmeAtual--
    }
    
    classAddRemove(indexFilmeAtual)
    // filmes.forEach(filme =>{
    //     filme.classList.remove('carousel__item--visible')
    // })
    
    // filmes[indexFilmeAtual].classList.add('carousel__item--visible')
})

