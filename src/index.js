(() => {
    const Mousetrap = require("mousetrap");

    const config = {
        showCommentaryKey: {
            key: "space",
            cb: () => clickCommentaryButton(),
            getElem: () => document.querySelector(".commentary-button"),
        },
        pressKnownButtonKey: {
            key: "k",
            cb: () => clickKnownButton(),
            getElem: () => document.querySelector(".choice-button.is-known"),
        },
        pressUnknownButtonKey: {
            key: "j",
            cb: () => clickUnknownButton(),
            getElem: () => document.querySelector(".choice-button.is-unknown"),
        },
        pressExampleButtonKey: {
            key: "1",
            cb: () => switchToExample(),
            getElem: () => getModeElem("例文"),
        },
        pressWordButtonKey: {
            key: "2",
            cb: () => switchToWord(),
            getElem: () => getModeElem("単語"),
        },
        pressExampleJaButtonKey: {
            key: "3",
            cb: () => switchToExampleJa(),
            getElem: () => getModeElem("例文訳"),
        },
        pressWordJaButtonKey: {
            key: "4",
            cb: () => switchToWordJa(),
            getElem: () => getModeElem("単語訳"),
        },
        playAudioKey: {
            key: "p",
            cb: () => playAudio(),
            getElem: null,
        },
    }

    const addKeyLabel = (e, key) => e.textContent = `${e.textContent} [${key.toUpperCase()}]`;
    const getButtonOriginalLabel = (text) => text?.trim().split(" ")[0];

    const getChangeModeButtons = () =>
        Array.from(document.querySelectorAll(".change-phrase-mode-btn a"));
    const getModeElem = (mode) => {
        let e = null;
        getChangeModeButtons().forEach((b) => {
            if (getButtonOriginalLabel(b.textContent) === mode) e = b;
        });
        return e;
    }
    const switchMode = (mode) => getModeElem(mode)?.click();

    const switchToExample = () => switchMode("例文");
    const switchToExampleJa = () => switchMode("例文訳");
    const switchToWord = () => switchMode("単語");
    const switchToWordJa = () => switchMode("単語訳");
    const playAudio = () =>
        document.querySelector(".speaker-button-component")?.click();
    const clickCommentaryButton = () =>
        document.querySelector(".commentary-button")?.click();
    const clickKnownButton = () =>
        document.querySelector(".choice-button.is-known")?.click();
    const clickUnknownButton = () =>
        document.querySelector(".choice-button.is-unknown")?.click();

    const activate = () => {
        autoOpenDictionary();
        enableKeyShortCut();
    };

    const autoOpenDictionary = () => {
        const answerElem = document.querySelector(".commentary-area");
        if (answerElem === null || answerElem.dataset.searched) return;
        answerElem.dataset.searched = "true";

        const w = document
            .querySelector(".marksheet-answer__paragraph")
            .textContent?.trim();
        navigator.clipboard.writeText(w);
    }

    const enableKeyShortCut = () => {
        // add key event listener
        (() => {
            const getElem = () => document.querySelector(".study-content-area");
            if (getElem().dataset.enableKeyShortCut) return;
            getElem().dataset.enableKeyShortCut = "true";

            for (const [_, obj] of Object.entries(config)) {
                const key = obj.key;
                Mousetrap.bind(key, () => obj.cb());
            }
        })();

        // add key label
        for (const [_, obj] of Object.entries(config)) {
            const getElem = obj.getElem;
            if (!getElem) continue;

            const e = getElem();
            if (!e || e.dataset.added) continue;
            e.dataset.added = "true";
            addKeyLabel(e, obj.key);
        }
    }

    let gamepadIndex;
    window.addEventListener("gamepadconnected", (event) => {
        gamepadIndex = event.gamepad.index;
    });

    setInterval(() => {
        if (gamepadIndex === undefined) return;

        const gp = navigator.getGamepads()[gamepadIndex];
        gp.buttons
            .map((e) => e.pressed)
            .forEach((isPressed, idx) => {
                if (isPressed) {
                    switch (idx) {
                        case 0:
                            clickKnownButton();
                            break;
                        case 1:
                            clickCommentaryButton();
                            break;
                        case 2:
                            playAudio();
                            break;
                        case 3:
                            clickUnknownButton();
                            break;
                        default:
                            console.log(`unknown button index: ${idx}`);
                            break;
                    }
                }
            });

        if (gp.axes[0] === 1) switchToExample();
        if (gp.axes[1] === 1) switchToWord();
        if (gp.axes[0] === -1) switchToExampleJa();
        if (gp.axes[1] === -1) switchToWordJa();
    }, 100);

    const timeout = () => {
        setTimeout(function () {
            activate();
            timeout();
        }, 300);
    };

    timeout();
})();
