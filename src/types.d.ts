interface IProduct {
  discount?: number;
  id: string;
  price: number;
  name: string;
  image: string;
  amount: number;
  category: string
  occasion: string
}

interface IStore {
  cartItems?: IProduct[];
  setCartItems?: React.Dispatch<React.SetStateAction<IFlower[]>>;
  handleAddToCart?: (item: IProduct) => void;
  handleRemoveFromCart?: (id: string) => void;
}

interface IOrder {}
