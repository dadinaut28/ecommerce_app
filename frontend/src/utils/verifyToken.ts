import type { NavigateFunction } from "react-router-dom";
import { apiUrl } from "../queries";

export async function verifyToken(
  navigate: NavigateFunction,
  showConnectMessage: () => void,
) {
  try {
    const token = localStorage.getItem("ecommerce_jwt_token");
    if (!token) {
      showConnectMessage();
      return navigate("/login");
    }

    const response = await fetch(`${apiUrl}/api/verify-token`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (response.status !== 200) {
      showConnectMessage();
      return navigate("/login");
    }

    const data = await response.json();
    return data.payload;
  } catch (err) {
    console.log(err);
  }
}
