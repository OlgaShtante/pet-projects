export function Slider() {
  this.currentSlide = 1;
}

Slider.prototype.showNextSlide = function() {
  this.currentSlide += 1;
  this.showCurrentSlide();
  this.timerId = setTimeout(this.showNextSlide.bind(this), 3000);
};

Slider.prototype.showCurrentSlide = function() {
  if (this.currentSlide > this.htmlElements.slides.length) {
    this.currentSlide = 1;
  }

  if (this.currentSlide < 1) {
    this.currentSlide = this.htmlElements.slides.length;
  }

  for (let i = 0; i < this.htmlElements.slides.length; i++) {
    this.htmlElements.slides[i].style.display = 'none';
  }

  this.htmlElements.slides[this.currentSlide - 1].style.display = 'block';
};

Slider.prototype.init = function(htmlElements) {
  this.htmlElements = htmlElements;
  this.addEventListeners();
  this.showNextSlide();
  this.showCurrentSlide();
};

Slider.prototype.showArrows = function() {
  clearTimeout(this.timerId);
  this.htmlElements.leftArrow.style.display = 'inline-block';
  this.htmlElements.rightArrow.style.display = 'inline-block';
};

Slider.prototype.hideArrows = function() {
  this.showNextSlide();
  this.htmlElements.leftArrow.style.display = 'none';
  this.htmlElements.rightArrow.style.display = 'none';
};

Slider.prototype.addEventListeners = function() {
  this.htmlElements.sliderArea.addEventListener('mouseover', this.showArrows.bind(this));
  this.htmlElements.sliderArea.addEventListener('mouseleave', this.hideArrows.bind(this));

  this.htmlElements.leftArrow.addEventListener('click', () => {
    this.moveLeft();
  });

  this.htmlElements.rightArrow.addEventListener('click', this.moveRight.bind(this));
};

Slider.prototype.moveRight = function() {
  this.currentSlide += 1;
  this.showCurrentSlide();
};

Slider.prototype.moveLeft = function() {
  this.currentSlide -= 1;
  this.showCurrentSlide();
};
