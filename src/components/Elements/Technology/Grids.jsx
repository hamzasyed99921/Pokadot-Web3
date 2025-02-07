import React from "react";

const Grids = () => {
  return (
    <>
      <div className="grid_bg">
        <div className="container">
          <div className="row w-75 m-auto">
            <div className="col-md-8 col-12">
              <h1 className="mb-4">A better security model</h1>
              <p>
                In both Proof-of-Work and Proof-of-Stake systems, blockchains
                compete with each other over resources to secure their networks,
                and blockchains are easily attacked until they develop a
                significant community to support their network. <br /> <br />
                Polkadot takes a different approach by letting blockchains pool
                their security, which means that the blockchains' security is
                aggregated and applied to all. <br /> <br />
                By connecting to Polkadot, blockchain developers can secure
                their blockchain from day one.
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-center ">
              <img
                src="assets/images/dg1.svg"
                className="img-fluid  w-75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row w-75 m-auto">
            <div className="col-md-4 col-12 d-flex justify-content-center ">
              <img
                src="assets/images/dg2.svg"
                className="img-fluid  w-75"
                alt=""
              />
            </div>
            <div className="col-md-8 col-12">
              <h1 className="mb-4">
                XCM: a secure cross-chain communication standard
              </h1>
              <p>
                For blockchains to work together and form the basis of Web3,
                they need a common language for communication. Polkadot sets the
                standard with XCM, a cross-consensus communication format and
                programming language that allows blockchains of different
                designs to securely exchange arbitrary data, code, and value. In
                this way, a new wave of rich cross-chain applications and
                services can be built that tap into the features and benefits of
                different chains.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row w-75 m-auto">
            <div className="col-md-8 col-12">
              <h1 className="mb-4">A green, energy-efficient protocol</h1>
              <p>
                It’s hard to get behind blockchain as the next technological
                revolution when it wastes so much energy. Polkadot is designed
                to power the web’s next big wave of innovation, without the high
                energy consumption of conventional proof-of-work blockchains.{" "}
                <br /> <br />
                Polkadot’s Nominated Proof-of-stake (NPoS) model uses a small
                fraction of the energy consumed by conventional blockchains, and
                has the lowest carbon footprint among proof-of-stake protocols
                analyzed in recent research.
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-center ">
              <img
                src="assets/images/dg3.svg"
                className="img-fluid  w-75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row w-75 m-auto">
            <div className="col-md-4 col-12 d-flex justify-content-center ">
              <img
                src="assets/images/dg4.svg"
                className="img-fluid  w-75"
                alt=""
              />
            </div>
            <div className="col-md-8 col-12">
              <h1 className="mb-4">Transparent on-chain governance</h1>
              <p>
                Updates to the protocol happen fork-free via transparent
                on-chain voting, so protocol development never stalls due to the
                lack of a clear process. The relay chain uses a sophisticated
                governance mechanism that is designed to establish a
                transparent, accountable and binding process for resolving
                disputes and upgrading the network. <br /> <br /> DOT tokens are
                used to participate in governance decisions, including tabling
                proposals, voting, and bonding. <br /> <br /> Parachains are
                free to design their own governance mechanisms, allowing for
                maximum freedom without affecting other parachains. <br />{" "}
                <br /> Learn more about Polkadot’s governance
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row w-75 m-auto">
            <div className="col-md-8 col-12">
              <h1 className="mb-4">
                On-chain treasury for decentralized project funding
              </h1>
              <p>
                Polkadot’s governance system also features an on-chain treasury
                that the community can use to fund projects that benefit the
                network. Any DOT holder can submit project funding and bounty
                proposals, and can nominate community members for tips based on
                work completed. <br /> <br /> With tens of millions of DOT
                available for spending, the treasury represents a powerful
                resource for fueling Web3 innovation. <br /> <br /> Learn more
                about the Polkadot treasury
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-center ">
              <img
                src="assets/images/dg5.svg"
                className="img-fluid  w-75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row w-75 m-auto">
            <div className="col-md-4 col-12 d-flex justify-content-center ">
              <img
                src="assets/images/dg6.svg"
                className="img-fluid  w-75"
                alt=""
              />
            </div>
            <div className="col-md-8 col-12">
              <h1 className="mb-4">
                GRANDPA: a trustworthy consensus algorithm
              </h1>
              <p>
                Polkadot uses its original GRANDPA (GHOST-based Recursive
                Ancestor Deriving Prefix Agreement) consensus for a more secure
                and resilient network. <br /> <br /> Under good network conditions, GRANDPA
                can finalize blocks nearly instantly. Under bad network
                conditions, like a network partition, GRANDPA can finalize large
                quantities of blocks (theoretically millions) at once when the
                partitions resolve. <br /> <br /> Learn more about GRANDPA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grids;
