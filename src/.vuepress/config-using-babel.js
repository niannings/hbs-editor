/* eslint-env node */
/* eslint-disable no-console */
import { storeHandlebarsVersionAtVuePrototype } from "./plugins/inject-handlebars-versions";
import { interactiveExamples } from "./plugins/interactive-examples";
import { buttonLink } from "./plugins/button-link";
import { updateHandlebarsCliHelp } from "./plugins/update-handlebars-cli-help";
import { useHighlightJsForCode } from "./plugins/use-highlightjs-for-code";

export default {
  base: "/",
  dest: "target/",
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "playground",
        defaultTitle: "",
        before: (content) => `<div class="playground">${content}`,
        after: "</div>",
      },
    ],
    storeHandlebarsVersionAtVuePrototype,
    interactiveExamples,
    buttonLink,
    updateHandlebarsCliHelp,
    useHighlightJsForCode,
  ],
};
