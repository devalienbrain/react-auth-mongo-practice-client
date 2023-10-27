import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyCart from "../Pages/MyCart/MyCart";
import BrandedCars from "../Pages/BrandedCars/BrandedCars";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/Home/Brands/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandedCars/:name",
        element: <BrandedCars></BrandedCars>,
        loader: () =>
          fetch(
            "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products"
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products"
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            {" "}
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/cart"
          ),
      },
    ],
  },
]);

export default routes;
