// Shared demo data for the Synapse prototype.
// India-first creator economy: INR pricing, Indian brands, cities and niches.

export const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export const inrRange = (a: number, b: number) => `${inr(a)} – ${inr(b)}`;

export type CampaignType =
  | "Paid collab"
  | "Gifted collab"
  | "UGC only"
  | "Affiliate"
  | "Event invite"
  | "Product launch"
  | "PR package";

export interface BrandCampaign {
  id: string;
  brand: string;
  initials: string;
  category: string;
  title: string;
  type: CampaignType;
  budgetMin: number;
  budgetMax: number;
  deliverables: string;
  audience: string;
  location: string;
  language: string;
  score: number;
  reasons: { label: string; detail: string }[];
}

// Recommended campaigns surfaced to a creator (Riya Sharma).
export const recommendedCampaigns: BrandCampaign[] = [
  {
    id: "mam-001",
    brand: "Mamaearth",
    initials: "ME",
    category: "Skincare · D2C",
    title: "Ubtan Face Wash — Gen Z skincare push",
    type: "Paid collab",
    budgetMin: 35000,
    budgetMax: 65000,
    deliverables: "2 Reels · 4 Stories · 1 YT Short",
    audience: "Female · 18–26 · Tier 1 + Tier 2 India",
    location: "Pan India",
    language: "Hindi · English",
    score: 96,
    reasons: [
      { label: "Audience overlap", detail: "89% female 18–26, strong Mumbai + Delhi base" },
      { label: "Niche similarity", detail: "Skincare is your top niche (12 prior posts)" },
      { label: "Budget compatibility", detail: "Your Reel rate (₹22k) sits inside the posted range" },
      { label: "Campaign relevance", detail: "Past Mamaearth-style D2C deals averaged 7.8% ER" },
    ],
  },
  {
    id: "nyk-002",
    brand: "Nykaa",
    initials: "NY",
    category: "Beauty marketplace",
    title: "Holi-ready Glow Edit — UGC + Reels",
    type: "Paid collab",
    budgetMin: 45000,
    budgetMax: 80000,
    deliverables: "3 Reels · UGC pack (5 clips)",
    audience: "Female · 20–32 · Metro India",
    location: "Mumbai · Bengaluru · Delhi NCR",
    language: "English · Hinglish",
    score: 93,
    reasons: [
      { label: "Audience overlap", detail: "92% match on Nykaa's metro Gen Z shoppers" },
      { label: "Niche similarity", detail: "Beauty + lifestyle — your top 2 niches" },
      { label: "Budget compatibility", detail: "Bundle pricing aligns with your UGC rate card" },
      { label: "Campaign relevance", detail: "Festive beauty drops are your highest-ER format" },
    ],
  },
  {
    id: "boa-003",
    brand: "boAt",
    initials: "BT",
    category: "Consumer tech",
    title: "Airdopes 311 Pro — campus drop",
    type: "Affiliate",
    budgetMin: 18000,
    budgetMax: 28000,
    deliverables: "1 Reel · 1 YT Short · affiliate link",
    audience: "18–24 · college audience · Hindi belt",
    location: "Pan India",
    language: "Hindi · English",
    score: 88,
    reasons: [
      { label: "Audience overlap", detail: "61% of your audience is 18–22, strong campus reach" },
      { label: "Niche similarity", detail: "Adjacent — lifestyle/college content fit" },
      { label: "Budget compatibility", detail: "Below your usual range, offset by 8% affiliate cut" },
      { label: "Campaign relevance", detail: "2 prior consumer-tech deals delivered 4.2% CTR" },
    ],
  },
  {
    id: "zom-004",
    brand: "Zomato",
    initials: "ZO",
    category: "Food delivery",
    title: "Late-night cravings — Mumbai food creators",
    type: "Gifted collab",
    budgetMin: 0,
    budgetMax: 0,
    deliverables: "2 Stories · 1 Reel (gifted credits ₹5,000)",
    audience: "20–35 · Mumbai · foodies",
    location: "Mumbai",
    language: "English · Hinglish",
    score: 82,
    reasons: [
      { label: "Audience overlap", detail: "Mumbai-based, food-curious audience match" },
      { label: "Niche similarity", detail: "Cross-over with your lifestyle content" },
      { label: "Budget compatibility", detail: "Gifted-only — usable as brand-affinity post" },
      { label: "Campaign relevance", detail: "First time in food category for you" },
    ],
  },
];

// --- Active collaborations, applications, payments (creator view) ---

export const activeCollabs = [
  {
    brand: "Plum Goodness",
    initials: "PL",
    title: "Bodycare gifting edit — Reels series",
    stage: "In production",
    due: "12 Apr 2026",
    value: 42000,
  },
  {
    brand: "Sugar Cosmetics",
    initials: "SU",
    title: "Matte Bullet — launch teaser",
    stage: "Awaiting approval",
    due: "18 Apr 2026",
    value: 55000,
  },
  {
    brand: "Wow Skin Science",
    initials: "WO",
    title: "Onion oil deep-dive — long-form Reel",
    stage: "Brief signed",
    due: "25 Apr 2026",
    value: 38000,
  },
];

export const pendingApplications = [
  { brand: "Minimalist", title: "Niacinamide 10% — explainer Reel", appliedOn: "2 days ago", status: "Shortlisted" },
  { brand: "Boat", title: "Airdopes 311 Pro — campus drop", appliedOn: "4 days ago", status: "Under review" },
  { brand: "Swiggy Instamart", title: "10-min haul series", appliedOn: "1 week ago", status: "Awaiting brief" },
  { brand: "Blinkit", title: "Midnight essentials Reel", appliedOn: "1 week ago", status: "Under review" },
];

export type PaymentStatus = "Pending" | "In Escrow" | "Released" | "Completed";

export const pendingPayments: {
  brand: string;
  campaign: string;
  amount: number;
  status: PaymentStatus;
  eta: string;
  invoice: string;
}[] = [
  { brand: "Mamaearth", campaign: "Ubtan Reel #2", amount: 32000, status: "In Escrow", eta: "Releases 14 Apr 2026", invoice: "INV-2026-0184" },
  { brand: "Plum Goodness", campaign: "Bodycare series", amount: 42000, status: "Pending", eta: "Awaiting brand approval", invoice: "INV-2026-0177" },
  { brand: "Nykaa", campaign: "Festive edit Reel", amount: 58000, status: "Released", eta: "Credited 28 Mar 2026", invoice: "INV-2026-0162" },
  { brand: "boAt", campaign: "Affiliate — March", amount: 14200, status: "Completed", eta: "Settled 22 Mar 2026", invoice: "INV-2026-0155" },
];

// --- Brand-side data ---

export const brandActiveCampaigns = [
  { title: "Ubtan Face Wash — Gen Z push", stage: "Live", creators: 12, spend: 540000, progress: 68 },
  { title: "Holi Glow Edit (Nykaa co-pitch)", stage: "Sourcing", creators: 4, spend: 86000, progress: 22 },
  { title: "Mamaearth × Tier 2 creators", stage: "Live", creators: 18, spend: 720000, progress: 54 },
];

// Creators surfaced after MatchIQ analysis for a brand brief.
export interface CreatorMatch {
  id: string;
  name: string;
  handle: string;
  city: string;
  followers: string;
  engagement: string;
  niche: string;
  language: string;
  rate: number; // per Reel, INR
  budgetFit: "Inside budget" | "Slight stretch" | "Below budget";
  reliability: number; // 0–100
  responseTime: string;
  completion: number; // %
  verified: boolean;
  score: number;
  confidence: "High" | "Medium";
  reasons: string[];
  why: string;
}

export const creatorMatches: CreatorMatch[] = [
  {
    id: "c-001",
    name: "Riya Sharma",
    handle: "@riya.glows",
    city: "Mumbai",
    followers: "412K",
    engagement: "7.4%",
    niche: "Skincare · Gen Z lifestyle",
    language: "English · Hinglish",
    rate: 22000,
    budgetFit: "Inside budget",
    reliability: 98,
    responseTime: "< 4 hrs",
    completion: 96,
    verified: true,
    score: 96,
    confidence: "High",
    reasons: [
      "Audience 89% female, 18–26, Tier 1 India",
      "Skincare is her #1 niche (12 posts in 90d)",
      "Reel rate (₹22k) sits inside posted range",
      "Past D2C beauty deals averaged 7.8% ER",
    ],
    why:
      "Riya consistently outperforms benchmarks for D2C skincare in the 18–26 metro segment. Her audience composition mirrors your buyer persona almost 1:1, and she has a clean track record with 4 comparable brands.",
  },
  {
    id: "c-002",
    name: "Aarav Mehta",
    handle: "@aarav.finbites",
    city: "Bengaluru",
    followers: "228K",
    engagement: "9.1%",
    niche: "Personal finance · Gen Z",
    language: "English · Hindi",
    rate: 28000,
    budgetFit: "Inside budget",
    reliability: 95,
    responseTime: "< 6 hrs",
    completion: 94,
    verified: true,
    score: 92,
    confidence: "High",
    reasons: [
      "Cross-over: finance + Gen Z lifestyle audience",
      "Highest engagement rate in your shortlist",
      "Always-on UPI/wallet content fits affiliate",
      "Closed 2 prior D2C campaigns at >9% ER",
    ],
    why:
      "Aarav's audience is unusually receptive to lifestyle product drops — his finance angle drives intent without feeling promotional. Strong second pick if you want a male-skewed Gen Z lever.",
  },
  {
    id: "c-003",
    name: "Sneha Iyer",
    handle: "@sneha.kitchen",
    city: "Chennai",
    followers: "684K",
    engagement: "5.8%",
    niche: "Food · Regional (Tamil + English)",
    language: "Tamil · English",
    rate: 45000,
    budgetFit: "Slight stretch",
    reliability: 92,
    responseTime: "< 12 hrs",
    completion: 91,
    verified: true,
    score: 88,
    confidence: "Medium",
    reasons: [
      "Largest reach in your shortlist",
      "71% female audience, strong South India presence",
      "Slightly above posted per-Reel range",
      "Regional language opens Tier 2/3 markets",
    ],
    why:
      "If you want regional South India depth in this campaign, Sneha is the cleanest lever. Slight rate stretch is offset by audience size and Tamil-language pickup.",
  },
  {
    id: "c-004",
    name: "Ishaan Verma",
    handle: "@ishaan.upsc",
    city: "Delhi",
    followers: "164K",
    engagement: "8.3%",
    niche: "UPSC · Study with me",
    language: "Hindi · English",
    rate: 16000,
    budgetFit: "Below budget",
    reliability: 90,
    responseTime: "< 8 hrs",
    completion: 89,
    verified: true,
    score: 85,
    confidence: "Medium",
    reasons: [
      "Highly engaged 19–24 Hindi-belt audience",
      "Cost-efficient — frees budget for more creators",
      "Adjacent niche; explainer formats convert",
      "First-time category for you (test investment)",
    ],
    why:
      "Ishaan brings a Hindi-belt, study-focused audience that hasn't been over-targeted by D2C beauty yet. Low rate makes him a smart distribution bet alongside your hero creators.",
  },
];

// Indian creator search / marketplace seed
export const creatorMarket = [
  ...creatorMatches.map((c) => ({
    id: c.id,
    name: c.name,
    handle: c.handle,
    city: c.city,
    niche: c.niche,
    followers: c.followers,
    engagement: c.engagement,
    rate: c.rate,
    language: c.language,
    verified: c.verified,
  })),
  {
    id: "c-005",
    name: "Kavya Reddy",
    handle: "@kavya.codes",
    city: "Hyderabad",
    niche: "Tech · Career",
    followers: "98K",
    engagement: "6.9%",
    rate: 14000,
    language: "Telugu · English",
    verified: true,
  },
  {
    id: "c-006",
    name: "Rohan Das",
    handle: "@rohan.rofl",
    city: "Kolkata",
    niche: "Comedy · Bengali",
    followers: "356K",
    engagement: "8.7%",
    rate: 30000,
    language: "Bengali · Hindi",
    verified: true,
  },
  {
    id: "c-007",
    name: "Meher Kaur",
    handle: "@meher.fits",
    city: "Chandigarh",
    niche: "Fashion · College lifestyle",
    followers: "212K",
    engagement: "7.1%",
    rate: 19000,
    language: "Punjabi · Hindi · English",
    verified: false,
  },
  {
    id: "c-008",
    name: "Tanvi Joshi",
    handle: "@tanvi.tales",
    city: "Pune",
    niche: "Skincare · Affordable",
    followers: "78K",
    engagement: "9.4%",
    rate: 9000,
    language: "Marathi · English",
    verified: true,
  },
];

// Brand workspace identity (used on brand dashboard etc.)
export const brandProfile = {
  name: "Mamaearth",
  initials: "ME",
  manager: "Maya Kapoor",
  verified: true,
  paymentReliability: 97,
  avgPaymentDays: 9,
  pastCollabs: 184,
};

// Creator workspace identity
export const creatorProfile = {
  name: "Riya Sharma",
  handle: "@riya.glows",
  city: "Mumbai",
  niches: "Skincare · Lifestyle · Gen Z",
  verified: true,
  reliability: 98,
  responseTime: "< 4 hrs",
  completion: 96,
};
