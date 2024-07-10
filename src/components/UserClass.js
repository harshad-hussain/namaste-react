import React from "react"

class UserClass extends React.Component{
 
    constructor(props){
        super(props);

        this.state ={
          count1:0,
          count2:1,
        };
    }

      
    
    render(){
        const{name,location} = this.props;
        const{count1,count2} = this.state;
        return(
            <div className="user-card">
                <h3>Count:{count1}</h3>
                <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1,
                    })
                }}>Click me</button>
                <h2>Name:{name}</h2>
                <h2>location:{location}</h2>
            </div>
        )               
    }
}
export default UserClass;