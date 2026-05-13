import type { MenuItem, Review, DriveThruStep } from "@/types";

export const BUSINESS = {
  name: "Gineer Tasty Grills",
  tagline: "Top Notch Sharwama — Compared to None in Nsukka",
  rating: 3.4,
  reviewCount: 5,
  priceRange: "₦2,000 – ₦4,000",
  phone: "0701 930 8377",
  phoneTel: "+2347019308377",
  whatsapp: "2347019308377",
  address: {
    street: "University of Nigeria",
    area: "Ihe, Nsukka",
    postalCode: "410001",
    state: "Enugu",
    plusCode: "VC87+MW Nsukka",
  },
  coordinates: {
    lat: 6.8697,
    lng: 7.4061,
  },
  openHour: 15,
} as const;

// Real Unsplash food images
export const IMAGES = {
  heroBg:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80",
  heroFood:
    "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
  sharwama:
    "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
  grills:
    "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",
  chicken:
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=80",
  suya: "https://images.unsplash.com/photo-1544025162-d76538950491?w=600&q=80",
  fish: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80",
  mixedGrill:
    "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
  fries:
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
  loadedFries:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  coleslaw:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  drinks:
    "https://images.unsplash.com/photo-1543253687-c931c8e01820?w=600&q=80",
  restaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  campus:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
  drivethru:
    "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80",
} as const;

export const MENU_ITEMS: MenuItem[] = [
  // Sharwama
  {
    id: "sw-1",
    name: "Top Notch Sharwama",
    description:
      '"Best in Nsukka" – Signature chicken sharwama with special sauce',
    price: 2500,
    category: "sharwama",
    emoji: "🌯",
    image: IMAGES.sharwama,
    popular: true,
    spicyLevel: 2,
  },
  {
    id: "sw-2",
    name: "Beef Sharwama",
    description: "Tender beef with fresh veggies and our secret blend",
    price: 3000,
    category: "sharwama",
    emoji: "🌯",
    image: IMAGES.sharwama,
    spicyLevel: 2,
  },
  {
    id: "sw-3",
    name: "Jumbo Sharwama",
    description: "Extra large serving with double meat, extra sauce",
    price: 4000,
    category: "sharwama",
    emoji: "🌯",
    image: IMAGES.sharwama,
    popular: true,
    spicyLevel: 2,
  },
  {
    id: "sw-4",
    name: "Mini Sharwama",
    description: "Perfect for a quick snack between lectures",
    price: 1800,
    category: "sharwama",
    emoji: "🌯",
    image: IMAGES.sharwama,
    spicyLevel: 1,
  },
  // Grills
  {
    id: "gr-1",
    name: "Grilled Chicken",
    description: "Perfectly seasoned, flame-grilled to perfection",
    price: 3500,
    category: "grills",
    emoji: "🍗",
    image: IMAGES.chicken,
    spicyLevel: 1,
  },
  {
    id: "gr-2",
    name: "Suya Special",
    description: "Traditional Nigerian spicy grilled meat skewers",
    price: 2500,
    category: "grills",
    emoji: "🥩",
    image: IMAGES.suya,
    popular: true,
    spicyLevel: 3,
  },
  {
    id: "gr-3",
    name: "Grilled Fish",
    description: "Fresh catch with pepper seasoning and herbs",
    price: 3000,
    category: "grills",
    emoji: "🐟",
    image: IMAGES.fish,
    spicyLevel: 2,
  },
  {
    id: "gr-4",
    name: "Mixed Grill Platter",
    description: "Chicken + suya + fish for the real grill lover",
    price: 4000,
    category: "grills",
    emoji: "🍖",
    image: IMAGES.mixedGrill,
    popular: true,
    spicyLevel: 2,
  },
  // Sides
  {
    id: "sd-1",
    name: "French Fries",
    description: "Crispy golden fries, perfectly seasoned",
    price: 1000,
    category: "sides",
    emoji: "🍟",
    image: IMAGES.fries,
  },
  {
    id: "sd-2",
    name: "Loaded Fries",
    description: "Fries topped with chicken, cheese & special sauce",
    price: 2000,
    category: "sides",
    emoji: "🍟",
    image: IMAGES.loadedFries,
    popular: true,
  },
  {
    id: "sd-3",
    name: "Coleslaw",
    description: "Fresh creamy coleslaw side",
    price: 500,
    category: "sides",
    emoji: "🥗",
    image: IMAGES.coleslaw,
  },
  // Drinks
  {
    id: "dr-1",
    name: "Chilled Coke",
    description: "Ice-cold Coca-Cola — 35cl",
    price: 300,
    category: "drinks",
    emoji: "🥤",
    image: IMAGES.drinks,
  },
  {
    id: "dr-2",
    name: "Malt Drink",
    description: "Malta Guinness or Hi-Malt",
    price: 350,
    category: "drinks",
    emoji: "🍺",
    image: IMAGES.drinks,
  },
  {
    id: "dr-3",
    name: "Bottled Water",
    description: "Chilled Eva or Nestle 75cl",
    price: 200,
    category: "drinks",
    emoji: "💧",
    image: IMAGES.drinks,
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r-1",
    author: "toochiba xfactor",
    role: "Local Guide",
    rating: 5,
    date: "2 years ago",
    text: "I will give it a five star — their sharwama is top notch and compared to none here in Nsukka.",
    highlighted: true,
  },
  {
    id: "r-2",
    author: "UNN Engineering Student",
    rating: 4,
    date: "1 year ago",
    text: "The grilled chicken hits differently after a long day of classes. Great spot for a quick, satisfying bite on campus.",
  },
  {
    id: "r-3",
    author: "Campus Foodie",
    rating: 4,
    date: "8 months ago",
    text: "The drive-through is a huge blessing. Picked up sharwama between lectures — fast service, great taste every single time!",
  },
];

export const DRIVE_THRU_STEPS: DriveThruStep[] = [
  {
    step: 1,
    title: "Call Ahead",
    description: "Pre-order by phone: 0701 930 8377",
    emoji: "📞",
  },
  {
    step: 2,
    title: "Drive to UNN",
    description: "Head to University of Nigeria, Ihe, Nsukka",
    emoji: "🚗",
  },
  {
    step: 3,
    title: "Quick Pickup",
    description: "Collect your hot, fresh order in minutes",
    emoji: "⚡",
  },
  {
    step: 4,
    title: "Enjoy!",
    description: 'Taste what "top notch" really means',
    emoji: "😋",
  },
];

export const MENU_CATEGORIES = [
  { id: "sharwama" as const, label: "Sharwama", emoji: "🌯" },
  { id: "grills" as const, label: "Grills", emoji: "🔥" },
  { id: "sides" as const, label: "Sides", emoji: "🍟" },
  { id: "drinks" as const, label: "Drinks", emoji: "🥤" },
];
