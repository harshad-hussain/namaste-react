import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { RouterProvider, createBrowserRouter ,Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () => {
  return(
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}
   
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
       {
      path:"/",
      element:<Body/>
    },
    {
      path:"/home",
      element:<Body/>
    }, {
      path:"/contact",
      element:<Contact/>
    },
    {
      path :"/aboutus",
      element:<AboutUs/>
    },
    {
      path:"restaurants/:resId",
      element:<RestaurantMenu/>
    },
  ],
    errorElement : <Error/>,
  },
 
])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
