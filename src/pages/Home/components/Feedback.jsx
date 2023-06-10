import React from "react";

const Feedback = () => {
  return (
    <>
      {/* bg-base-200 */}
      <div className="hero my-24">
        <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left" data-aos="zoom-out-down">
            <h1 className="text-5xl font-bold">Give Us Feedback!</h1>
            <img src="" alt="" />
          </div>
          <div
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            data-aos="zoom-out-up">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="Name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Feedback</span>
                </label>
                <input
                  type="text"
                  placeholder="Feedback"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
