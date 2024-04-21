import hljs from "https://cdn.skypack.dev/highlight.js";
import anime from "https://cdn.skypack.dev/animejs";
import darkreader from "https://cdn.skypack.dev/darkreader";

// on page load
window.addEventListener("load", (event) => {
  // user has dark mode enabled
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // run dark reader
    darkreader.enable({
      brightness: 100,
      contrast: 100,
      sepia: 0,
    });

    // import highlight theme
    importCss(
      "https://cdn.skypack.dev/highlight.js/styles/base16/gruvbox-light-soft.css"
    );
  } else {
    // import highlight theme
    importCss(
      "https://cdn.skypack.dev/highlight.js/styles/base16/gruvbox-dark-hard.css"
    );
  }

  // run highlight.js
  hljs.highlightAll();

  // animate body
  anime({
    targets: "body",
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutQuad",
  });

  // get all links on page
  const links = document.querySelectorAll("a");

  // do animation on link clicks
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      anime({
        targets: "body",
        opacity: 0,
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          window.location.href = link.href;
        },
      });
    });
  });
});

function importCss(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
