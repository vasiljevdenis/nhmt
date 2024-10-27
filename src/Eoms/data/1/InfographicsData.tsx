import { Typography } from '@mui/material';
import img1 from '@images/infographics1.webp';
import img2 from '@images/infographics2.webp';
import img3 from '@images/infographics3.webp';
import img4 from '@images/infographics4.webp';
import img5 from '@images/infographics5.webp';
import img6 from '@images/infographics6.webp';
import img7 from '@images/infographics7.webp';
import img8 from '@images/infographics8.webp';
import img1Content from '@images/infographicsContent1.webp';
import img2Content from '@images/infographicsContent2.webp';
import img3Content from '@images/infographicsContent3.webp';
import img4Content from '@images/infographicsContent4.webp';
import img5Content from '@images/infographicsContent5.webp';
import img6Content from '@images/infographicsContent6.webp';
import img7Content from '@images/infographicsContent7.webp';
import img8Content from '@images/infographicsContent8.webp';
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
        title: 'Технология ремонта внутрицеховых электросетей и осветительных электроустановок',
        image: img1,
        imageContent: img1Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Несъемное протезирование в стоматологии используется для восстановления разрушенных или удаленных зубов пациента. Несъемные зубные протезы нового поколения позволяют полностью реконструировать зубной ряд, вернуть его функции и восстановить эстетику улыбки. Несъемными называются протезы, которые устанавливают на импланты или на собственные зубы (корни зубов) пациента, имеют длительный срок эксплуатации и которые не нужно извлекать из полости рта, чтобы провести необходимые гигиенические процедуры.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>На современном этапе развития ортопедической стоматологии требуется внедрение в клиническую практику автоматизированного высокотехнологичного оборудования, которое в состоянии обеспечить повышенные требования к изготовлению функционально ценных конструкций зубных протезов, обладающих максимально приближенными эстетическими параметрами к естественным твердым тканям зубов. Такими способностями обладают CAD/CAM системы, которые уверенно входят в стоматологическую практику в течение последних 20 лет.</Typography>
                </>
            )
        }

    },
    {
        id: 1,
        title: 'Возможные повреждения и ремонт электросетей',
        image: img2,
        imageContent: img2Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>В CAD/CAM технологии CAD – это компьютерные программы, которые участвуют в создании 3D-модели зуба или зубочелюстной системы. CAM – программное обеспечение, работающей над созданием физического объекта – коронки того самого зуба и реставрации зубочелюстной системы.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>По технологии CAD/CAM протезирование идет в четыре этапа.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Сканирование полости рта для создания виртуальной 3D-модели.</b> На этом этапе главным компонентом системы является интраоральный сканер. Он считывает геометрию протезируемого участка зубного ряда и переводит ее в цифровую модель.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Моделирование протеза.</b> На этом этапе стоматолог видит на мониторе 3D-модель протезируемой области, подбирает варианты реставрации и корректирует их форму, кривизну, толщину стенок и внешний вид. Промежуточный и конечный результаты можно сравнить, согласовать с пациентом.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Фрезерование.</b> 3D-модель передается на CAM-модуль фрезерного аппарата, который вытачивает реставрацию, полирует и шлифует ее. Функционал станка в определенной степени зависит от количества осей. Чем их больше, тем более сложные реставрации можно изготавливать. Например, фрезер VHF N4+ с четырьмя осями обрабатывает заготовку по осям XYZ и одновременно вращает ее на 360° по оси A. У модели VHF K5 к осям XYZ и A добавляется еще и вращательная ось B с углом обработки ± 35 °.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Готовый протез можно примерять или сразу устанавливать, например, при одномоментной имплантации.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Системы CAD/CAM в стоматологии делятся на закрытые и открытые. Закрытые взаимодействуют со сканером и станком в рамках общего ПО, используют один, зашифрованный формат файлов и работают с конкретными видами материалов. Как пример – итальянская система Zirkonzahn.</Typography>
                    <Typography variant='body1' component="p" gutterBottom><b>Открытые</b> CAD/CAM технологии интегрируются с разными модулями и компонентами, работают с файлами нескольких форматов. Проще говоря, врач может отсканировать зубной ряд интраоральным сканером 3Shape TRIOS 3 Basic Pod, сохранить файл в формате .STL, с помощью модуля Model Builder создать лабораторную модель коронки и отправить ее на фрезер VHF N4+. Таким образом, для открытых систем стоматолог может выбрать сканер одного производителя, а фрезерный аппарат другого – все будет работать. К открытым CAD/CAM технологиям относятся системы Exocad Dentalcad, inLab SW, Planmeca, Dental System и пр.</Typography>
                </>
            )
        }
    },
    {
        id: 2,
        title: 'Повреждения и ремонт шинопроводов и электрооборудования силовых и осветительных распределительных пунктов сетей и установок',
        image: img3,
        imageContent: img3Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Одним из главных преимуществ компьютерного моделирования является высокая точность диагностики, моделирования и изготовления зубных протезов и имплантов. Также с помощью специального компьютерного обеспечения возможно с детальной точностью воспроизвести все анатомические особенности лица и полости рта пациента, что уже на стадии диагностики позволяет увидеть конечный результат лечения.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Разработка приложений и программ, предназначенных для создания моделей и проработки лечебного плана, снизила вероятность развития осложнений после протезирования. В рамках использования цифрового ПО формируется детализированная трехмерная модель челюстного отдела, основанная на результатах компьютерной томографии. Алгоритм автоматически определяет оптимальные участки, подходящие для интеграции имплантатов, а также отмечает все конструктивные особенности будущих протезов, обуславливаемые спецификой анатомического строения.  Процесс восстановления зубов включает в себя несколько этапов, которые следуют один за другим.</Typography>
                </>
            )
        }
    },
    {
        id: 3,
        title: 'Ремонт кабелей со свинцовой оболочкой',
        image: img4,
        imageContent: img4Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Сейчас компьютеризация может сопровождать процесс протезирования «от и до». Например, стоматологи уже зачастую отказываются от привычных слепков или оттисков зубных рядов и используют цифровые «слепки».</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Но и привычные физические оттиски тоже можно использовать. Правда, в том случае придется передавать их в лабораторию, делать гипсовую модель и сканировать уже ее – чтобы сформировать цифровой вариант. Этот путь занимает большее время (2-7 дней).</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Для создания трехмерной модели зубного ряда необходимо использовать 3D-сканер. Данные можно «снимать» как с готовых слепков (лабораторные сканеры), так и непосредственно с ротовой полости пациента, напрямую. Последний вариант наиболее предпочтителен за исключением тех случаев, когда имеются какие-либо трудности с прохождением луча (труднодоступные места). Делается это с помощью интраоральных 3D-сканеров, которые помогают получить все необходимые замеры для построения трехмерной модели в считанные минуты. Человек при этом не подвергается каким-либо неприятным воздействиям — процедура абсолютно безболезненна.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Врач-стоматолог направляет луч света на каждый зуб (или же на тот участок челюсти, который нужен) и тот, отражаясь, передает данные на экран монитора, где в реальном времени выстраивается объемное 3D-изображение. Трансформация потокового сигнала в картинку происходит благодаря специальному ПО, которое сначала выстраивает на основе полученных данных облако точек, а потом создает из них трехмерную модель. Преимущества такого изображения еще и в том, что им можно управлять: детализировать, крутить в разные стороны, видоизменять, выделять отдельные части и т. д. Все это заметно облегчает задачу специалистов, позволяя сразу же создавать нужную конструкцию и отправлять ее в работу.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Интраоральные сканеры могут быть полезны не только врачам-ортопедам, но также хирургам, ортодонтам и терапевтам. На основе полученного 3D-изображения можно изготовить вкладки, коронки, мосты, протезы, элайнеры, выполнить качественные реставрации, устанавливать виниры и т.д.</Typography>
                </>
            )
        }
    },
    {
        id: 4,
        title: 'Ремонт кабелей с поливинилхлоридной оболочкой',
        image: img5,
        imageContent: img5Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Фотографии (как и короткие видео) делают для того, чтобы оценить параметры улыбки пациента, их соотношения с другими параметрами лица, а также, чтобы разобраться, как работают лицевые мышцы. Съемка проводится, когда пациент улыбается, спокоен или специально «рассержен», когда говорит или молчит. Все фото и видео, а их может быть несколько десятков, загружаются в программу и совмещаются с цифровыми слепками.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Также на этом этапе стоматолог применяет различные анализаторы движения челюсти (артикуляторы, анализатор HIP-плоскости, лицевые дуги). Ведь в будущем протезе важна не только красота, но и то, как он будет соотноситься с имеющимся прикусом.</Typography>
                </>
            )
        }
    },
    {
        id: 5,
        title: 'Ремонт концевых заделок, соединительных и концевых муфт',
        image: img6,
        imageContent: img6Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Все полученные данные (оттиски, фото и т.д.) заносятся в программу компьютерного моделирования. Затем параметры обрабатываются, объединяются, а на экран выводится трехмерная проекция, полностью соответствующая натуральному зубному ряду пациента. Далее происходят корректировки для улучшения улыбки. Причем можно сразу сделать несколько вариантов новой улыбки – с разной формой или высотой, шириной зубов, с разными оттенками эмали, например. А затем выбирается оптимальный вариант – как с точки зрения стоматолога, так и на основании пожеланий пациента.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Кстати, такую виртуальную проекцию можно совместить с цифровой компьютерной томографией пациента и приступить к разработке протеза, в т.ч. и для постановки на импланты. Популярные программы для создания протезов – это CAD/CAM системы.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Самая распространенная методика ортопедического моделирования объединяет два последовательных этапа – создание прототипа, и последующее изготовление протеза. Технология реализуется несколькими производителями, что обуславливает представленность на рынке разных вариаций, однако общая концепция остается неизменной. CAD/CAM фактически помогает решить существенную часть задач, выполнение которых ранее входило в обязанности специалистов. Алгоритм применения предусматривает следующие стадии:</Typography>
                    <ul>
                        <li>Сканирование челюстного отдела.</li>
                        <li>Формирование виртуальной модели.</li>
                        <li>Изготовление замещающей конструкции аппаратным методом.</li>
                    </ul>
                    <Typography variant='body1' component="p" gutterBottom>Точность цифрового анализа заметно превосходит стандартные методы предварительного обследования. Программа учитывает особенности строения и функциональной механики зубочелюстного аппарата. Протезы создаются преимущественно из циркониевых и стеклокерамических заготовок, отличающихся прочностью и эстетикой.</Typography>
                </>
            )
        }
    },
    {
        id: 6,
        title: 'Возможные повреждения заземляющих устройств',
        image: img7,
        imageContent: img7Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>В настоящее время получить значимый результат лечебных или эстетических процедур в зубочелюстной области не удастся без использования компьютерных технологий. В то же время, цифровизация любого из этапов лечебного процесса позволяет достичь нового уровня в любой стоматологической специальности.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Программное обеспечение Exocad, разработанное в Германии, позволило врачам-стоматологам по всему миру достичь этого нового уровня в работе, когда полученные реставрации полностью идентичны натуральным зубам по эстетике и функциональным характеристикам. С помощью данной программы аналогичный результат достижим и в других сферах деятельности врача-стоматолога. Задача, стоявшая перед компанией Exocad GmbH, – создать программные решения для специалистов из сферы стоматологии, отличающиеся надежностью и простотой в использовании, оказалась полностью реализованной.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Сделать столь высокоэффективный продукт разработчикам удалось, благодаря постоянному и тесному взаимодействию с потребителями, специалистами из сферы стоматологии. При этом пользователи ПО – не только врачи, но и зубные техники. Это – отличный вариант для начинающих специалистов и, в то же время, еще более мощный инструмент в руках профессионала. Именно наличие обратной связи, положительные отзывы экспертов в данной сфере стали мотивацией для развития продукта Exocad.</Typography>
                </>
            )
        }
    },
    {
        id: 7,
        title: 'Техника безопасности при ремонте электрических внутрицеховых сетей и освещения',
        image: img8,
        imageContent: img8Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Базовая функциональность программного обеспечения будет расширяться вместе с опытом пользователя. Например, можно копировать предыдущие конструкции или зеркально воспроизводить здоровые зубы, загружать обычные двухмерные изображения при проектировании, работать с предоперационными моделями и адаптировать под них собственные реставрации, сохранять реальные 3Д-файлы в формате PDF с последующей возможностью их отправки по электронной почте и открытия в обычной программе, способной просматривать PDF-файлы.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Стандартная комплектация программного обеспечения Exocad позволяет охватить широкий ассортимент показаний, в который входят:</Typography>
                    <ul>
                        <li>анатомические коронки;</li>
                        <li>простые и анатомические колпачки;</li>
                        <li>виниры;</li>
                        <li>вкладки и накладки;</li>
                        <li>аттачменты;</li>
                        <li>мостовидные каркасы и каркасы на базе восковых моделей;</li>
                        <li>цифровое копировальное фрезерование восковых моделей;</li>
                        <li>замковые крепления внекоронкового типа;</li>
                        <li>телескопические коронки.</li>
                    </ul>
                </>
            )
        }
    },
    {
        id: 8,
        title: 'Ремонт осветительных электроустановок',
        image: img8,
        imageContent: img8Content,
        content: () => {
            return (
                <>
                    <Typography variant='body1' component="p" gutterBottom>Базовая функциональность программного обеспечения будет расширяться вместе с опытом пользователя. Например, можно копировать предыдущие конструкции или зеркально воспроизводить здоровые зубы, загружать обычные двухмерные изображения при проектировании, работать с предоперационными моделями и адаптировать под них собственные реставрации, сохранять реальные 3Д-файлы в формате PDF с последующей возможностью их отправки по электронной почте и открытия в обычной программе, способной просматривать PDF-файлы.</Typography>
                    <Typography variant='body1' component="p" gutterBottom>Стандартная комплектация программного обеспечения Exocad позволяет охватить широкий ассортимент показаний, в который входят:</Typography>
                    <ul>
                        <li>анатомические коронки;</li>
                        <li>простые и анатомические колпачки;</li>
                        <li>виниры;</li>
                        <li>вкладки и накладки;</li>
                        <li>аттачменты;</li>
                        <li>мостовидные каркасы и каркасы на базе восковых моделей;</li>
                        <li>цифровое копировальное фрезерование восковых моделей;</li>
                        <li>замковые крепления внекоронкового типа;</li>
                        <li>телескопические коронки.</li>
                    </ul>
                </>
            )
        }
    }
];

export default InfographicsData