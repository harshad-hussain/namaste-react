import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";

const Applayout = () => {
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
   
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement : <Error/>,
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path :"/AboutUs",
    element:<AboutUs/>
  }
])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
