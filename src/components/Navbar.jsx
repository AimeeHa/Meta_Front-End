import logo from '../assets/logo.png';
import logo_small from '../assets/logo_small.png';

export default function Navbar() {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Reservations', link: '/reservations' },
    { name: 'Order Online', link: '/order-online' },
    { name: 'Login', link: '/login' },
  ];

  const NavItemDisplay = (
    <ul className="navbar_right">
      {navItems.map((item, index) => {
        return (
          <li className="navbar_item" key={index}>
            <a href={item.link} className="navbar_link">
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );

  if (window.innerWidth > 800) {
    return (
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_left">
            <img src={logo} alt="logo" className="navbar_logo" />
          </div>
          {NavItemDisplay}
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_left">
            <img src={logo_small} alt="logo" className="navbar_logo" />
          </div>
          {NavItemDisplay}
        </div>
      </div>
    );
  }
}
