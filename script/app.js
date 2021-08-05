var toggle = document.querySelector('.toggle');
var topbar = document.querySelector('.topbar');
var navigation = document.querySelector('.navigation');
var main = document.querySelector('.main');

toggle.onclick = function() {
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
$(document).ready(function() {
    var typed = new Typed(".typing", {
        strings: ["React Native", "Three JS"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});


const projectContainer = document.querySelector('.projects-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length
let activeSlideIndex = 0
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
const changeSlide = (direction) => {
    const sliderHeight = projectContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}