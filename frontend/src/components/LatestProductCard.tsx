// import { useState } from "react";
// import type { LatestProduct } from "../data/products";
// import { Button } from "./Button";
// import { useOutletContext } from "react-router-dom";
// import type { Product } from "./ProductCard";

// interface LatestProductCardProps {
//   product: Product;
// }

// export function LatestProductCard({ product }: LatestProductCardProps) {
//   const [isCardHovered, setIsCardHovered] = useState(false);

//   const buttonColumnClass = isCardHovered
//     ? "absolute flex flex-col gap-4 bottom-2 left-2 visible"
//     : "absolute flex flex-col gap-4 bottom-2 left-2 invisible";

//   const { addNewCartProduct } = useOutletContext();
//   return (
//     <div
//       onMouseEnter={() => setIsCardHovered(true)}
//       onMouseLeave={() => {
//         setIsCardHovered(false);
//       }}
//       className="w-70 h-60"
//     >
//       <div className="w-full h-full relative">
//         <div className={buttonColumnClass}>
//           <Button
//             className=""
//             onClick={() => {
//               addNewCartProduct(product);
//             }}
//           >
//             <img
//               className="w-6"
//               src=".././images/cart_icon.webp"
//               alt="Cart Icon"
//             />
//           </Button>
//           <Button className="" onClick={() => {}}>
//             <img
//               className="w-6"
//               src=".././images/love_heart_icon.webp"
//               alt="Cart Icon"
//             />
//           </Button>
//         </div>
//         <img
//           className="h-full w-full"
//           src={product.image_url}
//           alt="Image d'un produit"
//         />
//       </div>
//       <div className="mt-1.5 flex justify-between pr-1.5">
//         <p className="underline underline-offset-8 decoration-gray-300 decoration-2 font-medium text-blue-950">
//           {product.name}
//         </p>
//         <div className="flex gap-3">
//           <span className="font-medium text-blue-950">
//             ${product.promoPrice}
//           </span>
//           <span className="text-pink-500 line-through font-medium">
//             ${product.basePrice}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
