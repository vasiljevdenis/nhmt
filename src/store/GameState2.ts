import { makeAutoObservable } from "mobx";

class GameStore {
  currentSlideIndex = 0; // Индекс текущего задания
  totalScore = 0; // Общее количество набранных баллов
  results: { questionId: number; correct: boolean }[] = []; // Результаты заданий

  constructor() {
    makeAutoObservable(this);
  }

  // Перейти к следующему слайду
  nextSlide() {
    if (this.currentSlideIndex < GameData.length - 1) {
      this.currentSlideIndex++;
    }
  }

  // Фиксируем результат ответа и добавляем очки
  submitAnswer(isCorrect: boolean, score: number) {
    const question = GameData[this.currentSlideIndex];
    this.results.push({ questionId: question.id, correct: isCorrect });
    if (isCorrect) {
      this.totalScore += score;
    }
    this.nextSlide();
  }

  // Сброс игры
  resetGame() {
    this.currentSlideIndex = 0;
    this.totalScore = 0;
    this.results = [];
  }

  // Получение текущего задания
  get currentQuestion() {
    return GameData[this.currentSlideIndex];
  }
}

const gameStore = new GameStore();
export default gameStore;