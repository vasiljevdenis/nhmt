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
        value: 'Изолятор',
        isCorrect: false
      },
      {
        value: 'Траверсы',
        isCorrect: false
      },
      {
        value: 'Воздушная линия электропередачи',
        isCorrect: true
      },
      {
        value: 'Опора',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Устройство, предназначенное для передачи или распределения электрической энергии по проводам:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'линия сверхвысокого класса напряжения',
        isCorrect: true
      },
      {
        value: 'линия переменного тока',
        isCorrect: false
      },
      {
        value: 'линия сверхдальнего напряжения',
        isCorrect: false
      },
      {
        value: 'линия ультравысокого класса напряжения',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Воздушная линия электропередач мощностью от 330-750 кВ называется:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Центровой знак',
        isCorrect: false
      },
      {
        value: 'Пролёт',
        isCorrect: false
      },
      {
        value: 'Угол поворота линии',
        isCorrect: false
      },
      {
        value: 'Пикеты',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Отрезок, на которые разбита трасса ВЛ:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Производственный пикетаж',
        isCorrect: false
      },
      {
        value: 'Шлейф',
        isCorrect: false
      },
      {
        value: 'Фундамент опоры',
        isCorrect: true
      },
      {
        value: 'Пролёт',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Конструкция, заделанная в грунт или опирающаяся на него и передающая ему нагрузку от опоры, изоляторов, проводов (тросов) и от внешних воздействий:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'Берёза, ольха',
        isCorrect: false
      },
      {
        value: 'Пихта, орешник',
        isCorrect: false
      },
      {
        value: 'Ель, пихта',
        isCorrect: true
      },
      {
        value: 'Рябина, осина',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Из каких пород дерева можно изготавливать элементы опор ВЛ 35 кВ:</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'по вертикали 40 — 60 см, по горизонтали 20 — 40 см',
        isCorrect: false
      },
      {
        value: 'по вертикали 20 — 40 см, по горизонтали 40 — 60 см',
        isCorrect: true
      },
      {
        value: 'по вертикали 40 — 60 см, по горизонтали 50 — 1м',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие варианты ответов неверны? Расстояние между проводами на ответвительной опоре составляет:</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['ниже']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Нулевой провод располагают … фазовых проводов.</Typography>          
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['750']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>ВЛ высокого класса напряжений имеет мощность выше … кВ.</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['cтрела провеса']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Вертикальное расстояние между низшей точкой провода в пролёте и прямой, соединяющей точки его крепления на опорах?</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'Проведение инструктажа для всех работников на объекте',
        isCorrect: true
      },
      {
        value: 'Использование специальной техники для подъема персонала на опоры',
        isCorrect: true
      },
      {
        value: 'Отключение всей линии электропередачи на период ремонта',
        isCorrect: true
      },
      {
        value: 'Привлечение подрядных организаций без проверки их квалификации',
        isCorrect: false
      },
      {
        value: 'Наличие аварийного комплекта для устранения нештатных ситуаций',
        isCorrect: false
      },
      {
        value: 'Составление плана по обеспечению безопасности труда',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие из перечисленных мероприятий являются обязательными при организации ремонта воздушных линий электропередачи напряжением до 110 кВ?</Typography>
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
            value: 'Фундамент опоры',
            image: img1
          },
          {
            value: 'Шлейф',
            image: img2
          },
          {
            value: 'Пролёт',
            image: img3
          },
          {
            value: 'Производственный пикетаж',
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
        value: 'По роду тока',
        isCorrect: true
      },
      {
        value: 'По назначению',
        isCorrect: true
      },
      {
        value: 'По напряжению',
        isCorrect: true
      },
      {
        value: 'По внешнему виду',
        isCorrect: false
      },
      {
        value: 'По количеству пролетов',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие варианты в классификации ВЛ существуют? </Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: [
      {
        pattern: 'На ВЛ {} кВ применяются {} металлические опоры.',
        value: ['0,4', 'многогранные']
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
        pattern: 'Графики {} осмотров ВЛ утверждаются главным инженером {} (аббревиатура).',
        value: ['периодических', 'пэс']
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
        title: 'Подготовительные работы изоляторов, сцепной арматуры и других материалов'
      },
      {
        order: 2,
        title: 'Развозка опор по трассе к пикетам, металлоконструкций, вывозка проводов'
      },
      {
        order: 3,
        title: 'Сборка опор, т.е. их оснастка траверсами, крюками или штырями, изоляторами, а также выполнение заземления'
      },
      {
        order: 4,
        title: 'Установка опор с выполнением земляных работ (бурение котлованов), их закрепление и монтаж заземления'
      },
      {
        order: 5,
        title: 'Раскатка проводов и подъем их на опоры, соединение проводов'
      },
      {
        order: 6,
        title: 'Натягивание, визирование и закрепление проводов на опорах'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Установить правильную последовательность при ремонте воздушных линий:</Typography>
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