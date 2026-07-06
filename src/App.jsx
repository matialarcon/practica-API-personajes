function App() {
  return (
    <>
      <Searcher />
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

export default App
