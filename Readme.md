## Namaste React 🚀


## Parcel
-Dev Build
-Local Server
-HMR-Hot Module Replacement
-File Watching Algorithm -written in c++
-Caching -Faster Builds
-Tree shaking
-Image Optimization
-Bundling
-Error handling

- [Parcel Documentation](https://parceljs.org/docs/)

-JSX (transpile before it reaches the JS)- Parcel -Babel

//JSX => Babel tranplies into React.createElement => Reactelement -JS object => HTMLElement(render)

 - JSX => React.createElement => JS Object =>HTMLElement(render)


## Syntax for reacting functional component :

const HeadingComponent = () => {
    return (<h1 className="heading"> this is functional based component</h1>,
        <h2> this is a functional component 2</h2>
)};

const HeadingComponent2 = () => 
(<h1> yes i am in</h1> 
   <h2> harshad </h2>);

 ------------- props --------------
   {resList.map((restaurant) => (
          <RestaurantCard  key ={restaurant.info.id} resData={restaurant}/>
        ))}

        const RestaurantCard = (props) =>{
   const {resData} = props;
   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime:infoDeliveryTime,sla
  } = resData?.info || {};

  const deliveryTime = sla?.deliveryTime || infoDeliveryTime; }


  ------------------------props -------------

  ## we should not use index as a key (unacceptable) <<<< best practice(use it key as id)

  ## Two types of exports
  1.default export/import:
     - export default Component;
     - import Component form "path";

  2.Named export/import:
    -export const Component;
    -import{Component} from "path";