import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Error } from "./pages";

import { PublicRoutesLayout } from "./Layout/PublicRoutesLayout";
import PublicRoute from "./components/PublicRoute";
import { ComingSoon } from "./components";

const router = createBrowserRouter([
  {
    element: (
      <PublicRoute>
        <PublicRoutesLayout />
      </PublicRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <ComingSoon page="Login Page" />,
        errorElement: <Error />,
      },
      {
        path: "/services",
        element: <ComingSoon page="Services Page" />,
        errorElement: <Error />,
      },
      {
        path: "/product",
        element: <ComingSoon page="products Page" />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <ComingSoon page="About Page" />,
        errorElement: <Error />,
      },
      {
        path: "/careers",
        element: <ComingSoon page="Careers Page" />,
        errorElement: <Error />,
      },
      {
        path: "/blog",
        element: <ComingSoon page="Blog Page" />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <>{<RouterProvider router={router} />}</>;
}