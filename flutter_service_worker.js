'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "32ee887561f00e12222d30b97fbbe7db",
"assets/AssetManifest.smcbin": "b2deb479f6b563d7cd76341f16a5a367",
"assets/assets/10-1.jpg": "90b33d388ab3a7a9d7636722516ae0e1",
"assets/assets/agua.jpeg": "129b5065efac9dd15b074fc7dcfb8238",
"assets/assets/anverso.jpg": "d89922c2c1963eb49bf49e190d4e11d9",
"assets/assets/barra_01.png": "bd921882d784e962ab6e19c915a95703",
"assets/assets/fondoblanco.png": "a1aac6741ff83e77da0727c878f1f09c",
"assets/assets/icono.jpg": "0676f6dc19aa8d942cbe4a5cfb0c693f",
"assets/assets/icono1.jpg": "f9a464d696211ae4cd48d84e44c97ce0",
"assets/assets/imagen2.jpg": "13fb69f2600f327bcaf2cf90ac92ba8d",
"assets/assets/imagen3.jpg": "ecfb19c1dc55ab21c75685b0d877319e",
"assets/assets/imagen4.png": "67c8144773047d36592073c2b522342b",
"assets/assets/images/auto.png": "b908df004c16dff23f7afad1170ed03a",
"assets/assets/images/avatar.jpeg": "1762702441e59dbfcdab6d90908fd451",
"assets/assets/images/avion.png": "1df3fd2e5d4f5187ba7019a0d3bb5503",
"assets/assets/images/barra_13.png": "505142c9bde3dde4a1b88fac55b76eb3",
"assets/assets/images/borde.png": "60981dec967b1abc092136a46176149f",
"assets/assets/images/br1.png": "e884f64539d6cf1f41f0f94e3b1640c6",
"assets/assets/images/br2.png": "badd20b84b4a075952d060a60f8b69c4",
"assets/assets/images/br3.png": "fd891fb5a1d7d9a144c90bdddb7cbff1",
"assets/assets/images/br4.png": "e24dc689f7c5f11d44d410d0e0680dd2",
"assets/assets/images/br5.png": "d94880f09f43b750d39b98d401d71e84",
"assets/assets/images/br7.png": "dc67b19748da1f35c94075cc1c0d1186",
"assets/assets/images/calculadora1.png": "9bb2e75bf5b2a07e12d25fabc0a3b14e",
"assets/assets/images/casa.png": "8f09067e2407527148103ae84f2c4036",
"assets/assets/images/casado.png": "f300991dc4e8bc785f9ded5aaba5cde7",
"assets/assets/images/fondo2.jpg": "a4e4aba5022f539febc18afad0df11a0",
"assets/assets/images/fondo3.jpg": "8a9eb2c1bb8caa0a43ac33f0071c27bd",
"assets/assets/images/fondoObjetivo.jpeg": "1d607faf2d8b80b3aa435bff9ffaff36",
"assets/assets/images/imgbarra1.png": "4a461b1b352dc27945ec6e81d6ca8d4f",
"assets/assets/images/imgbarra2.png": "df6ddd0ae77f5f20ddb24a7e86bade2f",
"assets/assets/images/imgbarra3.png": "26d7543eb86311b1fc6d1cea5901d37e",
"assets/assets/images/imgbarra4.png": "55b425be83ced97eb35694756048f0e6",
"assets/assets/images/logo1.png": "b87cedaff8a1b9381fec9a5b4eacf161",
"assets/assets/images/logoBH1.png": "c001b0282bb0eebaa1b821d3319a2efb",
"assets/assets/images/logoBH2.png": "8efbb3476b7f71b5a9c7c5157160db84",
"assets/assets/images/logoBH3.png": "b7481f12b3d9c024db3dcce93f9f0aeb",
"assets/assets/images/logoPreste01.png": "8e9457a67f1b433ca361db342ebf2a6b",
"assets/assets/images/logo_1_1.png": "758de3e219fa9c5a7c4af706055c3aba",
"assets/assets/images/negocios.png": "0016354418957d0425d1f8c93cf17ce6",
"assets/assets/images/Otro.png": "4ad39d7bdae2b1f4921581bb79ee70cb",
"assets/assets/images/salud.png": "cbffb7ad3700f1f1a4cfe9b2ff442c41",
"assets/assets/images/soltero.png": "d76fd922e18dc77d4a48351752b0b988",
"assets/assets/imagotipo.png": "0301e2ea24e8f2af22e284e28d0d9b1a",
"assets/assets/Isologo.png": "8036a6a17f559a208acbb164dd3c39c0",
"assets/assets/logoblanco.svg": "f24d189bab5ef50c6c9366374735c826",
"assets/assets/luz.png": "a1eb6c9a05740621cc309ad183d8f904",
"assets/assets/pagina5.jpg": "be83fafb19e2630922b02d6f7bbd32b5",
"assets/assets/pagina6.png": "fe89edd2284adef1eb5f42a043b7c1f5",
"assets/assets/reverso.jpg": "5852e9132c4049004d769bd7cf1403ec",
"assets/assets/tessdata/eng.traineddata": "57e0df3d84fed9fbf8c7a8e589f8f012",
"assets/assets/tessdata/spa.traineddata": "fe6702ff94e1873c80775cef5e9e4a5d",
"assets/assets/tessdata_config.json": "fb2b4f306f85c5058a2b648fa294f60d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3cb7764b6eae7fd627c1e494a991cab9",
"assets/NOTICES": "4a1bd7e5d801d1a30d884ffdc7949dbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_tesseract_ocr/images/test_1.jpg": "0a2be1304ca3660cbd959ab65d45f98f",
"assets/packages/flutter_tesseract_ocr/images/test_11.jpg": "0d635defc90b9fa1df0ba9def0eeb9cb",
"assets/packages/flutter_tesseract_ocr/images/test_16.jpg": "35314971c77f915dd1bf0b9579a84960",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ad31c1bcfc68b1bff0c5b030095e7da",
"/": "5ad31c1bcfc68b1bff0c5b030095e7da",
"main.dart.js": "9eed6186f3509cb2e833e0b1320736c2",
"manifest.json": "ecbec7d1f60344a83ad7143921cfbfee",
"version.json": "db762c07d38ee1d17a482fe3a472f3ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
