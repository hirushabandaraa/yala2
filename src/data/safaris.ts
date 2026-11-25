export interface ItineraryStop {
  time: string;
  title: string;
  description: string;
}

export interface SafariPackage {
  id: 'morning' | 'full-day' | 'sunset';
  title: string;
  shortTitle: string;
  price: number;
  durationLabel: string;
  metaSummary: string;
  badge?: string;
  sightingRate: string;
  timeWindow: string;
  defaultDeparture: string;
  vehicle: string;
  capacity: string;
  dining: string;
  pickup: string;
  heroSummary: string;
  imageUrl: string;
  imageAlt: string;
  heroBannerUrl: string;
  highlights: string[];
  ctaLabel: string;
  isFeatured?: boolean;
  itinerary: ItineraryStop[];
  includedInCharter: string[];
  permitsAndNotes: string[];
}

export interface WildlifeEntry {
  id: string;
  scientificName: string;
  commonName: string;
  shortCaption: string;
  imageUrl: string;
  imageAlt: string;
  bestZones: string;
  peakHours: string;
  fieldNotes: string;
  photographyTip: string;
  layoutClass: string;
  isPrimaryFeature?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  country: string;
  packageName: string;
}

export const HERO_IMAGE = {
  url: 'https://lh3.googleusercontent.com/aida/ALJJyrDt7Vg71DeWhRGs0cmbuzMv3-jokZpesJqKpraOto3e89TgIgHh8FEC216GrvNKn1p5K8Y18kHYgboIreBmFFCsw_pAHIkb5y8AU0-Fu4rEIUQBNUglhGjcIRgTVJadPxGOtMY2FZPhYVxa8d2Kz_4ZVjN4cbU5dsqoeMkgR4Xck8gUFaC6vBAq3uA2g38N0bc3IveuY2eIpuzFKBaV2VCIOcxdfkvW9RqqRf_FZ40UacvCgE4OKgXWbdB04g',
  alt: 'Sri Lankan leopard resting on a granite boulder in golden hour light at Yala National Park',
};

export const JEEP_COLLAGE_IMAGES = {
  main: {
    url: 'https://lh3.googleusercontent.com/aida/ALJJyrAOTmCNS-Hc80mT-A6PrHoEDAC6xx3hEb8A5ER_qixS4_8XaQRzbfUBopoU-RZzuqKImtFGdpulA4Kd7QdO0oGu_xKjlQOZR0mRmNe5m1ZL2xzmn_3DenZm5VbipXWpFvgsXMu8OpkgDT8ecjLCsT69KZPWLts3X5Xct-040Dg8R5cyolqn1D5wJWUbNXgWhZUA7GqTfKZ84pMVZ65uu1Jg1zkl3LYkgyxpmiDVhFSxAefQcX8badGYsZ9I',
    alt: 'Custom-modified open-top 4x4 safari jeep with tan leather seats in Yala bushland',
  },
  gear: {
    url: 'https://lh3.googleusercontent.com/aida/ALJJyrAUb4eNrFx6ewrqWCTESFmv0sRxXHRFZTW91CK1cuA237IdoxqTFT7nihay2WD8v016bqcws7TRyh1mYlQ9YmU328mLp2pm61RQhNDwx1D5Yx6zSHGilPjJtg9pd2eCG-GLZk9sL_iDmdzOjTfWMld2Zf-L-BSXEG1q_TNgMpYGKUrmqlcqhsG8bA1aVjLF15VJ0dc9ZsZsg0_AWny3Nkn4HxJDC3Qkutp0EHOjdPbKsJLHEyZptLu_joZSzw',
    alt: 'Telephoto wildlife camera lens and binoculars mounted on a safari jeep',
  },
};

export const SAFARI_PACKAGES: SafariPackage[] = [
  {
    id: 'morning',
    title: 'Golden Hour Morning Safari',
    shortTitle: 'Morning Safari',
    price: 145,
    durationLabel: '4 Hours',
    metaSummary: '4 Hours · Private 4x4 Jeep',
    sightingRate: '78% Sightings',
    timeWindow: '5:30 AM – 9:30 AM',
    defaultDeparture: '5:30 AM (Full Day / Morning)',
    vehicle: 'Custom Open-Top 4x4',
    capacity: 'Up to 6 Guests',
    dining: 'Ceylon Tea & Fruit Cooler',
    pickup: 'Tissamaharama & Yala Pickup',
    heroSummary:
      'First-light tracking across Yala Block 1 coastal plains while nocturnal predators return along quiet sandy tracks.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrCynKWGP1zP2PPPcQeXk3iknTNAWJjFIkW_tIU6afJISz-SAug85vOuKXuXVUv1-JZzhxq3oqFm6xBvhv311zG0uq634EDkvBKJMHCZ8aGs_9BaShjoxYLLuSxYa8eNvUMvSY8sVStGxovYtrsrmgE1fKKuQ6Y4O0bHjvjpitVY97KzYuhPMwcTw0WaZ0a0nbxWShgiXa-HFIiQwc0stYREw1EB6w8B9F_Kbbqsy-YdOjyy6V0tfk6zA5VC',
    imageAlt: 'Sri Lankan leopard walking along a sunlit jungle track at dawn in Yala',
    heroBannerUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrCynKWGP1zP2PPPcQeXk3iknTNAWJjFIkW_tIU6afJISz-SAug85vOuKXuXVUv1-JZzhxq3oqFm6xBvhv311zG0uq634EDkvBKJMHCZ8aGs_9BaShjoxYLLuSxYa8eNvUMvSY8sVStGxovYtrsrmgE1fKKuQ6Y4O0bHjvjpitVY97KzYuhPMwcTw0WaZ0a0nbxWShgiXa-HFIiQwc0stYREw1EB6w8B9F_Kbbqsy-YdOjyy6V0tfk6zA5VC',
    highlights: [
      'First-light entry at Palatupana Gate (5:30 AM)',
      'Fresh pugmark tracking along coastal rock outcrops',
      'Artisan Ceylon tea & tropical fruit cooler',
    ],
    ctaLabel: 'Reserve Morning Safari',
    itinerary: [
      {
        time: '05:00 AM',
        title: 'Complimentary Lodge Pickup',
        description:
          'Prompt pre-dawn collection from your Tissamaharama or Yala buffer-zone resort in a private open-top 4x4.',
      },
      {
        time: '05:30 AM',
        title: 'First-Light Gate Entry',
        description:
          'Enter Palatupana Gate at opening bell to read overnight leopard pugmarks on damp coastal sand tracks.',
      },
      {
        time: '07:15 AM',
        title: 'Rock Outcrop & Alarm-Call Tracking',
        description:
          'Navigate granite ridges near Patanangala and listen for spotted deer and langur warning calls.',
      },
      {
        time: '08:30 AM',
        title: 'Ceylon Tea & Tropical Fruit Break',
        description:
          'Pause beside a scenic beach clearing for freshly brewed highland tea, king coconut, and seasonal fruit.',
      },
      {
        time: '09:30 AM',
        title: 'Lagoon Return & Lodge Drop-Off',
        description:
          'Scan coastal lagoons for painted storks and mugger crocodiles before returning comfortably to your hotel.',
      },
    ],
    includedInCharter: [
      'Private custom 4x4 safari jeep & driver',
      'Certified senior wildlife tracker',
      'Artisan Ceylon tea, chilled water & fruit cooler',
      'Gimbal mounts, beanbags & binoculars',
    ],
    permitsAndNotes: [
      'National Park entry tickets paid at gate (~$42/guest)',
      'Free cancellation up to 48 hours prior',
      'Early breakfast box coordination available with your lodge',
    ],
  },
  {
    id: 'full-day',
    title: 'Full-Day Leopard Tracker',
    shortTitle: 'Full-Day Tracker',
    price: 290,
    durationLabel: '12 Hours',
    metaSummary: '12 Hours · Breakfast & Lunch',
    badge: 'Signature Expedition',
    sightingRate: '94% Sightings',
    timeWindow: '5:30 AM – 6:00 PM',
    defaultDeparture: '5:30 AM (Full Day / Morning)',
    vehicle: 'Private 4x4 Land Cruiser',
    capacity: 'Up to 6 Guests',
    dining: 'Breakfast & Lunch',
    pickup: 'Tissamaharama & Yala Pickup',
    heroSummary:
      'Twelve unhurried hours across Yala Block 1 and Block 5 with a senior leopard tracker, gourmet bush dining, and midday waterhole stakeouts.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrA420wDX9wpV4S5Ak_F-4Km3GaDKdLYfTUzW2iMVXe-axubePrDegSqsawCOLQSnQhc-5VavdXhO9rhXr4KROocTnyawae4HfZiFsldXstT4AZBz4aWZWYN68RMYku9dIjsfvTkVdiiNwEFOCKT72MgRyp-_gQZ6QW7NZq-pMzXGVN5Pe4XgULM7T0tH6rI2js2CUp4L4_QxcOvPBuoySUYkDs3KcgSjoYQngri6w7MUKWMba5m6ISB9tOW',
    imageAlt: 'Custom open-top 4x4 safari jeep overlooking a tranquil Yala waterhole',
    heroBannerUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrA3GRl91GfOswvCOln9yMuDpJA0kBP3Y8g7QWpmjmBUHhfhYlkDvW1uy1Pxebm8JARs1IHnl7eXInuLuBjpY4BwdjhfzUljRR092uZ6PI7ygUxQoQy9VOLGzq6aIUoxRxKIra70vPAhWvq5KLNVcWS7fq4fiADvjLCGgaaVTkNj97KdCCokbgT4idvzlV_UV-y99RH4Ata1fHBO2XPio2lAPgmRiq5Gi7APWrP__cbcH1JkNijdLU-LuOCGIpID',
    highlights: [
      'Picnic breakfast & riverside gourmet lunch included',
      'Deep-park access across Yala Block 1 & Block 5',
      'Unrushed midday waterhole stakeouts for photographers',
    ],
    ctaLabel: 'Reserve Full-Day Drive',
    isFeatured: true,
    itinerary: [
      {
        time: '05:00 AM',
        title: 'Complimentary Lodge Pickup',
        description:
          'Door-to-door transfer from your Tissamaharama or Yala buffer-zone hotel in our custom open-top 4x4.',
      },
      {
        time: '05:30 AM',
        title: 'Dawn Entry at Palatupana Gate',
        description:
          'First-light tracking along sandy coastal tracks and rocky outcrops while leopards patrol territories.',
      },
      {
        time: '08:30 AM',
        title: 'Gourmet Bush Breakfast',
        description:
          'Freshly brewed Ceylon tea, tropical fruit, and hot Sri Lankan hoppers served at a shaded forest clearing.',
      },
      {
        time: '12:30 PM',
        title: 'Riverside Lunch & Waterhole Stakeout',
        description:
          'Chilled refreshments and a curated picnic lunch beside the Menik Ganga as elephants and sloth bears gather.',
      },
      {
        time: '03:30 PM',
        title: 'Golden Hour Predator Drive',
        description:
          'Afternoon circuit through Block 1 lagoons for late-day leopard movement and wetland birdlife before dusk exit.',
      },
    ],
    includedInCharter: [
      'Private custom 4x4 safari jeep & driver',
      'Certified senior wildlife tracker',
      'Picnic breakfast, riverside lunch & cooler',
      'Gimbal mounts, beanbags & binoculars',
    ],
    permitsAndNotes: [
      'National Park entry tickets paid at gate (~$42/guest)',
      'Free cancellation up to 48 hours prior',
      'Custom dietary menus available on request',
    ],
  },
  {
    id: 'sunset',
    title: 'Sunset & Dusk Wilderness Drive',
    shortTitle: 'Sunset Drive',
    price: 140,
    durationLabel: '4 Hours',
    metaSummary: '4 Hours · Birding & Leopards',
    sightingRate: '82% Sightings',
    timeWindow: '2:30 PM – 6:30 PM',
    defaultDeparture: '2:30 PM (Sunset & Dusk)',
    vehicle: 'Custom Open-Top 4x4',
    capacity: 'Up to 6 Guests',
    dining: 'Chilled Sundowner Cooler',
    pickup: 'Tissamaharama & Yala Pickup',
    heroSummary:
      'Golden-hour circuits through Yala lagoons and dry-zone scrubland as elephants gather at waterholes and leopards emerge onto open branches.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBKAH2efb9Ksk7TmmrOvAgfXJ7z4Ka4yL27auXHUn0A69MB0_e_YwA4QtpuvEVlSVIr-mwcpB6ScDaBEdqZ6riM88YA4mLZBzb9UGXSug4JAAwxBmrNmTh1jVR7QpWAYA5c0yW3zoRfab1AsS-shElwxA0UhHAX6Rm3Po_w7fkBDeSsmwBXaIdNeaOiVS1JPQ3Lx8aSAMRFGqp3PHFcj1n1-IEzYFr_-NLTXDhK7g1KcUEsaq-qlaVIHRY',
    imageAlt: 'Sri Lankan leopard silhouetted on a tree branch at dusk in Yala National Park',
    heroBannerUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBKAH2efb9Ksk7TmmrOvAgfXJ7z4Ka4yL27auXHUn0A69MB0_e_YwA4QtpuvEVlSVIr-mwcpB6ScDaBEdqZ6riM88YA4mLZBzb9UGXSug4JAAwxBmrNmTh1jVR7QpWAYA5c0yW3zoRfab1AsS-shElwxA0UhHAX6Rm3Po_w7fkBDeSsmwBXaIdNeaOiVS1JPQ3Lx8aSAMRFGqp3PHFcj1n1-IEzYFr_-NLTXDhK7g1KcUEsaq-qlaVIHRY',
    highlights: [
      'Birdwatching & leopard sightings in golden dusk light',
      'Lagoon routes for sloth bears & painted storks',
      'Chilled sundowner refreshments by the coast',
    ],
    ctaLabel: 'Reserve Sunset Drive',
    itinerary: [
      {
        time: '02:00 PM',
        title: 'Afternoon Hotel Pickup',
        description:
          'Relaxed afternoon collection from your Tissamaharama or Palatupana lodge with chilled towels and bottled water.',
      },
      {
        time: '02:30 PM',
        title: 'Wetland & Lagoon Birding Circuit',
        description:
          'Explore calm brackish lagoons alive with painted storks, Malabar pied hornbills, and Eurasian spoonbills.',
      },
      {
        time: '04:00 PM',
        title: 'Waterhole Elephant & Bear Watch',
        description:
          'Position quietly near shaded tanks as herds of Asian elephants bathe and sloth bears forage in palu groves.',
      },
      {
        time: '05:15 PM',
        title: 'Dusk Leopard Territory Patrol',
        description:
          'Follow quiet forest corridors during the golden hour as leopards emerge onto open boulders and tree limbs.',
      },
      {
        time: '06:30 PM',
        title: 'Coastal Sundowner & Park Exit',
        description:
          'Enjoy chilled refreshments overlooking the Indian Ocean surf before returning to your resort under twilight skies.',
      },
    ],
    includedInCharter: [
      'Private custom 4x4 safari jeep & driver',
      'Certified senior wildlife tracker',
      'Chilled sundowner beverages & tropical snacks',
      'Gimbal mounts, beanbags & binoculars',
    ],
    permitsAndNotes: [
      'National Park entry tickets paid at gate (~$42/guest)',
      'Free cancellation up to 48 hours prior',
      'Ideal lighting for warm backlit silhouette photography',
    ],
  },
];

export const WILDLIFE_GALLERY: WildlifeEntry[] = [
  {
    id: 'leopard',
    scientificName: 'Panthera pardus kotiya',
    commonName: 'Sri Lankan Leopards',
    shortCaption: 'Apex predators spotted across Block 1 rocky outcrops and sandy tracks.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBM7viMqHArP6UNPuEeRUFcTRP4W8lNm9pwrfvzKSrsDsjcPbqBjdIHrzL3-kUJEpgipipjV3Cplxq1OScFO9pcvyEijqBvmAW2plRsGrmVeoQhp9wqN0y52AQRwQUrPIiZhcSz8C91bubpX8yG76fvPJylQemwuMpNGeO28cqEzFNzUwSOatMr4Za33eqVkVFbflUlMIixpAau8DrND1i9ZyGdV5l33p-vQRKIUB8L9cYxCm0Dwb_bu4Sp-UOdXl27',
    imageAlt: 'Sri Lankan leopard peering through tall golden savanna grass in Yala',
    bestZones: 'Block 1 Granite Outcrops & Patanangala Coast',
    peakHours: '5:30 AM – 8:00 AM · 4:45 PM – 6:15 PM',
    fieldNotes:
      'Yala Block 1 holds the highest recorded density of wild leopards on Earth. As apex predators free from tigers or lions, Sri Lankan leopards confidently walk open sandy tracks and rest in low palu trees.',
    photographyTip:
      'Use a 400mm–600mm telephoto on our jeep gimbal rail; keep shutter speed above 1/1000s during dawn track crossings.',
    layoutClass: 'md:col-span-5 md:row-span-2 min-h-[360px] md:min-h-0',
    isPrimaryFeature: true,
  },
  {
    id: 'elephant',
    scientificName: 'Elephas maximus maximus',
    commonName: 'Asian Elephants',
    shortCaption: 'Matriarchal herds crossing coastal lagoons and bathing along Menik Ganga.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBVIh3H_IP_tcErapWWyO4nhheczaU1ROKpMvvl7LdJBkMe9BRKRuEZVvK_jhEXbu-EYPBiRzX-EvCy5KrTI4RoIqwV0HfwTRePUfXTh_I51JSdafvnapTnaGlDE18cXQ4tjB6UcBKSMQ-T7rCScWBeeJzgWe_ues1EoA2uZZu9sqbi7nJlzZrp80AbfB_VVcUFkITYTY9AVApt6IdkK7onB5_eMUE13Tkcn44npnsRzXs4zjABWxOX9UsGWZw_kz4R9w',
    imageAlt: 'Sri Lankan Asian elephant herd crossing a golden lagoon in Yala National Park',
    bestZones: 'Menik Ganga Riverbanks & Block 5 Glades',
    peakHours: '11:30 AM – 3:30 PM · Dusk Lagoon Crossings',
    fieldNotes:
      'Subspecies native to Sri Lanka, distinguished by subtle depigmentation patches on ears and trunks. Solitary tuskers and family herds gather reliably at midday waterholes.',
    photographyTip:
      'Switch to a 70–200mm lens to frame herds against open water reflections and sweeping dry-zone woodland.',
    layoutClass: 'md:col-span-7 md:row-span-1 min-h-[260px] md:min-h-0',
  },
  {
    id: 'sloth-bear',
    scientificName: 'Melursus ursinus inornatus',
    commonName: 'Sloth Bears',
    shortCaption: 'Elusive dry-zone bears foraging near termite mounds and palu trees.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrAMgAUDbtE0MnILE2SmqUcRHqxE_JJBG5Wr_XPkMAXjFTRJNrw8-P75Gboh-w7h7e8xIVVpW5tMUVAEwKU17a_2jpjMjrdx07upHwRN38D7DkXO81JBgZqTAQnQ_w7h8LFc85NqGoUkCckpacCj_OZSx4D-XRe7zwNXrplsEh4CcsCeSkeXGQG9Q6dvDlvPiutr6RM8kYdYUVagLaG1EIXuOt7Cu6GK69ZnLZA9YKWiXcq6O94lkfL9HCSPKRRD',
    imageAlt: 'Sri Lankan sloth bear foraging near a rocky forest outcrop in Yala',
    bestZones: 'Palu Forest Corridors & Block 1 Scrub',
    peakHours: '6:30 AM – 9:00 AM · May–July Palu Fruiting Season',
    fieldNotes:
      'Shaggy-coated endemic subspecies with a keen sense of smell. Trackers locate bears by listening for rhythmic termite-mound excavation and fallen palu berries.',
    photographyTip:
      'Raise ISO slightly under dense forest canopy and use silent electronic shutter to avoid startling cautious mothers with cubs.',
    layoutClass: 'md:col-span-4 md:row-span-1 min-h-[260px] md:min-h-0',
  },
  {
    id: 'birds',
    scientificName: '215+ Avian Species',
    commonName: 'Exotic Birds',
    shortCaption: 'Painted storks, Sri Lankan junglefowl, bee-eaters, and sea eagles.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrA0wQEoqNy1AjL0l_0h76wSk_5RB7wwFXWqlV3E5XUMjkgQhfHOgJTM5nWGLInPAr2V-0VY6b0-bSL-qHrvkOurm61iM2jgGvRDYGZyzgKuhDUF24BL58oX7qPDJZ6UR6kjKuZi5jpq4svF9csRxFWNpbBXM42oNcosJQfzDHeqdY-Tb_d_Urlu2GWF7GKdHY_V26iNq8xvc_cCuQJ-hycNxxg-dRBHyNZ3-ElLamLC555O-15wVlZdPTL2hnc6xQ',
    imageAlt: 'Painted stork and Sri Lankan peacock perched near a wetland in Yala',
    bestZones: 'Buttuwa Lagoon & Palatupana Salt Pans',
    peakHours: '6:00 AM – 10:00 AM · 3:00 PM – 5:45 PM',
    fieldNotes:
      'Over 215 resident and migratory species inhabit Yala’s coastal wetlands, including the endemic Sri Lankan junglefowl, Malabar pied hornbill, and white-bellied sea eagle.',
    photographyTip:
      'Mount a beanbag on the side rail for eye-level reflections of wading storks and black-necked storks along still lagoons.',
    layoutClass: 'md:col-span-3 md:row-span-1 min-h-[260px] md:min-h-0',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'vance',
    quote:
      '"Our tracker read fresh pugmarks near Patanangala within twenty minutes of sunrise. Watching a male leopard descend from a palu tree in total silence was unforgettable."',
    author: 'Clara & Oliver Vance',
    country: 'United Kingdom',
    packageName: 'Full-Day Tracker',
  },
  {
    id: 'meier',
    quote:
      '"As a wildlife photographer, the custom gimbal mount and beanbag rail on the jeep made all the difference. We captured two leopards and a sloth bear without crowds."',
    author: 'Lukas Meier',
    country: 'Switzerland',
    packageName: 'Morning Safari',
  },
  {
    id: 'reid',
    quote:
      '"Seamless pickup from our Tissamaharama lodge at 5 AM, chilled towels, and genuine respect for the animals. Easily the highlight of our three weeks in Sri Lanka."',
    author: 'Hannah & Liam Reid',
    country: 'Australia',
    packageName: 'Sunset Drive',
  },
];
