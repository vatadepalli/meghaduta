import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="nav-content">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <a className="navbar-brand" href="#">{ siteTitle }</a>
    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/blog">Blog</Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          History
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/">Action</Link>
          <Link className="dropdown-item" to="/">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/">Something else here</Link>
        </div>
      </li>
    </ul>

    </div>

    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
