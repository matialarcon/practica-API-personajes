import { useContext } from "react"
import { searcherContext } from "../context/searcherContext"

export function Searcher() {
    const { setSearch } = useContext(searcherContext)

    return (
        <>
        <form className="searcher-character-container">
            <input type="text" placeholder="Buscar personaje" className="searcher-character" name="character" onChange={() => setSearch(event.target.value)}/>
        </form>
        </>
    )
}