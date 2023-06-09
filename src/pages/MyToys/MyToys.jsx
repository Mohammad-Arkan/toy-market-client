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
  console.log(toys);
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
              <MyToysRow key={toy._id} toy={toy}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
