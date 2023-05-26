import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Kane() {
    const { language } = useContext(LanguageContext);
    return (
        <div className="article">
            <h1>
                {language === "eng"
                    ? "Citizen Kane, or how rosebud became a film symbol"
                    : "Гражданин Кейн, или как бутон розы стал киносимволом"}
            </h1>
            <img src="projects/kane.png" alt="kane" />
            {language === "eng" ? (
                <p>
                    Check mistakes please: Most of top lists of the greatest
                    films of all time either end with{" "}
                    <strong>Orson Welles' debut film</strong>
                    or mention <strong>Citizen Kane</strong> as an example
                    beyond competition. In the former Soviet Union, the film has
                    not gained such mass recognition or cult status, and is
                    rather popular with cinephiles. The younger generation,
                    however, came to Orson Welles' work in 2020, through the
                    story of screenwriter <strong>Herman Mankovitch</strong>,
                    which was adapted by <strong>David Fincher</strong>.
                </p>
            ) : (
                <p>
                    Большинство топов величайших фильмов всех времён и народов,
                    либо заканчивается{" "}
                    <strong>дебютной картиной Орсона Уэллса</strong>, либо
                    упоминает <strong>«Гражданина Кейна»</strong> в качестве
                    примера вне конкуренции. На постсоветском пространстве фильм
                    не получил столь массового признания или культового статуса,
                    и популярен скорее у синефилов. Молодое же поколение пришло
                    к работе Орсона Уэллса в 2020, через историю сценариста
                    <strong>Германа Манковича</strong>, которую экранизировал
                    <strong>Дэвид Финчер</strong>.
                </p>
            )}
            <iframe
                title="Litany"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/7zkSpdlNPqHSoRdYFYxyjl?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            <h3>
                {language === "eng"
                    ? "What kind of film is it? Why is it great? And what does it have to do with the rose?"
                    : "Что же это за фильм? Почему он великий? И при чём тут роза?"}
            </h3>
            {language === "eng" ? (
                <p>
                    "Citizen Kane was released <strong>in 1941</strong>. It was
                    directed, produced, starred and co-written by
                    twenty-five-year-old <strong>Orson Welles</strong>. At that
                    time, Welles had the status of a wunderkind and fashionable
                    director working in the theatre and on the radio.{" "}
                    <strong>RKO studio</strong>
                    took care of the financial part, putting the young talent in
                    charge of all creative processes, including{" "}
                    <strong>final editing</strong>, which was unbelievable for
                    old Hollywood. The firm's main stipulation was not to go
                    over budget.
                </p>
            ) : (
                <p>
                    «Гражданин Кейн» вышел на экраны в{" "}
                    <strong>1941 году</strong>. Режиссёром, продюсером, главным
                    актёром и одним из сценаристов выступил двадцатипятилетний
                    <strong>Орсон Уэллс</strong>. На тот момент, Уэллс имел
                    статус вундеркинда и модного постановщика работавшего в
                    театре и на радио. Финансовую часть взяла на себя{" "}
                    <strong>студия RKO</strong>, отдав в руки юного таланта
                    управление всеми творческими процессами, включая{" "}
                    <strong>финальный монтаж</strong>, что было невероятно для
                    старого Голливуда. Главным условием фирмы было — не
                    превышать бюджет.
                </p>
            )}
            <img src="projects/citizen-kane.jpg" alt="citizen-kane" />
            {language === "eng" ? (
                <p>
                    For his film debut, Welles offered to collaborate on the
                    text with a talented but highly unreliable screenwriter,
                    Herman Mankovic. Subsequently, this collaboration would
                    generate rumours and controversy as to who was the main
                    author of the work. The strongest criticism of Welles would
                    come decades later, in a fifty-thousand-word essay by film
                    critic <strong>Pauline Kael</strong>.
                </p>
            ) : (
                <p>
                    Для кинодебюта Уэллс предложил совместно поработать над
                    текстом талантливому, но крайне неблагонадёжному сценаристу
                    — Герману Манковичу. Впоследствии, это сотрудничество
                    породит слухи и споры, о том, кто же стал основным автором
                    произведения. Наиболее сильная критика на Уэллса обрушится
                    уже спустя десятилетия, в эссе на пятьдесят тысяч слов,
                    кинокритика <strong>Полин Кейл</strong>.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    The film begins with the death of newspaper media mogul
                    <strong>Charles Foster Kane</strong>. He dies alone in his
                    castle filled with works of art of all kinds and value. A
                    glass ball drops out of the deceased's hand with a snowball
                    covered in snow. The last words he uttered are{" "}
                    <strong>rosebud</strong>, which means{" "}
                    <strong>"rosebud"</strong>. The journalist sent by the
                    editorial office to cover Kane's death struggles to unravel
                    their meaning throughout the film.
                </p>
            ) : (
                <p>
                    Фильм начинается со смерти газетного медиамагната Чарльза
                    <strong> Фостера Кейна</strong>. Он умирает в одиночестве, в
                    своём замке заполненном произведениями искусства самого
                    разного вида и ценности. Из руки умершего выпадает
                    стеклянный шар с домиком присыпанным снегом. Последние
                    произнесённые им слова: <strong>rosebud</strong>, то есть
                    <strong>«розовый бутон»</strong>, над разгадкой значения
                    которых в течении фильма бьётся журналист оправленный
                    редакцией для написания материала о смерти Кейна
                </p>
            )}
            <img src="projects/snowball.jpg" alt="snowball" />
            {language === "eng" ? (
                <p>
                    The film reveals Kane's identity and rise as a citizen
                    through <strong>flashbacks</strong> - stories told to the
                    reporter by people who knew the late billionaire. The
                    reporter's investigation eventually comes to a dead end,
                    with no one ever finding out what <strong>"rosebud"</strong>{" "}
                    Kane had in mind. What was it that he was never able to get,
                    despite his status and wealth? The viewer, on the other
                    hand, is shown in the final shots how, while clearing the
                    castle of the former owner's personal belongings of no
                    value, a baby sled with <strong>Rosebud</strong> written on
                    it is thrown into the furnace.
                </p>
            ) : (
                <p>
                    Личность и становление гражданина Кейна в фильме раскрывают
                    через <strong>флэшбеки</strong> — истории, рассказанные
                    журналисту людьми знавшими покойного миллиардера.
                    Расследование корреспондента в конечном итоге заходит в
                    тупик, никто так и не узнаёт, что за{" "}
                    <strong>«розовый бутон»</strong> имел ввиду Кейн. Что это
                    была за вещь, которую он так и не смог получить, не смотря
                    на свой статус и богатство? Зрителю же, в последних кадрах
                    показывают, как во время расчистки замка от не
                    представляющих ценности личных вещей бывшего владельца, в
                    печь кидают детские санки с надпись <strong>Rosebud</strong>
                    .
                </p>
            )}
            {language === "eng" ? (
                <p>
                    <strong>Pauline Kale</strong> claimed that it was Mankovic
                    who came up with the symbol. <strong>Wells</strong>, for his
                    part, said that he liked this element the least as it
                    represented <strong>"slapstick Freudianism"</strong>.
                    According to another version, both screenwriters trivialised
                    nothing better.
                </p>
            ) : (
                <p>
                    <strong>Полин Кейл</strong> утверждала, что символ придумал
                    именно Манкович. <strong>Уэллс</strong>, в свою очередь,
                    говорил, что этот элемент нравился ему меньше всего, так как
                    представлял собой <strong>«дешёвый фрейдизм»</strong>. По
                    другой версии, оба сценариста банально не придумали ничего
                    лучше.
                </p>
            )}
            <img src="projects/sledge.jpg" alt="sledge" />
            {language === "eng" ? (
                <p>
                    <strong>Pauline Kale</strong> claimed that it was Mankovic
                    who came up with the symbol. <strong>Wells</strong>, for his
                    part, said that he liked this element the least as it
                    represented <strong>"slapstick Freudianism"</strong>.
                    According to another version, both screenwriters trivialised
                    nothing better.
                </p>
            ) : (
                <p>
                    Так или иначе, «Гражданин Кейн», помимо революционной
                    операторской работы, возвышении роли режиссёра и изменения
                    самого структурного подхода к созданию кино, оставил в
                    массовом сознании один из наиболее известных киносимволов.
                    Содержит ли бутон розы в себе фрейдистское значение, отсылка
                    ли это к юности и непорочности или художественный образ
                    утерянного детства и разлуки с родителями, уже не важно.
                    Символ получился на столько ярким, что цвет нарисованной
                    розы виден даже через чёрно-белое изображение.
                </p>
            )}
            <a href="https://blog.azalianow.ru/grazhdanin-kiein-i-buton-rozy/">
                {language === "eng"
                    ? "View the publication"
                    : "Посмотреть публикацию"}
            </a>
        </div>
    );
}

export default Kane;
