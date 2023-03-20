class Carousel {
  constructor(slides, slideOne, slideTwo, slideThree, slideFour) {
    this.slides = document.querySelectorAll(slides);
    this.slideOne = document.querySelector(slideOne);
    this.slideTwo = document.querySelector(slideTwo);
    this.slideThree = document.querySelector(slideThree);
    this.slideFour = document.querySelector(slideFour);
    this.currentSlideIndex = 0;
  }

  currentSlide(index) {
    this.slides.forEach((slide) => {
      slide.classList.remove("carousel__item--visible");
    });
    this.slides[index].classList.add("carousel__item--visible");
  }

  addClickEvent() {
    this.slideOne.addEventListener("click", () => this.currentSlide(0));
    this.slideTwo.addEventListener("click", () => this.currentSlide(1));
    this.slideThree.addEventListener("click", () => this.currentSlide(2));
    this.slideFour.addEventListener("click", () => this.currentSlide(3));
  }
}

const carousel = new Carousel(
  ".carousel__item",
  ".actions__button--one",
  ".actions__button--two",
  ".actions__button--three",
  ".actions__button--four"
);

carousel.addClickEvent();
