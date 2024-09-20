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
                value: 'через прямую кишку',
                isCorrect: false
            },
            {
                value: 'сублингвальный',
                isCorrect: false
            },
            {
                value: 'на кожу, слизистые',
                isCorrect: true
            },
            {
                value: 'внутрикожный',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Наружный способ применения лекарственных средств</Typography>
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
                value: 'внутривенно - капельно',
                isCorrect: true
            },
            {
                value: 'через прямую кишку',
                isCorrect: false
            },
            {
                value: 'через зонд в желудок',
                isCorrect: false
            },
            {
                value: 'под язык',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Один из способов парентерального поступления лекарственных веществ в организм предусматривает их введение</Typography>
                </>
            )
        }
    },
    {
        id: 2,
        title: 'Выберите несколько правильных ответов',
        type: 'miltiple',
        score: 10,
        answers: [
            {
                value: 'внутримышечный',
                isCorrect: false
            },
            {
                value: 'пероральный (через рот)',
                isCorrect: true
            },
            {
                value: 'внутривенный',
                isCorrect: false
            },
            {
                value: 'сублингвальный',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Энтеральным следует назвать способ введения лекарств</Typography>
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
                value: 'быстрота действия, точность дозировки',
                isCorrect: false
            },
            {
                value: 'возможность рассчитать максимальную концентрацию лекарственного вещества в плазме крови',
                isCorrect: false
            },
            {
                value: 'препараты поступает в кровоток, минуя печень, не разрушаются',
                isCorrect: true
            },
            {
                value: 'не раздражают слизистую желудка',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К преимуществу ректального пути введения лекарств относятся</Typography>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 10,
        answers: [
            {
                value: 'поступление лекарственного средства в кровь в неизмененном виде',
                isCorrect: true
            },
            {
                value: 'медленное всасывание',
                isCorrect: false
            },
            {
                value: 'возможность создания «депо» препарата в месте инъекции',
                isCorrect: false
            },
            {
                value: 'быстрое развитие терапевтического эффекта',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К преимуществу парентерального пути введения пути введения лекарств относятся</Typography>
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
                value: 'в прямую кишку',
                isCorrect: false
            },
            {
                value: 'в дыхательные пути',
                isCorrect: false
            },
            {
                value: 'под язык',
                isCorrect: true
            },
            {
                value: 'на кожу',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Сублингвальный путь введения лекарственных веществ – это введение</Typography>
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
                value: 'в ротовой полости',
                isCorrect: false
            },
            {
                value: 'в желудке',
                isCorrect: false
            },
            {
                value: 'в тонком кишечнике',
                isCorrect: true
            },
            {
                value: 'в толстом кишечнике',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Где в основном происходят, всасывание большей части лекарственных средств</Typography>
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
                value: 'в дыхательные пути',
                isCorrect: true
            },
            {
                value: 'под язык',
                isCorrect: false
            },
            {
                value: 'в ткани',
                isCorrect: false
            },
            {
                value: 'на слизистые оболочки',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>К ингаляционному способу относится введения лекарственных средств</Typography>
                </>
            )
        }
    },
    {
        id: 8,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 20,
        answers: [
            {
                value: 'существует вероятность инфицирования пациента',
                isCorrect: true
            },
            {
                value: 'медленное всасывание',
                isCorrect: false
            },
            {
                value: 'возможность развития контактного дерматита',
                isCorrect: false
            },
            {
                value: 'необходимость участия квалифицированного медицинского персонала',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Недостаток инъекционного применения лекарственных средств</Typography>
                </>
            )
        }
    },
    {
        id: 9,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 20,
        answers: [
            {
                value: 'применяют в острых состояниях',
                isCorrect: true
            },
            {
                value: 'не требуют профессиональных знаний',
                isCorrect: true
            },
            {
                value: 'лекарственные средства быстро поступают в кровь',
                isCorrect: true
            },
            {
                value: 'всасывающая поверхность подъязычной области очень мала',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Преимущества сублингвального способа применения лекарственных средств</Typography>
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
                value: 'Жанэ',
                isCorrect: true
            },
            {
                value: 'Люэра',
                isCorrect: false
            },
            {
                value: 'Боброва',
                isCorrect: false
            },
            {
                value: 'Рекорд',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Шприц, используемый для промывания полостей:</Typography>
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
                value: 'миллиметрах',
                isCorrect: false
            },
            {
                value: 'сантиметрах',
                isCorrect: false
            },
            {
                value: 'литрах',
                isCorrect: false
            },
            {
                value: 'миллилитрах',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Доза лекарственного средства для инъекционного введения выражается в:</Typography>
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
                value: 'лечащий врач',
                isCorrect: true
            },
            {
                value: 'главный врач',
                isCorrect: false
            },
            {
                value: 'старшая медицинская сестра',
                isCorrect: false
            },
            {
                value: 'палатная медицинская сестра',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Способ введения лекарственного вещества определяет:</Typography>
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
                value: 'самостоятельно',
                isCorrect: false
            },
            {
                value: 'в присутствии родственников',
                isCorrect: false
            },
            {
                value: 'в присутствии медсестры',
                isCorrect: true
            },
            {
                value: 'в присутствии пациентов',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Укажите, как осуществляется прием лекарственных средств пациентом:</Typography>
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
                value: 'инсулина',
                isCorrect: true
            },
            {
                value: 'вакцины',
                isCorrect: false
            },
            {
                value: 'гепарина',
                isCorrect: false
            },
            {
                value: 'глюкозы',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Шприц – ручка используется для подкожного введения</Typography>
                </>
            )
        }
    }
];

export default GameData