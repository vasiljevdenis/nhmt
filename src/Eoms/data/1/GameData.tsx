import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { shuffleArray } from '../../../helpers/shuffleArray';

interface AnswerTest {
  value: string;
  isCorrect: boolean;
}
interface AnswerOrder {
  order: number;
  title: string;
}
interface Test {
  id?: number;
  title?: string;
  type: 'single' 
  | 'multiple' 
  | 'input' 
  | 'multipleInput' 
  | 'inputAnswer' 
  | 'matchImages' 
  | 'order';
  score?: number;
  answers: AnswerTest[] | AnswerOrder[] | string[];
  content: () => ReactNode
}

const getTaskLabel = (type: string) => {
  let label = '';
  if (type === "single") {
    label = 'Выберите один правильный ответ';
  } else if (type === "multiple") {
    label = 'Выберите несколько правильных ответов';
  } else if (type === "input") {
    label = 'Введите ответ';
  } else if (type === "multipleInput") {
    label = 'Введите пропущенное слово';
  } else if (type === "inputAnswer") {
    label = 'Введите пропущенные слова';
  } else if (type === "matchImages") {
    label = 'Соотнесите картинки с их названием';
  } else {
    label = 'Установите правильную последовательность';
  }
  return label;
}

const GameData: Test[] = [
  {
    type: 'single',
    answers: [
      {
        value: 'рабочее',
        isCorrect: false
      },
      {
        value: 'аварийное',
        isCorrect: true
      },
      {
        value: 'ремонтное',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как называется освещение для временной возможности продолжения работы или обеспечения условий безопасного выхода из помещений?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'лампами накаливания',
        isCorrect: true
      },
      {
        value: 'газоразрядными лампами',
        isCorrect: false
      },
      {
        value: 'полупроводниковыми лампами',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>По принципу действия галогенные лампы являются …</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'цоколь',
        isCorrect: false
      },
      {
        value: 'кварцевая горелка',
        isCorrect: false
      },
      {
        value: 'основной вольфрамовый электрод',
        isCorrect: true
      },
      {
        value: 'колба, покрытая люминофором',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой элемент дуговой ртутной лампы указан под цифрой 4?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'стартер',
        isCorrect: false
      },
      {
        value: 'конденсатор',
        isCorrect: false
      },
      {
        value: 'дроссель',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>На какой элемент на схеме включения люминесцентной лампы указывает стрелка?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'плафон-рассеиватель',
        isCorrect: true
      },
      {
        value: 'отражатель',
        isCorrect: false
      },
      {
        value: 'корпус',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какая часть светильника служит для более равномерного распределения света?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: ['накаливания', 'лампа накаливания', 'накаливания лампа'],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите название лампы, изображенной на рисунке.</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: ['конденсатор'],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>На какой элемент на схеме включения люминесцентной лампы указывает стрелка?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: ['галогенная', 'галогенная лампа', 'лампа галогенная'],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите название лампы, изображенной на рисунке.</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: ['синий', 'синим'],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каким цветом принято обозначать нулевой рабочий провод?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: ['компактная люминесцентная', 'люминесцентная компактная', 'люминесцентная', 'люминесцентная лампа'],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите название лампы, изображенной на рисунке.</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'царапины на поверхности контактных колец',
        isCorrect: false
      },
      {
        value: 'износ пазовой изоляции двигателя',
        isCorrect: true
      },
      {
        value: 'межвитковое замыкание катушки',
        isCorrect: true
      },
      {
        value: 'истирание щеток',
        isCorrect: false
      },
      {
        value: 'снижение сопротивления изоляции',
        isCorrect: true
      },
      {
        value: 'деформация витков обмотки силового трансформатора',
        isCorrect: false
      },
      {
        value: 'изменение формы контакта',
        isCorrect: false
      },
      {
        value: 'растрескивание изоляции обмотки',
        isCorrect: true
      },
      {
        value: 'выгорание контактов',
        isCorrect: true
      },
      {
        value: 'срыв резьбы в крепежных деталях',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите повреждения электрооборудования, относящиеся к электрическому износу:</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'царапины на поверхности контактных колец',
        isCorrect: true
      },
      {
        value: 'износ пазовой изоляции двигателя',
        isCorrect: false
      },
      {
        value: 'межвитковое замыкание катушки',
        isCorrect: false
      },
      {
        value: 'истирание щеток',
        isCorrect: true
      },
      {
        value: 'снижение сопротивления изоляции',
        isCorrect: false
      },
      {
        value: 'деформация витков обмотки силового трансформатора',
        isCorrect: true
      },
      {
        value: 'изменение формы контакта',
        isCorrect: true
      },
      {
        value: 'растрескивание изоляции обмотки',
        isCorrect: false
      },
      {
        value: 'выгорание контактов',
        isCorrect: false
      },
      {
        value: 'срыв резьбы в крепежных деталях',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите повреждения электрооборудования, относящиеся к механическому износу:</Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: ['При техническом обслуживании осветительной электроустановки проверяют надежность имеющихся в установке контактов: ослабленные контакты необходимо {}, а обгоревшие — {} или {}.', 'затянуть', 'зачистить', 'заменить'],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Вставьте пропущенные слова:</Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: ['В результате осмотра контактора выявлено подгорание силовых контактов, поэтому контакты необходимо {} с помощью {}.', 'зачистить', 'надфиля'],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Вставьте пропущенные слова:</Typography>
        </>
      )
    }
  },
  {
    type: 'order',
    answers: [
      {
        order: 1,
        title: 'осмотреть корпус, крышку теплового реле'
      },
      {
        order: 2,
        title: 'удалить пыль, копоть и грязь со всех доступных частей'
      },
      {
        order: 3,
        title: 'снять крышку реле'
      },
      {
        order: 4,
        title: 'проверить работу рычага возврата реле'
      },
      {
        order: 5,
        title: 'осмотреть нагревательный элемент'
      },
      {
        order: 6,
        title: 'проверить правильность установки теплового реле'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Установить правильную последовательность при техническом обслуживании теплового реле:</Typography>
        </>
      )
    }
  }
];

GameData.forEach((item, index) => {
  item.id = index;
  item.title = getTaskLabel(item.type);
  if (index < 5) {
    item.score = 10;
  } else if (index < 10) {
    item.score = 20;
  } else if (index < 15) {
    item.score = 30;
  }
  if (item.type === "single" || item.type === "multiple" || item.type === "order") {
    item.answers = shuffleArray(item.answers);
  }
});

console.log(GameData);


export default GameData;