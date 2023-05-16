
function textStream(div, text, index = 0, interval = 80) {
    if (index >= text.length) {
        return;
    }
    let char = text[index];
    if (char === "\n") {
        const br = document.createElement("br");
        div.appendChild(br);
    } else {
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(char));

        div.appendChild(span);
    }

    window.setTimeout(
        () => { textStream(div, text, index + 1, interval) },
        interval
    )
}

window.addEventListener("load", () => {
    const sampleText = `In darkness shrouded, whispers of despair, A lone raven's caw, the poet's solitaire.
        Gloomy verses danced upon his quill,
        Edgar's ink spilled, his heart's eternal chill.

        Amidst dim-lit chambers, shadows weep,
        Echoing torments in eternal keep.
        Through haunted tales and macabre plight,
        His words a haunting melody in the night.

        A heart once tethered to lost love's grief,
        Each syllable weaved, granting no relief.
        His tortured soul, a symphony of woe,
        In cryptic rhythms, his emotions flow.

        Ethereal dreams cast in somber verse,
        Unveiling depths of sorrow, his curse.
        In dreams, he found refuge from mortal pain,
        But woke to a world drenched in sorrow's rain.

        Oh, Edgar, master of darkness profound,
        Your words in timeless echoes resound.
        A poet's soul, forevermore embraced,
        In realms of sorrow, you've eternally traced.
        `;
    textStream(document.getElementById("quote-main"),
        sampleText);
}
);