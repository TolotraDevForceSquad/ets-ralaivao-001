import React, { createContext, useContext, useState } from "react";

const ctxSui = createContext()

export const SuiProvider = ({ children}) => {
    const [showAddSui, setShowAddSui] = useState(false)
    const [showSuiTri, setShowSuiTri] = useState(false)
    return (
        <ctxSui.Provider value={{
            showAddSui, setShowAddSui,
        }}>
            {children}
        </ctxSui.Provider>
    )
}

export const useSui = () => {
    const context = useContext(ctxSui)
    if(!context) {
        throw new Error("Mauvaise utilisation de ctxSui")
    }
    return context
}