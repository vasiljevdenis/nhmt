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
  title: () => { return (<>{insertLineBreak(theme, 4)}</>) },
  fgos: {
    title: () => { return (<>ФГОС СПО <br /> 18.02.14</>) },
    name: () => { return (<>Химическая технология производства <br /> химических соединений</>) }
  },
  mdk: {
    title: () => { return (<>МДК 04.01 <br className='br' /> <br /></>) },
    name: () => { return (<>Основы ведения технологических <br /> процессов производства <br /> органических веществ</>) }
  },
  info: () => {
    return (
      <>
        <Typography variant='h6' component="p" color={"primary.main"}>ФГОС СПО:</Typography>
        <Typography variant='body1' component="p">Приказ Министерства просвещения РФ от 15 ноября 2023 г. N 861 "Об утверждении федерального государственного образовательного стандарта среднего профессионального образования по специальности 18.02.14 Химическая технология производства химических соединений"</Typography>
        <Typography variant='body1' component="p">18.02.14 Химическая технология производства химических соединений</Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>ПОП-П:</Typography>
        <Typography variant='body1' component="p">18.02.14 Химическая технология производства химических соединений</Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>Профессиональный модуль:</Typography>
        <Typography variant='body1' component="p">ПМ.04 Ведение технологических процессов органических веществ</Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>МДК 04.01:</Typography>
        <Typography variant='body1' component="p">Основы ведения технологических процессов производства органических веществ</Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>Раздел:</Typography>
        <Typography variant='body1' component="p">Ведение основных технологических процессов производства органических веществ</Typography>
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
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы алкилирования</TableCell>
                <TableCell align="left">Это введение в молекулу органического соединения алкильной группы, а также получение алкильных производных химических элементов</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы галогенирования</TableCell>
                <TableCell align="left">Это введение атома галогена в молекулу органического соединения</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы гидролиза</TableCell>
                <TableCell align="left">Это процесс взаимодействия сложного химического вещества с водой, итогом которого становится разложение молекул этого вещества</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы гидратации</TableCell>
                <TableCell align="left">Это присоединение молекул воды к молекулам вещества или к ионам</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы этерификации</TableCell>
                <TableCell align="left">Это реакция образования сложных эфиров при взаимодействии кислот и спиртов</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы нитрования</TableCell>
                <TableCell align="left">Это реакция введения нитрогруппы —NO2 в молекулы органических соединений</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы гидрирования</TableCell>
                <TableCell align="left">Это реакции присоединения водорода по кратным связям молекул органических соединений</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Процессы дегидрирования</TableCell>
                <TableCell align="left">Это реакция отщепления водорода от молекулы органического соединения</TableCell>
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
            <li>организовать просмотр видеолекции и последующую беседу по уточнению и конкретизации первичных знаний;</li>
            <li>создать условия для освоения обучающимися знаний в форме интерактивной деятельности;</li>
            <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию как основному инструменту достижения личного и профессионального успеха;</li>
            <li>познакомить обучающихся с информацией о сущности основных технологических процессов производства органических веществ;</li>
            <li>содействовать установлению в сознании обучающихся устойчивых связей между накопленным и новым опытом познавательной деятельности;</li>
            <li>фиксировать предложенные обучающимися гипотезы, курировать их обсуждение.</li>
          </ul>
        </Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
        <Typography variant='body1' component="div">
          <p>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите видеолекцию по теме «{theme}».</p>
          <p>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
          <p>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и умений при изучении модуля:</p>
          <ul>
            <li>Производство органических веществ;</li>
            <li>Виды углеводородного сырья.</li>
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
            <li>организовать практическую, в т.ч. самостоятельную, деятельность обучающихся для отработки навыков решения определенных учебных заданий;</li>
            <li>обеспечить усвоение обучающимися знаний и способов действий на уровне применения их в разнообразных ситуациях;</li>
            <li>объяснить обучающимся порядок выполнения заданий;</li>
            <li>консультировать обучающихся по мере необходимости;</li>
            <li>обеспечить в ходе выполнения тренировочных заданий повышение уровня осмысления изученного материала, глубины его понимания;</li>
            <li>обеспечить усвоение основ производства органических веществ;</li>
            <li>выявить недостатки в знаниях и способах действий обучающихся, установить причины выявленных недостатков;</li>
            <li>способствовать развитию умения правильно составлять план и пользоваться им, сопоставлять факты и события, сравнивать, анализировать, систематизировать материал и формулировать выводы, находить нужную информацию и использовать ее на практике.</li>
          </ul>
        </Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
        <Typography variant='body1' component="div">
          <p>Запустите виртуальную лабораторию по теме «{theme}».</p>
          <p>В ходе лабораторной работы выполните тренировочные задания, которые помогут освоить новый материал.</p>
          <p>В процессе интерактивного взаимодействия с лабораторией познакомьтесь с информацией о сущности основных технологических процессов производства органических веществ.</p>
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
            <li>акцентировать внимание на итоговых результатах прохождения интерактивной мини-игры;</li>
            <li>подготовить обучающихся к самооценке и рефлексии.</li>
          </ul>
        </Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
        <Typography variant='body1' component="div">
          <p>Запустите интерактивную мини-игру по теме «{theme}».</p>
          <p>Последовательно ознакомьтесь с условиями учебной задачи.</p>
          <p>Выполните задания интерактивной мини-игры. Обратите внимание на отсутствие подсказок и ограниченное число попыток.</p>
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