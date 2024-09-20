import { Box, Typography } from '@mui/material';
import img1_1 from '../../../assets/images/6/training1-1.webp';
import img1_2 from '../../../assets/images/6/training1-2.webp';
import img1_3 from '../../../assets/images/6/training1-3.webp';
import img2 from '../../../assets/images/6/training2.webp';
import img5 from '../../../assets/images/6/training5.webp';
import img6 from '../../../assets/images/6/training6.webp';
import img7 from '../../../assets/images/6/training7.webp';
import img8 from '../../../assets/images/6/training8.webp';
import img9 from '../../../assets/images/6/training9.webp';
import img10 from '../../../assets/images/6/training10.webp';
import img13 from '../../../assets/images/6/training13.webp';
import img14 from '../../../assets/images/6/training14.webp';
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
        title: 'Конструкция кузовов',
        image: null,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><b>Каркасный кузов</b> имеет жесткий пространственный каркас к которому крепится облицовка, не участвующих в восприятии нагрузки.</Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img1_1} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <Typography variant='body1' component="p" gutterBottom><b>Полукаркасный (каркасно-панельный) кузов</b> имеет некоторые части каркаса (стойки, дуги, лонжероны, усилители), соединенные между собой облицовками, частично воспринимающими нагрузки.</Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img1_2} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <Typography variant='body1' component="p" gutterBottom><b>Бескаркасный</b> не имеет силовых (несущих) элементов. Для придания бескаркасному кузову необходимой жесткости отдельным его частям придают специальную форму и сечение</Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img1_3} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 1,
        title: 'Конструкция кузовов',
        image: img2,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><b>Несущий кузов</b> воспринимает все нагрузки и усилия, которые действуют на автомобиль при его движении.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Полуразгруженный кузов</b> жестко соединяется с облегченной рамой и воспринимает часть нагрузок, приходящихся на раму.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Разгруженный кузов</b> жесткого соединения с рамой не имеет. Он устанавливается на раме на упругих подушках и, кроме веса пассажиров и перевозимого груза, никаких других нагрузок не воспринимает.</Typography>
                    <br />
                    <Typography variant='body1' component="p" gutterBottom><b>Рисунок</b></Typography>
                    <ol>
                        <li>Средняя стойка</li>
                        <li>Порог</li>
                        <li>Центральный тоннель</li>
                        <li>Днище</li>
                        <li>Переднее крыло</li>
                        <li>Лонжерон</li>
                        <li>Передняя стойка</li>
                        <li>Крыша</li>
                        <li>Задняя стойка</li>
                        <li>Заднее крыло</li>
                        <li>Передний щит</li>
                        <li>Панель багажника</li>
                    </ol>
                </>
            )
        }
    },
    {
        id: 2,
        title: 'Выберите несколько правильных ответов',
        image: null,
        imageContent: null,
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
                value: 'Передние стойки',
                isCorrect: true
            },
            {
                value: 'Крылья кузова',
                isCorrect: false
            },
            {
                value: 'Задняя стойка',
                isCorrect: true
            },
            {
                value: 'Капот кузова',
                isCorrect: false
            },
            {
                value: 'Средняя стойка',
                isCorrect: true
            },
            {
                value: 'Двери кузова',
                isCorrect: false
            },
            {
                value: 'Пороги',
                isCorrect: true
            },
            {
                value: 'Крышка багажника',
                isCorrect: false
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
        id: 3,
        title: 'Выберите несколько правильных ответов',
        image: null,
        imageContent: null,
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
                value: 'Передние стойки',
                isCorrect: false
            },
            {
                value: 'Крылья кузова',
                isCorrect: true
            },
            {
                value: 'Задняя стойка',
                isCorrect: false
            },
            {
                value: 'Капот кузова',
                isCorrect: true
            },
            {
                value: 'Средняя стойка',
                isCorrect: false
            },
            {
                value: 'Двери кузова',
                isCorrect: true
            },
            {
                value: 'Пороги',
                isCorrect: false
            },
            {
                value: 'Крышка багажника',
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
    },
    {
        id: 4,
        title: 'Описание кузовов',
        image: img5,
        imageContent: null,
        content: () => {

            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Изучите описание кузовов представленное в таблице</Typography>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Выберите один правильный ответ',
        image: img6,
        imageContent: null,
        answers: [
            {
                value: 'минивен',
                isCorrect: false
            },
            {
                value: 'седан',
                isCorrect: true
            },
            {
                value: 'джип',
                isCorrect: false
            },
            {
                value: 'хетчбек',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Определите тип кузова, показанный на изображении</Typography>
                </>
            )
        }
    },    
    {
        id: 6,
        title: 'Выберите один правильный ответ',
        image: img7,
        imageContent: null,
        answers: [
            {
                value: 'минивен',
                isCorrect: false
            },
            {
                value: 'седан',
                isCorrect: false
            },
            {
                value: 'джип',
                isCorrect: true
            },
            {
                value: 'хетчбек',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Определите тип кузова, показанный на изображении</Typography>
                </>
            )
        }
    },    
    {
        id: 7,
        title: 'Выберите один правильный ответ',
        image: img8,
        imageContent: null,
        answers: [
            {
                value: 'минивен',
                isCorrect: false
            },
            {
                value: 'седан',
                isCorrect: false
            },
            {
                value: 'джип',
                isCorrect: false
            },
            {
                value: 'хетчбек',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Определите тип кузова, показанный на изображении</Typography>
                </>
            )
        }
    },    
    {
        id: 8,
        title: 'Выберите один правильный ответ',
        image: img9,
        imageContent: null,
        answers: [
            {
                value: 'минивен',
                isCorrect: true
            },
            {
                value: 'седан',
                isCorrect: false
            },
            {
                value: 'джип',
                isCorrect: false
            },
            {
                value: 'хетчбек',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Определите тип кузова, показанный на изображении</Typography>
                </>
            )
        }
    },    
    {
        id: 9,
        title: 'Устройство платформенного стапеля',
        image: img10,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Изучите описание кузовов представленное в иллюстрации</Typography>
                </>
            )
        }
    },
    {
        id: 10,
        title: 'Вставьте пропущенное слово',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'пассажирские',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>_____________ кузова предназначены для перевозки пассажиров и используются в основном на легковых автомобилях и автобусах. На грузовом автомобиле устанавливается кузов для перевозки грузов и, дополнительно к нему – кабина (пассажирский кузов) для размещения водителя и одного или двух пассажиров.</Typography>
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
                value: 'стальной',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Основание кузова выполнено в виде ________________, цельноштампованной или составной (сварной) панели, усиленной по периметру с внутренней стороны салона профилем коробчатого сечения. С основанием соединены передняя и задняя части кузова. Передняя часть включает в себя щиток передка, рамку радиатора, брызговики, а задняя – панели и брызговики. Наружные элементы кузова (боковины) выполнены цельноштампованными или сварными из отдельных элементов (стоек, порога пола и т. д.). Боковины имеют дверные проемы, а в некоторых моделях и окна. Крыша кузова металлическая, цельноштампованная или съемная, с мягким или жестким верхом. Она может иметь проемы для установки ветрового и заднего окон, а также верхнего люка.</Typography>
                </>
            )
        }
    },
    {
        id: 12,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: '1 – Б, 2 – А, 3 – В',
                isCorrect: true
            },
            {
                value: '1 – А, 2 – Б, 3 – В',
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
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите типы кузовов и их описания</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img13} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
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
                value: '1 – В, 2 – А, 3 – Б',
                isCorrect: false
            },
            {
                value: '1 – Б, 2 – В, 3 – А',
                isCorrect: true
            },
            {
                value: '1 – А, 2 – Б, 3 – В',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите типы конструкций кузовов и их описания</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img14} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    }
];

export default TrainingData