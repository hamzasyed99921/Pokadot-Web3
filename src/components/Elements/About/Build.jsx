import React from "react";

const Build = () => {
  return (
    <>
      <section className="protocol_section">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-12 px-4">
              <h2 className="text-start">
                Who's building <br /> Polkadot?
              </h2>
              <p>
                Polkadot is the flagship project by <br /> Web3 Foundation, a
                Swiss Foundation founded <br /> to facilitate a fully functional
                and user-friendly <br /> decentralized web.
              </p>
            </div>
            <div className="col-md-6 col-12 px-4">
              <p>
                The Web3 Foundation is partnering with best-in-class entities to
                build Polkadot and foster development of the services and
                applications that will run on it. Researchers from Inria Paris
                and ETH Zurich, developers from Parity Technologies, and capital
                partners from crypto-funds such as Polychain Capital are all
                working together to develop a superlative realization of Web3,
                with Polkadot at its core. Web3 Foundation is providing grants
                for development of the ecosystem.
              </p>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-3 col-12 text-center">
              <img
                src="assets/images/circle1.svg"
                className="img-fluid w-25"
                alt=""
              />
            </div>
            <div className="col-md-3 col-12 text-center">
              <img
                src="assets/images/circle2.svg"
                className="img-fluid w-25"
                alt=""
              />
            </div>
            <div className="col-md-3 col-12 text-center">
              <img
                src="assets/images/circle3.svg"
                className="img-fluid w-25"
                alt=""
              />
            </div>
            <div className="col-md-3 col-12 text-center">
              <img
                src="assets/images/circle4.svg"
                className="img-fluid w-25"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Build;
