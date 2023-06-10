import React from "react";
import {useLoaderData} from "react-router-dom";
import {pageTitle} from "../../utils/PageTitle";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log("check");
  pageTitle("Toy Details");
  const {
    sellerName,
    toyName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    detailsDescription,
    toyPictureUrl,
  } = toy;
  return (
    <>
      <div className="hero py-[10vh] px-3 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-7">
          <img className="rounded-lg" width={500} src={toyPictureUrl} />
          <div>
            <h1 className="text-4xl font-bold ">{toyName}</h1>
            <h2 className="font-semibold text-xl mt-5">
              Seller Name: {sellerName}
            </h2>
            <h2 className="font-semibold text-xl my-1">
              Seller Email: {sellerEmail}
            </h2>
            <h2 className="font-semibold text-xl">Price: ${price}</h2>
            <h2 className="font-semibold text-xl my-1">Rating: {rating}</h2>

            <h2 className="font-semibold text-xl mt-1">
              Available Quantity: {availableQuantity}
            </h2>
            <p className="py-5">{detailsDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
