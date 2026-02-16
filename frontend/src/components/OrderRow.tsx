import { useNavigate } from "react-router-dom";

export interface Order {
  id: number;
  userfirstname: string;
  userlastname: string;
  total_price: number;
  shipping_address: string;
  status: string;
  payment_method: string;
}

export function OrderRow({ order }: { order: Order }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/dashboard/orders/${order.id}`);
      }}
      className="flex border border-gray-400 py-3 px-1.5 my-2.5 justify-between cursor-pointer"
    >
      <p className="text-blue-950 text-xl">
        {order.userfirstname} {order.userlastname}
      </p>
      <p className="text-blue-950 text-xl">${order.total_price}</p>
      <p className="text-blue-950 text-xl">{order.shipping_address}</p>
      <p className="text-blue-950 text-xl">{order.status}</p>
    </div>
  );
}
