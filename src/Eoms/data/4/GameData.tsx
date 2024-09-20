import { Typography } from '@mui/material';
import { ReactNode } from 'react';

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
                value: 'внутренним',
                isCorrect: true
            },
            {
                value: 'венозным',
                isCorrect: false
            },
            {
                value: 'брюшным',
                isCorrect: false
            },
            {
                value: 'местным',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Кровотечение, при котором кровь скапливается в полости тела, называется:</Typography>
                </>
            )
        }
    },
    {
        id: 1,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 10,
        answers: [
            {
                value: 'викасол',
                isCorrect: false
            },
            {
                value: 'гемостатическая губка',
                isCorrect: true
            },
            {
                value: 'нативная плазма',
                isCorrect: false
            },
            {
                value: 'фибринная изогенная пленка',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Биологическое средство местного применения для остановки кровотечения:</Typography>
                </>
            )
        }
    },
    {
        id: 2,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 10,
        answers: [
            {
                value: 'электрокоагуляция',
                isCorrect: true
            },
            {
                value: 'наложения шва на сосуд',
                isCorrect: false
            },
            {
                value: 'холод',
                isCorrect: true
            },
            {
                value: 'горячий изотонический NaСl',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Физический метод окончательной остановки кровотечения</Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 10,
        answers: [
            {
                value: 'внутреннем кровотечении',
                isCorrect: false
            },
            {
                value: 'поверхностных ранениях',
                isCorrect: true
            },
            {
                value: 'любых ранениях конечности',
                isCorrect: false
            },
            {
                value: 'глубоких ранениях',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Уменьшения кровотечения приданием возвышенного положения поврежденной конечности главным образом применяется при:</Typography>
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
                value: 'выше на 10-15 см раны',
                isCorrect: false
            },
            {
                value: 'ниже на 10-15 см раны',
                isCorrect: true
            },
            {
                value: 'выше на 25-30 см раны',
                isCorrect: false
            },
            {
                value: 'ниже на 25-30 см раны',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В каком месте накладывается жгут для остановки венозного кровотечения:</Typography>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 20,
        answers: [
            {
                value: 'при капиллярном кровотечении',
                isCorrect: false
            },
            {
                value: 'при венозном кровотечении',
                isCorrect: true
            },
            {
                value: 'при артериальном кровотечении',
                isCorrect: true
            },
            {
                value: 'при паренхиматозном кровотечении',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Жгут накладывается:</Typography>
                </>
            )
        }
    },
    {
        id: 6,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 20,
        answers: [
            {
                value: 'фамилию, имя, отчество пострадавшего, время получения ранения',
                isCorrect: false
            },
            {
                value: 'дату и точное время (часы и минуты) наложения жгута',
                isCorrect: true
            },
            {
                value: 'дату, время наложения жгута, а также фамилию, имя отечество наложившего жгут',
                isCorrect: false
            },
            {
                value: 'дату наложения жгута',
                isCorrect: false
            },
            {
                value: 'фамилию, имя, отчество пострадавшего',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какую информацию необходимо указать в записке, прикрепляемой к жгуту:</Typography>
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
                value: 'придание возвышенного положения конечности, наложение асептической повязки',
                isCorrect: false
            },
            {
                value: 'пальцевое прижатие, максимальное сгибание конечности, наложение жгута (закрутки), наложение давящей повязки',
                isCorrect: true
            },
            {
                value: 'частичное сгибание конечности, наложение пластыря, наложение давящей повязки',
                isCorrect: false
            },
            {
                value: 'частичное сгибание конечности, наложение давящей повязки',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите способы временной остановки кровотечения:</Typography>
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
                value: 'наложить жгут',
                isCorrect: false
            },
            {
                value: 'закрыть рану сдавливающей повязкой',
                isCorrect: false
            },
            {
                value: 'артерию зажать пальцем выше раны',
                isCorrect: false
            },
            {
                value: 'артерию зажать пальцем ниже раны',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как быстро остановить кровотечение из сонной артерии:</Typography>
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
                value: 'обезболивание',
                isCorrect: false
            },
            {
                value: 'вызов скорой помощи',
                isCorrect: false
            },
            {
                value: 'временная остановка крови',
                isCorrect: true
            },
            {
                value: 'психологическая поддержка пострадавшего',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какую цель преследует первая медицинская помощь при кровотечениях на месте происшествия?</Typography>
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
                value: 'брадикардия',
                isCorrect: false
            },
            {
                value: 'повышение температуры тела',
                isCorrect: false
            },
            {
                value: 'бледность кожных покровов',
                isCorrect: true
            },
            {
                value: 'гиперемия кожи',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Характерный признак внутреннего кровотечения:</Typography>
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
                value: 'венозное и внутреннее',
                isCorrect: false
            },
            {
                value: 'артериальное и капиллярное',
                isCorrect: false
            },
            {
                value: 'наружное и внутреннее',
                isCorrect: true
            },
            {
                value: 'смешанное и венозное',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>На какие типы разделяются кровотечения в зависимости от места возникновения?</Typography>
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
                value: 'внутренним',
                isCorrect: true
            },
            {
                value: 'капиллярным',
                isCorrect: false
            },
            {
                value: 'смешанным',
                isCorrect: false
            },
            {
                value: 'наружным',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Излитие крови во внутренние органы, полости, ткани называется кровотечением:</Typography>
                </>
            )
        }
    },
    {
        id: 13,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 30,
        answers: [
            {
                value: 'капиллярное',
                isCorrect: false
            },
            {
                value: 'венозное',
                isCorrect: true
            },
            {
                value: 'артериальное',
                isCorrect: false
            },
            {
                value: 'внутреннее',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Человек получил ранение и у него идет кровь темно-красного цвета, льется непрерывной струей. Как называется такое кровотечение?</Typography>
                </>
            )
        }
    },
    {
        id: 14,
        title: 'Выберите один правильный ответ',
        type: 'single',
        score: 30,
        answers: [
            {
                value: 'артерия',
                isCorrect: true
            },
            {
                value: 'вена',
                isCorrect: false
            },
            {
                value: 'мелкие капилляры',
                isCorrect: false
            },
            {
                value: 'внутренние органы',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой сосуд поврежден, если у человека при ранении фонтанирует ярко-красная кровь?</Typography>
                </>
            )
        }
    }
];

export default GameData