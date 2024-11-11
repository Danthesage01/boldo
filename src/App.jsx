import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Error } from "./pages";

import { PublicRoutesLayout } from "./layout/PublicRoutesLayout";
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
        path: "/products",
        element: <ComingSoon page="Products Page" />,
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
        path: "/blogs",
        element: <ComingSoon page="Blog Page" />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <>{<RouterProvider router={router} />}</>;
}
