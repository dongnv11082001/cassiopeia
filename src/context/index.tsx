import React, { createContext, useEffect, useState } from "react";

const StoreContext = createContext<IStoreContext | undefined>(undefined)

const StoreContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [items, setItems] = useState<IFlower[]>([])
    const url = 'https://620c70a3b5736325938e3172.mockapi.io'

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`${url}/flowers`)
            const data = await response.json()
            setItems(data)
        }
        fetchApi()
    }, [])

    const value = { items, setItems }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContextProvider, StoreContext }