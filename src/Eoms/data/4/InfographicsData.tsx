import { Tooltip, Typography } from '@mui/material';
import img1 from '@images/infographics1.webp';
import img2 from '@images/infographics2.webp';
import img3 from '@images/infographics3.webp';
import img4 from '@images/infographics4.webp';
import img5 from '@images/infographics5.webp';
import img6 from '@images/infographics6.webp';
import img7 from '@images/infographics7.webp';
import img8 from '@images/infographics8.webp';
import { Slide } from '../../../types/infographicsTypes';

// <Tooltip title="" arrow placement="top" enterTouchDelay={0} leaveTouchDelay={5000}><span className='hint'></span></Tooltip>

const InfographicsData: Slide[] = [
  {
    title: 'Сырьевая база химических производств',
    previewImage: img1,
    imageContent: [
      {
        src: img1,
        alt: 'Сырьевая база химических производств',
        description: 'Сырьевая база химических производств'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" gutterBottom>
            Сырье — материалы, используемые в производстве. Это один из ключевых элементов технологического процесса, определяющий экономичность, технику производства и качество продукции. В химической промышленности затраты на сырье составляют 60—70% себестоимости.
          </Typography>
          <Typography variant="body1" paragraph>
            Россия обладает значительными природными ресурсами: 22% лесов, 20% пресных вод, 16% минерально-сырьевых ресурсов, включая 32% мировых запасов газа, 12% нефти и угля, а также более 27% запасов железа и олова, 36% никеля и 40% платиновых металлов.
          </Typography>
          <Typography variant="body1" paragraph>
            Химическое производство характеризуется:
            <ul>
              <li>Многовариантностью сырьевой базы, включая ресурсы из недр (фосфаты, сера, нефть, уголь), сельскохозяйственную продукцию, воздух и воду, а также переработку отходов (например, сульфаты, фосфогипс);</li>
              <li>Возможностью комплексного использования сырья для получения различных химических продуктов;</li>
              <li>Разнообразием методов переработки, позволяющих получать несколько продуктов из одного сырья (например, из бензола можно получить каучук, полистирол или ядохимикаты).</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Пример: для производства ацетилена могут использоваться различные виды сырья — природный газ, газы нефтепереработки и карбид кальция.
          </Typography>
        </>
      )
    }

  },
  {
    title: 'Классификация сырья химической промышленности',
    previewImage: img2,
    imageContent: [
      {
        src: img2,
        alt: 'Классификация сырья химической промышленности',
        description: 'Классификация сырья химической промышленности'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" paragraph>
            • По происхождению — минеральное, растительное, животное;
          </Typography>
          <Typography variant="body1" paragraph>
            • По запасам — невозобновляемое (руды, минералы, горючие ископаемые) и возобновляемое (вода, воздух, растительное и животное сырье);
          </Typography>
          <Typography variant="body1" paragraph>
            • По химическому составу — неорганическое (руды, минералы) и органическое (нефть, уголь, природный газ);
          </Typography>
          <Typography variant="body1" paragraph>
            • По агрегатному состоянию — твердое (руды, минералы, уголь, сланцы), жидкое (вода, нефть) и газообразное (воздух, природный газ).
          </Typography>
          <Typography variant="body1" paragraph>
            Кроме того, сырье можно подразделить на первичное (минеральное, растительное, животное, горючие ископаемые, вода, воздух) и вторичное (отходы), а также на природное и искусственное (кокс, синтетические материалы).
          </Typography>
          <Typography variant="body1" paragraph>
            Для сырья в химико-технологических процессах важны следующие требования:
            <ul>
              <li>Минимальное количество стадий переработки в конечный продукт;</li>
              <li>Минимальные энергетические и материальные затраты;</li>
              <li>Максимум эксергии (часть энергии, равная максимальной полезной работе, которую может совершить система);</li>
              <li>Низкие температуры, давления и расход энергии;</li>
              <li>Высокая концентрация целевого продукта в реакционной смеси.</li>
            </ul>
          </Typography>
        </>
      )
    }

  },
  {
    title: 'Нефть',
    previewImage: img3,
    imageContent: [
      {
        src: img3,
        alt: 'Нефть',
        description: 'Нефть'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" paragraph>
            Нефть — это маслянистая горючая жидкость темно-бурого или черного цвета с характерным запахом, которая легче воды (ρ = 0,73 – 0,97 г/см3) и почти не растворяется в воде. Согласно одной из версий, нефть образовалась из оседавших остатков животных и растений в древних мелководных морях.
          </Typography>
          <Typography variant="body1" paragraph>
            Нефть состоит из смеси углеводородов разной молекулярной массы, поэтому не имеет определённой температуры кипения. В ней присутствуют жидкие углеводороды, такие как алканы, циклоалканы и арены, а также растворены твёрдые и газообразные углеводороды. В разных месторождениях соотношение этих компонентов варьируется. Помимо углеводородов, нефть включает кислородные, сернистые и азотистые органические соединения.
          </Typography>
          <Typography variant="body1" paragraph>
            Над нефтеносным слоем скапливается попутный газ, который частично растворён в нефти. Этот газ состоит на 75% из метана, а также содержит этан, пропан, бутан и пары жидких углеводородов.
          </Typography>
        </>
      )
    }

  },
  {
    title: 'Переработка нефти',
    previewImage: img4,
    imageContent: [
      {
        src: img4,
        alt: 'Переработка нефти',
        description: 'Переработка нефти'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" paragraph>
            Переработка нефти — сложный многоступенчатый процесс, включающий физическое разделение нефти на фракции. На первом этапе нефть очищается от газов, воды и примесей (первичная сепарация). Затем на НПЗ она подвергается очистке от механических примесей и лёгких углеводородов.
          </Typography>
          <Typography variant="body1" paragraph>
            Атмосферная перегонка нефти разделяет её на несколько фракций в зависимости от температуры кипения углеводородов:
          </Typography>
          <ul>
            <li><strong>Бензин</strong> (40-200°C) — углеводороды C5-C11</li>
            <li><strong>Лигроин</strong> (150-250°C) — углеводороды C8-C14</li>
            <li><strong>Керосин</strong> (180-300°C) — углеводороды C12-C18</li>
            <li><strong>Газойль</strong> ({">"} 275°C) — углеводороды C14-C25</li>
          </ul>
          <Typography variant="body1" paragraph>
            Остаток от перегонки — мазут, который подвергается дальнейшей переработке. При перегонке под уменьшенным давлением из мазута получают смазочные масла, парафин и вазелин. Из остатков — гудрон, используемый для асфальта. Перегонка нефти не позволяет получить бензин в большом объёме — его выход не превышает 20%.
          </Typography>
          <Typography variant="body1" paragraph>
            Основные характеристики фракций представлены ниже:
          </Typography>
          <table>
            <thead>
              <tr>
                <th>Фракция</th>
                <th>Температура кипения (°C)</th>
                <th>Применение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Бензин</td>
                <td>40-200</td>
                <td>Горючее для автомобилей</td>
              </tr>
              <tr>
                <td>Лигроин</td>
                <td>150-250</td>
                <td>Горючее для тракторов</td>
              </tr>
              <tr>
                <td>Керосин</td>
                <td>180-300</td>
                <td>Горючее для реактивных двигателей</td>
              </tr>
              <tr>
                <td>Газойль</td>
                <td>270-350</td>
                <td>Дизельное горючее</td>
              </tr>
              <tr>
                <td>Смазочные масла</td>
                <td>Труднолетучие</td>
                <td>Смазка</td>
              </tr>
              <tr>
                <td>Парафин</td>
                <td>Тоже</td>
                <td>Изоляционный материал, медицина, пищевая промышленность</td>
              </tr>
              <tr>
                <td>Гудрон</td>
                <td>Остаток</td>
                <td>Покрытие дорог, кровли</td>
              </tr>
            </tbody>
          </table>
          <Typography variant="body1" mt={2} paragraph>
            Вакуумная перегонка мазута позволяет выделить смазочные масла с разной температурой кипения и вязкостью (соляровое, веретённое и другие).
          </Typography>
        </>
      )
    }

  },
  {
    title: 'Природный газ',
    previewImage: img5,
    imageContent: [
      {
        src: img5,
        alt: 'Природный газ',
        description: 'Природный газ'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" paragraph>
            Природный газ, поступающий из скважин, содержит механические примеси (песок, пыль), углеводородный конденсат, пары воды и соли, что может вызвать трудности при транспортировке, включая коррозию и образование гидратов. Для подготовки газа к транспортировке используется осушка, чтобы избежать конденсации воды и образования пробок.
          </Typography>
          <Typography variant="body1" paragraph>
            Методы осушки газов можно классифицировать на три основные группы:
          </Typography>
          <ul>
            <li><strong>Физические методы</strong>: охлаждение, компримирование и сочетание этих процессов. Включают вымораживание влаги, охлаждение газа с компримированием и инжекцию химических веществ для улавливания гидратов.</li>
            <li><strong>Химические методы</strong>: реакция воды с химическими веществами, образующими продукты с низкой упругостью водяных паров. Эти реагенты эффективны, но сложно регенерируются, что ограничивает их промышленное применение.</li>
            <li><strong>Физико-химические методы</strong>: основаны на поглощении влаги сорбентами. Эти методы делятся на адсорбцию (с твёрдыми сорбентами) и абсорбцию (с жидкими сорбентами).</li>
          </ul>
        </>
      )
    }

  },
  {
    title: 'Фракционирование газов. Основные методы разделения газов',
    previewImage: img6,
    imageContent: [
      {
        src: img6,
        alt: 'Фракционирование газов',
        description: 'Фракционирование газов'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" paragraph>
            Газофракционирование служит для выделения низкомолекулярных углеводородов (С1 – С6) из газов, таких как метан, этан, пропан и другие, которые используются как компоненты высокооктановых бензинов или сырьё для нефтехимической промышленности.
          </Typography>
          <Typography variant="body1" paragraph>
            Источники углеводородных газов на НПЗ включают газы, выделившиеся при переработке нефти (АТ, АВТ), термодеструкции и каталитических процессах, а также газы стабилизации бензинов.
          </Typography>
          <Typography variant="body1" paragraph>
            Процесс газофракционирования включает в себя несколько фракций:
          </Typography>
          <ul>
            <li><strong>Предельные газы</strong> (метан, пропан, бутан и другие) разделяются на фракции с помощью ректификации и абсорбции, и используются для пиролиза, синтеза каучука, создания автогаза и т.д.</li>
            <li><strong>Непредельные газы</strong> (пропилен, бутилен) применяются в нефтехимии для полимеризации, алкилирования и производства синтетического каучука.</li>
          </ul>
          <Typography variant="body1" paragraph>
            На НПЗ и ГПЗ разделение газов происходит через:
          </Typography>
          <ul>
            <li><strong>Компрессию и конденсацию</strong>: сжатие газа и его охлаждение до двухфазной системы газа и жидкости, разделение которой осуществляется с помощью газосепараторов.</li>
            <li><strong>Абсорбцию</strong>: процесс избирательного поглощения газов жидким абсорбентом. Основной абсорбент для углеводородных газов – жидкие углеводороды, такие как бензин.</li>
            <li><strong>Ректификацию</strong>: разделение газов при высоких давлениях, требующее высокой точности фракционирования, например, разделение близкокипящих углеводородов, таких как бутан и бутилен.</li>
          </ul>
          <Typography variant="body1" paragraph>
            Конкретный выбор схемы разделения зависит от состава газовой смеси и требуемой чистоты продуктов. Ректификация на газофракционирующих установках (ГФУ) может быть многоступенчатой, с использованием различных колонн для разделения предельных и непредельных газов.
          </Typography>
          <Typography variant="body1" paragraph>
            Пример схемы: на ГФУ газы сначала разделяются в деэтанизаторе на метан и этан, затем проходят через колонки для выделения пропана, бутана, изобутана и других углеводородных фракций. Также используются абсорбционные колонны для работы с газами каталитического крекинга.
          </Typography>
        </>
      )
    }

  },
  {
    title: 'Каменный уголь',
    previewImage: img7,
    imageContent: [
      {
        src: img7,
        alt: 'Каменный уголь',
        description: 'Каменный уголь'
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant="body1" paragraph>
            Каменный уголь, как и природный газ и нефть, является важным источником энергии и ценным химическим сырьём.
          </Typography>
          <Typography variant="body1" paragraph>
            Ископаемые угли представляют собой продукт разложения растений, которые росли на Земле 55–300 миллионов лет назад. Конечным продуктом разложения является углерод, содержание которого в углях варьируется от 55% до 97% в зависимости от возраста угля и его происхождения.
          </Typography>
          <Typography variant="body1" paragraph>
            Помимо углерода, угли содержат водород (1-6%), кислород (2-20%), азот (1-2%) и серу (0,5-6%). Эти элементы образуют органические соединения и смолистые вещества. Содержание смолистых веществ в углях оценивается по выходу летучих веществ, выделяющихся при нагревании угля без доступа воздуха. С повышением содержания углерода выход летучих веществ уменьшается.
          </Typography>
          <Typography variant="body1" paragraph>
            Каменные угли являются основным видом ископаемых углей. Они отличаются составом даже внутри одного месторождения:
          </Typography>
          <ul>
            <li>Углерод (C): 78-90%</li>
            <li>Водород (H): 4-5,8%</li>
            <li>Кислород (O): 3-15%</li>
            <li>Азот (N): 0,5-2,0%</li>
            <li>Сера (S): 1-6%</li>
            <li>Золы: 6-25%, часто около 10%</li>
            <li>Вода: 4-12%</li>
            <li>Теплотворная способность (Q): 20,730-31,400 кДж/кг (5000-7000 ккал/кг)</li>
          </ul>
          <Typography variant="body1" paragraph>
            Каменный уголь в основном используется для получения кокса. Основной метод переработки каменного угля — коксование (сухая перегонка), при котором уголь нагревается до 1000–1200°C без доступа воздуха. В результате получаются следующие продукты:
          </Typography>
          <ul>
            <li><strong>Кокс:</strong> используется в металлургии как восстановитель при производстве чугуна.</li>
            <li><strong>Каменноугольная смола:</strong> служит источником ароматических углеводородов (бензол, толуол, ксилол, нафталин) и других веществ, таких как фенолы и азотсодержащие соединения.</li>
            <li><strong>Пек:</strong> густая черная масса, оставшаяся после перегонки смолы, используется для приготовления электродов и кровельного толя.</li>
            <li><strong>Надсмольная вода:</strong> используется для получения аммиака, сульфата аммония, фенола и других продуктов.</li>
            <li><strong>Коксовый газ:</strong> применяется для обогрева коксовых печей, а также подвергается химической переработке для получения водорода, метана, бензола, толуола, сульфата аммония и этилена.</li>
          </ul>
        </>
      )
    }

  },
  {
    title: 'Переработка каменного угля',
    previewImage: img8,
    imageContent: [
      {
        src: img8,
        alt: 'Переработка каменного угля',
        description: 'Переработка каменного угля'
      }
    ],
    content: () => {
      return (
        <>
          <Typography paragraph>
            <b>Переработка угля</b> — это процесс, включающий разнообразные методы, направленные на извлечение ценного сырья и энергии из углеродистых материалов. Эти процессы позволяют получать различные химические вещества, газовые смеси, жидкие углеводороды и углеродистые материалы, которые находят применение в энергетике, химической промышленности, металлургии и других отраслях.
          </Typography>
          <Typography paragraph>
            Основные методы переработки угля включают газификацию, гидрирование, термическое растворение и сухую перегонку (пиролиз). Каждый из этих методов имеет свои особенности и применяются в зависимости от целей переработки угля.
          </Typography>
          <Typography paragraph>
            Газификация угля — это процесс превращения угля в горючие газы под действием газифицирующих агентов, таких как воздух, кислород, водяной пар или их смеси. Состав полученных газов зависит от типа газификатора и агентов, которые используются в процессе. Например, при использовании воздуха основной компонент газа — угарный газ (СО), водород (Н₂), метан (СН₄) и азот (N₂). В результате газификации получаются генераторные газы, которые можно использовать для энергетических целей, а также образуется зола, которую часто используют в строительстве или перерабатывают в химической промышленности.
          </Typography>
          <Typography paragraph>
            Гидрирование угля или деструктивная гидрогенизация — это процесс термического разложения угля в присутствии водорода и катализаторов под высоким давлением. Цель этого процесса — преобразование угля в более насыщенные углеводородами продукты, такие как жидкие углеводороды, аналогичные нефти или природному газу. Этот метод позволяет получать газ с высокой теплотой сгорания, который используется как альтернативный источник энергии.
          </Typography>
          <Typography paragraph>
            Термическое растворение или сжижение угля — это процесс воздействия на уголь органическими растворителями при температурах 340-380°C. В этом процессе часть угольной массы распадается и переходит в раствор, что позволяет извлекать из угля более ценное сырье для химической промышленности, а также создавать продукты с улучшенной реакционной способностью, такие как коксовые материалы или пластмассы. Сжиженный уголь может использоваться для получения различных материалов, включая коксы, углеродистые материалы и другие продукты переработки.
          </Typography>
          <Typography paragraph>
            Сухая перегонка (пиролиз) угля — это процесс разложения угля без доступа кислорода, который происходит при высоких температурах. В процессе пиролиза уголь подвергается разложению, при этом выделяются углеводороды, смолы, газообразные вещества и твердые остатки в виде кокса. Это высокотемпературное разложение (около 1000°C) используется для получения металлургического кокса, а также других химических продуктов, таких как бензол, смолы и аммиак.
          </Typography>
          <Typography paragraph>
            Коксование угля — это особый вид пиролиза, при котором уголь разлагается при температуре около 1000°C, образуя металлургический кокс. Этот процесс важен для черной металлургии, так как кокс служит восстановителем для получения железа в доменных печах. Торфяной кокс, получаемый при более низких температурах, используется в некоторых случаях в металлургических и химических производствах.
          </Typography>
          <Typography paragraph>
            Продукты переработки угля включают коксовый газ, сульфат аммония, бензол и другие органические вещества, такие как нафталин и антрацен. Эти вещества являются важными сырьевыми материалами для органической химии и используются для производства полимеров, синтетических материалов, а также в фармацевтической и пищевой промышленности.
          </Typography>
          <Typography paragraph>
            Коксовый газ является важным продуктом, получаемым при коксовании угля. Он представляет собой смесь угарного газа (СО), водорода (Н₂), метана (СН₄), углекислого газа (СО₂) и других соединений. Этот газ обладает высокой теплотой сгорания и используется в энергетике и химической промышленности.
          </Typography>
          <Typography paragraph>
            Сульфат аммония, получаемый из аммиака коксового газа, широко используется в сельском хозяйстве как удобрение. Он содержит азот и серу, необходимые для роста сельскохозяйственных культур, особенно в условиях применения бессернистых удобрений.
          </Typography>
          <Typography paragraph>
            Сырой бензол и другие органические вещества, такие как нафталин и антрацен, выделяются из каменноугольной смолы. Эти вещества являются важными сырьевыми материалами для органической химии и используются для производства полимеров, синтетических материалов, а также в фармацевтической и пищевой промышленности.
          </Typography>
          <Typography paragraph>
            Каменноугольная смола также перерабатывается для получения различных масел и пека, которые используются в строительстве, производстве изоляционных материалов и в других отраслях.
          </Typography>
          <Typography paragraph>
            Переработка угля представляет собой сложный и многоступенчатый процесс, включающий различные методы, каждый из которых направлен на извлечение различных продуктов, имеющих значительное промышленное значение. Эти продукты используются в энергетике, металлургии, химической и фармацевтической промышленности, а также в сельском хозяйстве. Технологии переработки угля продолжают развиваться, что позволяет более эффективно использовать угольные ресурсы, минимизируя экологические последствия и повышая экономическую эффективность.
          </Typography>
        </>
      )
    }

  },
];

InfographicsData.forEach((item, index) => {
  item.id = index;
});

export default InfographicsData;