import React, {useEffect, useState} from "react";
import AllToysRow from "./AllToysRow";
import {pageTitle} from "../../utils/PageTitle";

const AllToys = () => {
  pageTitle("All Toys");
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://toy-marketplace-server-tau-amber.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="text-center mt-5">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by Toy Name"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="overflow-x-auto w-full my-12">
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
            {toys
              .filter((toy) => {
                return search.toLowerCase() === ""
                  ? toy
                  : toy.toyName.toLowerCase().includes(search);
              })
              .map((toy) => (
                <AllToysRow key={toy._id} toy={toy}></AllToysRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
