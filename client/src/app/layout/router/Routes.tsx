import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../../../feature/catalog/about/AboutPage";
import BasketPage from "../../../feature/catalog/basket/BasketPage";
import Catalog from "../../../feature/catalog/Catalog";
import CheckoutPage from "../../../feature/catalog/checkout/CheckoutPage";
import ContactPage from "../../../feature/catalog/contact/ContactPage";
import HomePage from "../../../feature/catalog/Home/HomePage";
import ProductDetails from "../../../feature/catalog/ProductDetails";
import App from "../App";
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";

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
            {path: 'server-error', element: <ServerError/> },
            {path: 'not-found', element: <NotFound/> },
            {path: 'basket', element: <BasketPage/> },
            {path: 'checkout', element: <CheckoutPage/> },
            {path: '*', element: <Navigate replace to='/not-found' /> },
            
        ]

    }

])