import img1 from '@images/laboratory-item1.webp';
import img2 from '@images/laboratory-item2.webp';
import img3 from '@images/laboratory-item3.webp';
import img4 from '@images/laboratory-item4.webp';
import img5 from '@images/laboratory-item5.webp';
import img6 from '@images/laboratory-item6.webp';
import img7 from '@images/laboratory-item7.webp';
import imgres from '@images/laboratory-result.webp';
import imglabDesk from '@images/laboratory-desk.webp';
import { LaboratoryType } from '../../../types/laboratoryTypes';
import { Typography } from '@mui/material';

const LaboratoryData: LaboratoryType = {
  title: 'Алкилирование бензола',
  labDesk: imglabDesk,
  goal: 'Изучить основные способы получения и химические свойства ароматических углеводородов',
  tasks: () => {
    return (
      <>
        <ul>
        <li>охарактеризовать физические свойства аренов;</li>
        <li>исследовать химическую активность аренов при алкилировании;</li>
        <li>установить роль хлорида алюминия при алкилировании бензола;</li>
        </ul>
      </>
    )
  },
  theory: () => {
    return (
      <>
        <Typography variant='body1' component="p" gutterBottom>В значительном количестве углеводороды ряда бензола содержатся в некоторых сортах нефти, откуда их и получают при переработке нефти. Помимо этого, так как ядро бензола энергетически очень «выгодная» система, соединения ароматического ряда образуются при многих процессах. Так, например, при каталитическом и термическом крекинге нефти, даже не содержащих ароматических соединений, они образуются в заметном количестве вследствие превращений других углеводородов.</Typography>
        <Typography variant='body1' component="p" gutterBottom>При переработке каменного угля в кокс в отгоняющемся каменноугольном дегте содержание соединений ароматического ряда достигает нескольких десятков процентов.</Typography>
        <Typography variant='body1' component="p" gutterBottom>В лабораторной практике и в промышленности для синтеза замещенных аренов широко применяется синтез Фриделя — Крафтса (реакции алкилирования ароматических углеводородов в присутствии кислот Льюиса).</Typography>
        <Typography variant='body1' component="p" gutterBottom><b>Алкилирование бензола</b> хлороформом (CHCl₃) в присутствии катализатора хлорида алюминия (AlCl₃). Основным продуктом реакции является трихлорметилбензол (C₆H₅CCl₃). Также выделяется побочный продукт — хлороводород (HCl).</Typography>
        <Typography variant='h6' component="p" textAlign={'center'} gutterBottom>C₆H₆ (бензол) + CHCl₃ (хлороформ) → C₆H₅CCl₃ (трихлорметилбензол) + HCl (хлороводород)</Typography>
      </>
    )
  },
  experiments: [
    {
      text: 'В пробирку наливают 1 мл бензола, добавляют 0,5 г хлорида алюминия, а затем при встряхивании к смеси добавляют 1 мл хлороформа (тяга!). Пробирку закрывают пробкой с обратным, воздушным холодильником (трубкой) и слегка нагревают. При этом начинается энергичная реакция с выделением хлороводорода. Смесь окрашивается в красно-бурый цвет. Выпадает масло. Напишите уравнение алкилирования бензола. Объясните механизм реакции. Какова роль хлорида алюминия при алкилировании?',
      resultFormula: ['C₆H₅CCl₃', 'HCl'],
      resultImage: imgres,
      resultImageTop: 55,
      resultImageLeft: 57,
      resultTop: 55,
      resultLeft: 35
    }
  ],
  equipment: [
    {
      type: 'reagent',
      name: 'Бензол',
      formula: 'C₆H₆',
      thumb: img1,
      count: 1,
      top: 65,
      left: 55,
      width: 14,
      zIndex: 3
    },
    {
      type: 'reagent',
      name: 'Хлорид алюминия',
      formula: 'AlCl₃',
      thumb: img2,
      count: 1,
      top: 65,
      left: 45,
      width: 7,
      zIndex: 3
    },
    {
      type: 'reagent',
      name: 'Хлороформ',
      formula: 'CHCl₃',
      thumb: img3,
      count: 1,
      top: 68,
      left: 64,
      width: 10,
      zIndex: 3
    },
    {
      type: 'equipment',
      name: 'Пробирка',
      formula: '',
      thumb: img4,
      count: 1,
      top: 54,
      left: 32.7,
      width: 12,
      zIndex: 2
    },
    {
      type: 'equipment',
      name: 'Холодильник либиха',
      formula: '',
      thumb: img5,
      count: 1,
      top: 42,
      left: 35.5,
      width: 18,
      zIndex: 2
    },
    {
      type: 'equipment',
      name: 'Штатив',
      formula: '',
      thumb: img6,
      count: 1,
      top: 47,
      left: 26,
      width: 17,
      zIndex: 3
    },
    {
      type: 'equipment',
      name: 'Вытяжной шкаф',
      formula: '',
      thumb: img7,
      count: 1,
      top: 28,
      left: 21,
      width: 40,
      zIndex: 1
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
            <Typography variant='body1' component="p" gutterBottom>Наливаем 1 мл бензола, добавляем 0,5 г хлорида алюминия, а затем при встряхивании к смеси добавляем 1 мл хлороформа. Пробирку закрываем пробкой с обратным, воздушным холодильником (трубкой) и слегка нагреваем.</Typography>
          </>
        )
      }
    },
    {
      id: 4,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom>В результате начинается энергичная реакция с выделением <b>хлороводорода</b>. Смесь окрашивается в красно-бурый цвет. Выпадает бесцветная маслянистая жидкость <b>трихлорметилбензол</b>.</Typography>            
          </>
        )
      }
    },
  ]
}

export default LaboratoryData;