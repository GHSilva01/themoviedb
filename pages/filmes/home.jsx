import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Slide from '../../components/Slide';


export default () => {

const [series, setSeries] = useState([])
const [filmes, setFilmes] = useState([])
const [atores, setAtores] = useState([])

useEffect(() => {
apiFilmes.get('tv/popular?language=pt-BR').then(results => {
setSeries(results.data.results)
})

}, [])
useEffect(() => {
apiFilmes.get('movie/popular?language=pt-BR').then(results => {
setFilmes(results.data.results)
})

}, [])
useEffect(() => {
apiFilmes.get('person/popular?language=pt-BR').then(results => {
setAtores(results.data.results)
})
}, [])

return (

<Pagina titulo="Página Inicial">
        <h1>Filmes <Link to="/filmes/"><small>Ver Mais</small></Link></h1>
    <Slide lista={filmes} link="filmes"/>
        <h1>Séries <Link to="/series"><small>Ver Mais</small></Link></h1>
    <Slide lista={series} link="series"/>
        <h1>Atores <Link to=""><small>Ver Mais</small></Link></h1>
    <Slide lista={atores} link="atores" foto="profile_path" />


</Pagina>
)
}