import { OrderRow } from "./OrderRow";

export function OrderRowContainer({ orders }) {
  return (
    <div className="px-5 pt-5">
      {orders.map((order) => {
        return <OrderRow order={order} />;
      })}
    </div>
  );
}
