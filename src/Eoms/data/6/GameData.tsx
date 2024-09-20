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
                value: 'на пассажирские и грузовые',
                isCorrect: false
            },
            {
                value: 'на грузовые и специальные',
                isCorrect: false
            },
            {
                value: 'на пассажирские, грузовые, грузопассажирские и специальные',
                isCorrect: true
            },
            {
                value: 'на пассажирские специальные',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>По назначению кузова автомобилей делятся:</Typography>
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
                value: 'лучшей адгезии грунтовки',
                isCorrect: false
            },
            {
                value: 'упрочнения металла в месте сварки',
                isCorrect: false
            },
            {
                value: 'предохранения их от коррозии',
                isCorrect: false
            },
            {
                value: 'упрочнения места сварки и придания ему необходимого профиля',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Проковка и зачистка сварных швов необходима для:</Typography>
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
                value: 'для защиты деталей автомобиля от разрушения из-за атмосферных воздействий и придания ему декоративного вида',
                isCorrect: true
            },
            {
                value: 'для защиты деталей автомобиля от коррозии и механических повреждений',
                isCorrect: false
            },
            {
                value: 'для защиты деталей автомобиля от атмосферных воздействий и разрушений из-за усталости металла',
                isCorrect: false
            },
            {
                value: 'для придания автомобилю декоративного вида',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Лакокрасочные покрытия предназначены:</Typography>
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
                value: 'закрытый двухдверный кузов с двумя рядами сидений',
                isCorrect: false
            },
            {
                value: 'закрытый четырехдверный кузов с двумя рядами сидений',
                isCorrect: true
            },
            {
                value: 'закрытый четырех или шестидверный кузов с двумя-тремя рядами сидений',
                isCorrect: false
            },
            {
                value: 'закрытый кузов с дополнительной задней дверью',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Легковой автомобиль типа седан имеет:</Typography>
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
                value: 'конструктивные и производственные дефекты',
                isCorrect: false
            },
            {
                value: 'конструктивные дефекты и механические повреждения',
                isCorrect: false
            },
            {
                value: 'производственные дефекты и износы',
                isCorrect: false
            },
            {
                value: 'конструктивные и производственные дефекты, механические повреждения и износы',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Характерными повреждениями кузовов являются:</Typography>
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
                value: 'коррозионные повреждения',
                isCorrect: false
            },
            {
                value: 'коррозионные повреждения, механические повреждения, нарушения геометрических размеров, трещины, разрушения сварных соединений',
                isCorrect: true
            },
            {
                value: 'механические повреждения',
                isCorrect: false
            },
            {
                value: 'коррозионные и механические повреждения',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Дефектами деталей кузовов и кабин являются:</Typography>
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
                value: 'антикоррозийной защиты кузова и кабины',
                isCorrect: false
            },
            {
                value: 'повышения адгезии с красками',
                isCorrect: false
            },
            {
                value: 'повышения адгезии с эмалями',
                isCorrect: false
            },
            {
                value: 'в качестве первого слоя, обеспечивающего прочное сцепление их с поверхностью окрашиваемого металла и с последующими слоями лакокрасочных покрытий',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Грунтовки применяют для:</Typography>
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
                value: 'стоек, нижнего основания, пола и крыши',
                isCorrect: false
            },
            {
                value: 'стоек, боковин, передней и задней частей',
                isCorrect: false
            },
            {
                value: 'стоек, нижнего основания, крыши, боковин, передней и задней частей',
                isCorrect: false
            },
            {
                value: 'стоек, нижнего основания, пола, левой и правой боковин, крыши, передней и задней частей',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каркас кузова автобуса состоит из:</Typography>
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
                value: 'выявления пригодности кузова к дальнейшей эксплуатации',
                isCorrect: false
            },
            {
                value: 'определения объема работ при ремонте',
                isCorrect: false
            },
            {
                value: 'выявлении характера повреждений в корпусе, определения порядка ремонта и трудоемкости ремонтных работ',
                isCorrect: true
            },
            {
                value: 'определения порядка ремонтных работ',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Дефектация кузова проводится для:</Typography>
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
                value: 'Разборку и ремонт составных частей кузова',
                isCorrect: false
            },
            {
                value: 'Разборку, полное или частичное снятие старой краски, дефектовку, ремонт составных частей или их замена, сборка, окраска, контроль качества',
                isCorrect: true
            },
            {
                value: 'Разборку, снятие старой краски, дефектовку, окраску, сборка',
                isCorrect: false
            },
            {
                value: 'Разборку, полное или частичное снятие старой краски, дефектовку, ремонт составных частей или их замена, сборка, окраска',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Технологический процесс ремонта кузовов включает в себя:</Typography>
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
                value: 'каркасный',
                isCorrect: true
            },
            {
                value: 'полукаркасный',
                isCorrect: false
            },
            {
                value: 'бескаркасный',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой вид кузова имеет жесткий пространственный каркас, к которому крепится облицовка, не участвующих в восприятии нагрузки?</Typography>
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
                value: 'бескаркасный',
                isCorrect: false
            },
            {
                value: 'каркасный',
                isCorrect: false
            },
            {
                value: 'полукаркасный',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой вид кузова имеет некоторые части каркаса (стойки, дуги, лонжероны, усилители), соединенные между собой облицовками, частично воспринимающими нагрузки?</Typography>
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
                value: 'бескаркасный',
                isCorrect: true
            },
            {
                value: 'каркасный',
                isCorrect: false
            },
            {
                value: 'полукаркасный',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой вид кузова не имеет силовых (несущих) элементов?</Typography>
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
                value: 'Передние и задние лонжероны',
                isCorrect: true
            },
            {
                value: 'Днище кузова',
                isCorrect: false
            },
            {
                value: 'Передний щит',
                isCorrect: true
            },
            {
                value: 'Панели кузова',
                isCorrect: false
            },
            {
                value: 'Пороги',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Выберите элементы кузова, относящиеся к каркасу</Typography>
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
                value: 'Передние и задние лонжероны',
                isCorrect: false
            },
            {
                value: 'Днище кузова',
                isCorrect: true
            },
            {
                value: 'Передний щит',
                isCorrect: false
            },
            {
                value: 'Панели кузова',
                isCorrect: true
            },
            {
                value: 'Двери кузова',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Выберите элементы кузова, относящиеся к облицовке</Typography>
                </>
            )
        }
    }
];

export default GameData