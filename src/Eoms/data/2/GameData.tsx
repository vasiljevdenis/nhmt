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
                value: 'Программа для создания трехмерных моделей зубов',
                isCorrect: true
            },
            {
                value: 'Программа для редактирования фотографий',
                isCorrect: false
            },
            {
                value: 'Программа для создания виртуальных игр',
                isCorrect: false
            },
            {
                value: 'Программа для общения в социальных сетях',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Что такое Exocad и для чего используется в цифровом моделировании?</Typography>
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
                value: 'Создание трехмерных моделей зубов и анатомических структур',
                isCorrect: true
            },
            {
                value: 'Редактирование текстовых документов',
                isCorrect: false
            },
            {
                value: 'Разработка графических иллюстраций',
                isCorrect: false
            },
            {
                value: 'Создание музыкальных композиций',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие основные функции предоставляет Exocad при создании цифровых моделей?</Typography>
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
                value: 'С помощью специальной технологии распознавания речи',
                isCorrect: false
            },
            {
                value: 'С помощью использования высокоточных 3D сканеров',
                isCorrect: true
            },
            {
                value: 'С помощью автоматического алгоритма случайного выбора',
                isCorrect: false
            },
            {
                value: 'С помощью принципа конструктивизма',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каким образом Exocad обеспечивает точность и качество цифровых моделей?</Typography>
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
                value: 'Только изображения в формате JPEG',
                isCorrect: false
            },
            {
                value: 'Текстовые файлы в формате PDF',
                isCorrect: false
            },
            {
                value: '3D сканы, файлы DICOM, фотографии',
                isCorrect: true
            },
            {
                value: 'Видеофайлы в формате AVI',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие типы данных можно импортировать в Exocad для создания моделей?</Typography>
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
                value: 'Инструмент «Автоконтур»',
                isCorrect: true
            },
            {
                value: 'Инструмент «Рисование»',
                isCorrect: false
            },
            {
                value: 'Инструмент «Создание текста»',
                isCorrect: false
            },
            {
                value: 'Инструмент «Печать»',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какая функция Exocad позволяет эффективно анализировать и модифицировать модели?</Typography>
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
                value: 'Инструменты для создания протезов',
                isCorrect: false
            },
            {
                value: 'Инструменты для анализа костной структуры',
                isCorrect: false
            },
            {
                value: 'Инструменты для дизайна улыбок',
                isCorrect: true
            },
            {
                value: 'Инструменты для создания аппаратов ИКТ',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие специализированные инструменты предоставляет Exocad для работы с анатомическими моделями?</Typography>
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
                value: 'Возможность создания виртуальных имплантов в точном соответствии с пациентом',
                isCorrect: false
            },
            {
                value: 'Возможность создания трехмерных моделей всего зубного ряда',
                isCorrect: false
            },
            {
                value: 'Возможность создания моделей для различных типов имплантатов',
                isCorrect: true
            },
            {
                value: 'Возможность создания моделей для внутриротовых камер',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие возможности предоставляет Exocad для создания моделей для имплантологии?</Typography>
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
                value: 'Поддержка только одной модели сканера и одной CAD/CAM системы',
                isCorrect: false
            },
            {
                value: 'Поддержка работы с несколькими моделями сканеров и CAD/CAM систем',
                isCorrect: true
            },
            {
                value: 'Не поддерживает работу со сканерами и CAD/CAM системами',
                isCorrect: false
            },
            {
                value: 'Поддержка только сканеров и CAD/CAM систем, произведенных компанией Exocad',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как Exocad поддерживает работу с различными типами сканеров и CAD/CAM систем?</Typography>
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
                value: 'Только простые текстовые документы',
                isCorrect: false
            },
            {
                value: 'Отчеты с графиками и диаграммами',
                isCorrect: false
            },
            {
                value: 'Только таблицы с данными',
                isCorrect: false
            },
            {
                value: 'Одинаковые отчеты для всех типов моделей',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие типы документации и отчетов можно сгенерировать в Exocad?</Typography>
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
                value: 'Только в формате PDF',
                isCorrect: false
            },
            {
                value: 'Только в формате JPEG',
                isCorrect: false
            },
            {
                value: 'В различных форматах, включая STL, OBJ, и другие',
                isCorrect: true
            },
            {
                value: 'В формате видеофайлов',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие варианты экспорта моделей предоставляет Exocad?</Typography>
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
                value: 'Нет дополнительных модулей и расширений',
                isCorrect: false
            },
            {
                value: 'Модуль для анализа зубной эмали',
                isCorrect: false
            },
            {
                value: 'Модуль для дизайна коронок и мостовидных протезов',
                isCorrect: true
            },
            {
                value: 'Модуль для создания анимированных моделей',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие дополнительные модули и расширения доступны для использования в Exocad?</Typography>
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
                value: 'Не обеспечивает конфиденциальность и безопасность данных',
                isCorrect: false
            },
            {
                value: 'С помощью шифрования данных и протоколов безопасности',
                isCorrect: true
            },
            {
                value: 'С помощью публичного доступа к данным',
                isCorrect: false
            },
            {
                value: 'С помощью передачи данных без шифрования',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Каким образом Exocad обеспечивает конфиденциальность и безопасность данных пользователя?</Typography>
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
                value: 'Операционная система Windows и процессор Intel Core i7',
                isCorrect: true
            },
            {
                value: 'Операционная система MacOS и процессор AMD Ryzen 5',
                isCorrect: false
            },
            {
                value: 'Операционная система Linux и процессор Intel Pentium',
                isCorrect: false
            },
            {
                value: 'Операционная система Android и процессор Qualcomm Snapdragon',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие системные требования необходимы для работы с Exocad?</Typography>
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
                value: 'Только поворот и масштабирование моделей',
                isCorrect: false
            },
            {
                value: 'Отражение, перемещение и поворот моделей',
                isCorrect: false
            },
            {
                value: 'Только масштабирование моделей',
                isCorrect: false
            },
            {
                value: 'Отражение и перемещение моделей',
                isCorrect: false
            },
            {
                value: 'Все перечисленное',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие виды манипулирования и преобразования моделей поддерживает Exocad?</Typography>
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
                value: 'Возможность создания моделей только для верхней челюсти',
                isCorrect: false
            },
            {
                value: 'Возможность создания моделей только для нижней челюсти',
                isCorrect: false
            },
            {
                value: 'Возможность создания моделей для верхней и нижней челюстей',
                isCorrect: true
            },
            {
                value: 'Возможность создания моделей только для канатного протезирования',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие возможности предоставляет Exocad для создания виртуальных моделей зубов?</Typography>
                </>
            )
        }
    }
];

export default GameData