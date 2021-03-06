// Тебе нужно выступить на совещании, но не можешь придумать речь? Не нужно себя утруждать, ведь генератор умных фраз сделает это за тебя и составит высокоинтеллектуальную речь из 10 фраз!
function generateRandomPhrase () {
    let randomIntroductions = ["Коллеги,", "С другой стороны,", "Равным образом", "Не следует, однако, забывать, что", "Таким образом,", "Повседневная практика показывает, что", "Уважаемые коллеги,", "Позвольте вам напомнить, что", "В целом, конечно,", "Разумеется,"];
    let randomSubjects = ["реализация намеченных плановых заданий", "рамки и место обучения кадров", "постоянный количественный рост и сфера нашей активности", "сложившаяся структура организации", "новая модель организационной деятельности", "дальнейшее развитие различных форм деятельности", "перспективное планирование", "оптимизация основных целей", "экономическая повестка сегодняшнего дня", "внедрение современных подходов"];
    let randomVerbs = ["играет важную роль в формировании", "требуют от нас анализа", "требуют определения и уточнения", "способствует подготовке и реализации", "обеспечивает широкому кругу (специалистов) участие в формировании", "позволяет выполнить важные задания по разработке", "не дает нам иного выбора, кроме определения", "вынуждает нас объективно потребовать", "играет определяющее значение для", "выявляет срочную потребность"];
    let randomAdditions = ["существенных финансовых и административных условий", "дальнейших направлений развития", "системы массового участия", "позиций, занимаемых участниками в отношении поставленных задач", "новых предложений", "направлений прогрессивного развития", "стандартных подходов", "нестандартных решений", "экономических и неэкономических факторов и перспектив", "инновационных методов управления процессами"];

    function pickRandomWord (words) {
        return words[Math.floor(Math.random() * words.length)];
    }

    let randomPhrase = [pickRandomWord(randomIntroductions), pickRandomWord(randomSubjects), pickRandomWord(randomVerbs), pickRandomWord(randomAdditions) + "."].join(" ");

    return randomPhrase;
};

function generateSpeach () {
    let speach = [];
        for (let i = 0; i < 10; i++) {
            let randomPhrase = generateRandomPhrase();
            speach.push (randomPhrase);
        }
    return speach;
};
generateSpeach ();