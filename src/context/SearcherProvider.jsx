import { useState } from "react";
import { searcherContext } from "./searcherContext";

export const SeacherProvider = ({ children }) => {
    const [search, setSearch] = useState('')

    return (
        <searcherContext.Provider value={{ search, setSearch }}>
            {children}
        </searcherContext.Provider>
    )
}