// !!!!!!!!!!!
const images = document.querySelectorAll(".slider img");
for (const [i, image] of Object.entries(images)) {
  image.dataset.id = i
  image.addEventListener("click", () => {
    localStorage.setItem("SLIDE_ID", image.dataset.id)
    window.location.href = "img_slider/img_slider.html"
  })
}