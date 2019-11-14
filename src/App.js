import React from "react";

import { Row, Col } from "react-materialize";
import { BrowserRouter as Router, Route } from "react-router-dom";

import RestaurantListPage from "./RestaurantListPage";
import RestaurantDetailPage from "./RestaurantDetailPage";

function App() {
  return (
    <Router>
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <Route path="/" exact component={RestaurantListPage} />
          <Route
            path="/restaurants/:name"
            exact
            component={RestaurantDetailPage}
          />
        </Col>
      </Row>
    </Router>
  );
}

export default App;
