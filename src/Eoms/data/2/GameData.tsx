import { Box, Typography } from '@mui/material';
import { shuffleArray } from '../../../helpers/shuffleArray';
import { Answer, Test } from '../../../types/gameTypes';
import img1 from '@images/game1.webp';
import img2 from '@images/game2.webp';
import img3 from '@images/game3.webp';
import img4 from '@images/game4.webp';

const getTaskLabel = (type: string) => {
  let label = '';
  if (type === "single") {
    label = 'Задание с одним правильным ответом';
  } else if (type === "multiple") {
    label = 'Задание с несколькими вариантами ответа';
  } else if (type === "input") {
    label = 'Задание с вводом ответа';
  } else if (type === "multipleInput") {
    label = 'Задание с вводом ответа';
  } else if (type === "matchImages") {
    label = 'Задание на соотнесение';
  } else {
    label = 'Задание на установление верной последовательности';
  }
  return label;
}

const GameData: Test[] = [
  {
    type: 'matchImages',
    answers: [
      {
        items: [
          {
            value: 'АВВГ',
            image: img1
          },
          {
            value: 'АППВ',
            image: img2
          },
          {
            value: 'ПРКС',
            image: img3
          },
          {
            value: 'АСБ',
            image: img4
          }
        ]
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите изображения кабелей с их буквенным обозначением.</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Медной и алюминиевой жилой',
        isCorrect: false
      },
      {
        value: 'Бронированной',
        isCorrect: false
      },
      {
        value: 'Силовые и контрольные',
        isCorrect: true
      },
      {
        value: 'Гибкие',
        isCorrect: false
      },
      {
        value: 'Кабель с бумажной изоляцией',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Кабели по назначению делятся на …</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'круглую',
        isCorrect: false
      },
      {
        value: 'прямоугольную',
        isCorrect: false
      },
      {
        value: 'треугольную',
        isCorrect: true
      },
      {
        value: 'квадратную',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какую форму имеют бирки низковольтных кабелей?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'для подвода электроэнергии к жилому дому',
        isCorrect: false
      },
      {
        value: 'для подвода воды к жилому дому',
        isCorrect: false
      },
      {
        value: 'для передачи и распределения электрической энергии',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Силовой кабель служит …</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Сечение основной токопроводящей жилы в мм²',
        isCorrect: true
      },
      {
        value: 'Сечение нулевой жилы',
        isCorrect: false
      },
      {
        value: 'Количество жил в кабеле, включая нулевую жилу',
        isCorrect: false
      },
      {
        value: 'Количество основных токопроводящих жил',
        isCorrect: false
      },
      {
        value: 'Количество проволок в основной токопроводящей жиле',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В маркировке кабелей второе число обозначает:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'АСБ – алюминиевые со свинцовой оболочкой, бронированные плоскими проволоками',
        isCorrect: false
      },
      {
        value: 'ААБ – алюминиевые с алюминиевой оболочкой, бронированные стальной лентой',
        isCorrect: false
      },
      {
        value: 'СБ – медный со свинцовой оболочкой, бронированный',
        isCorrect: false
      },
      {
        value: 'СП – медный со свинцовой оболочкой, бронированный плоскими проволоками',
        isCorrect: false
      },
      {
        value: 'СК – медный со свинцовой оболочкой, бронированный круглыми проволоками',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В расшифровке, какой марки силового кабеля допущена ошибка?</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'установочные',
        isCorrect: true
      },
      {
        value: 'силовые',
        isCorrect: false
      },
      {
        value: 'монтажные',
        isCorrect: true
      },
      {
        value: 'контрольные',
        isCorrect: false
      },
      {
        value: 'обмоточные',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие бывают классы проводов?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['пв']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как пишется буквенное обозначение провода с поливинилхлоридной изоляцией?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['схем']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Пакетный выключатель (ПВ) служит для включения и отключения …?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['кабель']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>… – изолированный проводник, который служит для передачи электрического тока в земле, воде и воздухе. </Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'нахлест',
        isCorrect: false
      },
      {
        value: 'пайка',
        isCorrect: true
      },
      {
        value: 'опрессовка',
        isCorrect: true
      },
      {
        value: 'угловая накладка',
        isCorrect: false
      },
      {
        value: 'сварка',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие способы соединения кабеля существуют?</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'провода',
        isCorrect: false
      },
      {
        value: 'льняные нити',
        isCorrect: true
      },
      {
        value: 'металлические лотки',
        isCorrect: true
      },
      {
        value: 'кабели',
        isCorrect: false
      },
      {
        value: 'кабель-каналы',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие электромонтажные материалы используются при ремонте электроустановок?</Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: [
      {
        pattern: 'Кабель в отличии от провода кроме изоляции имеет {} и {} оболочку.',
        value: ['герметичную', 'защитную']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Вставить пропущенные слова:</Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: [
      {
        pattern: 'Трансформатор тока применяется для {} напряжения в сетях напряжением свыше {}В.',
        value: ['измерения', '1000']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Вставить пропущенные слова:</Typography>
        </>
      )
    }
  },
  {
    type: 'order',
    answers: [
      {
        order: 1,
        title: 'визуальный осмотр'
      },
      {
        order: 2,
        title: 'очистка'
      },
      {
        order: 3,
        title: 'выправление кабелей'
      },
      {
        order: 4,
        title: 'восстановление при необходимости маркировки'
      },
      {
        order: 5,
        title: 'определение и измерение температуры нагрева кабеля'
      },
      {
        order: 6,
        title: 'ремонт каналов'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Установить правильную последовательность при ремонте кабельных линий:</Typography>
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
  const answers = item.answers;
  const answersWithUid: Answer = [];
  answers.forEach(el => {
    answersWithUid.push({ ...el, uid: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}` });
  });
  item.answers = answersWithUid;
  if (item.type === "single" || item.type === "multiple" || item.type === "order") {
    item.answers = shuffleArray(item.answers);
  }
});

export default GameData;