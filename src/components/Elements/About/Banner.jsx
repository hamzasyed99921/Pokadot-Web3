import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner_bg">
        <div className="container">
          <h2 className="text-center text-white">
            Founded by some of the <br /> blockchain industry’s <br /> foremost
            builders
          </h2>
        </div>
      </div>
      <div className="bottom_card">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card shadow px-2 py-3">
                <div className="card-body">
                  <h3>Robert Habermeier</h3>
                  <small>Founder</small>
                  <p className="mt-3">
                    Robert Habermeier is a Thiel Fellow and co-founder of
                    Polkadot. He has a research and development background in
                    blockchains, distributed systems, and cryptography. A
                    longtime member of the Rust community, he has focused on
                    leveraging the language’s features to build highly parallel
                    and performant solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow px-2 py-3">
                <div className="card-body">
                  <h3>Dr. Gavin Wood</h3>
                  <small>Founder</small>
                  <p className="mt-3">
                    Gavin began originating blockchain technology as co-founder
                    and CTO of Ethereum. He invented fundamental components of
                    the blockchain industry, including Solidity,
                    Proof-of-Authority consensus, and Whisper. At Parity, Gavin
                    currently leads innovation on Substrate and Polkadot. He
                    coined the term Web 3.0 in 2014 and serves as President of
                    Web3 Foundation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow px-2 py-3">
                <div className="card-body">
                  <h3>Peter Czaban</h3>
                  <small>Founder</small>
                  <p className="mt-3">
                    Peter is the Technology Director of the Web3 Foundation,
                    where he works on supporting the development of the next
                    generation of distributed technologies. He obtained his
                    Masters of Engineering degree at the University of Oxford,
                    reading Engineering Science where he focused on Bayesian
                    Machine Learning. He has worked across defense, finance and
                    data analytics industries, working on mesh networks,
                    distributed knowledge bases, quantitative pricing models,
                    machine learning and business development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_logo">
        <div className="container">
        <h4 className="text-center">In the press:</h4>
            <div className="row text-center d-flex align-items-center">
                <div className="col-md-2 col-6"><img src="assets/images/h1.svg" className="img-fluid w-75 mt-5" alt="" /></div>
                <div className="col-md-2 col-6"><img src="assets/images/h2.svg" className="img-fluid w-25 mt-5" alt="" /></div>
                <div className="col-md-2 col-6"><img src="assets/images/h3.svg" className="img-fluid w-75 mt-5" alt="" /></div>
                <div className="col-md-2 col-6"><img src="assets/images/h4.svg" className="img-fluid w-75 mt-5" alt="" /></div>
                <div className="col-md-2 col-6"><img src="assets/images/h5.svg" className="img-fluid w-75 mt-5" alt="" /></div>
                <div className="col-md-2 col-6"><img src="assets/images/h6.svg" className="img-fluid w-75 mt-5" alt="" /></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
