
function textStream(div, text, callback, index = 0, interval = 50) {
    if (index >= text.length) {
        callback();
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

    let interval_addtion = 0;
    if (char == ",") {
        interval_addtion = 100;
    } else if (char == ".") {
        interval_addtion = 200;
    }

    window.setTimeout(
        () => { textStream(div, text, callback, index + 1, interval) },
        interval + interval_addtion
    )
}

function showAuthor() {
    document.getElementById("quote-author").classList.add("fade-in");
    document.getElementById("cursor").classList.add("disapeer");
}

window.addEventListener("load", () => {
    const sampleText = `In darkness shrouded, whispers of despair, A lone raven's caw, the poet's solitaire.
        Gloomy verses danced upon his quill,
        Edgar's ink spilled, his heart's eternal chill.

        Amidst dim-lit chambers, shadows weep,
        Echoing torments in eternal keep.
        Through haunted tales and macabre plight,
        His words a haunting melody in the night.
        `;
    textStream(
        document.getElementById("quote-main"),
        sampleText,
        showAuthor,
    );
}
);