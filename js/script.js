const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('display_none') == true){
        menu.classList.remove('display_none');
    } else{
        menu.classList.add('display_none')
    }
})