import App from "./App";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import type { RouteObject } from "react-router-dom";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Dashboard } from "./pages/Dashboard";
import { DashboardLogin } from "./pages/DashboardLogin";
import { DashboardProducts } from "./pages/DashboardProducts";
import { DashboardOrders } from "./pages/DashboardOrders";
import { DashboardUsers } from "./pages/DashboardUsers";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";
import { OrderDetails } from "./pages/OrderDetails";
import { NotFound } from "./pages/NotFound";
import { Payment } from "./pages/Payment";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardLogin />,
      },
      {
        path: "products",
        element: <DashboardProducts />,
      },
      {
        path: "orders",
        element: <DashboardOrders />,
      },
      {
        path: "users",
        element: <DashboardUsers />,
      },
    ],
  },
  {
    path: "dashboard/orders/:id",
    element: <OrderDetails />,
  },
];
