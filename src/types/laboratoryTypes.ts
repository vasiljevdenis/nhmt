import { ReactNode } from "react";

export interface Experiment {
  text: string;
  resultFormula: string;
  resultImage: string;
}
export interface Item {
  name: string;
  formula: string;
  thumb: string;
  count: number;
  top: number;
  left: number;
  width: number;
}
export interface Step {
  id: number;
  text: string;
  isVisible?: boolean;
}
export interface LaboratoryType {
  title: string;
  goal: string;
  tasks: () => ReactNode;
  theory: () => ReactNode;
  experiments: Experiment[];
  equipment: Item[];
  steps: Step[];
}