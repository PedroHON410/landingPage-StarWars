let menuIcon = document.querySelector('#hero__icon-menu')
let closeIcon = document.querySelector('#box__icon-close')
let menuBox = document.querySelector('.hero__box')
menuIcon.addEventListener('click',()=>{
    menuBox.classList.toggle('active')
})

closeIcon.addEventListener('click',()=>{
    console.log('outro clic');
})