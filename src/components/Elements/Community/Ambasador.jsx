import React from "react";

const Ambasador = () => {
  return (
    <>
      <div className="ambasidor_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 mt-5">
              <h2>Get a grant to build the Polkadot ecosystem</h2>
              <p>
                Web3 Foundation provides grants to steward research and
                development of Polkadot and the Web3 tech stack. The program
                funds work on runtime modules and parachains, development tools,
                UI, protocol integrations, maintenance, and more.
              </p>
              <button>Learn More</button>
            </div>
            <div className="col-md-6 col-12 mt-5">
              <h2>Apply for funding from the Polkadot treasury</h2>
              <p>
                The Polkadot community supports projects that benefit the
                network with funding from the Polkadot treasury, an on-chain pot
                of DOT tokens. Submit a proposal for a project related to
                software, infrastructure, or app development, marketing,
                community outreach, educational initiatives, and more.
              </p>
              <button>Learn More</button>
            </div>
            <div className="col-md-6 col-12 mt-5"></div>
            <div className="col-md-6 col-12 mt-5">
            <h2>Become a Polkadot Ambassador</h2>
              <p>
              Check out the post and apply to join the vibrant polkadot community.
              </p>
              <button>Apply to Become an Ambassador</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ambasador;
