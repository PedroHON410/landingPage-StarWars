let menuIcon = document.querySelector('#hero__icon-menu')
let closeIcon = document.querySelector('#box__icon-close')
let menuBox = document.querySelector('.hero__box')




menuIcon.addEventListener('click',()=>{
    menuBox.classList.toggle('active')
})


// boxFilmes.addEventListener('wheel', event =>{
//     if(event.deltaY > 0){
//         event.target.scrollBy(100,0)
//     }else{
//         event.target.scrollBy(0,100)
//     }
// })


