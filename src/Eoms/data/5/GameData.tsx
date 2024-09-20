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
                value: 'прямым',
                isCorrect: true
            },
            {
                value: 'косвенным',
                isCorrect: false
            },
            {
                value: 'абсолютным',
                isCorrect: false
            },
            {
                value: 'относительным',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Измерение, при котором искомое значение величины находят непосредственно из опытных данных, называется:</Typography>
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
                value: 'прямым',
                isCorrect: false
            },
            {
                value: 'косвенным',
                isCorrect: true
            },
            {
                value: 'абсолютным',
                isCorrect: false
            },
            {
                value: 'относительным',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Измерение, при котором искомое значение величины находят на основании известной зависимости, называется:</Typography>
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
                value: 'прямым',
                isCorrect: false
            },
            {
                value: 'косвенным',
                isCorrect: false
            },
            {
                value: 'абсолютным',
                isCorrect: true
            },
            {
                value: 'относительным',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Измерение, основанное на прямых измерениях одной или нескольких основных величин и (или) при использовании значений физических констант, называется:</Typography>
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
                value: 'прямым',
                isCorrect: false
            },
            {
                value: 'косвенным',
                isCorrect: false
            },
            {
                value: 'абсолютным',
                isCorrect: false
            },
            {
                value: 'относительным',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Измерение отношения: величины к одноименной величине, играющей роль единицы, или измерение величины по отношению к одноименной величине, принимаемой за исходную, называется:</Typography>
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
                value: 'теория передачи размеров единиц физических величин',
                isCorrect: false
            },
            {
                value: 'теория исходных средств измерений (эталонов)',
                isCorrect: false
            },
            {
                value: 'наука об измерениях, методах и средствах обеспечения их   единства и способах достижения требуемой точности',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Метрология – это …</Typography>
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
                value: 'выбор технического средства, имеющего нормированные метрологические характеристики',
                isCorrect: false
            },
            {
                value: 'операция сравнения неизвестного с известным',
                isCorrect: false
            },
            {
                value: 'опытное нахождение значения физической величины с    помощью технических средств',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Измерением называется …</Typography>
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
                value: 'микрометр; измеряют взаимно перпендикулярные диаметры;',
                isCorrect: false
            },
            {
                value: 'индикатор или измерительную головку; деталь устанавливают в центрах;',
                isCorrect: true
            },
            {
                value: 'штангенциркуль; измеряют три диаметра;',
                isCorrect: false
            },
            {
                value: 'индикаторный нутромер.',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой измерительный инструмент применяют для определения радиального и торцевого биения?</Typography>
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
                value: 'гладкие микрометры, микрометрические нутромеры и глубиномеры с отсчетом 0,01 мм;',
                isCorrect: true
            },
            {
                value: 'рейсмасы и штихмассы с отсчетом 0,05 мм;',
                isCorrect: false
            },
            {
                value: 'измерительные пружинные головки с отсчетом 0,005; 0,002 и 0,001 мм;',
                isCorrect: false
            },
            {
                value: 'плоскопараллельные концевые меры длины.',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие применяют микрометрические инструменты и каков у них отсчет?</Typography>
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
                value: 'рычажно-зубчатые и пружинные измерительные головки с отсчетом 0,0005; 0,0002 и др.;',
                isCorrect: false
            },
            {
                value: 'гладкие микрометры, глубиномеры, нутромеры, резьбомеры и др.;',
                isCorrect: false
            },
            {
                value: 'плоскопараллельные концевые меры длины;',
                isCorrect: false
            },
            {
                value: 'индикаторы часового типа с отсчетом 0,01 мм и рычажно-зубчатые с отсчетом 0,001 мм, нутромеры, глубиномеры и др.',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие применяют индикаторные приборы и каков их отсчет?</Typography>
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
                value: '10 делений',
                isCorrect: false
            },
            {
                value: '20 делений',
                isCorrect: false
            },
            {
                value: '100 делений',
                isCorrect: true
            },
            {
                value: '50 делений',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Сколько делений на большой круговой шкале (циферблате) индикатора часового типа?</Typography>
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
                value: 'измерение наружных размеров деталей относительным методом с отсчетом 0,01 мм',
                isCorrect: false
            },
            {
                value: 'поверка и настройка средств измерения, точная разметка',
                isCorrect: true
            },
            {
                value: 'контроль прямолинейности и плоскостности',
                isCorrect: false
            },
            {
                value: 'измерение внутренних размеров деталей абсолютным методом с отсчетом 0,01 мм',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каково назначение плоскопараллельных концевых мер длины?</Typography>
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
                value: 'вещественные меры',
                isCorrect: false
            },
            {
                value: 'индикаторы',
                isCorrect: false
            },
            {
                value: 'измерительные приборы',
                isCorrect: true
            },
            {
                value: 'измерительные системы',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие средства измерений представляют собой совокупность измерительных преобразователей и отсчетного устройства?</Typography>
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
                value: 'математическими',
                isCorrect: false
            },
            {
                value: 'физическими',
                isCorrect: true
            },
            {
                value: 'идеальными',
                isCorrect: false
            },
            {
                value: 'вычисляемыми',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Метрология, как наука, занимается величинами:</Typography>
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
                value: 'метод замещения',
                isCorrect: false
            },
            {
                value: 'метод совпадений',
                isCorrect: true
            },
            {
                value: 'метод противопоставлении',
                isCorrect: false
            },
            {
                value: 'метод дополнения',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>… – метод сравнения с мерой, в котором значение измеряемой величины оценивают, используя совпадение ее с величиной, воспроизводимой мерой. Вставьте пропущенное слово.</Typography>
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
                value: 'грубая',
                isCorrect: true
            },
            {
                value: 'случайная',
                isCorrect: false
            },
            {
                value: 'систематическая',
                isCorrect: false
            },
            {
                value: 'большая',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>… погрешность (промах) измерений — погрешность измерений, существенно превышающая ожидаемую при данных условиях. Вставьте пропущенное слово.</Typography>
                </>
            )
        }
    }
];

export default GameData