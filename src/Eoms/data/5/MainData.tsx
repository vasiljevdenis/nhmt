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
    title: () => { return (<>Технические измерения</>) },
    fgos: {
        title: () => { return (<>ФГОС СПО <br /> 23.01.17</>) },
        name: () => { return (<>Мастер по ремонту <br /> и обслуживанию <br /> автомобилей</>) }
    },
    mdk: {
        title: () => { return (<>МДК 03.01 <br /> <br /></>) },
        name: () => { return (<>Слесарное дело и <br /> технические измерения</>) }
    },
    info: () => {
        return (
            <>
                <Typography variant='h6' component="p" color={"primary.main"}>ФГОС СПО:</Typography>
                <Typography variant='body1' component="p">Приказ Минобрнауки России от 09.12.2016 № 1581 (ред. от 01.09.2022) «Об утверждении федерального государственного образовательного стандарта среднего профессионального образования по профессии 23.01.17 Мастер по ремонту и обслуживанию автомобилей» (Зарегистрировано в Минюсте России 20.12.2016 № 44800).</Typography>
                <Typography variant='body1' component="p">23.00.00 Техника и технологии наземного транспорта</Typography>
                <Typography variant='body1' component="p">23.01.17 Мастер по ремонту и обслуживанию автомобилей</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>ПОП-П:</Typography>
                <Typography variant='body1' component="p">23.01.17 Мастер по ремонту и обслуживанию автомобилей</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Профессиональный модуль:</Typography>
                <Typography variant='body1' component="p">ПМ.03 Производить текущий ремонт различных типов автомобилей в соответствии с требованиями технологической документации</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>МДК 03.01:</Typography>
                <Typography variant='body1' component="p">Слесарное дело и технические измерения</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Раздел:</Typography>
                <Typography variant='body1' component="p">Слесарное дело и технические измерения</Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Тема:</Typography>
                <Typography variant='body1' component="p">Технические измерения</Typography>
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
                                <TableCell align="left" sx={{ color: "primary.main" }}>Измерение (величины)</TableCell>
                                <TableCell align="left">Процесс экспериментального получения одного или более значений, которые могут быть обоснованно приписаны величине. Следует различать понятие «измерение» и понятие «контроль»</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Контроль</TableCell>
                                <TableCell align="left">Измерительный процесс, состоящий в установлении годности изделия по контролируемому параметру</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Прямое измерение</TableCell>
                                <TableCell align="left">Измерение, при котором искомое значение величины получают непосредственно от средства измерений</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Косвенное измерение</TableCell>
                                <TableCell align="left">Измерение, при котором искомое значение величины определяют на основании результатов прямых измерений других величин, функционально связанных с искомой величиной</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Совокупные измерения</TableCell>
                                <TableCell align="left">Проводимые одновременно измерения нескольких одноименных величин, при которых искомые значения величин определяют путем решения системы уравнений, получаемых при измерениях этих величин в различных сочетаниях</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Совместные измерения</TableCell>
                                <TableCell align="left">Проводимые одновременно измерения двух или нескольких не одноименных величин для определения зависимости между ними. По сути совокупные и совместные измерения являются разновидностью косвенных измерений</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Абсолютное измерение</TableCell>
                                <TableCell align="left">Измерение, основанное на прямых измерениях одной или нескольких основных величин и (или) использовании значений физических констант</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Относительное измерение</TableCell>
                                <TableCell align="left">Измерение отношения одноименных величин или функций этого отношения</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Статическое измерение</TableCell>
                                <TableCell align="left">Измерение физической величины, принимаемой в соответствии с конкретной измерительной задачей за неизменную на протяжении времени измерения</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Динамическое измерение</TableCell>
                                <TableCell align="left">Измерение, при котором средства измерений используют в динамическом режиме с изменениями условий (факторов) проведения измерительного эксперимента, которые влияют на результат измерения</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Однократное измерение</TableCell>
                                <TableCell align="left">Измерение, выполненное один раз</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Многократное измерение</TableCell>
                                <TableCell align="left">Измерение физической величины одного и того же размера, результат которого получен из нескольких следующих друг за другом измерений</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" colSpan={2}>В зависимости от планируемой точности бывают измерения технические, метрологические и ориентировочные</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Технические измерения</TableCell>
                                <TableCell align="left">Измерения, которые выполняются с заранее установленной точностью</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Изделие</TableCell>
                                <TableCell align="left">Продукт труда, вещь, произведённая для практического применения, сделанная с определённым назначением</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Чертеж</TableCell>
                                <TableCell align="left">Графическое изображение, выполненное в определенном масштабе, с указанием размеров и условно выраженных технических условий, соблюдение которых должно быть обеспечено при изготовлении изделия</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Метрология</TableCell>
                                <TableCell align="left">Наука об измерениях, методах и средствах обеспечения их единства и способах достижения требуемой точности</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ color: "primary.main" }}>Погрешность</TableCell>
                                <TableCell align="left">Это отклонение результата измерения от истинного значения измеряемой величины</TableCell>
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
                    <p>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите динамическую инфографику по теме «Технические измерения».</p>
                    <p>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
                    <p>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и умений при изучении модуля:</p>
                    <ul>
                        <li>методы измерений;</li>
                        <li>погрешности измерений;</li>
                        <li>средства измерений;</li>
                        <li>инструменты для измерений.</li>
                    </ul>
                    <p>При необходимости просмотрите материал еще раз.</p>
                    <p>Возвращайтесь к наиболее сложным аспектам темы.</p>
                    <p>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз.</p>
                </Typography>
                <Typography variant='h6' component="p" color={"primary.main"}>Рекомендации для преподавателя:</Typography>
                <Typography variant='body1' component="div">
                    <ul>
                        <li>организовать просмотр динамической инфографики и последующую беседу по уточнению и конкретизации первичных знаний; </li>
                        <li>создать условия для освоения обучающимися знаний в форме интерактивной деятельности;</li>
                        <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию как основному инструменту достижения личного и профессионального успеха;</li>
                        <li>познакомить обучающихся с видами измерений;</li>
                        <li>ознакомить с методами измерений;</li>
                        <li>раскрыть погрешности измерений;</li>
                        <li>охарактеризовать различные инструменты для измерений;</li>
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
                    <p>Запустите виртуальный тренажер по теме «Технические измерения».</p>
                    <p>В ходе практической работы выполните тренировочные задания, которые помогут освоить новый материал.</p>
                    <p>В процессе интерактивного взаимодействия с тренажером познакомьтесь с видами и средствами измерений.</p>
                    <p>Проведите практическую работу с виртуальным оборудованием и фиксацией ее результатов в ЭОМ. </p>
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
                        <li>консультировать обучающихся по мере необходимости; </li>
                        <li>обеспечить в ходе выполнения тренировочных заданий повышение уровня осмысления изученного материала, глубины его понимания;</li>
                        <li>обеспечить усвоение обучающимися устройства основных узлов системы охлаждения двигателя;</li>
                        <li>выявить недостатки в знаниях и способах действий обучающихся, установить причины выявленных недостатков; </li>
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
                    <p>Запустите интерактивную мини-игру по теме «Технические измерения».</p>
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