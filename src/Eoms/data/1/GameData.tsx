import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface Answer {
  value: string;
  isCorrect: boolean;
}
interface Test {
  id?: number;
  title?: string;
  type: 'single' | 'multiple' | 'input' | 'multipleInput' | 'inputAnswer' | 'matchIamges' | 'order';
  score?: number;
  answers: Answer[];
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
  } else if (type === "matchIamges") {
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      }
    ],
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
    answers: [
      {
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
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
    type: 'input',
    answers: [
      {
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      }
    ],
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
    answers: [
      {
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      }
    ],
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      }
    ],
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
    answers: [
      {
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      }
    ],
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
        value: '',
        isCorrect: true
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
      },
      {
        value: '',
        isCorrect: false
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
});

export default GameData;