

let btnMenu = document.getElementById('abrirmobile')
let menu = document.getElementById('mobile')
let overl = document.getElementById('mobileoverl')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrirmenu')

})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrirmenu')

})

overl.addEventListener('click',()=>{
    menu.classList.remove('abrirmenu')

})