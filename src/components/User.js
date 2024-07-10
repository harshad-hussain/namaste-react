import { useState } from "react";

const User = (props) => {

  const[count1,setCount] = useState(0);
    return(
        <div className="user-card">
          <h2>Count:{count1}</h2>
          <button  onClick={()=>{
             setCount(count1+1);
          }}> click me </button>
      <h2>Name :{props.name}</h2>
      <h2>location :{props.location}</h2>
      </div>
    );
};

export default User;