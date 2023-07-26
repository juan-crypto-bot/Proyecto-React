import { Layout } from "./Layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import JobsPage from "./Pages/JobsPage/Jobs.page";
import Error404 from "./Pages/Error404";
import { JobDetailPage } from "./Pages/DetailPage/JobDetail.page";
import { FavProvider } from "./Context/FavContext";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <JobsPage />,
        },
        {
          path: "/:idJob",
          element: <JobDetailPage />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
