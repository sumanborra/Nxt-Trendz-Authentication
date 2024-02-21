// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <>
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="image-website-logo"
          />
          <div className="list-header-container">
            <ul className="list-container-header">
              <li className="list-item">
                <Link to="/" className="nav-link">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link">
                  <p>Products</p>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link">
                  <p>Cart</p>
                </Link>
              </li>
            </ul>
            <button className="logout-button" type="button">
              Logout
            </button>
          </div>
        </nav>
        <nav className="nav-sm">
          <div className="logo-logout-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
              alt="website logo"
              className="image-website-logo-sm-devices"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="logout-image"
            />
          </div>
          <div className="images-header-sm-device-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="home-image-sm"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="home-image-sm"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="home-image-sm"
            />
          </div>
        </nav>
      </>
    )
  }
}
export default Header
