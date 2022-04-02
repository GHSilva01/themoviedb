import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col} from 'react-bootstrap'
import Cartao from '../../components/Cartao';
import { Link } from 'react-router-dom';
import Cover from '../../components/Cover';


export default () => {

const [series, setSeries] = useState([])

// Toda vez que carregar o componente ele executa isso
useEffect(() => {

apiFilmes.get('tv/on_the_air?language=pt-BR').then(results => {
setSeries(results.data.results)
})

}, [])

return (
<Pagina titulo="Séries de TV no Ar">

<Cover lista={series} link="series" />

</Pagina>
)
}