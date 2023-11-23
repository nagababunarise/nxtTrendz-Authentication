import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
      alt="website-logo"
      className="logo-image"
    />
    <div className="header-items">
      <li className="nav-item">Home</li>
      <li className="nav-item">Products</li>
      <li className="nav-item">Cart</li>
      <button className="button" type="button">
        Logout
      </button>
    </div>
  </div>
)
export default Header
