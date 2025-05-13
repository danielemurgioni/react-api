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

  // al montaggio della pagina chiamo la funzione
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
          <div className="row">
            <div className="col">
              {arrActor.map((item) => (
                <div className="card" key={item.id}>
                  <div className="name">
                    {item.name}
                  </div>
                  <div className="born">
                    {item.birth_year}
                  </div>
                  <div className="nation">
                    {item.nationality}
                  </div>
                  <div className="biography">
                    {item.biography}
                  </div>
                  <div className="img">
                    <img src={item.image} />
                  </div>
                  <div className="awards">
                    {item.awards}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main >
    </>
  )

}

export default App
