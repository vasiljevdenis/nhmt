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

const MainData: Data = {
    title: () => { return (<>Организация ремонта внутрицеховых электросетей <br className='br-lg' /> и осветительных электроустановок</>) },
    fgos: {
        title: () => { return (<>ФГОС СПО <br /> 13.01.10</>) },
        name: () => { return (<>Электромонтер по ремонту и обслуживанию <br /> электрооборудования (по отраслям)</>) }
    },
    mdk: {
        title: () => { return (<>МДК 03.01 <br /> <br /></>) },
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
                <Typography variant='body1' component="p">ПМ.01 Организация и выполнение работ по эксплуатации и ремонту электроустановок</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>МДК 03.01:</Typography>
                <Typography variant='body1' component="p">Технология ремонтных работ устройств электрооборудования и электроустановок</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Раздел:</Typography>
                <Typography variant='body1' component="p">Технология ремонтных работ устройств электрооборудования и электроустановок</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Тема:</Typography>
                <Typography variant='body1' component="p">Организация ремонта внутрицеховых электросетей и осветительных электроустановок</Typography>
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
                                <TableCell align="left" sx={{ color: "primary.main" }}>Ремонт</TableCell>
                                <TableCell align="left">(значение)</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Неисправности</TableCell>
                                <TableCell align="left">(значение)</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Внутрицеховые электросети</TableCell>
                                <TableCell align="left">(значение)</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Осветительные электроустановки</TableCell>
                                <TableCell align="left">(значение)</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Шинопровод</TableCell>
                                <TableCell align="left">(значение)</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Выключатели</TableCell>
                                <TableCell align="left">(значение)</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Автоматические выключатели</TableCell>
                                <TableCell align="left">(значение)</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Техника безопасности</TableCell>
                                <TableCell align="left">(значение)</TableCell>
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
                <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для обучающегося (самостоятельная работа):"}</Typography>
                <Typography variant='body1' component="div">
                    <p>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите динамическую инфографику по теме «Цифровое моделирование несъемных протезов из циркония»</p>
                    <p>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
                    <p>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и умений при изучении модуля:</p>
                    <ul>
                        <li>несъемное протезирование</li>
                        <li>CAD/CAM системы</li>
                        <li>компьютерное моделирование</li>
                        <li>программное обеспечение Exocad.</li>
                    </ul>
                    <p>При необходимости просмотрите материал еще раз.</p>
                    <p>Возвращайтесь к наиболее сложным аспектам темы.</p>
                    <p>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз.</p>
                </Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Рекомендации для преподавателя:</Typography>
                <Typography variant='body1' component="div">
                    <ul>
                        <li>организовать просмотр динамической инфографики и последующую беседу по уточнению и конкретизации первичных знаний;</li>
                        <li>создать условия для освоения обучающимися знаний в форме интерактивной деятельности;</li>
                        <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию как основному инструменту достижения личного и профессионального успеха;</li>
                        <li>познакомить обучающихся с информацией о несъемном протезировании;</li>
                        <li>ознакомить с CAD/CAM системами;</li>
                        <li>раскрыть назначение компьютерного моделирования;</li>
                        <li>ознакомить с устройством программного обеспечения Exocad;</li>
                        <li>содействовать установлению в сознании обучающихся устойчивых связей между накопленным и новым опытом познавательной деятельности;</li>
                        <li>фиксировать предложенные обучающимися гипотезы, курировать их обсуждение.</li>
                    </ul>
                </Typography>
            </>
        )
    },
    training: () => {
        return (
            <>
                <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для обучающегося (самостоятельная работа):"}</Typography>
                <Typography variant='body1' component="div">
                    <p>Запустите виртуальный тренажер по теме «Цифровое моделирование несъемных протезов из циркония».</p>
                    <p>В ходе практической работы выполните тренировочные задания, которые помогут освоить новый материал.</p>
                    <p>В процессе интерактивного взаимодействия с тренажером познакомьтесь  с информацией о несъемном протезировании, CAD/CAM системах, компьютерном протезировании, этапах компьютерного моделирования, особенностях программного обеспечения Exocad.</p>
                    <p>Уделите особое внимание технике сканирования гипсовой модели.</p>
                    <p>Выполните тренировочные задания на проверку первичного освоения материала.</p>
                    <p>При выполнении заданий обратите внимание на рекомендации преподавателя.</p>
                    <p>При возникновении ошибок возвращайтесь к повторному изучению теоретического материала.</p>
                </Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Рекомендации для преподавателя:</Typography>
                <Typography variant='body1' component="div">
                    <ul>
                        <li>организовать практическую, в т.ч. самостоятельную, деятельность обучающихся для отработки навыков решения определенных учебных заданий;</li>
                        <li>обеспечить усвоение обучающимися знаний и способов действий на уровне применения их в разнообразных ситуациях;</li>
                        <li>объяснить обучающимся порядок выполнения заданий;</li>
                        <li>консультировать обучающихся по мере необходимости;</li>
                        <li>обеспечить в ходе выполнения тренировочных заданий повышение уровня осмысления изученного материала, глубины его понимания;</li>
                        <li>обеспечить усвоение основ цифрового моделирования несъемных протезов из циркония;</li>
                        <li>выявить недостатки в знаниях и способах действий обучающихся, установить причины выявленных недостатков;</li>
                        <li>способствовать развитию умения правильно составлять план и пользоваться им, сопоставлять факты и события, сравнивать, анализировать, систематизировать материал и формулировать выводы, находить нужную информацию и использовать ее на практике.</li>
                    </ul>
                </Typography>
            </>
        )
    },
    game: () => {
        return (
            <>
                <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для обучающегося (самостоятельная работа):"}</Typography>
                <Typography variant='body1' component="div">
                    <p>Запустите интерактивную мини-игру по теме «Цифровое моделирование несъемных протезов из циркония».</p>
                    <p>Последовательно ознакомьтесь с условиями учебной задачи.</p>
                    <p>Выполните задания мини-игры. Обратите внимание на отсутствие подсказок и ограниченное число попыток.</p>
                    <p>При выполнении заданий обратите внимание на рекомендации преподавателя.</p>
                    <p>Выполните тренировочные задания на проверку приобретенных знаний, умений и навыков:</p>
                    <ul>
                        <li>интерактивное задание с выбором одного правильного ответа;</li>
                    </ul>
                    <p>Осуществите самопроверку и предварительную оценку.</p>
                    <p>Используйте технологию пошагового контроля по результату за каждое задание.</p>
                    <p>Сформулируйте конечный результат своей работы.</p>
                    <p>При возникновении ошибок возвращайтесь к повторному изучению теоретического материала.</p>
                </Typography>
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
            </>
        )
    }

};

export default MainData