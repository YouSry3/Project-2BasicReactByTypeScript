import type { ICard } from "../Interfaces/ICard";
import { v4 as uuid } from "uuid";

export const ProductsList: ICard[] = [
  {
    id: uuid() ,
    title: "Nike Shoes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "350",
    colors: [
      "#A31ACB", "#FF6E31", "#3C2A21", "#CB1C8D", "#645CBB", "#FF0032"
    ],
    category: {
      name: "Nike",
      imageURL:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid() ,
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy...",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid() ,
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy...",
    imageURL:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid() ,
    title: "Casual Men Clothes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    price: "1500",
    colors: [
      "#820000", "#13005A", "#1F8A70", "#84D2C5"],
    category: {
      name: "PC Desktop",
      imageURL:
        "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
  },
  {
    id: uuid() ,
    title: "Nike Shoes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "350",
    colors: [
      "#A31ACB",  "#FF0032",
      "#820000", "#13005A", "#1F8A70", "#84D2C5",
    ],
    category: {
      name: "Nike",
      imageURL:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid() ,
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy...",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid() ,
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy...",
    imageURL:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid() ,
    title: "Casual Men Clothes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    price: "1500",
    colors: ["#FF6E31", "#3C2A21", "#CB1C8D", "#645CBB",],
    category: {
      name: "PC Desktop",
      imageURL:
        "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
  },
];
