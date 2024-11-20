import { makeAutoObservable } from "mobx";

class AnimationState {

  currentSlide: number = 0;
  opened: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSlide(id: number) {
    this.currentSlide = id;
  }
  addOpened(id: number) {
    if (!this.opened.includes(id)) {
      this.opened.push(id);
    }
  }

  get currentSl() {
    return this.currentSlide;
  }
  get openedSlides() {
    return this.opened;
  }
}

export default new AnimationState();