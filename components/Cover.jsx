import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ lista = [], link, qtd = 2, foto = 'poster_path' }) => {

  const card = (foto) => (
    <Card>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + foto} />
    </Card>
  )

  return (
    <>
      <Row>
        {lista.map(item => (
          <React.Fragment key={item.id}>
            {
              item[foto] &&
              <Col md={qtd} key={item.id} className="mb-3">
                {link &&
                  <Link to={`/${link}/${item.id}`}>
                    {card(item[foto])}
                  </Link>
                }
                {!link && 
                  card(item[foto]) 
                }
              </Col>
            }
          </React.Fragment>
        ))}
      </Row>
    </>
  )
}