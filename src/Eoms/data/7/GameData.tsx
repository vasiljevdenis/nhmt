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
                value: 'Аналоговое фотографирование',
                isCorrect: false
            },
            {
                value: 'Оптическое сканирование',
                isCorrect: true
            },
            {
                value: 'Рентгеновское исследование',
                isCorrect: false
            },
            {
                value: 'Молекулярная томография',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой метод используется для цифрового лабораторного сканирования гипсовых моделей челюстей?</Typography>
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
                value: 'Программа для моделирования CAD/CAM',
                isCorrect: true
            },
            {
                value: 'Микроскоп',
                isCorrect: false
            },
            {
                value: 'Лазерный сканер',
                isCorrect: false
            },
            {
                value: 'Лабораторная машина зуботехнической обработки',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что используется для создания цифровой модели из данных сканирования гипсовых моделей челюстей?</Typography>
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
                value: 'Только геометрия челюстей',
                isCorrect: true
            },
            {
                value: 'Форма и цвет зубов',
                isCorrect: false
            },
            {
                value: 'Морфология десны',
                isCorrect: false
            },
            {
                value: 'Все перечисленное выше',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какая информация может быть получена из сканирования гипсовой модели челюстей?</Typography>
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
                value: 'Приготовить раствор для заливки гипсовых моделей',
                isCorrect: false
            },
            {
                value: 'Почистить модели от пыли и остатков гипса',
                isCorrect: true
            },
            {
                value: 'Подготовить шаблоны для цветовых текстур',
                isCorrect: false
            },
            {
                value: 'Ничего не нужно делать, сканирование производится непосредственно',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что нужно сделать перед проведением сканирования гипсовых моделей челюстей?</Typography>
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
                value: 'PNG',
                isCorrect: false
            },
            {
                value: 'JPG',
                isCorrect: false
            },
            {
                value: 'STL',
                isCorrect: true
            },
            {
                value: 'PDF',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой формат файла используется для сохранения данных сканирования гипсовых моделей челюстей?</Typography>
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
                value: 'Осмотр визуальных дефектов',
                isCorrect: true
            },
            {
                value: 'Использование инструментария для измерения',
                isCorrect: false
            },
            {
                value: 'Консультация со специалистом',
                isCorrect: false
            },
            {
                value: 'Профессиональная оценка через программное обеспечение',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой метод используется для проверки качества сканирования гипсовых моделей челюстей?</Typography>
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
                value: 'Данные из рентгенологических снимков',
                isCorrect: false
            },
            {
                value: 'Фотографии пациента',
                isCorrect: false
            },
            {
                value: 'Цветовые текстуры зубов',
                isCorrect: false
            },
            {
                value: 'Все перечисленное выше',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие дополнительные данные могут быть добавлены к цифровой модели гипсовой модели челюстей?</Typography>
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
                value: 'Координаты точек и контуры структур челюстей',
                isCorrect: true
            },
            {
                value: 'Цвет и текстуры зубов',
                isCorrect: true
            },
            {
                value: 'Применяемые материалы и инструменты',
                isCorrect: false
            },
            {
                value: 'Все перечисленное выше',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какая информация может быть получена из цифровой модели гипсовой модели челюстей?</Typography>
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
                value: 'Сокращение времени и ресурсов для изготовления моделей',
                isCorrect: false
            },
            {
                value: 'Улучшение точности и повторяемости моделей',
                isCorrect: false
            },
            {
                value: 'Возможность сохранения цифровых данных для последующего использования',
                isCorrect: false
            },
            {
                value: 'Все перечисленное выше',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что является преимуществом цифрового лабораторного сканирования гипсовых моделей челюстей?</Typography>
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
                value: 'Разрешение сканирования',
                isCorrect: false
            },
            {
                value: 'Размеры сканера',
                isCorrect: false
            },
            {
                value: 'Стоимость сканера',
                isCorrect: false
            },
            {
                value: 'Цветовая гамма сканера',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой из следующих факторов не является важным при выборе лабораторного сканера для цифрового сканирования гипсовых моделей челюстей?</Typography>
                </>
            )
        }
    },
    {
        id: 10,
        title: 'Выберите несколько правильных ответов',
        type: 'multiple',
        score: 30,
        answers: [
            {
                value: 'Специальный гипс',
                isCorrect: true
            },
            {
                value: 'Силикон',
                isCorrect: true
            },
            {
                value: 'Альгинатная паста',
                isCorrect: true
            },
            {
                value: 'Глина',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Выберите, что может использоваться в качестве слепочной массы.</Typography>
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
                value: 'Культевая вкладка',
                isCorrect: false
            },
            {
                value: 'Индивидуальный абатмент',
                isCorrect: true
            },
            {
                value: 'Стандартный абатмент',
                isCorrect: false
            },
            {
                value: 'Угловой абатмент',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как называется разновидность наконечника импланта, которая изготавливается по индивидуальным размерам с учетом особенностей челюсти?</Typography>
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
                value: 'Калибровка не требуется ',
                isCorrect: false
            },
            {
                value: 'Перед сканированием',
                isCorrect: true
            },
            {
                value: 'Во время сканирования',
                isCorrect: false
            },
            {
                value: 'После сканирования',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>На каком этапе сканирования должна проводиться калибровка сканера?</Typography>
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
                value: '1-3 минуты',
                isCorrect: false
            },
            {
                value: '2-4 минуты',
                isCorrect: false
            },
            {
                value: '3-5 минут',
                isCorrect: true
            },
            {
                value: '4-6 минут',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Сколько минут «ложка» со слепочным материалом должна оставаться во рту для застывания массы?</Typography>
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
                value: 'CAP/CAN',
                isCorrect: false
            },
            {
                value: 'CAD/CAM',
                isCorrect: true
            },
            {
                value: 'CAN/CAD',
                isCorrect: false
            },
            {
                value: 'CAP/CAD',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как называется уникальная технология изготовления зубных протезов при помощи 3D-компьютерного моделирования и производства на фрезерной установке?</Typography>
                </>
            )
        }
    }
];

export default GameData