import { Tooltip, Typography } from '@mui/material';
import img1 from '@images/infographics1.webp';
import img2 from '@images/infographics2.webp';
import img3 from '@images/infographics3.webp';
import img4 from '@images/infographics4.webp';
import img5 from '@images/infographics5.webp';
import img6 from '@images/infographics6.webp';
import img7 from '@images/infographics7.webp';
import { Slide } from '../../../types/infographicsTypes';

// <Tooltip title="" arrow placement="top" enterTouchDelay={0} leaveTouchDelay={5000}><span className='hint'></span></Tooltip>

const InfographicsData: Slide[] = [
  {
    title: 'Воздушные линии электропередач, их состав',
    previewImage: img1,
    imageContent: [
      {
        src: img1,
        alt: 'ЛЭП',
        description: 'ЛЭП'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom><b>Воздушная линия (ВЛ)</b> — конструкция для передачи и распределения электроэнергии по проводам, размещённым на открытом воздухе. Провода крепятся с помощью траверс, изоляторов и арматуры к опорам или сооружениям (мостам, путепроводам).</Typography>
          <Typography variant='body1' component="p" gutterBottom>Основные элементы ВЛ:</Typography>
          <ul>
            <li>Провода</li>
            <li>Траверсы</li>
            <li>Изоляторы</li>
            <li>Арматура</li>
            <li>Опоры</li>
            <li>Грозозащитные тросы</li>
            <li>Разрядники</li>
            <li>Заземление</li>
            <li>Секционирующие устройства</li>
            <li>Вспомогательное оборудование (аппаратура связи, ёмкостной отбор мощности и др.).</li>
          </ul>
        </>
      )
    }

  },
  {
    title: 'Устройство воздушных ЛЭП',
    previewImage: img2,
    imageContent: [
      {
        src: img2,
        alt: 'Устройство воздушных ЛЭП',
        description: 'Устройство воздушных ЛЭП'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" paragraph>
            <b>Опоры воздушной линии</b> (<u>ВЛ</u>) предназначены для удержания
            проводов на заданной высоте и расстоянии друг от друга.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Конструкции опор
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Для напряжения до 1000 В: промежуточные, угловые с подкосом, угловые
                с оттяжкой, анкерные.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Для напряжения 6–10 кВ: аналогичные типы конструкций.
              </Typography>
            </li>
          </ul>

          <Typography variant="h5" gutterBottom>
            Провода и изоляторы
          </Typography>
          <Typography variant="body1" paragraph>
            Для <u>ВЛ</u> применяются материалы с низким электрическим
            сопротивлением, высокой механической прочностью и устойчивостью к влаге
            и химическим воздействиям.
          </Typography>
          <Typography variant="body2" gutterBottom>
            <b>Минимальные сечения проводов:</b>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">Алюминиевые — 16 мм²</Typography>
            </li>
            <li>
              <Typography variant="body1">Сталеалюминиевые — 10 мм²</Typography>
            </li>
            <li>
              <Typography variant="body1">Стальные однопроволочные — 4 мм²</Typography>
            </li>
          </ul>

          <Typography variant="h5" gutterBottom>
            Заземляющие устройства
          </Typography>
          <Typography variant="body1" paragraph>
            Для <u>ВЛ</u> напряжением до 1000 В расстояние между заземлениями
            зависит от числа грозовых часов:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">До 40 часов — максимум 200 м</Typography>
            </li>
            <li>
              <Typography variant="body1">Более 40 часов — максимум 100 м</Typography>
            </li>
          </ul>

          <Typography variant="h5" gutterBottom>
            Крепление проводов
          </Typography>
          <Typography variant="body1" paragraph>
            <b>Изоляторы</b> фиксируют провода на опорах. Они устанавливаются на{" "}
            <u>крюки</u> или <u>штыри</u>.
          </Typography>
          <Typography variant="body2" gutterBottom>
            <b>Типы изоляторов:</b>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">ТФ и шин</Typography>
            </li>
            <li>
              <Typography variant="body1">ШО</Typography>
            </li>
            <li>
              <Typography variant="body1">УШЛ</Typography>
            </li>
            <li>
              <Typography variant="body1">АИК и ШЛ</Typography>
            </li>
            <li>
              <Typography variant="body1">ШД</Typography>
            </li>
            <li>
              <Typography variant="body1">П</Typography>
            </li>
          </ul>

          <Typography variant="h5" gutterBottom>
            Соединение проводов
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">Скрутка</Typography>
            </li>
            <li>
              <Typography variant="body1">Соединительные зажимы</Typography>
            </li>
            <li>
              <Typography variant="body1">Плашечные зажимы</Typography>
            </li>
          </ul>

          <Typography variant="body1" paragraph>
            Способы крепления к изоляторам выполняются вязкой, обеспечивая
            надёжность удержания проводов.
          </Typography>
        </>
      )
    }

  },
  {
    title: 'Обслуживание воздушных линий',
    previewImage: img3,
    imageContent: [
      {
        src: img3,
        alt: 'Обслуживание воздушных линий',
        description: 'Обслуживание воздушных линий'
      }
    ],
    content: () => {
      return (
        <>
          <ul>
            <li>
              <Typography>
                <strong>Сечение и диаметр проводов по условиям механической прочности:</strong>
                Минимальные сечения проводов, мм²:
              </Typography>
              <ul>
                <li>
                  <Typography>Алюминиевые – 16</Typography>
                </li>
                <li>
                  <Typography>Сталеалюминиевые и биметаллические – 10</Typography>
                </li>
                <li>
                  <Typography>Стальные многопроволочные – 25</Typography>
                </li>
                <li>
                  <Typography>Диаметр однопроволочных проводов – 4 мм</Typography>
                </li>
              </ul>
              <Typography>Запрещается применять расплетенные провода.</Typography>
            </li>
            <li>
              <Typography>
                <strong>Соединение проводов:</strong> Соединять сваркой или соединительными зажимами.
              </Typography>
              <ul>
                <li>
                  <Typography>Запрещается сварка встык однопроволочных проводов.</Typography>
                </li>
                <li>
                  <Typography>
                    Прочность соединений, подвергаемых тяжению, должна составлять не менее 90% прочности провода.
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography>
                <strong>Металлические конструкции на опорах ВЛ:</strong> Защищать от коррозии.
              </Typography>
              <Typography>Бандажи также следует защищать от коррозии.</Typography>
            </li>
            <li>
              <Typography>
                <strong>Заземление:</strong>
              </Typography>
              <ul>
                <li>
                  <Typography>
                    В сетях с изолированной нейтралью крюки и штыри фазных проводов на железобетонных опорах и арматуры опор
                    заземлять, а в сетях с заземленной нейтралью соединять с нулевым проводом.
                  </Typography>
                </li>
                <li>
                  <Typography>Крюки и штыри на деревянных опорах не заземлять.</Typography>
                </li>
                <li>
                  <Typography>Сопротивление заземления не должно превышать 50 Ом.</Typography>
                </li>
                <li>
                  <Typography>Диаметр заземляющих и нулевых проводников должен быть не менее 6 мм.</Typography>
                </li>
                <li>
                  <Typography>
                    На опорах, где имеется повторное заземление нулевого провода (см. также ПУЭ), крюки и штыри заземляют.
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography>
                <strong>Бандажи на опорах:</strong> Выполнять из мягкой оцинкованной проволоки диаметром 4 мм и более.
              </Typography>
              <Typography>
                Можно применять не оцинкованную проволоку диаметром 5-6 мм с покрытием ее асфальтовым лаком.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Количество витков бандажа:</strong>
              </Typography>
              <Typography>
                Количество витков зависит от диаметра проволоки: при 4 мм — 12, при 5 мм — 10, при 6 мм — 8.
              </Typography>
              <Typography>Требование соблюдается при отсутствии особых указаний в проекте.</Typography>
            </li>
            <li>
              <Typography>
                <strong>Знаки на опорах:</strong> Устанавливать (наносить) порядковый номер и год установки опоры.
              </Typography>
              <Typography>Знаки устанавливают на высоте 2,5-3 метра.</Typography>
            </li>
          </ul>
        </>
      )
    }

  },
  {
    title: 'Требования к ВЛ напряжением выше 1000В',
    previewImage: img4,
    imageContent: [
      {
        src: img4,
        alt: 'ВЛ напряжением выше 1000В',
        description: 'ВЛ напряжением выше 1000В'
      }
    ],
    content: () => {
      return (
        <>
          <ul>
            <li>
              <Typography>
                <strong>Заземление:</strong> Необходимо заземлять:
              </Typography>
              <ul>
                <li>
                  <Typography>Опоры с грозозащитным тросом или другой грозозащитой.</Typography>
                </li>
                <li>
                  <Typography>
                    Опоры, на которых установлены силовые или измерительные трансформаторы, разъединители и другие аппараты.
                  </Typography>
                </li>
              </ul>
              <Typography>
                <strong>Удельное эквивалентное сопротивление земли (ρ), Ом·м:</strong>
              </Typography>
              <ul>
                <li>
                  <Typography>До 100: наибольшее сопротивление заземляющего устройства — 10 Ом.</Typography>
                </li>
                <li>
                  <Typography>От 100 до 500: не более 15 Ом.</Typography>
                </li>
                <li>
                  <Typography>От 500 до 1000: не более 20 Ом.</Typography>
                </li>
                <li>
                  <Typography>От 1000 до 5000: не более 30 Ом.</Typography>
                </li>
                <li>
                  <Typography>Более 5000: 6 × 10<sup>-3</sup> ρ.</Typography>
                </li>
              </ul>
              <Typography>
                Для опор высотой более 40 м на участках ВЛ с трассами грозозащиты сопротивления заземляющих устройств должны
                быть в 2 раза меньше указанных.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Сечение каждого заземляющего спуска на опоре:</strong> Сечение должно быть не менее 35 мм².
              </Typography>
              <Typography>Диаметр (для однопроволочного) — не менее 10 мм.</Typography>
              <Typography>
                Допускаются стальные оцинкованные однопроволочные спуски диаметром не менее 6 мм.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Соединения проводов и тросов:</strong> Выполнять с использованием соединительных зажимов, сварки или
                обоих способов одновременно.
              </Typography>
              <Typography>Прочность соединения должна составлять не менее 90% прочности провода или троса.</Typography>
              <Typography>В одном пролете допускается не более одного соединения на каждый провод или трос.</Typography>
            </li>
          </ul>
        </>
      )
    }

  },
  {
    title: 'Надзор и уход за ВЛ напряжением до 1000В',
    previewImage: img5,
    imageContent: [
      {
        src: img5,
        alt: 'ВЛ напряжением до 1000В',
        description: 'ВЛ напряжением до 1000В'
      }
    ],
    content: () => {
      return (
        <>
          <ul>
            <li>
              <Typography>
                <strong>Осмотр ВЛ:</strong> Выполнять один раз в месяц.
              </Typography>
              <Typography>Осмотр проводится электромонтером в дневное время.</Typography>
            </li>
            <li>
              <Typography>
                <strong>Проверка железобетонных опор и пасынков:</strong> Проводить один раз в 6 лет (начиная с 4-го года
                эксплуатации).
              </Typography>
              <Typography>
                Проверяется наличие трещин с выборочной откопкой грунта вокруг опор на глубину 0,5 м.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Проверка загнивания деталей деревянных опор:</strong> Выполнять один раз в 3 года.
              </Typography>
              <Typography>
                Древесину, скрытую в грунте, откапывать на глубину 0,3–0,5 м. Прогнившие на глубину более 3 см опоры следует
                заменить.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Измерение стрел провеса и расстояний:</strong> Выполнять при подозрении на несоблюдение норм.
              </Typography>
              <Typography>
                Используются геодезические приборы (например, теодолит), которые позволяют измерять без приближения к ВЛ.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Измерение сопротивления заземления опор:</strong> Проводить ежегодно в первый год эксплуатации, далее
                один раз в 3 года.
              </Typography>
              <Typography>Сопротивление заземления не должно превышать 50 Ом.</Typography>
            </li>
            <li>
              <Typography>
                <strong>Проверка и перетяжка болтов, гаек и бандажей:</strong> Проводить ежегодно в первые 2 года, далее по
                мере необходимости.
              </Typography>
              <Typography>
                Наибольшее ослабление крепежей наблюдается в начале эксплуатации.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Внеочередные осмотры ВЛ:</strong> Выполнять после аварий, стихийных бедствий, во время ледоходов,
                гололеда, при морозах ниже -40°C и в других подобных случаях.
              </Typography>
              <Typography>При необходимости используются автомобили, вертолеты и другое оборудование.</Typography>
            </li>
            <li>
              <Typography>
                <strong>Ремонт:</strong> Сроки и объемы работ по капитальному и текущему ремонту устанавливаются на основании
                осмотров, измерений и испытаний.
              </Typography>
              <Typography>
                <strong>Капитальный ремонт:</strong> Замена опор, пасынков, траверс и проводов.
              </Typography>
              <Typography>
                <strong>Текущий ремонт:</strong> Выправка опор, подтяжка и замена бандажей, регулировка провеса проводов,
                замена изоляторов.
              </Typography>
            </li>
          </ul>
        </>
      )
    }

  },
  {
    title: 'Безопасность труда при обслуживании ЛЭП',
    previewImage: img6,
    imageContent: [
      {
        src: img6,
        alt: 'Безопасность труда',
        description: 'Безопасность труда'
      }
    ],
    content: () => {
      return (
        <>
          <ul>
            <li>
              <Typography>
                <strong>Работы на опорах:</strong> Подъем и работа на опорах разрешаются только при уверенности в их
                прочности.
              </Typography>
              <Typography>
                Запрещается работать на угловых опорах со штыревыми изоляторами со стороны внутреннего угла. При работе на
                опоре важно сохранять видимость ближайшего провода под напряжением.
              </Typography>
              <Typography>
                <strong>Условия допуска по электробезопасности:</strong>
                <ul>
                  <li>Группа не ниже 3 – любые работы до верха опоры.</li>
                  <li>Группа не ниже 2 – работы со снятием напряжения до верха опоры или без снятия напряжения на расстоянии не более 2 м от нижних проводов.</li>
                  <li>Группа 1 – работы до 3 м от земли.</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Работы с телескопической вышки:</strong> Соблюдать расстояние не менее 0,6 м от проводов напряжением до 1000 В.
              </Typography>
              <Typography>
                При возможности приближения к проводам на меньшее расстояние, они должны быть заземлены.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Закрепление тросов и оттяжек:</strong> При сомнении в прочности опоры работы выполняются без подъема на опору.
              </Typography>
              <Typography>
                Используются телескопические вышки, соседние опоры или специальные раскрепляющие устройства.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Работы по замене опор и их деталей:</strong> Запрещается одновременно откапывать обе ноги опоры.
              </Typography>
              <Typography>
                Установка приставок начинается с одной ноги, после чего выполняется закрепление бандажей и утрамбовка грунта. Замена сдвоенных приставок выполняется поочередно. Запрещено находиться в котловане при вытаскивании или опускании приставок.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Осмотры ВЛ и воздушных пунктов:</strong> Запрещается подниматься на опоры или конструкции, а также идти под проводами в темное время суток.
              </Typography>
              <Typography>
                При поиске повреждений необходимо иметь предупреждающие плакаты. В труднодоступных местах осмотр проводят два лица с группой не ниже 2.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Чистка арматуры и замена ламп:</strong> Работы с телескопической вышки с изолирующим звеном выполняются без снятия напряжения.
              </Typography>
              <Typography>
                При отсутствии изолирующего звена или при использовании приставной деревянной лестницы работы выполняются со снятием напряжения. Допускается чистка светильников, установленных ниже фазных проводов, на деревянных опорах без заземляющих спусков.
              </Typography>
            </li>
          </ul>
        </>
      )
    }

  },
  {
    title: 'Ремонт воздушных линий',
    previewImage: img7,
    imageContent: [
      {
        src: img7,
        alt: 'Ремонт воздушных линий',
        description: 'Ремонт воздушных линий'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Объем текущего ремонта ВЛ:</strong>
          </Typography>
          <ul>
            <li>Верховые осмотры линий электропередачи.</li>
            <li>Контроль состояния и подтяжка резьбовых контактных зажимов.</li>
            <li>Выправка промежуточных опор.</li>
            <li>Замена отдельных деревянных опор и их деталей.</li>
            <li>Проверка и регулировка стрел провеса и габаритов линий.</li>
            <li>Перетяжка проводов и замена отдельных изоляторов.</li>
            <li>Замена приставок отдельных опор.</li>
            <li>Подтяжка, очистка, замена и окраска бандажей.</li>
            <li>Проверка трубчатых разрядников с их съемом с опор.</li>
            <li>Проверка состояния и измерение сопротивления заземления.</li>
          </ul>

          <Typography variant="subtitle1" gutterBottom>
            <strong>Объем капитального ремонта ВЛ:</strong>
          </Typography>
          <ul>
            <li>Все работы текущего ремонта.</li>
            <li>Верховые проверки с выемкой проводов из зажимов, проверкой и заменой дефектных проводов и линейной арматуры.</li>
            <li>Полная перетяжка линии.</li>
            <li>Измерение переходного сопротивления контактных соединений проводов.</li>
            <li>Ремонт контактных соединений проводов.</li>
            <li>Выправка положения или замена опор.</li>
            <li>Проверка наличия трещин в железобетонных приставках.</li>
            <li>Выборочные вскрытия и контроль состояния заземления опор.</li>
            <li>Испытания в соответствии с правилами технической эксплуатации и техники безопасности.</li>
          </ul>

          <Typography variant="subtitle1" gutterBottom>
            <strong>Технология замены приставок опор:</strong>
          </Typography>
          <Typography>
            <strong>Промежуточные опоры:</strong> Укрепление опоры выполняется временными оттяжками, закрепляемыми к временным хомутам, на которые также подвешивается полиспаст. Старая приставка извлекается с помощью полиспаста, котлован подчищается, новая приставка опускается в котлован, закрепляется бандажами, после чего котлован засыпается и утрамбовывается.
          </Typography>
          <Typography>
            <strong>Анкерные опоры:</strong> Закрепление опоры выполняется с помощью оттяжек, устанавливаемых к несменяемой стойке, и временной подпорной стойки. Работы выполняются без снятия проводов с изоляторов.
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            <strong>Замена проводов:</strong>
          </Typography>
          <ul>
            <li>Удаление вязок крепления проводов к изоляторам и снятие проводов с крюков.</li>
            <li>Раскатка новых проводов вдоль линии, их подъем, закрепление и натяжение.</li>
            <li>Расчет и контроль стрел провеса в зависимости от длины пролета, сечения проводов и температуры воздуха.</li>
          </ul>

          <Typography variant="subtitle1" gutterBottom>
            <strong>Обслуживание трубчатых разрядников:</strong>
          </Typography>
          <ul>
            <li>Проверка лакового покрытия и его восстановление при необходимости.</li>
            <li>Проверка и устранение дефектов креплений, заземления и состояния электродов.</li>
            <li>Регулировка искровых промежутков в соответствии с конструкцией разрядника.</li>
            <li>Замена разрядника при значительных отклонениях размеров внутреннего канала.</li>
          </ul>
        </>
      )
    }

  }
];

InfographicsData.forEach((item, index) => {
  item.id = index;
});

export default InfographicsData;