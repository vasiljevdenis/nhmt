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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
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