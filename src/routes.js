import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import App from "./App";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Favorites from "./pages/profile/Favorites";
import Account from "./pages/profile/Account";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'detail/:id',
        Component: DetailPage
      },
      {
        path: 'profile',
        Component: Profile,
        children: [
          {
            index: true,
            Component: Account
          },
          {
            path: 'fav',
            Component: Favorites
          }
        ]
      }
    ],
  },
  {
    path: '*',
    Component: NotFound
  }
  
])