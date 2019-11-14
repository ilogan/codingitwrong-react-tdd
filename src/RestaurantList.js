import React from "react";
import { Link } from "react-router-dom";

import { Collection, CollectionItem } from "react-materialize";

const NoRestaurantItems = () => (
  <CollectionItem style={{ color: "gray" }}>(none added yet)</CollectionItem>
);

const SomeRestaurantItems = ({ restaurantNames }) =>
  restaurantNames.map(restaurantName => (
    <CollectionItem key={restaurantName}>
      <Link to={`/restaurants/${restaurantName}`}>{restaurantName}</Link>
    </CollectionItem>
  ));

const RestaurantItems = ({ restaurantNames }) =>
  restaurantNames.length === 0 ? (
    <NoRestaurantItems />
  ) : (
    <SomeRestaurantItems restaurantNames={restaurantNames} />
  );

const RestaurantList = ({ restaurantNames }) => (
  <Collection header="Restaurants">
    <RestaurantItems restaurantNames={restaurantNames} />
  </Collection>
);

export default RestaurantList;
