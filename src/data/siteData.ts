export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Research & Technology", href: "/research-technology" },
  { label: "Inspection Report", href: "/inspection-report" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
]

export const productCategories = [
  { name: "All", value: "all" },
  { name: "EXOGENESIS", value: "EXOGENESIS" },
  { name: "WHARTEXA", value: "WHARTEXA" },
  { name: "HYALIQUE-X", value: "HYALIQUE-X" },
]

export const getProductsByCategory = (category: string) => {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter((p) => p.featured)
}

export type ProductCategory = "EXOGENESIS" | "WHARTEXA" | "HYALIQUE-X"

export interface CaseStudy {
  name: string
  age: number
  gender: string
  concern: string
  treatment: string
  sessions: string
  results: string
  feedback: string
  beforeImage: string
  afterImage: string
}

export interface ProductData {
  id: string
  title: string
  subtitle: string
  desc: string
  href: string
  img: string
  fullName: string
  category: ProductCategory
  size: string
  kitContent: string[]
  peptides: { name: string; function: string }[]
  benefits: string[]
  idealFor: string[]
  howToUse: string[]
  importantNote: string
  usage: string
  price?: string
  bgColor: string
  accentColor: string
  featured?: boolean
  caseStudies: CaseStudy[]
}

export const products: ProductData[] = [
  // ─── EXOGENESIS SERIES ─────────────────────────────────────
  {
    id: "exogenesis-scalp-10b",
    title: "ExoGenesis hUC-MSCs",
    subtitle: "Exosomes Scalp Kit (10 Billion)",
    desc: "Advanced Regenerative Formula for Hair & Scalp Restoration with 9 Bioactive Peptides",
    href: "/products/exogenesis-scalp-10b",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/product-1.webp",
    fullName: "EXOGENESIS Scalp-10B",
    category: "EXOGENESIS",
    size: "5ml",
    kitContent: [
      "1 Vial Lyophilized hUC-MSCs Exosomes — 10 Billion+ exosome particles",
      "1 Vial Peptide-Based Diluent Solution — 9 bioactive peptides",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates scalp cell renewal and follicle stem cell activation" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Enhances collagen synthesis, reduces inflammation, improves scalp microcirculation" },
      { name: "Acetyl Tetrapeptide-3", function: "Strengthens follicle anchoring and supports ECM remodeling" },
      { name: "Biotinoyl Tripeptide-1", function: "Boosts hair root strength and reduces shedding" },
      { name: "Myristoyl Pentapeptide-17", function: "Increases hair shaft thickness and density" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Reduces scalp inflammation and supports healing" },
      { name: "Decapeptide-4", function: "Stimulates dermal regeneration and follicle microenvironment optimization" },
      { name: "Oligopeptide-2", function: "Improves scalp elasticity and supports collagen framework" },
      { name: "SH-Polypeptide-9 (VEGF)", function: "Enhances scalp vascularization, ensuring nutrients reach follicles" },
    ],
    benefits: [
      "Activates dormant hair follicles & promotes new growth",
      "Enhances scalp healing, elasticity & microcirculation",
      "Reduces DHT-driven follicle miniaturization",
      "Strengthens anchoring proteins for better hair retention",
      "Balances scalp pH and supports a healthier scalp biome",
    ],
    idealFor: [
      "Early-stage hair thinning and receding hairline",
      "Postpartum hair loss",
      "Scalp inflammation and poor microcirculation",
    ],
    howToUse: [
      "Mix lyophilized exosome vial with peptide diluent before each session",
      "Apply via microneedling (0.5–1.5mm) or derma roller on cleansed scalp",
      "1 session per month for 4–6 months, then maintenance every 3 months",
    ],
    importantNote: "For professional use only. Perform a patch test 24 hours before full application. Not recommended for pregnant or breastfeeding individuals.",
    usage: "Mix lyophilized powder with peptide diluent. Apply via derma roller, microneedling, or gentle massage. 1 session/month for 4-6 months.",
    bgColor: "#e8f0f5",
    accentColor: "#4a8ba8",
    featured: true,
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
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_8.53.00_PM.jpg?v=1749500290",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_8.53.00_PM.jpg?v=1749500290",
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
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_12.14.29_PM.jpg?v=1749411529",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_12.14.29_PM.jpg?v=1749411529",
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
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.28_PM.jpg?v=1749409970",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-05_at_4.40.28_PM.jpg?v=1749409970",
      },
    ],
  },
  {
    id: "exogenesis-scalp-15b",
    title: "ExoGenesis hUC-MSCs",
    subtitle: "Exosomes Scalp Kit (15 Billion)",
    desc: "High-Performance Scalp Treatment with 13 Advanced Peptides",
    href: "/products/exogenesis-scalp-15b",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/product-2.webp",
    fullName: "EXOGENESIS Scalp-15B",
    category: "EXOGENESIS",
    size: "5ml",
    kitContent: [
      "1 Vial Lyophilized hUC-MSCs Exosomes — 15 Billion+ (3 Billion/ml)",
      "1 Vial Peptide-Based Diluent Solution — 13 advanced bioactive peptides",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates epidermal regeneration and follicle stem cell activation" },
      { name: "Oligopeptide-2", function: "Boosts skin elasticity and supports collagen structure" },
      { name: "Decapeptide-4", function: "Encourages dermal renewal and follicular microenvironment optimization" },
      { name: "Acetyl Decapeptide-3 (Rejuline)", function: "Enhances keratinocyte proliferation and hair cycle rejuvenation" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Promotes angiogenesis, collagen synthesis, anti-inflammatory" },
      { name: "Biotinoyl Tripeptide-1", function: "Strengthens dermal-epidermal junction, improves follicle anchoring" },
      { name: "Acetyl Tetrapeptide-3", function: "Supports ECM restructuring, reduces perifollicular fibrosis" },
      { name: "Myristoyl Pentapeptide-17", function: "Enhances hair shaft thickness and follicle metabolism" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Reduces scalp inflammation and supports healing" },
      { name: "SH-Polypeptide-9 (VEGF)", function: "Improves scalp vascularization and nutrient delivery" },
      { name: "SH-Polypeptide-1 (FGF)", function: "Regenerates dermal fibroblasts, maintains healthy dermis" },
      { name: "SH-Oligopeptide-2 (IGF-1)", function: "Prevents follicle shrinkage, enhances anagen phase longevity" },
      { name: "Decapeptide-18", function: "Stimulates dermal papilla cells and promotes new hair growth" },
    ],
    benefits: [
      "Stimulates hair follicle regeneration",
      "Accelerates scalp healing & microcirculation",
      "Reduces inflammation & DHT-induced damage",
      "Strengthens hair anchoring proteins",
      "Improves scalp environment & homeostasis",
    ],
    idealFor: [
      "Moderate to advanced hair loss (Norwood 3–5)",
      "Thinning hair with weakened follicle anchoring",
      "Scalp showing signs of inflammation or fibrosis",
    ],
    howToUse: [
      "Reconstitute lyophilized powder with the 13-peptide diluent solution",
      "Administer via microneedling or mesotherapy at 1mm depth",
      "1 session monthly for 4–6 months for optimal regenerative results",
    ],
    importantNote: "Higher peptide concentration — perform comprehensive sensitivity screening. Avoid use on irritated or broken scalp skin. For licensed practitioners only.",
    usage: "Mix lyophilized exosome vial with peptide diluent immediately before use. Apply via derma roller, microneedling, or gentle massage. 1 session/month for 4-6 months.",
    bgColor: "#ede8f5",
    accentColor: "#7c5c9e",
    featured: true,
    caseStudies: [
      {
        name: "Mr. Ji-Hoon",
        age: 45,
        gender: "Male",
        concern: "Norwood stage 4 male pattern baldness with significant crown thinning",
        treatment: "ExoGenesis™ Scalp Regeneration Protocol",
        sessions: "6 Sessions (Every 60 Days)",
        results: "Visible regrowth at the crown and improved hair density across treated areas. New hair strands appeared thicker and healthier.",
        feedback: "The 15B formula exceeded my expectations. New baby hairs appeared after session 3, and the crown area is filling in beautifully.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.10.32_PM.jpg?v=1749500621",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.10.32_PM.jpg?v=1749500621",
      },
      {
        name: "Mr. Dong-Hyun",
        age: 38,
        gender: "Male",
        concern: "Diffuse hair thinning across the vertex and frontal scalp regions",
        treatment: "ExoGenesis™ Scalp Regeneration Therapy",
        sessions: "5 Sessions (Every 60 Days)",
        results: "Noticeable improvement in hair density and coverage across the treated areas. Hair appeared thicker and more robust.",
        feedback: "I started treatment early and the 15B formula delivered exactly what I hoped for. My hair feels fuller and healthier than before.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.27.21_PM.jpg?v=1749501331",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.27.21_PM.jpg?v=1749501331",
      },
    ],
  },
  {
    id: "exogenesis-vital-kit-10b",
    title: "ExoGenesis hUC-MSCs",
    subtitle: "Exosomes Vital Kit (10 Billion)",
    desc: "Advanced Anti-Aging & Skin Rejuvenation Therapy with 9 Peptides",
    href: "/products/exogenesis-vital-kit-10b",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "EXOGENESIS Vital Kit-10B",
    category: "EXOGENESIS",
    size: "5ml",
    kitContent: [
      "1 Vial Lyophilized Exosomes — 2 Billion/ml, 5ml vial = 10 Billion",
      "1 Vial Peptide-Infused Diluent — 9 dermatology-grade anti-aging peptides",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates epidermal regeneration and skin healing" },
      { name: "Acetyl Hexapeptide-8 (Argireline)", function: "Reduces dynamic wrinkles by relaxing facial muscles" },
      { name: "Palmitoyl Pentapeptide-4 (Matrixyl)", function: "Boosts collagen synthesis and reduces deep wrinkles" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Antioxidant, promotes wound healing, increases firmness" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Calms inflammation and boosts dermal repair" },
      { name: "Decapeptide-4", function: "Enhances cellular turnover and skin smoothness" },
      { name: "Hexapeptide-9", function: "Improves skin elasticity and tightness" },
      { name: "Oligopeptide-2", function: "Boosts fibroblast growth and tissue repair" },
      { name: "SH-Oligopeptide-2 (IGF-1)", function: "Promotes skin density, thickness, and youthful resilience" },
    ],
    benefits: [
      "Reduces fine lines & wrinkles",
      "Improves skin tone, elasticity & firmness",
      "Boosts collagen & elastin regeneration",
      "Revitalizes dull, rough, tired-looking skin",
      "Provides deep hydration and nourishment",
    ],
    idealFor: [
      "Early signs of aging and fine lines",
      "Dull, uneven skin tone and texture",
      "Post-procedure skin recovery and rejuvenation",
    ],
    howToUse: [
      "Reconstitute lyophilized exosomes with peptide-infused diluent",
      "Apply via microneedling (0.25–1.0mm) or skin booster injection",
      "2–4 sessions monthly for face, neck, décolleté, or hands",
    ],
    importantNote: "For professional use only. Avoid direct sun exposure for 48 hours post-treatment. Use SPF 50+ sunscreen daily during treatment course.",
    usage: "Mix both components before application. Use via microneedling, skin booster injection, or post-laser recovery. 2-4 sessions monthly. Suitable for face, neck, décolleté, and hands.",
    bgColor: "#f0f0e8",
    accentColor: "#9a8a5c",
    featured: true,
    caseStudies: [
      {
        name: "Ms. Yu-Jin",
        age: 42,
        gender: "Female",
        concern: "Fine lines around eyes and forehead with loss of skin radiance",
        treatment: "ExoGenesis™ Anti-Aging Skin Rejuvenation Protocol",
        sessions: "4 Sessions (Bi-Weekly)",
        results: "Improved skin texture, reduced fine lines, and noticeably brighter complexion. Skin appeared plumper and more youthful.",
        feedback: "Friends asked if I got a facial. My skin has never looked this healthy. The glow is incredible.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
      },
      {
        name: "Ms. Ji-Yeon",
        age: 37,
        gender: "Female",
        concern: "Uneven skin tone, dull complexion, and early signs of aging",
        treatment: "ExoGenesis™ Skin Revitalization Protocol",
        sessions: "4 Sessions (Bi-Weekly)",
        results: "Skin tone became more even, complexion appeared brighter, and fine lines were visibly reduced. Overall skin quality improved significantly.",
        feedback: "My skin looks so much healthier now. The dullness is gone and I finally feel comfortable going out without heavy makeup.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
      },
    ],
  },
  {
    id: "exogenesis-vital-kit-15b",
    title: "ExoGenesis hUC-MSCs",
    subtitle: "Exosomes Vital Kit (15 Billion)",
    desc: "Premium Anti-Aging & Skin Rejuvenation Therapy with 15 Billion Exosomes",
    href: "/products/exogenesis-vital-kit-15b",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "EXOGENESIS Vital Kit-15B",
    category: "EXOGENESIS",
    size: "5ml",
    kitContent: [
      "1 Vial Lyophilized Exosomes — 3 Billion/ml, 5ml vial = 15 Billion",
      "1 Vial Peptide-Infused Diluent — Advanced anti-aging peptide blend",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates epidermal regeneration and skin healing" },
      { name: "Acetyl Hexapeptide-8 (Argireline)", function: "Reduces dynamic wrinkles by relaxing facial muscles" },
      { name: "Palmitoyl Pentapeptide-4 (Matrixyl)", function: "Boosts collagen synthesis and reduces deep wrinkles" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Antioxidant, promotes wound healing, increases firmness" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Calms inflammation and boosts dermal repair" },
      { name: "Decapeptide-4", function: "Enhances cellular turnover and skin smoothness" },
      { name: "Hexapeptide-9", function: "Improves skin elasticity and tightness" },
      { name: "Oligopeptide-2", function: "Boosts fibroblast growth and tissue repair" },
      { name: "SH-Oligopeptide-2 (IGF-1)", function: "Promotes skin density, thickness, and youthful resilience" },
    ],
    benefits: [
      "Reduces fine lines & wrinkles",
      "Improves skin tone, elasticity & firmness",
      "Boosts collagen & elastin regeneration",
      "Revitalizes dull, rough, tired-looking skin",
      "Provides deep hydration and nourishment",
    ],
    idealFor: [
      "Advanced signs of aging with deep wrinkles",
      "Loss of facial volume and skin elasticity",
      "Post-laser or chemical peel recovery support",
    ],
    howToUse: [
      "Reconstitute lyophilized exosomes with the advanced peptide diluent",
      "Administer via microneedling, mesotherapy, or post-laser topical application",
      "2–4 sessions monthly; suitable for face, neck, décolleté, and hands",
    ],
    importantNote: "Maximum concentration formula — ensure proper skin preparation before application. Avoid combining with retinoid treatments within 72 hours of session.",
    usage: "Mix both components before application. Use via microneedling, skin booster injection, or post-laser recovery. 2-4 sessions monthly. Suitable for face, neck, décolleté, and hands.",
    bgColor: "#f5ede8",
    accentColor: "#b89a6c",
    featured: true,
    caseStudies: [
      {
        name: "Ms. Eun-Young",
        age: 55,
        gender: "Female",
        concern: "Deep nasolabial folds, forehead wrinkles, and overall skin laxity",
        treatment: "ExoGenesis™ Premium Anti-Aging Protocol",
        sessions: "6 Sessions (Every 30 Days)",
        results: "Visible reduction in wrinkle depth and improved skin firmness and radiance. Facial contours appeared more defined.",
        feedback: "I feel 10 years younger. The results are natural-looking and long-lasting. My skin feels firm and hydrated.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
      },
      {
        name: "Ms. Hyun-Ji",
        age: 48,
        gender: "Female",
        concern: "Loss of facial volume, sagging skin, and pronounced wrinkles",
        treatment: "ExoGenesis™ Advanced Skin Regeneration Therapy",
        sessions: "5 Sessions (Every 30 Days)",
        results: "Significant improvement in skin firmness and volume restoration. Wrinkles were visibly softened and skin appeared more youthful.",
        feedback: "The 15B formula made a real difference for my mature skin. My face looks lifted and my skin feels incredibly smooth.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
      },
    ],
  },
  {
    id: "exogenesis-scalp-25b",
    title: "ExoGenesis hUC-MSCs",
    subtitle: "Exosomes Scalp Kit (25 Billion)",
    desc: "Maximum Strength Scalp Regeneration with 25 Billion Exosome Particles",
    href: "/products/exogenesis-scalp-25b",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/product-1.webp",
    fullName: "EXOGENESIS Scalp-25B",
    category: "EXOGENESIS",
    size: "5ml",
    kitContent: [
      "1 Vial Lyophilized hUC-MSCs Exosomes — 25 Billion+ exosome particles",
      "1 Vial Peptide-Based Diluent Solution — Premium peptide blend",
    ],
    peptides: [
      { name: "Oligopeptide-1 (EGF)", function: "Stimulates scalp cell renewal and follicle stem cell activation" },
      { name: "Copper Tripeptide-1 (GHK-Cu)", function: "Enhances collagen synthesis, reduces inflammation" },
      { name: "Acetyl Tetrapeptide-3", function: "Strengthens follicle anchoring and supports ECM remodeling" },
      { name: "Biotinoyl Tripeptide-1", function: "Boosts hair root strength and reduces shedding" },
      { name: "Myristoyl Pentapeptide-17", function: "Increases hair shaft thickness and density" },
      { name: "Palmitoyl Tetrapeptide-7", function: "Reduces scalp inflammation and supports healing" },
      { name: "Decapeptide-4", function: "Stimulates dermal regeneration" },
      { name: "Oligopeptide-2", function: "Improves scalp elasticity" },
      { name: "SH-Polypeptide-9 (VEGF)", function: "Enhances scalp vascularization" },
    ],
    benefits: [
      "Activates dormant hair follicles & promotes new growth",
      "Enhances scalp healing, elasticity & microcirculation",
      "Reduces DHT-driven follicle miniaturization",
      "Strengthens anchoring proteins for better hair retention",
      "Balances scalp pH and supports a healthier scalp biome",
    ],
    idealFor: [
      "Severe hair loss and advanced follicular miniaturization",
      "Post-transplant support to enhance graft survival",
      "Resistant cases that have not responded to lower concentrations",
    ],
    howToUse: [
      "Reconstitute lyophilized exosomes with premium peptide diluent",
      "Apply via professional microneedling (1.0–1.5mm) or mesotherapy",
      "1 session monthly for 4–6 months; ideal as a standalone or adjunct therapy",
    ],
    importantNote: "Maximum-strength exosome concentration — use only under professional supervision. Not suitable for individuals with autoimmune scalp conditions without dermatologist approval.",
    usage: "Mix lyophilized powder with peptide diluent. Apply via derma roller, microneedling, or gentle massage. 1 session/month for 4-6 months.",
    bgColor: "#e8f5f0",
    accentColor: "#3d9e8a",
    caseStudies: [
      {
        name: "Mr. Min-Jun",
        age: 50,
        gender: "Male",
        concern: "Advanced androgenetic alopecia (Norwood 5) with minimal response to prior treatments",
        treatment: "ExoGenesis™ Maximum-Strength Scalp Regeneration",
        sessions: "6 Sessions (Every 60 Days)",
        results: "Significant regrowth in previously dormant areas and marked increase in hair density. Hair texture and thickness visibly improved.",
        feedback: "This is the strongest treatment I have tried, and the only one that delivered real results. My confidence is back.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.38_AM.jpg?v=1754136218",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.38_AM.jpg?v=1754136218",
      },
      {
        name: "Mr. Kyung-Soo",
        age: 42,
        gender: "Male",
        concern: "Severe frontal hair loss and receding hairline with thinning at the crown",
        treatment: "ExoGenesis™ Maximum-Strength Scalp Regeneration",
        sessions: "5 Sessions (Every 60 Days)",
        results: "New hair growth along the frontal hairline and improved density at the crown. Overall scalp coverage significantly enhanced.",
        feedback: "After trying many treatments without success, the 25B formula finally delivered. I can see real hair growing back.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.36_AM_1.jpg?v=1754136618",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.36_AM_1.jpg?v=1754136618",
      },
    ],
  },
  // ─── WHARTEXA SERIES ───────────────────────────────────────
  {
    id: "whartexa-20b",
    title: "Whartexa Exosomes",
    subtitle: "High-Concentration Scalp Treatment (20 Billion)",
    desc: "Professional-Grade Exosome Therapy for Advanced Scalp Regeneration",
    href: "/products/whartexa-20b",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/product-2.webp",
    fullName: "WHARTEXA 20B",
    category: "WHARTEXA",
    size: "5ml",
    kitContent: [
      "1 Vial Lyophilized Exosomes — 20 Billion+ particles",
      "1 Vial Application Solution",
    ],
    peptides: [
      { name: "Growth Factor Complex", function: "Stimulates cellular regeneration and tissue repair" },
      { name: "Peptide Blend", function: "Supports follicle health and scalp rejuvenation" },
    ],
    benefits: [
      "High-concentration exosome therapy",
      "Advanced scalp regeneration",
      "Promotes healthy hair growth",
      "Improves scalp environment",
    ],
    idealFor: [
      "Professional scalp regeneration protocols",
      "Clinics seeking high-concentration exosome solutions",
      "Hair restoration practices complementing transplant procedures",
    ],
    howToUse: [
      "Reconstitute lyophilized exosomes with the included application solution",
      "Administer via professional microneedling or mesotherapy",
      "1 session monthly; recommended as part of a multi-month treatment plan",
    ],
    importantNote: "Professional-use product only. Requires trained practitioner for administration. Store reconstituted solution and use within 30 minutes.",
    usage: "Professional application recommended. Mix before use. Apply via microneedling or mesotherapy. 1 session monthly.",
    bgColor: "#e8eef5",
    accentColor: "#5b7c91",
    caseStudies: [
      {
        name: "Mr. Tae-Hyun",
        age: 40,
        gender: "Male",
        concern: "Diffuse hair thinning across the frontal and vertex regions",
        treatment: "WHARTEXA™ Scalp Regeneration Therapy",
        sessions: "5 Sessions (Every 30 Days)",
        results: "Improved hair density and scalp coverage with reduced shedding. New growth appeared stronger and more resilient.",
        feedback: "Professional treatment with noticeable results. My scalp feels healthier overall, and I can see real improvement.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.27.21_PM.jpg?v=1749501331",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_9.27.21_PM.jpg?v=1749501331",
      },
      {
        name: "Ms. Sun-Hee",
        age: 36,
        gender: "Female",
        concern: "Postpartum hair thinning with visible scalp showing through the parting line",
        treatment: "WHARTEXA™ Scalp Regeneration Therapy",
        sessions: "4 Sessions (Every 30 Days)",
        results: "Noticeable reduction in hair shedding and visible new growth along the parting line. Hair appeared thicker and fuller.",
        feedback: "Postpartum hair loss was affecting my confidence badly. WHARTEXA brought my hair back faster than I expected.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.38_AM.jpg?v=1754136218",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.38_AM.jpg?v=1754136218",
      },
    ],
  },
  {
    id: "whartexa-60b",
    title: "Whartexa Exosomes",
    subtitle: "Ultra-High Concentration (60 Billion)",
    desc: "Ultra-Potent Exosome Formulation for Maximum Regenerative Impact",
    href: "/products/whartexa-60b",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/product-2.webp",
    fullName: "WHARTEXA 60B",
    category: "WHARTEXA",
    size: "3ml",
    kitContent: [
      "1 Vial Lyophilized Exosomes — 60 Billion+ particles (ultra-concentrated)",
      "1 Vial Application Solution",
    ],
    peptides: [
      { name: "Growth Factor Complex", function: "Maximum potency cellular regeneration" },
      { name: "Advanced Peptide Blend", function: "Intensive tissue repair and rejuvenation" },
    ],
    benefits: [
      "Ultra-high concentration for maximum results",
      "Professional-grade regenerative therapy",
      "Accelerates tissue repair",
      "Premium quality formulation",
    ],
    idealFor: [
      "Maximum-potency regenerative scalp therapy",
      "Clinics requiring ultra-concentrated formulations for complex cases",
      "Post-surgical tissue repair and recovery support",
    ],
    howToUse: [
      "Reconstitute ultra-concentrated lyophilized exosomes with application solution",
      "Apply via professional microneedling or targeted mesotherapy injection",
      "1 session every 6–8 weeks; higher concentration allows longer intervals",
    ],
    importantNote: "Ultra-concentrated formula — professional use only with appropriate training. Ensure proper cold-chain handling. Do not exceed recommended session intervals.",
    usage: "Professional application only. Mix before use. Apply via microneedling or mesotherapy. 1 session every 6-8 weeks.",
    bgColor: "#f0e8f5",
    accentColor: "#8a5b9e",
    caseStudies: [
      {
        name: "Ms. Hye-Jin",
        age: 48,
        gender: "Female",
        concern: "Severe alopecia areata with multiple patchy loss areas",
        treatment: "WHARTEXA™ Ultra-High Concentration Scalp Protocol",
        sessions: "4 Sessions (Every 60 Days)",
        results: "Significant regrowth in previously bald patches with improved hair uniformity. Scalp coverage restored across treated areas.",
        feedback: "The ultra-high concentration made a real difference. Visible results within 3 months. I can finally wear my hair with confidence.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_8.53.00_PM.jpg?v=1749500290",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-06-08_at_8.53.00_PM.jpg?v=1749500290",
      },
      {
        name: "Mr. Jun-Ho",
        age: 52,
        gender: "Male",
        concern: "Progressive male pattern baldness with extensive thinning at the crown and temples",
        treatment: "WHARTEXA™ Ultra-High Concentration Scalp Protocol",
        sessions: "5 Sessions (Every 60 Days)",
        results: "Marked improvement in hair density across the crown and temple areas. New hair appeared stronger and more youthful.",
        feedback: "At my age I wasn't sure what to expect, but the 60B formula delivered impressive results. My barber even commented on the difference.",
        beforeImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.36_AM.jpg?v=1754136707",
        afterImage: "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/WhatsApp_Image_2025-08-01_at_5.13.36_AM.jpg?v=1754136707",
      },
    ],
  },
  // ─── HYALIQUE-X SERIES ─────────────────────────────────────
  {
    id: "hyalique-x-full-kit",
    title: "Hyalique-X",
    subtitle: "Full Kit - Complete Rejuvenation System",
    desc: "Comprehensive Dermal Rejuvenation Kit with Multiple Synergistic Components",
    href: "/products/hyalique-x-full-kit",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "HYALIQUE-X (Full Kit)",
    category: "HYALIQUE-X",
    size: "Kit",
    kitContent: [
      "Complete rejuvenation system",
      "Multiple synergistic components",
      "Full treatment protocol included",
    ],
    peptides: [
      { name: "Hyaluronic Acid Complex", function: "Deep hydration and volume restoration" },
      { name: "Peptide Blend", function: "Collagen stimulation and skin rejuvenation" },
    ],
    benefits: [
      "Complete dermal rejuvenation",
      "Deep hydration and volume",
      "Collagen stimulation",
      "Long-lasting results",
    ],
    idealFor: [
      "Full-face rejuvenation requiring multiple treatment modalities",
      "Clinics seeking an all-in-one aesthetic treatment system",
      "Patients wanting comprehensive facial restoration in a single kit",
    ],
    howToUse: [
      "Follow the included full treatment protocol for component sequencing",
      "Administer each component via its recommended delivery method (injection, mesotherapy, or topical)",
      "Multiple sessions recommended; typically 3–4 sessions over 2–3 months",
    ],
    importantNote: "Comprehensive kit for professional use only. Ensure practitioner is trained in all component delivery methods. Requires proper skin assessment before treatment planning.",
    usage: "Professional application. Follow complete treatment protocol. Multiple sessions recommended.",
    bgColor: "#f5f0e8",
    accentColor: "#c9a84a",
    caseStudies: [
      {
        name: "Ms. Soo-Hee",
        age: 52,
        gender: "Female",
        concern: "Global facial aging with volume loss, wrinkles, and skin dehydration",
        treatment: "HYALIQUE-X™ Complete Rejuvenation Protocol",
        sessions: "4 Sessions (Every 30 Days)",
        results: "Comprehensive improvement in skin volume, texture, hydration, and overall youthful appearance. Facial contours restored.",
        feedback: "This kit addressed everything I was concerned about. My skin looks and feels completely renewed. I feel radiant again.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
      },
      {
        name: "Ms. A-Yeon",
        age: 45,
        gender: "Female",
        concern: "Facial volume depletion, deep wrinkles, and loss of skin elasticity",
        treatment: "HYALIQUE-X™ Full Rejuvenation System",
        sessions: "3 Sessions (Every 30 Days)",
        results: "Visible restoration of facial volume, smoother skin texture, and improved elasticity. Overall facial appearance looked significantly younger.",
        feedback: "The full kit was exactly what I needed. My face looks lifted and refreshed without looking unnatural. Absolutely love the results.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
      },
    ],
  },
  {
    id: "hyalique-x-soft-filler-1ml",
    title: "Hyalique-X",
    subtitle: "Soft Filler - Natural Volume",
    desc: "Soft Dermal Filler for Natural-Looking Volume and Hydration",
    href: "/products/hyalique-x-soft-filler-1ml",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "HYALIQUE-X (Soft Filler)",
    category: "HYALIQUE-X",
    size: "1ml",
    kitContent: [
      "1 x Soft Filler Syringe (1ml)",
      "Professional application needles",
    ],
    peptides: [
      { name: "Soft Hyaluronic Acid", function: "Natural volume and hydration" },
    ],
    benefits: [
      "Natural-looking volume restoration",
      "Deep hydration",
      "Smooth texture",
      "Long-lasting effects",
    ],
    idealFor: [
      "Lip augmentation and subtle lip enhancement",
      "Nasolabial fold softening and marionette lines",
      "Fine line correction and superficial hydrating treatments",
    ],
    howToUse: [
      "Inject into the mid-to-deep dermis using a fine needle or cannula",
      "Use serial puncture or linear threading technique depending on treatment area",
      "Results last 6–12 months; touch-up sessions as needed",
    ],
    importantNote: "Professional injection only. Avoid areas with active infection or inflammation. Contraindicated for individuals with known hypersensitivity to hyaluronic acid.",
    usage: "Professional injection only. Suitable for lips, cheeks, and fine lines.",
    bgColor: "#f0f5e8",
    accentColor: "#7ab86a",
    caseStudies: [
      {
        name: "Ms. Na-Young",
        age: 35,
        gender: "Female",
        concern: "Thin lips and shallow nasolabial folds wanting natural-looking enhancement",
        treatment: "HYALIQUE-X™ Soft Filler Injection",
        sessions: "1 Session",
        results: "Natural lip volume increase and softened nasolabial lines with smooth texture. Results looked completely natural.",
        feedback: "Exactly what I wanted — subtle, natural, and beautiful. No one can tell I had anything done. My lips look naturally full.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
      },
      {
        name: "Ms. Yoo-Na",
        age: 32,
        gender: "Female",
        concern: "Thin lips and fine lines around the mouth area",
        treatment: "HYALIQUE-X™ Soft Filler Injection",
        sessions: "1 Session",
        results: "Enhanced lip volume with a natural finish and smooth perioral lines. The texture looked and felt completely natural.",
        feedback: "I was nervous about fillers but the result is so natural. My lips look fuller without being overdone. Very happy with the outcome.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
      },
    ],
  },
  {
    id: "hyalique-x-hard-filler-1ml",
    title: "Hyalique-X",
    subtitle: "Hard Filler - Structural Support",
    desc: "Hard Dermal Filler for Structural Volume and Contouring",
    href: "/products/hyalique-x-hard-filler-1ml",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "HYALIQUE-X (Hard Filler)",
    category: "HYALIQUE-X",
    size: "1ml",
    kitContent: [
      "1 x Hard Filler Syringe (1ml)",
      "Professional application needles",
    ],
    peptides: [
      { name: "Dense Hyaluronic Acid", function: "Structural volume and contouring" },
    ],
    benefits: [
      "Structural volume enhancement",
      "Facial contouring",
      "Jawline and cheek definition",
      "Long-lasting results",
    ],
    idealFor: [
      "Cheek and midface volume augmentation",
      "Jawline and chin contouring and definition",
      "Temple hollowing and deep structural volumizing",
    ],
    howToUse: [
      "Inject into the deep dermis or subdermal plane using a blunt-tip cannula",
      "Use depot or bolus technique for structural volumizing of cheeks, jawline, or chin",
      "Results last 12–18 months; retreatment as needed based on patient assessment",
    ],
    importantNote: "Professional injection only — high-viscosity filler requiring advanced injection technique. Avoid blood vessel proximity. Contraindicated for patients with autoimmune conditions or active skin infections.",
    usage: "Professional injection only. Suitable for jawline, chin, and deep volumizing.",
    bgColor: "#e8f0f5",
    accentColor: "#4a8ba8",
    caseStudies: [
      {
        name: "Mr. Woo-Sung",
        age: 44,
        gender: "Male",
        concern: "Flat cheekbones and undefined jawline wanting stronger facial structure",
        treatment: "HYALIQUE-X™ Hard Filler Structural Injection",
        sessions: "1 Session",
        results: "Enhanced cheek projection and sharper jawline definition with natural contour. Facial structure appeared more balanced.",
        feedback: "My face looks stronger and more defined. The results are exactly what I was looking for. Very natural outcome.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
      },
      {
        name: "Ms. Eun-Bi",
        age: 39,
        gender: "Female",
        concern: "Hollow temples and flat midface wanting structural enhancement",
        treatment: "HYALIQUE-X™ Hard Filler Structural Injection",
        sessions: "1 Session",
        results: "Restored temple fullness and enhanced midface projection. Facial contours appeared more youthful and well-defined.",
        feedback: "The structural filler gave me the definition I always wanted. My face looks sculpted and refreshed. Very natural results.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
      },
    ],
  },
  {
    id: "hyalique-x-soft-filler-2ml",
    title: "Hyalique-X",
    subtitle: "Soft Filler - Natural Volume",
    desc: "Soft Dermal Filler for Natural-Looking Volume and Hydration",
    href: "/products/hyalique-x-soft-filler-2ml",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "HYALIQUE-X (Soft Filler)",
    category: "HYALIQUE-X",
    size: "2ml",
    kitContent: [
      "1 x Soft Filler Syringe (2ml)",
      "Professional application needles",
    ],
    peptides: [
      { name: "Soft Hyaluronic Acid", function: "Natural volume and hydration" },
    ],
    benefits: [
      "Natural-looking volume restoration",
      "Deep hydration",
      "Smooth texture",
      "Long-lasting effects",
    ],
    idealFor: [
      "Full lip augmentation and perioral rejuvenation",
      "Extended treatment areas requiring more product volume",
      "Deep hydrating facials and multi-area soft volumizing",
    ],
    howToUse: [
      "Inject into the mid-to-deep dermis using a fine needle or blunt cannula",
      "Distribute evenly across multiple treatment zones for uniform volume",
      "Results last 6–12 months; the 2ml syringe allows treatment of larger areas in one session",
    ],
    importantNote: "Professional injection only — larger volume formulation. Perform thorough patient consultation and medical history review prior to treatment. Avoid overcorrection.",
    usage: "Professional injection only. Suitable for lips, cheeks, and fine lines.",
    bgColor: "#f0f5e8",
    accentColor: "#7ab86a",
    caseStudies: [
      {
        name: "Ms. Min-Ji",
        age: 39,
        gender: "Female",
        concern: "Volume loss in lips and cheeks with fine lines around the mouth",
        treatment: "HYALIQUE-X™ Soft Filler Multi-Zone Injection",
        sessions: "1 Session",
        results: "Fuller lips, restored cheek volume, and smoothed perioral lines. Skin appeared smoother and more hydrated.",
        feedback: "The 2ml size was perfect — treated both lips and cheeks in one visit. Very natural result. I love the outcome.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
      },
      {
        name: "Ms. Soo-Jin",
        age: 41,
        gender: "Female",
        concern: "Thinning lips and nasolabial folds with loss of perioral volume",
        treatment: "HYALIQUE-X™ Soft Filler Multi-Zone Injection",
        sessions: "1 Session",
        results: "Restored lip volume, softened nasolabial folds, and improved perioral appearance. Results looked completely natural.",
        feedback: "Treating both areas in one session was convenient and the results are beautiful. My lips and smile look naturally youthful.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
      },
    ],
  },
  {
    id: "hyalique-x-hard-filler-2ml",
    title: "Hyalique-X",
    subtitle: "Hard Filler - Structural Support",
    desc: "Hard Dermal Filler for Structural Volume and Contouring",
    href: "/products/hyalique-x-hard-filler-2ml",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "HYALIQUE-X (Hard Filler)",
    category: "HYALIQUE-X",
    size: "2ml",
    kitContent: [
      "1 x Hard Filler Syringe (2ml)",
      "Professional application needles",
    ],
    peptides: [
      { name: "Dense Hyaluronic Acid", function: "Structural volume and contouring" },
    ],
    benefits: [
      "Structural volume enhancement",
      "Facial contouring",
      "Jawline and cheek definition",
      "Long-lasting results",
    ],
    idealFor: [
      "Full-face structural volumizing across multiple zones",
      "Comprehensive jawline, cheek, and chin contouring in a single session",
      "Patients requiring higher volume for significant structural correction",
    ],
    howToUse: [
      "Inject into the deep dermis or supraperiosteal plane using a cannula",
      "Use depot or fan technique for large-area structural volumizing",
      "Results last 12–18 months; the 2ml syringe suits multi-zone contouring in one visit",
    ],
    importantNote: "Professional injection only — high-viscosity, high-volume filler requiring advanced anatomical knowledge. Avoid overcorrection and ensure symmetrical placement. Contraindicated for patients with bleeding disorders.",
    usage: "Professional injection only. Suitable for jawline, chin, and deep volumizing.",
    bgColor: "#e8f0f5",
    accentColor: "#4a8ba8",
    caseStudies: [
      {
        name: "Ms. Seung-Hee",
        age: 47,
        gender: "Female",
        concern: "Significant volume loss in cheeks and jawline with facial sagging",
        treatment: "HYALIQUE-X™ Hard Filler Structural Contouring",
        sessions: "1 Session",
        results: "Restored cheek volume, sharper jawline, and lifted midface appearance. Facial contours appeared more youthful and defined.",
        feedback: "The 2ml allowed my doctor to treat both cheeks and jawline in one session. Amazing results. I look refreshed and younger.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-redness.png",
      },
      {
        name: "Mr. Do-Yoon",
        age: 50,
        gender: "Male",
        concern: "Flat cheeks and weak jawline wanting a more defined facial structure",
        treatment: "HYALIQUE-X™ Hard Filler Structural Contouring",
        sessions: "1 Session",
        results: "Enhanced cheek volume and sharper jawline definition. Facial structure appeared stronger and more balanced.",
        feedback: "The results are incredibly natural. My face looks more structured and defined without appearing artificial. Very satisfied.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
      },
    ],
  },
  {
    id: "hyalique-x-booster",
    title: "Hyalique-X",
    subtitle: "Booster - Skin Revitalization",
    desc: "Concentrated Skin Booster for Deep Hydration and Glow",
    href: "/products/hyalique-x-booster",
    img: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/vital-kit.png",
    fullName: "HYALIQUE-X (Booster)",
    category: "HYALIQUE-X",
    size: "300mg",
    kitContent: [
      "1 x Skin Booster Vial (300mg)",
      "Professional application supplies",
    ],
    peptides: [
      { name: "Concentrated HA", function: "Deep hydration and skin revitalization" },
      { name: "Growth Factors", function: "Cellular renewal and glow" },
    ],
    benefits: [
      "Deep skin hydration",
      "Improved skin texture and glow",
      "Reduced fine lines",
      "Nourished, healthy skin",
    ],
    idealFor: [
      "Dehydrated, dull skin lacking radiance",
      "Fine lines and crepey skin texture improvement",
      "Maintenance treatments between filler or laser sessions",
    ],
    howToUse: [
      "Inject or apply via mesotherapy into the superficial dermis across treatment zones",
      "Distribute small aliquots evenly for uniform hydration coverage",
      "3–4 sessions spaced 2–4 weeks apart for optimal skin quality improvement",
    ],
    importantNote: "Professional use only. Suitable as a standalone treatment or as an adjunct to other aesthetic procedures. Avoid use on skin with active dermatological conditions.",
    usage: "Professional mesotherapy or injection. Multiple sessions for optimal results.",
    bgColor: "#f5f5e8",
    accentColor: "#c9b44a",
    caseStudies: [
      {
        name: "Ms. Ga-Young",
        age: 33,
        gender: "Female",
        concern: "Dehydrated, dull skin with fine lines around eyes and forehead",
        treatment: "HYALIQUE-X™ Skin Booster Mesotherapy",
        sessions: "4 Sessions (Every 2 Weeks)",
        results: "Significantly improved skin hydration, texture, and natural radiance. Fine lines were visibly reduced and skin appeared plumper.",
        feedback: "My skin has never been this hydrated and glowing. It feels like a fresh start for my face. I get compliments daily.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-pores.png",
      },
      {
        name: "Ms. Chae-Won",
        age: 29,
        gender: "Female",
        concern: "Dull, dehydrated skin with uneven texture and lack of radiance",
        treatment: "HYALIQUE-X™ Skin Booster Mesotherapy",
        sessions: "3 Sessions (Every 2 Weeks)",
        results: "Visible improvement in skin hydration and glow. Skin texture became smoother and more even with a healthy, dewy finish.",
        feedback: "My skin looks so healthy and radiant now. The booster gave me the glow I always wanted. Best skin treatment I've had.",
        beforeImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
        afterImage: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/before-after/skin-acne.png",
      },
    ],
  },
]

export interface ExosomeClass {
  name: string
  tagline: string
  icon: string
  color: string
}

export const exosomeClasses: ExosomeClass[] = [
  {
    name: "hUC-MSC Exosomes",
    tagline: "Umbilical Cord-Derived",
    icon: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/class-huc-msc.png",
    color: "#5b9bd5",
  },
  {
    name: "Fibroblast Exosomes",
    tagline: "Skin Cell-Derived",
    icon: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/class-fibroblast.png",
    color: "#7ab8a0",
  },
  {
    name: "Adipose Exosomes",
    tagline: "Fat Tissue-Derived",
    icon: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/class-adipose.png",
    color: "#a088c4",
  },
  {
    name: "LECO Exosomes",
    tagline: "Lab-Engineered",
    icon: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/class-leco.png",
    color: "#d4915e",
  },
  {
    name: "Plant Exosomes",
    tagline: "Botanical-Derived",
    icon: "https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/class-plant.png",
    color: "#6aab8e",
  },
]

export const benefits = [
  { title: "Cell Renewal", desc: "Stimulates natural cell regeneration and repair" },
  { title: "Hair Growth", desc: "Activates dormant follicles and improves density" },
  { title: "Skin Repair", desc: "Repairs damaged skin at cellular level" },
  { title: "Anti-Aging", desc: "Reduces fine lines and wrinkles" },
  { title: "Skin Brightening", desc: "Improves tone, clarity, and natural radiance" },
  { title: "Collagen Boost", desc: "Enhances collagen and elastin production" },
  { title: "Tissue Repair", desc: "Accelerates recovery of damaged tissues" },
  { title: "Scalp Health", desc: "Improves scalp environment for growth" },
]

export interface BenefitDetail {
  title: string
  shortDesc: string
  fullDesc: string
  icon: string
  category: "regenerative" | "aesthetic"
  color: string
}

export const benefitDetails: BenefitDetail[] = [
  {
    title: "Cell Renewal",
    shortDesc: "Stimulates natural cell regeneration and repair",
    fullDesc: "Exosomes deliver bioactive signaling molecules that activate dormant cellular repair pathways, promoting the replacement of damaged cells with healthy, functioning tissue through natural regenerative processes.",
    icon: "🧬",
    category: "regenerative",
    color: "#5b9bd5",
  },
  {
    title: "Tissue Repair",
    shortDesc: "Accelerates recovery of damaged tissues",
    fullDesc: "By delivering concentrated growth factors directly to injury sites, exosomes orchestrate a coordinated healing response — reducing recovery time and improving the quality of repaired tissue at the structural level.",
    icon: "🩹",
    category: "regenerative",
    color: "#4a8ba8",
  },
  {
    title: "Skin Repair",
    shortDesc: "Repairs damaged skin at cellular level",
    fullDesc: "Exosomes penetrate the dermal layers to deliver restorative signals that repair micro-damage, strengthen the skin barrier, and restore structural integrity — addressing damage before it becomes visible.",
    icon: "✨",
    category: "regenerative",
    color: "#7ab8a0",
  },
  {
    title: "Collagen Support",
    shortDesc: "Enhances collagen and elastin production",
    fullDesc: "Stimulates fibroblast activity to boost endogenous collagen and elastin synthesis, restoring skin elasticity, firmness, and structural support that diminishes with age and environmental exposure.",
    icon: "🔬",
    category: "regenerative",
    color: "#a088c4",
  },
  {
    title: "Hair Growth",
    shortDesc: "Activates dormant follicles and improves density",
    fullDesc: "Exosomes reactivate miniaturized hair follicles by delivering Wnt signaling molecules and growth factors that extend the anagen phase, increase hair shaft thickness, and improve overall follicle density.",
    icon: "💇",
    category: "aesthetic",
    color: "#d4915e",
  },
  {
    title: "Skin Brightening",
    shortDesc: "Improves tone, clarity, and natural radiance",
    fullDesc: "By regulating melanocyte activity and promoting even cellular turnover, exosomes help reduce hyperpigmentation, restore luminosity, and create a naturally brighter, more uniform complexion.",
    icon: "🌟",
    category: "aesthetic",
    color: "#e8b84a",
  },
  {
    title: "Anti-Aging",
    shortDesc: "Reduces fine lines and wrinkles",
    fullDesc: "Exosomes combat visible aging by stimulating collagen production, improving skin hydration, reducing oxidative stress, and promoting the regeneration of youthful skin architecture at the cellular level.",
    icon: "⏳",
    category: "aesthetic",
    color: "#c9706b",
  },
  {
    title: "Scalp Health",
    shortDesc: "Improves scalp environment for growth",
    fullDesc: "Creates an optimal microenvironment for hair growth by reducing scalp inflammation, balancing sebum production, improving microcirculation, and restoring the dermal microenvironment essential for follicle vitality.",
    icon: "🌿",
    category: "aesthetic",
    color: "#6aab8e",
  },
]

export interface FaqItem {
  q: string
  a: string
}

export const faq: FaqItem[] = [
  {
    q: "What Is an Exosome Treatment?",
    a: "Exosome treatments utilize extracellular vesicles rich in growth factors, proteins, peptides, and signaling molecules to support cellular communication, tissue repair, and regenerative processes at the deepest cellular level.",
  },
  {
    q: "How Do Exosomes Work?",
    a: "Exosomes act as biological messengers, delivering molecular signals between cells to support regeneration, recovery, and cellular function. They carry bioactive cargo including growth factors, microRNA, and cytokines.",
  },
  {
    q: "How Are Billions Counted in Exosomes?",
    a: 'The term "billions" refers to the concentration of exosome particles present in a formulation, indicating the number of biologically active vesicles available within a treatment volume.',
  },
  {
    q: "Are Exosomes Safe?",
    a: "High-quality exosome products are developed under strict laboratory and quality-control standards to ensure consistency, safety, and reliability. Every batch undergoes rigorous testing.",
  },
  {
    q: "Exosome Therapy vs PRP: What Is the Difference?",
    a: "Unlike PRP, exosomes provide highly concentrated signaling molecules without relying on donor variability, supporting more standardized regenerative outcomes.",
  },
]

export const exosomeTechnology = {
  hero: {
    label: "Advanced Exosome Platform",
    title: "Next-Generation Regenerative Technology",
    subtitle: "Advanced Exosome Platform",
    description:
      "Our exosome platform harnesses the natural communicative power of extracellular vesicles to deliver precision regenerative signals at the cellular level. Engineered for consistency, safety, and therapeutic efficacy.",
  },
  features: [
    {
      icon: "🧬",
      title: "Cellular Communication",
      desc: "Exosomes facilitate biological signaling between cells, carrying growth factors, cytokines, and microRNA payloads that instruct damaged tissue to initiate repair and regeneration pathways.",
    },
    {
      icon: "🔬",
      title: "Laboratory Engineered",
      desc: "Produced under strictly controlled Good Manufacturing Practice (GMP) protocols using proprietary isolation and purification technologies to ensure maximum bioactivity and batch-to-batch consistency.",
    },
    {
      icon: "🛡",
      title: "Quality Assurance",
      desc: "Every batch undergoes rigorous analytical testing including nanoparticle tracking analysis, protein quantification, sterility validation, and endotoxin screening to meet clinical-grade standards.",
    },
    {
      icon: "⚡",
      title: "Regenerative Potential",
      desc: "Designed to support tissue repair, reduce inflammation, and enhance cellular recovery across dermatological, aesthetic, and therapeutic applications through targeted delivery of bioactive cargo.",
    },
    {
      icon: "🧫",
      title: "Cell Sources",
      desc: "Derived from human umbilical cord mesenchymal stem cells (hUC-MSCs), adipose tissue, fibroblasts, and lab-engineered cell lines — each optimized for specific therapeutic profiles.",
    },
    {
      icon: "📋",
      title: "Research-Driven",
      desc: "Backed by peer-reviewed clinical research and continuously validated through ongoing studies to ensure our exosome formulations meet the highest standards of evidence-based regenerative medicine.",
    },
  ],
  stats: [
    { value: "10–150nm", label: "Nanoscale Vesicles" },
    { value: "100+", label: "Bioactive Molecules" },
    { value: "10B+", label: "Particles Per Vial" },
    { value: "99.9%", label: "Purity Standard" },
  ],
}

// ─── INSPECTION REPORT ──────────────────────────────────────
export const inspectionReport = {
  hero: {
    label: "Quality Assurance",
    title: "Inspection Report",
    subtitle: "Independent Third-Party Verification",
    description:
      "Our exosome formulations undergo rigorous independent testing by KTR (Korea Testing & Research Institute) — one of South Korea's most respected certification bodies. Every batch is validated for safety, purity, and compliance with international standards.",
  },
  certificates: [
    {
      title: "KTR Safety Inspection Report",
      description:
        "Comprehensive safety analysis confirming no detection of harmful substances — heavy metals, bacterial endotoxins, and microbial contamination all returned 'Not Detected' (未检出) results.",
      image:
        "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/1_52c68b92-68e1-44f4-824b-a86f792aeda9.png?v=1750762518",
      badge: "PASSED",
      issuer: "Korea Testing & Research Institute (KTR)",
    },
    {
      title: "KTR Quality Certification",
      description:
        "Official quality certification validating product composition, stability, and compliance with Korean and international cosmetic safety regulations.",
      image:
        "https://cdn.shopify.com/s/files/1/0956/4926/8006/files/2_4d6b00fb-0f18-4ece-a48d-9bf0a6490c57.png?v=1750279317",
      badge: "CERTIFIED",
      issuer: "Korea Testing & Research Institute (KTR)",
    },
  ],
  highlights: [
    { icon: "🛡", title: "Heavy Metals", result: "Not Detected", desc: "Lead, mercury, arsenic, and cadmium — all below detectable limits." },
    { icon: "🧫", title: "Microbial Contamination", result: "Not Detected", desc: "Total plate count, yeast, and mold — all within sterile thresholds." },
    { icon: "⚡", title: "Endotoxin Levels", result: "Not Detected", desc: "Bacterial endotoxins validated below detection sensitivity." },
    { icon: "✅", title: "Overall Status", result: "PASSED", desc: "All tested parameters meet or exceed international safety standards." },
  ],
  trustStats: [
    { value: "100%", label: "Detection-Free" },
    { value: "KTR", label: "Certified Lab" },
    { value: "0", label: "Safety Violations" },
    { value: "GMP", label: "Compliant" },
  ],
}
