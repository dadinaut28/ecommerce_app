import { useEffect, useState } from "react";
import { verifyAdminToken } from "../utils/verifyAdminToken";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../queries";
import { OrderRowContainer } from "../components/OrderRowContainer";

export function DashboardOrders() {
  const navigate = useNavigate();
  // Verify token and automatically redirect to home page where user is not admin
  useEffect(() => {
    verifyAdminToken(navigate);
  });

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const orders = await getOrders();
      setOrders(orders);
    })();
  }, []);

  return (
    <div>
      <h1 className="text-center text-blue-950 font-bold pt-7 text-2xl">
        Commandes
      </h1>
      <OrderRowContainer orders={orders} />
    </div>
  );
}
