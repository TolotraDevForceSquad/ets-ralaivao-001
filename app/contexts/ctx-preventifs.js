import React, { createContext, useContext, useState } from "react";

const ctxPrev = createContext()

export const PrevProvider = ({ children}) => {
    const [showAddPrev, setShowAddPrev] = useState(false)
    const [showPrevTri, setShowPrevTri] = useState(false)
    return (
        <ctxPrev.Provider value={{
            showAddPrev, setShowAddPrev,
        }}>
            {children}
        </ctxPrev.Provider>
    )
}

export const usePrev = () => {
    const context = useContext(ctxPrev)
    if(!context) {
        throw new Error("Mauvaise utilisation de ctxPrev")
    }
    return context
}