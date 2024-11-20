import img1 from '@images/laboratory-item1.webp';
import img2 from '@images/laboratory-item2.webp';
import img3 from '@images/laboratory-item3.webp';
import img4 from '@images/laboratory-item4.webp';
import img5 from '@images/laboratory-item5.webp';
import img6 from '@images/laboratory-item6.webp';
import img7 from '@images/laboratory-item7.webp';
import img8 from '@images/laboratory-item8.webp';
import img9 from '@images/laboratory-item9.webp';
import imgres from '@images/laboratory-result.webp';
import imglabDesk from '@images/laboratory-desk.webp';
import { LaboratoryType } from '../../../types/laboratoryTypes';
import { Typography } from '@mui/material';

const LaboratoryData: LaboratoryType = {
  title: 'Алкины (ацетиленовые углеводороды)',
  labDesk: imglabDesk,
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
        <Typography variant='h6' component="p" textAlign={'center'} gutterBottom>CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂</Typography>
      </>
    )
  },
  experiments: [
    {
      text: 'Для получения ацетилена налейте в пробирку 2-3 мл дистиллированной воды, добавьте небольшой кусочек карбида кальция и быстро закройте пробирку пробкой с газоотводной трубкой. Проведите качественные реакции с выделившимся газом.',
      resultFormula: ['C₂H₂'],
      resultImage: imgres,
      resultImageTop: 55,
      resultImageLeft: 55,
      resultTop: 58,
      resultLeft: 52
    }
  ],
  equipment: [
    {
      type: 'reagent',
      name: 'Карбид кальция',
      formula: 'CaC₂',
      thumb: img1,
      count: 1,
      top: 75,
      left: 64,
      width: 8,
      zIndex: 4
    },
    {
      type: 'reagent',
      name: 'Дистиллированная вода',
      formula: 'H₂O',
      thumb: img5,
      count: 1,
      top: 70,
      left: 55,
      width: 10,
      zIndex: 4
    },
    {
      type: 'equipment',
      name: 'Пробирка',
      formula: '',
      thumb: img6,
      count: 1,
      top: 56,
      left: 51,
      width: 12,
      zIndex: 1
    },
    {
      type: 'equipment',
      name: 'Пробка с газоотводной трубкой',
      formula: '',
      thumb: img7,
      count: 1,
      top: 45,
      left: 54.5,
      width: 12,
      zIndex: 1
    },
    {
      type: 'equipment',
      name: 'Штатив',
      formula: '',
      thumb: img8,
      count: 1,
      top: 47,
      left: 41,
      width: 21,
      zIndex: 2
    },
    {
      type: 'equipment',
      name: 'Фильтровальная бумага',
      formula: '',
      thumb: img9,
      count: 1,
      top: 71,
      left: 28,
      width: 8,
      zIndex: 3
    }
  ],
  steps: [
    {
      id: 1,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom>Расположите на рабочем столе все оборудование и реактивы. Для этого нажмите на нужный элемент</Typography>
          </>
        )
      }
    },
    {
      id: 2,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom>Нажмите Выполнить для смешения реактивов и получения результата</Typography>
          </>
        )
      }
    },
    {
      id: 3,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom>Наливаем в пробирку 2-3 мл дистиллированной воды, добавляем небольшой кусочек карбида кальция и быстро закрываем пробирку пробкой с газоотводной трубкой</Typography>
          </>
        )
      }
    },
    {
      id: 4,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom>В результате реакции был получен газ <b>ацетилен</b>. Запишите формулу и вспомните какие качественные реакции можно провести с выделившимся газом</Typography>            
          </>
        )
      }
    },
  ]
}

export default LaboratoryData;