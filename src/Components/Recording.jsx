import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Recording() {
    const { language } = useContext(LanguageContext);
    return (
        <div className="article">
            <h1>
                {language === "eng"
                    ? "Sound recording. Steve Albini"
                    : "Звукозапись. Стив Альбини."}
            </h1>
            <img src="projects/recording.jpg" alt="recording" />
            {language === "eng" ? (
                <p>
                    People who have influenced the music industry are not always
                    famous, rich, or media-savvy. Popularity is typically
                    associated with artists, but there are individuals who,
                    through their daily work, contribute to the creation of
                    records that have the potential to make musicians global
                    sensations.
                </p>
            ) : (
                <p>
                    Люди, повлиявшие на музыкальную индустрию, не всегда
                    знамениты, богаты и медийны. Популярность — удел артистов,
                    но есть те, кто выполняя повседневную работу помогают
                    создать не просто записи, а такие, что сделают музыкантов
                    мировыми звёздами.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    Steve Albini is, without exaggeration, a legendary record
                    producer who has worked on numerous iconic albums, driven by
                    his own ideology concerning recording and the evolution of
                    the musical medium.
                </p>
            ) : (
                <p>
                    Стив Альбини, без преувеличения, легендарный звукорежиссёр,
                    который записал ряд культовых альбомов, основываясь на
                    принципах собственной идеологии относительно звукозаписи и
                    развития музыкальной среды.
                </p>
            )}
            <iframe
                title="Heart-shaped box"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/11LmqTE2naFULdEP94AUBa?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {language === "eng" ? (
                <p>
                    Albini's most prominent characteristic is his uncompromising
                    nature, which directly influences the environment around him
                    and his work principles. His Chicago studio is devoid of
                    unnecessary equipment; anything unused and lacking unique
                    qualities is discarded. To achieve the desired room sound,
                    he goes beyond simply constructing brick walls, opting to
                    build one room above another and separating the floor from
                    the walls to utilize additional airspace and eliminate
                    excess bass frequencies. The method of achieving the desired
                    outcome is secondary; what matters most is obtaining the
                    desired result.
                </p>
            ) : (
                <p>
                    Главная черта Альбини — бескомпромиссность, которая напрямую
                    формирует пространство вокруг и принципы работы. В его
                    чикагской студии нет лишнего оборудования, если что-то не
                    используется и не обладает уникальными характеристиками, то
                    от этого избавляются. Для получения необходимого звука
                    комнаты можно не только разграничить помещения кирпичными
                    стенами, но и построить одну комнату над другой, отделить
                    пол от стен, чтобы использовать дополнительное воздушное
                    пространство, благодаря чему уйдут лишние низкие частоты.
                    Принцип изменений не важен — главное получить необходимый
                    результат.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    In addition to capturing the sound of instruments, Steve
                    Albini also records the acoustic characteristics of the room
                    where the band performs. This emphasizes the significance of
                    the room itself, as it's challenging to fix the sound of a
                    poor room after the recording is complete. Special attention
                    is given to achieving a balanced mix between the instruments
                    and vocals. To achieve this, vocals are initially recorded
                    at a higher volume and gradually lowered to achieve a
                    natural and immersive sound in the mix. This approach adds
                    depth and uniqueness to seemingly simple elements. For
                    instance, if a song contains repetitive guitar parts, Albini
                    records them on different strings and chord positions to
                    introduce variation, encouraging bands to explore creative
                    solutions in their compositions.
                </p>
            ) : (
                <p>
                    В дополнение к звуку инструментов, он записывает акустику
                    комнаты, в которой играет группа, поэтому помещение столь
                    важно, ведь «бесполезно пытаться исправить звук плохой
                    комнаты после записи». Отдельное внимание в работе уделяется
                    балансу инструментов и голоса. Для этого вокал сначала
                    добавляется на большой громкости, после чего его уровень
                    постепенно снижается, чтобы в миксе это звучало естественно
                    и глубоко. Простые вещи он делает менее банальными, и если в
                    песне одинаковые гитарные партии, запись будет на разных
                    струнах и позициях аккордов, что позволит внести
                    разнообразие, и подтолкнуть группы к поиску креативных
                    решений в сочинительстве.
                </p>
            )}
            <iframe
                title="Where is my mind"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/0KzAbK6nItSqNh8q70tb0K?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {language === "eng" ? (
                <p>
                    Steve Albini openly discusses professional topics, engages
                    in interviews, and conducts various recording workshops.
                    According to his perspective, the role of a sound engineer
                    is to capture and faithfully reproduce the natural sound of
                    a band, rather than imposing a sound that the engineer
                    believes suits the band. Consequently, it is crucial to
                    maintain uninterrupted sessions and preserve the raw energy
                    of the performers as the music comes to life.
                </p>
            ) : (
                <p>
                    Стив Альбини открыто говорит на профессиональные темы,
                    участвует в интервью и проводит всевозможные мастер-классы
                    по звукозаписи. В его понимании дело звукорежиссёра —
                    запечатлеть и передать естественное звучание группы, а не
                    создавать звучание, которое, по его мнению, группе подходит.
                    Поэтому важно, чтобы сессия не прерывалась, и сохранилась
                    живая энергия исполнителя в момент рождения музыки.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    Raised in the underground himself, Steve Albini often cites
                    examples of misguided efforts by sound engineers during the
                    heyday of punk rock. Despite their good intentions, these
                    engineers attempted to refine the raw and gritty sound that
                    defined punk music. However, in doing so, they
                    unintentionally stripped away the individuality and essence
                    of many punk bands, causing more harm than good.
                </p>
            ) : (
                <p>
                    Воспитанный в андеграунде, в качестве примера плохой работы,
                    он рассказывает о том, как звукорежиссёры в период расцвета
                    панк-рока с благими намерениями пытались улучшить тот
                    грязный звук, и это нанесло только урон многим панк-группам,
                    чью сырую, грубую музыку переработали и лишили
                    индивидуальности.
                </p>
            )}

            <iframe
                title="Not a crime"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/1cmbQCAdqY3CDwKZ0bF5sV?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />

            {language === "eng" ? (
                <p>
                    It seemed that a man who has recorded albums for Nirvana,
                    Bush, Pixies, PJ Harvey, Gogol Bordello, Iggy & the Stooges,
                    Jimmy Page & Robert Plant, and dozens of other artists of
                    varying degrees of popularity would be financially secure
                    for the rest of his days. However, Steve Albini refuses to
                    give up the royalties as he feels he is not entitled to any
                    further income from the music he has simply recorded. He
                    compares it to the work of a carpenter who built a house and
                    then, 20 years later, were to come and demand additional
                    payment for maintaining the house's structural integrity.
                    Such actions are rare in the music business, but they reveal
                    the personality and philosophy of Steve Albini himself.
                </p>
            ) : (
                <p>
                    Кажется, что человек, записавший альбомы для Nirvana, Bush,
                    Pixies, PJ Harvey, Gogol Bordello, Iggy & the Stooges, Jimmy
                    Page & Robert Plant и ещё десятков других исполнителей
                    разной степени популярности, будет финансово обеспечен до
                    конца дней. Однако, Стив Альбини отказывается от отчислений,
                    так как считает, что не имеет права на последующие доходы от
                    музыки, которую просто зафиксировал. Он сравнивает это с
                    трудом плотника, который построил дом, а спустя 20 лет
                    пришёл бы и потребовал ещё денег за то, что дом не рухнул.
                    Такие поступки редки в музыкальном бизнесе, но это
                    раскрывает личность и философию самого Стива Альбини.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    If you want to know more about this legendary record
                    producer's principles and viewpoints, we recommend watching
                    his master class on recording and an interview for Mix with
                    the Masters channel, which is easy to find on YouTube, as
                    well as the documentary "Show Us Your Junk" and the first
                    episode of "Sonic Highways" by Foo Fighters.{" "}
                </p>
            ) : (
                <p>
                    Если захочется узнать подробнее о принципах работы и
                    взглядах этого легендарного звукорежиссёра, рекомендуем
                    посмотреть его мастер-класс по звукозаписи и интервью для
                    канала Mix with the masters, которые легко найти в ютубе, а
                    так же документальный фильм Show us you junk и первый выпуск
                    сериала Sonic Highways от Foo Fighters.
                </p>
            )}
            <a href="https://vk.com/@hangover_show-zvukozapis-stiv-albini">
                {language === "eng"
                    ? "View the publication"
                    : "Посмотреть публикацию"}
            </a>
        </div>
    );
}

export default Recording;
