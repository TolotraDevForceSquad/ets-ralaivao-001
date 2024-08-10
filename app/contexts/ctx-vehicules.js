import React, { createContext, useContext, useState } from "react";

const ctxAuto = createContext()

export const AutoProvider = ({ children}) => {
    const [showAddAuto, setShowAddAuto] = useState(false)
    const [showAutoTri, setShowAutoTri] = useState(false)
    return (
        <ctxAuto.Provider value={{
            showAddAuto, setShowAddAuto,
        }}>
            {children}
        </ctxAuto.Provider>
    )
}

export const useAuto = () => {
    const context = useContext(ctxAuto)
    if(!context) {
        throw new Error("Mauvaise utilisation de ctxAuto")
    }
    return context
}