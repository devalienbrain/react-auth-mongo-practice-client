import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";


const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const loadCartItems = useLoaderData();
  useEffect(() => {
    setCartItems(loadCartItems);
  }, [loadCartItems]);
  // console.log(cartItems);
  return (
    <div className="container mx-auto">
      <div className="w-full md:w-3/4 p-3 my-5 mx-auto bg-blue-100 rounded-md">
        <h1 className="text-center text-3xl font-bold text-blue-900">
          CART ITEMS
        </h1>
        <div>
          {cartItems.map((cartItem) => (
            <CartCard
              key={cartItem._id}
              cartItem={cartItem}
              cartItems={cartItems}
              setCartItems={setCartItems}
            ></CartCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
