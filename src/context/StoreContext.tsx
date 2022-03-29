import React, { createContext, useState } from 'react'

const StoreContext = createContext<IStore>({} as IStore)

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<IProduct[] | []>([])

  const handleAddToCart = (clickedItem: IProduct) => {
    setCartItems((prev) => {
      const isItemInCart = prev?.find((item) => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        })
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleDeleteFromCart = (id: string) => {
    const filteredCartItems = cartItems!.filter((item) => item.id !== id)
    setCartItems(filteredCartItems)
  }

  const handleDecrease = (clickedItem: IProduct) => {
    setCartItems!((prev) => {
      const isItemInCart = prev?.find((item) => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? { ...item, amount: item.amount - 1 }
            : item
        })
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveAll = () => {
    setCartItems([])
  }

  const handleDiscount = (discountCode: string) => {
    setCartItems!((prev) => {
      return prev.map((item) => {
        return { ...item, discount: 20 }
      })
    })
  }

  const value = {
    handleAddToCart,
    handleDeleteFromCart,
    handleDecrease,
    cartItems,
    handleRemoveAll,
    handleDiscount
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export { StoreContextProvider, StoreContext }
