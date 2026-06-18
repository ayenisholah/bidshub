export const DISCORD_URL = "https://discord.gg/sSDuypgJM";

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Profit Sharing Plan", href: "#profit-sharing" },
  { label: "API", href: "#api" },
  { label: "FAQ", href: "#faq" },
] as const;

export type PricingTier = {
  id: string;
  name: string;
  speedBps: number | null;
  price: string;
  period?: string;
  note?: string;
  popular?: boolean;
  isTicket?: boolean;
  ctaLabel: string;
  features: string[];
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "trial",
    name: "Trial",
    speedBps: 1,
    price: "Free",
    note: "3 days",
    isTicket: true,
    ctaLabel: "Contact us in Discord",
    features: ["1 wallet", "Trial access"],
  },
  {
    id: "standard",
    name: "Standard",
    speedBps: 30,
    price: "0.20 ETH",
    period: "/ month",
    ctaLabel: "Contact us in Discord",
    features: ["2 wallets", "100 tasks"],
  },
  {
    id: "pro",
    name: "Pro",
    speedBps: 60,
    price: "0.30 ETH",
    period: "/ month",
    ctaLabel: "Contact us in Discord",
    features: ["Unlimited wallets", "Unlimited tasks"],
  },
  {
    id: "ultra",
    name: "Ultra",
    speedBps: 100,
    price: "0.45 ETH",
    period: "/ month",
    popular: true,
    ctaLabel: "Contact us in Discord",
    features: ["Unlimited wallets", "Unlimited tasks"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    speedBps: 150,
    price: "0.65 ETH",
    period: "/ month",
    ctaLabel: "Contact us in Discord",
    features: ["Unlimited wallets", "Unlimited tasks"],
  },
  {
    id: "custom",
    name: "Custom Plan",
    speedBps: null,
    price: "Custom",
    isTicket: true,
    ctaLabel: "Open a ticket",
    features: [],
  },
];

export type PrepaidDiscount = { months: number; discount: number };
export const PREPAID_DISCOUNTS: PrepaidDiscount[] = [
  { months: 3, discount: 10 },
  { months: 6, discount: 20 },
  { months: 12, discount: 30 },
];

export type AddOn = { id: string; name: string; price: string; note?: string };
export const ADD_ONS: AddOn[] = [
  { id: "prefix", name: "Prefix removal", price: "0.05 ETH / month" },
  {
    id: "stealth",
    name: "Stealth mode",
    price: "0.05 ETH / month",
    note: "Hide your name from the leaderboard and flips section",
  },
];

export type Product = {
  id: string;
  name: string;
  status: "available" | "coming";
  description: string;
};
export const PRODUCTS: Product[] = [
  {
    id: "opensea-bidder",
    name: "OpenSea Bidder",
    status: "available",
    description:
      "A high-speed NFT bidding and counterbidding bot built for OpenSea.",
  },
  {
    id: "bidshub-api",
    name: "BidsHub API",
    status: "available",
    description:
      "API access to our infrastructure for users who want to connect BidsHub to their own custom bots and trading setups.",
  },
  {
    id: "lister",
    name: "Customizable OpenSea Lister",
    status: "coming",
    description:
      "A flexible listing tool designed to help users manage and automate NFT listings more efficiently.",
  },
  {
    id: "blur-bidder",
    name: "Blur Bidder",
    status: "coming",
    description:
      "Blur bidding support will be added soon as part of the BidsHub ecosystem.",
  },
];

export type HeroStat =
  | { type: "counter"; label: string; value: number; suffix: string }
  | { type: "text"; label: string; display: string };

export const HERO_STATS: HeroStat[] = [
  { type: "counter", label: "Bids / sec", value: 100, suffix: "+" },
  { type: "text", label: "Marketplaces", display: "OpenSea + Blur" },
  { type: "text", label: "Included tools", display: "Analyzer Tools" },
];

export const PROFIT_SPLIT = {
  minBidsHub: 20,
  maxBidsHub: 40,
  minUser: 60,
  maxUser: 80,
  factors: [
    "Collection price",
    "Volatility",
    "Liquidity",
    "Risk level",
    "Expected bidding volume",
  ],
};
