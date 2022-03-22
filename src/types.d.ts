interface IProduct {
  discount?: number
  id: string
  price: number
  name: string
  image: string
  amount: number
  category: string
  occasion: string
  address: string
}

interface IStore {
  cartItems?: IProduct[]
  setCartItems?: React.Dispatch<React.SetStateAction<IFlower[]>>
  handleAddToCart?: (item: IProduct) => void
  handleRemoveFromCart?: (id: string) => void
  handleDecrease?: (item: IProduct) => void
}

interface IOrder {
  orders: IProduct[]
}

interface BannersProps {
  background?: string
  btnTitle?: string
  description?: string
  title?: string
  url?: string
}
