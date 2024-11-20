import { ReactNode } from "react";

export interface Experiment {
  text: string;
  resultFormula: string[];
  resultImage: string;
  resultTop: number;
  resultLeft: number;
  resultImageTop: number;
  resultImageLeft: number;
}
export interface Item {
  type: 'reagent' | 'equipment';
  name: string;
  formula: string;
  thumb: string;
  count: number;
  top: number;
  left: number;
  width: number;
  zIndex: number;
}
export interface Step {
  id: number;
  text: () => ReactNode;
  isVisible?: boolean;
}
export interface LaboratoryType {
  title: string;
  labDesk: string;
  goal: string;
  tasks: () => ReactNode;
  theory: () => ReactNode;
  experiments: Experiment[];
  equipment: Item[];
  steps: Step[];
}