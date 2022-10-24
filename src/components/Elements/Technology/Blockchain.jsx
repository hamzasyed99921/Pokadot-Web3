import React from "react";

const Blockchain = () => {
  return (
    <>
      <div className="blockchain_bg">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 col-12 card_top"
              style={{ width: "22rem", marginTop: "-36px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/github.svg"
                    className="img-fluid"
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">GitHub</h6>
                    <p>Latest version & history.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-12 card_top"
              style={{ width: "22rem", marginTop: "-36px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/documentation.svg"
                    className="img-fluid "
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">Documentation</h6>
                    <p>Read the documentation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-12 card_top"
              style={{ width: "22rem", marginTop: "-36px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/element.svg"
                    className="img-fluid "
                    
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">Element Chat</h6>
                    <p>Get your question.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row ">
            <div className="col-md-9 col-12 mt-5">
              <div className="blockchain_img">
                <img src="assets/images/blockchain.svg" className="" alt="" />
              </div>
            </div>
            <div className="col-md-3 col-12 mt-5 text-white">
              <h2>Any type of data across any type of blockchain</h2>
              <h5>
                Polkadot is a network protocol that allows arbitrary data—not
                just tokens—to be transferred across blockchains.
              </h5>
              <p>
                This means Polkadot is a true multi-chain application
                environment where things like cross-chain registries and
                cross-chain computation are possible. Polkadot can transfer this
                data across public, open, permissionless blockchains as well as
                private, permissioned blockchains. This makes it possible to
                build applications that get permissioned data from a private
                blockchain and use it on a public blockchain. For instance, a
                school's private, permissioned academic records chain could send
                a proof to a degree-verification smart contract on a public
                chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blockchain;
