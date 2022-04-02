import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col} from 'react-bootstrap'
import Cartao from '../../components/Cartao';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Cover from '../../components/Cover';


export default () => {

const [filmes, setFilmes] = useState([])

// Toda vez que carregar o componente ele executa isso
useEffect(() => {

apiFilmes.get('movie/popular?language=pt-BR').then(results => {
setFilmes(results.data.results)
})

}, [])

return (
  <Pagina titulo="Filmes Populares">
  
  <Cover lista={filmes} link="filmes"  />
  
  </Pagina>
  )
  }
