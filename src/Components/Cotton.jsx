import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Cotton() {
    const { language } = useContext(LanguageContext);
    return (
        <div className="article">
            <h1>{language === "eng" ? "100% cotton" : "100% хлопок"}</h1>
            <img src="projects/cotton01.png" alt="cotton" />
            {language === "eng" ? (
                <p>
                    <i>
                        Extended notes stretched over the plantation. The
                        scorching sun. Sharp plant parts. People bent to the
                        ground singing the blues. What was about to become soft
                        cloth, as if defending itself, tried to hurt. That's why
                        the songs of these fields are filled with misery and
                        moping
                    </i>
                </p>
            ) : (
                <p>
                    <i>
                        Над плантацией потянулись протяжные ноты. Палящее
                        солнце. Острые части растений. Люди склонившиеся к земле
                        пели блюз. То, что скоро станет мягкой тканью, словно
                        защищаясь, старалось причинить боль. Потому и песни этих
                        полей наполнены страданием и хандрой.
                    </i>
                </p>
            )}
            <iframe
                title="Government Fleet Blues"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/0U4CfmLCLxi2HU5TfC9yu9?utm_source=generator&theme=0"
                width="100%"
                height={152}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {language === "eng" ? (
                <p>
                    <strong>The visual representation of the work</strong> in
                    the cotton fields has appeared more than once in popular
                    culture, but the subject of cotton is broader than forced
                    labour in the US or methods of weaving. It is worth starting
                    with its origins.
                </p>
            ) : (
                <p>
                    <strong>Визуальное воплощение работы</strong> на хлопковых
                    полях не раз появлялось в массовой культуре, но тема хлопка
                    обширнее принудительной работы в США или методов
                    изготовления ткани. Начать же стоит с происхождения.
                </p>
            )}
            <img src="projects/cotton02.jpg" alt="cotton fields" />
            {language === "eng" ? (
                <p>
                    A plant in the mallow family is called{" "}
                    <strong>cotton</strong>. The original places of growth are
                    thought to be India and the Americas. Due to the
                    adaptability and variability of the plant, botanists have
                    not determined the exact number of species, but only four of
                    them are used in agriculture.
                </p>
            ) : (
                <p>
                    Растение семейства мальвовых называется{" "}
                    <strong>хлопчатник</strong>. Первоначальными местами
                    произрастания считаются Индии и Америка. Из-за адаптивности
                    и изменчивости растения, ботаники не определили точное
                    количество видов, но в сельском хозяйстве используется
                    только четыре из них.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    <strong>
                        Cotton itself is the fibre covering the cotton seeds
                    </strong>
                    , from which people learned to make threads and cloth that
                    were strong but not heavy, absorbed moisture and retained
                    heat.
                </p>
            ) : (
                <p>
                    Непосредственно
                    <strong>
                        хлопок — это волокно покрывающее семена хлопчатника
                    </strong>
                    , из которого люди научились делать нити и ткань, которая
                    получалась прочной, но не тяжёлой, впитывала влагу и
                    удерживала тепло.
                </p>
            )}
            <img src="projects/cotton03.jpg" alt="cotton flower" />
            {language === "eng" ? (
                <p>
                    <strong>Based on archaeological research</strong>,
                    scientists claim that cotton was cultivated as early as the
                    fifth millennium B.C. by people living in the Indus valley
                    and in the early sixth millennium in what is now Mexico. The
                    first mention of cotton in Europe dates back to the
                    campaigns of Alexander the Great, but its appearance is
                    considered to be closer to the beginning of the
                    Enlightenment.
                </p>
            ) : (
                <p>
                    <strong>На основе археологических исследований</strong>,
                    учёные утверждают, что выращиванием хлопчатника занимались
                    уже в пятом тысячелетии до нашей эры люди проживавшие в
                    долине реки Инд, и в начале шестого тысячелетия на нынешней
                    территории Мексики. Первые упоминания о хлопке в Европе
                    датируют временами походов Александра Македонского, но
                    заметное появление относят ближе к началу Просвещения.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    <strong>The Industrial Revolution</strong> stimulated the
                    cultivation of cotton and the production of cloth because,
                    before the invention of cotton cleaning machines and
                    spinning looms, manual production was labour-intensive and
                    economically impractical. The main beneficiary, at the
                    expense of the colonies, was Great Britain. Among the
                    exploited countries, India occupied a special position
                </p>
            ) : (
                <p>
                    <strong>Промышленная революция</strong> простимулировала
                    выращивание хлопка и производство ткани, так как до
                    изобретения хлопкоочистительных машин и прядильных станков,
                    ручное изготовление было трудоёмким и экономически
                    нецелесообразным. Главным выгодоприобретателем, за счёт
                    колоний, стала Великобритания. Среди эксплуатируемых стран,
                    особое положение занимала Индия.
                </p>
            )}
            <img src="projects/cotton04.jpg" alt="cotton 100%" />
            {language === "eng" ? (
                <p>
                    By the mid-nineteenth century, however, the United States
                    became the <strong>leading supplier of cotton</strong> to
                    Britain, as the eastern colony was no longer able to cope
                    with the volume required and transportation took longer.
                </p>
            ) : (
                <p>
                    Однако, к середине девятнадцатого века,{" "}
                    <strong>лидерами по поставкам хлопка</strong> в Британию
                    стали Соединённые Штаты, так как восточная колония уже не
                    справлялась с необходимым объёмом, а транспортировка
                    занимала больше времени.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    <strong>Cotton production</strong> required cheap labour,
                    which increased the demand for the slave trade in North
                    America, and new land for plantations, which pushed the
                    development of the territories to the West.
                </p>
            ) : (
                <p>
                    <strong>Изготовление хлопка</strong> требовало дешёвой
                    рабочей силы, что в результате повысило спрос на
                    работорговлю в Северной Америке, и новых земель для
                    плантаций, что продвигало освоение территорий на Запад.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    The imported{" "}
                    <strong>Africans retained their culture</strong>, which was
                    mixed with the conditions of the new reality, religious
                    traditions, and the mastery of musical instruments. Thus,
                    songs about hard work on the plantations composed by slaves
                    for moral relief gradually evolved into a separate musical
                    genre - <strong>the blues</strong>, which, like cotton
                    products, spread across the world from the southeastern US
                    along with travelling performers.
                </p>
            ) : (
                <p>
                    Привезённые{" "}
                    <strong>африканцы сохраняли свою культуру</strong>, которая
                    смешивалась с условиями новой действительности, религиозными
                    традициями и освоением музыкальных инструментов. Так песни о
                    тяжком труде на плантациях сочинённые рабами для морального
                    облегчения, постепенно превратились в отдельный музыкальной
                    жанр — <strong>блюз</strong>, который, словно
                    хлопчатобумажные изделия, распространился по миру с
                    юго-востока США вместе с путешествующими исполнителями.
                </p>
            )}
            <img src="projects/cotton05.jpg" alt="cotton blues" />
            <iframe
                title="walking blues"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/4RzFnBP0EDGpX9CfUdLTda?utm_source=generator&theme=0"
                width="100%"
                height={152}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {language === "eng" ? (
                <p>
                    <strong>In the twentieth century</strong>, advances in
                    technology led to a predominant shift from manual harvesting
                    to the operation of cotton harvesting machines. However, in
                    some countries, mechanisation remains a more expensive
                    option, accompanied by the exploitation and use of child
                    labour. In addition, cotton cultivation depletes water
                    resources, triggering events such as{" "}
                    <strong>the drainage of the Aral Sea</strong>.
                </p>
            ) : (
                <p>
                    <strong>В двадцатом веке</strong>, развитие техники привело
                    к преимущественному переходу от ручного сбора к работе
                    хлопчатоуборочных машин. Однако, в некоторых странах,
                    механизация остаётся более дорогим вариантом, что
                    сопровождается эксплуатацией и применением детского труда.
                    Кроме того, выращивание хлопка истощает водные ресурсы,
                    провоцируя такие события как{" "}
                    <strong>осушение Аральского моря</strong>.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    The USA continues to be{" "}
                    <strong>the world leader in cotton cultivation</strong>, but
                    the main consumer has become the world factory, China.
                    Cotton itself has ceased to be a purely production plant,
                    becoming <strong>an element of design and floristry</strong>
                    .
                </p>
            ) : (
                <p>
                    США продолжают сохранять м
                    <strong>ировое лидерство по выращиванию хлопка</strong>, а
                    вот главным потребителем стала мировая фабрика — Китай. Сам
                    хлопчатник перестал быть растением исключительно
                    производственной направленности, став{" "}
                    <strong>элементом дизайна и флористики</strong>.
                </p>
            )}
            <img src="projects/cotton06.jpg" alt="cotton bouquets" />
            {language === "eng" ? (
                <p>
                    <strong>The addition of cotton plants to bouquets</strong>{" "}
                    has become an option for florists to emphasise the airiness
                    of their compositions, due to their visual lightness and
                    softness. A separate trend has been the use of the plant in
                    bouquets of dried flowers, <strong>winter bouquets</strong>{" "}
                    or indoor decor elements.
                </p>
            ) : (
                <p>
                    За счёт визуальной лёгкости и мягкости,{" "}
                    <strong>добавление хлопчатника в букеты</strong> стало
                    вариантом подчеркнуть воздушность композиции придуманной
                    флористом. Отдельным направлением стало использование
                    растения в букетах сухоцветов,
                    <strong> зимних букетах</strong> или элементах декора в
                    помещении.
                </p>
            )}
            <img
                src="projects/cotton07.jpg"
                alt="Cotton flowers in a bouquet"
            />
            {language === "eng" ? (
                <p>
                    <strong>
                        A plant that combines soft fibres and hard stems
                    </strong>
                    , capable of draining seas and enriching countries, a raw
                    material for clothing and a designer find, a heraldic symbol
                    of individual countries and a symbol of human exploitation
                    by man, it is a versatile and minimalist flower of cotton.
                </p>
            ) : (
                <p>
                    <strong>
                        Растение, сочетающее в себе мягкие волокна и твёрдые
                        стебли
                    </strong>
                    , способное осушать моря и обогащать страны, сырьё для
                    одежды и дизайнерская находка, геральдический символ
                    отдельных стран и символ эксплуатации человека человеком,
                    это многогранный и минималистичный цветок хлопка.
                </p>
            )}
            <a href="https://blog.azalianow.ru/cotton-100/">
                {language === "eng"
                    ? "View the publication"
                    : "Посмотреть публикацию"}
            </a>
        </div>
    );
}

export default Cotton;
