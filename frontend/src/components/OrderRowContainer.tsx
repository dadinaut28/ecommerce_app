import { OrderRow, type Order } from "./OrderRow";

export function OrderRowContainer({ orders }: { orders: Order[] }) {
  return (
    <div className="px-5 pt-5">
      {orders.map((order) => {
        return <OrderRow order={order} />;
      })}
    </div>
  );
}
