import React, { createContext, useContext, useState } from "react";

const ctxGlb = createContext()

export const GlbProvider = ({ children}) => {
    const [showMenu, setShowMenu] = useState(false)
    const [nav, setNav] = useState()
    const [showOption, setShowOption] = useState(false)
    return (
        <ctxGlb.Provider value={{
            showMenu, setShowMenu,
            nav, setNav,
            showOption, setShowOption,
        }}>
            {children}
        </ctxGlb.Provider>
    )
}

export const useGlb = () => {
    const context = useContext(ctxGlb)
    if(!context) {
        throw new Error("Mauvaise utilisation de ctxGlb")
    }
    return context
}