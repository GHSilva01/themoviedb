import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col, Image} from 'react-bootstrap'
import Cartao from '../../components/Cartao';
import { Link } from 'react-router-dom';
import Cover from '../../components/Cover';


export default (props) => {

const [atores, setAtores] = useState([])
const [filme, setFilme] = useState({})
const [posters, setPosters] = useState([])
const [backdrops, setBackdrops] = useState([])

useEffect(() => {

const id = props.match.params.id

apiFilmes.get('movie/' + id + '?language=pt-BR').then(results => {
setFilme(results.data)
})

}, [])

useEffect(() => {

const id = props.match.params.id

apiFilmes.get('movie/' + id + '/credits?language=pt-BR').then(results => {
setAtores(results.data.cast)
})

}, [])

useEffect(() => {

const id = props.match.params.id

apiFilmes.get('movie/' + id + '/images').then(results => {
setPosters(results.data.posters)
})

}, [])

useEffect(() => {

const id = props.match.params.id

apiFilmes.get('movie/' + id + '/images').then(results => {
setBackdrops(results.data.backdrops)
})

}, [])

return (
<Pagina titulo={filme?.title}>
  {filme.id &&
  <Row>
    <Col xs={6} md={4}>
    <Image src={'http://image.tmdb.org/t/p/w500'+ filme?.poster_path} thumbnail />
    </Col>
    <Col xs={6} md={6}>

    <p>{filme.overview}</p>
    <p><strong>Data Lançamento: </strong> {filme.release_date}</p>
    <p><strong>Gêneros: </strong>
      {filme.genres.map(item => (
      <span key={item.id}>{item.name} </span>
      ))}
    </p>
    <Row>
      {filme.production_companies.map(item => (
      <React.Fragment key={item.id}>
        {item.logo_path &&
        <Col>
        <Card className="mb-3">
          <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w500'+ item.logo_path} />
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
  <h1>Contracapas</h1>
  <Cover lista={backdrops} foto="file_path"/>
  <h1>Posters</h1>
  <Cover lista={posters}  foto="file_path"/>

</Pagina>
)
}