interface IProduct {
    id: string
    imageType: string
    includes: string[]
    name: string
    occasion: string
    oldPrice: number
    price: number
    thumbnail: string
    type: string
    amount: number
    discount: number
}

interface IStore {
  cartItems?: IProduct[]
  setCartItems?: React.Dispatch<React.SetStateAction<IProduct[]>>
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
