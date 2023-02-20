window.onload = () => {
    window._state = {};

    // twitter emoji!
    twemoji.parse(document.body);

    // dyanamic border setting
    document.body.style.minHeight = `${window.innerHeight - 40}px`

    // fade in content
    window._state.bodyFadeInterval = setInterval(() => {
        let html = document.querySelector("html");
        let opacity = Number(window.getComputedStyle(html).getPropertyValue("opacity"));

        if (opacity < 1) {
            opacity = opacity + 0.1;
            html.style.opacity = opacity
        } else {
            clearInterval(window._state.bodyFadeInterval);
        }
    }, 50);

    // this fixes github pages not generating mermaid diagram definitions
    document.querySelectorAll(".language-mermaid").forEach((e) => {
        e.parentElement.outerHTML = `<div class="mermaid">${e.innerHTML}</div>`
    });
    mermaid.init();
}