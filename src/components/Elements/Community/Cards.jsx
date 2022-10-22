import React from "react";

const Cards = () => {
  return (
    <>
      <div className="card_back">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-xl-4  card_top col-12"
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
                    <h6 className="card-subtitle mb-2 text-muted">Twitter</h6>
                    <small>Follow @Polkadot</small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 pt-lg-0 card_top  col-12"
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
                    <h6 className="card-subtitle mb-2 text-muted">
                      Mailing list
                    </h6>
                    <small>Don't miss updates.</small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 pt-lg-0 card_top  col-12"
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
                    <h6 className="card-subtitle mb-2 text-muted">Reddit</h6>
                    <small>Discuss Polkadot news.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 mt-sm-2 ">
            <div
              className="col-md-6 col-xl-4 card_top col-12"
              style={{ width: "22rem", marginTop: "10px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/github.svg"
                    className="img-fluid"
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">Discord</h6>
                    <small>Discuss with the community.</small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 card_top col-12"
              style={{ width: "22rem", marginTop: "10px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/documentation.svg"
                    className="img-fluid "
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">Github</h6>
                    <small>Contribute to the codebase.</small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 card_top col-12"
              style={{ width: "22rem", marginTop: "10px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/element.svg"
                    className="img-fluid "
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">
                      Element chat
                    </h6>
                    <small>Get support.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
            <div
              className="col-md-6 col-xl-4 card_top col-12"
              style={{ width: "22rem", marginTop: "10px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/documentation.svg"
                    className="img-fluid "
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">
                      Documentation
                    </h6>
                    <small>Read the contribute to docs.</small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 card_top col-12 "
              style={{ width: "22rem", marginTop: "10px" }}
            >
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/element.svg"
                    className="img-fluid "
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">Youtube</h6>
                    <small>Watch conference videos.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container contain">
          <h2 className="text-center text-white">
            Run a node and interact with the <br /> Polkadot testnet
          </h2>
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <p className="text-white">
                Polkadot testnet If you'd like to play with Polkadot, you'll
                need to install and run the Parity Polkadot client. <br /> Get
                the client at <span>Parity’s Polkadot repo </span> <br /> <br />
                Alexander is the current default public testnet for Polkadot. By
                default, any node running on the Alexander testnet will appear
                on the
                <span>telemetry.polkadot.io</span> <br /> <br /> The testnet
                allows you to create accounts, propose governance referenda,
                stake testnet DOT to become a validator or nominate other
                accounts as validators with your testnet DOT.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <p className="text-white">
                Connect your running node to the main <br />
                <span>Polkadot user interface</span> to play around. <br />
                <br /> Get testnet DOT to stake by following these instructions
                on the <span>Polkadot Wiki</span> <br /> <br /> If you don’t
                want to run a node, you can still interact with the network by
                using <span>the explorer</span> <br /> <br /> Before interacting
                with the testnet, please read this <br /> legal notice
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
