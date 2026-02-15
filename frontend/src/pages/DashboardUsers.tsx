import { useEffect } from "react";
import { verifyAdminToken } from "../utils/verifyAdminToken";
import { useNavigate } from "react-router-dom";

export function DashboardUsers() {
  const navigate = useNavigate();
  useEffect(() => {
    verifyAdminToken(navigate);
  });
  return <h1>Dashboard Users</h1>;
}
