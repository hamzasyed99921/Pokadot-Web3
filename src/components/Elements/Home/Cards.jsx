import React from "react";

const Cards = () => {
  return (
    <>
      <div className="card_section">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card border-0">
                <img
                  src="assets/images/home-icon1.svg"
                  className="card-img-top img-fluid"
                  style={{ width: "15%" }}
                  alt="..."
                />
                <div className="card-body " style={{ padding: "0%" }}>
                  <h5 className="card-title my-3">True interoperability</h5>
                  <p className="card-text mb-3">
                    Polkadot enables cross-blockchain transfers of any type of
                    data or asset, not just tokens. Connecting to Polkadot gives
                    you the ability to interoperate with a wide variety of
                    blockchains in the Polkadot network.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card border-0">
                <img
                  src="assets/images/home-icon2.svg"
                  className="card-img-top img-fluid"
                  style={{ width: "15%" }}
                  alt="..."
                />
                <div className="card-body " style={{ padding: "0%" }}>
                  <h5 className="card-title my-3">
                    Economic & transactional scalability
                  </h5>
                  <p className="card-text mb-3">
                    Polkadot provides unprecedented economic scalability by
                    enabling a common set of validators to secure multiple
                    blockchains. Polkadot provides transactional scalability by
                    spreading transactions across multiple parallel blockchains.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card border-0">
                <img
                  src="assets/images/home-icon3.svg"
                  className="card-img-top img-fluid"
                  style={{ width: "15%" }}
                  alt="..."
                />
                <div className="card-body " style={{ padding: "0%" }}>
                  <h5 className="card-title my-3">
                    Easy blockchain innovation
                  </h5>
                  <p className="card-text mb-3">
                    Create a custom blockchain in minutes using the Substrate
                    framework. Connect your chain to Polkadot and get
                    interoperability and security from day one. This ease of
                    development helps Polkadot's network grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-12">
              <div className="card border-0">
                <img
                  src="assets/images/home-icon4-b.svg"
                  className="card-img-top img-fluid"
                  style={{ width: "15%" }}
                  alt="..."
                />
                <div className="card-body " style={{ padding: "0%" }}>
                  <h5 className="card-title my-3">High energy efficiency</h5>
                  <p className="card-text mb-3">
                    Polkadot consumes a small fraction of the energy used by
                    conventional blockchains thanks to its next-generation
                    nominated proof-of-stake (NPoS) model. Using the equivalent
                    of ~6.6 US households worth of energy per year, Polkadot has
                    the lowest carbon footprint among proof-of-stake protocols
                    analyzed in recent research.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card border-0">
                <img
                  src="assets/images/home-icon5.svg"
                  className="card-img-top img-fluid"
                  style={{ width: "15%" }}
                  alt="..."
                />
                <div className="card-body " style={{ padding: "0%" }}>
                  <h5 className="card-title my-3">Security for everyone</h5>
                  <p className="card-text mb-3">
                    Polkadot's novel data availability and validity scheme
                    allows chains to interact with each other in a meaningful
                    way. Chains remain independent in their governance, but
                    united in their security.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card border-0">
                <img
                  src="assets/images/home-icon6.svg"
                  className="card-img-top img-fluid"
                  style={{ width: "15%" }}
                  alt="..."
                />
                <div className="card-body " style={{ padding: "0%" }}>
                  <h5 className="card-title my-3">User-driven governance</h5>
                  <p className="card-text mb-3">
                    Polkadot has a sophisticated governance system where all
                    stakeholders have a voice. Network upgrades are coordinated
                    on-chain and enacted autonomously and without forking the
                    network, ensuring that Polkadot’s development remains
                    future-proof and community-driven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
            <div className="text-center card_bottom">
                <h3 className="mb-4">Learn more about Polkadot's <br /> technology</h3>
                <a href="#" className="">Discover Polkadot</a>
            </div>
      </div>
    </>
  );
};

export default Cards;
