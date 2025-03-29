import { productImgs } from "contains/fakeData";
import productVariantImg2 from "images/products/v2.jpg";
import productVariantImg3 from "images/products/v3.jpg";
import productVariantImg4 from "images/products/v4.jpg";
import productVariantImg5 from "images/products/v5.jpg";
import productVariantImg6 from "images/products/v6.jpg";
//
import productSport1 from "images/products/sport-1.png";
import productSport2 from "images/products/sport-2.png";
import productSport3 from "images/products/sport-3.png";
import productSport4 from "images/products/sport-4.png";
import productSport5 from "images/products/sport-5.png";
import productSport6 from "images/products/sport-6.png";
import productSport7 from "images/products/sport-7.png";
import productSport8 from "images/products/sport-8.png";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: string;
  color?: string;
  featuredImage: string;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  tags: string[];
  link: "/product-detail/";
  variants?: ProductVariant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
}

const DEMO_VARIANTS: ProductVariant[] = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[1],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 2,
    name: 'A1 Mini Board',
    description: ".",
    price: 8805,
    image: productImgs[56],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
  },
  {
    id: 2,
    name: 'AMS Active Extrusion Wheel Assembly',
    description: "",
    price: 1920,
    image: productImgs[57],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
  },
  {
    id: 2,
    name: 'AMS Feeding Unit ',  
    description: " .",
    price: 3200,
    image: productImgs[58],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
  },
  
  {
    id: 2,
    name: 'AMS Internal Hub Motor',
    description: ".",
    price: 8803,
    image: productImgs[60],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
  },
  {
    id: 2,
    name: 'AMS Internal Hub Motor',
    description: "",
    price: 5602,
    image: productImgs[61],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
  },
  {
    id: 2,
    name: 'AMS Mainboard V2',
    description: "",
    price: 8803,
    image: productImgs[62],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
  },
  
  {
    id: 1,
    name: "Dessicant for AMS",
    description: " ",
    price: 640,
    image: productImgs[63],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
  },

  
 {
    id: 2,
    name: 'Extruder Unit',
    description: " ",
    price: 5122,
    image: productImgs[64],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
  },
  {
    id: 6,
    name: "Filament Buffer",
    description: " ",
    price: 4000,
    image: productImgs[65],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    link: "/product-detail/",
  },
  {
    id: 7,
    name: "Heatbed Signal Cable",
    description: "",
    price: 960,
    image: productImgs[66],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 7,
    name: "Heatbed Unit V3",
    description: "",
    price: 19050,
    image: productImgs[67],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 7,
    name: "PTFE Tube",
    description: "",
    price: 640,
    image: productImgs[68],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 8,
    name: "PTFE Tube - AMS Hub",
    description: "Ultra High Heat Resistant",
    price: 1600,
    image: productImgs[69],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    link: "/product-detail/",
    status: "limited edition",
  },
  {
    id: 8,
    name: "PTFE Tube - AMS Internal",
    description: "Ultra High Heat Resistant",
    price: 640,
    image: productImgs[70],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    link: "/product-detail/",
    status: "limited edition",
  },
  {
    id: 8,
    name: "TH Board Set V9 (Dual Red Laser)",
    description: "Ultra High Heat Resistant",
    price: 7843,
    image: productImgs[71],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    link: "/product-detail/",
    status: "limited edition",
  },

];

export const SPORT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mastermind Toys",
    description: "Brown cockroach wings",
    price: 74,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
  },
  {
    id: 2,
    name: "Variety of PIE Plates",
    description: "Effortless Print Removal",
    price: 4500,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variantType: "color",
    status: "50% Discount",
  },
  {
    id: 3,
    name: "Tee Ball Beanie",
    description: "New blue aqua",
    price: 132,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 4,
    name: "Rubber Table Tennis",
    description: "Dark pink 2023",
    price: 28,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
  },
  {
    id: 5,
    name: "Classic Blue Rugby",
    description: "Perfect mint green",
    price: 42,
    image: productSport5,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
  },
  {
    id: 6,
    name: "PLA Glow",
    description: "Unique Glow in Low Light Conditions",
    price: 5000,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    link: "/product-detail/",
  },
  {
    id: 7,
    name: "Tabletop Football ",
    description: "Matte black",
    price: 12,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
  },
  {
    id: 8,
    name: "Pvc Catching Toy",
    description: "Cream pink",
    price: 145,
    image: productSport8,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
  },
];
