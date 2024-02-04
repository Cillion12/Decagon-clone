const readmoreBtn = document.querySelector('.readmoreBtn');
const readmore = document.querySelector('.readmore');
const readlessBtn = document.querySelector('.readlessBtn');
const readmoreBtn1 = document.querySelector('.readmoreBtn1');
const readmore1 = document.querySelector('.readmore1');
const readlessBtn1 = document.querySelector('.readlessBtn1');
readmoreBtn.addEventListener('click', function(){
    readmore.style.display = 'block'
    readmoreBtn.style.display = 'none'
    readlessBtn.style.display = 'block'
})
readmoreBtn1.addEventListener('click', function(){
    readmore1.style.display = 'block'
    readmoreBtn1.style.display = 'none'
    readlessBtn1.style.display = 'block'
})
// Read less button
readlessBtn.addEventListener('click', function(){
    readmore.style.display = 'none'
    readlessBtn.style.display = 'none'
    readmoreBtn.style.display = 'block'
});

readlessBtn1.addEventListener('click', function(){
    readmore1.style.display = 'none'
    readlessBtn1.style.display = 'none'
    readmoreBtn1.style.display = 'block'
});