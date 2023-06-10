import React from "react";
import {useContext} from "react";
import {AuthContext} from "../../providers/AuthProvider";
import {pageTitle} from "../../utils/PageTitle";
import Swal from "sweetalert2";

const AddToy = () => {
  pageTitle("Add A Toy");
  const {user} = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const toyName = form.toyName.value;
    const toyPictureUrl = form.toyPictureUrl.value;
    const price = form.price.value;
    const subCategory = form.subCategory.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;
    const detailsDescription = form.detailsDescription.value;

    const newToy = {
      sellerName,
      sellerEmail,
      toyName,
      toyPictureUrl,
      price,
      subCategory,
      availableQuantity,
      rating,
      detailsDescription,
    };

    fetch("https://toy-marketplace-server-zynscript.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good Job!", "A New Toy Added Successfully!!", "success");
        }
      });
  };
  return (
    <>
      <div className="text-3xl text-center"></div>
      <div className="card-body">
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="sellerName"
                required
                placeholder="Seller name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="sellerEmail"
                readOnly
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                required
                name="toyName"
                placeholder="Toy Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Picture URL</span>
              </label>
              <input
                type="text"
                name="toyPictureUrl"
                placeholder="Picture URL of the Toy"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                required
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <select
                className="input input-bordered"
                name="subCategory"
                required>
                <option value="Racing Cars">Racing Cars</option>
                <option value="Regular Cars">Regular Cars</option>
                <option value="Sports Cars">Sports Cars</option>
                <option value="Vintage Cars">Vintage Cars</option>
                <option value="oOff Road Cars">Off Road Cars</option>
                <option value="Police Cars">Police Cars</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="number"
                name="availableQuantity"
                placeholder="Available Quantity"
                className="input input-bordered flex-grow-1"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="detailsDescription"
              placeholder="Toy Details"
              className="input input-bordered pt-3"
            />
          </div>
          <div className="form-control mt-10">
            <input
              className="btn btn-block btn-primary"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToy;
