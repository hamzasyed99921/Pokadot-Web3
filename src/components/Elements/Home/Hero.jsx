import React from "react";
import  { ScrollRotate } from 'react-scroll-rotate';

const Hero = () => {
  return (
    <>
      <section className="hero_section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="hero_left">
                <h2>The multichain vision for <br /> Web3 starts here.</h2>
                <p>
                  Polkadot unites and secures a growing ecosystem of specialized
                  blockchains called parachains. Apps and services on Polkadot
                  can securely communicate across chains, forming the basis for
                  a truly interoperable decentralized web.
                </p>
                <div className="d-flex d-sm-flex-wrap mt-5">
                <a href="#">Learn Parachains</a>
                <a href="#" className="mx-3">Learn Cross-Chain</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-12 d-flex justify-content-center position-relative mt-5  " >
            <ScrollRotate animationDuration={2.5}  from={270} to={90}>
              <img src="assets/images/hero.png" className="img-fluid  hero_before_img" style={{width: '400px'}} alt="" />
            </ScrollRotate>
              <div className='position-absolute hero_after_img' style={{top: 0}} >
            <ScrollRotate animationDuration={2.5} from={90} to={270}>
              <img src="assets/images/hero-outer.svg" style={{width: '400px'}} className="" alt="" />
              </ScrollRotate>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
