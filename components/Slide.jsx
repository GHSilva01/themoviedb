import React from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default ({lista = [], link, foto = 'poster_path'}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7
    };


  return (
    <>

    <Slider {...settings}>
        {lista.map(item =>
        <Card className="mb-3">
            <Link to={`/${link}/${item.id}`}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item[foto]} />
            </Link>
        </Card>
        )}
    </Slider>
    </>
  )
}