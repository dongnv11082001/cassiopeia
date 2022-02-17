interface IFlower {
  id: string;
  price: number;
  name: string;
  image: string;
  amount: number;
}

interface IStoreContext {
  setCartItems?: React.Dispatch<React.SetStateAction<IFlower[]>>;
  cartItems?: IFlower[];
  handleAddToCart?: (item: IFlower) => void;
  handleRemoveFromCart?: (id: string) => void;
}

interface ICartItem {}
