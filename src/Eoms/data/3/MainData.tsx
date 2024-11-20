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
  title: () => { return (<>{insertLineBreak(theme, 5)}</>) },
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
                <TableCell align="left" sx={{ color: "primary.main" }}>Трасса</TableCell>
                <TableCell align="left">Положение оси ВЛ на земной поверхности</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Пикеты (ПК)</TableCell>
                <TableCell align="left">Отрезки, на которые разбита трасса, длина ПК зависит от номинального напряжения ВЛ и типа местности</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Нулевой пикетный знак</TableCell>
                <TableCell align="left">Обозначает начало трассы</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Центровой знак</TableCell>
                <TableCell align="left">Обозначает центр расположения опоры в натуре на трассе строящейся ВЛ</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Производственный пикетаж</TableCell>
                <TableCell align="left">Установка пикетных и центровых знаков на трассе в соответствии с ведомостью расстановки опор</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Фундамент опоры</TableCell>
                <TableCell align="left">Конструкция, заделанная в грунт или опирающаяся на него и передающая ему нагрузки от опоры, изоляторов, проводов (тросов) и от внешних воздействий (гололёда, ветра)</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Основание фундамента</TableCell>
                <TableCell align="left">Грунт нижней части котлована, воспринимающий нагрузку</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Пролёт (длина пролёта)</TableCell>
                <TableCell align="left">Расстояние между центрами двух опор, на которых подвешены провода. Различают промежуточный (между двумя соседними промежуточными опорами) и анкерный (между анкерными опорами) пролёты. Переходный пролёт — пролёт, пересекающий какое-либо сооружение или естественное препятствие (реку, овраг)</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Угол поворота линии</TableCell>
                <TableCell align="left">Угол α между направлениями трассы ВЛ в смежных пролётах (до и после поворота)</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Стрела провеса</TableCell>
                <TableCell align="left">Вертикальное расстояние между низшей точкой провода в пролёте и прямой, соединяющей точки его крепления на опорах</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Габарит провода</TableCell>
                <TableCell align="left">Вертикальное расстояние от низшей точки провода в пролёте до пересекаемых инженерных сооружений, поверхности земли или воды</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ color: "primary.main" }}>Шлейф (петля)</TableCell>
                <TableCell align="left">Отрезок провода, соединяющий на анкерной опоре натянутые провода соседних анкерных пролётов</TableCell>
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
            <li>организовать просмотр динамической инфографики и последующую беседу по уточнению и конкретизации первичных знаний;</li>
            <li>создать условия для освоения обучающимися знаний в форме интерактивной деятельности;</li>
            <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию как основному инструменту достижения личного и профессионального успеха;</li>
            <li>познакомить обучающихся с информацией об организации ремонта воздушных линий;</li>
            <li>содействовать установлению в сознании обучающихся устойчивых связей между накопленным и новым опытом познавательной деятельности;</li>
            <li>фиксировать предложенные обучающимися гипотезы, курировать их обсуждение.</li>
          </ul>
        </Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
        <Typography variant='body1' component="div">
          <p>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите динамическую инфографику по теме «{theme}».</p>
          <p>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
          <p>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и умений при изучении модуля:</p>
          <ul>
            <li>Организация ремонта воздушных линий</li>
            <li>Виды ремонтных работ.</li>
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
            <li>обеспечить усвоение основ организации ремонта воздушных линий;</li>
            <li>выявить недостатки в знаниях и способах действий обучающихся, установить причины выявленных недостатков;</li>
            <li>способствовать развитию умения правильно составлять план и пользоваться им, сопоставлять факты и события, сравнивать, анализировать, систематизировать материал и формулировать выводы, находить нужную информацию и использовать ее на практике.</li>
          </ul>
        </Typography>
        <Typography variant='h6' component="p" color={"primary.main"}>{"Рекомендации для студента (самостоятельная работа):"}</Typography>
        <Typography variant='body1' component="div">
          <p>Запустите виртуальный тренажер по теме «{theme}».</p>
          <p>В ходе практической работы выполните тренировочные задания, которые помогут освоить новый материал.</p>
          <p>В процессе интерактивного взаимодействия с тренажером познакомьтесь с информацией об организации ремонта воздушных линий.</p>
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
            <li>интерактивное задание на установление соответствия.</li>
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