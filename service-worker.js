if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const a=e=>d(e,n),c={module:{uri:n},exports:r,require:a};i[n]=Promise.all(s.map((e=>c[e]||a(e)))).then((e=>(f(...e),r)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa-v2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"35435e33be3b75d93ae089905f485e65"},{url:"about/index.html",revision:"9354bd94913911f4038ffef15a005e13"},{url:"blog/index.html",revision:"dd30feb3e8add301169d3be9c89061ff"},{url:"blog/lonelyislandpod/index.html",revision:"76c0892cb3cc80b68d319474e924510d"},{url:"blog/microtest/index.html",revision:"b6463d1ec1353a8f68db4737d95860df"},{url:"contact/index.html",revision:"107f55fb5f8a1f74e2aa9d48850cbeec"},{url:"css/index.css",revision:"29647118bda9d1bb3fbf00fc8bae130d"},{url:"css/main.css",revision:"ca0af2ad9ddd9a8cdf7d55f6f9aa1203"},{url:"css/message-box.css",revision:"1ba762670598a339c6290c0bb4a250cf"},{url:"css/prism-diff.css",revision:"9eb6ba0ad1d217d8dd3625b6b3431b62"},{url:"dist/rJ3_G-2ArF.js",revision:"ac88ab69bb3da47bc2ca3372082b724b"},{url:"img/logo.svg",revision:"375ab7ad0715c57f555277486245f432"},{url:"img/wallace-henry-5utisuD5Bdk-unsplash.jpg",revision:"6edcb78a8b8e2783ac53382dfef5d707"},{url:"index.html",revision:"23e0f33db4469fdab5e17e2b6de28515"},{url:"logo.svg",revision:"542038e596e2083196b23c1c29aed0f6"},{url:"manifest.json",revision:"420d8868655ad540c187399e67fb7580"},{url:"pagefind/pagefind-entry.json",revision:"86313f691ae6fb09817145dbf86183f4"},{url:"pagefind/pagefind-highlight.js",revision:"9884f0f1d546e073cc0aff4442619b05"},{url:"pagefind/pagefind-modular-ui.css",revision:"8ba82b0fc3b73d70717347223422b193"},{url:"pagefind/pagefind-modular-ui.js",revision:"b79d9423fdf7ec284d9d2e8aa22c2b3e"},{url:"pagefind/pagefind-ui.css",revision:"f3a0c2b7836ea429ca865b4807d76e60"},{url:"pagefind/pagefind-ui.js",revision:"93ae1267ee78acdabb687964c7cb4ff7"},{url:"pagefind/pagefind.js",revision:"9b2d30c9eb69d0cc9e16d4dca81e1a2e"},{url:"search/index.html",revision:"8b7b796ef369472bef379b258f219dc1"},{url:"tags/index.html",revision:"18fb39d905134cfa8161a026af87bd6c"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
