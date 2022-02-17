interface IFlower {
  id: string;
  price: string;
  name: string;
  image: string;
  amount: number
}

interface IStoreContext {
    items: IFlower[];
    setItems?: React.Dispatch<React.SetStateAction<IFlower[]>>;
}
