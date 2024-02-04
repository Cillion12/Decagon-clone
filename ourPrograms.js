const menuicon = document.querySelector('.menuicon');
const slideMenu = document.querySelector('.slideMenu');
const menuicon2 = document.querySelector('.menuicon2');
const menuicon1 = document.querySelector('.menuicon');

// Adding event listener to the first menu icon that initially shows on the screen and giving it a function that when it is clicked, the second menu icon should show. giving the first menu icon a function that when it is clicked, the slide menu should appear

menuicon1.addEventListener('click', function(){
    slideMenu.style.display = 'block'
    menuicon2.style.display = 'block'
    menuicon1.style.display = 'none'
    // slideMenu.style.display = 'none'
})

// Adding event listener to the second menu icon and giving it a function that when it is clicked, the slide menu should dissapear and the first menu icon should show

menuicon2.addEventListener('click', function(){
    slideMenu.style.display = 'none'
    menuicon1.style.display = 'block'
    menuicon2.style.display = 'none'
})
const sidemenuList = document.querySelector('.sidemenuList');
sidemenuList.addEventListener('click', function(){
    slideMenu.style.display = 'none'
})