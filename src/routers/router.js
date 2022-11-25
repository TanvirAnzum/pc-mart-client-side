import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyOrder from "../pages/MyOrder";
import Products from "../pages/Products";
import Register from "../pages/Register";
import DashBoardLayout from "../ui/DashBoardLayout";
import ErrorPage from "../ui/ErrorPage";
import Layout from "../ui/Layout";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:categoryId",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myOrder",
        element: <MyOrder />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);
