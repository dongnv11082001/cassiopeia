// components
import { useContext, useState } from "react";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { StoreContext } from "../../context";

function Home() {
    const store = useContext(StoreContext)
  const [cartItems, setCartItems] = useState<IFlower[]>([]);

  const handleAddToCart = (item: IFlower) => {
    setCartItems((prev) => [...prev, { ...item }]);
  };

  const handleRemoveFromCart = (id: string) => {
    const filteredCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredCartItems);
  };

  return (
    <div>
      <Header
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <Navbar />
      <Content handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Home;
