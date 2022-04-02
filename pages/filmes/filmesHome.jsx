import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col} from 'react-bootstrap'
import Cartao from '../../components/Cartao';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Slide from '../../components/Slide';


export default () => {

const [filmesPopulares, setPopulares] = useState([])
const [filmesLancamentos, setLancamentos] = useState([])


useEffect(() => {
apiFilmes.get('movie/popular?language=pt-BR').then(results => {
setPopulares(results.data.results)
})

}, [])
useEffect(() => {
apiFilmes.get('movie/now_playing?language=pt-BR').then(results => {
setLancamentos(results.data.results)
})

}, [])

return (

<Pagina titulo="Página Inicial">
    <h1>Filmes Populares
    </h1>
    <Slide lista={filmesPopulares} link="filmes"/>
    <h1>Filmes Lançamentos
    </h1>
    <Slide lista={filmesLancamentos} link="filmes"/>

</Pagina>
)
}