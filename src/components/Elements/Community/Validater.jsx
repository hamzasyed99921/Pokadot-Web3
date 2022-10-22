import React from "react";

const Validater = () => {
  return (
    <>
      <div className="validater_bg">
        <div className="container">
          <h2>Become a validator</h2>

          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <h3 className="mb-3">1. Set up your machine</h3>
              <ul>
                <p>
                  In addition to any usual CLI parameters that you run polkadot
                  with, you'll need to add an extra two:
                </p>
                <li>
                  <span>--validator</span> This tells your node to try to
                  validate when it sees itself as a listed authority on the
                  network;
                </li>
                <li>
                  <span>--key seed </span>
                  This provides your node with a secret key that lets it know
                  whether it's a listed authority on the network, and, if it is,
                  lets it sign statements to authorise the creation of new
                  blocks.
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <h3 className="mb-3">2. Apply to validate</h3>

              <p>
                New validators will be chosen every 24 hours on mainnet. You’ll
                need to create separate accounts for Controller, Session, and
                Stash keys on the Polkadot UI
                (https://polkadot.js.org/apps/#/accounts/create). These accounts
                will be used to represent and control the validator node you
                just set up. <br /> <br />
                Next you will need to get some DOT from the faucet or by asking
                on Element. Assuming you have more DOT than the lowest staked
                validator or there is an open validator slot, you can register
                to be staked. A step-by-step guide demonstrating how to set up
                your accounts and bond your DOT is available on the wiki.
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center">
            <h2>Want to become a validator?</h2>
            <button>Read More</button>
            <p className="mt-3">You can see validator stats on Telemetry.</p>
        </div>
      </div>
    </>
  );
};

export default Validater;
