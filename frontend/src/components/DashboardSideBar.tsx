import { Link } from "react-router-dom";

export function DashboardSideBar() {
  return (
    <aside className="w-[20%] h-screen border-r border-gray-200 flex flex-col pt-8 pl-5 gap-5">
      <Link to="/dashboard/products">Products</Link>
      <Link to="/dashboard/orders">Orders</Link>
      <Link to="/dashboard/users">Users</Link>
    </aside>
  );
}
