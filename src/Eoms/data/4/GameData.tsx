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
    type: 'single',
    answers: [
      {
        value: 'Только из жидких углеводородов',
        isCorrect: false
      },
      {
        value: 'Только из газообразных углеводородов',
        isCorrect: false
      },
      {
        value: 'Только из твердых углеводородов',
        isCorrect: false
      },
      {
        value: 'Из жидких и растворенных в них газообразных и твердых углеводородов',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Нефть – это смесь, состоящая:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Легче воды',
        isCorrect: false
      },
      {
        value: 'Растворима в воде',
        isCorrect: true
      },
      {
        value: 'Густая темная жидкость',
        isCorrect: false
      },
      {
        value: 'Не имеет постоянной температуры кипения',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите свойство, которое не относится к нефти:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Верно только 1',
        isCorrect: true
      },
      {
        value: 'Верно только 2',
        isCorrect: false
      },
      {
        value: 'Верны оба суждения',
        isCorrect: false
      },
      {
        value: 'Оба суждения неверны',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите верное суждение: 1) перегонка нефти – это физический процесс; 2) крекинг – это физический процесс.</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'циклоалканов',
        isCorrect: false
      },
      {
        value: 'алканов',
        isCorrect: false
      },
      {
        value: 'аренов',
        isCorrect: true
      },
      {
        value: 'непредельных углеводородов',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каменноугольная смола является источником:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: '1,1 мл',
        isCorrect: false
      },
      {
        value: '1,09 мл',
        isCorrect: false
      },
      {
        value: '1,9 мл',
        isCorrect: true
      },
      {
        value: '19 мл',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Для сжигания 1мл (н.у.) природного газа, содержащего 95% СН4, потребуется кислород объемом:</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'Нефть',
        isCorrect: true
      },
      {
        value: 'Природный газ',
        isCorrect: true
      },
      {
        value: 'Уголь',
        isCorrect: true
      },
      {
        value: 'Торф',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какое ископаемое сырье используется для производства синтетических пластмасс?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['абсорбция']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>… – процесс разделения газовых смесей, основанный на избирательном поглощении отдельных компонентов сырья жидким поглотителем – абсорбентом. </Typography>          
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['метан']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как правило, к сухому газу относят …, а к жирному - этан, пропан, бутан и их изомеры. </Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['кокса', 'кокс']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каменный уголь применяют в основном для получения ... </Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'Бензин',
        isCorrect: false
      },
      {
        value: 'Керосин',
        isCorrect: false
      },
      {
        value: 'Этилен',
        isCorrect: true
      },
      {
        value: 'Пропилен',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие продукты получаются в процессе пиролиза нефти?</Typography>
        </>
      )
    }
  },
  {
    type: 'matchImages',
    answers: [
      {
        items: [
          {
            value: 'Углекислый газ',
            image: img1
          },
          {
            value: 'Бутан',
            image: img2
          },
          {
            value: 'Метан',
            image: img3
          },
          {
            value: 'Пентан',
            image: img4
          }
        ]
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите изображения с их названиями.</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'Углерод',
        isCorrect: true
      },
      {
        value: 'Азот',
        isCorrect: true
      },
      {
        value: 'Водород',
        isCorrect: true
      },
      {
        value: 'Пропан',
        isCorrect: false
      },
      {
        value: 'Бутан',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие элементы входят в состав нефти?</Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: [
      {
        pattern: 'Природный газ – смесь {}, добываемая из осадочных {} пород Земли.',
        value: ['углеродов', 'горных']
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
        pattern: '{} представляет собой сложную смесь углеводородов различной молекулярной массы, поэтому не имеет определённой температуры {}.',
        value: ['нефть', 'кипения']
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
        title: 'Подготовка угля'
      },
      {
        order: 2,
        title: 'Загрузка угля в коксовую батарею'
      },
      {
        order: 3,
        title: 'Нагрев без доступа воздуха (пиролиз)'
      },
      {
        order: 4,
        title: 'Выделение летучих веществ '
      },
      {
        order: 5,
        title: 'Охлаждение кокса'
      },
      {
        order: 6,
        title: 'Получение кокса'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Установить правильную последовательность при коксовании угля:</Typography>
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
    answersWithUid.push({...el, uid: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`});
  });
  item.answers = answersWithUid;
  if (item.type === "single" || item.type === "multiple" || item.type === "order") {
    item.answers = shuffleArray(item.answers);
  }
});

export default GameData;