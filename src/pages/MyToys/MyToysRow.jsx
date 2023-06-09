import React from "react";

const MyToysRow = ({toy}) => {
  const {toyName, subCategory, detailsDescription, price, availableQuantity} =
    toy;
  return (
    <tr>
      <td>
        <button className="btn btn-sm btn-circle">
          <i class="fa-solid fa-xmark" style={{color: "#f88"}}></i>
        </button>
      </td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>{detailsDescription.slice(0, 40)}...</td>
      <th>
        <button className="btn btn-gray btn-xs">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </th>
    </tr>
  );
};

export default MyToysRow;
