function wordCardSlider() {
  let wordSlideIndex = 0;
  let wordSwitcher;
  const bottomCarouselArea = document.getElementById("carousel-area-bottom");
  const leftBottomArrow = document.getElementById("arrow-left-bottom");
  const rightBottomArrow = document.getElementById("arrow-right-bottom");

  function switchWordSlidesAutomatically() {
    const wordSlide = document.getElementsByClassName("wordSlides");
    let i;
    for (i = 0; i < wordSlide.length; i++) {
      wordSlide[i].style.display = "none";
    }
    wordSlideIndex++;
    if (wordSlideIndex >= wordSlide.length) {
      wordSlideIndex = 0;
    }
    wordSlide[wordSlideIndex].style.display = "block";
    wordSwitcher = setTimeout(switchWordSlidesAutomatically, 3000);
  }

  switchWordSlidesAutomatically();

  let wordSlideSwitcherIndex = 1;
  let wordSlideShow;
  showSlideSwitcher(wordSlideSwitcherIndex);

  function switchSlidesByArrows(wordSlideShow) {
    showSlideSwitcher((wordSlideSwitcherIndex += wordSlideShow));
  }

  function showSlideSwitcher(wordSlideShow) {
    let i;
    const wordSlides = document.getElementsByClassName("wordSlides");
    if (wordSlideShow > wordSlides.length) {
      wordSlideSwitcherIndex = 1;
    }
    if (wordSlideShow < 1) {
      wordSlideSwitcherIndex = wordSlides.length;
    }
    for (i = 0; i < wordSlides.length; i++) {
      wordSlides[i].style.display = "none";
    }
    wordSlides[wordSlideSwitcherIndex - 1].style.display = "block";
  }

  function showArrows() {
    clearTimeout(wordSwitcher);
    leftBottomArrow.style.display = "inline-block";
    rightBottomArrow.style.display = "inline-block";
  }

  function hideArrows() {
    switchWordSlidesAutomatically();
    leftBottomArrow.style.display = "none";
    rightBottomArrow.style.display = "none";
  }

  bottomCarouselArea.addEventListener("mouseover", showArrows);
  bottomCarouselArea.addEventListener("mouseleave", hideArrows);
  leftBottomArrow.addEventListener("click", () => {
    switchSlidesByArrows(-1);
  });
  rightBottomArrow.addEventListener("click", () => {
    switchSlidesByArrows(1);
  });
}

export default wordCardSlider;
