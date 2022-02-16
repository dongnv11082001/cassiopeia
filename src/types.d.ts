interface IFlower {
  id?: string;
  price?: string;
  name?: string;
  image?: string;
}

interface IStoreContext {
    items: IFlower[]
}
