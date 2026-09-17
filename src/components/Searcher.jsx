import { useSearcher } from "../hooks/useSearcher"

export function Searcher() {
    const { inputValue, handlerOnChange, handlerSubmit, inputRef } = useSearcher()
    
    return (
        <>
        <form className="searcher-character-container" onSubmit={handlerSubmit}>
            <input type="text" placeholder="Buscar personaje" className="searcher-character" name="character" value={inputValue} onChange={handlerOnChange} ref={inputRef}/>
        </form>
        </>
    )
}