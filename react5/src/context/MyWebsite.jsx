import { createContext , useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export let MyShop = createContext();

export const MyShopContextProvider = ( {children} ) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyShop.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}
    >
      {children}
    </MyShop.Provider>
  );
};
