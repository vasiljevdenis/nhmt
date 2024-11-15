import { Box, Typography } from '@mui/material';
import { shuffleArray } from '../../../helpers/shuffleArray';
import { Answer, Test } from '../../../types/trainingTypes';
import img3 from '@images/training3.webp';
import img5 from '@images/training5.webp';
import img8 from '@images/training8.webp';
import img9 from '@images/training9.webp';

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
        value: 'рабочее',
        isCorrect: true
      },
      {
        value: 'аварийное',
        isCorrect: false
      },
      {
        value: 'ремонтное',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как называется освещение для обеспечения нормальной деятельности предприятия?</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['тепловые', 'тепловой', 'тепловому']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К какому типу источников света относятся лампы накаливания?</Typography>
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
        isCorrect: false
      },
      {
        value: 'колба, покрытая люминофором',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой элемент дуговой ртутной лампы указан под цифрой 1?</Typography>
          <Box><img src={img3} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'источник света',
        isCorrect: false
      },
      {
        value: 'светильник',
        isCorrect: false
      },
      {
        value: 'осветительная электроустановка',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Электротехническая установка, предназначенная для искусственного освещения объектов – это …</Typography>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['компактная люминесцентная', 'люминесцентная', 'люминесцентная лампа']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Введите название лампы, изображенной на рисунке.</Typography>
          <Box><img src={img5} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'белым',
        isCorrect: false
      },
      {
        value: 'синим',
        isCorrect: false
      },
      {
        value: 'красным',
        isCorrect: false
      },
      {
        value: 'желто-зеленым',
        isCorrect: true
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каким цветом принято обозначать провод заземления?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'в фазный',
        isCorrect: true
      },
      {
        value: 'в нулевой',
        isCorrect: false
      },
      {
        value: 'в провод заземления',
        isCorrect: false
      },
      {
        value: 'в любой из указанных проводов',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В какой провод устанавливают выключатель?</Typography>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'в распределительных коробках',
        isCorrect: false
      },
      {
        value: 'звезда',
        isCorrect: false
      },
      {
        value: 'шлейф',
        isCorrect: true
      },
      {
        value: 'последовательная',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой тип разводки розеток, показан на рисунке?</Typography>
          <Box><img src={img8} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'нулевые рабочие',
        isCorrect: true
      },
      {
        value: 'нулевые защитные',
        isCorrect: false
      },
      {
        value: 'фазные',
        isCorrect: false
      },
      {
        value: 'коммутируемая клемма',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие провода присоединены к клемме 3 распределительной коробке, приведенной на рисунке?</Typography>
          <Box><img src={img9} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'single',
    answers: [
      {
        value: 'оперативные переключения',
        isCorrect: true
      },
      {
        value: 'оперативное управление',
        isCorrect: false
      },
      {
        value: 'оперативное ведение',
        isCorrect: false
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>… – действия с коммутационными аппаратами, имеющие целью изменение схемы электроустановки или состояния оборудования.</Typography>
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