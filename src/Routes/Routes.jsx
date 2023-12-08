import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../Component/AddCoffee/AddCoffee";
import AllCoffee from "../Component/AllCoffee/AllCoffee";
import UpdateCoffee from "../Component/UpdateCoffee/UpdateCoffee";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: 'updateCoffee',
            element: <UpdateCoffee></UpdateCoffee>
        },
        {
          path: 'allCoffee',
          element: <AllCoffee></AllCoffee>,
          loader: () => fetch('http://localhost:5000/coffee')
        }
      ]
    },
  ]);