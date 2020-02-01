var slideIndexProjects = 0;
showSlidesProjects();

function showSlidesProjects() {
  var i;
  var slides = document.getElementsByClassName("slider-show-bag");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexProjects++;
  if (slideIndexProjects > slides.length) {slideIndexProjects = 1}
  slides[slideIndexProjects-1].style.display = "block";
  setTimeout(showSlidesProjects, 3000); // Change image every 2 seconds
}
