import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
        <h3 className=' text-white'>Instore</h3>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"/>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link to ='/product'className="nav-link active  text-white" aria-current="page" href="#!">Products</Link></li>
              </ul>
         
        <div>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">                
              <Link to='/cart'class="badge bg-dark text-white ms-1 rounded-pill">Cart({cartItems.length})</Link>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
