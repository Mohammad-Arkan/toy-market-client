import {useContext, useEffect} from "react";
import {AuthContext} from "../../providers/AuthProvider";
import {useState} from "react";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const {user} = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `http://localhost:5000/my-toys/?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Confirm that You Want To Delete It");
    if (proceed) {
      fetch(`http://localhost:5000/my-toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

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
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
