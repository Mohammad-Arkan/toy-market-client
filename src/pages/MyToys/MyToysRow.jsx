import React from "react";
import {Link} from "react-router-dom";

const MyToysRow = ({toy, handleDelete}) => {
  const {
    _id,
    toyName,
    subCategory,
    detailsDescription,
    price,
    availableQuantity,
  } = toy;
  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle">
          <i className="fa-solid fa-xmark" style={{color: "#f88"}}></i>
        </button>
      </td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>{detailsDescription.slice(0, 40)}...</td>
      <th>
        <Link className="btn btn-gray btn-xs" to={`/updateToy/${_id}`}>
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
