import { HomeLayout } from "../layouts/HomeLayout";
import { createBrowserRouter } from "react-router-dom"
import { Clients } from "../pages/clients";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children:[
            {
                path: "/clientes", element:<Clients />
            }
        ],
    },
]);
