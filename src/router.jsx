import { createBrowserRouter } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import Favoritos from "./pages/favoritopage/FavoritoPage";
import Layout from "./pages/Layout";
import EmAlta from "./pages/emalta/EmAlta";

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
            },
            {
                path: "/emAlta",
                element: <EmAlta />
            }
        ]
    }
])