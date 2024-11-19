import img1 from '@images/laboratory-item1.webp';
import img2 from '@images/laboratory-item2.webp';
import img3 from '@images/laboratory-item3.webp';
import img4 from '@images/laboratory-item4.webp';
import img5 from '@images/laboratory-item5.webp';
import img6 from '@images/laboratory-item6.webp';
import img7 from '@images/laboratory-item7.webp';
import img8 from '@images/laboratory-item8.webp';
import img9 from '@images/laboratory-item9.webp';
import { LaboratoryType } from '../../../types/laboratoryTypes';
import { Typography } from '@mui/material';

const LaboratoryData: LaboratoryType = {
  title: 'Алкины (ацетиленовые углеводороды)',
  goal: 'Исследовать лабораторные способы синтеза алкинов, изучить их физико-химические свойства и качественные реакции на тройные связи.',
  tasks: () => {
    return (
      <>
        <ul>
          <li>синтезировать ацетилен и проанализировать его физические характеристики;</li>
          <li>исследовать химическую активность алкинов в реакциях окисления и присоединения;</li>
          <li>определить связь между химическими свойствами алкинов и их электронным строением;</li>
          <li>провести сравнительный анализ активности алкинов, алкенов и алканов;</li>
        </ul>
      </>
    )
  },
  theory: () => {
    return (
      <>
        <Typography variant='body1' component="p" gutterBottom>Алкины — это углеводороды, в структуре которых содержится одна тройная связь между атомами углерода. Эти атомы находятся в sp-гибридизации, придавая молекуле линейную форму. Общая химическая формула для алкинов — CnH2n-2. Самым простым представителем этого класса веществ является ацетилен (C2H2), который имеет наибольшее значение в промышленности. В производстве ацетилен получают с помощью пиролиза метана или реакции воды с карбидом кальция. Химическая активность алкинов объясняется наличием тройной связи, что делает возможными реакции присоединения, сходные с реакциями алкенов. В некоторых случаях алкины проявляют даже более высокую реакционную способность.</Typography>
        <Typography variant='body1' component="p" gutterBottom>Особенностью некоторых алкинов является присутствие ацетиленового атома водорода (≡C–H), который может отщепляться с образованием протона, демонстрируя кислотные свойства. Это открывает возможность для реакций замещения атома водорода в молекуле на другие группы. Алкины легко подвергаются окислению, часто с разрывом тройной связи. В таких реакциях они демонстрируют большую реакционную способность по сравнению с алкенами.</Typography>
      </>
    )
  },
  experiments: [
    {
      text: 'Для получения ацетилена налейте в пробирку 2-3 мл дистиллированной воды, добавьте небольшой кусочек карбида кальция и быстро закройте пробирку пробкой с газоотводной трубкой. Проведите качественные реакции с выделившимся газом.',
      resultFormula: '',
      resultImage: ''
    }
  ],
  equipment: [
    {
      name: 'Карбид кальция',
      formula: 'CaC₂',
      thumb: img1,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    },
    {
      name: 'Хлорид диамминмеди(I) – раствор',
      formula: '[Cu(NH₃)₂]Cl',
      thumb: img2,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    },
    {
      name: 'Бромная вода',
      formula: '',
      thumb: img3,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    },
    {
      name: 'Перманганат калия – раствор 2%',
      formula: 'KMnO₄',
      thumb: img4,
      count: 1,
      top: 70,
      left: 60,
      width: 10
    },
    {
      name: 'Дистиллированная вода',
      formula: 'H₂O',
      thumb: img5,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    },
    {
      name: 'Пробирка',
      formula: '',
      thumb: img6,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    },
    {
      name: 'Пробка с газоотводной трубкой',
      formula: '',
      thumb: img7,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    },
    {
      name: 'Штатив',
      formula: '',
      thumb: img8,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    },
    {
      name: 'Фильтровальная бумага',
      formula: '',
      thumb: img9,
      count: 1,
      top: 20,
      left: 50,
      width: 10
    }
  ],
  steps: [
    {
      id: 1,
      text: 'Расположите на рабочем столе все оборудование и реактивы'
    },
    {
      id: 2,
      text: 'Нажмите Выполнить опыт для получения результата'
    },
    {
      id: 3,
      text: 'В резултьате реакции был получен газ ацетилен. Запишите формулу и вспомните какие качественные реакции можно провести с выделившимся газом',
    },
  ]
}

export default LaboratoryData;