import React from "react";
import {Link, useLoaderData} from "react-router-dom";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyTabs = () => {
  const toys = useLoaderData();

  const racingCars = toys.filter((toys) => toys.subCategory == "Racing Cars");
  const formulaCars = toys.filter((toys) => toys.subCategory == "Formula Cars");
  const vintageCars = toys.filter((toys) => toys.subCategory == "Vintage Cars");

  return (
    <div className="text-center my-36">
      <Tabs>
        <TabList>
          <Tab>Racing Cars</Tab>
          <Tab>Formula Cars</Tab>
          <Tab>Vintage Cars</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 mx-6 gap-7">
            {racingCars.map((rc) => (
              <div key={rc._id} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={rc.toyPictureUrl} />
                </figure>
                <div className="card-body p-5">
                  <h2 className="card-title">{rc.toyName}</h2>
                  <h3 className="text-start">Price: ${rc.price}</h3>
                  <p className="text-start">Ratings: {rc.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <Link to="/toys/:id">View Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 mx-6">
            {formulaCars.map((fc) => (
              <div key={fc._id} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={fc.toyPictureUrl} />
                </figure>
                <div className="card-body p-5">
                  <h2 className="card-title">{fc.toyName}</h2>
                  <h3 className="text-start">Price: ${fc.price}</h3>
                  <p className="text-start">Ratings: {fc.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <Link to="/toys/:id">View Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 mx-6">
            {vintageCars.map((vc) => (
              <div key={vc._id} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={vc.toyPictureUrl} />
                </figure>
                <div className="card-body p-5">
                  <h2 className="card-title">{vc.toyName}</h2>
                  <h3 className="text-start">Price: ${vc.price}</h3>
                  <p className="text-start">Ratings: {vc.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <Link to="/toys/:id">View Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyTabs;
