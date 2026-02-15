import { Outlet } from "react-router-dom";
import { DashboardSideBar } from "../components/DashboardSideBar";

export function Dashboard() {
  return (
    <div className="flex">
      <DashboardSideBar />
      <div className="w-[80%]">
        <h1 className="text-4xl text-blue-950 font-bold text-center mt-4">
          DASHBOARD
        </h1>
        <Outlet />
      </div>
    </div>
  );
}
