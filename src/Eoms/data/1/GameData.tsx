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
                value: 'перцептивная',
                isCorrect: false
            },
            {
                value: 'информационная',
                isCorrect: false
            },
            {
                value: 'коммуникативная',
                isCorrect: true
            },
            {
                value: 'интерактивная',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Медсестра рассказывает пациенту о правилах поведения в стационаре. Пациент узнает, что можно и нельзя делать. Какая это сторона общения?</Typography>
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
                value: 'контактная',
                isCorrect: true
            },
            {
                value: 'информационная',
                isCorrect: false
            },
            {
                value: 'побудительная',
                isCorrect: false
            },
            {
                value: 'функция понимания',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Благодаря общению каждый из нас может осознавать и фиксировать свое место в системе отношений. Какая это функция общения?</Typography>
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
                value: 'информационная',
                isCorrect: false
            },
            {
                value: 'контактная',
                isCorrect: true
            },
            {
                value: 'побудительная',
                isCorrect: false
            },
            {
                value: 'эмотивная',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Медицинская сестра здоровается с пациентом, узнает об его самочувствии и готовности к беседе. Какая это функция общения?</Typography>
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
                value: 'внутриличностное общение',
                isCorrect: true
            },
            {
                value: 'межличностное общение',
                isCorrect: false
            },
            {
                value: 'общественное общение',
                isCorrect: false
            },
            {
                value: 'самоанализирующее общение',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Общение человека с самим собой – это…?</Typography>
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
                value: 'Способность ясно выражать свои мысли',
                isCorrect: false
            },
            {
                value: 'Речь',
                isCorrect: true
            },
            {
                value: 'Мимика',
                isCorrect: false
            },
            {
                value: 'Голос',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Универсальным средством коммуникации и общения является:</Typography>
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
                value: 'оптико-кинетическая система',
                isCorrect: false
            },
            {
                value: 'паралингвистическая система',
                isCorrect: true
            },
            {
                value: 'экстралингвистическая система',
                isCorrect: false
            },
            {
                value: 'проксемика',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Качества голоса, его диапазона, тональности, фразовых и логических ударений, предпочитаемых конкретным человеком - это…?</Typography>
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
                value: 'жесты, мимика, пантомимика',
                isCorrect: true
            },
            {
                value: 'исследование зрительного контакта',
                isCorrect: false
            },
            {
                value: 'анализируются паузы в речи, покашливание, смех и сам темп речи',
                isCorrect: false
            },
            {
                value: 'пространство и время организации процесса общения',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Экстралингвистическая система – это…?</Typography>
                </>
            )
        }
    },
    {
        id: 7,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 20,
        answers: [
            {
                value: 'Закрытая, напряженная поза',
                isCorrect: false
            },
            {
                value: 'Открытая, расслабленная поза',
                isCorrect: true
            },
            {
                value: 'Контакт глаз средней интенсивности',
                isCorrect: true
            },
            {
                value: 'Прикосновения',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Отметьте, какие невербальные элементы выражают позитивное отношение к партнеру:</Typography>
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
                value: 'Аттракция',
                isCorrect: false
            },
            {
                value: 'Эмпатия',
                isCorrect: true
            },
            {
                value: 'Рефлексия',
                isCorrect: false
            },
            {
                value: 'Саморефлексия',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Умение сопереживать другому человеку, способность понимать его не столько умом, сколько сердцем, т.е. постижение эмоционального состояния другого человека – это…?</Typography>
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
                value: 'интимная',
                isCorrect: false
            },
            {
                value: 'личная (персональная)',
                isCorrect: true
            },
            {
                value: 'социальная',
                isCorrect: false
            },
            {
                value: 'публичная (официальная)',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Зона комфортности от 46 до 120 см называется:</Typography>
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
                value: 'Не всегда идут на контакт, забывают выполнять назначения, нередко капризны или досаждают бесчисленными жалобами',
                isCorrect: false
            },
            {
                value: 'Не в состоянии сообщить о своих ощущениях, жалобах. Медику необходимо взять анамнез у взрослых',
                isCorrect: false
            },
            {
                value: 'Боятся врачей, склонны скрывать страдания или вводить в заблуждение врача. Но они доверчивы, неопытны, при установлении контакта способны искренне верить врачу и этим помогают лечению',
                isCorrect: true
            },
            {
                value: 'Отрицание авторитетов, проявление самоутверждения личности, поиск собственного пути в жизни',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Отметьте, какая особенность общения соответствует детям старшего возраста:</Typography>
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
                value: 'Обмен знаниями, т.е. общение, связанное с различными видами познавательной или учебной деятельности (например, обучение пациента элементам самоухода или информирование о правильном приеме лекарственных препаратов)',
                isCorrect: true
            },
            {
                value: 'Обмен действиями, операциями, умениями, навыками, т.е. информация, совершенствующая и развивающая способности субъекта (например, обучение членов семьи пациента умению оказать ему доврачебную помощь при приступе бронхиальной астмы или формирование у пациентки навыка по самообследованию молочной железы)',
                isCorrect: false
            },
            {
                value: 'Обмен психическими или физиологическими состояниями; при данном общении один человек оказывает на другого влияние, рассчитанное на то, чтобы привести его в определенное физическое или психическое состояние и тем самым воздействовать на самочувствие (например, поднять настроение хорошей информацией или испортить плохим сообщением, успокоить человека или, наоборот, активизировать)',
                isCorrect: false
            },
            {
                value: 'Обмен продуктами и предметами деятельности, которые в свою очередь служат средством удовлетворения актуальных потребностей субъектов',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Когнитивному виду общения соответствует следующее определение:</Typography>
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
                value: 'Функция оказания влияния',
                isCorrect: true
            },
            {
                value: 'Информационная',
                isCorrect: false
            },
            {
                value: 'Побудительная',
                isCorrect: false
            },
            {
                value: 'Функция понимания',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Мы можем менять поведение, мнение, установки партнера. Какая это функция общения?</Typography>
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
                value: 'Косвенное',
                isCorrect: false
            },
            {
                value: 'Прямое',
                isCorrect: true
            },
            {
                value: 'Непосредственное',
                isCorrect: false
            },
            {
                value: 'Опосредованное',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какое общение подразумевает естественный контакт «лицом к лицу» при помощи вербальных (речевых) и невербальных (жесты, мимика, пантомимика) средств?</Typography>
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
                value: 'Пространство и время организации процесса общения',
                isCorrect: false
            },
            {
                value: 'Исследование зрительного контакта',
                isCorrect: false
            },
            {
                value: 'Качество голоса, его диапазон, тональность, фразовые и логические ударения, предпочитаемые конкретным человеком',
                isCorrect: false
            },
            {
                value: 'Жесты, мимика, пантомимика',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К оптико-кинетической системе относятся:</Typography>
                </>
            )
        }
    }
];

export default GameData