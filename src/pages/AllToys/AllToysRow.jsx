import React from "react";
import {Link} from "react-router-dom";

const AllToysRow = ({toy}) => {
  const {_id, sellerName, toyName, subCategory, price, availableQuantity} = toy;
  return (
    <tr>
      <td></td>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <th>
        <button className="btn btn-primary btn-xs">
          <Link to={`/toys/${_id}`}>View Details</Link>
        </button>
      </th>
    </tr>
  );
};

export default AllToysRow;
