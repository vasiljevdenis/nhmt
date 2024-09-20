import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import img11 from '../../../assets/images/3/training7.webp';
import img12 from '../../../assets/images/3/training8.webp';
import img13 from '../../../assets/images/3/training9.webp';

interface Answer {
    value: string;
    isCorrect: boolean;
}
interface Test {
    id: number;
    title: string;
    type: string;
    score: number;
    answers: Answer[];
    content: () => ReactNode
}

const GameData: Test[] = [
    {
        id: 0,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 10,
        answers: [
            {
                value: 'при вдохе и выдохе',
                isCorrect: true
            },
            {
                value: 'только на вдохе',
                isCorrect: false
            },
            {
                value: 'только на выдохе',
                isCorrect: false
            },
            {
                value: 'во время задержки дыхания',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Хрипы можно услышать:</Typography>
                </>
            )
        }
    },
    {
        id: 1,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 10,
        answers: [
            {
                value: 'сбора анамнеза',
                isCorrect: true
            },
            {
                value: 'исследования сердечно-сосудистой системы',
                isCorrect: false
            },
            {
                value: 'исследования дыхательной системы',
                isCorrect: false
            },
            {
                value: 'выяснения жалоб пациента',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Исследование пациента начинается с (со):</Typography>
                </>
            )
        }
    },
    {
        id: 2,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 10,
        answers: [
            {
                value: 'неравенство диаметров зрачков',
                isCorrect: true
            },
            {
                value: 'широкие зрачки',
                isCorrect: false
            },
            {
                value: 'узкие зрачки',
                isCorrect: false
            },
            {
                value: 'отсутствие реакции зрачков на свет',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Анизокория – это:</Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 10,
        answers: [
            {
                value: 'пальпация',
                isCorrect: true
            },
            {
                value: 'перкуссия',
                isCorrect: true
            },
            {
                value: 'аускультация',
                isCorrect: true
            },
            {
                value: 'расспрос',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К объективным методам исследования относятся:</Typography>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 10,
        answers: [
            {
                value: 'при вдохе и выдохе',
                isCorrect: false
            },
            {
                value: 'только на вдохе',
                isCorrect: true
            },
            {
                value: 'только на выдохе',
                isCorrect: false
            },
            {
                value: 'во время задержки дыхания',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Крепитацию можно услышать:</Typography>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 20,
        answers: [
            {
                value: 'вынужденным',
                isCorrect: true
            },
            {
                value: 'активным',
                isCorrect: false
            },
            {
                value: 'пассивным',
                isCorrect: false
            },
            {
                value: 'положением «лежа»',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Положение, которое занимает пациент для облегчения состояния, называют:</Typography>
                </>
            )
        }
    },
    {
        id: 6,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 20,
        answers: [
            {
                value: 'бледные',
                isCorrect: true
            },
            {
                value: 'иктеричные',
                isCorrect: false
            },
            {
                value: 'цианотичные',
                isCorrect: false
            },
            {
                value: 'гиперемированные',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>При анемии кожные покровы:</Typography>
                </>
            )
        }
    },
    {
        id: 7,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 20,
        answers: [
            {
                value: 'локтевые',
                isCorrect: false
            },
            {
                value: 'надключичные',
                isCorrect: false
            },
            {
                value: 'подключичные',
                isCorrect: false
            },
            {
                value: 'подмышечные',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В норме обычно пальпируются лимфоузлы:</Typography>
                </>
            )
        }
    },
    {
        id: 8,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 20,
        answers: [
            {
                value: 'в межлопаточной области на уровне III – IV грудных позвонков',
                isCorrect: true
            },
            {
                value: 'в подключичных областях',
                isCorrect: false
            },
            {
                value: 'в подмышечных областях',
                isCorrect: false
            },
            {
                value: 'под углами лопаток',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>У здоровых людей бронхиальное дыхание выслушивается:</Typography>
                </>
            )
        }
    },
    {
        id: 9,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 20,
        answers: [
            {
                value: 'определение наличия патологического очага',
                isCorrect: true
            },
            {
                value: 'определение границ легких',
                isCorrect: false
            },
            {
                value: 'определение подвижности нижнего края легких',
                isCorrect: false
            },
            {
                value: 'определение верхушки легких',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Целью сравнительной перкуссии является:</Typography>
                </>
            )
        }
    },
    {
        id: 10,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 30,
        answers: [
            {
                value: 'астеник',
                isCorrect: true
            },
            {
                value: 'нормостеник',
                isCorrect: false
            },
            {
                value: 'гиперстеник',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Определите вид конституции тела по изображению</Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img11} alt="image" style={{ width: '100%', maxWidth: '300px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 11,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 30,
        answers: [
            {
                value: 'астеник',
                isCorrect: false
            },
            {
                value: 'нормостеник',
                isCorrect: false
            },
            {
                value: 'гиперстеник',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Определите вид конституции тела по изображению</Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img12} alt="image" style={{ width: '100%', maxWidth: '300px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 12,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 30,
        answers: [
            {
                value: 'астеник',
                isCorrect: false
            },
            {
                value: 'нормостеник',
                isCorrect: true
            },
            {
                value: 'гиперстеник',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Определите вид конституции тела по изображению</Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img13} alt="image" style={{ width: '100%', maxWidth: '300px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 13,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 30,
        answers: [
            {
                value: 'везикулярное дыхание',
                isCorrect: true
            },
            {
                value: 'ларинго-трахеальное дыхание',
                isCorrect: true
            },
            {
                value: 'хрип',
                isCorrect: false
            },
            {
                value: 'шум трения плевры',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что относится к основным дыхательным шумам?</Typography>
                </>
            )
        }
    },
    {
        id: 14,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 30,
        answers: [
            {
                value: 'хрип',
                isCorrect: true
            },
            {
                value: 'шум трения плевры',
                isCorrect: true
            },
            {
                value: 'везикулярное дыхание',
                isCorrect: false
            },
            {
                value: 'крепитация',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что относится к побочным дыхательным шумам?</Typography>
                </>
            )
        }
    }
];

export default GameData