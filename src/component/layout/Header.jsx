import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg   fw-bold  " id="head">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img  src="assets/logo.png" alt=" " width={350} />

        </a>
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
      <div className="btn text-info border-info bg-transparet position-absolute top-1 end-0 me-5 ">Connect Wallet</div>
        
        </div>
      </div>
    </nav>
  );
}
