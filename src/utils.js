import { nanoid } from "nanoid";
import productOne from "./assets/image-product-1.jpg";
import productTwo from "./assets/image-product-2.jpg";
import productThree from "./assets/image-product-3.jpg";
import productFour from "./assets/image-product-4.jpg";

export const imageList = [
  { id: nanoid(), image: productOne },
  { id: nanoid(), image: productTwo },
  { id: nanoid(), image: productThree },
  { id: nanoid(), image: productFour },
];

export const navLinks = [
  { id: nanoid(), link: "collection" },
  { id: nanoid(), link: "men" },
  { id: nanoid(), link: "women" },
  { id: nanoid(), link: "about" },
  { id: nanoid(), link: "contact" },
];
