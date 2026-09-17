import { useState } from "react";
import { searcherContext } from "./searcherContext";

/*Creación de de un provider para compartir un estado global en toda la app*/

export const SeacherProvider = ({ children }) => {
    const [search, setSearch] = useState('')

    return (
        <searcherContext.Provider value={{ search, setSearch }}>
            {children}
        </searcherContext.Provider>
    )
}