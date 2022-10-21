import React from "react";

const Network = () => {
  return (
    <>
      <section className="network_section">
        <div className="container">
          <h2 className="text-center">Powering the Polkadot network</h2>
          <p className="text-center">
            The DOT token serves three distinct purposes:
            <br /> governance over the network, staking and bonding.
          </p>
          <div className="row mt-5">
            <div className="col-md-4 col-12">
              <div className="card text-center border-0">
                <div style={{ padding: "24px 24px 0", margin: "0 24px" }}>
                  <img
                    src="assets/images/network1.svg"
                    className="card-img-top img-fluid"
                    style={{ width: "90%", padding: "24px" }}
                    alt="..."
                  />
                </div>
                <div className="card-body " style={{ padding: "20px 30px" }}>
                  <h5 className="card-title my-3">Governance</h5>
                  <p className="card-text mb-3">
                    Polkadot token holders have complete control over the
                    protocol. All privileges, which on other platforms are
                    exclusive to miners, will be given to the Relay Chain
                    participants (DOT holders), including managing exceptional
                    events such as protocol upgrades and fixes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card text-center border-0">
                <div style={{ padding: "24px 24px 0", margin: "0 24px" }}>
                  <img
                    src="assets/images/network2.svg"
                    className="card-img-top img-fluid"
                    style={{ width: "90%", padding: "24px" }}
                    alt="..."
                  />
                </div>
                <div className="card-body " style={{ padding: "20px 30px" }}>
                  <h5 className="card-title my-3">Staking</h5>
                  <p className="card-text mb-3">
                    Game theory incentivizes token holders to behave in honest
                    ways. Good actors are rewarded by this mechanism whilst bad
                    actors will lose their stake in the network. This ensures
                    the network stays secure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card text-center border-0">
                <div style={{ padding: "24px 24px 0", margin: "0 24px" }}>
                  <img
                    src="assets/images/network3.svg"
                    className="card-img-top img-fluid"
                    style={{ width: "90%", padding: "24px" }}
                    alt="..."
                  />
                </div>
                <div className="card-body " style={{ padding: "20px 30px" }}>
                  <h5 className="card-title my-3">Bonding</h5>
                  <p className="card-text mb-3">
                    New parachains are added by bonding tokens. Outdated or
                    non-useful parachains are removed by removing bonded tokens.
                    This is a form of proof of stake.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="text-center card_bottom">
              <h3 className="mb-4 text-white">
                Learn more about <br /> the DOT token
              </h3>
              <a href="#" className="text-white">
                Discover DOT
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Network;
