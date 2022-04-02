import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Cover from '../../components/Cover';

export default () => {

const [filmes, setFilmes] = useState([])

// Toda vez que carregar o componente ele executa isso
useEffect(() => {

apiFilmes.get('movie/now_playing?language=pt-BR').then(results => {
setFilmes(results.data.results)
})

}, [])

return (
<Pagina titulo="Filmes Lançamentos">

<Cover lista={filmes} link="filmes" foto='poster_path' />


</Pagina>
)
}