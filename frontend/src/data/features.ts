export interface Feature {
  id: number;
  name: string;
  description: string;
  logo: {
    url: string;
    alt: string;
  };
}

export const features: Feature[] = [
  {
    id: 1,
    name: "Free delivery",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    logo: {
      url: ".././images/delivery-truck.webp",
      alt: "Icone d'un camion de livraison",
    },
  },
  {
    id: 2,
    name: "100% Cash back",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    logo: {
      url: ".././images/web_ui_cashback.png",
      alt: "Icone cashback",
    },
  },
  {
    id: 3,
    name: "Quality Product",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    logo: {
      url: ".././images/quality-award_icon.webp",
      alt: "Icone quaility",
    },
  },
  {
    id: 4,
    name: "24/7 Support",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    logo: {
      url: ".././images/customer_support_help_.webp",
      alt: "Icone support",
    },
  },
];
