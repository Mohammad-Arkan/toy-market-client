import React from "react";
import {Link} from "react-router-dom";

const AllToysRow = ({toy}) => {
  console.log(toy);
  const {sellerName, toyName, subCategory, price, availableQuantity} = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <th>
        <button className="btn btn-primary btn-xs">
          <Link to="/toys/:id">View Details</Link>
        </button>
      </th>
    </tr>
  );
};

export default AllToysRow;
