import React from "react";

import { Row, Col } from "react-materialize";
import { BrowserRouter as Router, Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store";

import RestaurantListPage from "./RestaurantListPage";
import RestaurantDetailPage from "./RestaurantDetailPage";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
