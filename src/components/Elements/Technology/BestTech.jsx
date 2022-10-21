import React from "react";

const BestTech = () => {
  return (
    <>
      <div className="best_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="assets/images/stack.svg" alt="" />
            </div>
            <div className="col-md-6 col-12">
              <h2>Built with the best technology</h2>
              <p>
                Polkadot’s relay chain is built with Substrate, a
                blockchain-building framework that is the distillation of Parity
                Technologies’ learnings building Ethereum, Bitcoin, and
                enterprise blockchains. <br /> <br />
                Polkadot’s state machine is compiled to WebAssembly (Wasm), a
                super performant virtual environment. Wasm is developed by major
                companies, including Google, Apple, Microsoft, and Mozilla, that
                have created a large ecosystem of support for the standard
                <br /><br />
                Polkadot’s networking uses libp2p, a flexible cross-platform
                network framework for peer-to-peer applications. Positioned to
                be the standard for future decentralized applications, libp2p
                handles the peer discovery and communication in the Polkadot
                ecosystem. <br /><br />
                The Polkadot runtime environment is being coded in Rust, C++,
                and Golang, making Polkadot accessible to a wide range of
                developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestTech;
