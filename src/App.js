import React from "react";

import { Row, Col } from "react-materialize";

import RestaurantListPage from "./RestaurantListPage";

function App() {
  return (
    <div>
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <RestaurantListPage />
        </Col>
      </Row>
    </div>
  );
}

export default App;
