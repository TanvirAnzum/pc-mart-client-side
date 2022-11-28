import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import AllBuyers from "../pages/AllBuyers";
import AllSeller from "../pages/AllSeller";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyBuyers from "../pages/MyBuyers";
import MyOrder from "../pages/MyOrder";
import MyProducts from "../pages/MyProducts";
import Payment from "../pages/Payment";
import Products from "../pages/Products";
import Register from "../pages/Register";
import ReportedItem from "../pages/ReportedItem";
import DashBoardLayout from "../ui/DashBoardLayout";
import ErrorPage from "../ui/ErrorPage";
import Layout from "../ui/Layout";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
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
        path: "/blog",
        element: <Blog />,
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
        element: (
          <ProtectedRoute role="buyer">
            <MyOrder />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <ProtectedRoute role="seller">
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <ProtectedRoute role="seller">
            <MyProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/myBuyers",
        element: (
          <ProtectedRoute role="seller">
            <MyBuyers />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/allSeller",
        element: (
          <ProtectedRoute role="admin">
            <AllSeller />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <ProtectedRoute role="admin">
            <AllBuyers />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <ProtectedRoute role="admin">
            <ReportedItem />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
      },
    ],
  },
]);
