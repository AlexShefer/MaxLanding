import { useContext } from "react";

import { LanguageContext } from "./LanguageContext";

function Architecture() {
    const { language } = useContext(LanguageContext);
    return (
        <div className="article">
            <h1>
                {language === "eng"
                    ? "Architecture of metamodern"
                    : "Архитектура метамодерна"}
            </h1>
            <img src="projects/architect.jpg" alt="architecture of modern" />
            {language === "eng" ? (
                <p>
                    <strong>For Those That Wish to Exist</strong>, the new album
                    by the British band Architects, has recently been released
                    on all digital platforms. The album consists of 15 tracks
                    and has a runtime of almost an hour. It revolves around the
                    themes of divinity and humanity, as even depicted in the
                    artwork. The astronaut depicted in the artwork stands inside
                    a church, with their gaze directed towards the sun,
                    symbolizing the search for something higher and
                    extraterrestrial. The album explores the struggle faced by a
                    segment of society that prioritizes technological
                    advancement over spiritual growth, perceiving the material
                    expression of knowledge as a substitute for the divine. The
                    church building, depicted in darkness, represents outdated
                    information that fails to provide the truth.
                </p>
            ) : (
                <p>
                    <strong>For Those That Wish to Exist</strong> — новый альбом
                    британцев Architects, который недавно вышел на всех цифровых
                    площадках, представляет собой лонгплей из 15 композиций,
                    длительностью почти на целый час. Альбом о божественном и
                    человеческом, на что намекает даже оформление. Астронавт
                    стоит в церкви, направив взгляд к солнечным лучам, как
                    символ поиска высшего, внеземного. Этим поиском занят
                    представитель той части общества, которая видела
                    превосходство технологий над духовным развитием и
                    воспринимала знания о божественном, как их материальное
                    выражение. Погружённое в темноту здание церкви,
                    символизирует устаревшую информацию, не способную дать
                    истину.
                </p>
            )}
            {language === "eng" ? (
                <h3>"Do you really think that Christ was a capitalist?"</h3>
            ) : (
                <h3>«Правда думаешь, что Христос был капиталистом?»</h3>
            )}
            <h3>(Discourse is dead)</h3>

            <iframe
                title="Discourse is dead"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/3XFqW9PbzMBy6wV06egJQ2?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />

            {language === "eng" ? (
                <p>
                    The second meaning is influenced by the viewer's
                    perspective. The astronaut, in search of answers, realizes
                    that he was looking in the wrong place as he doesn't find
                    them at the altar and decides to leave. However, the
                    question remains: who is on the other side of the altar?
                    This signifies acceptance rather than opposition to the
                    unknown. The answer will come at the appropriate time and in
                    the right place, symbolized by the pouring rays of
                    illumination.
                </p>
            ) : (
                <p>
                    Вторым смыслом наделена точка восприятия смотрящего.
                    Астронавт пришёл в поисках ответов, но не найдя их у алтаря,
                    понимает, что искал не там и уходит. Но кто по ту сторону
                    алтаря? Это указание на принятие, а не противопоставление
                    неизвестному. Ответ на вопрос будет получен в нужное время и
                    в нужном месте, словно в виде льющихся лучей, то есть
                    озарения.
                </p>
            )}
            {language === "eng" ? (
                <h3>
                    "No tree will grow to the heavens unless its roots reach the
                    depths of hell."
                </h3>
            ) : (
                <h3>
                    «Ни одно дерево не вырастет до небес, пока его корни не
                    дойдут до ада»
                </h3>
            )}
            <h3>(Do you dream of Armageddon?d)</h3>
            <iframe
                title="Do you dream of armageddon"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/0eG08cBeKk0mzykKjw4hcQ?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {language === "eng" ? (
                <p>
                    The collision of the cold, rational cosmos with inner
                    feelings and human nature is reflected in the sound of the
                    album itself. Cold, lingering synthetic sounds depict the
                    cosmos, while the voice, guitars, and drums represent the
                    human aspect, conveying warmth and a sense of being
                    grounded. The rhythmic and guitar elements, along with the
                    restlessness in the compositions, portray struggle and the
                    challenges of the journey, highlighting the earthly elements
                    within the sound. The album showcases a range of
                    compositions, transitioning from calm to aggressive,
                    mirroring the diversity of life. The protagonist grows
                    weary, experiencing negativity towards Earth and the
                    falsehoods of humanity, repenting, dreaming of space, being
                    tested, and ultimately being destroyed, like a "fire in the
                    snow" (Meteor). The hero's story concludes in a state of
                    absolute peace and understanding, encompassing everything
                    that has transpired. The hero embraces the world and
                    comprehends the value of each moment, realizing that death
                    is no longer an enemy. This sense of acceptance is
                    accentuated by the soft sound of the final song, with the
                    voice and guitar prevailing over other sounds, except for
                    the concluding moments where the voice merges with the
                    synthetic sound, metaphorically dissolving the individual
                    within the universe.
                </p>
            ) : (
                <p>
                    Столкновение холодного, рационального космоса с внутренними
                    переживаниями и человеческой природой, отражается и в самом
                    звучании альбома. Холодные, тягучие синтетические звуки
                    изображают космос. Голос, гитары и барабаны — это
                    человеческое, тёплое, менее протяжное, то есть живущее
                    меньше космических объектов. Ритм и гитарные партии,
                    беспокойство в композициях, словно изображают борьбу,
                    трудность пути, подчёркивая земное в звуке. Диапазон от
                    спокойных до агрессивных композиций, словно неоднородность
                    жизни. Герой устаёт, испытывает негатив по отношению к Земле
                    и лжи людей, кается, мечтает о космосе, проходит испытания и
                    разрушается «словно огонь в снегу» (Meteor). Его история
                    заканчивается в абсолютном спокойствии и понимании всего,
                    что происходило вокруг. Герой принимает мир и понимает
                    ценность каждого момента, делая вывод о том что смерть ему
                    уже не враг. Ощущение принятия подчёркивается мягким
                    звучанием последней песни, преобладанием голоса и гитары над
                    другими звуками, кроме самых последних, где голос сливается
                    с синтетическим звучанием, метафорически растворяя человека
                    во вселенной.
                </p>
            )}
            <h3>«Cause death is not my enemy»</h3>
            <h3>(Dying is absolutely safe)</h3>
            <iframe
                title="Dying is absolutely safe"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/track/4B161tnzwvFCWiOfx9T8Di?utm_source=generator&theme=0"
                width="100%"
                height={80}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {language === "eng" ? (
                <p>
                    The album sounds cohesive, while discussing concepts that
                    are often perceived as contradictory. As a metamodern
                    statement, FTTWE does not deconstruct ideas; instead, it
                    highlights the interconnectivity and embraces the flaws of
                    humanity in a progressive world. It acknowledges the
                    presence of the inexplicable and the divine, recognizing
                    that there is no inherent opposition between them. Both
                    aspects are integral parts of human life.
                </p>
            ) : (
                <p>
                    Альбом звучит целостно, рассказывает при этом о вещах,
                    которые принято считать противоположными. Как
                    метамодернистское высказывание FTTWE не деконструирует идеи,
                    а говорит о взаимосвязи и принятии человеческих недостатков
                    в прогрессирующем мире, одновременно с необъяснимым,
                    божественным, так как для него в этом нет
                    противопоставления, и то и другое есть часть жизни человека.
                </p>
            )}
            <a href="https://vk.com/@hangover_show-arhitektura-metamoderna">
                {language === "eng"
                    ? "View the publication"
                    : "Посмотреть публикацию"}
            </a>
        </div>
    );
}

export default Architecture;
