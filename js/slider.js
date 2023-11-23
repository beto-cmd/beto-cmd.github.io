const slider = document.querySelector("#slider");
const sliderSections = document.querySelectorAll(".slider__section");
const sliderSectionLast = sliderSections[sliderSections.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    const sliderSectionFirst = document.querySelector(".slider__section");
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function prev() {
    const sliderSections = document.querySelectorAll(".slider__section");
    const sliderSectionLast = sliderSections[sliderSections.length - 1];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "0";
    }, 500);
}


btnRight.addEventListener('click', function () {
    next();
});

btnLeft.addEventListener('click', function () {
    prev();
});

setInterval(function () {
    next();
}, 2500);
