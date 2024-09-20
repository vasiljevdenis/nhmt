import { makeAutoObservable } from "mobx";
import GameData from "../Eoms/data/8/GameData";

interface Answer {
  slideId: number;
  index: number;
  checked: boolean;
  isCorrect: boolean;
}

const initialAnswers: Answer[] = GameData.filter(el => el.answers).map(el => {
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

class GameState {

  currentExerciseG: number = 0;
  currentSlideG: number = 0;
  openedG: number[] = [];
  countedG: number[] = [];
  answersG: Answer[] = initialAnswers;


  constructor() {
    makeAutoObservable(this);
  }

  setExerciseG(id: number) {
    this.currentExerciseG = id;
  }
  setSlideG(id: number) {
    this.currentSlideG = id;
  }
  addOpenedG(id: number) {
    if (GameData[id].answers) {
      const i: number = this.answersG.findIndex(el => { return el.slideId === id && el.isCorrect === true });
      if (this.answersG[i].checked) {
        if (!this.openedG.includes(id)) {
          this.openedG.push(id);
        }
      } else {
        const ind: number = this.openedG.findIndex(el => { return el === id });

        if (ind !== -1) {
          this.openedG.splice(ind, 1);
        }
      }
    } else {
      if (!this.openedG.includes(id)) {
        this.openedG.push(id);
      }
    }
  }
  setCheckG(slideId: number, index: number) {
    const i: number = this.answersG.findIndex(el => { return el.slideId === slideId && el.index === index });
    this.answersG[i].checked = !this.answersG[i].checked;
    if (GameData[slideId].type !== "multiple") {
      const filteredArr = this.answersG.filter(obj => obj.slideId === slideId && obj.index !== index);
      const indexesArr = filteredArr.map(obj => this.answersG.indexOf(obj));
      indexesArr.forEach(el => {
        this.answersG[el].checked = false;
      });
    }
    this.addOpenedG(slideId);
  }

  resetAnswers() {
    this.answersG = initialAnswers;
  }
  resetCountedG() {
    this.countedG = [];
  }

  addCountedG(id: number) {
    if (!this.countedG.includes(id)) {
      this.countedG.push(id);
    }
  }

  get currentExG() {
    return this.currentExerciseG;
  }
  get currentSlG() {
    return this.currentSlideG;
  }
  get openedSlidesG() {
    return this.openedG;
  }
  get answG() {
    return this.answersG;
  }
  get allCountedG() {
    return this.countedG;
  }
}

export default new GameState();
