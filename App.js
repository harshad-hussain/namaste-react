import React from "react";
import ReactDOM from "react-dom/client";
import logo from '../namaste-react/images/logo.png';
import usericon from '../namaste-react/images/usericon.png';

//JSX => Babel tranplies into React.createElement => Reactelement -JS object => HTMLElement(render)
const JsxHeading = () => (
  <h1 className="heading">
    Namaste React using JSX 🚀
  </h1>
);

const HeadingComponent = () => 
  (
    <div id="container">
        <JsxHeading />
        <h2> {number} </h2>
      <h2 className="heading2"> this is functional based component</h2>
      <h2> this is a functional component 2</h2>
    </div>
  );

  const HeaderComponent =() =>
    ( <div className="parent">
          <div className="logo-container" >
           <img src={logo} alt="Logo"/>
           </div>
           <div className="icon-container">
           <img src={usericon} alt="Icon"/>
           
           </div>
      </div>
           
    );

  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
