import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <div className ="container-fluid">
    <NavLink className ="navbar-brand" href="#">Test Login</NavLink>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="co llapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <NavLink className ="nav-link active" aria-current="page" to ="/">Home</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink className ="nav-link" to ="/login">Login</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink className ="nav-link" to ="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
