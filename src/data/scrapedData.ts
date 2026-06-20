// ═══════════════════════════════════════════════════════════════
//  SCRAPED DATA FROM everceutical.com
//  Last updated: June 2025
// ═══════════════════════════════════════════════════════════════

// ─── SITE META ───────────────────────────────────────────────
export const siteMeta = {
  title: "Everceutical | Global Leader in Exosome Therapy for Skin & Hair Regeneration",
  email: "everceutical@gmail.com",
  social: {
    facebook: "https://www.facebook.com/EverCeutical",
    instagram: "https://www.instagram.com/everceutical/",
    tiktok: "https://www.tiktok.com/@everceutical",
    youtube: "https://www.youtube.com/@EverCeutical",
  },
  currencies: ["USD", "EUR", "GBP", "AUD", "INR", "JPY", "CAD", "CNY", "AED", "PKR"],
}

// ─── NAVIGATION ──────────────────────────────────────────────
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research & Technology", href: "/research-technology" },
  { label: "Inspection Report", href: "/inspection-report" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
]

// ─── PRODUCTS ────────────────────────────────────────────────
export interface ScrapedProduct {
  id: string
  title: string
  subtitle: string
  tagline: string
  description: string
  kitContent: string[]
  peptides: { name: string; function: string }[]
  keyBenefits: string[]
  idealFor: string[]
  howToUse: string[]
  importantNote: string
  caseStudies: CaseStudy[]
  images: {
    main: string
    kit: string
  }
}

export interface CaseStudy {
  name: string
  age: number
  gender: "Male" | "Female"
  concern: string
  treatment: string
  sessions: string
  results: string
  feedback: string
  beforeAfterImage: string
}

export const scrapedProducts: ScrapedProduct[] = [
  // ─── PRODUCT 1: Scalp 10B ──────────────────────────────────
  {
    id: "exogenesis-scalp-10b",
    title: "ExoGenesis hUC-MSCs Exosomes Scalp Kit (10 Billion)",
    subtitle: "ExoGenesis Scalp 10B",
    tagline: "Advanced Regenerative Formula for Hair & Scalp Restoration",
    description:
      "Discover the next generation of hair regeneration with the ExoGenesis hUC-MSCs Exosomes Scalp Kit — an innovative blend of stem cell–derived exosomes and 9 high-performance peptides, scientifically formulated to revitalize the scalp, awaken dormant follicles, and promote visibly healthier, fuller hair. Ideal for professionals and individuals seeking visible hair growth, reduced shedding, and improved scalp health with non-invasive care.",
    kitContent: [
      "1 Vial of Lyophilized hUC-MSCs Exosomes — Contains 10 Billion+ exosome particles, sourced from Human Umbilical Cord Mesenchymal Stem Cells (hUC-MSCs)",
      "1 Vial of Peptide-Based Diluent Solution — Enriched with a carefully selected blend of 9 bioactive peptides that directly support scalp regeneration and follicle stimulation",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates scalp cell renewal and promotes follicle stem cell activation" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Enhances collagen synthesis, reduces inflammation, and improves scalp microcirculation" },
      { name: "Acetyl Tetrapeptide-3", function: "Strengthens follicle anchoring and supports ECM remodeling" },
      { name: "Biotinoyl Tripeptide-1", function: "Boosts hair root strength and reduces shedding" },
      { name: "Myristoyl Pentapeptide-17", function: "Increases hair shaft thickness and density" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Reduces scalp inflammation and supports healing" },
      { name: "Decapeptide-4", function: "Stimulates dermal regeneration and follicle microenvironment optimization" },
      { name: "Oligopeptide-2", function: "Improves scalp elasticity and supports collagen framework" },
      { name: "SH-Polypeptide-9 (VEGF)", function: "Enhances scalp vascularization, ensuring nutrients reach the follicles" },
    ],
    keyBenefits: [
      "Activates dormant hair follicles & promotes new growth",
      "Enhances scalp healing, elasticity & microcirculation",
      "Reduces DHT-driven follicle miniaturization",
      "Strengthens anchoring proteins for better hair retention",
      "Balances scalp pH and supports a healthier scalp biome",
    ],
    idealFor: [
      "Early to moderate hair thinning in men & women",
      "Post-hair transplant care & maintenance",
      "Stress or hormone-related shedding",
      "Clients seeking science-backed regenerative treatments",
    ],
    howToUse: [
      "Mix the lyophilized exosome powder with the peptide-enriched diluent just before use.",
      "Apply on clean scalp using derma roller, microneedling pen, or gentle massage (as directed by your aesthetic practitioner).",
      "Recommended regimen: 1 session per month, continued for 4–6 months for best results.",
    ],
    importantNote:
      "This is a cosmeceutical-grade topical/mesotherapy product and should be used under the guidance of a qualified dermatologist, trichologist, or aesthetic professional. Not intended for intravenous use.",
    caseStudies: [
      {
        name: "Ms. Seo-Young",
        age: 31,
        gender: "Female",
        concern: "Complete Baldness Across the Forehead Hairline",
        treatment: "ExoGenesis™ Advanced Scalp Regeneration Protocol",
        sessions: "6 Sessions (Every 60 Days)",
        results: "Over 90% of the previously bald area was covered with new, healthy hair growth, and her hairline looked naturally restored.",
        feedback: "I used to hide behind bangs and scarves. Now, seeing my hairline come back feels like getting part of myself back. It's an amazing change.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_8.53.00_PM.jpg?v=1749500290",
      },
      {
        name: "Ms. Soo-Yeon",
        age: 29,
        gender: "Female",
        concern: "Diffuse Thinning and Visible Baldness at the Center of Scalp",
        treatment: "ExoGenesis™ Scalp Regeneration Therapy",
        sessions: "4 Sessions (60 Days Apart)",
        results: "Nearly 90% of the bald area was covered, and new hair growth began filling in the gaps with healthier strands.",
        feedback: "I was worried my hair would never recover, but the results have been amazing. I feel feminine and confident again—like myself.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_12.14.29_PM.jpg?v=1749411529",
      },
      {
        name: "Ms. Ha-Eun",
        age: 35,
        gender: "Female",
        concern: "Progressive Hair Loss and Visible Baldness in Center of Scalp",
        treatment: "ExoGenesis™ Hair Regeneration Protocol",
        sessions: "4 Sessions (60 Days Apart)",
        results: "90% of the affected area was covered, and the new hair growth appeared naturally blended and healthy.",
        feedback: "It felt like my hair was vanishing day by day. But now, seeing myself in the mirror makes me smile again.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.28_PM.jpg?v=1749409970",
      },
      {
        name: "Mr. Seong-Woo",
        age: 30,
        gender: "Male",
        concern: "Rapid hair shedding leading to noticeable baldness across the scalp",
        treatment: "ExoGenesis™ Scalp Regeneration Therapy",
        sessions: "4 Sessions (Results assessed 4 months later)",
        results: "Fresh hair growth began filling previously bare areas. Density and texture improved, giving a fuller, well-groomed look.",
        feedback: "I was shocked at how fast the change happened. In only half a month, my scalp went from nearly bald to covered.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.10.32_PM.jpg?v=1749500621",
      },
      {
        name: "Ms. Yoon-Seo",
        age: 32,
        gender: "Female",
        concern: "Hair thinning and visible baldness from the front hairline",
        treatment: "ExoGenesis™ Precision Hair Regrowth Therapy",
        sessions: "4 Sessions (60 Days Apart)",
        results: "100% restoration in the targeted area. The regrown hair seamlessly blended with existing strands.",
        feedback: "I used to avoid tying my hair back or facing the mirror in bright light. Now, I feel free, confident, and back to being myself.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.27.21_PM.jpg?v=1749501331",
      },
      {
        name: "Ms. Seo-Yeon",
        age: 24,
        gender: "Female",
        concern: "Receding hairline with excessive hair fall from the frontal scalp region",
        treatment: "ExoGenesis™ Scalp Regeneration Therapy",
        sessions: "3 Sessions (60 days Interval)",
        results: "Full regrowth along the frontal hairline. Significant increase in hair thickness and follicle health.",
        feedback: "I didn't expect results so quickly! My hairline feels fuller again, and I can style my hair with confidence.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.38_AM.jpg?v=1754136218",
      },
      {
        name: "Ms. Ah-Reum",
        age: 29,
        gender: "Female",
        concern: "Localized Hair Loss in the Temporal Region",
        treatment: "ExoGenesis™ Targeted Hairline & Temple Regeneration",
        sessions: "4 Sessions (Every 60 Days)",
        results: "Over 95% of the thinning area was restored with new hair. The temporal recession was filled in naturally.",
        feedback: "I never imagined that hair loss from just one side could affect my whole look. After the treatment, the balance came back.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.36_AM_1.jpg?v=1754136618",
      },
      {
        name: "Ms. Bo-Ram",
        age: 33,
        gender: "Female",
        concern: "Severe Hair Thinning with Baldness Along the Frontal Hairline & Diffuse Scalp Density Loss",
        treatment: "ExoGenesis™ Total Scalp Regeneration Protocol",
        sessions: "6 Sessions (Every 60 Days)",
        results: "Frontal hairline showed clear regrowth. More than 90% of thinning areas were covered with new, healthy strands.",
        feedback: "I had accepted that I'd need to hide my scalp forever. But ExoGenesis gave me real hair back.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.36_AM.jpg?v=1754136707",
      },
    ],
    images: {
      main: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/file_000000008f6c72098961e8144020204b.png?v=1765468007",
      kit: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/Untitled_design_1_1920X.png?v=1765472335",
    },
  },

  // ─── PRODUCT 2: Scalp 15B ──────────────────────────────────
  {
    id: "exogenesis-scalp-15b",
    title: "ExoGenesis hUC-MSCs Exosomes Scalp Kit (15 Billion)",
    subtitle: "ExoGenesis Scalp 15B",
    tagline: "High-Performance Scalp Treatment with 13 Advanced Peptides",
    description:
      "Unlock the future of non-invasive hair regeneration with the ExoGenesis hUC-MSCs Exosomes Scalp Kit — a scientifically engineered blend of stem-cell-derived exosomes and 13 advanced peptides, designed to restore, reactivate, and rejuvenate your scalp and follicles from the cellular level. This high-performance scalp treatment system is ideal for professionals and individuals seeking visible hair growth, reduced shedding, and an overall healthier scalp environment.",
    kitContent: [
      "1 Vial Lyophilized hUC-MSCs Exosomes — Containing 15 Billion+ exosome particles (3 Billion/ml) derived from Human Umbilical Cord Mesenchymal Stem Cells (hUC-MSCs)",
      "1 Vial Peptide-Based Diluent Solution — Infused with a powerful blend of 13 bioactive peptides, specially selected for scalp regeneration",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates epidermal regeneration and follicle stem cell activation" },
      { name: "Oligopeptide-2", function: "Boosts skin elasticity and supports collagen structure" },
      { name: "Decapeptide-4", function: "Encourages dermal renewal and follicular microenvironment optimization" },
      { name: "Acetyl Decapeptide-3 (Rejuline)", function: "Enhances keratinocyte proliferation and hair cycle rejuvenation" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Promotes angiogenesis, collagen synthesis, and anti-inflammatory action" },
      { name: "Biotinoyl Tripeptide-1", function: "Strengthens the dermal-epidermal junction, improves follicle anchoring" },
      { name: "Acetyl Tetrapeptide-3", function: "Supports ECM restructuring and reduces perifollicular fibrosis" },
      { name: "Myristoyl Pentapeptide-17", function: "Enhances hair shaft thickness and follicle metabolism" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Reduces scalp inflammation and supports healing" },
      { name: "SH-Polypeptide-9 (VEGF)", function: "Improves scalp vascularization and nutrient delivery to follicles" },
      { name: "SH-Polypeptide-1 (FGF)", function: "Regenerates dermal fibroblasts and maintains healthy dermis" },
      { name: "SH-Oligopeptide-2 (IGF-1)", function: "Prevents follicle shrinkage and enhances longevity of the anagen (growth) phase" },
      { name: "Decapeptide-18", function: "Stimulates dermal papilla cells and promotes new hair growth" },
    ],
    keyBenefits: [
      "Stimulates Hair Follicle Regeneration — Activates dormant follicles and supports healthy new growth",
      "Accelerates Scalp Healing & Microcirculation — Improves nutrient delivery and oxygenation at the root level",
      "Reduces Inflammation & DHT-Induced Damage — Helps reverse miniaturization of hair follicles",
      "Strengthens Hair Anchoring Proteins — Enhances follicle grip and reduces shedding",
      "Improves Scalp Environment — Balances pH, boosts ECM proteins, and restores scalp homeostasis",
    ],
    idealFor: [
      "Early to moderate hair thinning",
      "Post-hair transplant maintenance",
      "Hormonal or stress-related hair loss",
      "Individuals seeking cutting-edge regenerative therapy",
      "Suitable for both men and women",
    ],
    howToUse: [
      "Mix the lyophilized exosome vial with the peptide-infused diluent immediately before use.",
      "Apply using derma roller, microneedling pen, or gently massage into clean scalp (as advised by a professional).",
      "Recommended protocol: 1 session per month for 4–6 months. Results improve with consistency.",
    ],
    importantNote:
      "This is a cosmeceutical-grade product and should be used under guidance of a trained skincare or aesthetic professional. Not intended for intravenous use. For topical or mesotherapy-style application only.",
    caseStudies: [
      {
        name: "Mr. Tae-Hwan",
        age: 27,
        gender: "Male",
        concern: "Complete Baldness from the Front Hairline",
        treatment: "ExoGenesis™ Advanced Hairline Regeneration",
        sessions: "6 Sessions (Every 8 Weeks)",
        results: "His hairline was 100% restored, giving him a balanced, youthful look.",
        feedback: "I genuinely thought nothing could fix my hairline, but this treatment proved me wrong. It looks so natural that even my barber was shocked.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_8.49.10_PM.jpg?v=1749500051",
      },
      {
        name: "Mr. Joon-Ho",
        age: 37,
        gender: "Male",
        concern: "Severe Hair Loss in Mid-Scalp and One Side Leading to Visible Bald Patches",
        treatment: "ExoGenesis™ Targeted Scalp Regeneration",
        sessions: "6 Sessions (Every 60 Days)",
        results: "Over 90% of the bald patches were naturally covered, and hair density across the affected side and crown was visibly restored.",
        feedback: "It felt hopeless to see the baldness spread so fast. But this treatment turned it around completely.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-09_at_8.51.14_AM.jpg?v=1751820510",
      },
      {
        name: "Mr. Dae-Hyun",
        age: 62,
        gender: "Male",
        concern: "Long-standing, full-scalp baldness (complete alopecia)",
        treatment: "ExoGenesis™ Advanced Scalp Regeneration",
        sessions: "7 Sessions (1 per two month)",
        results: "Previously shiny, bare areas developed visible follicles, and dense coverage gradually replaced full baldness.",
        feedback: "At my age, I had accepted permanent baldness. Seeing hair grow back—thick and real—felt like turning back the clock.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.30_PM.jpg?v=1749409973",
      },
      {
        name: "Mr. Min-Jun",
        age: 52,
        gender: "Male",
        concern: "Advanced Hair Loss and Bald Patches on Scalp",
        treatment: "ExoGenesis™ Scalp Regenerative Therapy",
        sessions: "6 Sessions (1 per two month)",
        results: "Significant coverage of the crown and frontal zones. Overall density improved greatly.",
        feedback: "I had nearly accepted permanent baldness, but this treatment gave me back not just hair—but confidence.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.29_PM_1.jpg?v=1749409977",
      },
      {
        name: "Mr. Hyun-Seok & Ms. Ji-Hye",
        age: 37,
        gender: "Male",
        concern: "Hair thinning and bald patches in the vertex region (mid-scalp area)",
        treatment: "ExoGenesis™ Scalp Regeneration Therapy",
        sessions: "3 Sessions (1 per two monthly)",
        results: "Both individuals experienced strong regrowth across the vertex region. Over 90% coverage was achieved within 3 sessions.",
        feedback: "We started this journey together not knowing what to expect—but seeing each other's hair come back session by session was something truly special.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.37_AM.jpg?v=1754136923",
      },
      {
        name: "Mr. Joon-Tae",
        age: 44,
        gender: "Male",
        concern: "Advanced hair loss; only sparse strands remaining at the vertex region",
        treatment: "ExoGenesis™ Scalp Regeneration Therapy",
        sessions: "6 Sessions (Every 60 days)",
        results: "Noticeable hair regrowth across previously bald regions. Over 85–90% scalp coverage restored.",
        feedback: "After years of trying different things, this is the first time I saw real hair coming back—visible change, not just hope.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.38_AM_1.jpg?v=1754137034",
      },
    ],
    images: {
      main: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/file_00000000b7347208bd5f2238cd8ce96d.png?v=1765468014",
      kit: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/Untitled_design_1_1920X.png?v=1765472335",
    },
  },

  // ─── PRODUCT 3: Vital Kit ──────────────────────────────────
  {
    id: "exogenesis-vital-kit",
    title: "ExoGenesis hUC-MSCs Exosomes Vital Kit",
    subtitle: "ExoGenesis Vital Kit",
    tagline: "Advanced Anti-Aging & Skin Rejuvenation Therapy",
    description:
      "Experience the science of cellular youth with the ExoGenesis hUC-MSCs Exosomes Vital Kit — a powerful skin revitalization system designed to reverse visible signs of aging, improve skin quality, and restore a radiant, youthful glow. Formulated with pure hUC-MSCs-derived exosomes and a potent blend of 9 skin-specific bioactive peptides, this treatment targets the root causes of skin aging, such as collagen loss, oxidative stress, and cellular degeneration.",
    kitContent: [
      "1 Vial of Lyophilized Exosomes — 2 Billion exosome particles per ml, in a 5ml vial = 10 Billion exosomes per vial",
      "1 Vial of Peptide-Infused Diluent — Contains 9 dermatology-grade peptides for skin lifting, smoothing, and repair",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates epidermal regeneration and skin healing" },
      { name: "Acetyl Hexapeptide-8 (Argireline)", function: "Reduces dynamic wrinkles by relaxing facial muscles" },
      { name: "Palmitoyl Pentapeptide-4 (Matrixyl)", function: "Boosts collagen synthesis and reduces deep wrinkles" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Antioxidant, promotes wound healing and increases skin firmness" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Calms inflammation and boosts dermal repair" },
      { name: "Decapeptide-4", function: "Enhances cellular turnover and skin smoothness" },
      { name: "Hexapeptide-9", function: "Improves skin elasticity and tightness" },
      { name: "Oligopeptide-2", function: "Boosts fibroblast growth and tissue repair" },
      { name: "SH-Oligopeptide-2 (IGF-1)", function: "Promotes skin density, thickness, and youthful resilience" },
    ],
    keyBenefits: [
      "Reduces fine lines & wrinkles",
      "Improves skin tone, elasticity & firmness",
      "Boosts collagen & elastin regeneration",
      "Revitalizes dull, rough, and tired-looking skin",
      "Provides deep hydration and nourishment",
      "Helps brighten the skin for a whitening effect",
      "Restores smoothness and youthful glow",
      "Suitable for all skin types and tones",
    ],
    idealFor: [
      "Fine lines, wrinkles, crow's feet",
      "Dull, uneven, rough or textured skin",
      "Post-acne pigmentation or age spots",
      "Early signs of aging in 30s–50s",
      "Dehydrated or tired-looking skin",
    ],
    howToUse: [
      "Mix the two components before application to activate the formula.",
      "Recommended: 2–4 sessions monthly.",
      "Use via microneedling, skin booster injection, or post-laser recovery.",
      "Suitable for face, neck, décolleté, and hands.",
    ],
    importantNote:
      "For topical or mesotherapy use only. Not for IV or injection into bloodstream. Product should be used under medical or clinical supervision. Store in a cool, dry environment. Use immediately after reconstitution.",
    caseStudies: [
      {
        name: "Ms. Mi-Kyung",
        age: 30,
        gender: "Female",
        concern: "Fine Lines and Wrinkles Around Eyes and Neck",
        treatment: "ExoGenesis Vital™ Exosome Rejuvenation Kit",
        sessions: "2 Sessions (One Every 8 Weeks)",
        results: "Wrinkles were fully resolved, and her skin appeared firmer, smoother, and noticeably more youthful.",
        feedback: "I didn't expect to see such a natural transformation. The wrinkles are gone, and my skin feels alive again—like I've gone back in time.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/IMG-20250617-WA0017.jpg?v=1750200994",
      },
      {
        name: "Ms. Hye-Jin",
        age: 30,
        gender: "Female",
        concern: "Persistent Dryness and Dull Skin Tone",
        treatment: "ExoGenesis Vital™ Exosome Hydration & Renewal Protocol",
        sessions: "2 Sessions (One Every 8 Weeks)",
        results: "Texture became visibly smoother, elasticity improved, and overall complexion turned radiant and fresh.",
        feedback: "My skin used to feel tight and tired—now it's soft, glowing, and full of life. It's like I've had a fresh start, naturally.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/IMG-20250617-WA0021.jpg?v=1750280526",
      },
      {
        name: "Ms. Da-Eun",
        age: 28,
        gender: "Female",
        concern: "Cheek Hyperpigmentation and Uneven Skin Tone",
        treatment: "ExoGenesis Vital™ Exosome Pigment Correction Protocol",
        sessions: "1 Full Course (2–3 Sessions)",
        results: "Pigmentation visibly faded, skin tone became more even and radiant, and texture appeared smoother and healthier.",
        feedback: "I had tried several treatments before, but nothing evened out my skin like this. I finally feel confident without heavy makeup.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/IMG-20250617-WA0028.jpg?v=1750280860",
      },
      {
        name: "Ms. Mi-Kyung (Pigmentation)",
        age: 34,
        gender: "Female",
        concern: "Freckles, Sunspots, and Uneven Skin Tone",
        treatment: "ExoGenesis Vital™ Brightening & Repair Protocol",
        sessions: "1 Full Course (3–3.5 Sessions)",
        results: "Pigmentation significantly reduced, texture refined, and overall complexion became brighter and more translucent.",
        feedback: "I was used to covering my freckles with concealer every day. Now I finally feel confident in my natural skin.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/IMG-20250617-WA0027.jpg?v=1750280860",
      },
      {
        name: "Ms. Soo-Min",
        age: 48,
        gender: "Female",
        concern: "Volume loss around temples and under-eye sagging",
        treatment: "ExoGenesis Vital™ Exosome Facial Restoration",
        sessions: "4 Sessions (One per two months)",
        results: "Volume in her temples was restored, under-eye area visibly lifted, and overall facial symmetry improved dramatically.",
        feedback: "The dull, tired look I had is completely gone. I now feel refreshed and confident, even without makeup.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/IMG-20250617-WA0025.jpg?v=1750280861",
      },
      {
        name: "Ms. Na-Ra",
        age: 23,
        gender: "Female",
        concern: "Contact Dermatitis + Melasma Triggered by Unsupervised Topical Steroid Use",
        treatment: "ExoGenesis Vital™ Dermal Repair & Brightening Therapy",
        sessions: "3 Sessions (One Every Two Month)",
        results: "Inflammation and redness completely subsides. Melasma patches lightened significantly. Skin texture normalized.",
        feedback: "I didn't realize how much damage I was causing trying to fix my skin at home. This treatment didn't just heal the problem—it gave me back healthy, glowing skin.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/1_d7e01de9-bb68-4677-bec9-770dd8ac3c7c.png?v=1754137441",
      },
      {
        name: "Ms. Soo-Min (Melasma)",
        age: 27,
        gender: "Female",
        concern: "Melasma + Skin Barrier Compromise due to Prolonged Use of Over-the-Counter Topicals",
        treatment: "ExoGenesis Vital™ – Dermal Repair & Pigmentation Therapy",
        sessions: "3 sessions, spaced 60 days",
        results: "Epidermal barrier was restored, pigmentation visibly reduced, and skin regained a hydrated, firm, and youthful glow.",
        feedback: "My skin had become thin, patchy, and reactive due to years of self-treatment. ExoGenesis Vital not only repaired the damage—it gave me skin I never thought I could have again.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/2_e6475032-cdd4-43f8-8e6f-e6d6548f31d0.png?v=1754137731",
      },
      {
        name: "Ms. Eun-Ji",
        age: 28,
        gender: "Female",
        concern: "Melasma and Post-Acne Pigmentation (Dark, Patchy Scars)",
        treatment: "ExoGenesis Vital™ Skin Clarity & Brightening Protocol",
        sessions: "3 Sessions (One Every Two Months)",
        results: "Melasma visibly faded and pigmentation cleared 100%. Skin tone became even and brightened significantly.",
        feedback: "I was tired of hiding my skin under layers of makeup. After just a few sessions, I finally felt confident going bare-faced.",
        beforeAfterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/3_95648a37-9bfe-49b0-b75a-d6c8021c45d7.png?v=1754137784",
      },
    ],
    images: {
      main: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/everceutical_Logo_HQ.pdf_600_x_400_px.png?v=1765470130",
      kit: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_11_2025_09_28_25_PM_1920X.png?v=1765470968",
    },
  },
]

// ─── ABOUT US ────────────────────────────────────────────────
export const aboutUs = {
  hero: {
    title: "About Everceutical",
    subtitle: "Backed by Vesco Science Co., Ltd.",
    description:
      "At EverCeutical, we're pioneering a smarter, science-driven future in aesthetics — with the power of exosomes at the core of our innovation. Our mission is simple: to deliver visible, lasting skin health results through regenerative biotechnology.",
    tagline: "Science-Driven Aesthetics",
  },
  mission: {
    title: "Our Mission & Vision",
    mission: "To make regenerative exosome therapy accessible to clinics and patients worldwide — delivering visible, lasting skin and hair health through scientifically validated, non-invasive solutions.",
    vision: "To become the global leader in exosome-based aesthetic biotechnology, setting new standards for safety, efficacy, and innovation in regenerative medicine.",
  },
  about: {
    title: "About Everceutical",
    description:
      "We specialize in advanced aesthetic solutions that promote skin rejuvenation, collagen stimulation, and accelerated healing — all without invasive procedures. Our formulations are clinically backed, dermatologist-tested, and designed for professionals who demand performance, safety, and trust.",
    highlights: [
      { value: "10+", label: "Countries Served" },
      { value: "50+", label: "Clinical Partners" },
      { value: "99.9%", label: "Purity Standard" },
      { value: "10B+", label: "Particles Per Vial" },
    ],
  },
  vesco: {
    title: "Manufacturing Powered by Vesco Science",
    subtitle: "South Korea",
    description:
      "To achieve uncompromised quality and innovation, EverCeutical partners exclusively with Vesco Science Co., Ltd., a global leader in lyophilized biotechnology and frozen-body-driven medicine. Vesco specializes in:",
    capabilities: [
      { title: "Lyophilized Exosome Production", desc: "Advanced freeze-drying technology preserving exosome integrity for long-term stability and global distribution." },
      { title: "PDRN & Regenerative Injectables", desc: "Cutting-edge regenerative formulations for skin repair, collagen stimulation, and tissue regeneration." },
      { title: "OEM/ODM Development", desc: "Custom formulation development and manufacturing for aesthetic brands and clinical partners worldwide." },
      { title: "Cold Chain Export Logistics", desc: "Temperature-controlled shipping ensuring product potency from Korean labs to clinics across 10+ countries." },
    ],
  },
  facility: {
    title: "World-Class Production Facility",
    description:
      "All EverCeutical products are manufactured in Vesco's 100,000-level dust-free cleanroom facility — ensuring pharmaceutical-grade purity and contamination control.",
    address: "3rd Floor, Newtech Plaza, 214-9 Seongbong-ro, Seongnam-si, Georgi-do, South Korea",
    standards: ["GMP Certified", "ISO 13485", "100K Class Cleanroom", "Pharmaceutical Grade"],
  },
  rd: {
    title: "Advanced R&D & Expert Team",
    description:
      "Behind every product is a dedicated Research & Development department, staffed with senior biotechnologists, dermatology experts, and pharmaceutical engineers — all working together to stay ahead in regenerative science.",
    team: [
      { role: "Senior Biotechnologists", desc: "Leading exosome isolation, purification, and formulation development." },
      { role: "Dermatology Experts", desc: "Validating clinical efficacy and ensuring skin-safe formulations." },
      { role: "Pharmaceutical Engineers", desc: "Optimizing lyophilization processes and manufacturing scalability." },
    ],
  },
  exosomes: {
    title: "Understanding Exosomes",
    description:
      "What makes our formulations truly cutting-edge? Exosomes — microscopic messengers (10–150nm) that stimulate regeneration at the cellular level. Our exosomes are derived through a patented extraction and purification process, ensuring potency and precision.",
    videoId: "jBywLJuNLvc",
    videoTitle: "How EverCeutical Exosomes Are Made",
  },
  quality: {
    title: "Quality Assurance & Safety Protocols",
    description:
      "Every batch goes through multi-stage lab testing, safety evaluations, and efficacy trials. Our protocols follow strict Korean pharmaceutical and international cosmetic GMP standards.",
    protocols: ["Multi-Stage Lab Testing", "Safety Evaluations", "Efficacy Trials", "Korean Pharma Standards", "International GMP"],
  },
  cta: {
    title: "Join the Movement",
    description:
      "At EverCeutical, we're not just selling products — we're building a future of regenerative, non-invasive aesthetics that respects both science and skin. Trusted by aesthetic clinics, dermatologists, and wellness centers globally, our solutions are tailored for today's clinical excellence.",
  },
  images: {
    facility: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/1_68cf8aca-63fb-4f6c-9a55-dd94beb1df87.png?v=1765977654",
    rd: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/2_a6138888-208d-401c-b556-59fa0aa3f261.png?v=1765977739",
    rd2: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-14_at_9.57.28_AM.jpg?v=1749920626",
    production: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/3_7db5d018-5e60-4213-8e1b-73b212dbaf64.png?v=1765977895",
    production2: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-14_at_9.57.28_AM_1.jpg?v=1749920689",
    exosome1: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-14_at_9.57.29_AM.jpg?v=1749920788",
    exosome2: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-14_at_9.57.32_AM.jpg?v=1749920788",
    quality: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/4_03ff2eed-65d8-4c98-9ddd-a95279fe7cbd.png?v=1765978475",
    quality2: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-14_at_9.57.33_AM.jpg?v=1749920978",
  },
}

// ─── FAQ ─────────────────────────────────────────────────────
export const scrapedFaq = [
  {
    question: "What is an exosome treatment?",
    answer:
      "Exosomes are tiny extracellular vesicles loaded with growth factors, peptides, and signaling molecules that help repair and regenerate cells.",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_11_2025_09_28_25_PM_1920X.png?v=1765470968",
  },
  {
    question: "How Are Billions Counted in Exosomes?",
    answer:
      'Exosome "billions" refer to the number of exosome particles per milliliter, not the liquid volume — higher billions mean a higher concentration of biologically active exosomes within the same 5 mL vial.',
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_11_2025_09_28_25_PM_2f060e52-d1e7-4fa9-9cfa-b6d94ed55aaa_1920X.png?v=1765472052",
  },
  {
    question: "Exosome Therapy vs PRP for Hair Loss: Which Is More Effective?",
    answer:
      "Exosome therapy delivers more consistent and potent regenerative signals than PRP, as it provides standardized bioactive molecules without donor variability, resulting in superior outcomes for hair restoration.",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_11_2025_09_28_25_PM_b5e75671-9dbf-4e15-9b3b-5d3c788609e7_1920X.png?v=1765472133",
  },
]

// ─── BLOGS ───────────────────────────────────────────────────
export const scrapedBlogs = [
  {
    title: "Pneumofibroblast-Derived Exosomes",
    excerpt: "Advanced Paracrine Vesicles for Tissue Remodeling, Fibrosis Modulation, and Regenerative...",
    date: "Dec 27, 2025",
    slug: "pneumofibroblast-derived-exosomes",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_28_2025_05_52_52_AM.png?v=1766859246",
  },
  {
    title: "Human Umbilical Cord–Derived Mesenchymal Stem Cell (HUC-MSC) Exosomes",
    excerpt: "Biological Origin, Scientific Classification, Processing, and Clinical Relevance...",
    date: "Dec 26, 2025",
    slug: "human-umbilical-cord-msc-exosomes",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_26_2025_07_53_14_AM_c2a2a8ea-edcd-486d-90d1-9c5c89fc8d9e.png?v=1766859206",
  },
  {
    title: "How Are Billions Counted in Exosomes?",
    excerpt: "A Scientific Explanation of Exosome Concentration, Volume, and Lyophilized Formulation...",
    date: "Dec 23, 2025",
    slug: "how-are-exosome-billions-counted",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_23_2025_07_37_48_PM.png?v=1766859106",
  },
  {
    title: "Surprising Benefits of Exosome Therapy",
    excerpt: "Discover the real, visible results of Exosome Therapy for hair regrowth and skin rejuvenation.",
    date: "Jun 09, 2025",
    slug: "surprising-benefits-of-exosome-therapy",
    image: "",
  },
  {
    title: "Exosome Therapy vs. PRP: Which Offers Superior Outcomes for Hair Loss?",
    excerpt: "Explore a detailed comparison between PRP and Exosome Therapy for hair loss.",
    date: "Jun 09, 2025",
    slug: "exosome-therapy-vs-prp",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.28_PM_91fb6af7-c2bf-485d-a091-c7f84cdec1a1.jpg?v=1769177781",
  },
  {
    title: "What Are HuC-MSCs? And Why Are They Revolutionizing Regenerative Therapy?",
    excerpt: "Learn what huC-MSCs are and why they're revolutionizing regenerative skin and hair treatments.",
    date: "Jun 08, 2025",
    slug: "what-are-huc-mscs",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_3.30.21_PM_1_5abceb4f-9590-407b-9600-826833190da1.jpg?v=1766858807",
  },
]

// ─── EXOSOME CLASSES ─────────────────────────────────────────
export const exosomeClassesData = [
  {
    name: "hUC-MSC Exosomes",
    tagline: "Umbilical Cord-Derived",
    description: "Human Umbilical Cord Mesenchymal Stem Cell derived exosomes for advanced regenerative therapy.",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/6_5efe614c-1804-4aee-b8e1-4feed7c336ea_large.png?v=1766527464",
    color: "#5b9bd5",
  },
  {
    name: "Fibroblast Exosomes",
    tagline: "Skin Cell-Derived",
    description: "Derived from fibroblast cells for skin regeneration and repair.",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/7_97db5e95-27a4-47c2-b8ca-2776de0ae494_large.png?v=1766527464",
    color: "#7ab8a0",
  },
  {
    name: "Adipose Exosomes",
    tagline: "Fat Tissue-Derived",
    description: "Derived from adipose tissue for regenerative medicine applications.",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/8_237fb426-0c20-476f-8528-da36c8766a59_large.png?v=1766527464",
    color: "#a088c4",
  },
  {
    name: "LECO Exosomes",
    tagline: "Lab-Engineered",
    description: "Laboratory-engineered exosomes for specialized therapeutic applications.",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/9_9f73ad75-2d2a-4c43-9984-5ca9094ca8cd_large.png?v=1766527464",
    color: "#d4915e",
  },
  {
    name: "Plant Exosomes",
    tagline: "Botanical-Derived",
    description: "Plant-derived exosomes for natural regenerative treatments.",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/10_b9182ef7-7793-48e7-ac0c-cb5fe5cbe64d_large.png?v=1766527464",
    color: "#6aab8e",
  },
]

// ─── BENEFITS ────────────────────────────────────────────────
export const scrapedBenefits = [
  {
    title: "Cell Renewal",
    description: "Stimulates natural cell regeneration and repair",
    icon: "🧬",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_22_2025_11_42_30_PM_120x120.png?v=1766429042",
  },
  {
    title: "Hair Growth",
    description: "Activates dormant follicles and improves density",
    icon: "💇",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/helpful-tips-to-maintain-your-scalp-healthy-all-year_120x120.jpg?v=1766429446",
  },
  {
    title: "Skin Repair",
    description: "Repairs damaged skin at cellular level",
    icon: "✨",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/pngtree-korean-beauty-model-showcases-skincare-confidence-in-hospital-portrait-session-image_17481622_120x120.jpg?v=1766429500",
  },
  {
    title: "Anti-Aging",
    description: "Reduces fine lines and wrinkles",
    icon: "⏳",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/skincare-model-hero_120x120.jpg?v=1766429662",
  },
  {
    title: "Skin Brightening",
    description: "Improves tone, clarity, and natural radiance",
    icon: "🌟",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/portrait-young-asian-beautiful-woman-260nw-2449493017_120x120.jpg?v=1766429849",
  },
  {
    title: "Collagen Boost",
    description: "Enhances collagen and elastin production",
    icon: "🔬",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/gorgeous-young-woman-holding-cotton-pad-smiling-taking-care-her-face-fresh-healthy-skincare-pink-background_264197-19151_cd87b0ff-0c36-4146-922c-7c69ba2b5024_120x120.jpg?v=1766430366",
  },
  {
    title: "Tissue Repair",
    description: "Accelerates recovery of damaged tissues",
    icon: "🩹",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/closeup-portrait-beautiful-healthy-girl-with-nude-makeup-cleaning-perfect-soft-skin-with-oil-absorbing-tissue-sheets_264197-10389_120x120.jpg?v=1766430292",
  },
  {
    title: "Scalp Health",
    description: "Improves scalp environment for growth",
    icon: "🌿",
    image: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/dry-and-oily-scalp_1024x1024_aafc5a9c-d99e-4094-85fb-1b5873e5671c_120x120.jpg?v=1766430442",
  },
]

// ─── CONTACT INFO ────────────────────────────────────────────
export const contactInfo = {
  email: "everceutical@gmail.com",
  location: "Seoul, South Korea",
  address: "3rd Floor, Newtech Plaza, 214-9 Seongbong-ro, Seongnam-si, Georgi-do, South Korea",
  businessHours: "Mon – Fri, 9:00 AM – 6:00 PM KST",
  phone: "+82-10-XXXX-XXXX",
  formFields: {
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    messageLabel: "Your Message",
    submitText: "Send Message",
  },
  faq: [
    {
      question: "What are exosomes and how do they work?",
      answer: "Exosomes are tiny extracellular vesicles (10–150nm) loaded with growth factors, peptides, and signaling molecules. They act as cellular messengers, stimulating regeneration at the cellular level for skin rejuvenation and hair restoration.",
    },
    {
      question: "Are EverCeutical products clinically tested?",
      answer: "Yes. Every product undergoes multi-phase clinical testing including nanoparticle tracking analysis, sterility validation, and efficacy trials. Our formulations follow strict Korean pharmaceutical and international cosmetic GMP standards.",
    },
    {
      question: "How do I place a wholesale or clinic order?",
      answer: "Contact us directly via email or the form on this page. We work with aesthetic clinics, dermatologists, and wellness centers worldwide. Our team will provide product catalogs, pricing, and distribution details.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes. We ship globally through cold chain logistics that maintain product integrity from our Korean facility to clinics in 10+ countries. Contact us for shipping details to your region.",
    },
    {
      question: "What is the difference between exosome therapy and PRP?",
      answer: "Exosome therapy delivers standardized, potent regenerative signals without donor variability, unlike PRP which depends on the patient's own blood quality. Exosomes provide consistent, clinically validated results for hair and skin treatments.",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/EverCeutical",
    instagram: "https://www.instagram.com/everceutical/",
    tiktok: "https://www.tiktok.com/@everceutical",
    youtube: "https://www.youtube.com/@EverCeutical",
  },
}

// ─── RESEARCH & TECHNOLOGY IMAGES ────────────────────────────
export const researchImages = [
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/1.png?v=1749525102",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/2.png?v=1749525248",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/3.png?v=1749525361",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/4.png?v=1749525468",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/5.png?v=1749525546",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/6.png?v=1749525676",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/7.png?v=1749525692",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/8.png?v=1749525592",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/9.png?v=1749525729",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/10.png?v=1749525707",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/11.png?v=1749525678",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/12.png?v=1749525652",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/13.png?v=1749525740",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/14.png?v=1749525712",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/15.png?v=1749525636",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/16.png?v=1749525644",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/17.png?v=1749525650",
]

// ─── INSPECTION REPORT IMAGES ────────────────────────────────
export const inspectionReportImages = [
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/1_52c68b92-68e1-44f4-824b-a86f792aeda9.png?v=1750762518",
  "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/2_4d6b00fb-0f18-4ece-a48d-9bf0a6490c57.png?v=1750279317",
]

// ─── LOGOS ───────────────────────────────────────────────────
export const logos = {
  main: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/Copy_of_Copy_of_Copy_of_Exogenesis_Logo_HQ.pdf_20250425_003545_0000.pdf_1_200x.png?v=1749164937",
  nav: "https://everceutical.com/cdn/shop/t/3/assets/logo.png?v=156372048901723446691765294478",
}

// ─── BLOG POSTS ──────────────────────────────────────────────
export interface ContentBlock {
  type: "heading" | "paragraph" | "list" | "image" | "table" | "quote" | "divider"
  level?: number
  text?: string
  items?: string[]
  src?: string
  alt?: string
  headers?: string[]
  rows?: string[][]
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  date: string
  dateISO: string
  image: string | null
  category: string
  readTime: string
  author?: string
  content: ContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Pneumofibroblast-Derived Exosomes",
    slug: "pneumofibroblast-derived-exosomes",
    excerpt: "An expert-level overview of pneumofibroblast-derived exosomes, explaining their origin, isolation, storage methods, and why they are ranked as a top second-class exosome for regenerative and aesthetic medicine.",
    date: "Dec 27, 2025",
    dateISO: "2025-12-27",
    image: "https://everceutical.com/cdn/shop/articles/ChatGPT_Image_Dec_28_2025_05_52_52_AM.png?v=1766859246",
    category: "Research",
    readTime: "8 min read",
    author: "EverCeutical Research Team",
    content: [
      { type: "heading", level: 2, text: "Advanced Paracrine Vesicles for Tissue Remodeling, Fibrosis Modulation, and Regenerative Medicine" },
      { type: "divider" },
      { type: "heading", level: 2, text: "Introduction" },
      { type: "paragraph", text: "Exosome-based therapeutics have rapidly emerged as a transformative modality in regenerative and aesthetic medicine. Among the multiple biologically derived exosome classes currently under investigation, Pneumofibroblast-derived exosomes (PF-Exosomes) are consistently ranked as a top-tier class, second only to HUC-MSC exosomes in clinical demand and biological efficacy." },
      { type: "paragraph", text: "These exosomes are particularly valued for their exceptional extracellular matrix (ECM) signaling, fibrosis regulation, and tissue remodeling capacity, making them highly relevant for skin rejuvenation, wound healing, pulmonary tissue repair, and advanced aesthetic protocols." },
      { type: "paragraph", text: "This article provides a comprehensive scientific overview of pneumofibroblast exosomes, including their cellular origin, molecular composition, extraction methodology, storage formats, and clinical differentiation from other exosome classes." },
      { type: "heading", level: 2, text: "What Are Pneumofibroblasts?" },
      { type: "paragraph", text: "Pneumofibroblasts are a specialized subtype of fibroblasts primarily associated with pulmonary connective tissue, although their biological characteristics are also mirrored in dermal and interstitial fibroblast populations." },
      { type: "heading", level: 3, text: "Key Biological Functions of Pneumofibroblasts" },
      { type: "list", items: ["Regulation of extracellular matrix synthesis", "Controlled deposition of collagen I, III, and elastin", "Modulation of fibrotic vs regenerative signaling", "Crosstalk with epithelial and endothelial cells", "Secretion of paracrine vesicles, including exosomes"] },
      { type: "paragraph", text: "Unlike generic fibroblasts, pneumofibroblasts exhibit a highly regulated secretome, optimized for tissue integrity, elasticity, and controlled repair, which directly translates into the superior bioactivity of their exosomes." },
      { type: "heading", level: 2, text: "Pneumofibroblast-Derived Exosomes: Definition" },
      { type: "paragraph", text: "Pneumofibroblast-derived exosomes are nano-sized extracellular vesicles (typically 30–150 nm) released through the endosomal multivesicular body (MVB) pathway of pneumofibroblast cells." },
      { type: "paragraph", text: "These vesicles act as biological messengers, transporting functional biomolecules that reprogram recipient cells without introducing living cells or genetic instability." },
      { type: "heading", level: 2, text: "Molecular Composition of PF-Exosomes" },
      { type: "heading", level: 3, text: "Core Bioactive Cargo" },
      { type: "paragraph", text: "Growth Factors: TGF-β modulators (balanced, non-fibrotic), FGF-2 (Fibroblast Growth Factor), VEGF signaling mediators." },
      { type: "paragraph", text: "MicroRNAs (miRNAs): miR-21 (regulated ECM remodeling), miR-29 family (anti-fibrotic signaling), miR-146a (anti-inflammatory modulation)." },
      { type: "paragraph", text: "Structural and Signaling Proteins: Collagen-regulating enzymes, Integrins and adhesion molecules, ECM remodeling peptides." },
      { type: "paragraph", text: "Lipid Membrane Markers: CD9, CD63, CD81 (exosomal validation markers)." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_28_2025_05_26_18_AM.png?v=1766853059", alt: "PF-Exosome molecular composition" },
      { type: "heading", level: 2, text: "How Pneumofibroblast Exosomes Are Produced" },
      { type: "heading", level: 3, text: "Step 1: Controlled Fibroblast Cell Culture" },
      { type: "paragraph", text: "Pneumofibroblasts are expanded under GMP-grade laboratory conditions, using xeno-free media, serum-free or exosome-depleted supplements, and strict oxygen and pH regulation. This ensures phenotypic stability and consistent exosome quality." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_28_2025_05_26_02_AM.png?v=1766853068", alt: "Cell culture process" },
      { type: "heading", level: 3, text: "Step 2: Conditioned Media Collection" },
      { type: "paragraph", text: "Once cells reach optimal confluency, the conditioned culture media rich in secreted exosomes is harvested." },
      { type: "heading", level: 3, text: "Step 3: Isolation & Purification" },
      { type: "paragraph", text: "Advanced isolation techniques are applied: differential ultracentrifugation, Tangential Flow Filtration (TFF), size-exclusion chromatography, and sterile micro-filtration. These methods remove cellular debris, protein aggregates, and microvesicles larger than exosomes." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_28_2025_05_26_54_AM.png?v=1766853066", alt: "Exosome extraction process" },
      { type: "heading", level: 2, text: "Lyophilized vs Frozen Exosome Forms" },
      { type: "paragraph", text: "Lyophilized (Freeze-Dried) Exosomes: Long-term stability (12–24 months), storage at 2–8°C, easy reconstitution with sterile saline, minimal cold-chain dependency." },
      { type: "paragraph", text: "Frozen (Cryopreserved) Exosomes: Stored at –20°C (short-term) or –80°C (long-term), maximum structural preservation, ideal for research and injectable formulations." },
      { type: "table", headers: ["Parameter", "Lyophilized", "Frozen"], rows: [["Physical Form", "Dry powder", "Liquid suspension"], ["Storage Temperature", "2–8°C", "−20°C to −80°C"], ["Shelf Life", "12–24 months", "6–12 months"], ["Stability During Transport", "High", "Requires cold-chain"], ["Clinical Convenience", "High", "Moderate"]] },
      { type: "heading", level: 2, text: "Why PF-Exosomes Rank as Top Second Class" },
      { type: "list", items: ["ECM-Focused Regenerative Precision — highly targeted toward matrix remodeling", "Controlled Fibrotic Signaling — balances collagen production rather than overstimulate it", "Exceptional Skin & Structural Tissue Affinity — higher receptor compatibility with dermal cells", "Predictable Clinical Outcomes — greater reproducibility in medical aesthetics"] },
      { type: "heading", level: 2, text: "Clinical & Aesthetic Applications" },
      { type: "list", items: ["Advanced skin rejuvenation protocols", "Scar and post-acne remodeling", "Anti-aging dermal regeneration", "Post-procedure tissue recovery", "Fibrosis modulation therapies"] },
    ],
  },
  {
    id: 2,
    title: "Human Umbilical Cord-Derived Mesenchymal Stem Cell (HUC-MSC) Exosomes",
    slug: "human-umbilical-cord-msc-exosomes",
    excerpt: "Scientific insights into the origin, processing, and clinical application of HUC-MSC exosomes in regenerative medicine.",
    date: "Dec 26, 2025",
    dateISO: "2025-12-26",
    image: "https://everceutical.com/cdn/shop/articles/ChatGPT_Image_Dec_26_2025_07_53_14_AM_c2a2a8ea-edcd-486d-90d1-9c5c89fc8d9e.png?v=1766859206",
    category: "Science",
    readTime: "10 min read",
    author: "EverCeutical Research Team",
    content: [
      { type: "heading", level: 2, text: "Biological Origin, Scientific Classification, Processing, and Clinical Relevance" },
      { type: "divider" },
      { type: "heading", level: 2, text: "Introduction" },
      { type: "paragraph", text: "Exosome-based therapies represent one of the most advanced frontiers in regenerative and aesthetic medicine. Among the various exosome sources available today, Human Umbilical Cord–derived Mesenchymal Stem Cell (HUC-MSC) exosomes are widely regarded as the gold standard in clinical practice due to their high bioactivity, safety profile, ethical acceptability, and regenerative signaling potency." },
      { type: "heading", level: 2, text: "What Are Exosomes? (Scientific Definition)" },
      { type: "paragraph", text: "Exosomes are extracellular vesicles (EVs) with an average diameter of 30–150 nanometers, secreted naturally by living cells. They play a critical role in intercellular communication by transferring biologically active molecules, including growth factors, cytokines, lipids, proteins, mRNA and microRNA (miRNA)." },
      { type: "paragraph", text: "Unlike stem cells themselves, exosomes are cell-free, meaning they do not replicate, do not differentiate, and do not carry nuclear DNA, making them significantly safer for clinical use." },
      { type: "heading", level: 2, text: "Biological Formation of Exosomes" },
      { type: "list", items: ["Endocytosis — The cell membrane forms early endosomes", "Multivesicular Body (MVB) Formation — Intraluminal vesicles are generated inside endosomes", "Exosome Release — MVBs fuse with the plasma membrane, releasing exosomes into the extracellular space"] },
      { type: "heading", level: 2, text: "Classification of Stem Cell–Derived Exosomes" },
      { type: "paragraph", text: "Exosomes are classified based on the parent cell of origin. Major clinical categories include: MSC-Derived Exosomes (Bone marrow, Adipose, Umbilical cord), Hematopoietic Stem Cell (HSC) Exosomes, Fibroblast-Derived Exosomes, and Immune Cell–Derived Exosomes." },
      { type: "paragraph", text: "Among these, HUC-MSC exosomes are considered the most potent and clinically versatile." },
      { type: "heading", level: 2, text: "What Does HUC-MSC Mean Scientifically?" },
      { type: "paragraph", text: "HUC-MSC = Human Umbilical Cord Mesenchymal Stem Cells. Derived from Wharton's Jelly of the umbilical cord after full-term birth. No embryo is destroyed. No fetal or neonatal harm is involved." },
      { type: "heading", level: 3, text: "Why Umbilical Cord–Derived MSCs Are Superior" },
      { type: "list", items: ["Extremely high proliferative capacity", "Low immunogenicity (immune-privileged)", "Strong paracrine signaling", "Rich in regenerative miRNAs and growth factors", "Free from age-related cellular damage"] },
      { type: "heading", level: 2, text: "Exosome Extraction Process" },
      { type: "list", items: ["Ethically sourced umbilical cord tissue", "Isolation of HUC-MSCs in a GMP-compliant lab", "Cell expansion in controlled bioreactors", "Conditioned media collection (where exosomes are secreted)", "Exosome isolation and purification using ultracentrifugation, TFF, and size-exclusion chromatography"] },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_26_2025_07_53_32_AM.png?v=1766689008", alt: "HUC-MSC extraction process" },
      { type: "heading", level: 2, text: "Clinical Application: Scalp and Skin Use" },
      { type: "paragraph", text: "HUC-MSC exosomes are widely used for scalp applications (androgenetic alopecia, telogen effluvium, post-transplant healing, follicular stem cell activation) and skin applications (skin rejuvenation, post-laser recovery, acne scarring, inflammation modulation)." },
      { type: "paragraph", text: "They are administered via microneedling, mesotherapy, or direct intradermal injection." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/file_00000000b7347208bd5f2238cd8ce96d.png?v=1765468014", alt: "ExoGenesis product" },
      { type: "heading", level: 2, text: "Scientific Classification of ExoGenesis" },
      { type: "paragraph", text: "Category: MSC-derived exosomes. Source: Human Umbilical Cord (Wharton's Jelly). Cell Type: Mesenchymal Stem Cells. Nature: Cell-free extracellular vesicles. Indication: Scalp, skin and follicular regeneration support. Potency: 10, 15 & 25 billion quantified exosomes per vial." },
      { type: "paragraph", text: "This places the product in the highest clinical tier of regenerative exosome therapies currently used in aesthetic and hair restoration medicine." },
    ],
  },
  {
    id: 3,
    title: "How Are Billions Counted in Exosomes?",
    slug: "how-are-exosome-billions-counted",
    excerpt: "A scientific explanation of how exosome concentrations are measured in billions despite identical vial volumes, covering particle density, lyophilized formulations, counting methodologies, and clinical dosing relevance.",
    date: "Dec 23, 2025",
    dateISO: "2025-12-23",
    image: "https://everceutical.com/cdn/shop/articles/ChatGPT_Image_Dec_23_2025_07_37_48_PM.png?v=1766859106",
    category: "Technology",
    readTime: "7 min read",
    author: "EverCeutical Research Team",
    content: [
      { type: "heading", level: 2, text: "A Scientific Explanation of Exosome Concentration, Volume, and Lyophilized Formulation" },
      { type: "divider" },
      { type: "heading", level: 2, text: "Introduction" },
      { type: "quote", text: "If every vial contains the same volume (5 mL), how can one formulation contain 5 billion exosomes while another contains 25 billion?" },
      { type: "paragraph", text: "This question is both valid and critical, particularly for physicians who demand clarity on dose standardization, biological potency, and manufacturing integrity." },
      { type: "heading", level: 2, text: "Understanding Exosomes at a Cellular Level" },
      { type: "paragraph", text: "Exosomes are nano-sized extracellular vesicles (30–150 nm) released by cells, particularly mesenchymal stem cells (MSCs). They function as biological messengers, carrying molecular signals that regulate tissue repair, inflammation, angiogenesis, and cellular regeneration." },
      { type: "paragraph", text: "Core Bioactive Components: Growth factors, Signaling proteins, Peptides, Lipids, mRNA, microRNA (miRNA), Cytokines and regulatory enzymes." },
      { type: "quote", text: "Exosomes do not contain whole stem cells. They carry signals produced by stem cells, not the cells themselves." },
      { type: "heading", level: 2, text: "Why Volume (5 mL) Remains Constant" },
      { type: "paragraph", text: "All ExoGenesis formulations — 5 Billion, 10 Billion, 15 Billion, and 25 Billion — are supplied in a fixed final volume of 5 mL. This is done for standardized clinical handling, accurate dosing protocols, and consistent injection or microneedling workflows." },
      { type: "paragraph", text: "Volume ≠ Quantity. The difference lies in concentration, not volume." },
      { type: "heading", level: 2, text: "Exosome Concentration Explained" },
      { type: "paragraph", text: "Exosome count is expressed as number of exosome particles per milliliter (particles/mL)." },
      { type: "table", headers: ["Product", "Total Exosomes", "Volume", "Concentration"], rows: [["ExoGenesis 5B", "5 × 10⁹", "5 mL", "1 × 10⁹ / mL"], ["ExoGenesis 25B", "25 × 10⁹", "5 mL", "5 × 10⁹ / mL"]] },
      { type: "paragraph", text: "Higher billions = higher particle density. Same volume = different biological payload." },
      { type: "heading", level: 2, text: "Role of Lyophilized Powder vs Diluent" },
      { type: "heading", level: 3, text: "Lyophilized (Freeze-Dried) Powder" },
      { type: "paragraph", text: "This is the biologically active component. Contains intact exosome vesicles, functional peptides, proteins and growth factors, miRNA and mRNA cargo. Lyophilization removes water under controlled conditions, preserves vesicle structure, and maintains biological stability." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_23_2025_06_39_15_PM.png?v=1766497201", alt: "Lyophilized exosome particles" },
      { type: "heading", level: 3, text: "Diluent (Sterile Reconstitution Solution)" },
      { type: "paragraph", text: "This is NOT the active component. It is a sterile, medical-grade aqueous solution used only to rehydrate the lyophilized powder. It does not contain exosomes or peptides." },
      { type: "heading", level: 2, text: "Why Higher Billions Are More Potent" },
      { type: "paragraph", text: "A 25 Billion exosome vial does not mean 'larger exosomes.' It means more vesicles per milliliter, higher signal density, and increased molecular delivery to target tissue." },
      { type: "paragraph", text: "Clinically, this translates into stronger paracrine signaling, enhanced cellular communication, greater regenerative stimulation, and faster and more visible outcomes." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_23_2025_06_55_49_PM.png?v=1766498243", alt: "Low vs high exosome concentration" },
      { type: "heading", level: 2, text: "How Exosomes Are Scientifically Counted" },
      { type: "paragraph", text: "Exosome quantification is not estimated — it is instrumentally measured. Standard technologies include Nanoparticle Tracking Analysis (NTA), Tunable Resistive Pulse Sensing (TRPS), and Flow cytometry." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_23_2025_06_46_04_PM.png?v=1766498145", alt: "NTA graph showing particle concentration" },
      { type: "heading", level: 2, text: "Manufacturing Process Overview" },
      { type: "list", items: ["Stem cell culture under GMP conditions", "Exosome secretion into conditioned media", "Isolation and purification (ultrafiltration / chromatography)", "Particle counting and concentration standardization", "Lyophilization of measured exosome quantity", "Sterile packaging with diluent"] },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/ChatGPT_Image_Dec_23_2025_07_01_11_PM.png?v=1766498497", alt: "Manufacturing workflow" },
      { type: "heading", level: 2, text: "Clinical Interpretation for Doctors" },
      { type: "paragraph", text: "When a physician selects 5 Billion for maintenance/early-stage, 10–15 Billion for moderate regeneration, or 25 Billion for advanced hair loss/skin aging/post-procedure recovery — they are selecting different biological signal intensities, not different volumes." },
    ],
  },
  {
    id: 4,
    title: "Surprising Benefits of Exosome Therapy",
    slug: "surprising-benefits-of-exosome-therapy",
    excerpt: "Discover the real, visible results of Exosome Therapy for hair regrowth and skin rejuvenation. Featuring clinical before-and-after cases and patient testimonials.",
    date: "Jun 09, 2025",
    dateISO: "2025-06-09",
    image: null,
    category: "Clinical",
    readTime: "6 min read",
    author: "EverCeutical Research Team",
    content: [
      { type: "heading", level: 2, text: "See Real Before-and-After Results of Exosome Therapy" },
      { type: "divider" },
      { type: "heading", level: 2, text: "Introduction" },
      { type: "paragraph", text: "In the rapidly evolving field of regenerative aesthetics, exosome therapy is redefining treatment outcomes for hair restoration and skin rejuvenation. Unlike traditional approaches, exosomes harness the body's own communication systems to repair and regenerate at a cellular level — delivering visible, lasting transformations." },
      { type: "heading", level: 2, text: "What Makes Exosome Therapy Clinically Superior?" },
      { type: "paragraph", text: "Exosomes are nano-sized vesicles secreted by stem cells (particularly huC-MSCs) that carry vital signaling molecules — such as growth factors, peptides, and nucleic acids. When topically applied or delivered via microneedling, they activate and instruct local cells to:" },
      { type: "list", items: ["Stimulate collagen and elastin for improved skin elasticity and firmness", "Reactivate dormant hair follicles, promoting stronger and thicker regrowth", "Reduce pigmentation, inflammation, and scar formation", "Accelerate healing post-treatment (microneedling, PRP, laser)"] },
      { type: "paragraph", text: "Exosomes are cell-free, making them safe, non-invasive, and highly bioactive with consistent, predictable results." },
      { type: "heading", level: 2, text: "Before & After: Real Patient Outcomes" },
      { type: "heading", level: 3, text: "1. Hair Regrowth Case Study — 8 Weeks Post-Treatment" },
      { type: "paragraph", text: "Patient Profile: Female, age 34, early-stage androgenetic alopecia. Treatment: 2 sessions of Everceutical Exosomes via microneedling." },
      { type: "paragraph", text: "Before: Receding hairline, visible scalp, low follicular density. After: Enhanced hair thickness at the crown, regrowth along temporal zones, improved scalp coverage." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.36_AM.jpg?v=1754136707", alt: "Hair regrowth case study" },
      { type: "heading", level: 3, text: "2. Anti-Aging Facial Rejuvenation — 6 Weeks Follow-Up" },
      { type: "paragraph", text: "Patient Profile: Female, age 42, concerned with premature aging and skin laxity. Treatment: Everceutical Exosome Facial combined with microneedling." },
      { type: "paragraph", text: "Before: Fine lines, uneven skin tone, photo-damage. After: Tighter jawline, improved texture, brighter complexion, reduced periorbital wrinkles." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/IMG-20250617-WA0027.jpg?v=1750280860", alt: "Facial rejuvenation case study" },
      { type: "heading", level: 3, text: "3. Acne Scar Remodeling — 4 Weeks Post-Treatment" },
      { type: "paragraph", text: "Patient Profile: Female, age 24, history of post-acne scarring. Treatment: 2 sessions of exosome serum with fractional microneedling." },
      { type: "paragraph", text: "Before: Atrophic scars, redness, uneven skin surface. After: Noticeable scar reduction, smoother texture, balanced tone." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/1_d7e01de9-bb68-4677-bec9-770dd8ac3c7c.png?v=1754137441", alt: "Acne scar remodeling" },
      { type: "heading", level: 2, text: "Patient Testimonials" },
      { type: "quote", text: "Everceutical exosomes restored my confidence — I saw hair growing back within weeks without surgery." },
      { type: "quote", text: "My hair looks fuller and healthier after just one session. No oil or supplement ever gave me results like this." },
      { type: "heading", level: 2, text: "Why Everceutical Exosomes Outperform the Competition" },
      { type: "list", items: ["Stem Cell-Derived (huC-MSC) Exosomes with superior bioactivity", "Pharmaceutical-grade purity and consistency", "Clinically validated protocols used by leading dermatologists and trichologists", "Visible improvement in fewer sessions"] },
    ],
  },
  {
    id: 5,
    title: "Exosome Therapy vs. PRP: Which Offers Superior Outcomes for Hair Loss?",
    slug: "exosome-therapy-vs-prp",
    excerpt: "Explore a detailed comparison between PRP and Exosome Therapy for hair loss. Learn why huC-MSC-derived exosomes offer faster, deeper, and more effective hair regeneration results.",
    date: "Jun 09, 2025",
    dateISO: "2025-06-09",
    image: "https://everceutical.com/cdn/shop/articles/WhatsApp_Image_2025-06-05_at_4.40.28_PM_91fb6af7-c2bf-485d-a091-c7f84cdec1a1.jpg?v=1769177781",
    category: "Research",
    readTime: "9 min read",
    author: "EverCeutical Research Team",
    content: [
      { type: "heading", level: 2, text: "Which Offers Superior Outcomes for Hair Loss?" },
      { type: "divider" },
      { type: "heading", level: 2, text: "Introduction" },
      { type: "paragraph", text: "Hair loss continues to be one of the most challenging conditions in aesthetic and regenerative medicine, affecting both men and women across a wide age range. With advancements in cell-based therapies, two non-surgical treatment options have emerged at the forefront: PRP (Platelet-Rich Plasma) and Exosome Therapy." },
      { type: "heading", level: 2, text: "Understanding PRP Therapy" },
      { type: "paragraph", text: "Platelet-Rich Plasma (PRP) is a widely used autologous treatment. Blood is drawn from the patient, centrifuged to isolate the platelet-rich fraction, and injected into the scalp. The concentration of platelets delivers growth factors that support follicular stimulation." },
      { type: "heading", level: 3, text: "PRP Mechanism of Action" },
      { type: "list", items: ["Enhances perifollicular angiogenesis", "Promotes proliferation of dermal papilla cells", "Extends the anagen (growth) phase of the hair cycle", "Improves follicle microenvironment"] },
      { type: "heading", level: 3, text: "PRP Limitations" },
      { type: "list", items: ["Best suited for early-stage androgenetic alopecia", "Requires 3–6 sessions for visible efficacy", "Patient-derived; results vary by biological profile", "Slower onset of visible improvement (3–6 months)"] },
      { type: "heading", level: 2, text: "What is Exosome Therapy?" },
      { type: "paragraph", text: "Exosomes are extracellular vesicles secreted by stem cells — particularly mesenchymal stem cells (MSCs). These nano-sized vesicles are rich in growth factors, microRNAs, cytokines, and proteins that facilitate intercellular communication and tissue regeneration." },
      { type: "heading", level: 3, text: "Exosome Mechanism of Action" },
      { type: "list", items: ["Reactivates quiescent or miniaturized follicles", "Delivers anti-inflammatory and immunomodulatory signals", "Stimulates extracellular matrix remodeling and angiogenesis", "Provides a concentrated, cell-free regenerative payload"] },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.30_PM.jpg?v=1749409973", alt: "Exosome therapy results" },
      { type: "heading", level: 2, text: "PRP vs. Exosomes: Clinical Comparison" },
      { type: "table", headers: ["Feature", "PRP Therapy", "Exosome Therapy"], rows: [["Source", "Autologous (patient's blood)", "Allogeneic (stem cell-derived)"], ["Invasiveness", "Minimally invasive (blood draw)", "Non-invasive"], ["Potency", "Moderate (growth factors only)", "High (growth factors + RNA/proteins)"], ["Response Time", "3–6 months", "4–8 weeks"], ["Ideal for", "Early-stage hair loss", "Moderate to severe hair loss"], ["Sessions Required", "Multiple", "1–2 (depending on protocol)"]] },
      { type: "heading", level: 2, text: "Which is More Effective?" },
      { type: "paragraph", text: "For patients in the early stages of hair thinning, PRP remains a reliable, autologous option with a strong safety profile. However, for cases requiring a more aggressive, accelerated, and deeper regenerative effect, Exosome Therapy emerges as the superior choice." },
      { type: "paragraph", text: "Unlike PRP, exosomes do not just stimulate existing follicles — they work at a cellular and molecular level to rebuild the follicular environment, reduce inflammation, and reactivate stem cell pathways within the scalp." },
      { type: "heading", level: 2, text: "Why Everceutical Exosomes Stand Out" },
      { type: "list", items: ["100% huC-MSC-Derived Exosomes for high regenerative bioactivity", "Pharmaceutical-grade purification and safety standards", "Scientifically validated formulations, backed by in-house and collaborative research", "Consistency and reliability, trusted by global dermatologists and trichology experts"] },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.30_PM_1_776b08e3-3716-4728-a817-95608d0703b6.jpg?v=1749410290", alt: "EverCeutical exosome therapy" },
    ],
  },
  {
    id: 6,
    title: "What Are HuC-MSCs? And Why Are They Revolutionizing Regenerative Therapy?",
    slug: "what-are-huc-mscs",
    excerpt: "Learn what huC-MSCs (Human Umbilical Cord-derived Mesenchymal Stem Cells) are and why they are revolutionizing regenerative skin and hair treatments.",
    date: "Jun 08, 2025",
    dateISO: "2025-06-08",
    image: "https://everceutical.com/cdn/shop/articles/WhatsApp_Image_2025-06-05_at_3.30.21_PM_1_5abceb4f-9590-407b-9600-826833190da1.jpg?v=1766858807",
    category: "Science",
    readTime: "7 min read",
    author: "EverCeutical Research Team",
    content: [
      { type: "heading", level: 2, text: "What Are HuC-MSCs?" },
      { type: "divider" },
      { type: "paragraph", text: "huC-MSCs stands for Human Umbilical Cord-derived Mesenchymal Stem Cells. These are special types of stem cells that are collected from the Wharton's Jelly of healthy, donated umbilical cords after childbirth — with full ethical consent." },
      { type: "paragraph", text: "These cells are incredibly valuable in medical science because they are young and powerful (high regenerative capacity), carry no ethical concerns (unlike embryonic stem cells), and can transform into multiple types of cells like skin, bone, cartilage, and nerve cells." },
      { type: "heading", level: 2, text: "Why Are HuC-MSCs Important?" },
      { type: "paragraph", text: "huC-MSCs are known for secreting biologically active molecules, including exosomes — tiny, nano-sized vesicles filled with growth factors, proteins, and genetic material. These exosomes are like 'healing messages' that travel to damaged cells and instruct them to repair, regenerate, and rejuvenate." },
      { type: "paragraph", text: "In skincare and hair restoration, huC-MSC-derived exosomes have shown remarkable benefits:" },
      { type: "list", items: ["Boosting collagen and elastin production", "Enhancing skin repair and anti-aging effects", "Reactivating dormant hair follicles", "Reducing inflammation and pigmentation", "Improving overall skin texture and hair density"] },
      { type: "paragraph", text: "Because they come from umbilical cord stem cells, the exosomes derived from huC-MSCs are younger, more potent, and more active compared to those derived from adult tissues." },
      { type: "heading", level: 2, text: "Exogenesis Exosomes: Setting a New Standard" },
      { type: "paragraph", text: "With many exosome brands emerging in the market, Exogenesis stands out for one simple reason: unmatched quality and innovation." },
      { type: "list", items: ["100% Derived from huC-MSCs — Ensuring maximum regenerative power", "Ultra-Purified & Clinically Tested — Free from contaminants, safe for all skin types", "Backed by Advanced Research — Developed using state-of-the-art biotechnology", "Higher Yield of Growth Factors — More effective in skin and hair rejuvenation", "Trusted by Global Professionals — Used in premium aesthetic clinics worldwide"] },
    ],
  },
  {
    id: 7,
    title: "What Are Exosomes and How Do They Work in Skin and Hair Regeneration?",
    slug: "what-are-exosomes-and-how-do-they-work",
    excerpt: "Exosome therapy is transforming the world of skincare and hair restoration. We break down what exosomes are, how they work, and how they help regenerate skin and hair.",
    date: "Jun 06, 2025",
    dateISO: "2025-06-06",
    image: "https://everceutical.com/cdn/shop/articles/WhatsApp_Image_2025-06-05_at_3.30.21_PM_4aed5e56-eee2-40cb-9d2b-a8f4df9b10df.jpg?v=1769178541",
    category: "Technology",
    readTime: "8 min read",
    author: "EverCeutical Research Team",
    content: [
      { type: "heading", level: 2, text: "What Are Exosomes? (Layman's Explanation)" },
      { type: "divider" },
      { type: "paragraph", text: "Think of your body as a vast communication network. Inside this network, cells constantly 'talk' to each other by sending tiny messages. These messages? They're called exosomes." },
      { type: "paragraph", text: "Exosomes are microscopic particles (even smaller than cells!) that carry powerful information like proteins, growth factors, and genetic signals. Released by healthy cells, they act like messengers that tell other cells how to heal, repair, and regenerate." },
      { type: "image", src: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_3.30.20_PM.jpg?v=1749164106", alt: "Exosome communication" },
      { type: "heading", level: 2, text: "How Do Exosomes Help in Skin Regeneration?" },
      { type: "paragraph", text: "As we age, our skin naturally slows down its repair process. That's where exosome therapy for skin steps in. When exosomes are applied to the skin — whether through serums, microneedling, or PRP — they:" },
      { type: "list", items: ["Stimulate collagen and elastin production", "Improve skin texture, tone, and elasticity", "Reduce fine lines, wrinkles, and pigmentation", "Speed up healing after procedures like microneedling or laser", "Enhance overall skin health and glow"] },
      { type: "paragraph", text: "In simple terms: Exosomes help your skin repair itself faster — leaving it looking younger, fresher, and more vibrant." },
      { type: "heading", level: 2, text: "How Do Exosomes Help in Hair Regeneration?" },
      { type: "paragraph", text: "Hair thinning or hair loss is a concern for many people. Exosome therapy for hair loss is emerging as a powerful, non-surgical solution. When applied to the scalp, exosomes:" },
      { type: "list", items: ["Reactivate dormant hair follicles", "Promote new hair growth", "Increase hair thickness and density", "Reduce inflammation around follicles", "Support a healthier scalp environment"] },
      { type: "paragraph", text: "They send 'wake-up' signals to your hair follicles, encouraging them to start producing hair again — naturally and effectively." },
      { type: "heading", level: 2, text: "Benefits of Exosome Therapy" },
      { type: "list", items: ["Non-surgical and non-invasive", "Safe with minimal side effects", "Can be combined with PRP, microneedling, or laser treatments", "Suitable for both men and women", "Visible results within weeks to months"] },
      { type: "heading", level: 2, text: "Why Choose Everceutical Exosomes?" },
      { type: "paragraph", text: "While many brands offer exosome products, Everceutical stands out with its high purity and potency, clinically tested and trusted by professionals, proven results in skin and hair restoration, and safe formulations suitable for all skin types." },
      { type: "paragraph", text: "Whether you're a skincare enthusiast or a professional clinic, Everceutical is the trusted name in premium exosome therapy." },
    ],
  },
]
