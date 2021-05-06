(() => {
    const Mousetrap = require("mousetrap");

    const config = {
        showCommentaryKey: {
            key: "space",
            cb: () => {
                clickCommentaryButton();
                clickConfirmationTestButton();
            },
            getElems: () => document.querySelectorAll(".commentary-button,.bottom-navs__long-nav"),
        },
        pressNextArrowButtonKey: {
            key: "g",
            cb: () => {
                clickNextArrowButton();
            },
            getElems: null,
        },
        pressKnownButtonKey: {
            key: "k",
            cb: () => {
                clickKnownButton();
                clickNextButton();
            },
            getElems: () => document.querySelectorAll(".choice-button.is-known,.bottom-navs__short-nav--right a"),
        },
        pressUnknownButtonKey: {
            key: "j",
            cb: () => {
                clickUnknownButton();
                clickAgainButton();
            },
            getElems: () => document.querySelectorAll(".choice-button.is-unknown,.bottom-navs__short-nav--left a"),
        },
        pressExampleButtonKey: {
            key: "1",
            cb: () => {
                switchToExample();
                switchEnToJa();
            },
            getElems: () => [getModeElem("例文"), getModeElem("英→日")],
        },
        pressWordButtonKey: {
            key: "2",
            cb: () => {
                switchToWord();
                switchJaToEn();
            },
            getElems: () => [getModeElem("単語"), getModeElem("日→英")],
        },
        pressExampleJaButtonKey: {
            key: "3",
            cb: () => {
                switchToExampleJa();
                switchAudioToJa();
            },
            getElems: () => [getModeElem("例文訳"), getModeElem("音→日")],
        },
        pressWordJaButtonKey: {
            key: "4",
            cb: () => {
                switchToWordJa();
                switchFillInTheBlank();
            },
            getElems: () => [getModeElem("単語訳"), getModeElem("穴埋め")],
        },
        playAudioKey: {
            key: "p",
            cb: () => playAudio(),
            getElems: null,
        },
        pressAnswer1: {
            key: "a",
            cb: () => clickAnswer(1),
            getElems: () => [getAnswer(1)],
        },
        pressAnswer2: {
            key: "s",
            cb: () => clickAnswer(2),
            getElems: () => [getAnswer(2)],
        },
        pressAnswer3: {
            key: "d",
            cb: () => clickAnswer(3),
            getElems: () => [getAnswer(3)],
        },
        pressAnswer4: {
            key: "f",
            cb: () => clickAnswer(4),
            getElems: () => [getAnswer(4)],
        },
        pressClose: {
            key: "x",
            cb: () => clickClose(),
            getElems: () => document.querySelectorAll(".exam-header .exam-header-main>a"),
        },
    }

    const addKeyLabel = (e, key) => {
        if (!e) return;

        const t = e?.textContent;
        if (/\[[0-9A-Z]+\]/.test(t)) return;

        if (Array.from(e.classList).includes("button-text")) {
            e.insertAdjacentHTML('beforeend', `<span>[${key.toUpperCase()}]</span>`);
            return;
        }
        e.textContent = `${t} [${key.toUpperCase()}]`;
    }
    const getButtonOriginalLabel = (text) => text?.trim().split(" ")[0];

    const getChangeModeButtons = () =>
        Array.from(document.querySelectorAll(".change-phrase-mode-btn a,.change-mode-btns a"));
    const getModeElem = (mode) => {
        let e = null;
        getChangeModeButtons().forEach((b) => {
            if (getButtonOriginalLabel(b?.textContent) === mode) e = b;
        });
        return e;
    }
    const switchMode = (mode) => getModeElem(mode)?.click();

    const switchToExample = () => switchMode("例文");
    const switchToExampleJa = () => switchMode("例文訳");
    const switchToWord = () => switchMode("単語");
    const switchToWordJa = () => switchMode("単語訳");
    const switchEnToJa = () => switchMode("英→日");
    const switchJaToEn = () => switchMode("日→英");
    const switchAudioToJa = () => switchMode("音→日");
    const switchFillInTheBlank = () => switchMode("穴埋め")
    const playAudio = () =>
        document.querySelector(".speaker-button-component")?.click();
    const clickCommentaryButton = () =>
        document.querySelector(".commentary-button")?.click();
    const clickKnownButton = () =>
        document.querySelector(".choice-button.is-known")?.click();
    const clickUnknownButton = () =>
        document.querySelector(".choice-button.is-unknown")?.click();
    const clickConfirmationTestButton = () => document.querySelector(".bottom-navs__long-nav")?.click();
    const clickNextButton = () => document.querySelector(".bottom-navs__short-nav--right a")?.click();
    const clickAgainButton = () => document.querySelector(".bottom-navs__short-nav--left a")?.click();
    const clickNextArrowButton = () => document.querySelector(".arrow-button-component.is-right")?.click();
    const getAnswer = (n) => {
        const a = Array.from(document.querySelectorAll(".selection-button-wrapper button>span,.answer-area .button-content a"));
        if (a.length < 4) return null;
        return a[n - 1];
    }
    const clickAnswer = (n) => getAnswer(n)?.click();
    const clickClose = () => document.querySelector(".exam-header .exam-header-main>a")?.click();

    const activate = () => {
        autoOpenDictionary();
        enableKeyShortCut();
    };

    const autoOpenDictionary = () => {
        const answerElem = document.querySelector(".commentary-area,.answer-check");
        if (answerElem === null || answerElem.dataset.searched) return;
        answerElem.dataset.searched = "true";

        let w = document
            .querySelector(".marksheet-answer__paragraph,.marksheet-answer__word")
            .textContent?.trim();
        if (location.href.includes("part-five-test")) {
            w = document.querySelector(".marksheet-answer-body__body.is-correct")?.textContent?.trim().split("\n").slice(-1)[0]?.trim();
        }
        navigator.clipboard.writeText(w);
    }

    const enableKeyShortCut = () => {
        // add key event listener
        (() => {
            const getElem = () => document.querySelector("body");
            if (getElem().dataset.enableKeyShortCut) return;
            getElem().dataset.enableKeyShortCut = "true";

            for (const [_, obj] of Object.entries(config)) {
                const key = obj.key;
                Mousetrap.bind(key, () => obj.cb());
            }
        })();

        // add key label
        for (const [_, obj] of Object.entries(config)) {
            const getElems = obj.getElems;
            if (!getElems) continue;
            getElems().forEach(e => addKeyLabel(e, obj.key))
        }
    }

    const timeout = () => {
        setTimeout(function () {
            activate();
            timeout();
        }, 300);
    };

    timeout();
})();
