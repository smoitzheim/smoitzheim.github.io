if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const l=e=>d(e,r),o={module:{uri:r},exports:s,require:l};i[r]=Promise.all(a.map((e=>o[e]||l(e)))).then((e=>(n(...e),s)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa-v2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"093d3bab453299ae6d2341aefe0396af"},{url:"abo/index.html",revision:"19ae0f51ad55f8606db404c5e0ea5a06"},{url:"about/index.html",revision:"cdaab82663b7fd00cbdcf89a47f929d7"},{url:"archive/index.html",revision:"918efb0d57ba08025680f4c54c551c7b"},{url:"archive/page-2/index.html",revision:"a5e99b31f58d288f05c3d2595438129e"},{url:"blog/_2025-02-26/index.html",revision:"5270960263741d9682f28057ae342ba5"},{url:"blog/_2025-03-07/index.html",revision:"86d60bd5b5028954e3aa790790a34149"},{url:"blog/_2025-03-14/index.html",revision:"b000a810876527ee104dad22d35b97d3"},{url:"blog/_2025-04-09/index.html",revision:"8aa8bdab6f8ebb4c9978f8eee3c6de23"},{url:"blog/actor-brain-muss-sich-so-gut-anfuehlen-eine-wuerdigung-von-adrien-brodys-pop-art_2025-04-09/index.html",revision:"3ad8b21a9a42c50346443ec9d458482a"},{url:"blog/alienromulus/index.html",revision:"0df7cdbc02d403253204181e88245c26"},{url:"blog/dispelling-a-terrible-thing-that-grammarly-wants-you-to-believe-laura-michet-s-blog_2025-02-18/index.html",revision:"eea7ebe92711d6e45bed37f7a312b390"},{url:"blog/friendlyfire/index.html",revision:"03e2b704c0fd110930a184a72282c6f8"},{url:"blog/lonelyislandpod/index.html",revision:"4c23791143f09517002b5a0273b306c3"},{url:"blog/megalopolis/index.html",revision:"e2917884c0bea637efc59392db4051bd"},{url:"blog/merz-verhalten-seit-der-wahl-ist-nicht-impulsiv-sondern-wohlkalkuliert_2025-03-03/index.html",revision:"76ac5a7bdeec41aa5eff5a13f07c3d93"},{url:"blog/trap/index.html",revision:"83fdde95a1c64dfaaa36139811b3e5d3"},{url:"contact/index.html",revision:"45c73e3e617b1c881c75a766992ae528"},{url:"css/index.css",revision:"29647118bda9d1bb3fbf00fc8bae130d"},{url:"css/main.css",revision:"0b60d7939d230f47ad5ff2b172863ff0"},{url:"css/message-box.css",revision:"1ba762670598a339c6290c0bb4a250cf"},{url:"css/prism-diff.css",revision:"9eb6ba0ad1d217d8dd3625b6b3431b62"},{url:"css/styling.css",revision:"879632d18781ee24786f38828fa629d3"},{url:"dist/rJ3_G-2ArF.js",revision:"ac88ab69bb3da47bc2ca3372082b724b"},{url:"feed/index.html",revision:"62fe820cddb3a63d3ed784a3589b2cc8"},{url:"img/logo.svg",revision:"375ab7ad0715c57f555277486245f432"},{url:"index.html",revision:"2d7922020166959128a7e6fc3db500be"},{url:"logo.svg",revision:"542038e596e2083196b23c1c29aed0f6"},{url:"manifest.json",revision:"420d8868655ad540c187399e67fb7580"},{url:"pagefind/pagefind-entry.json",revision:"fe3ad71dcdfc3c431dd081fdaf539346"},{url:"pagefind/pagefind-highlight.js",revision:"9884f0f1d546e073cc0aff4442619b05"},{url:"pagefind/pagefind-modular-ui.css",revision:"8ba82b0fc3b73d70717347223422b193"},{url:"pagefind/pagefind-modular-ui.js",revision:"b79d9423fdf7ec284d9d2e8aa22c2b3e"},{url:"pagefind/pagefind-ui.css",revision:"f3a0c2b7836ea429ca865b4807d76e60"},{url:"pagefind/pagefind-ui.js",revision:"93ae1267ee78acdabb687964c7cb4ff7"},{url:"pagefind/pagefind.js",revision:"9b2d30c9eb69d0cc9e16d4dca81e1a2e"},{url:"search/index.html",revision:"79ba8151873c97b217aa7ec5edda0a03"},{url:"tags/index.html",revision:"868fb29b76677cbdebdac01a879f1187"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
