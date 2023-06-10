import React from "react";
import {useLoaderData} from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  return (
    <div>
      <h2>Toy Details</h2>
    </div>
  );
};

export default ToyDetails;
