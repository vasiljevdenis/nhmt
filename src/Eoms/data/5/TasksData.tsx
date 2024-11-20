import { Box, Typography } from '@mui/material';
import { shuffleArray } from '../../../helpers/shuffleArray';
import { Answer, Test } from '../../../types/tasksTypes';
import img1 from '@images/tasks1.webp';
import img2 from '@images/tasks2.webp';

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

const TasksData: Test[] = [
  {
    type: 'single',
    answers: [
      {
        value: 'Свободно-радикальный механизм через промежуточное образование карбокатионов',
        isCorrect: false
      },
      {
        value: 'Ионный механизм',
        isCorrect: false
      },
      {
        value: 'Ионный механизм через промежуточное образование карбокатионов',
        isCorrect: true
      },
      {
        value: 'Свободно-радикальный механизм',
        isCorrect: false
      },
      {
        value: 'Ионный механизм с разрывом углерод-углеродной связи',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Механизм протекания реакции изомеризации:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'боразол',
        isCorrect: true
      },
      {
        value: 'стирол',
        isCorrect: false
      },
      {
        value: 'фенол',
        isCorrect: false
      },
      {
        value: 'ацетон',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как называется один из неорганических ароматических соединений?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'используется',
        isCorrect: false
      },
      {
        value: 'не используется',
        isCorrect: true
      },
      {
        value: 'используется, при охлаждении парафинов аммиаком',
        isCorrect: false
      },
      {
        value: 'используется, если в составе низших парафинов отсутствуют газообразные и высшие парафины',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Способ кристаллизации используется для выделения низших парафинов?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'низкие и высокие парафины',
        isCorrect: false
      },
      {
        value: 'низшие и высшие парафины',
        isCorrect: true
      },
      {
        value: 'непредельные и высокие парафины',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Группы подразделения парафинов:</Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: [
      {
        pattern: 'Изомеризация парафинов является дополнительным источником получения {} и {}.',
        value: ['изобутана', 'изопентана']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Введите пропущенные слова:</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'гексен',
        isCorrect: true
      },
      {
        value: 'гептен',
        isCorrect: true
      },
      {
        value: 'додекан',
        isCorrect: true
      },
      {
        value: 'пропилен',
        isCorrect: false
      },
      {
        value: 'бутен',
        isCorrect: false
      },
      {
        value: 'изобутен',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что относится к высшим олефинам?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['ксилол, толуол, бензол', 'ксилол толуол бензол']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Три основных ароматических углеводорода?</Typography>          
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'больше 50',
        isCorrect: true
      },
      {
        value: 'меньше 40',
        isCorrect: false
      },
      {
        value: 'от 40 до 50',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Температура плавления твердого парафина (°C)?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'верны оба варианта',
        isCorrect: false
      },
      {
        value: 'верный первый вариант ответа',
        isCorrect: true
      },
      {
        value: 'верный второй вариант ответа',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Температура плавления мягкого парафина (°C): <br /> 1) меньше 40; 2) от 40 до 50</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: '50 мета-, 34 пара- и 16 ортоизомера',
        isCorrect: false
      },
      {
        value: '60 мета-, 24 пара- и 16 ортоизомера',
        isCorrect: true
      },
      {
        value: '60 мета-, 4 пара- и 36 ортоизомера',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В равновесной смеси при температуре 25-75°C содержится (в %) ... </Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'да, является обратимым процессом',
        isCorrect: true
      },
      {
        value: 'нет, процесс является не обратимым',
        isCorrect: false
      },
      {
        value: 'да, является обратимым процессом, только в условиях повышенных температур',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Изомеризация гомологов бензола относится к обратимым процессам?</Typography>
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
            value: 'Технологическая схема получения ацетилена окислительным пиролизом метана',
            image: img1
          },
          {
            value: 'Технологическая схема окислительной конверсии природного газа',
            image: img2
          }
        ]
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите изображения с их названиями</Typography>
        </>
      )
    }
  },
  {
    type: 'multipleInput',
    answers: [
      {
        pattern: '{} — бесцветный газ, обладающий в чистом виде слабым эфирным запахом; конденсируется при -83,8°С (0,102 МПа); критическая температура + {}°C (~целое число); критическое давление 6,04 МПа.',
        value: ['ацетилен', '35']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Введите недостающие слова:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'нет, не способны',
        isCorrect: false
      },
      {
        value: 'да, способны сорбироваться',
        isCorrect: true
      },
      {
        value: 'да, способны при высоких температурах и пониженном давлении',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Ароматические углеводороды способны сорбироваться твердыми адсорбентами?</Typography>
        </>
      )
    }
  },
  {
    type: 'order',
    answers: [
      {
        order: 1,
        title: 'Кислород и метан подогревают до 600–700 °C в трубчатых печах 1,2, имеющих топки для сжигания природного газа. В реакторе 3 протекает процесс пиролиза. Газы выходят из него после «закалки» водой при 800 °C и проходят через полый водяной скруббер 4 и мокропленочный электрофильтр 5 для улавливания сажи'
      },
      {
        order: 2,
        title: 'Газы охлаждают водой в холодильнике 6, после чего их промывают в форабсорбере 7 небольшим количеством диметилформамида (ДМФА) и направляют в газгольдер 8. Вода, стекающая из гидравлического затвора реактора и из сажеулавливающих аппаратов, содержит 2–3 % сажи и малолетучие ароматические соединения. Она поступает в отстойник 9, с верха которого сажу и смолы собирают скребками и направляют на сжигание'
      },
      {
        order: 3,
        title: 'Воду из отстойника возвращают в реактор как «закалочный агент», а её избыток направляют на очистку, создавая замкнутую систему водооборота без сброса токсичных сточных вод'
      },
      {
        order: 4,
        title: 'Газ из газгольдера 8 сжимается компрессором 10 до давления 1 МПа. В абсорбере 11 он промывается ДМФА, а непоглощённый газ (H₂, CH₄, CO, CO₂) проходит через скруббер 12. При орошении водным конденсатом улавливается растворитель. Этот газ можно использовать в качестве синтез-газа или топлива'
      },
      {
        order: 5,
        title: 'Раствор в кубе абсорбера 11 содержит ацетилен и его гомологи, а также CO₂ с примесью других газов. Он проходит дроссельный вентиль 13 и поступает в десорбер 14 первой ступени. За счёт снижения давления до 0,15 МПа и нагревания куба до 400 °C из раствора десорбируется ацетилен и менее растворимые газы'
      },
      {
        order: 6,
        title: 'Ацетилен, поднимаясь вверх, вытесняет из раствора CO₂, который вместе с другими газами и частью ацетилена выходит с верха десорбера. Газы предварительно отмываются от растворителя водным конденсатом и возвращаются на компримирование'
      },
      {
        order: 7,
        title: 'Концентрированный ацетилен выводят из средней части десорбера 14, промывают в скруббере 15 водой и через огнепреградитель 16 выводят с установки'
      },
      {
        order: 8,
        title: 'Кубовую жидкость десорбера 14, содержащую некоторое количество ацетилена и его гомологов, направляют в десорбер 18, предварительно подогревая в теплообменнике 17'
      },
      {
        order: 9,
        title: 'За счёт нагревания куба до 100 °C из раствора отгоняются все газы. Из средней части колонны выходят гомологи ацетилена, направляемые на сжигание, а с верха — ацетилен с примесью его гомологов, который возвращается в десорбер первой ступени. В растворителе постепенно накапливаются вода и полимеры, которые удаляют на установке регенерации'
      },
      {
        order: 10,
        title: 'Полученный на установке концентрированный ацетилен содержит 99–99,5 % основного вещества с примесями метилацетилена и углекислого газа'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Установите правильную последовательность получения ацетилена окислительным пиролизом метана:</Typography>
          <Box><img src={img1} alt="Получение ацетилена окислительным пиролизом метана" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  }
];

TasksData.forEach((item, index) => {
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

export default TasksData;