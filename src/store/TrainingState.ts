import { makeAutoObservable } from "mobx";
import TrainingData from "@data/TrainingData";
import { TaskType } from "../types/trainingTypes";

interface Answer {
  type: TaskType;
  slideId: number;
  uid: string;
  selected: boolean;
  isCorrect?: boolean;
  value?: string | string[];
  inputValue?: string;
  multipleInputValue?: string[];
  order?: number;
  selectedNumber?: number | null;
}

interface Scored {
  slideId: number;
  scored: number;
  ready: boolean;
  answered: boolean;
}

const initialAnswers: Answer[] = TrainingData.filter(el => el.answers).map(el => {
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

const initialScored: Scored[] = TrainingData.map((el: any) => ({ slideId: el.id, scored: 0, ready: false, answered: false }));

class TrainingState {

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
          console.log(this.answers);
          
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
            answer.selected = value !== '';
            answer.inputValue = value;
          }
          break;
        case 'multipleInput':
          if (Array.isArray(value)) {
            answer.selected = value.every(v => v !== '');
            answer.multipleInputValue = value;
          }
          break;
        case 'order':
          answer.selected = !answer.selected;
          this.checkOrderSequence(uid, answer.slideId);
          break;
        default:
          console.log('Invalid type');
      }
      this.setReadySlide(answer.slideId);
    }
  }

  setReadySlide(slideId: number) {
    const slide = this.scored.find(slide => slide.slideId === slideId);
    if (!slide.answered) {
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
        return answers[0].inputValue.length > 0;
      case 'multipleInput':
        return answers[0].multipleInputValue.every(item => item !== "");
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
      slide.scored = newScore;
    }
  }

  checkTotalScore() {
    // Перебираем каждый слайд в scored
    this.scored.forEach((slide, index) => {
      const slideAnswers = this.answers.filter(answer => answer.slideId === slide.slideId);
      let slideScore = 0;
  
      if (slideAnswers.length > 0) {
        const slideType = slideAnswers[0].type;
  
        switch (slideType) {
          case 'single':
            // Для single - один правильный ответ даёт 100% баллов
            slideScore = slideAnswers.some(answer => answer.selected && answer.isCorrect) ? 1 : 0;
            break;
  
          case 'multiple':
            // Для multiple - проверка полного или частичного выполнения
            const correctAnswers = slideAnswers.filter(answer => answer.isCorrect).length;
            const selectedCorrectAnswers = slideAnswers.filter(
              answer => answer.selected && answer.isCorrect
            ).length;
            const incorrectSelections = slideAnswers.some(answer => answer.selected && !answer.isCorrect);
            
            // Полное совпадение (100%) или частичное (50%), если выбрано не все, но не больше 50%
            if (selectedCorrectAnswers === correctAnswers && !incorrectSelections) {
              slideScore = 1;
            } else if (selectedCorrectAnswers > 0 && !incorrectSelections) {
              slideScore = 0.5;
            }
            break;
  
          case 'input':
            // Для input - проверка на полное совпадение
            slideScore = slideAnswers[0].value.includes(slideAnswers[0].inputValue) ? 1 : 0;
            break;
  
          case 'multipleInput':
            // Для multipleInput - частичный или полный балл
            const totalInputFields = slideAnswers[0].multipleInputValue.length;
            const correctInputs = slideAnswers[0].multipleInputValue.filter(
              (val, idx) => val === slideAnswers[0].value[idx]
            ).length;
            slideScore = correctInputs === totalInputFields ? 1 : correctInputs > 0 ? 0.5 : 0;
            break;
  
          case 'order':
            // Для order - полное или частичное совпадение
            const correctOrderItems = slideAnswers.filter(
              answer => answer.selectedNumber === answer.order
            ).length;
            slideScore = correctOrderItems === slideAnswers.length ? 1 : correctOrderItems > 0 ? 0.5 : 0;
            break;
  
          default:
            console.log('Unknown slide type');
        }
      }
  
      // Сохраняем результат по слайду в scored и обновляем общий счёт по уровням
      slide.scored = slideScore * 10;
    });
  }  

  getSlideScore(slideId: number) {
    const score = this.scored.find(el => el.slideId === slideId);
    return score.scored;
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
    return this.scored.reduce((total, current) => total + current.scored, 0);
  }
}

export default new TrainingState();