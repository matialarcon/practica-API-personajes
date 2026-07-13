import { Searcher } from "./components/Searcher"
import { ListCharacters } from "./components/ListCharacters"

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

export default App
