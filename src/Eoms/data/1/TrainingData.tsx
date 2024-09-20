import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import img1 from '../../../assets/images/1/training1.webp';
import img7 from '../../../assets/images/1/training7.webp';
import img8 from '../../../assets/images/1/training8.webp';
import img13 from '../../../assets/images/1/training13.webp';
import img14 from '../../../assets/images/1/training14.webp';
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
        title: 'Влияние медицинских работников на пациентов',
        image: img1,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Изучите текст о влиянии медицинских работников на пациентов:</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Миелогения</b> – это неблагоприятное влияние медицинской среды на психику пациента.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Эгогения</b> – влияние пациента на самого себя в связи с болезнью или определенным состоянием здоровья.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Эгротогения</b> – патологическое состояние, возникающие вследствие взаимного влияния пациентов друг на друга.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Ятрогения</b> – неблагоприятное влияние медицинского персонала, отрицательное влияние на состояние пациента, вплоть до болезненного состояния (неправильное слово, поведение и т.д.).</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Соророгения</b> – патологическая реакция, возникающие у пациента вследствие неблагоприятного воздействия с медицинской сестрой.</Typography>
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
                value: 'эгогении',
                isCorrect: true
            },
            {
                value: 'эгротогении',
                isCorrect: false
            },
            {
                value: 'ятрогении',
                isCorrect: false
            },
            {
                value: 'сорророгении',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Пациент, узнав диагноз, начинает прокручивать в голове самые неблагоприятные исходы. Это пример:</Typography>
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
                value: 'эгогении',
                isCorrect: false
            },
            {
                value: 'эгротогении',
                isCorrect: true
            },
            {
                value: 'ятрогении',
                isCorrect: false
            },
            {
                value: 'сорророгении',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Пациенты в палате громко осуждают неприятные побочные эффекты от назначенного препарата. Только поступивший пациент начинает переживать, потому что ему тоже выписали его. Это пример:</Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Типы вопросов пациенту',
        image: null,
        imageContent: null,
        content: () => {
            return (
                <>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" sx={{ fontWeight: 700 }}>Тип</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: 700 }}>Вопрос</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: 700 }}>Преимущество</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: 700 }}>Недостаток</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'baseline'  }}
                                >
                                    <TableCell align="left" sx={{ color: "primary.main" }}>Общие</TableCell>
                                    <TableCell align="left"><p>Как поживаете?</p><p>Как дела?</p></TableCell>
                                    <TableCell align="left">Полезны, так как способствуют самовыражению. Человек может описать собственными словами то, что для него важно</TableCell>
                                    <TableCell align="left">Трудно контролировать отклонения от вопроса, достигать определенной цели или ограничить словоохотливых собеседников</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'baseline'  }}
                                >
                                    <TableCell align="left"><span style={{ color: '#293896' }}>Конкретные</span> – полезны для быстрого получения стандартной информации. Важно дать отвечающему возможность сказать больше, если это необходимо. Сами по себе конкретные вопросы не предусматривают возможного выбора. Конкретные вопросы используются в чрезвычайных ситуациях, когда точная регистрация сведений может быть очень важна для лечения</TableCell>
                                    <TableCell align="left"><p>Фамилия?</p><p>Адрес?</p><p>Близкие родственники?</p><p>Любите ли вы картофельное пюре?</p></TableCell>
                                    <TableCell align="left">Позволяют быстро собрать конкретную информацию – точную и однозначную</TableCell>
                                    <TableCell align="left">Ограничены постановкой вопроса. Ориентированы только на вопрос. Они не позволяют пациенту давать обстоятельный ответ, поэтому сестре может потребоваться задать больше вопросов, чтобы получить, требуемую информацию</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'baseline'  }}
                                >
                                    <TableCell align="left"><span style={{ color: '#293896' }}>Наводящие</span> вопросы иногда могут выступать в роли подсказок, но обычно бывают одновременно наводящими и конкретными</TableCell>
                                    <TableCell align="left"><p>Вы бросите курить, не так ли?</p><p>Вы будете больше заниматься физическими упражнениями после выписки из больницы?</p></TableCell>
                                    <TableCell align="left">Наталкивают отвечающего на ответ, соответствующий вашему мнению</TableCell>
                                    <TableCell align="left">Ограничивает самовыражение отвечающего. Может вызвать гневную реакцию, если воспринимаются как угрожающий</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'baseline'  }}
                                >
                                    <TableCell align="left"><span style={{ color: '#293896' }}>Пробные</span> вопросы могут показаться назойливыми, поэтому, если они используются, их следует применять осторожно и очень редко. Они могут быть как общими, так и тесно связанными с обсуждаемой темой. Если их использовать часто, беседа может принять характер допроса</TableCell>
                                    <TableCell align="left"><p>Вы говорите, ваш муж много работает?</p><p>В последнее время боли в желудке у вас усилились?</p></TableCell>
                                    <TableCell align="left">Исследуют тему, которую спрашивающий считает важной. Ответы могут давать конкретную информацию</TableCell>
                                    <TableCell align="left">Может пугать отвечающего. Может вызвать гневную реакцию</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'baseline'  }}
                                >
                                    <TableCell align="left" sx={{ color: "primary.main" }}>Множественные</TableCell>
                                    <TableCell align="left">Вы говорите, ваш муж много работает? Как вы управляетесь по дому с двумя детьми?</TableCell>
                                    <TableCell align="left">Может демонстрировать интерес к поступкам</TableCell>
                                    <TableCell align="left">Приводит в замешательство, так как отвечающий не знает на какой вопрос отвечать сначала</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Конкретный',
                isCorrect: false
            },
            {
                value: 'Пробный',
                isCorrect: true
            },
            {
                value: 'Множественный',
                isCorrect: false
            },
            {
                value: 'Наводящий',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Выберите подходящий вид вопроса: вы хотите узнать больше о симптомах пациента, их характере и времени появления:</Typography>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'Пациент начинает много рассказывать, отклоняясь от основного вопроса',
                isCorrect: false
            },
            {
                value: 'Пациент не понимает, зачем медсестра задает так много вопросов, это его пугает',
                isCorrect: false
            },
            {
                value: 'Пациенту сложно точно ответить на вопрос медсестры, а от их большого количества он устает',
                isCorrect: true
            },
            {
                value: 'Пациент не может выразить свое мнение по обсуждаемому вопросу, чувствует давление и сердится',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Выберите к какой ситуации может привести конкретный вопрос:</Typography>
                </>
            )
        }
    },
    {
        id: 6,
        title: 'Картина болезни',
        image: img7,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Изучите внутреннюю и внешнюю картину болезни.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Внешняя, или объективная, картина болезни – это совокупность клинических данных, полученных медиками: пока­затели осмотра, перкуссии, пальпации, различных исследо­ваний.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Внутренняя картина болезни – это определенное состояние пациента в момент болезни. Внутренняя картина болезни (ВКБ) представляет собой универсальную реакцию человека на ситуацию функционального нарушения в организме. Содержанием ВКБ служит весь комплекс переживаний, ощущений, прогнозов, связанных с болезнью и ее лечением. На внутреннюю картину болезни влияют личностные характеристики пациента, как врожденные (темперамент, тип нервной системы), так и приобретенные (характер, интеллект и т. д.).</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Задача медицинского работника сводится к умелому наблюдению и изучению внутренней картины болезни и использованию ее при последующем общении с пациентом.</Typography>
                </>
            )
        }
    },
    {
        id: 7,
        title: 'Структура внутренней картины болезни',
        image: img8,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" gutterBottom>Изучите структуру внутренней картины болезни.</Typography>
                </>
            )
        }
    },
    {
        id: 8,
        title: 'Выберите один правильный ответ',
        image: null,
        imageContent: null,
        answers: [
            {
                value: 'чувственном уровне',
                isCorrect: false
            },
            {
                value: 'эмоциональном уровне',
                isCorrect: true
            },
            {
                value: 'интеллектуальном уровне',
                isCorrect: false
            },
            {
                value: 'уровне отношения к болезни и мотивация к возвращению (укреплению) здоровья',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Пациент постоянно спрашивает у медицинской сестры и врача прогнозы, касательно своего заболевания, плохо спит, почти ничего не ест и отказывается встречаться с родственниками. Это значит, что сложности у пациента возникли на:</Typography>
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
                value: 'чувственном уровне',
                isCorrect: false
            },
            {
                value: 'эмоциональном уровне',
                isCorrect: false
            },
            {
                value: 'интеллектуальном уровне',
                isCorrect: true
            },
            {
                value: 'уровне отношения к болезни и мотивация к возвращению (укреплению) здоровья',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Пациентка считает, что после постановки диагноза «Сахарный диабет», ей необходимо полностью исключить из рациона фрукты, потому что там содержится сахар. Это значит, что сложности у пациента возникли на:</Typography>
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
                value: 'невербальная',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" fontWeight={700} gutterBottom>____________ информация передается с помощью визуального контакта, внешнего вида и взаимного расположения коммуникаторов; жестов, мимики и походки; места и времени общения; прикосновения, запаха; тона, темпа, тембра и громкости голоса; пауз, покашливания, смеха и т.д. Элементы такого поведения сложно воспроизвести по собственному желанию. Специальным образом подготовленная медсестра может использовать поступающую от пациента невербальную информацию в дополнение к основным методам диагностики.</Typography>
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
                value: 'этический',
                isCorrect: true
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" fontWeight={700} gutterBottom>Проводником философии сестринского дела в повседневной сестринской практике служит этика. В 1994 году Ассоциация медицинских сестер России был утвержден первый _________ кодекс медицинской сестры России как система нравственных ориентиров, принятых всеми представителями данной профессии.</Typography>
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
                value: '1 – А, 2 – Б, 3 – В',
                isCorrect: false
            },
            {
                value: '1 – Б, 2 – В, 3 – А',
                isCorrect: true
            },
            {
                value: '1 – Б, 2 – А, 3 – В',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите виды персональных данных с примерами</Typography>
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
                value: '1 – А, 2 – Б, 3 – В',
                isCorrect: false
            },
            {
                value: '1 – В, 2 – А, 3 – Б',
                isCorrect: true
            },
            {
                value: '1 – Б, 2 – А, 3 – В',
                isCorrect: false
            }
        ],
        content: () => {
            return (
                <>
                    <Typography variant='h6' component="p" fontWeight={700} gutterBottom>Соотнесите термин с определением</Typography>
                    <Box sx={{ width: '100%', p: 1 }}>
                        <img src={img14} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    }
];

export default TrainingData