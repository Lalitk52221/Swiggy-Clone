import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Help from "./Components/Pages/Help.jsx";
import Search from "./Components/Pages/Search.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import Logout from "./Components/Pages/Logout.jsx";
import Home from "./Components/Pages/Home.jsx";
import Restaurant from "./Components/Pages/Restaurant.jsx";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/Store.js";
import AddressPage from "./Components/Pages/AddressPage.jsx";

const createRouter = createHashRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "/address",
        element: <AddressPage/>,
      }
    ],
    errorElement: (
      <h1 className="text-3xl text-center font-bold">Page Not Found</h1>
    ),
  },
]
// {
//   basename: "/Swiggy-Clone", // Replace with your GitHub repository name
// }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={createRouter}></RouterProvider>
  </StrictMode>
);
