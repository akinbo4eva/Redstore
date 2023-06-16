import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../../../feature/account/Login";
import Register from "../../../feature/account/Register";
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
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {  
        path: '/',
        element:<App/>,
        children: [
            {element: <RequireAuth/>, children: [
                {path: 'checkout', element: <CheckoutPage/> }
            ]},
            {path: '', element: <HomePage/> },
            {path: 'catalog', element: <Catalog/> },
            {path: 'catalog/:id', element: <ProductDetails/> },
            {path: 'about', element: <AboutPage/> },
            {path: 'contact', element: <ContactPage/> },
            {path: 'server-error', element: <ServerError/> },
            {path: 'not-found', element: <NotFound/> },
            {path: 'basket', element: <BasketPage/> },
            {path: 'login', element: <Login/> },
            {path: 'register', element: <Register/> },
            {path: '*', element: <Navigate replace to='/not-found' /> },
            
        ]

    }

])