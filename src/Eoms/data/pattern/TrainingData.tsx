import { Box, Typography } from '@mui/material';
import { shuffleArray } from '../../../helpers/shuffleArray';
import { Answer, Test } from '../../../types/gameTypes';
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
        value: ['накаливания', 'лампа накаливания', 'накаливания лампа']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К какому типу источников света относятся лампы накаливания?</Typography>
          <Box><img src={img6} alt="Лампа" style={{ width: '100%', maxWidth: 300 }} /></Box>
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
          <Box><img src={img3} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
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
          <Box><img src={img4} alt="Схема" style={{ width: '100%', maxWidth: 300 }} /></Box>
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
    answers: [
      {
        value: ['накаливания', 'лампа накаливания', 'накаливания лампа']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите название лампы, изображенной на рисунке.</Typography>
          <Box><img src={img6} alt="Лампа" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['конденсатор']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>На какой элемент на схеме включения люминесцентной лампы указывает стрелка?</Typography>
          <Box><img src={img7} alt="image" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['галогенная', 'галогенная лампа', 'лампа галогенная']
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите название лампы, изображенной на рисунке.</Typography>
          <Box><img src={img8} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['синий', 'синим']
      }

    ],
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
    answers: [
      {
        value: ['компактная люминесцентная', 'люминесцентная компактная', 'люминесцентная', 'люминесцентная лампа']
      }

    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите название лампы, изображенной на рисунке.</Typography>
          <Box><img src={img10} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
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
    answers: [
      {
        pattern: 'При техническом обслуживании осветительной электроустановки проверяют надежность имеющихся в установке контактов: ослабленные контакты необходимо {}, а обгоревшие — {} или {}.',
        value: ['затянуть', 'зачистить', 'заменить']
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
    type: 'multipleInput',
    answers: [
      {
        pattern: 'В результате осмотра контактора выявлено подгорание силовых контактов, поэтому контакты необходимо {} с помощью {}.',
        value: ['зачистить', 'надфиля']
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

TrainingData.forEach((item, index) => {
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

export default TrainingData;