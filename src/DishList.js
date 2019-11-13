import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const NoDishItems = () => (
  <CollectionItem style={{ color: "gray" }}>(none added yet)</CollectionItem>
);

const SomeDishItems = ({ dishNames }) =>
  dishNames.map(dishName => (
    <CollectionItem key={dishName}>{dishName}</CollectionItem>
  ));

const DishItems = ({ dishNames }) =>
  dishNames.length === 0 ? (
    <NoDishItems />
  ) : (
    <SomeDishItems dishNames={dishNames} />
  );

function DishList({ dishNames }) {
  return (
    <Collection header="Dishes">
      <DishItems dishNames={dishNames} />
    </Collection>
  );
}

export default DishList;
