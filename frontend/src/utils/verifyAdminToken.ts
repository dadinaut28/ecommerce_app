import type { NavigateFunction } from "react-router-dom";
import { apiUrl } from "../queries";

export async function verifyAdminToken(navigate: NavigateFunction) {
  const token = localStorage.getItem("ecommerce_jwt_token");
  // When token is not present in localStorage
  if (!token) {
    return navigate("/");
  }

  const response = await fetch(`${apiUrl}/api/verify-token`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  // When token is not valid
  if (response.status !== 200) {
    return navigate("/");
  }

  const data = await response.json();
  const { userRole } = data.payload;

  // When user is not an admin
  if (userRole !== "admin") {
    return navigate("/");
  }
}
