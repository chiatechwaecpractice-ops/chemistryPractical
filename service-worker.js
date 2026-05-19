const CACHE_NAME = "chiatech-chem-practical-2026-05-19";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/app.css",
  "./assets/js/app.js",
  "./assets/logo.png",
  "./assets/logo2.PNG",
  "./assets/happytutor.PNG",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/diagrams/waecchemistrypractical.PNG",
  "./assets/diagrams/advanced-calculation.png",
  "./assets/diagrams/agno3-chloride-confirmation.PNG",
  "./assets/diagrams/ammonia-test.PNG",
  "./assets/diagrams/bacl2-sulphate-confirmation.PNG",
  "./assets/diagrams/bunsenburner.PNG",
  "./assets/diagrams/titration-setup-labelled.PNG",
  "./assets/diagrams/titration-setup.PNG",
  "./assets/diagrams/titration-setup2.PNG",
  "./assets/diagrams/cation-test-tubes.PNG",
  "./assets/diagrams/burette-reading.png",
  "./assets/diagrams/filtration.png",
  "./assets/diagrams/filtration_filterpaper.PNG",
  "./assets/diagrams/filterfunnel.PNG",
  "./assets/diagrams/laboratoryreagents.PNG",
  "./assets/diagrams/colorofprecipitates.PNG",
  "./assets/diagrams/dilution-flask.PNG",
  "./assets/diagrams/dilution-volumetric-flask.png",
  "./assets/diagrams/dropper.PNG",
  "./assets/diagrams/passingco2overlimeh2o.PNG",
  "./assets/diagrams/pb2-cation-test-flow.PNG",
  "./assets/diagrams/percentage-purity.PNG",
  "./assets/diagrams/precipitate-colours.PNG",
  "./assets/diagrams/precipitate-colours2.PNG",
  "./assets/diagrams/testtubes.PNG",
  "./QuantitativeAnalysis/prt1quantitativeanalysis.html",
  "./QuantitativeAnalysis/prt2quantitativeanalysis.html",
  "./QuantitativeAnalysis/prt3quantitativeanalysis.html",
  "./QualitativeAnalysis/prt1qlativeanalysis.html",
  "./QualitativeAnalysis/prt2qualitativeanalysis.html",
  "./QualitativeAnalysis/prt3qualitativeanalysis.html",
  "./test6/test6.html",
  "./test7/test7.html",
  "./test8/test8.html",
  "./test9/test9.html",
  "./test10/test10.html",
  "./test11/test11.html",
  "./test12/test12.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", event => {
  if(event.data && event.data.type === "WARM_CACHE"){
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  }
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if(request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then(cached => {
      if(cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        if(response.ok && new URL(request.url).origin === location.origin){
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => {
        if(request.mode === "navigate") return caches.match("./index.html");
        return cached;
      });
    })
  );
});
