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
        <div className="container">
          <h1>React API</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              {arrActor.map((item) => (
                <div className="card-container p-20" key={item.id}>
                  <div className="d-flex">
                    <div className="col-50 me-20">
                      <div className="img-card">
                        <img src={item.image} />
                      </div>
                    </div>
                    <div className="col-50">
                      <div className="actor-info">
                        <div className="name-card">
                          <h2>{item.name}</h2>
                        </div>
                        <div className="born-card">
                          <span>Born: {item.birth_year}</span>
                        </div>
                        <div className="nation-card">
                          <span>Nationality: {item.nationality}</span>
                        </div>
                        <div className="awards-card">
                          <h4>Won Awards</h4>
                          <span>{item.awards}</span>
                        </div>
                        <div className="biography-card">
                          <h4>Biography</h4>
                          <p>{item.biography}</p>
                        </div>

                      </div>
                    </div>
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
