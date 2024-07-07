import UserClass from "./UserClass";
import User  from "./User";

const Contact = () =>{
    return(
        <div>
      <h1>Contact us page</h1>
       <h2>Contact is here </h2>
       <User name= {"Harshad function"} location={"Chennai function"}/>
       <UserClass name= {"Harshad"} location={"Chennai"}/>
      </div>
    )
};

export default Contact;