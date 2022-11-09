import type { PublicImage, Seller } from "@/core/models/seller";
import type { Product } from "@/core/models/product";

export const sellers: Seller[] = [
  {
    id: 1,
    identification: "1.000.12",
    name: "Marcos",
    status: "active",
  },
  {
    id: 2,
    identification: "1.111.12",
    name: "Juan",
    status: "active",
  },
  {
    id: 3,
    identification: "1.235.82",
    name: "Rosa",
    status: "active",
  },
  {
    id: 4,
    identification: "1.333.12",
    name: "Miguel",
    status: "active",
  },
  {
    id: 5,
    identification: "2.217.82",
    name: "Juan matias",
    status: "active",
  },
  {
    id: 6,
    identification: "5.241.10",
    name: "Gerardo Zuckerberg",
    status: "active",
  },
];

export const images: PublicImage[] = [
  {
    image:
      "https://images.unsplash.com/photo-1667716011862-630916a74d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1667853005094-085cd3671c68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1667853005377-9badf481e5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1667842474031-8a0ba604df48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1667912969608-b830b80a49da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1667860919782-5a057220ec7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

export const products: Product[] = [
  {
    id: 1,
    image:
      "https://i.linio.com/p/1cf4c2e8e7715f87559d9a1b3cd6bfa8-catalog.webp",
    name: "Tableta gráfica",
    price: 124,
  },
  {
    id: 2,
    image:
      "https://i.linio.com/p/1cf4c2e8e7715f87559d9a1b3cd6bfa8-catalog.webp",
    name: "Cámara web HD 720p",
    price: 151,
  },
  {
    id: 3,
    image:
      "https://i.linio.com/p/4d539ae35bae24f2f74893e32bf0b853-catalog.webp",
    name: "Mouse inalambrico",
    price: 16,
  },
  {
    id: 4,
    image:
      "https://i.linio.com/p/4d539ae35bae24f2f74893e32bf0b853-catalog.webp",
    name: "Estabilizador FORZA",
    price: 58,
  },
  {
    id: 5,
    image:
      "https://i.linio.com/p/9dcd535d4ea37509e5470437a55eb5c9-catalog.webp",
    name: "Teclado mécanico MINI",
    price: 212,
  },
  {
    id: 6,
    image:
      "https://i.linio.com/p/ecc67ea2da20d0c00f6082b99bd3ed64-catalog.webp",
    name: "Mesa plegable portátil",
    price: 23,
  },
  {
    id: 7,
    image:
      "https://i.linio.com/p/7d7f604618a2b2e1de7559916efb8285-catalog.webp",
    name: "Audifonos Gamer",
    price: 89,
  },
];