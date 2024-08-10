import React, { createContext, useContext, useState } from "react";

const ctxRep = createContext()

export const RepProvider = ({ children}) => {
    const [showAddRep, setShowAddRep] = useState(false)
    const [showRepTri, setShowRepTri] = useState(false)
    return (
        <ctxRep.Provider value={{
            showAddRep, setShowAddRep,
        }}>
            {children}
        </ctxRep.Provider>
    )
}

export const useRep = () => {
    const context = useContext(ctxRep)
    if(!context) {
        throw new Error("Mauvaise utilisation de ctxRep")
    }
    return context
}