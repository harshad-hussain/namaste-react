// --> we can create like this core of react without using JSX 
const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")]));

//--> if we need to create nested elements  we can use array of childrens //

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);// --> we used root to render the parent .
