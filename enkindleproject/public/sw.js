if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const o=e=>n(e,c),r={module:{uri:c},exports:i,require:o};s[c]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(a(...e),i)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8ccc75f99e7ffb232cd2d66245d5e1de"},{url:"/_next/static/chunks/250-069982e43c2ae463.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/69-971cc6ff58dfdad6.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/app/%5B1phase%5D/layout-e6b1083af8f297ee.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/app/%5B1phase%5D/page-a5c9516d659e6354.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/app/_not-found-b07a70f2d21ffabf.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/app/layout-55de18726cdd1470.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/app/page-8085338bb9ab3feb.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/fd9d1056-c50cb70e7323352b.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/main-app-adc88329c8554e2a.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/main-c8760e3dc131dea0.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5c55a9de6a585d79.js",revision:"uFsXK3dlQAXShou1H_AKR"},{url:"/_next/static/css/6e5d8b1f89fb928f.css",revision:"6e5d8b1f89fb928f"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/uFsXK3dlQAXShou1H_AKR/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/uFsXK3dlQAXShou1H_AKR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/detail.json",revision:"7765a6d2062ba6ac8990465e5dcf818c"},{url:"/manifest.json",revision:"e5673694241e7399bb46b81ec55826dc"},{url:"/study.json",revision:"7ef3411309b6ffebf1576c18905b7592"},{url:"/wifeflower.png",revision:"eec0661134b719ace5f0edd83d6b1cc6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
