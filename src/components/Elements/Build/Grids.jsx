import React from "react";

const Grids = () => {
  return (
    <>
      <div className="grid_backg">
        <div className="container">
          <h2 className="text-center text-white">
            Easily build a Polkadot parachain with <br /> Substrate
          </h2>
          <h3 className="text-center">
            Build your application-specific blockchain with the
            <span>
              <u>Substrate</u>
            </span>
            framework now and easily connect it <br /> to Polkadot after launch.
          </h3>
          <div className="row text-white mt-5">
            <div className="col-md-4 col-12">
              <h4 className="mb-3">
                Native Polkadot <br /> compatibility
              </h4>
              <p>
                Blockchains built with Substrate are natively compatible with
                Polkadot, so they can be easily connected to Polkadot as a
                parachain or parathread.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h4 className="mb-3">Fork-free upgrades</h4>
              <p>
                Upgrade your blockchain without a hard fork. Your runtime is a
                Wasm binary stored on-chain and can be updated using your
                chain’s governance mechanism.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h4 className="mb-3">
                Plug-and-play modular <br /> framework
              </h4>
              <p>
                Substrate allows you to simply plug in the functionalities you
                need, while also giving you the freedom to customize as needed.
              </p>
            </div>
          </div>
          <div className="row text-white mt-5">
            <div className="col-md-4 col-12">
              <h4 className="mb-3">Interchain connectivity</h4>
              <p>
                By connecting your blockchain to Polkadot, your blockchain will
                be able to pass arbitrary messages to other chains in the
                Polkadot network.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h4 className="mb-3">Instant security</h4>
              <p>
                Simply by connecting your blockchain to Polkadot, your
                blockchain will be secured by Polkadot’s pooled security.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h4 className="mb-3">Multiple languages</h4>
              <p>
                With Substrate, you can write your blockchain logic in any
                language that can compile to WebAssembly (Rust, C/C++, C#, Go,
                etc).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grids;
