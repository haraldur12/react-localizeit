import React from 'react';
import { Grid, Row , Col, Jumbotron, Button } from 'react-bootstrap';

const Main = ({lit, docs}) => (
  <Grid>
    <Row>
      <Col xs={4} md={8} xsOffset={2}>
        <Jumbotron>
          <h1>{lit('hello')}</h1>
          <p>{lit('desc')}</p>   
          <Button bsStyle="primary" onClick={() => docs()}>
            <i className="fa fa-book"/> {lit('docs')}
          </Button>  
        </Jumbotron>
      </Col>
    </Row>
    </Grid>
);

export default Main;
