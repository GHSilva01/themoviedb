import React, {useEffect, useState} from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/api/filmes.js'
import { Card, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default (props) => {

const [ator, setAtor] = useState({})
const [filmes, setFilmes] = useState([])
const [series, setSeries] = useState([])

useEffect(() => {

const id = props.match.params.id
apiFilmes.get('person/' + id + '?language=pt-BR').then(results => {
setAtor(results.data)

})
apiFilmes.get('person/' + id + '/movie_credits?language=pt-BR').then(results => {
setFilmes(results.data.cast)
})

apiFilmes.get('person/' + id + '/tv_credits?language=pt-BR').then(results => {
setSeries(results.data.cast)
})

}, [])


return (
<Pagina titulo={ator?.name}>
    {ator.id &&
    <Row>
        <Col md={3}>
        <Card className="mb-3">
            <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+ ator.profile_path} />
        </Card>
        </Col>
        <Col>
        <p>{ator.biography}</p>
        <p>Data de Nascimento: {ator.birthday}</p>
        {ator.deathday &&
        <p>Data do Óbito: {ator.deathday}</p>
        }
        <p>Local de Nascimento: {ator.place_of_birth}</p>
        </Col>
    </Row>
    }
    <Col>
    <hr/>
    <Row>
        <h1>Atuações em Filmes</h1>
        <Row>
              {filmes.map(item => (
                <React.Fragment key={item.id}>
                  {item.poster_path &&
                    <Col md={2} className="mb-3">
                      <Card>
                      <Link to={"/filmes/" + item.id}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
                        </Link>
                        <Card.Body>
                          <p>{item.character} ({item.title})</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  }
                </React.Fragment>
              ))}
            </Row>
    </Row>
    </Col>
    <Col>
    <hr/>
    <Row>
        <h1>Atuações em Séries</h1>
        <Row>
              {series.map(item => (
                <React.Fragment key={item.id}>
                  {item.poster_path &&
                    <Col md={2} className="mb-3">
                      <Card>
                        <Link to={"/series/" + item.id}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
                        </Link>
                        {item.character &&
                        <Card.Body>
                          <p>{item.character} {item.title}</p>
                        </Card.Body>
                        }
                      </Card>
                    </Col>
                  }
                </React.Fragment>
              ))}
            </Row>
    </Row>
    </Col>




</Pagina>
)
}