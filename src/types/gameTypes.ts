import { ReactNode } from 'react';

export interface Single {
  uid?: string;
  value: string;
  isCorrect: boolean;
}
export interface Input {
  uid?: string;
  value: string[];
}
export interface MultipleInput {
  uid?: string;
  pattern: string;
  value: string[];
}
export interface MatchImages {
  uid?: string;
  order: number;
  title: string;
}
export interface Order {
  uid?: string;
  order: number;
  title: string;
}
export type Answer = (Single | Input | MultipleInput | MatchImages | Order)[];
export type TaskType = 'single' | 'multiple' | 'input' | 'multipleInput' | 'matchImages' | 'order';
export interface Test {
  id?: number;
  title?: string;
  type: TaskType;
  score?: number;
  answers: Answer;
  content: () => ReactNode
}