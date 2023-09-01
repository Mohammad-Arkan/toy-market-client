import React from "react";
import {useLoaderData} from "react-router-dom";
import {pageTitle} from "../../utils/PageTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
  pageTitle("Update Toy");
  const toy = useLoaderData();
  const {_id, price, availableQuantity, detailsDescription} = toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const detailsDescription = form.detailsDescription.value;

    const updatedToy = {
      price,
      availableQuantity,
      detailsDescription,
    };

    fetch(`https://toy-marketplace.onrender.com/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Your Toy Info Updated!", "success");
        }
      });
  };
  return (
    <>
      <div className="text-3xl text-center my-5">
        <h2 className="font-semibold">Toy Update</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleUpdateToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                required
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                defaultValue={availableQuantity}
                name="availableQuantity"
                placeholder="Available Quantity"
                className="input input-bordered flex-grow-1"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              defaultValue={detailsDescription}
              name="detailsDescription"
              placeholder="Toy Details"
              className="input input-bordered h-full p-3"
            />
          </div>
          <div className="form-control mt-10">
            <input
              className="btn btn-block btn-primary"
              type="submit"
              value="Update Toy"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToy;
