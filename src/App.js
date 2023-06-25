import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./componants/Layout";
import ErrorPage from "./componants/ErrorPage";
import About from "./componants/About";
import Projects from "./componants/Projects";
import Contact from "./componants/Contact";
import Home from "./componants/Home";
import SignIn from "./componants/SignIn";
import SignUp from "./componants/SignUp";
import CheckMail from "./componants/CheckMail";
import ForgetPassword from "./componants/ForgetPassword";
import Activation from "./componants/ActivationUser";
import ConfirmResetPassword from "./componants/ConfirmResetPassword";
import Store from "./componants/Store";
import ShoppingCartProvider from "./context/shopingCartContext";
import Profile from "./componants/Profile";
import ProfileEdit from "./componants/ProfileEdit";
import AddShop from "./componants/AddShop";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Store", element: <Store /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/profile", element: <Profile/> },
      { path: "/profile/edit", element: <ProfileEdit/> },
      { path: "/shop/add", element: <AddShop/> },
    ],
  },
  { path: "/Signin", element: <SignIn /> },
  { path: "/Signup", element: <SignUp /> },
  { path: "/checkmail", element: <CheckMail /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
  { path: "/activate/:uid/:token", element: <Activation /> },
  { path: "/password/reset/confirm/:uid/:token", element: <ConfirmResetPassword /> },

]);

const App = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
};

export default App;
