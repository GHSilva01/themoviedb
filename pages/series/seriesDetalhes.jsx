import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col, Image} from 'react-bootstrap'
import Cartao from '../../components/Cartao';
import { Link } from 'react-router-dom';
import Cover from '../../components/Cover';


export default (props) => {

const [atores, setAtores] = useState([])
const [serie, setSerie] = useState({})

useEffect(() => {

const id = props.match.params.id

apiFilmes.get('tv/' + id + '?language=pt-BR').then(results => {
setSerie(results.data)
})

}, [])

useEffect(() => {

const id = props.match.params.id

apiFilmes.get('tv/' + id + '/credits?language=pt-BR').then(results => {
setAtores(results.data.cast)
})
    
}, [])

return (
<Pagina titulo={serie?.name}>
            {serie.id &&
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={'http://image.tmdb.org/t/p/w500'+ serie?.poster_path} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>

                        <p>{serie.overview}</p>
                        <p><strong>Data Lançamento: </strong> {serie.first_air_date}</p>
                        <p><strong>Gêneros: </strong> 
                        {serie.genres.map(item => (
                            <span key={item.id}>{item.name} </span>
                        ))}
                        </p>
                        <Row>
                            {serie.production_companies.map(item => (
                                <React.Fragment key={item.id}>
                                {item.logo_path &&
                                    <Col>
                                    <Card className="mb-3">
                                        <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+ item.logo_path}/>
                                    </Card>
                                </Col>
                                }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                </Row>
            }
            <h1>Principais Atores</h1>
            <Cover lista={atores} link="atores" foto="profile_path" />
        </Pagina>
)
}