import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.0);
  
  function BakeryItem(props) {
    const name = props.name;
    const price = props.price;
    const description = props.description;
    const img = props.img;
    const cart = props.cart;
    const setCart = props.setCart;

    const handleClick = () => {
      setCart([...cart, name, " ", price, <br></br>]);
      setTotal(total + price);
    }

    return (
      <div>
        <h3>{name} </h3>
        <h6>{description} </h6>
        <img src={img}/>
        <h3>{price} </h3>
        <button onClick={handleClick}> Add to cart!</button>
      </div>
       
    )
  }

  

  return (
    <div class="all">
      <div className="App">
        <div>
          <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <p>
              
            <BakeryItem name = {item.name} 
            price = {item.price} 
            description = {item.description}
            img = {item.image} 
            cart = {cart} 
            setCart = {setCart}/>
              </p> // replace with BakeryItem component
            
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          <h5> {cart}</h5>
          <h4> Total: {total}$</h4>
          

        </div>
      </div>
    </div>
  );
}

export default App;
