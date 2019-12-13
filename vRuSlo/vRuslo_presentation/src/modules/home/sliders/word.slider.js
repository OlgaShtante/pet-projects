import { Slider } from './slider.js';

export class WordSlider extends Slider {
  init() {
    const htmlElements = {
      sliderArea: document.getElementById('carousel-area-bottom'),
      leftArrow: document.getElementById('arrow-left-bottom'),
      rightArrow: document.getElementById('arrow-right-bottom'),
      slides: document.getElementsByClassName('wordSlides')
    };

    super.init(htmlElements);
  }
}
