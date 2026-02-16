export interface LatestProduct {
  id: number;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  basePrice: number;
  promoPrice: number;
}

export const products = [
  {
    id: 1,
    name: "Cantilever chair",
    code: "#RTY654",
    price: 29,
    image: {
      url: ".././images/close-up.jpg",
      alt: "Chair image",
    },
    description: "An awesome chair for sale !!!",
  },
  {
    id: 2,
    name: "Cantilever chair",
    code: "#RTY654",
    price: 29,
    image: {
      url: ".././images/2009.jpg",
      alt: "Chair image",
    },
    description: "An awesome chair for sale !!!",
  },
  {
    id: 3,
    name: "Cantilever chair",
    code: "#RTY654",
    price: 29,
    image: {
      url: ".././images/beautiful-shot.jpg",
      alt: "Chair image",
    },
    description: "An awesome chair for sale !!!",
  },
  {
    id: 4,
    name: "Cantilever chair",
    code: "#RTY654",
    price: 29,
    image: {
      url: ".././images/e5529.jpg",
      alt: "Chair image",
    },
    description: "An awesome chair for sale !!!",
  },
];

export const latestProducts: LatestProduct[] = [
  {
    id: 1,
    name: "Comfort handy craft",
    image: {
      url: ".././images/9507.jpg",
      alt: "",
    },
    basePrice: 30,
    promoPrice: 50,
  },
  {
    id: 2,
    name: "Comfort handy craft",
    image: {
      url: ".././images/preview.jpg",
      alt: "",
    },
    basePrice: 30,
    promoPrice: 50,
  },
  {
    id: 3,
    name: "Comfort handy craft",
    image: {
      url: ".././images/latest-5.jpg",
      alt: "",
    },
    basePrice: 30,
    promoPrice: 50,
  },
  {
    id: 4,
    name: "Comfort handy craft",
    image: {
      url: ".././images/latest-1.jpg",
      alt: "",
    },
    basePrice: 30,
    promoPrice: 50,
  },
  {
    id: 5,
    name: "Comfort handy craft",
    image: {
      url: ".././images/latest-2.jpg",
      alt: "",
    },
    basePrice: 30,
    promoPrice: 50,
  },
  {
    id: 6,
    name: "Comfort handy craft",
    image: {
      url: ".././images/latest-3.jpg",
      alt: "",
    },
    basePrice: 30,
    promoPrice: 50,
  },
];
