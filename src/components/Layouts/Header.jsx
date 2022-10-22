import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className=" d-md-none  d-none d-lg-block navbar-expand-sm" >
        <div className="container d-flex justify-content-between align-items-center">
          <div className="dropdown">
            <a
              className=" dropdown-toggle text-decoration-none"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EN
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        
          <div className="header_right" style={{ width: "40%" }}>
            <ul className="d-flex mt-3  list-unstyled align-items-center">
              <li className="mx-3">Lightpaper</li>
              <li className="mx-3">Whitepaper</li>
              <li className="mx-3">Wiki</li>
              <li className="mx-">
                <BsGithub size={25} />
              </li>
              <li className="mx-2">
                <FaDiscord
                  size={25}
                  style={{
                    border: "2px solid rgb(173, 173, 173)",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                />
              </li>
              <li className="mx-1">
                <BsTwitter
                  size={25}
                  style={{
                    border: "2px solid rgb(173, 173, 173)",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                />
              </li>
              <li className="mx-1 ">
                <a href="#" className="text-decoration-none suport_btn">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{ margin: "0%" }} />
      <nav className="navbar navbar-expand-lg  bg-white" style={{zIndex: '1'}} id="navbar_top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/images/logo-polkadot.svg"
              className="img-fluid"
              style={{width:'60%'}}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-2  mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/build">
                  Build
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
