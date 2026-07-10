import { useEffect, useState } from "react"

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
  return (
    <>
      <form className="searcher-character-container">
        <input type="text" placeholder="Buscar personaje" className="searcher-character" name="character"/>
      </form>
    </>
  )
}

function ListCharacters() {
  const [character, setCharacter] = useState([])
  const [error, setError] = useState("")

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

  return (
    <>
      <h1>Lista de personajes</h1>

      <div>
        <ul className="character-list">
          {character.map(p => (
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
    </>
  )
}

export default App
