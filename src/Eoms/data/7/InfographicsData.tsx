import { Box, Typography } from '@mui/material';
import img1 from '../../../assets/images/7/infographics1.webp';
import img2 from '../../../assets/images/7/infographics2.webp';
import img3 from '../../../assets/images/7/infographics3.webp';
import img4 from '../../../assets/images/7/infographics4.webp';
import img5 from '../../../assets/images/7/infographics5.webp';
import img6 from '../../../assets/images/7/infographics6.webp';
import img7 from '../../../assets/images/7/infographics7.webp';
import img8 from '../../../assets/images/7/infographics8.webp';
import img1Content from '../../../assets/images/7/infographicsContent1.webp';
import img2Content from '../../../assets/images/7/infographicsContent2.webp';
import img3Content from '../../../assets/images/7/infographicsContent3.webp';
import img41Content from '../../../assets/images/7/infographicsContent4-1.webp';
import img42Content from '../../../assets/images/7/infographicsContent4-2.webp';
import img43Content from '../../../assets/images/7/infographicsContent4-3.webp';
import img44Content from '../../../assets/images/7/infographicsContent4-4.webp';
import img51Content from '../../../assets/images/7/infographicsContent5-1.webp';
import img52Content from '../../../assets/images/7/infographicsContent5-2.webp';
import img61Content from '../../../assets/images/7/infographicsContent6-1.webp';
import img62Content from '../../../assets/images/7/infographicsContent6-2.webp';
import img71Content from '../../../assets/images/7/infographicsContent7-1.webp';
import img72Content from '../../../assets/images/7/infographicsContent7-2.webp';
import img73Content from '../../../assets/images/7/infographicsContent7-3.webp';
import img74Content from '../../../assets/images/7/infographicsContent7-4.webp';
import img81Content from '../../../assets/images/7/infographicsContent8-1.webp';
import img82Content from '../../../assets/images/7/infographicsContent8-2.webp';
import { ReactNode } from 'react';

interface Slide {
    id: number;
    title: string;
    image: string;
    imageContent: string | null;
    content: () => ReactNode
}

const InfographicsData: Slide[] = [
    {
        id: 0,
        title: 'Понятие о сканировании гипсовой модели',
        image: img1,
        imageContent: img1Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><span>Сканирование гипсовой модели&nbsp;&ndash; это получение цифрового оттиска на основе гипсовой модели. Универсальное решение для будущего планирования ортопедических конструкций, операций по имплантации, ортодонтического лечения, 3D-печати.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>Удобство метода заключается в переносе данных строения зубочелюстной системы пациента в цифровой формат, не нужно хранить гипсовые модели дополнительно. 3D сканирование гипсовых слепков позволяет проводить моделирование и все необходимые манипуляции в специальных стоматологических программах, таких как Exocad. Благодаря этому удается снизить вероятность ошибок, максимально точно с анатомической точки зрения разработать и подогнать ортопедическую конструкцию или ортодонтическую систему, а также сократить сроки.&nbsp;</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>Кроме того&nbsp;</span><span>3D сканирование</span><span>&nbsp;слепков обладает следующими преимуществами:</span></Typography>
                    <ul>
                        <li><span>возможность хранения информации в цифровом виде в карточке пациента;</span></li>
                        <li><span>широкий спектр применения полученных моделей, начиная изготовлением протезов и заканчивая капами для исправления прикуса;</span></li>
                        <li><span>возможность оценки прикуса и проблем посредством специальных программ;</span></li>
                        <li><span>возможность визуализации результатов лечения пациенту.</span></li>
                    </ul>
                </>
            )
        }

    },
    {
        id: 1,
        title: 'Инструкция по технике безопасности при работе с 3D-сканером',
        image: img2,
        imageContent: img2Content,
        content: () => {
            return (
                <>
                    <ol>
                        <li>Надеть специальную одежду.</li>
                        <li>Проверить исправность электропроводки.</li>
                        <li><p>Приступая к работе, важно правильно организовать рабочее место.</p>
                            <ul>
                                <li>Содержать рабочее место в чистоте и порядке.</li>
                                <li>На рабочем месте не должно быть ничего лишнего, мешающего работе.</li>
                                <li>Разложить в порядке требуемые для работы инструменты и приспособления.</li>
                            </ul>
                        </li>
                        <li>При работе следить за отсутствием помех в сканировании.</li>
                        <li>Следить, чтобы руки, обувь и одежда были сухими.</li>
                        <li>Запрещается перемещать сканер или модифицировать его.</li>
                        <li>После окончания работ следует тщательно убрать свое рабочее место.</li>
                    </ol>
                </>
            )
        }
    },
    {
        id: 2,
        title: 'Снятие слепка челюсти',
        image: img3,
        imageContent: img3Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><span>По размерам челюсти пациента подбирается специальная &laquo;ложка&raquo; для снятия слепков. Она может быть одноразовой индивидуальной или металлической (стерилизуемой).&nbsp;</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>В &laquo;ложку&raquo; врач помещает необходимое количество слепочного материала.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&laquo;Ложка&raquo; помещается в ротовую полость пациента и прижимается к челюсти. Важно дать правильную нагрузку на ложку, чтобы масса &laquo;обняла&raquo; все ткани челюсти. В зависимости от используемого материала &laquo;ложка&raquo; остается во рту 3-5 минут для застывания массы. Это, конечно вызывает у пациента некоторый дискомфорт, в некоторых случаях даже рвотный рефлекс, но в целом совершенно безопасно.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>В качестве слепочной массы могут использоваться:</span></Typography>
                    <ul>
                        <li><span>специальный гипс;</span></li>
                        <li><span>дентол;</span></li>
                        <li><span>силикон &ndash; наиболее популярный материал в современной стоматологии;</span></li>
                        <li><span>альгинатная паста и т.д.</span></li>
                    </ul>
                    <Typography variant='body1' component="p" gutterBottom><span>Каждый материал имеет свои достоинства и недостатки, выбор за конкретным специалистом.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>После застывания слепок подвергается стерилизации и передается в лабораторию, где в него заливается специальный гипс. В результате получается готовая точная копия челюсти пациента. Полученная модель также прекрасно показывает прикус пациента.</span></Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Подготовка модели к сканированию. Требования к исходным данным',
        image: img4,
        imageContent: img41Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><span>Чтобы добиться качественного результата в изготовлении зубного протеза методом cad/cam (уникальная технология изготовления зубных протезов при помощи 3D-компьютерного моделирования и производства на фрезерной установке), необходимо соблюдать весь технологический процесс. Важным звеном в этом процессе является этап подготовки моделей. Очень часто в практике попадаются модели, которые изначально несут в себе погрешность и не предназначены для качественного 3D сканирования. Если мы переносим неточные исходные данные в проект моделирования, то заведомо получаем конструкцию с большими погрешностями. Такое изделие не сядет на исходную модель, и уж точно её не получится установить в полости рта.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>Итак, на какие моменты мы должны обращать внимание?</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Модель разборная (каждый опорный элемент отдельно извлекается из цоколя модели).</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Гипсовая модель изготовлена из супергипса (зубной ряд &ndash; класс не ниже 4, цоколь &ndash; класс не ниже 3).</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Модель без загипсовки в артикулятор либо съемная.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Высота модели не превышает 4 см.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Используется бипиновая система.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Модель не разбита и не склеена.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Аналоги имплантатов не шатаются, не повреждены, не залиты гипсом.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash;&nbsp;Штампик обработан с помощью грушевидного бора. Созданы поднутрение высотой 1,5 мм и глубиной 0,5 мм прямо под граничной линией.</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img42Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash;&nbsp;Обработанный штампик не покрыт лаком, воском, маркером, жидкостью для укрепления гипса и т.п.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Нет разрывов и пузырьков.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash;&nbsp;Wax-up&rsquo;s шаблоны хорошо снимаются с модели, не ломаются при снятии, тип воска соответствует типу моделируемого изделия.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Рабочая модель и антагонисты правильно сопоставляются.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Минимальное расстояние между платформами имплантов &ndash; 1,5 мм.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash;&nbsp;Опорные элементы правильно препарированы (отсутствие острых углов, внутренний объем для фрезы &gt; 1 мм).</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; При наличии концевых дефектов необходим прикусной шаблон на жестком базисе.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom textAlign={"center"} fontWeight={700}><span>Модели под цементную фиксацию</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img43Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <Typography variant='body1' component="p" gutterBottom textAlign={"center"} fontWeight={700}><span>Модели с уровня имплантата с искусственной десной</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img44Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Требования к исходным данным для изготовления индивидуальных абатментов',
        image: img5,
        imageContent: img51Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><b>Индивидуальный абатмент </b><span>&ndash;</span> <span>разновидность наконечника импланта, которая изготавливается по индивидуальным размерам и с учетом особенностей челюсти. В отличие от стандартных моделей, у него анатомическая форма и крепления, которые помогают надежно установить и зафиксировать любой протез.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Для изготовления индивидуальных абатментов:&nbsp;</b></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>Обязательно:</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Наличие индекса (система, размер), мы не определяем индекс самостоятельно.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Наличие десневой маски.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash;&nbsp;Для десневой маски определен контур прорезывания (сформирована трансгингивальная зона).</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Культевая вкладка</b><span> &ndash; литая металлическая или безметалловая керамическая конструкция, которую устанавливают в зубном канале. Она служит надежной опорой для моста или одиночной коронки. Культевую вкладку применяют в случае сильного разрушения зуба, который уже восстановлению не подлежит. Главное условие для протезирования зубов вкладками &ndash; здоровые корни и окружающие ткани зубов.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Для изготовления культевых вкладок:</b></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash;&nbsp;Правильно препарированная область (нет острых углов на модели препарированного зуба).</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Корневые каналы пройдены стандартными развертками.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Диаметр штифта не менее 0,8 мм.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Нависающие края отсутствуют.</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img52Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Требования к исходным данным для изготовления конструкций на абатментах и балочных конструкций',
        image: img6,
        imageContent: img61Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Абатменты выполнены с чистовой обработкой, без поднутрений, острых краев по верхнему краю абатмента.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Высота стенки культевой (или наддесневой части) не &lt; 4 мм и не &gt; 14 мм для работ из ZrO и&nbsp;не&nbsp;&gt;10 мм для работ из CoCr и Ti.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Угол наклона стенок абатментов не более 6 градусов.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Для одиночных коронок на абатментах необходим антиротационный паз или шлиц диаметром не менее 1 мм.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Для мостовидных конструкций опоры должны быть параллельны.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Ширина уступа:</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; для работ из ZrO2 не &lt; 0,5 мм.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; для работ из CoCr и Ti не &lt; 0,3 мм.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Для изготовления балочных конструкций или вторичной части на балочные конструкции</b><span>:</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img62Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <Typography variant='body1' component="p" gutterBottom><span>Обязательно наличие прикусных шаблонов, либо, лучше, постановка зубов на восковом базисе.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Требования к балочным конструкциям для изготовления вторичной части:</b></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; На балке отсутствуют поднутрения.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Поверхность балки отполирована.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>&ndash; Вместе с балкой предоставлены матрицы для сканирования или замки (МК1).</span></Typography>
                </>
            )
        }
    },
    {
        id: 6,
        title: 'Техника сканирования гипсовой модели',
        image: img7,
        imageContent: null,
        content: () => {
            return (
                <>
                    <ol>
                        <li><b> Подготовка сканера</b></li>
                    </ol>
                    <Typography variant='body1' component="p" gutterBottom><span>Следуйте инструкциям производителя по установке и подключению лабораторного сканера к компьютеру.</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img71Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <ol>
                        <li><b> Включение</b></li>
                    </ol>
                    <Typography variant='body1' component="p" gutterBottom><span>Установите программное обеспечение, предоставленное производителем сканера, и убедитесь, что оно корректно работает на вашем компьютере.</span></Typography>
                    <ol>
                        <li><b> Калибровка</b></li>
                    </ol>
                    <Typography variant='body1' component="p" gutterBottom><span>Выполните калибровку сканера в соответствии с инструкциями производителя. Это гарантирует точность сканирования.</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img72Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <ol>
                        <li><b> Заполнение карты пациента</b><span></span></li>
                    </ol>
                    <Typography variant='body1' component="p" gutterBottom><span>Для заполнения карты пациента следует нажать кнопку &laquo;Заказ&raquo; в меню и внести базовые данные. </span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img73Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <ol>
                        <li><b> Переход к сканированию</b></li>
                    </ol>
                    <Typography variant='body1' component="p" gutterBottom><span>Задайте параметры сканирования: в программе управления сканером выберите необходимые параметры сканирования.</span></Typography>
                    <Typography variant='body1' component="p" gutterBottom><span>Проведите сканирование: следите за индикацией программы, чтобы убедиться, что каждая часть модели была сканирована.</span></Typography>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img74Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <Typography variant='body1' component="p" gutterBottom><span>Проверьте качество сканирования: после завершения сканирования, оцените полученные результаты. Убедитесь, что нет пропущенных областей или артефактов на сканированной модели. </span></Typography>
                </>
            )
        }
    },
    {
        id: 7,
        title: 'Обработка данных после сканирования',
        image: img8,
        imageContent: null,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom><span>После сканирования необходимо обработать полученные данные:</span></Typography>
                    <ol>
                        <li><span>Импорт данных: загрузите данные сканирования в программное обеспечение для обработки 3D-моделей.</span></li>
                        <li><span> Очистка и коррекция данных: удалите шумы, исправьте артефакты и улучшите общее качество 3D-модели.</span></li>
                        <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                            <img src={img81Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                        </Box>
                        <li><span>Экспорт готовой модели: экспортируйте готовую 3D-модель в необходимом формате (например, STL или OBJ), чтобы использовать её в дальнейших приложениях.</span></li>
                    </ol>
                    <Box sx={{ width: '100%', p: 1, textAlign: 'center' }}>
                        <img src={img82Content} alt="image" style={{ width: '100%', maxWidth: '500px' }} />
                    </Box>
                    <Typography variant='body1' component="p" gutterBottom><span>Сканирование гипсовых моделей лабораторным сканером &ndash; это важный процесс, который требует внимательности, точности и опыта. Следуя этим шагам, вы сможете успешно создавать высококачественные цифровые копии гипсовых моделей для различных приложений.</span></Typography>
                </>
            )
        }
    }
];

export default InfographicsData