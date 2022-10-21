import React from "react";

const Roadmap = () => {
  return (
    <>
      <div className="roadmap_bg">
        <div className="container text-center">
          <div className="roadmap_txt ">
            <h2 className="text-center mb-4">Roadmap</h2>
            <p className="text-center mb-4">
              The launch of Polkadot v1 began in May 2020 with the Relay Chain
              genesis <br /> block and finished in December 2021 with the launch of
              parachains. Several <br /> post-launch developments and optimizations are
              expected for 2022 and beyond.
            </p>
            <button className="btn">See Launch Roadmap</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
