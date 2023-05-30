import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../../../feature/catalog/about/AboutPage";
import Catalog from "../../../feature/catalog/Catalog";
import ContactPage from "../../../feature/catalog/contact/ContactPage";
import HomePage from "../../../feature/catalog/Home/HomePage";
import ProductDetails from "../../../feature/catalog/ProductDetails";
import App from "../App";

export const router = createBrowserRouter([
    {  
        path: '/',
        element:<App/>,
        children: [
            {path: '', element: <HomePage/> },
            {path: 'catalog', element: <Catalog/> },
            {path: 'catalog/:id', element: <ProductDetails/> },
            {path: 'about', element: <AboutPage/> },
            {path: 'contact', element: <ContactPage/> },
        ]

    }

])