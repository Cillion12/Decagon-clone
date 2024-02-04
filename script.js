// const howitworksbox = Array.from(document.querySelectorAll('.howitworksbox'));
// Defining the the boxes
const howitworksbox1 = document.querySelector('.howitworksbox1');

const howitworksbox2 = document.querySelector('.howitworksbox2');

const howitworksbox3 = document.querySelector('.howitworksbox3')

const howitworksbox4 = document.querySelector('.howitworksbox4');

const insidetextbox1 = document.querySelector('.insidetextbox1');

const insidetextbox2 = document.querySelector('.insidetextbox2');

const insidetextbox3 = document.querySelector('.insidetextbox3');

const insidetextbox4 = document.querySelector('.insidetextbox4');

const videotestimonialwrapper1 = document.querySelector('.videotestimonialwrapper1');

const videotestimonialwrapper2 = document.querySelector('.videotestimonialwrapper2');

const videoCont1 = document.querySelector('.videoCont1');

const videoCont2 = document.querySelector('.videoCont2');

const green = document.querySelector('.green');

const white = document.querySelector('.white');

// console.log(howitworksbox);

white.addEventListener('click', function(){
    videoCont1.style.display = 'none';
    videoCont2.style.display = 'block'
    white.style.backgroundColor = 'rgb(29, 191, 104)';
    green.style.backgroundColor = 'white'
    white.style.color = 'white'
    green.style.color = 'black'
})

green.addEventListener('click', function(){
    videoCont1.style.display = 'block';
    videoCont2.style.display = 'none'
    white.style.backgroundColor = 'white';
    green.style.backgroundColor = 'rgb(29, 191, 104)'
    white.style.color = 'black'
    green.style.color = 'white'
})

howitworksbox1.addEventListener('click', function(){
    insidetextbox1.style.display = 'flex'
    howitworksbox1.style.padding = '3px 0px'
    howitworksbox1.style.borderBottom = '2px solid rgb(21, 172, 21)';
    howitworksbox2.style.borderBottom = 'none'
    howitworksbox3.style.borderBottom = 'none'
    howitworksbox4.style.borderBottom = 'none'
    insidetextbox2.style.display = 'none';
    insidetextbox3.style.display = 'none'
    insidetextbox4.style.display = 'none'
})

howitworksbox2.addEventListener('click', function(){  
    howitworksbox1.style.borderBottom = 'none'
    howitworksbox2.style.borderBottom = '2px solid rgb(21, 172, 21)'
    howitworksbox3.style.borderBottom = 'none'
    howitworksbox4.style.borderBottom = 'none'
    insidetextbox1.style.display = 'none'
    insidetextbox2.style.display = 'flex';
    insidetextbox3.style.display = 'none'
    insidetextbox4.style.display = 'none'
})

howitworksbox3.addEventListener('click', function(){
    howitworksbox1.style.borderBottom = 'none'
    howitworksbox2.style.borderBottom = 'none'
    howitworksbox3.style.borderBottom = '2px solid rgb(21, 172, 21)'
    howitworksbox4.style.borderBottom = 'none'
    insidetextbox1.style.display = 'none'
    insidetextbox2.style.display = 'none';
    insidetextbox3.style.display = 'flex'
    insidetextbox4.style.display = 'none'
})

howitworksbox4.addEventListener('click', function(){
    howitworksbox1.style.borderBottom = 'none'
    howitworksbox2.style.borderBottom = 'none'
    howitworksbox3.style.borderBottom = 'none'
    howitworksbox4.style.borderBottom = '2px solid rgb(21, 172, 21)'
    insidetextbox1.style.display = 'none'
    insidetextbox2.style.display = 'none';
    insidetextbox3.style.display = 'none'
    insidetextbox4.style.display = 'flex'
})

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

// Defining the right and left arrow images
// const img1 = document.querySelector('.img1');
// const img2 = document.querySelector('.img2');
// const img3 = document.querySelector('.img3');
// const img4 = document.querySelector('.img4');
// const img5 = document.querySelector('.img5');
// const img6 = document.querySelector('.img6');
// const img7 = document.querySelector('.img7');
// const img8 = document.querySelector('.img8');
// const img9 = document.querySelector('.img9');
// const img10 = document.querySelector('.img10');
// const img11 = document.querySelector('.img11');
// const img12 = document.querySelector('.img12');
// const img13 = document.querySelector('.img13');
// const img14 = document.querySelector('.img14');
// const img15 = document.querySelector('.img15');
// const img16 = document.querySelector('.img16');
// const img17 = document.querySelector('.img17');
// const img18 = document.querySelector('.img18');
// const img19 = document.querySelector('.img19');
// const img20 = document.querySelector('.img20');
// const img21 = document.querySelector('.img21');
// const img22 = document.querySelector('.img22');
// const img23 = document.querySelector('.img23');
// const img24 = document.querySelector('.img24');
// const img25 = document.querySelector('.img25');
// const img26 = document.querySelector('.img26');
// const img27 = document.querySelector('.img27');
// const img28 = document.querySelector('.img28');
// const img29 = document.querySelector('.img29');
// const img30 = document.querySelector('.img30');
// const img31 = document.querySelector('.img31');
// const img32 = document.querySelector('.img32');
// const img33 = document.querySelector('.img33');
// const img34 = document.querySelector('.img34');
// const img35 = document.querySelector('.img35');
// const img36 = document.querySelector('.img36');
// const img37 = document.querySelector('.img37');
// const img38 = document.querySelector('.img38');
// const accordionContent1 = document.querySelector('.accordion-content1')

// img1.addEventListener('click', function(){
//     img2.style.display = 'block'
//     img1.style.display = 'none'
//     // accordionContent.style.display = 'block'
// })
// img2.addEventListener('click', function(){
//     img1.style.display = 'block'
//     img2.style.display = 'none'
//     // accordionContent.style.display = 'none'
// })
const accordionContent = document.querySelector('.accordion-content');
const accordionContent2 = document.querySelector('.accordion-content2');
// const accordionContent1 = document.querySelector('.accordion-content1')

// // img3.addEventListener('click', function(){
// //     img4.style.display = 'block'
// //     img3.style.display = 'none'
//     // accordionContent.style.display = 'block'
//     // accordionContent2.style.display = 'block'
// })
// img4.addEventListener('click', function(){
//     img3.style.display = 'block'
//     img4.style.display = 'none'
//     // accordionContent.style.display = 'none'
//     // accordionContent2.style.display = 'none'
//     // accordionContent.style.display = 'none'
// })
// img5.addEventListener('click', function(){
//     img6.style.display = 'block'
//     img5.style.display = 'none'
//     // accordionContent.style.display = 'block'
//     // accordionContent2.style.display = 'block'
// })
// img6.addEventListener('click', function(){
//     img5.style.display = 'block'
//     img6.style.display = 'none'
//     // accordionContent.style.display = 'none'
//     // accordionContent2.style.display = 'none'
//     // accordionContent.style.display = 'none'
// })
// const accordionContent = document.querySelector('.accordion-content');
// const accordion1 = document.querySelector('.accordion1');
// const accordion2 = document.querySelector('.accordion2');
// const accordion3 = document.querySelector('.accordion3');
// const accordion4 = document.querySelector('.accordion4');
// const accordion5 = document.querySelector('.accordion5');
// const accordion6 = document.querySelector('.accordion6');
// const accordion7 = document.querySelector('.accordion7');
// const accordion8 = document.querySelector('.accordion8');
// const accordion9 = document.querySelector('.accordion9');
// const accordion10 = document.querySelector('.accordion10');
// const accordion11 = document.querySelector('.accordion11');
// const accordion12 = document.querySelector('.accordion12');
// const accordion13 = document.querySelector('.accordion14');
// const accordion15 = document.querySelector('.accordion15');
// const accordion16 = document.querySelector('.accordion16');
// const accordion17 = document.querySelector('.accordion17');
// const accordion18 = document.querySelector('.accordion18');
// const accordion19 = document.querySelector('.accordion19');
// accordion1.addEventListener('click', function(){
//     img1.style.display = 'none'
//     img2.style.display = 'block'
// })