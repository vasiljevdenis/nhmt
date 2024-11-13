import { makeAutoObservable } from "mobx";
import GameData from "@data/GameData";
import { TaskType } from "../types/gameTypes";

interface Answer {
  type: TaskType;
  slideId: number;
  uid: string;
  selected: boolean;
  inputValue?: string;
  multipleInputValue?: string[];
  selectedNumber?: number | null;
}

interface Scored {
  slideId: number;
  score: number;
  ready: boolean;
  answered: boolean;
}

const initialAnswers: Answer[] = GameData.filter(el => el.answers).map(el => {
  if (el.answers) {
    return el.answers.map((elem: any, i: number) => {
      const obj: Answer = {
        ...elem,
        type: el.type,
        slideId: el.id,
        uid: elem.uid,
        selected: false
      };
      switch (el.type) {
        case 'input':
          obj.inputValue = '';
          break;
        case 'multipleInput':
          obj.multipleInputValue = new Array(elem.value.length).fill('');
          break;
        case 'order':
          obj.selectedNumber = null;
          break;
        default:
          console.log('Invalid type');
      }
      return obj;
    });
  }
}).flat() as Answer[];

console.log(initialAnswers);


const initialScored: Scored[] = GameData.map((el: any) => ({ slideId: el.id, scored: 0, ready: false, answered: false }));

class GameState {

  currentSlide: number = 0;
  attempts: number = 1;
  answers: Answer[] = initialAnswers;
  scored: Scored[] = initialScored;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentSlide(slideId: number) {
    this.currentSlide = slideId;
  }

  checkOrderSequence(uid: string, slideId: number) {
    // Найдём все элементы с типом "order" и указанным slideId
    const orderAnswers = this.answers
      .filter(answer => answer.type === 'order' && answer.slideId === slideId);
  
    // Определим максимальный порядковый номер среди выбранных элементов
    const maxSelectedNumber = Math.max(
      0, 
      ...orderAnswers
        .filter(answer => answer.selected && answer.selectedNumber !== null)
        .map(answer => answer.selectedNumber as number)
    );
  
    const answer = orderAnswers.find(answer => answer.uid === uid);
    if (answer) {
      if (answer.selected) {
        // Если элемент только что был выбран, присваиваем ему номер maxSelectedNumber + 1
        answer.selectedNumber = maxSelectedNumber + 1;
      } else {
        // Если элемент только что был снят, его номер сбрасывается в null
        answer.selectedNumber = null;
  
        // Обновим номера остальных выбранных элементов, чтобы они оставались последовательными
        let currentNumber = 1;
        orderAnswers
          .filter(answer => answer.selected)
          .sort((a, b) => (a.selectedNumber ?? 0) - (b.selectedNumber ?? 0))
          .forEach(answer => {
            answer.selectedNumber = currentNumber++;
          });
      }
    }
  }

  setSelectedAnswer(uid: string, value?: string | string[]) {
    const answer = this.answers.find(answer => answer.uid === uid);
    if (answer) {
      switch (answer.type) {
        case 'single':
        case 'multiple':
          answer.selected = !answer.selected;
          break;
        case 'input':
          if (typeof value === 'string') {
            answer.selected = value.trim() !== '';
            answer.inputValue = value.trim();
          }
          break;
        case 'multipleInput':
          if (Array.isArray(value)) {
            answer.selected = value.every(v => v.trim() !== '');
            answer.multipleInputValue = value;
          }
          break;
        case 'order':
          answer.selected = !answer.selected;
          break;
        default:
          console.log('Invalid type');
      }
      this.setReadySlide(answer.slideId);
    }
  }

  setReadySlide(slideId: number) {
    const slide = this.scored.find(slide => slide.slideId === slideId);
    if (!slide?.ready && !slide.answered) {
      const answers = this.answers.filter(answer => answer.slideId === slideId);
      if (answers.length > 0) {
        const slideType = answers[0].type;
        slide.ready = this.checkSlide(answers, slideType);
        if (slideType === 'single' && slide.ready) this.setAnsweredSlide(slideId);
      }
    }
  }

  setAnsweredSlide(slideId: number) {
    const slide = this.scored.find(slide => slide.slideId === slideId);
    if (slide?.ready && !slide.answered) {
      const answers = this.answers.filter(answer => answer.slideId === slideId);
      if (answers.length > 0) {
        const slideType = answers[0].type;
        slide.answered = this.checkSlide(answers, slideType);
      }
    }
  }

  checkSlide(answers: Answer[], slideType: string) {
    switch (slideType) {
      case 'single':
        return answers.filter(answer => answer.selected).length === 1;
      case 'multiple':
        return answers.filter(answer => answer.selected).length >= 2;
      case 'input':
        return answers[0].inputValue.trim().length > 0;
      case 'multipleInput':
        return answers[0].multipleInputValue.every(item => item.trim() !== "");
      case 'order':
        return answers.every(item => item.selectedNumber != null);
      default:
        console.log('Invalid type');
        return false;
    }
  }

  setSlideScore(slideId: number, newScore: number) {
    const slide = this.scored.find(slide => slide.slideId === slideId);
    if (slide) {
      slide.score = newScore;
    }
  }

  checkTotalScore() {

  }

  getSlideScore(slideId: number) {
    const score = this.scored.find(el => el.slideId === slideId);
    return score.score;
  }

  resetAnswers() {
    this.answers = initialAnswers;
  }
  resetScore() {
    this.scored = initialScored;
  }

  get getAnswers() {
    return this.answers;
  }
  get getCurrentSlide() {
    return this.currentSlide;
  }
  get getScored() {
    return this.scored;
  }
  get getTotalScore() {
    return this.scored.reduce((total, current) => total + current.score, 0);
  }
}

export default new GameState();