import { makeAutoObservable } from "mobx";
import TrainingData from "../Eoms/data/8/TrainingData";

interface Answer {
  slideId: number;
  index: number;
  checked: boolean;
  isCorrect: boolean;
}

class EomState {

  first: boolean = true;
  openImage: boolean = false;
  image: string = '';
  currentExercise: number = 2;
  currentSlide: number = 0;
  opened: number[] = [];
  currentExerciseT: number = 0;
  currentSlideT: number = 0;
  openedT: number[] = [];
  answers: Answer[] = TrainingData.filter(el => el.answers).map(el => {
    if (el.answers) {
      return el.answers.map((elem, i) => {
        return {
          slideId: el.id,
          index: i,
          checked: false,
          isCorrect: elem.isCorrect
        }
      });
    }
  }).flat() as Answer[];

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
  setExerciseT(id: number) {
    this.currentExerciseT = id;
  }
  setSlideT(id: number) {
    this.currentSlideT = id;
  }
  addOpenedT(id: number) {
    if (TrainingData[id].answers) {
      const i: number = this.answers.findIndex(el => { return el.slideId === id && el.isCorrect === true });
      if (this.answers[i].checked) {
        if (!this.openedT.includes(id)) {
          this.openedT.push(id);
        }
      } else {
        const ind: number = this.openedT.findIndex(el => { return el === id });
        
        if (ind !== -1) {
          this.openedT.splice(ind, 1);
        }
      }
    } else {
      if (!this.openedT.includes(id)) {
        this.openedT.push(id);
      }
    }
  }
  setCheck(slideId: number, index: number) {
    const i: number = this.answers.findIndex(el => { return el.slideId === slideId && el.index === index });
    this.answers[i].checked = !this.answers[i].checked;
    const filteredArr = this.answers.filter(obj => obj.slideId === slideId && obj.index !== index);
    const indexesArr = filteredArr.map(obj => this.answers.indexOf(obj));
    indexesArr.forEach(el => {
      this.answers[el].checked = false;
    });
    this.addOpenedT(slideId);
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
  get currentExT() {
    return this.currentExerciseT;
  }
  get currentSlT() {
    return this.currentSlideT;
  }
  get openedSlidesT() {
    return this.openedT;
  }
  get answersT() {
    return this.answers;
  }
  get isOpenedImage() {
    return this.openImage;
  }
  get frst() {
    return this.first;
  }
}

export default new EomState();
