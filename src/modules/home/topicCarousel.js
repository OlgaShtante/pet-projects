function topicCardSlider() {
  let cardSlideIndex = 0;
  let switcher;
  const topCarouselArea = document.getElementById("carousel-area-top");
  const leftTopArrow = document.getElementById("arrow-left-top");
  const rightTopArrow = document.getElementById("arrow-right-top");

  function switchSlidesAutomatically() {
    const cardSlide = document.getElementsByClassName("topicSlides");
    let i;
    for (i = 0; i < cardSlide.length; i++) {
      cardSlide[i].style.display = "none";
    }
    cardSlideIndex++;
    if (cardSlideIndex >= cardSlide.length) {
      cardSlideIndex = 0;
    }
    cardSlide[cardSlideIndex].style.display = "block";
    switcher = setTimeout(switchSlidesAutomatically, 3000);
  }

  switchSlidesAutomatically();

  let slideSwitcherIndex = 1;
  let slideShow;
  showSlideSwitcher(slideSwitcherIndex);

  function switchSlidesByArrows(slideShow) {
    showSlideSwitcher((slideSwitcherIndex += slideShow));
  }

  function showSlideSwitcher(slideShow) {
    let i;
    const slides = document.getElementsByClassName("topicSlides");
    if (slideShow > slides.length) {
      slideSwitcherIndex = 1;
    }
    if (slideShow < 1) {
      slideSwitcherIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideSwitcherIndex - 1].style.display = "block";
  }

  function showArrows() {
    clearTimeout(switcher);
    leftTopArrow.style.display = "inline-block";
    rightTopArrow.style.display = "inline-block";
  }

  function hideArrows() {
    switchSlidesAutomatically();
    leftTopArrow.style.display = "none";
    rightTopArrow.style.display = "none";
  }

  topCarouselArea.addEventListener("mouseover", showArrows);
  topCarouselArea.addEventListener("mouseleave", hideArrows);
  leftTopArrow.addEventListener("click", () => {
    switchSlidesByArrows(-1);
  });
  rightTopArrow.addEventListener("click", () => {
    switchSlidesByArrows(1);
  });
}

export default topicCardSlider;
