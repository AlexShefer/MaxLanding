import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Lilies() {
    const { language } = useContext(LanguageContext);
    return (
        <div className="article">
            <h1>
                {language === "eng" ? "Lilies in Nirvana" : "Лилии в Нирване"}
            </h1>
            <img src="projects/lilies.png" alt="lilies" />
            {language === "eng" ? (
                <p>
                    The stage is lined with flowers. It's like a funeral with
                    the lingering blues of <i>Where did you sleep last night</i>
                    . <strong>Kurt Cobain</strong> literally finishes a song,
                    without concentrating on the camera, at Nirvana's acoustic
                    performance at{" "}
                    <strong>MTV Unplugged in New York City</strong>. In the
                    aftermath, the concert would become iconic, and the{" "}
                    <strong>white lilies</strong> would become a symbol
                    heralding tragedy, for millions of rock fans.
                </p>
            ) : (
                <p>
                    Сцена уставленная цветами. Обстановка словно на похоронах,
                    где зазвучал протяжный блюз
                    <i>Where did you sleep last night</i>.{" "}
                    <strong> Курт Кобейн</strong> буквально довывает песню, без
                    концентрации глядя в сторону камеры на акустическом
                    выступлении группы Nirvana на{" "}
                    <strong>MTV Unplugged в Нью-Йорке</strong>. В последствии,
                    концерт станет культовым, а <strong>белые лилии</strong> —
                    символом предвещающим трагедию, для миллионов поклонников
                    рока.
                </p>
            )}
            <iframe
                width={800}
                height={315}
                src="https://www.youtube.com/embed/hEMm7gxBYSc"
                title="Where did you sleep last night"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            {language === "eng" ? (
                <p>
                    <strong>
                        The band was formed in the northwest US state
                    </strong>{" "}
                    of Washington in the late eighties. Kurt Cobain displayed an
                    interest in drawing and other forms of artistic expression
                    from childhood. His teenage life was not the best: divorce
                    of his parents and problems at school. With that period is
                    associated the emergence of several bad habits, starting
                    health problems and some songs which would later become part
                    of the band's repertoire.
                </p>
            ) : (
                <p>
                    <strong>Группа образовалась на северо-западе США</strong>, в
                    штате Вашингтон, в конце восьмидесятых. Курт Кобейн с самого
                    детства проявлял интерес к рисованию и другим формам
                    художественного самовыражения. Подростковая жизнь сложилась
                    не лучшим образом: развод родителей, проблемы в школе. С тем
                    периодом связывают возникновение нескольких вредных
                    привычек, начавшиеся проблемы со здоровьем и некоторые
                    песни, которые потом войдут в репертуар группы
                </p>
            )}
            {language === "eng" ? (
                <p>
                    Constantly engaged in music, Kurt put together a band with a
                    different name at each performance. It was only because of a
                    scheduled recording session that they had to settle on one
                    name. At this point, the band was called Nirvana. Signing a
                    contract with the Sub Pop label, the band released singles,
                    followed by the album Bleach. After a tour and a drummer
                    change, <strong>the band recorded Nevermind in 1991</strong>
                    . An album that turned Nirvana and Seattle grunge into a
                    trendy musical trend.
                </p>
            ) : (
                <p>
                    Постоянно занимаясь музыкой, Курт собрал коллектив с
                    меняющимся на каждом выступлении названием. Только из-за
                    запланированной записи пришлось остановиться на одном
                    варианте. В тот момент коллектив назывался Nirvana. Заключив
                    контракт с лейблом Sub Pop группа выпустила синглы, а после
                    и альбом Bleach. Откатав с ним тур и сменив ударника,{" "}
                    <strong>в 1991 году группа записала Nevermind</strong>.
                    Альбом, который превратил Nirvana и сиэтловский гранж в
                    моднейшее музыкальное направление.
                </p>
            )}
            <img src="projects/concert.jpg" alt="concert" />
            {language === "eng" ? (
                <p>
                    After the release of the next LP, MTV, which was helping to
                    promote the band, offered to play{" "}
                    <strong>an acoustic concert</strong> for the record.
                    Discussing stage decorations with the organisers, Kurt
                    insisted that candles and <strong>vases with lilies</strong>{" "}
                    were placed around the perimeter. Attendees said that
                    despite the mellow format of the concert, the atmosphere was
                    dark in places. The peak of the emotional intensity of the
                    concert was the final song, a cover of blues singer Lid
                    Belly.
                </p>
            ) : (
                <p>
                    Спустя время, уже после выхода следующего LP, помогавший
                    раскрутиться группе канал MTV предложил музыкантам сыграть
                    <strong>акустический концерт</strong> для записи. Обсуждая с
                    организаторами пожелания по оформлению сцены, Курт настоял
                    на том, чтобы по периметру расставили свечи и{" "}
                    <strong>вазы с лилиями </strong>. Присутствующие
                    рассказывали, что не смотря на мягкий формат концерта,
                    обстановка местами была крайне мрачной. Пиком эмоционального
                    напряжения концерта стала финальная песня, кавер на
                    блюзового исполнителя Лид Белли.
                </p>
            )}
            <img src="projects/white-lily.jpg" alt="white-lily" />
            {language === "eng" ? (
                <p>
                    These flowers have come a long and historical way before
                    hitting the stage in New York.{" "}
                    <strong>The first mentions of lilies</strong>
                    date back to the early eighteenth century and the territory
                    of Persia. The white lily is commonly identified with purity
                    and purity, calling it a flower from the garden of paradise.
                    Therefore,{" "}
                    <strong>
                        lilies are also added to bouquets as a symbolic
                        expression of tenderness
                    </strong>
                    . Lily bouquets are suitable for joyous occasions such as
                    birthdays and first dates. But as the story goes, sometimes
                    lilies, with their overly neutral white tone and heavy, for
                    some people, fragrance, are associated rather with tragic
                    moments.
                </p>
            ) : (
                <p>
                    До момента попадания на сцену в Нью-Йорке, эти цветы прошли
                    длинный исторический путь.{" "}
                    <strong>Первые упоминания о лилиях</strong>
                    относят к началу восемнадцатого века и территории Персии.
                    Белые лилии принято отождествлять с непорочностью и
                    чистотой, называя цветком из райского сада. Поэтому и в
                    букетах{" "}
                    <strong>
                        лилии добавляют для символического выражения нежности
                    </strong>
                    . Букеты с лилиями подходят для радостных событий: дней
                    рождений и первых свиданий. Но, как видно из рассказанного,
                    иногда лилии с излишне нейтральным белым тоном и тяжёлым,
                    для некоторых людей, ароматом, ассоциированы скорее с
                    трагическими моментами.
                </p>
            )}
            <iframe
                title="Something in the way"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/4gHnSNHs8RyVukKoWdS99f?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {language === "eng" ? (
                <p>
                    <strong>The colour neutrality of lilies</strong> works for
                    them as a versatile flower for almost any bouquet. The main
                    thing is to ensure that the giver is not made uncomfortable
                    by the smell. For longer shelf life, lilies are cut when the
                    first bud on the stem begins to open. This artificial
                    persistence adds to the popularity among florists.
                </p>
            ) : (
                <p>
                    <strong>Цветовая нейтральность лилий</strong> работает на
                    них, как на универсальный цветок почти для любого букета.
                    Главное, чтобы одаряемый не испытывал неприятных ощущений
                    из-за запаха. Для большего срока хранения, лилии срезают в
                    момент, когда первый бутон на стебле начинает раскрываться.
                    Такая искусственная стойкость добавляет популярности среди
                    флористов.
                </p>
            )}
            <img src="projects/bouquet.jpg" alt="bouquet" />
            {language === "eng" ? (
                <p>
                    Kurt died tragically in early April 1994. Whether or not the
                    lily vases were intended as designs for the singer's musical
                    obituary will no longer be known. It is hoped that in the
                    future,{" "}
                    <strong>
                        the beautiful white lilies will only symbolise tender
                        feelings
                    </strong>{" "}
                    and evoke associations with the brightest moments of life.
                </p>
            ) : (
                <p>
                    Курт трагически погиб в начале апреля 1994 года. Узнать,
                    задумывались ли вазы с лилиями как дизайнерское оформление
                    музыкального самонекролога певца уже не получится. Хочется
                    надеяться, что в будущем,{" "}
                    <strong>
                        прекрасные белые лилии будут символизировать только
                        нежные чувства
                    </strong>{" "}
                    и вызывать ассоциации с самыми светлыми моментами жизни.
                </p>
            )}
            <a href="https://blog.azalianow.ru/lilii-v-nirvane/">
                {language === "eng"
                    ? "View the publication"
                    : "Посмотреть публикацию"}
            </a>
        </div>
    );
}

export default Lilies;
