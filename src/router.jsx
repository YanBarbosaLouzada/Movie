import { createBrowserRouter } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import Favoritos from "./pages/favoritopage/FavoritoPage";
import Layout from "./pages/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/favoritos",
                element: <Favoritos />
            }
        ]
    }
])