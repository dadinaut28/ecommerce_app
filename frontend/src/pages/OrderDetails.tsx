import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../queries";

export function OrderDetails() {
  const orderId = useParams().id;
  const [order, setOrder] = useState({});

  useEffect(() => {
    if (!orderId) return;
    (async () => {
      const order = await getOrder(orderId);
      console.log(order);
      setOrder(order);
    })();
  }, [orderId]);
  return (
    <div className="flex justify-center pt-16">
      <div>
        <h2 className="text-blue-950 font-bold text-2xl my-3">
          Détails de la commande:{" "}
        </h2>
        <p className="my-4 text-lg">
          <span className="text-blue-950 font-bold my-2 text-lg">
            Nom du client:
          </span>{" "}
          {order.userfirstname} {order.userlastname}
        </p>
        <p className="my-4 text-lg">
          <span className="text-blue-950 font-bold my-2 text-lg">
            Prix total de la commande:
          </span>{" "}
          ${order.total_price}
        </p>
        <p className="my-4 text-lg">
          <span className="text-blue-950 font-bold my-2 text-lg">
            Adresse de livraison
          </span>{" "}
          {order.shipping_address}
        </p>
        <p className="my-4 text-lg">
          <span className="text-blue-950 font-bold my-2 text-lg">
            Méthode de paiement:{" "}
          </span>{" "}
          {order.payment_method}
        </p>
        <p className="my-4 text-lg">
          <span className="text-blue-950 font-bold my-2 text-lg">
            Statut de la commande:
          </span>{" "}
          {order.status}
        </p>
      </div>
    </div>
  );
}
