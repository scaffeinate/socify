import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-top"
        >
          <span className="sr-only">
            Toggle navigation
          </span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="collapse navbar-collapse" id="navbar-top">
        <ul className="nav navbar-nav navbar-right" />
      </div>
    </div>
  </nav>
);

export default NavBar;
