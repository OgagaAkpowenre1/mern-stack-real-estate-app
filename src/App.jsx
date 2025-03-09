import HomePage from "./pages/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import SinglePage from "./pages/singlePage/singlePage";
import Profile from "./pages/profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <Profile />
        },
      ]
    }
  ])

  return (

    <RouterProvider router={router}/>
  );
}

export default App;
