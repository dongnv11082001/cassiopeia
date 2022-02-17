import React, { createContext, useState } from "react";

const StoreContext = createContext<IStoreContext | undefined>(undefined);

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<IFlower[]>([]);

  const handleAddToCart = (item: IFlower) => {
    setCartItems((prev) => [...prev, { ...item }]);
  };

  const handleRemoveFromCart = (id: string) => {
    const filteredCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredCartItems);
  };

  const value = {
    handleAddToCart,
    handleRemoveFromCart,
    cartItems,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export { StoreContextProvider, StoreContext };
