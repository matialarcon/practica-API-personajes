import { useContext, useRef, useState } from "react"
import { searcherContext } from "../context/searcherContext"

export const useSearcher = () => {
    const { setSearch } = useContext(searcherContext)
    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('')

    /*Esta función se ejecuta mientras el usuario esta escribiendo en el buscador y guarda el valor de la búsqueda en el estado global y en un estado local*/
    const handlerOnChange = (event) => {
        setSearch(event.target.value)
        setInputValue(event.target.value)
    }

    /*Esta función se ejecuta al dar enter en el buscador y lo que hace es limpiar el input volviendo a su estado inicial al estado local, y también quita el enfoque del input para poder visualizar los resultados.*/
    const handlerSubmit = (event) => {
        event.preventDefault()
        inputRef.current?.blur()
        setInputValue('')
    }

    return { inputValue, handlerOnChange, handlerSubmit, inputRef }
}