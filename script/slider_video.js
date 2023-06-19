// let offset = 0 //смещение от левого края
// const sliderLine = document.querySelector('.slider-line')


// document.querySelector('.next').addEventListener('click', function () {
//   offset = offset + 1306
//   if(offset > 3359){
//     offset = 0
//   }
//   sliderLine.style.left = -offset + 'px'
// })
// document.querySelector('.prev').addEventListener('click', function () {
//   offset = offset - 1306
//   if(offset < 0){
//     offset = 2590
//   }
//   sliderLine.style.left = -offset + 'px'
// })
let shadow = document.getElementById('shad');

shadow.addEventListener('click',  () => {
  shadow.classList.add('active1');
});

document.getElementById('slideDiv').onclick = function() {
  document.getElementById('shad').classList.add('active1');
}
document.getElementById('slideDiv1').onclick = function() {
  document.getElementById('shad1').classList.add('active1');
}
document.getElementById('slideDiv2').onclick = function() {
  document.getElementById('shad2').classList.add('active1');
}
document.getElementById('slideDiv3').onclick = function() {
  document.getElementById('shad3').classList.add('active1');
}

// const slider = document.querySelector('.slider')
// const slideDiv = document.querySelectorAll('#slideDiv')
// console.log(slideDiv.length);
// const sliderLine = document.querySelector('.slider-line')

// const sliderPrev = document.querySelector('#sliderPrev')
// const sliderNext = document.querySelector('#sliderNext')

// let sliderCount = 0
// let sliderWidth = slider.offsetWidth

// sliderNext.addEventListener('click', nextSlide)
// function nextSlide() {
//   sliderCount++
//   console.log(sliderCount);
//   if (sliderCount +1 >=slideDiv.length) {
//     sliderCount = 0

//   }
//   rollSliderNext()
// }

// sliderPrev.addEventListener('click', prevSlide)
// function prevSlide() {
//   sliderCount--
//   console.log(sliderCount);
//   if (sliderCount < 0) {
//     sliderCount = slideDiv.length -2
//   }
//   rollSliderPrev()
// }

// function rollSliderPrev() {
//   sliderLine.style.transform = `translateX(${-sliderCount/2 * sliderWidth -50}px)`
// }
// function rollSliderNext() {
//   sliderLine.style.transform = `translateX(${-sliderCount/2 * sliderWidth -50}px)`
// }