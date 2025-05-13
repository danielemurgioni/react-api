import axios from "axios"
import { useEffect, useState } from "react"

// API delle attrici
const endpoint = "https://lanciweb.github.io/demo/api/actresses/"

function App() {

  // creo una variabile di stato che conterra l'array delle attrici datomi dall'endpoint
  const [arrActor, setArrActor] = useState([])

  const fetchActors = () => {
    //eseguo la chiamata ajax tramite axios
    axios.get(endpoint).then((resp) => { console.log(resp.data), setArrActor(resp.data) })
  }

  useEffect(() => {
    fetchActors()
  }, [])

  return (
    <>
      <header>
        <h1>React API</h1>
      </header>
      <main>
        <div className="container">
          <ul>
            {arrActor.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )

}

export default App
