import React, {useEffect, useState} from "react";
import AllToysRow from "./AllToysRow";
import {pageTitle} from "../../utils/PageTitle";

const AllToys = () => {
  pageTitle("All Toys");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center my-7">
        Available Toys: {toys.length}
      </h2>
      <div className="overflow-x-auto w-full my-16">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <AllToysRow key={toy._id} toy={toy}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
