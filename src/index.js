(() => {
    const getChangeModeButtons = () =>
        Array.from(document.querySelectorAll(".change-phrase-mode-btn a"));
    const switchMode = (mode) => {
        getChangeModeButtons().forEach((b) => {
            if (b.textContent.trim() === mode) b.click();
        });
    };

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
        const answerElem = document.querySelector(".commentary-area");
        if (answerElem === null || answerElem.dataset.searched) return;
        answerElem.dataset.searched = "true";

        const w = document
            .querySelector(".marksheet-answer__paragraph")
            .textContent?.trim();
        window.open(`mkdictionaries:///?text=${w}&category=en-ja`, "_blank");
    };

    let gamepadIndex;
    window.addEventListener("gamepadconnected", (event) => {
        gamepadIndex = event.gamepad.index;
    });

    setInterval(() => {
        if (gamepadIndex !== undefined) {
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
            console.log(`axes: \n[0]: ${gp.axes[0]} \n[1]: ${gp.axes[1]} \n[2]: ${gp.axes[2]} \n[3]: ${gp.axes[3]} \n`);
        }
    }, 100);

    const timeout = () => {
        setTimeout(function () {
            activate();
            timeout();
        }, 500);
    };

    timeout();
})();
