import React from "react";

const Connect = () => {
  return (
    <>
      <section className="connect_bg">
        <div className="container">
          <h2>Connecting the dots</h2>
          <div className="row mt-5">
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain1.svg" className="w-50 mb-3" alt />
                <h3>Relay Chain</h3>
                <p>
                  The heart of Polkadot, responsible for the network’s shared
                  security, consensus and cross-chain interoperability.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain2.svg" className="w-50 mb-3" alt />
                <h3>Parachains</h3>
                <p>
                  Sovereign blockchains that can have their own tokens and
                  optimize their functionality for specific use cases.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain3.svg" className="w-50 mb-3" alt />
                <h3>Parathreads</h3>
                <p>
                  Similar to parachains but with a pay-as-you-go model. More
                  economical for blockchains that don’t need continuous
                  connectivity to the network.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain4.svg" className="w-50 mb-3" alt />
                <h3>Bridges</h3>
                <p>
                  Allow parachains and parathreads to connect and communicate
                  with external networks like Ethereum and Bitcoin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Consensus Roles</h2>
          <div className="row mt-5">
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain5.svg" className="w-50 mb-3" alt />
                <h3>Nominators</h3>
                <p>
                  Secure the Relay Chain by selecting trustworthy validators and
                  staking dots.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain6.svg" className="w-50 mb-3" alt />
                <h3>Validators</h3>
                <p>
                  Secure the relay chain by staking dots, validating proofs from
                  collators and participating in consensus with other
                  validators.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain7.svg" className="w-50 mb-3" alt />
                <h3>Collators</h3>
                <p>
                  Maintain shards by collecting shard transactions from users
                  and producing proofs for validator.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Governance Roles</h2>
          <div className="row mt-5">
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain8.svg" className="w-50 mb-3" alt />
                <h3>Council Members</h3>
                <p>
                  Elected to represent passive stakeholders in two primary
                  governance roles: proposing referenda and vetoing dangerous or
                  malicious referenda.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div>
                <img src="assets/images/chain9.svg" className="w-50 mb-3" alt />
                <h3>Technical Committee</h3>
                <p>
                  Composed of teams actively building Polkadot. Can propose
                  emergency referenda, together with the council, for
                  fast-tracked voting and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
