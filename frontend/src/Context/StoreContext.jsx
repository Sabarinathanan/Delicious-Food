import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,[itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] === 1) {
                const newCartItems = { ...prev };
                delete newCartItems[itemId];
                return newCartItems;
            }
            return {
                ...prev,
                [itemId]: prev[itemId] - 1
            };
        });
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const ContextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
