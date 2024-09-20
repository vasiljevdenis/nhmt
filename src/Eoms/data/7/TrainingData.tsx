import { Box, Typography } from '@mui/material';
import img1 from '../../../assets/images/7/training1.webp';
import img2 from '../../../assets/images/7/infographicsContent4-3.webp';
import img5 from '../../../assets/images/7/infographicsContent7-1.webp';
import img51 from '../../../assets/images/7/infographicsContent7-2.webp';
import img6 from '../../../assets/images/7/infographicsContent7-3.webp';
import img9 from '../../../assets/images/7/training9.webp';
import img10 from '../../../assets/images/7/infographicsContent8-2.webp';
import img15 from '../../../assets/images/7/training15.webp';
import { ReactNode } from 'react';

interface Answer {
    value: string;
    isCorrect: boolean;
}
interface Slide {
    id: number;
    title: string;
    image: string | null;
    imageContent: string | null;
    answers?: Answer[];
    content: () => ReactNode
}

const TrainingData: Slide[] = [
    {
        id: 0,
        title: 'Методы сканирования в ортопедической стоматологии',
        image: img1,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><span>Существует несколько методик трехмерного сканирования со своими плюсами и минусами у каждой. Все они делятся на две большие группы:</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>контактные, или механические;</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>бесконтактные, или оптические.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>Оптические сканеры более востребованы в стоматологии, чем механические, поскольку они затрачивают меньше времени на сканирование и более эффективно работают с крупными объектами. Кроме того, они позволяют получать трехмерную текстуру &ndash; характерную окраску объекта.</span></Typography>
                </>
            )
        }
    },
    {
        id: 1,
        title: 'Подготовка модели к сканированию',
        image: img2,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><span>Важным звеном в этом процессе является этап подготовки моделей. Очень часто в практике попадаются модели, которые изначально несут в себе погрешность и не предназначены для качественного 3D сканирования. Если мы переносим неточные исходные данные в проект моделирования, то заведомо получаем конструкцию с большими погрешностями. Такое изделие не сядет на исходную модель, и уж точно её не получиться установить в полости рта.&nbsp;</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>Для подготовки гипсовой модели к цифровому сканированию необходимо очистить модель от пыли и грязи. Обязательным условием является установка модели на стабильную платформу.</span></Typography>
                </>
            )
        }
    },
    {
        id: 2,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Аналоговое фотографирование',
                isCorrect: false
            },
            {
                value: 'Ручной промежуточный отбор',
                isCorrect: false
            },
            {
                value: 'Оптическое сканирование',
                isCorrect: true
            },
            {
                value: 'Изготовление 3D-модели с помощью глины',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой из перечисленных методов является примером цифрового сканирования гипсовой модели?</Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Выберите несколько правильных ответов',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Установка модели на стабильную платформу',
                isCorrect: true
            },
            {
                value: 'Очистка модели от пыли и грязи',
                isCorrect: true
            },
            {
                value: 'Применение контрастных маркеров',
                isCorrect: false
            },
            {
                value: 'Использование специальных калибровочных инструментов',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие из следующих шагов являются необходимыми для подготовки гипсовой модели к цифровому сканированию?</Typography>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Подготовка сканера',
        image: img5,
        imageContent: null,
        content: () => {
            return (
                <>
                    <ol>
                        <li><b> Включение. </b><span>Подключить сканер к сети электропитания.</span> <span>Запустить предоставленное производителем сканера ПО, и убедиться, что оно корректно работает на компьютере.</span></li>
                        <li><b><i> </i></b><b>Калибровка</b><i><span>. </span></i><span>Перед сканированием необходимо выполнить калибровку. Калибровка сканера проводится при монтаже и первичной настройке. Повторная калибровка должна проводиться не менее 1 раза в месяц.&nbsp;</span></li>
                    </ol>
                    <Typography variant='body1' component="p" gutterBottom><span>Чтобы запустить калибровку, необходимо открыть программное обеспечение DentalScan.exe и кликнуть значок или нажать &laquo;Пуск&raquo; Windows, выбрать DentalScan&gt; Calibration.&nbsp;</span></Typography>
                    <ol>
                        <li><b> Создание заказа.</b><span> AutoScan DS-EX предлагает пользователю три метода для создания нового заказа. При этом процесс сканирования один и тот же, независимо от того, как создается заказ.&nbsp;</span></li>
                    </ol>
                    <ul>
                        <li><span> Создание заказ в DentalManager.exe&nbsp;</span></li>
                        <li><span> Создание заказ в exocad DentalDB&nbsp;</span></li>
                        <li><span> Создание заказ в самого DentalScan.</span><span></span></li>
                    </ul>
                    <Typography variant='body1' component="p" gutterBottom><span>Новый заказ может быть создан из трех различных меню в соответствии с требованиями пользователя: режим интраорального сканирования, режим детального сканирования, режим для клиники. В дентальном режиме (Dental scan) сканирование можно производить в различных меню, которые пользователь выбирает в зависимости от типа работы.</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img51} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Заполнение карты пациента ',
        image: img6,
        imageContent: null,
        content: () => {

            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Для заполнения карты пациента следует нажать кнопку «Заказ» в меню и внести базовые данные.</Typography>
                </>
            )
        }
    },
    {
        id: 6,
        title: 'Выберите несколько правильных ответов',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Правильная калибровка сканера',
                isCorrect: true
            },
            {
                value: 'Использование специальной защитной оболочки',
                isCorrect: false
            },
            {
                value: 'Подключение сканера к сети электропитания',
                isCorrect: true
            },
            {
                value: 'Применение специальных фотографических фильтров',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какие из следующих шагов являются необходимыми для подготовки лабораторного сканера к цифровому сканированию?</Typography>
                </>
            )
        }
    },
    {
        id: 7,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Ввод базовой информации о пациенте',
                isCorrect: true
            },
            {
                value: 'Выбор цвета и формы зубов для дальнейшего моделирования',
                isCorrect: false
            },
            {
                value: 'Загрузка рентгеновских снимков и сканирование гипсовых моделей пациента',
                isCorrect: false
            },
            {
                value: 'Создание цифровой модели зубов с использованием специальных инструментов программы Exocad',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой из следующих шагов является необходимым для заполнения карты пациента в программе Exocad?</Typography>
                </>
            )
        }
    },
    {
        id: 8,
        title: 'Обработка данных',
        image: img9,
        imageContent: null,
        content: () => {

            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Сканер считывает форму модели, выявляет недостатки, допущенные при обработке зуба пациента, невидимые человеческому глазу. Оцифрованные данные сохраняются в формате STL (stereolithography-формат файла, используемый для хранения трёхмерных моделей объектов).</Typography>
                </>
            )
        }
    },
    {
        id: 9,
        title: 'Импорт данных',
        image: img10,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Порядок импорта заказа: чтобы загрузить сформированный заказ, нажмите кнопку «Загрузить», откроется окно «Открыть», выберите путь к заказу и кликните на соответствующий файл .xml. Затем нажмите «Открыть» или дважды щелкните файл .xml, чтобы загрузить заказ.</Typography>
                </>
            )
        }
    },
    {
        id: 10,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Преобразование данных сканирования в формат STL',
                isCorrect: true
            },
            {
                value: 'Проведение анализа недостатков и ошибок сканирования',
                isCorrect: false
            },
            {
                value: 'Применение цветовых текстур на цифровой модели модели',
                isCorrect: false
            },
            {
                value: 'Импорт данных сканирования в программу для дальнейшего редактирования модели',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Какой из следующих шагов является частью обработки данных цифрового сканирования гипсовых моделей?</Typography>
                </>
            )
        }
    },
    {
        id: 11,
        title: 'Вставьте пропущенное слово',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'цифрового',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Сканирование гипсовой модели – это получение _________ оттиска на основе гипсовой модели. Универсальное решение для будущего планирования ортопедических конструкций, операций по имплантации, ортодонтического лечения, 3D-печати.</Typography>
                </>
            )
        }
    },
    {
        id: 12,
        title: 'Вставьте пропущенное слово',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'силикон',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>В качестве слепочной массы могут использоваться:</Typography>
                    <ul>
                        <li>специальный гипс;</li>
                        <li>дентол;</li>
                        <li>___________ – наиболее популярный материал в современной стоматологии;</li>
                        <li>альгинатная паста и т.д.</li>
                    </ul>
                </>
            )
        }
    },
    {
        id: 13,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
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
        id: 14,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: '1 – Б, 2 – А, 3 – В',
                isCorrect: true
            },
            {
                value: '1 – А, 2 – В, 3 – Б',
                isCorrect: false
            },
            {
                value: '1 – В, 2 – Б, 3 – А',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите термины с определениями</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img15} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 15,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Калибровка не требуется',
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
];

export default TrainingData