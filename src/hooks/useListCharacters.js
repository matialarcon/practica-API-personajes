import { useState, useEffect, useContext } from "react"
import { searcherContext } from "../context/searcherContext"

export const useListCharacters = () => {
    const [character, setCharacter] = useState([])
    const [error, setError] = useState("")
    const { search } = useContext(searcherContext)

    /*Fetcheo de los datos de la API*/

    useEffect(() => {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(res => {
            if (!res.ok) throw new Error(`Error ${res.status}`)
            return res.json()
        })
        .then(data => setCharacter(data))
        .catch(error => setError(error.message))
    }, [])

    /*Aquí se filtran los personajes teniendo en cuenta la búsqueda*/
    
    const filteredCharacters = character.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

    return { filteredCharacters, search, error }
}