const imgSlide = document.querySelector('.carousel-slide');
const img = document.querySelectorAll('.carousel-slide img');

const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let counter = 1;
const size = img[0].clientWidth;

imgSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

btnNext.addEventListener('click', ()=>{
    if (counter >= img.length - 1) return;
    imgSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    imgSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    btnNext.innerText = `${counter}: Next`;
    btnPrev.innerText = `${counter}: Prev`;
});

btnPrev.addEventListener('click', ()=>{
    if (counter <=0) return;
    imgSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    imgSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    btnNext.innerText = `${counter}: Next`;
    btnPrev.innerText = `${counter}: Prev`;
   
});

imgSlide.addEventListener('transitionend', () => {
    if (img[counter].id === 'lastCLone') {
        imgSlide.style.transition = "none";
        counter = img.length - 2;
        imgSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (img[counter].id === 'firstClone') {
        imgSlide.style.transition = "none";
        counter = img.length - counter;
        imgSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
