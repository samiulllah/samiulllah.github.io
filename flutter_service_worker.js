'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7205c9b36473abe40165fa51b67a3038",
"index.html": "c0181dced2b7db3fb31bdc9973793a20",
"/": "c0181dced2b7db3fb31bdc9973793a20",
"firebase-messaging-sw.js": "8fa3c807e8b468b00b76e7d5d7f6004d",
"main.dart.js": "446237ba3dbd79d244a9247b4a0423ec",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ebb7ab2a5155c22feb489e4581bfb25c",
"assets/AssetManifest.json": "52a82a124a6730bd630aac97021d4a56",
"assets/NOTICES": "147c1d0e8e908ccd35b68386f02dccbb",
"assets/FontManifest.json": "914bf5af0e46ff4fe1ee3d1965f459ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/selected.svg": "b876c12984b5bfbc3ef43c4e2040b499",
"assets/assets/images/person.svg": "0805d28b79c5575ee81d19c0202c815e",
"assets/assets/images/wperson.svg": "42ece5989f1f2f75ed2ae16842613023",
"assets/assets/images/file.svg": "c0eb3c20f3fa486b26e370e7669003b5",
"assets/assets/images/profile_sideImage.png": "75b6419011d7e56ff6197577aa4faaf2",
"assets/assets/images/t404.jpg": "61e67b4c453877cc05e20251efe276f8",
"assets/assets/images/quiz_title.png": "030f98032657aa4870dcc59d6b3cc937",
"assets/assets/images/wfile.svg": "4c9682969df61b51ae87c3e33eba57dd",
"assets/assets/images/wdirectory.svg": "ab5352974d0ecf121f3fd1de53d5598c",
"assets/assets/images/logo.png": "c49187fa64dc0de429232ed96cbe890b",
"assets/assets/images/congrats.png": "6713365d280ec578cd3eea2f31669793",
"assets/assets/images/profile.png": "528afbc8919bee10f54a39efb22d0936",
"assets/assets/images/directory.svg": "52b4a353eb7c4b408de2161a75b31105",
"assets/assets/images/c404.jpg": "0dceb307d8fbabfa3e36d3f4aa70ae02",
"assets/assets/images/Image.png": "be62adfc346c3ff366d0d952f7d3b5ee",
"assets/assets/images/confetti@2x.png": "0c405c0e24b7d09583551974887cb8d4",
"assets/assets/mobsvg/user.svg": "1b76b6a293f683f57d4c72546d74fffb",
"assets/assets/mobsvg/wquiz.svg": "a3c3990880ab0b9b919174aba7c35587",
"assets/assets/mobsvg/bell.svg": "2abf4de565d5a78cfb970125edf1605e",
"assets/assets/mobsvg/wdirectory.svg": "4fa02584052ec10dce17ae7277e5d669",
"assets/assets/mobsvg/quiz.svg": "fb8db0adbc67ed3fb20bfc1556ae37af",
"assets/assets/mobsvg/wuser.svg": "1280aa3d201ec0e41905dcb127dff831",
"assets/assets/mobsvg/wbell.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/mobsvg/directory.svg": "412bffa7ab2750767d0f6bbecc9f79fd",
"assets/assets/icons/wave_hand.png": "19f2bf4a3ffd5ecf2209f49f4619c264",
"assets/assets/icons/watch.png": "1d61c7f0a78d3f3a0278d5fec247e912",
"assets/assets/icons/document.png": "b1ca8d630dc7602c8ff26b183f3f89d5",
"assets/assets/icons/bell.png": "1ab126b3015f9bb4582a76b284519865",
"assets/assets/icons/Instagram.png": "69ebac86c2e73fc0f74e72fba0f1497b",
"assets/assets/icons/i_info.png": "b7e3e0c18542f4872eabb7fa515503c5",
"assets/assets/icons/arrow_back.png": "10ef5b2665bafabc0bcbd60f269f50dc",
"assets/assets/icons/see_more.png": "7878e34505626939acf4444730e638cc",
"assets/assets/icons/person.png": "d2bb86d2e90c290f62d3a8f05e67d0c7",
"assets/assets/icons/folder.png": "4ff275f74df7e452944b752deb49738e",
"assets/assets/icons/arrow_forward.png": "514ecef2789b7f377b3954f2327a9dac",
"assets/assets/icons/medal.png": "ea9bd88743675f282b42e709bba6ebd7",
"assets/assets/icons/share.png": "42bfd8a2910590e631dccca35ae4b49e",
"assets/assets/icons/delete.png": "802e90558691c02bb2d5a5c79c28b8c9",
"assets/assets/icons/q_mark.png": "3eaa00c2e75562f3eb4deded6f6d9e65",
"assets/assets/icons/facebook.png": "a39b87f439dc469e27de1d542498cc39",
"assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
