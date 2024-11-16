import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface Data {
    title: () => ReactNode;
    fgos: {
        title: () => ReactNode;
        name: () => ReactNode
    };
    mdk: {
        title: () => ReactNode;
        name: () => ReactNode
    };
    info: () => ReactNode;
    keywords: () => ReactNode;
    infographics: () => ReactNode;
    training: () => ReactNode;
    game: () => ReactNode
}

const theme = import.meta.env.VITE_APP_THEME;

function insertLineBreak(text: string, wordNumber: number): ReactNode {
    if (!text || wordNumber < 1) return text;

    const words = text.split(' '); // Разбиваем строку на слова

    // Проверяем, что индекс слова корректный
    if (wordNumber > words.length) return text;

    const beforeBreak = words.slice(0, wordNumber).join(' ');
    const afterBreak = words.slice(wordNumber).join(' ');

    return (
        <>
            {beforeBreak}
            <br className="br-lg" />
            {afterBreak}
        </>
    );
}

{/* <br className='br-lg' /> */ }
const MainData: Data = {
    title: () => { return (<>{theme}</>) },
    fgos: {
        title: () => { return (<>ФГОС СПО <br /> 13.01.10</>) },
        name: () => { return (<>Электромонтер по ремонту и обслуживанию <br /> электрооборудования (по отраслям)</>) }
    },
    mdk: {
        title: () => { return (<>МДК 03.01 <br className='br' /> <br /></>) },
        name: () => { return (<>Технология ремонтных работ устройств <br /> электрооборудования и электроустановок</>) }
    },
    info: () => {
        return (
            <>
                <Typography variant='h6' component="p" color={"primary.main"}>ФГОС СПО:</Typography>
                <Typography variant='body1' component="p">Приказ Министерства просвещения Российской Федерации от 28.04.2023 № 316 «Об утверждении федерального государственного образовательного стандарта среднего профессионального образования по профессии 13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)» (Зарегистрирован 05.06.2023 № 73728)</Typography>
                <Typography variant='body1' component="p">13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>ПОП-П:</Typography>
                <Typography variant='body1' component="p">13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Профессиональный модуль:</Typography>
                <Typography variant='body1' component="p">ПМ.03 Выполнение ремонта и работ по предупреждению аварий и неполадок устройств электроснабжения и электрооборудования (по отраслям)</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>МДК 03.01:</Typography>
                <Typography variant='body1' component="p">Технология ремонтных работ устройств электрооборудования и электроустановок</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Раздел:</Typography>
                <Typography variant='body1' component="p">Технология ремонтных работ устройств электрооборудования и электроустановок</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Тема:</Typography>
                <Typography variant='body1' component="p">{theme}</Typography>
            </>
        )
    },
    keywords: () => {
        return (
            <>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    },
    infographics: () => {
        return (
            <>
                <Typography variant='h6' component="p" color={"primary.main"}>Рекомендации для преподавателя:</Typography>
                <Typography variant='body1' component="div">
                    <ul>
                        <li></li>
                    </ul>
                </Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
                <Typography variant='body1' component="div">
                    <p>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите динамическую инфографику по теме «{theme}».</p>
                    <p>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
                    <p>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и умений при изучении модуля:</p>
                    <ul>
                        <li></li>
                    </ul>
                    <p>При необходимости просмотрите материал еще раз.</p>
                    <p>Возвращайтесь к наиболее сложным аспектам темы.</p>
                    <p>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз.</p>
                </Typography>
            </>
        )
    },
    training: () => {
        return (
            <>
                <Typography variant='h6' component="p" color={"primary.main"}>Рекомендации для преподавателя:</Typography>
                <Typography variant='body1' component="div">
                    <ul>
                        <li></li>
                    </ul>
                </Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
                <Typography variant='body1' component="div">
                    <p>Запустите виртуальный тренажер по теме «{theme}».</p>
                    <p>В ходе практической работы выполните тренировочные задания, которые помогут освоить новый материал.</p>
                    <p></p>
                    <p>Выполните тренировочные задания на проверку первичного освоения материала.</p>
                    <p>При выполнении заданий обратите внимание на рекомендации преподавателя.</p>
                    <p>При возникновении ошибок возвращайтесь к повторному изучению теоретического материала.</p>
                </Typography>
            </>
        )
    },
    game: () => {
        return (
            <>
                <Typography variant='h6' component="p" color={"primary.main"}>Рекомендации для преподавателя:</Typography>
                <Typography variant='body1' component="div">
                    <ul>
                        <li>обеспечить формирование у обучающихся умений самостоятельно применять знания в разнообразных ситуациях, в т.ч. при выполнении заданий разного уровня сложности;</li>
                        <li>контролировать выполнение заданий;</li>
                        <li>проверить степень усвоения знаний, умений при выполнении заданий разного уровня сложности;</li>
                        <li>мотивировать обучающихся для получения максимального количества баллов и подтверждения профессиональной компетентности;</li>
                        <li>отмечать степень вовлеченности обучающихся в работу;</li>
                        <li>акцентировать внимание на итоговых результатах прохождения всей мини-игры;</li>
                        <li>подготовить обучающихся к самооценке и рефлексии.</li>
                    </ul>
                </Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
                <Typography variant='body1' component="div">
                    <p>Запустите интерактивную мини-игру по теме «{theme}».</p>
                    <p>Последовательно ознакомьтесь с условиями учебной задачи.</p>
                    <p>Выполните задания мини-игры. Обратите внимание на отсутствие подсказок и ограниченное число попыток.</p>
                    <p>При выполнении заданий обратите внимание на рекомендации преподавателя.</p>
                    <p>Выполните тренировочные задания на проверку приобретенных знаний, умений и навыков:</p>
                    <ul>
                        <li>интерактивное задание с выбором одного правильного ответа;</li>
                        <li>интерактивное задание с выбором нескольких правильных ответов;</li>
                        <li>интерактивное задание с вводом строки;</li>
                        <li>интерактивное задание на установление верной последовательности.</li>
                    </ul>
                    <p>Осуществите самопроверку и предварительную оценку.</p>
                    <p>Используйте технологию пошагового контроля по результату за каждое задание.</p>
                    <p>Сформулируйте конечный результат своей работы.</p>
                    <p>При возникновении ошибок возвращайтесь к повторному изучению теоретического материала.</p>
                </Typography>
            </>
        )
    }

};

export default MainData