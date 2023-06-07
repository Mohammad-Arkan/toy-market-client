import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <Link to="/" className="text-3xl font-bold">
            SpeedyToys
          </Link>
          <p>
            Speedy Toys Ltd.
            <br />
            Copyright &copy; 2023 SpeedyToys.
          </p>
        </div>
        <div>
          <span className="footer-title">PAGES</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/" className="link link-hover">
            All Toys
          </Link>
          <Link to="/" className="link link-hover">
            My Toys
          </Link>
          <Link to="/" className="link link-hover">
            Add A Toy
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
