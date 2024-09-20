import { Box, Typography } from '@mui/material';
import img1 from '../../../assets/images/2/training1.webp';
import img4 from '../../../assets/images/2/training4.webp';
import img5 from '../../../assets/images/2/training5.webp';
import img8 from '../../../assets/images/2/training8.webp';
import img9 from '../../../assets/images/2/training9.webp';
import img14 from '../../../assets/images/2/training14.webp';
import img15 from '../../../assets/images/2/training15.webp';
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
        title: 'Устройство и типы одноразовых шприцов',
        image: img1,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Шприцы медицинские одноразовые - предназначены для подкожного, внутримышечного и внутривенного введения жидких лекарственных средств, а также для отсасывания различных жидкостей из организма при кратковременном контакте с кровью и лимфой.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>По строению шприцы разделяют на две большие группы:</Typography>
                    <ul>
                        <li>двухкомпонентные (цилиндр плюс поршень);</li>
                        <li>трехкомпонентные (цилиндр, поршень и плунжер, т. е. наконечник (уплотнитель) поршня).</li>
                    </ul>
                    <Typography variant='body1' component="p" gutterBottom>По объему одноразовые шприцы делят на малообъемные, стандартного объема и большого объема.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Типы одноразовых шприцев:</Typography>
                    <ul>
                        <li><b>Инсулиновый шприц.</b> Объем цилиндра может колебаться от 0,3 мл до 1 мл.</li>
                        <li><b>Туберкулиновый шприц.</b> Имеет объем 1 мл, используется для внутрикожных, в том числе, аллергических проб.</li>
                        <li><b>Шприц Жане.</b> Для промывания полостей тела, введения лекарств и отсасывания жидкостей, а также для энтерального питания.</li>
                        <li><b>Самоблокирующийся шприц или шприц с убираемой иглой.</b> Максимально безопасен для персонала, так как игла втягивается сразу после проведения инъекций.</li>
                        <li><b>Шприц-ручка.</b> Современное и удобное устройство, позволяющее точно рассчитать лекарство, часто используется для введения инсулина и других гормональных препаратов.</li>
                    </ul>
                </>
            )
        }
    },
    {
        id: 1,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: '1,0 мл',
                isCorrect: true
            },
            {
                value: '5,0 мл',
                isCorrect: false
            },
            {
                value: '10,0 мл',
                isCorrect: false
            },
            {
                value: '100 мл',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Для внутрикожной инъекции берется шприц емкостью:</Typography>
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
                value: 'однокомпонентные',
                isCorrect: false
            },
            {
                value: 'двухкомпонентные',
                isCorrect: true
            },
            {
                value: 'трехкомпонентные',
                isCorrect: false
            },
            {
                value: 'четырехкомпонентные',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>По строению шприцы разделяют:</Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Правила выполнения внутрикожной инъекции',
        image: img4,
        imageContent: null,
        content: () => {
            return (
                <>
                    <ol>
                        <li>Объем шприца – 1,0 мл.</li>
                        <li>Угол введения иглы – 10-15°.</li>
                        <li>Глубина введения иглы – срез иглы.</li>
                        <li>Игла одноразовая стерильная инъекционная игла длиной 15 мм. и диаметром 0,4 мм.</li>
                        <li>Игла вводится под верхний роговой слой кожи (эпидермиса).</li>
                        <li>Место введения:</li>
                    </ol>
                    <ul>
                        <li>передняя (внутренняя) поверхность средней трети предплечья – для проведения диагностических проб;</li>
                        <li>верхняя треть наружной поверхности плеча (для проведения БЦЖ).</li>
                    </ul>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Правила выполнения подкожной инъекции',
        image: img5,
        imageContent: null,
        content: () => {
            return (
                <>
                    <ol>
                        <li>1. Объем шприца 1,0 – 3,0 мл. (реже 5,0).</li>
                        <li>2. Угол введения иглы – 45° или 90° (Инсулин, Гепарин).</li>
                        <li>3. Глубина введения иглы – 2\3 (1-1,5 см).</li>
                        <li>4. Игла одноразовая стерильная инъекционная игла длиной 20 мм. и диаметром</li>
                        <li>0,4-0,6 мм.</li>
                        <li>5. Игла вводится в слой подкожно-жировой клетчатки.</li>
                        <li>6. Место введения:</li>
                    </ol>
                    <ul>
                        <li>наружная поверхность плеча;</li>
                        <li>подлопаточная область;</li>
                        <li>поверхность брюшной стенки (отступая 2 см от пупка);</li>
                        <li>передненаружная поверхность бедра.</li>
                    </ul>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Выберите несколько правильных ответов',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'передняя поверхность средней трети предплечья',
                isCorrect: true
            },
            {
                value: 'верхняя треть наружной поверхности плеча',
                isCorrect: true
            },
            {
                value: 'поверхность брюшной стенки',
                isCorrect: false
            },
            {
                value: 'передненаружная поверхность бедра',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Местом для внутрикожной инъекции служит:</Typography>
                </>
            )
        }
    },
    {
        id: 6,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: '10°',
                isCorrect: false
            },
            {
                value: '30°',
                isCorrect: false
            },
            {
                value: '45°',
                isCorrect: true
            },
            {
                value: '95°',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Угол введения иглы при подкожной инъекции:</Typography>
                </>
            )
        }
    },
    {
        id: 7,
        title: 'Правила выполнения внутримышечной инъекции',
        image: img8,
        imageContent: null,
        content: () => {
            return (
                <>
                    <ol>
                        <li>1. Объем шприца – 5,0 – 10,0 мл.</li>
                        <li>2. Угол введения иглы - 90°.</li>
                        <li>3. Глубина введения иглы –2\3(инъецировать максимально глубоко).</li>
                        <li>4. Игла одноразовая стерильная инъекционная игла длиной 60-80 мм. и диаметром</li>
                        <li>0,8 мм.</li>
                        <li>5. Игла вводится в толщу мышц.</li>
                        <li>6. Место введения:</li>
                    </ol>
                    <ul>
                        <li>верхненаружный квадрант ягодицы;</li>
                        <li>передненаружная поверхность бедра;</li>
                        <li>средняя треть плеча (область дельтовидной мышцы).</li>
                    </ul>
                </>
            )
        }
    },
    {
        id: 8,
        title: 'Правила выполнения внутривенной инъекции',
        image: img9,
        imageContent: null,
        content: () => {
            return (
                <>
                    <ol>
                        <li>Объем шприца – 10,0- 20,0 мл.</li>
                        <li>Угол введения иглы –25-30°</li>
                        <li>Глубина введения иглы – 1\2.</li>
                        <li>Игла одноразовая стерильная инъекционная игла длиной 40 мм. и диаметром</li>
                        <li> мм.</li>
                        <li>Игла вводится в просвет вены.</li>
                        <li>Место введения:</li>
                    </ol>
                    <ul>
                        <li>вены локтевого сгиба;</li>
                        <li>вены предплечья;</li>
                        <li>вены тыла кисти и стопы.</li>
                    </ul>
                </>
            )
        }
    },
    {
        id: 9,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'игла длиной 15 мм. и диаметром 0,4 мм',
                isCorrect: false
            },
            {
                value: 'игла длиной 20 мм. и диаметром 0,4 мм',
                isCorrect: false
            },
            {
                value: 'игла длиной 40 мм. и диаметром 0,8 мм',
                isCorrect: true
            },
            {
                value: 'игла длиной 80 мм. и диаметром 0,8 мм',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Длина иглы и ее диаметр при постановке внутривенной инъекции:</Typography>
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
                value: '1,0 -2,0 мл',
                isCorrect: false
            },
            {
                value: '10,0- 20,0 мл',
                isCorrect: false
            },
            {
                value: '5,0 – 10,0 мл',
                isCorrect: true
            },
            {
                value: '50,0 – 200,0 мл',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Для внутримышечной инъекции берется шприц емкостью:</Typography>
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
                value: 'ядовитые',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" fontWeight={700} gutterBottom>Старшая медицинская сестра осуществляет контроль и руководство за использованием и обеспечением сохранности лекарств в отделении.</Typography>
                    <ul>
                        <li>список А – _________ (строфантин, атропин, прозерин, мышьяк, стрихнин, ртуть, серебро) и наркотические (морфин, омнопон, фентамил, промедол);</li>
                        <li>список Б – сильнодействующие (ампицеллин, ампиокс, клофелин, промедол);</li>
                        <li>общий список (ацетилсалициловая кислота, аспаркам, апилак, фарингопилс).</li>
                    </ul>
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
                value: 'наружный',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" fontWeight={700} gutterBottom>______________ путь введения – воздействие лекарственных средств, преимущественно местно на кожу и слизистые оболочки, в глаза, в нос, уши, через дыхательные пути.</Typography>
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
                value: '1 – А, 2 – В, 3 – Б',
                isCorrect: false
            },
            {
                value: '1 – Б, 2 – А, 3 – В',
                isCorrect: true
            },
            {
                value: '1 – В, 2 – А, 3 – Б',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите пути введения лекарственных средств с примерами</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img14} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
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
                value: '1 – А, 2 – В, 3 – Б',
                isCorrect: false
            },
            {
                value: '1 – В, 2 – Б, 3 – А',
                isCorrect: true
            },
            {
                value: '1 – В, 2 – А, 3 – Б',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите вид инъекции и угол введения шприца</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img15} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    }
];

export default TrainingData