import React from "react";

const Cards = () => {
  return (
    <>
      <div className="card_bg">
        <div className="container">
          <h2 className="text-center">
            What are teams building on <br /> Polkadot? Just a few examples:
          </h2>
          <div className="row ">
            <div className="col-md-4 col-12 mt-5">
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Smart contract chains</strong> with WebAssembly
                    smart contracts (Astar, Moonbeam)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-5">
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Data curation networks </strong> that connect all file storage chains into curated data sets
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-5" >
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Oracle chains</strong> that make off-chain data available to all contracts on the Polkadot network (ChainLink)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12  mt-5">
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Identity chains</strong> that link accounts to a persistent identity and enable access to other parachains through fewer accounts (Kilt)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12  mt-5">
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Financial chains </strong> that allow you to hold all your assets in one portfolio, including via bridges to Bitcoin, Ethereum, Bitcoin Cash, Litecoin and ZCash (Acala, Parallel Finance)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12  mt-5" >
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Internet of Things chains</strong> that set IoT standards for machine-to-machine communication (Robonomics)
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="row ">
            <div className="col-md-4 col-12 mt-5">
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Zero Knowledge</strong> privacy chains, or bridges to existing ZK-snarks chains
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-5">
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>File storage chains </strong> that incentivize storing data on-chain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-5" >
              <div className="card shadow" style={{height: '10rem'}}>
                <div className="card-body">
                  <p>
                    <strong>Bridge to Ethereum,</strong> allowing Ethereum smart contracts to interact with the Polkadot network
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
