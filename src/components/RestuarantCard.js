import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime: infoDeliveryTime,
    sla,
  } = resData?.info || {};

  const deliveryTime = sla?.deliveryTime || infoDeliveryTime;

  return (
    <div className="res-card">
      <img
        className="res- logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹ {costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCard;
