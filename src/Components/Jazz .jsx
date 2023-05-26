import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Jazz() {
    const { language } = useContext(LanguageContext);
    return (
        <div className="article">
            <h1>{language === "eng" ? "Jazz and roots" : "Джаз и корни"}</h1>
            {language === "eng" ? (
                <p>
                    Music has the property of immersing the listener in a flow
                    and taking them far away from where they are. Jazz is
                    associated with this flow in particular, already at the
                    level of definition. But while the names of Duke Ellington,
                    Charlie Parker, Benny Goodman, Louis Armstrong, Glenn
                    Miller, John Coltrane and Ella Fitzgerald are well known,
                    Charles Mingus is less frequently mentioned.
                </p>
            ) : (
                <p>
                    Музыка наделена свойством погружать слушателя в поток и
                    уносить далеко от места где он находится. Джаз связан с этим
                    потоком особенно, уже на уровне определения. Но если имена
                    Дюка Эллингтона, Чарли Паркера, Бенни Гудмена, Луи
                    Армстронга, Гленна Миллера, Джона Колтрейна, Эллы
                    Фицджеральд известны многим, то о Чарльзе Мингусе вспоминают
                    заметно реже.
                </p>
            )}
            <img src="projects/jazz.jpg" alt="Charles Mingus" />
            {language === "eng" ? (
                <p>
                    The jazz double bassist is not always the most prominent
                    figure in a band, but Charles Mingus' 1960 album{" "}
                    <strong>Blues & Roots</strong> demonstrated that a bassist
                    could be not only a high-class performer but also a skilled
                    composer and bandleader.
                </p>
            ) : (
                <p>
                    Джазовый контрабасист — не самая заметная фигура в
                    коллективе, но альбом Чарльза Мингуса, выпущенный в 1960
                    году <strong>Blues & Roots</strong>, доказал, что басист
                    может быть не просто высококлассным исполнителем, но и
                    серьёзным композитором и лидером коллектива.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    The album is brimming with swing, blues, and gospel
                    influences. It exudes a vibrant and energizing energy, as if
                    it were shaking you up and propelling you onto a
                    sun-drenched street in New Orleans, where southern rhythms
                    and the never-ending celebration of Mardi Gras fill the air.
                    The brass sections are deeply moving, vividly accentuating
                    the rhythmic nuances and conveying the sheer joy with which
                    they were played. The entire experience is intensified by
                    the resonant sound of the double bass, gentle percussion,
                    and soulful vocalizations.
                </p>
            ) : (
                <p>
                    Альбом полон свинга, отсылок к блюзу и госпелу. В нём так
                    много жизнеутверждающей, мощной энергии, словно тебя
                    встряхнули и вытолкнули на залитую солнцем улицу Нового
                    Орлеана в южные ритмы и бесконечный карнавал Марди Гра.
                    Партии духовых очень подвижны, ярко акцентируют ритмические
                    точки и передают удовольствие, с которыми исполнялись. Всё
                    прокачивается глубоким звуком контрабаса, мягкими ударных и
                    вокализами.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    The most renowned track on the record,{" "}
                    <strong>Moanin’</strong>," is a reimagined version of Bobby
                    Timmons' composition, played by Art Blakey and his band. It
                    demonstrates Mingus' exceptional ability to transform it
                    into a spontaneous and explosive melody. "Moanin'"
                    eventually became a jazz standard, and as critic Gary
                    Giddins aptly stated, it "put the music world on its ear."
                </p>
            ) : (
                <p>
                    Самая известная композиция на пластинке{" "}
                    <strong>Moanin’</strong> — переработанная версия
                    произведения Бобби Тиммонса — пианиста у Арта Блейки —
                    показывает на сколько Мингус сумел его переосмыслить, сделал
                    мелодию спонтанной, взрывной. Moanin’ в итоге стала джазовым
                    стандартом, и как сказал критик Гэри Гиддинс «положила
                    музыкальный мир на ухо».
                </p>
            )}

            <iframe
                title="Moanin'"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/3rFzc8CLVDZ7OOtFa2jPYP?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />

            {language === "eng" ? (
                <p>
                    Critics have frequently criticized Mingus' work, accusing
                    him of deviating from tradition. "Blues & Roots" serves as a
                    response to these criticisms, evident even in the title
                    itself. In the track "E's Flat Ah's Flat Too," one can hear
                    an incredible fury and power, as if the music itself puts an
                    end to the debate over whether it embodies enough swing. For
                    an initial introduction, listening to the original version
                    is recommended. However, the augmented version of the album,
                    released by Rhino Studios on CD in 1998, keeps you engaged
                    in the flow and offers a fresh perspective on the
                    compositions
                </p>
            ) : (
                <p>
                    Критики нередко нападали на творчество Мингуса, обвиняли в
                    уходе от традиций. Blues & Roots — ответ во всем, в том
                    числе и в названии. В{" "}
                    <strong>E's Flat Ah's Flat Too</strong> можно расслышать
                    такую ярость и мощь, словно сама музыка ставит точку в
                    спорах о том, достаточно ли это свинг. Для первого
                    ознакомления послушайте оригинал, но дополненная версия
                    альбома, выпущенная студией Rhino на CD в 1998 году,
                    удерживает в потоке, даёт ещё одно восприятие композиций.
                </p>
            )}
            {language === "eng" ? (
                <p>
                    Jazz may or may not be loved, but no matter how you feel
                    about it, this music full of revelations and mysteries will
                    forever be part of world culture.
                </p>
            ) : (
                <p>
                    Джаз можно любить и не любить, но как бы вы к нему не
                    относились, эта музыка полная откровений и тайн, навсегда
                    останется частью мировой культуры.
                </p>
            )}
            <a href="https://vk.com/@hangover_show-dzhaz-i-korni">
                {language === "eng"
                    ? "View the publication"
                    : "Посмотреть публикацию"}
            </a>
        </div>
    );
}

export default Jazz;
