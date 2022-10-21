import React from "react";

const Transection = () => {
  return (
    <>
      <div className="trnsection_bg">
        <div className="container">
          <h2 className="text-center text-white">
            Parachains: parallel <br /> transaction processing
          </h2>
          <div className="row mt-5">
            <div className="col-md-5 col-12">
              <p>
                Parachains are specialized blockchains that connect to Polkadot.
                They will have characteristics specialized for their use cases
                and the ability to control their own governance. <br /> <br />
                Interactions on parachains are processed in parallel, enabling highly scalable systems.<br /> <br />
                Transactions can be spread out across the chains, allowing many more transactions to be processed in the same period of time.
              </p>
              <button className="btn">Learn more about parachain</button>
            </div>
            <div className="col-md-4 col-12 text-center ">
                <strong>Current method:</strong>
                <h5>Single transaction</h5>
                <img src="assets/images/transactions-old.svg" className="img-fluid w-50" alt="" />
            </div>
            <div className="col-md-3 col-12 text-center">
            <strong>Polkadot method:</strong>
                <h5>Multi parallelized <br /> transactions</h5>
                <img src="assets/images/transactions-new.svg" className="img-fluid w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transection;
