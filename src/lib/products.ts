export type Product = {
  id: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription?: string;
  image: string;
  formKey: string;
  featured?: boolean;
  category: "skincare" | "haircare" | "tools" | "gifts";
  priceLabel?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "rose-water",
    name: "Rose Water",
    shortName: "Rose Water",
    price: 12.99,
    description:
      "Pure rose water elixir. Helps cleanse, hydrate, and refresh your skin, eliminating blackheads and tightening pores.",
    longDescription:
      "Derived from rose petals through a distillation process. Effectively cleanses the skin, removing impurities, dirt, and excess oil while tightening pores.",
    image:
      "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/cfae1207-ad6d-4aa7-83ed-911d393cb33e/rose+water.jpg",
    formKey: "Qty: Rose Water",
    featured: true,
    category: "skincare",
  },
  {
    id: "rosemary-water",
    name: "Rosemary Water",
    shortName: "Rosemary Water",
    price: 19.99,
    originalPrice: 25.99,
    description:
      "Rich in essential nutrients to nourish and hydrate. Stimulates hair follicles and improves scalp circulation naturally.",
    longDescription:
      "Derived from the infusion of rosemary leaves, offering potential benefits for promoting hair growth and improving overall scalp health.",
    image:
      "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/6cbf4dbf-1b0c-4d0f-9852-722c34a02492/rose+mary+water.JPG",
    formKey: "Qty: Rosemary Water",
    featured: true,
    category: "haircare",
    priceLabel: "From ",
  },
  {
    id: "bundle",
    name: "Rose Water with Gua Sha",
    shortName: "Rose + Gua Sha",
    price: 15.99,
    description:
      "The ultimate botanical skincare bundle. Pair our deeply hydrating rose water with the therapeutic benefits of the Gua Sha tool.",
    image:
      "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/1712705536618-7XFXUQMZRB7MFXUGAAOU/gua+sha.JPG",
    formKey: "Qty: Bundle",
    featured: true,
    category: "skincare",
  },
  {
    id: "gua-sha",
    name: "Gua Sha",
    shortName: "Gua Sha",
    price: 4.99,
    originalPrice: 10.99,
    description:
      "A versatile practice deeply rooted in traditional Chinese medicine, offering both therapeutic and cosmetic benefits for the body and skin.",
    image:
      "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/1712706187034-FJVALTU7GESJ36ANUQ0I/gua+sha.JPG",
    formKey: "Qty: Gua Sha",
    category: "tools",
  },
  {
    id: "gift-cards",
    name: "Gift Cards",
    shortName: "Gift Cards",
    price: 25,
    description:
      "Give the gift of natural beauty and wellness. Treat your loved ones to the rejuvenating benefits of our botanical remedies.",
    longDescription:
      "Purchase gift cards for loved ones. The perfect way to share the gift of natural, botanical beauty and wellness.",
    image:
      "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/1712030839199-CH87T5G9QE59MURJYW69/gift+cards+rosemary.JPG",
    formKey: "Gift Card Interest",
    featured: true,
    category: "gifts",
    priceLabel: "From ",
  },
];

/** Products available for quantity selection in the order form */
export const ORDERABLE = PRODUCTS.filter((p) => p.id !== "gift-cards");

export const FEATURED = PRODUCTS.filter((p) => p.featured);

export const IMAGES = {
  hero: "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/1712014778443-IKG4I8127RIBT88MUQ74/image-asset.jpeg",
  banner:
    "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/c6a5a4f6-4f65-478c-bc2e-60d73d197623/rosemaryland+bottle+edit.JPG",
  story:
    "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/1712706723470-LMDYO3VD8AA3BWSA7Y0A/image-asset.jpeg",
  appointments:
    "https://images.squarespace-cdn.com/content/v1/660b3da749af8d6bcb3556bf/1712216871447-0U9EUF1MJ7U19H6B49I1/image-asset.jpeg",
} as const;

export const FAQ = [
  {
    q: "How do I place an order?",
    a: "Use the order form on the home page to select quantities of Rose Water, Rosemary Water, the Rose + Gua Sha bundle, or a Gua Sha tool. We’ll email you right away to fulfill your order.",
  },
  {
    q: "Where are you located?",
    a: "Professional haircare appointments are available in Pasadena and Victorville, California. Botanical products ship after your order is confirmed by email.",
  },
  {
    q: "What makes your botanicals different?",
    a: "We meticulously source organic roses and rosemary, then use a gentle distillation process that preserves antioxidants, vitamins, and minerals for maximum skin and hair benefits.",
  },
  {
    q: "Can I buy a gift card?",
    a: "Yes. Gift cards are available from $25–$100. Check the gift card option on the order form and note your preferred amount in the message field.",
  },
  {
    q: "How do I book a hair appointment?",
    a: "Visit the Haircare page and use the scheduling calendar to choose a service, date, and time that works for you.",
  },
] as const;

export const APPOINTMENT_FAQ = [
  {
    q: "Why are regular haircuts important?",
    a: "Haircuts are essential for maintaining healthy hair. Trimming split ends and removing damaged sections prevent further breakage and promote overall hair health—keeping your hair strong, vibrant, and manageable.",
  },
  {
    q: "Where do you offer appointments?",
    a: "We are a professional hair stylist based in Pasadena and Victorville, California. Choose a time that works for you in the booking calendar below.",
  },
  {
    q: "What should I expect?",
    a: "Indulge in premium services tailored to your specific needs. Every appointment is focused on transformation—where every strand tells a story of beauty and rejuvenation.",
  },
] as const;
