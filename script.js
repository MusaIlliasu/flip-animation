const sliderContainer = document.querySelector(".slider_container");
const upButton = document.querySelector(".up_button");
const downButton = document.querySelector(".down_button");
const leftSlider = document.querySelector(".left_slider");
const rightSlider = document.querySelector(".right_slider");
const sliderLength = document.querySelectorAll(".right_slider div").length;

leftSlider.style.top = `${-(sliderLength - 1) * 100}vh`;

let currentSliderIndex = 0;

const changeSlider = (direction) => {
    if(direction === "up"){
        currentSliderIndex += 1;
        if(currentSliderIndex > sliderLength - 1){
            currentSliderIndex = 0;
        }
    }
    if(direction === "down"){
        currentSliderIndex -= 1;
        if(currentSliderIndex < 0){
            currentSliderIndex = sliderLength - 1;
        }
    }

    rightSlider.style.transform = `translateY(-${(currentSliderIndex) * 100}%)`;
    leftSlider.style.transform = `translateY(${(currentSliderIndex) * 100}%)`;
}

upButton.addEventListener("click", () => changeSlider("up"));
downButton.addEventListener("click", () => changeSlider("down"));