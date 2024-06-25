import RestaurantCard from "./RestuarantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const[listOfRestaurants,setListOfRestaurants] = useState(resList);

    return(
      <div className="body">
        <div className="filter">
        <button type="button" class="filter-btn"
             onClick={()=> { 
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.2
                );
                setListOfRestaurants(filteredList);
            }}
             >Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard  key ={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>
      </div>
    )
  }

  export default Body;