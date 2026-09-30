import { useEffect, useState } from 'react'

import './App.css'
import { Card } from 'react-bootstrap'

// https://pokeapi.co/api/v2/pokemon/dragonite

function App() {

  const [pokemon, setPokemon] = useState([])

  const buscarPokemon = async () => {

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/dragonite"
    )

    const data = await response.json()

    setPokemon(data)

    console.log(data)
  }

  useEffect(() => {
    buscarPokemon()
  }, [])

  return (

    <div className="contenedor">
      <Card className="carta-pokemon">
        <Card.Body>
          {/* CABECERA */}
          <div className="cabecera">
            <div>
              <span className="basico">
                BÁSICO
              </span>

              <Card.Title>
                {pokemon?.name}
              </Card.Title>

            </div>

            <span>
              #{pokemon?.id}
            </span>

          </div>


          {/* IMAGEN */}

          <div className="marco-imagen">

            <Card.Img
              src={pokemon?.sprites?.other?.['official-artwork']?.front_default}
              alt={pokemon?.name}
            />

          </div>
          {/* TIPO */}
          <p className="tipo">

            {pokemon?.types
              ?.map((tipo) => tipo.type.name)
              .join(' / ')}

          </p>


          {/* DATOS */}
          <div className="datos">

            <div>
              <strong>ALTURA</strong>
              <span>{pokemon?.height} dm</span>
            </div>

            <div>
              <strong>PESO</strong>
              <span>{pokemon?.weight} hg</span>
            </div>

            <div>
              <strong>EXP</strong>
              <span>{pokemon?.base_experience}</span>
            </div>

          </div>


          {/* HABILIDADES */}

          <div className="seccion">

            <h3>HABILIDADES</h3>

            {pokemon?.abilities?.map((habilidad) => (

              <div
                className="habilidad"
                key={habilidad.ability.name}
              >

                <span>★</span>

                {habilidad.ability.name}

              </div>

            ))}

          </div>


          {/* MOVIMIENTOS */}

          <div className="seccion">

            <h3>MOVIMIENTOS</h3>

            {pokemon?.moves?.slice(0, 3).map((movimiento) => (

              <div
                className="movimiento"
                key={movimiento.move.name}
              >

                <span>◆</span>

                {movimiento.move.name}

              </div>

            ))}

          </div>


          {/* ESTADÍSTICAS */}

          <div className="seccion">

            <h3>ESTADÍSTICAS</h3>

            <div className="estadisticas">

              {pokemon?.stats?.map((stat) => (

                <div
                  className="estadistica"
                  key={stat.stat.name}
                >

                  <span>
                    {stat.stat.name}
                  </span>

                  <strong>
                    {stat.base_stat}
                  </strong>

                </div>

              ))}

            </div>

          </div>


          {/* PIE DE CARTA */}

          <div className="pie">

            <span>
              POKÉAPI
            </span>

            <span>
              #{pokemon?.id}
            </span>

          </div>

        </Card.Body>

      </Card>

    </div>

  )
}

export default App