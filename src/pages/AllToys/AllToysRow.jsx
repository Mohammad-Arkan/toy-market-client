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
        <Link className="btn btn-primary btn-xs" to={`/toys/${_id}`}>
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
