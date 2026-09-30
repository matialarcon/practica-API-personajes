import { useListCharacters } from "../hooks/useListCharacters"
import { usePagination } from "../hooks/usePagination"
import { Pagination } from "./Pagination"

const CHARACTERS_FOR_PAGE = 12

export function ListCharacters() {
    const { filteredCharacters, search, error } = useListCharacters()
    const { page, setPage, totalPages, charactersVisibles } = usePagination(filteredCharacters, CHARACTERS_FOR_PAGE, search)
    
    if (error !== "") return <p className="fetch-error">{error}</p>

    return (
        <>
            <h1>Lista de personajes</h1>

            {filteredCharacters.length === 0 && search !== '' ? (
                <p className="empty-list characters-not-found">No se encontraron personajes</p>
            ): filteredCharacters.length === 0 ? (
                <p className="empty-list">Cargando...</p>
            ) : (
                <div>
                    <ul className="character-list">
                        {charactersVisibles.map(character => (
                            <li key={character.id} className="character-container">
                                <img src={character.images.lg} alt={character.name} className="character-img"/>
                                <p className="character-name">{character.name}</p>
                                <div className="stats-container">
                                    <span title="Inteligencia" className="stats">🧠 {character.powerstats.intelligence}</span>
                                    <span title="Fuerza" className="stats">💪 {character.powerstats.strength}</span>
                                    <span title="Velocidad" className="stats">⚡ {character.powerstats.speed}</span>
                                    <span title="Resistencia" className="stats">🛡️ {character.powerstats.durability}</span>
                                    <span title="Poder" className="stats">✨ {character.powerstats.power}</span>
                                    <span title="Combate" className="stats">⚔️ {character.powerstats.combat}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
    )
}