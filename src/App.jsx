import { Searcher } from "./components/Searcher"
import { ListCharacters } from "./components/ListCharacters"

function App() {
  return(
    <>
      <header>
        <Searcher />
      </header>
      <main>
        <section>
          <ListCharacters />
        </section>
      </main>
    </>
  )
}

export default App
