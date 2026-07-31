/**
 * Curated Pexels stock photo URLs for the Lumokits site.
 * All images are referenced directly from Pexels CDN — never downloaded.
 * Format: https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w={width}
 */

function px(id: number, w = 1200): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const images = {
  // Hero — football/sportswear lifestyle
  heroFootball: px(38083557, 2000),
  heroFootballAlt: px(37383524, 2000),

  // Who We Work With
  footballClubs: px(4621891, 1000),
  sportsAcademies: px(4792066, 1000),
  schoolsUniversities: px(37401749, 1000),
  sportsBrands: px(36730419, 1000),
  retailers: px(7641304, 1000),
  distributors: px(6550860, 1000),

  // Process / workflow
  design: px(35617659, 1000),
  sampling: px(4621891, 1000),
  production: px(6717035, 1000),
  printing: px(6905162, 1000),
  stitching: px(6275937, 1000),
  qualityControl: px(13924870, 1000),
  shipping: px(2569179, 1000),

  // Materials & fabrics — macro
  fabricBirdEye: px(7498815, 1000),
  fabricInterlock: px(11585380, 1000),
  fabricDryFit: px(6634449, 1000),
  fabricCotton: px(13924870, 1000),
  fabricFrenchTerry: px(3621121, 1000),
  fabricFleece: px(6763716, 1000),
  fabricPolyester: px(216668, 1000),
  fabricCompression: px(8030176, 1000),

  // Gallery
  galleryFootballKits: px(38083557, 1400),
  galleryBasketball: px(374677, 1400),
  galleryTrainingWear: px(4792066, 1400),
  galleryHoodies: px(6550860, 1400),
  galleryJackets: px(7641304, 1400),
  galleryEmbroidery: px(35617659, 1400),
  galleryFabric: px(7498815, 1400),
  galleryProduction: px(6717035, 1400),
  galleryPackaging: px(2569179, 1400),
  galleryShipping: px(8454899, 1400),

  // About
  aboutSialkot: px(6717035, 1600),
  aboutTeam: px(6275937, 1600),
  aboutCraft: px(6905162, 1600),

  // Manufacturing page
  mfgPattern: px(35617659, 1600),
  mfgFabric: px(11585380, 1600),
  mfgPrint: px(6905162, 1600),
  mfgCut: px(13924870, 1600),
  mfgStitch: px(6275937, 1600),
  mfgQC: px(7498815, 1600),
  mfgPack: px(2569179, 1600),

  // Why Lumo
  whyLumoHero: px(38083557, 2000),
  whyLumoComm: px(6550860, 1600),
  whyLumoDelivery: px(8454899, 1600),

  // Contact
  contactHero: px(37383524, 2000),

  // CTA
  ctaBanner: px(4621891, 2000),
};
