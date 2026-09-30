import { useState, useEffect } from "react"

export function usePagination(characters, charactersForPages, search) {
    const [page, setPage] = useState(1)
    const [prevSearch, setPrevSearch] = useState(search)
    const totalPages = Math.ceil(characters.length / charactersForPages)

    /*Aquí se envía al sitio a la primera página en caso de escribirse algo en el buscador, para poder filtrar correctamente.*/
    if (search !== prevSearch) {
        setPrevSearch(search)
        setPage(1)
    }

    /*Este useEffect te lleva al principio de la ventana al cambiar de página.*/
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [page])

    /*Aquí se recortan los personajes para mostrar 12 por página.*/
    const inicio = (page - 1) * charactersForPages
    const charactersVisibles = characters.slice(inicio, inicio + charactersForPages)

    return { page, setPage, totalPages, charactersVisibles }
}