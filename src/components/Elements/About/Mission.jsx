import React from "react";

const Mission = () => {
  return (
    <>
      <div className="mission_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 mt-5">
              <h3>
                The Polkadot <br /> mission
              </h3>
              <p>
                We envision a Web where our identity and our <br /> data is our own -
                safely secured from any <br /> central authority.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <p>
                Polkadot will enable a completely decentralized web where users
                are in control. <br /> <br /> Polkadot is built to connect private and
                consortium chains, public and permissionless networks, oracles,
                and future technologies that are yet to be created. Polkadot
                facilitates an internet where independent blockchains can
                exchange information and transactions in a trustless way via the
                Polkadot relay chain. <br /> <br /> Polkadot makes it easier than ever to
                create and connect decentralized applications, services, and
                institutions. By empowering innovators to build better
                solutions, we seek to free society from its reliance on a broken
                web where its large institutions can’t violate our trust.
              </p>
              <button className="mt-4">Learn About the Technology</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
