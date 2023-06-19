let start = parseInt(localStorage.getItem("SLIDE_ID") || 0) * 3050
console.log(start);
const slider = document.querySelector('.container_img')
slider.style.left = -start + 'px'

document.querySelector('.slider_next').addEventListener('click', () => {
    start = start + 3050;
    if (start > 6200) {
        start = 0
    }
    slider.style.left = -start + 'px'
})

document.querySelector('.slider_back').addEventListener('click', () => {
    start = start - 3050;
    if (start < 0) {
        start = 0
    }
    slider.style.left = -start + 'px'
})




function openImg (elem) {
    elem.style.display = (elem.style.display == 'none') ? 'block' : 'none';
}

