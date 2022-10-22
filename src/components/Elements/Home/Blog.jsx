import React from "react";

const Blog = () => {
  return (
    <>
      <section className="blog_section">
        <div className="container">
          <h2 className="text-center"> From the blog</h2>
          <div className="row my-5">
            <div className="col-md-4 col-12">
              <div
                className="card shadow position-relative"
                style={{ border: "none", height: "120%" }}
              >
                <img
                  src="assets/images/image1.png"
                  className="card-img-top  img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <small>Parachain</small>
                  <h5 className="card-title">
                    First Parachain Successfully Migrates from Kusama to
                    Polkadot
                  </h5>
                  <p className="card-text">
                    KILT Protocol's migration from Kusama to Polkadot is an
                    important technical milestone and the first parachain
                    migration. Polkadot's 'canary network' model allows Web3
                    projects to test their technology in a real-world
                    environment before upgrading to stable production
                    networks....
                  </p>
                  <div
                    class="card_footer mt-5 d-flex align-items-center position-absolute"
                    style={{ bottom: "10px" }}
                  >
                    <img
                      src="assets/images/icon.png"
                      className="img-fluid "
                      style={{ width: "15%" }}
                      alt=""
                    />
                    <span className="mx-2 ">Polkadot</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                className="card shadow position-relative"
                style={{ border: "none", height: "120%" }}
              >
                <img
                  src="assets/images/image2.png"
                  className="card-img-top  "
                  style={{ width: "100%", height: "212px" }}
                  alt="..."
                />
                <div className="card-body">
                  <small>Polkadot</small>
                  <h5 className="card-title">Polkadot Roadmap Roundup</h5>
                  <p className="card-text">
                    A proposed roadmap for upcoming developments on Polkadot.
                    Get the latest status on asynchronous backing, parathreads,
                    XCMv3, governance, common-good parachains and more....
                  </p>
                  <div
                    class="card_footer mt-5 d-flex align-items-center position-absolute"
                    style={{ bottom: "10px" }}
                  >
                    <img
                      src="assets/images/icon.png"
                      className="img-fluid "
                      style={{ width: "15%" }}
                      alt=""
                    />
                    <span className="mx-2 ">Polkadot</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                className="card shadow position-relative"
                style={{ border: "none", height: "120%" }}
              >
                <img
                  src="assets/images/image3.jpg"
                  className="card-img-top  img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <small>Polkadot</small>
                  <h5 className="card-title">
                    Sub0, the Polkadot Developer Conference, comes to Lisbon in
                    November
                  </h5>
                  <p className="card-text">
                    The two-day live sub0 conference will run on November
                    28th-29th. Featuring keynote presentations, breakout
                    sessions, workshops & side events. Sign up for ticket
                    updates....
                  </p>
                  <div
                    class="card_footer mt-5 d-flex align-items-center position-absolute"
                    style={{ bottom: "10px" }}
                  >
                    <img
                      src="assets/images/icon.png"
                      className="img-fluid "
                      style={{ width: "15%" }}
                      alt=""
                    />
                    <span className="mx-2 ">Polkadot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
          <div className="container d-flex justify-content-center">
            <div className="text-center blog_botm">
              <h3 className="mb-5">Want to get involved?</h3>
              <a href="#" className="">
                Join the Community
              </a>
              <p className="mt-4">or learn about how to <u style={{cursor:'pointer'}}>build on Polkadot</u>.</p>
            </div>
          </div>
     
      </section>
    </>
  );
};

export default Blog;
