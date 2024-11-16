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
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='h6' component="p" fontWeight={700} gutterBottom></Typography>
          <Box><img src={img1} alt="ДРЛ" style={{ width: '100%', maxWidth: 300 }} /></Box>
        </>
      )
    }
  },
  {
    type: 'input',
    answers: [
      {
        value: ['', '']
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
    type: 'input',
    answers: [
      {
        value: ['', '']
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