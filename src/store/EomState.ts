import { makeAutoObservable } from "mobx";

class EomState {

  first: boolean = true;
  openImage: boolean = false;
  image: string = '';
  currentExercise: number = 0;
  currentSlide: number = 0;
  opened: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setImage(img: string) {
    this.image = img;
  }
  setOpenImage(status: boolean) {
    this.openImage = status;
  }
  setExercise(id: number) {
    this.currentExercise = id;
  }
  setSlide(id: number) {
    this.currentSlide = id;
  }
  addOpened(id: number) {
    if (!this.opened.includes(id)) {
      this.opened.push(id);
    }
  }

  setFirst() {
    this.first = false;
  }

  get currentEx() {
    return this.currentExercise;
  }
  get currentSl() {
    return this.currentSlide;
  }
  get openedSlides() {
    return this.opened;
  }
  get isOpenedImage() {
    return this.openImage;
  }
  get frst() {
    return this.first;
  }
}

export default new EomState();