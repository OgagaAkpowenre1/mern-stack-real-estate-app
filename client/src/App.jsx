import HomePage from "./pages/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/listPage";
import {Layout, RequireAuth} from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import SinglePage from "./pages/singlePage/singlePage";
import Profile from "./pages/profile/Profile";
import NewPostPage from "./pages/newPostPage/NewPostPage";
import ProfileUpdate from "./pages/profileUpdate/ProfileUpdate";
import Register from "./pages/register/Register";
import { singlePageLoader } from "./lib/loaders";

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
          element: <SinglePage />,
          loader: singlePageLoader
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          // loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    }
  ])

  return (

    <RouterProvider router={router}/>
  );
}

export default App;
