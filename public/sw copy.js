if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let n={};const r=e=>i(e,s),g={module:{uri:s},exports:n,require:r};a[s]=Promise.all(c.map((e=>g[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-45796b32"],(function(e){"use strict";importScripts("worker-g5LIk0Z13Y_Q55gtOHwgt.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/110-50394102f519895512e3.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/127.1c1f2c5b024db493fc2c.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/154-6432914814a47f07e3a2.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/241-d841da7a32928bf5ca08.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/255-5ee430099e207ea81675.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/257-9d740bee94c0ffbbb2d3.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/264-f80c1cb2f86aead1d99e.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/275-d895d21c631d9d3e7440.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/315-25bfc1e6351ecc63db2b.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/333-521cb80023f537fd686c.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/418-1b80e52141554f20dc3c.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/51-60149a62fefc6df15ca0.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/653-00d8af830a409df42d76.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/679.5ee97ac665e1c7b09218.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/72a30a16.e9d4ebeb864442bdc055.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/844-86a16de9a6ee07ee296b.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/856.5c356ab3f7884525352d.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/935-85b4645f94842d94b570.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/945-b6f4c7cf6c7e48222e0c.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/962-55ad8599761b39ae712c.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/a9a7754c-89a0f14adbdad767bbc4.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/ad7f724d-4642bcffebb44530e8dc.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/cb1608f2-75b1a61b0800c6c0a324.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/e78312c5-367b7015d56e6c62ab97.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/eabe11fc.a074d6c9d59e160ccde4.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/framework-443002ddad2a6a6c5d56.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/main-c52deb632c2ff891769b.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/404-bd9d94d9767beae9b774.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/_app-1c7a19f0fc06990ea9a0.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/_error-ea939aab753d9e9db3bd.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/admin1-cb69c0ff4ad5704c82ae.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/admin2-1ea390d7bd93b1e21fc2.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/aproveite-1d85dd24fea66ced53bf.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/atualizar-senha-9b419e4fe4c75c25864f.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/cadastro-1b2ff03dd34062f31ff0.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/carrinho-ea9c576c145c0684329a.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/certificado-c3346091378a055d050b.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/checkout-e4707647f20cc846d1cd.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/conta-33e506f3e8d14145d656.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/cursos/%5Bslug%5D-91718c653f84681abe0b.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/index-33c86b40671d94379df5.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/obrigado-d6dee5b135a9c8e67706.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/portal-fe8d36a14478d448fdae.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/produtos/mercado-de-trabalho-9460717e0c2a3c6d00d5.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/recuperacao-3ad31f47626194e69d77.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/termos-de-uso-e-politica-de-privacidade-41d4302c8e83593e885d.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/pages/verificacao-certificado-8422bf9d54bc034b98fa.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/polyfills-e7a279300235e161e32a.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/chunks/webpack-f8581e86b19a34076d2f.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/css/006024f9cbb5df2c2863.css",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/css/e93e1a40ab5a5cf44abd.css",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/g5LIk0Z13Y_Q55gtOHwgt/_buildManifest.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/g5LIk0Z13Y_Q55gtOHwgt/_ssgManifest.js",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/media/card-user-background.290ab84750794d2acb986eafc066f341.png",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/_next/static/media/certificate-background-back.0ecb7995856d90a7e539060c95709bae.jpg",revision:"g5LIk0Z13Y_Q55gtOHwgt"},{url:"/app-energia-lucrativa.png",revision:"e0f2004ef974831e91d3d14e67f99495"},{url:"/avatar-energia-lucrativa.png",revision:"f54eb0d5dd74f4cfd85d35fe7ddf5190"},{url:"/card-azume.png",revision:"741ae77aab2d5a7c416ead16f5bcb875"},{url:"/card-ebel.png",revision:"20c16a25319209d43f8fea93aedb9453"},{url:"/card-esl.png",revision:"02121db636b2095ed8521812c7bf131b"},{url:"/card-fvs.png",revision:"9df4dca7daf717858b9474bf0b67883d"},{url:"/card-mel.png",revision:"c30635eb6cd7a93ae84b5d9d3c93859e"},{url:"/card-placeholder.png",revision:"fcd487fef1b630058017787d0c54ce3f"},{url:"/card-product.png",revision:"633e974481807259982b069a7d817023"},{url:"/card-user-background.png",revision:"0ced2c52a9000b5f7220659227eb9451"},{url:"/cart-thumb-azume.png",revision:"77baaa19ec497df3b7fac6d0d8fd379f"},{url:"/cart-thumb-esl.png",revision:"3c76c9a14cb172758e09162e352f6880"},{url:"/cart-thumb-fvs.png",revision:"1eb54df78af8ae198259da4d4b920b89"},{url:"/cart-thumb-mel.png",revision:"266919864100f71f38e13e459a2530d8"},{url:"/cart-thumb-product.png",revision:"393425e06a21b843209826ffbd20ea71"},{url:"/certificate-background-back.jpg",revision:"7ce9a747986494b3cf616b374159e486"},{url:"/certificate-background-front-esl.jpg",revision:"03eba4e9d2a443d17b284f469f0327ee"},{url:"/certificate-background-front.jpg",revision:"804e90ab87bbcccac6ba4e1d51066c07"},{url:"/checkout-banner-azume-placeholder.png",revision:"7862817f1595ab97c8e23246d01f5515"},{url:"/checkout-banner-azume.png",revision:"74a9695ebd2cc501f105e729d27c0548"},{url:"/csp-offer-azume.webp",revision:"693f86d30a430e3bc70f5a3f2e05ba60"},{url:"/csp-offer-esl.webp",revision:"c2717179a431360380d9ce35f6aa7dd3"},{url:"/csp-offer-placeholder.png",revision:"42865f6f38bef72181fbb8e748103e4d"},{url:"/empty-cover-user.png",revision:"42774adaa877a802d117ef571d7d0e0d"},{url:"/empty-cover-visitor.png",revision:"1a18ece9cc882a6e2618c3bd96f2d62c"},{url:"/energia-lucrativa-apple-icon-114x114.png",revision:"6ea469f1888377301e8a91cd5aeddccd"},{url:"/energia-lucrativa-apple-icon-120x120.png",revision:"9534be0729a1cf18dfe33228f152070d"},{url:"/energia-lucrativa-apple-icon-144x144.png",revision:"d8482ef33fe32ff5e137ce7c4b68eaea"},{url:"/energia-lucrativa-apple-icon-152x152.png",revision:"5125aea4631292d7d059ba66ef1b6447"},{url:"/energia-lucrativa-apple-icon-180x180.png",revision:"7439373f706b187efd95f9f70d77a518"},{url:"/energia-lucrativa-apple-icon-57x57.png",revision:"9663aa9b4fa1b0fe13c09ab3770421db"},{url:"/energia-lucrativa-apple-icon-60x60.png",revision:"e71f0c15ad608c0d056d6d5323753f87"},{url:"/energia-lucrativa-apple-icon-72x72.png",revision:"e049ffdc43b528db411102cd5701e3e2"},{url:"/energia-lucrativa-apple-icon-76x76.png",revision:"7957a3c6701c02246a56b15c87281757"},{url:"/energia-lucrativa-icon-128x128.png",revision:"4814289ecc0bd0440a0903cbec27b44e"},{url:"/energia-lucrativa-icon-144x144.png",revision:"a5326542f2380257616a50861ca55d42"},{url:"/energia-lucrativa-icon-152x152.png",revision:"119649b9381efb43eb5776f613441d53"},{url:"/energia-lucrativa-icon-192x192.png",revision:"9507f4295058ee210fd4357d1a756c63"},{url:"/energia-lucrativa-icon-256x256.png",revision:"4b4b43dc0263cb9911a2d90f206e9fcc"},{url:"/energia-lucrativa-icon-384x384.png",revision:"eea66e7cfc9dc1c532a8b38b98848611"},{url:"/energia-lucrativa-icon-48x48.png",revision:"d8bded6a56ddcf917aed9eebf35782eb"},{url:"/energia-lucrativa-icon-512x512.png",revision:"c2724c21b178ce3014a2cd001130dcc4"},{url:"/energia-lucrativa-icon-72x72.png",revision:"be7e911083e0121ceaaddb25a68fb0cc"},{url:"/energia-lucrativa-icon-96x96.png",revision:"00bb4ffe301cb1e4848341b7825faa62"},{url:"/favicon.ico",revision:"ac2b7faee0cfdb70c9969c9c6cbc688e"},{url:"/funil-card.jpg",revision:"e3fe0a0a1a9694888ad0310ed384507c"},{url:"/garantia-energia-lucrativa.png",revision:"2a9b16a9e77d18cd19cee7befc0b46f4"},{url:"/imagem-perfil-vazio.png",revision:"a0593185ed9b872ed7d8004c5c7aecfb"},{url:"/imagem-vazio.png",revision:"eb5e855f9829c19aa3dea3f090a19366"},{url:"/logo-energia-lucrativa-500x500.png",revision:"d4611fcbc1da04c97d4046a821dfed62"},{url:"/logo-energia-lucrativa-600x200.png",revision:"9b142e1f99b9a8973f8e6d2579dc8a49"},{url:"/manifest.json",revision:"c5977a6adc9d916725930d3179532a37"},{url:"/notification-energia-lucrativa.png",revision:"eff013eb21609ea960e246054136b04d"},{url:"/og-image-energia-lucrativa.png",revision:"fe666f7a2b29057392e3180fb4f9c4c7"},{url:"/paulo_castaganri.jpg",revision:"73d7faa114c0c3ddb509d0df5f063347"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/thumb-placeholder.png",revision:"8fb3f2ad5beec00df4042f5e1df2535d"},{url:"/user-no-avatar.png",revision:"b7d15526db73afb0762a320e6b1bb035"},{url:"/video-placeholder.jpg",revision:"095a9941296dc7f1c2d232792344ca05"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.NetworkFirst({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.NetworkFirst({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.NetworkFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.NetworkFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.NetworkFirst({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.NetworkFirst({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.NetworkFirst({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
