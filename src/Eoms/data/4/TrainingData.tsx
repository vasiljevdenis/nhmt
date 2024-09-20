import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import img1_1 from '../../../assets/images/4/training1-1.webp';
import img2 from '../../../assets/images/4/training2.webp';
import img5 from '../../../assets/images/4/training5.webp';
import img6_1 from '../../../assets/images/4/training6-1.webp';
import img6_2 from '../../../assets/images/4/training6-2.webp';
import img6_3 from '../../../assets/images/4/training6-3.webp';
import img6_4 from '../../../assets/images/4/training6-4.webp';
import img6_5 from '../../../assets/images/4/training6-5.webp';
import img6_6 from '../../../assets/images/4/training6-6.webp';
import img6_7 from '../../../assets/images/4/training6-7.webp';
import img6_8 from '../../../assets/images/4/training6-8.webp';
import img6_9 from '../../../assets/images/4/training6-9.webp';
import img9_1 from '../../../assets/images/4/training9-1.webp';
import img9_2 from '../../../assets/images/4/training9-2.webp';
import img9_3 from '../../../assets/images/4/training9-3.webp';
import img10 from '../../../assets/images/4/training10.webp';
import img13 from '../../../assets/images/4/training13.webp';
import img14 from '../../../assets/images/4/training14.webp';
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
        title: 'Общие правила оказания первой помощи при кровотечениях',
        image: img1_1,
        imageContent: null,
        content: () => {
            return (
                <>
                    <ol>
                        <li>Уложить пострадавшего в горизонтальное положение.</li>
                        <li>Закрыть рану стерильной салфеткой, наложить давящую повязку. </li>
                        <li>В зависимости от вида кровопотери постарайтесь остановить кровь с помощью давящей повязки, жгута, закрутки или пережатия поврежденного сосуда.</li>
                        <li>По возможности приложить холод к источнику кровотечения.</li>
                        <li>Следить за сознанием, пульсом и артериальным давлением до прибытия скорой медицинской помощи.</li>
                        <li>Как можно быстрее доставить пострадавшего в лечебное учреждение, где ему будет оказана квалифицированная помощь.</li>
                    </ol>
                </>
            )
        }
    },
    {
        id: 1,
        title: 'Правила наложения кровоостанавливающего жгута',
        image: img2,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Характеристика правильного наложения жгута при артериальном кровотечении:</Typography>
                    <ol>
                        <li>Жгут накладывается на конечностях: на плечо, предплечье, голень или бедро выше раны на 2–5 см. (при повреждении вены - ниже раны на 2–5 см), на одежду или подложенную ткань.</li>
                        <li>Жгут растягивают, делают первый тур с максимальным натяжением, контролируют пульс на артерии ниже жгута (он должен отсутствовать), наблюдают уменьшение, а затем остановку кровотечения. Накладывают последующие туры жгута с меньшим натяжением так, чтобы не было ущемление мягких тканей, концы его фиксируют.</li>
                        <li>Место наложения жгута или повязки должно быть хорошо видно, его не скрывают одеждой или бинтом.</li>
                        <li>Чтобы контролировать прошедшее время и облегчить работу бригаде скорой помощи, необходимо подложить под жгут либо прикрепить к одежде рядом с ним записку, указав дату и точное время наложения жгута.</li>
                        <li>Время наложения жгута - 1 час, затем он должен быть ослаблен на 10 минут (в течение этого времени применяют пальцевое прижатие артерии) и перемещен несколько выше предыдущего места. Так поступают каждый час, пока пострадавший не будет обеспечен медицинской помощью. Причем конечность ниже жгута нужно тепло укутать (искусственный обогрев применять нельзя), так как она не может обогреваться самостоятельно.</li>
                        <li>Если наложить жгут невозможно (ранения шеи, высокие раны плеча и бедра) его заменяют другие способы остановки кровотечения: наружное пальцевое придавливание пульсирующего сосуда выше раны или непосредственно в ней.</li>
                        <li>Пострадавшего с сильным кровотечением после наложения жгута нужно немедленно доставить в ближайший медицинский пункт.</li>

                    </ol>
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
                value: 'обработать край раны йодом',
                isCorrect: false
            },
            {
                value: 'промыть рану перекисью водорода',
                isCorrect: false
            },
            {
                value: 'остановить кровотечение',
                isCorrect: true
            },
            {
                value: 'провести иммобилизацию конечности',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>При открытом переломе конечности с сильным кровотечением раны необходимо в первую очередь:</Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'наложения давящей повязки',
                isCorrect: false
            },
            {
                value: 'пальцевое прижатие',
                isCorrect: false
            },
            {
                value: 'наложения жгута',
                isCorrect: true
            },
            {
                value: 'возвышенное положение',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Самым надежным способом остановки кровотечения в случае повреждения крупных артериальных сосудов рук и ног является:</Typography>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Алгоритм наложения давящей повязки',
        image: img5,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Наложение давящей повязки для временной остановки наружного кровотечения применяют преимущественно при небольших кровотечениях таких, как венозные, капиллярные и кровотечения из небольших артерий.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Характеристика правильного наложения жгута при артериальном кровотечении:</Typography>
                    <ol>
                    <li>Уложить или усадить пострадавшего в удобное положение.</li>
<li>Поднять конечность.</li>
<li>Обработать кожу вокруг раны кожным антисепиком.</li>
<li>Наложить стерильную салфетку и зафиксировать её 2 – 3 турами бинта.</li>
<li>Наложить валик из бинта или ваты.</li>
<li>Зафиксировать тем же бинтом тугой циркулярной повязкой, перекрещивая бинт над валиком.</li>
<li>Иммобилизировать конечность.</li>
<li>Успокоить пострадавшего.</li>
<li>Транспортировать в горизонтальном положении.</li>
                    </ol>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Основные точки прижатия артерий',
        image: null,
        imageContent: null,
        content: () => {

            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Пальцевое прижатие артерии применяется сразу же при обнаружении кровотечения. Артерию можно прижать там, где она расположена более поверхностно и проходит над костью.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Пальцевое прижатие возможно выполнять только в течение 10-15 минут, поэтому этот метод применяется перед наложением жгута, во время ослабления жгута, или когда последний отсутствует, но прибытие медицинских специалистов ожидается с минуты на минуту.</Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 700 }} colSpan={2}>Основные точки прижатия артерий</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_1} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>височная артерия</b> прижимается в височной области к подлежащей кости (не применять при переломах костей черепа!)</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_2} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>подчелюстная артерия</b> - к углу нижней челюсти</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_3} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>сонная артерия</b> к поперечным отросткам шейных позвонков</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_4} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>подключичная артерия</b> к первому ребру в надключичной ямке</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_5} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>подмышечная артерия</b> - к головке плечевой кости в подмышечной ямке</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_6} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>плечевая артерия</b> - к плечевой кости по внутренней стороне двуглавой мышцы</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_7} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>лучезапястная артерия</b> - в области лучезапястного сустава у большого пальца</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_8} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>бедренная артерия</b> - ниже паховой складки на бедре, давление осуществляют кулаком</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img6_9} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>подколенная артерия</b> - в подколенной ямке артерии тыла стопы к подлежащей кости между 1 и 2 или между 3 и 4 пальцами</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                value: '5 минут',
                isCorrect: false
            },
            {
                value: '10-15 минут',
                isCorrect: true
            },
            {
                value: '30 минут',
                isCorrect: false
            },
            {
                value: 'не более 1 часа',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Пальцевое прижатие возможно выполнять только в течение:</Typography>
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
                value: 'наложить жгут на выше места ранений',
                isCorrect: false
            },
            {
                value: 'наложить жгут на ниже места ранений',
                isCorrect: false
            },
            {
                value: 'наложить сосудистый шов',
                isCorrect: false
            },
            {
                value: 'наложить давящую повязку на место ранений',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Как остановить кровотечение при ранении вены и некрупных артерий:</Typography>
                </>
            )
        }
    },
    {
        id: 8,
        title: 'Максимальное сгибание конечности',
        image: null,
        imageContent: null,
        content: () => {

            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Максимальное сгибание конечности - применяется при расположении раны на предплечье, голени, бедре, при повреждении подключичной артерии.</Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img9_1} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>При ранении предплечья</b> головка бинта помещается в локтевую ямку, затем рука сгибается в локтевом суставе и фиксируется в таком положении.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img9_2} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>При локализации раны</b> сгибается на голени коленный сустав; <b style={{textDecoration: 'underline'}}>рана на бедре</b> - нога сгибается в тазобедренном суставе и фиксируется к животу.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'middle'  }}
                                >
                                    <TableCell align="center">
                                        <img src={img9_3} alt="image" style={{margin: 1, width: "100%", maxWidth: "200px"}} />
                                    </TableCell>
                                    <TableCell align="left"><b style={{textDecoration: 'underline'}}>При повреждении подключичной артерии</b> выполняют следующий приём - руки заводят за спину и фиксируются в области локтевых суставов. В этом случае первое ребро приближается к ключице и уменьшается кровоток в подключичной артерии.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )
        }
    },
    {
        id: 9,
        title: 'Транспортные положения',
        image: img10,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>После остановки кровотечения конечности придают удобное фиксированное положение.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b style={{textDecoration: 'underline'}}>В случае большой кровопотери</b> (пульс на запястье не определяется) пострадавшего укладывают на спину, ноги приподнимают на 30-45 см, подложив валик (например, из одежды).</Typography>
                    <Typography variant='body1' component="p" gutterBottom>При отсутствии у пострадавшего сознания необходимо, прежде всего, убедиться в наличии «признаков жизни». Если есть пульс на сонной артерии и пострадавший дышит, его переводят в стабильное боковое положение и приподнимают ножной край импровизированных носилок на 15° (или приподнимают ноги на 30-45 см).</Typography>
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
                value: 'руки заводят за спину и фиксируются в области локтевых суставов',
                isCorrect: true
            },
            {
                value: 'нога сгибается в тазобедренном суставе и фиксируется к животу',
                isCorrect: false
            },
            {
                value: 'рука сгибается в локтевом суставе и фиксируется в таком положении',
                isCorrect: false
            },
            {
                value: 'все ответы верны',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>При повреждении подключичной артерии:</Typography>
                </>
            )
        }
    },
    {
        id: 11,
        title: 'Выберите несколько правильных ответов',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'укладывают на спину, ноги приподнимают на 30-45 см',
                isCorrect: true
            },
            {
                value: 'укладывают в положение лежа на боку и частично на животе',
                isCorrect: false
            },
            {
                value: 'переводят в стабильное боковое положение и приподнимают ножной край импровизированных носилок на 15°',
                isCorrect: true
            },
            {
                value: 'переводят в положение «полусидя»',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>В случае большой кровопотери пострадавшего укладывают:</Typography>
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
                value: 'А – 1, Б – 2, В – 3',
                isCorrect: false
            },
            {
                value: 'А – 3, Б – 2, В – 1',
                isCorrect: true
            },
            {
                value: 'А – 2, Б – 1, В – 3',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите виды кровотечений с изображениями:</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img13} alt="image" style={{ width: '100%', maxWidth: '700px' }} />
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
                value: 'А – 3, Б – 1, В – 2',
                isCorrect: false
            },
            {
                value: 'А – 2, Б – 3, В – 1',
                isCorrect: true
            },
            {
                value: 'А – 1, Б – 2, В – 1',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите виды кровотечений и способы их остановки:</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img14} alt="image" style={{ width: '100%', maxWidth: '700px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 14,
        title: 'Вставьте пропущенное слово',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'пальцевое',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>________ прижатие возможно выполнять только в течение 10-15 минут, поэтому этот метод применяется перед наложением жгута, во время ослабления жгута, или когда последний отсутствует, но прибытие медицинских специалистов ожидается с минуты на минуту.</Typography>
                </>
            )
        }
    },
    {
        id: 15,
        title: 'Вставьте пропущенное слово',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'артериальное',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>___________ кровотечение характеризуется алым цветом крови; пульсация, фонтанирование.</Typography>
                </>
            )
        }
    }
];

export default TrainingData