const track = document.querySelector('.content')
const left = document.querySelector('.left_arrow');
const right = document.querySelector('.right_arrow');

const slider = document.querySelector('.slider');

var sectionIndex = 0;

left.addEventListener('click', function() {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
});

right.addEventListener('click', function() {
  sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
  slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
});
