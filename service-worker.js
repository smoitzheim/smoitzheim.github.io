if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const c=e=>d(e,n),a={module:{uri:n},exports:r,require:c};i[n]=Promise.all(s.map((e=>a[e]||c(e)))).then((e=>(f(...e),r)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa-v2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"034250c8a016f8408f51f230ef675255"},{url:"about/index.html",revision:"54f9a531e7d9f03b52d6697e4d7939ef"},{url:"archive/index.html",revision:"667376b71347cf56f94633eaf035e5fd"},{url:"blog/alienromulus/index.html",revision:"80323abc1d12b1d6d5502df75396d826"},{url:"blog/friendlyfire/index.html",revision:"b152673567d3bba980790bc916560a09"},{url:"blog/lonelyislandpod/index.html",revision:"d91f8a4518aefc6bbdb8574fba0f791b"},{url:"blog/megalopolis/index.html",revision:"e049788533735ea366aa64b4c9ce811e"},{url:"blog/trap/index.html",revision:"a3102b7a3136b0c6e098c90fa88c3530"},{url:"contact/index.html",revision:"e71781f628f8b3d0124d49125ed24cf1"},{url:"css/index.css",revision:"29647118bda9d1bb3fbf00fc8bae130d"},{url:"css/main.css",revision:"ca0af2ad9ddd9a8cdf7d55f6f9aa1203"},{url:"css/message-box.css",revision:"1ba762670598a339c6290c0bb4a250cf"},{url:"css/prism-diff.css",revision:"9eb6ba0ad1d217d8dd3625b6b3431b62"},{url:"css/styling.css",revision:"2f863ca2c2d62d5a633d76540c01f471"},{url:"dist/rJ3_G-2ArF.js",revision:"ac88ab69bb3da47bc2ca3372082b724b"},{url:"feed.html",revision:"9894711c0d2fc291dfe075b901089d8c"},{url:"img/logo.svg",revision:"375ab7ad0715c57f555277486245f432"},{url:"index.html",revision:"770155574d735ad5f2dd3ecb74991c86"},{url:"logo.svg",revision:"542038e596e2083196b23c1c29aed0f6"},{url:"manifest.json",revision:"420d8868655ad540c187399e67fb7580"},{url:"pagefind/pagefind-entry.json",revision:"bbb82483f9feaa947fcb803e94ee8c65"},{url:"pagefind/pagefind-highlight.js",revision:"9884f0f1d546e073cc0aff4442619b05"},{url:"pagefind/pagefind-modular-ui.css",revision:"8ba82b0fc3b73d70717347223422b193"},{url:"pagefind/pagefind-modular-ui.js",revision:"b79d9423fdf7ec284d9d2e8aa22c2b3e"},{url:"pagefind/pagefind-ui.css",revision:"f3a0c2b7836ea429ca865b4807d76e60"},{url:"pagefind/pagefind-ui.js",revision:"93ae1267ee78acdabb687964c7cb4ff7"},{url:"pagefind/pagefind.js",revision:"9b2d30c9eb69d0cc9e16d4dca81e1a2e"},{url:"search/index.html",revision:"db9c0d77e0515c8d33fc649f466d5b1e"},{url:"tags/index.html",revision:"26fb929e6fe57c62a94142aea7554922"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
