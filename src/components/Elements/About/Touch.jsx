import React from "react";

const Touch = () => {
  return (
    <>
      <div className="touch_bg">
        <div className="container">
          <h2 className="text-center text-white">Get in touch</h2>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/chat.svg"
                    className="img-fluid"
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">
                      For general chat
                    </h6>
                    <small>
                      Join the <span>Watercooler</span> or <span>Discord</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/newsletter.svg"
                    className="img-fluid"
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">
                      For press inquiries
                    </h6>
                    <small>
                      Please fill out <span>this</span> form
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card shadow">
                <div className="card-body d-flex  align-items-center">
                  <img
                    src="assets/images/email.svg"
                    className="img-fluid"
                    alt=""
                  />

                  <div className="mx-3">
                    <h6 className="card-subtitle mb-2 text-muted">
                      For all other inquiries
                    </h6>
                    <small>
                      <span>support.polkadot.network</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center text-white mt-5">
            <div className="col-md-6 col-12" style={{borderRight: '1px solid white'}}>
              <h5>Stay informed of updates and events</h5>
              <p>Subscribe to the newsletter or read the blog</p>
            </div>
            <div className="col-md-6 col-12">
              <h5>Join the teams building Polkadot</h5>
              <p>See jobs at Web3 Foundation or at Parity Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;
