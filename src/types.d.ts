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
  cartItems: IProduct[]
  handleAddToCart: (item: IProduct) => void
  handleDeleteFromCart: (id: string) => void
  handleDecrease: (item: IProduct) => void
  handleRemoveAll: () => void
  handleDiscount: (discountCode: string) => void
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
