import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CARD_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom"; 

const RestaurantMenu = () =>{

  const {resId} = useParams();
  console.log(resId);

    const [resInfo,setResInfo]=useState(null);

    useEffect(() =>{
         fetchMenu();
    },[]);
 
    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json);
    }

    
    if (resInfo === null)  return <Shimmer/> 

    const {name,cuisines,costForTwoMessage} =  resInfo?.cards[2]?.card?.card?.info;

     const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     
     console.log(itemCards);

    return (
      <div className="menu-container">
        <div className="top-card">
       <h1> {name} </h1>
       <p>{cuisines.join(",")} - {costForTwoMessage}</p>
       <h3>Menu</h3>
       </div>
       <div className="items-card">
       <ul><b>
        {itemCards.map(item =><li
         key ={item.card.info.id}> {item.card.info.name}  
            - Rs. {item.card.info.price}   
            {<img className="card-img" src={CARD_URL + item.card.info.imageId}/>}
             </li>)}
            </b>
       </ul>
       </div>
      </div>
    );
};
export default RestaurantMenu;