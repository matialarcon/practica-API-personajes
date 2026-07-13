import { useContext, useEffect, useState } from "react"
import { searcherContext } from "../context/searcherContext"

function App() {
  return(
    <>
      <header>
        <Searcher />
      </header>

      <section>
        <ListCharacters />
      </section>
    </>
  )
}

function Searcher() {
  const { setSearch } = useContext(searcherContext)

  return (
    <>
      <form className="searcher-character-container">
        <input type="text" placeholder="Buscar personaje" className="searcher-character" name="character" onChange={() => setSearch(event.target.value)}/>
      </form>
    </>
  )
}

function ListCharacters() {
  const [character, setCharacter] = useState([])
  const [error, setError] = useState("")
  const { search } = useContext(searcherContext)

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}`)
        return res.json()
      })
      .then(data => setCharacter(data))
      .catch(error => setError(error.message))
  }, [])

  if (error !== "") return <p>{error}</p>

  const filteredCharacters = character.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

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

export default App
