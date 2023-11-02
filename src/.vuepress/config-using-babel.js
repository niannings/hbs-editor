/* eslint-env node */
/* eslint-disable no-console */
import { storeHandlebarsVersionAtVuePrototype } from "./plugins/inject-handlebars-versions";
import { interactiveExamples } from "./plugins/interactive-examples";
import { buttonLink } from "./plugins/button-link";
import { updateHandlebarsCliHelp } from "./plugins/update-handlebars-cli-help";
import { useHighlightJsForCode } from "./plugins/use-highlightjs-for-code";

export default {
  base: "/",
  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //     title: "Handlebars",
  //   },
  // },
  // head: [
  //   ["link", { rel: "shortcut icon", type: "image/png", href: `/images/favicon.png` }],
  //   ["link", { rel: "manifest", href: "/manifest.json" }],
  // ],
  dest: "target/",
  themeConfig: {
    // algolia: {
    //   apiKey: "ceae3bc4e38c4b10f99cc802d1e6db96",
    //   indexName: "handlebarsjs",
    // },
    // locales: {
    //   "/": {
    //     displayAllHeaders: false,
    //     repo: "handlebars-lang/handlebars.js",
    //     lastUpdated: "最后更新",
    //     editLinks: true,
    //     editLinkText: "向这个页面提交更改！",
    //     docsRepo: "handlebars-lang/docs",
    //     docsDir: "src/zh",
    //   },
    // },
    repo: "handlebars-lang/handlebars.js",
    docsRepo: "handlebars-lang/docs",
    docsDir: "src",
  },
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
