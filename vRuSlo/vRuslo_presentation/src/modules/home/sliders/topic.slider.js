import { Slider } from './slider.js';

export class TopicSlider extends Slider {
  init() {
    const htmlElements = {
      sliderArea: document.getElementById('carousel-area-top'),
      leftArrow: document.getElementById('arrow-left-top'),
      rightArrow: document.getElementById('arrow-right-top'),
      slides: document.getElementsByClassName('topicSlides')
    };

    super.init(htmlElements);
  }
}
