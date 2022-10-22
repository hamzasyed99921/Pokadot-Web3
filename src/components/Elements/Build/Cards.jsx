import React from "react";

const Cards = () => {
  return (
    <>
      <div className="card_backbg">
        <div className="container">
          <h2 className="text-center">Tools that come with Substrate</h2>
          <div className="row mt-5">
            <div className="col-md-4 col-12 mt-4">
              <div className="card shadow" style={{ height: "8rem" }}>
                <div className="card-body">
                  <p>
                    Polkadot Telemetry Service
                  </p>
                    <h5>Network information</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-4">
              <div className="card shadow" style={{ height: "8rem" }}>
                <div className="card-body">
                  <p>
                  Substrate and Polkadot UI
                  </p>
                    <h5>Built with React.js and RxJS</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-4">
              <div className="card shadow" style={{ height: "8rem" }}>
                <div className="card-body">
                  <p>
                  Substrate and Polkadot UI
                  </p>
                    <h5>Built with React.js and RxJS</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 col-12 mt-4">
              <div className="card shadow" style={{ height: "8rem" }}>
                <div className="card-body">
                  <p>
                  Polkabot
                  </p>
                    <h5>Network monitoring and reporting</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-4">
              <div className="card shadow" style={{ height: "8rem" }}>
                <div className="card-body">
                  <p>
                  Polkascan
                  </p>
                    <h5>Blockchain data explorer and analytics</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-4"></div>
          </div>
        </div>
        <div className="container text-center">
            <h2>Start building your custom <br /> parachain with Substrate</h2>
            <button>Substrate Developer Hub</button>
            <p className="mt-4" style={{fontSize: '17px', color: '#1e1e1e'}}>or learn More.</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
