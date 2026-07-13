import { useListCharacters } from "../hooks/useListCharacters"

export function ListCharacters() {
    const { filteredCharacters, search, error } = useListCharacters()

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
            {filteredCharacters.map(p => (
                <li key={p.id} className="character-container">
                <img src={p.images.lg} alt="imagen personaje" className="character-img"/>
                <p className="character-name">{p.name}</p>
                <div className="stats-container">
                    <span title="Inteligencia" className="stats">🧠 {p.powerstats.intelligence}</span>
                    <span title="Fuerza" className="stats">💪 {p.powerstats.strength}</span>
                    <span title="Velocidad" className="stats">⚡ {p.powerstats.speed}</span>
                    <span title="Resistencia" className="stats">🛡️ {p.powerstats.durability}</span>
                    <span title="Poder" className="stats">✨ {p.powerstats.power}</span>
                    <span title="Combate" className="stats">⚔️ {p.powerstats.combat}</span>
                </div>
                </li>
            ))}
            </ul>
            </div>
        )}
        </>
    )
}