import { Box, Typography } from '@mui/material';
import { shuffleArray } from '../../../helpers/shuffleArray';
import { Answer, Test } from '../../../types/trainingTypes';
import img1 from '@images/training1.webp';

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

const TrainingData: Test[] = [
  {
    type: 'single',
    answers: [
      {
        value: 'рано утром, для точного обнаружения неисправности опоры ВЛ',
        isCorrect: false
      },
      {
        value: 'днём, для подетальной и тщательной проверки состояния всех элементов ВЛ и её трассы',
        isCorrect: true
      },
      {
        value: 'вечером, для исключения вмешательства в осмотр посторонних лиц',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Периодические осмотры ВЛ производятся:</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['1']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>… м – расстояние, которое необходимо соблюдать между проводами ВЛ и кронами деревьев? Введите цифру.</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'устанавливают фарфоровые воронки',
        isCorrect: true
      },
      {
        value: 'изоляционные втулки',
        isCorrect: false
      },
      {
        value: 'распределительные коробки',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что устанавливают на концах изоляционных трубок снаружи зданий:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'пояс стойки опоры',
        isCorrect: false
      },
      {
        value: 'стержни-раскосы',
        isCorrect: false
      },
      {
        value: 'траверса',
        isCorrect: true
      },
      {
        value: 'диафрагма',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что обозначено под цифрой 4 на рисунке?</Typography>
          <Box><img src={img1} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['18']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К верхолазным работам по монтажу воздушных линий допускаются лица с … лет. Введите цифру.</Typography>
        </>
      )
    }
  },
  {
    type: 'multiple',
    answers: [
      {
        value: 'возрастом до 60 лет',
        isCorrect: true
      },
      {
        value: 'с тарифным разрядом не ниже шестого',
        isCorrect: true
      },
      {
        value: 'обучающиеся в возрасте 17 лет и старше',
        isCorrect: true
      },
      {
        value: 'с тарифным разрядом не ниже восьмого',
        isCorrect: false
      },
      {
        value: 'возрастом до 45 лет',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К верхолазным работам по монтажу воздушных линий допускаются лица:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'ветре 10 м/с',
        isCorrect: false
      },
      {
        value: 'ветре 12 м/с',
        isCorrect: true
      },
      {
        value: 'ветре 14 м/с',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Бригады, выезжающие на работы на ВЛ, должны прекратить работы при:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'оттяжками',
        isCorrect: true
      },
      {
        value: 'тросами',
        isCorrect: false
      },
      {
        value: 'кронштейнами',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Во избежание отклонения и падения опоры в сторону делается регулировка ее положения:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'обрыва провода ВЛ',
        isCorrect: false
      },
      {
        value: 'повреждения соединений проводов и тросов',
        isCorrect: false
      },
      {
        value: 'приближающегося перекрытия и требует принятия срочных мер по очистке или замене изоляции',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Наличие на изоляторах разрядов желтого или белого цвета, временами охватывающих всю гирлянду изолирующей подвески, является признаком:</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'центрифугированные и вибрированные',
        isCorrect: true
      },
      {
        value: 'центрифигурированные и гидроизоляционные',
        isCorrect: false
      },
      {
        value: 'вибрированные и цилиндрические',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>По способу изготовления стойки железобетонных опор бывают:</Typography>
        </>
      )
    }
  }
];

TrainingData.forEach((item, index) => {
  item.id = index;
  item.title = getTaskLabel(item.type);
  item.score = 10;
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

export default TrainingData;