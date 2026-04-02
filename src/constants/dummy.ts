export const ART_WORKS = [
  {
    id: 1,
    title: "Karya Pertama",
    category: "Sketsa Wajah",
    image: "/images/art-1.jpeg",
  },
];

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6283844384983";
const WA_MESSAGE = encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Halo Kiky art, saya ingin memesan sketsa wajah.");

export const WHATSAPP_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
