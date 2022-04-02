import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiFilmes from '../../services/api/filmes.js';
import { Card, Button, Row, Col} from 'react-bootstrap'
import Cartao from '../../components/Cartao';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


export default () => {

const [seriesPopulares, setPopulares] = useState([])
const [seriesNoAr, setNoAr] = useState([])
const [seriesBemAvaliadas, setBemAvaliadas] = useState([])

useEffect(() => {
apiFilmes.get('tv/popular?language=pt-BR').then(results => {
setPopulares(results.data.results)
})

}, [])
useEffect(() => {
apiFilmes.get('tv/on_the_air?language=pt-BR').then(results => {
setNoAr(results.data.results)
})

}, [])
useEffect(() => {
apiFilmes.get('tv/top_rated?language=pt-BR').then(results => {
setBemAvaliadas(results.data.results)
})

}, [])

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 7,
slidesToScroll: 7
};

return (

<Pagina titulo="Página Inicial">
    <h1>Séries Populares
    </h1>
    <Slider {...settings}>
        {seriesPopulares.map(item =>
        <Card className="mb-3">
            <Link to={"/series/" + item.id}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
            </Link>
        </Card>
        )}
    </Slider>
    <h1>Séries No Ar
    </h1>
    <Slider {...settings}>
        {seriesNoAr.map(item =>
        <Card className="mb-3">
            <Link to={"/series/" + item.id}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
            </Link>
        </Card>
        )}
    </Slider>
    <h1>Séries Bem Avaliadas
    </h1>
    <Slider {...settings}>
        {seriesBemAvaliadas.map(item =>
        <Card className="mb-3">
            <Link to={"/series/" + item.id}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
            </Link>
        </Card>
        )}
    </Slider>


</Pagina>
)
}