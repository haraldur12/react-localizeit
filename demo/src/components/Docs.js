import React from 'react';
import { Grid, Row , Col, Well } from 'react-bootstrap';

const Docs = ({lit}) => (
  <Grid>
    <Row>
      <Col xs={4} md={8} xsOffset={2}>
          <h1>{lit('howto')}</h1>
          <p>{lit('first')}</p>   
          <Well>npm install react-localizeit</Well>
      </Col>
    </Row>
    </Grid>
);

export default Docs;
