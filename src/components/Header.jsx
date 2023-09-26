import logo from '../assets/logo.png';
import logo_small from '../assets/logo_small.png';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Reservations', link: '/reservations' },
    { name: 'Order Online', link: '/order-online' },
    { name: 'Login', link: '/login' },
  ];

  const NavItemDisplay = (
    <ul className="navbar-list">
      {navItems.map((item, index) => {
        return (
          <li className="navbar-item" key={index}>
            <a href={item.link} className="navbar-link">
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );

  useEffect(() => {
    function updateIsLargeScreen() {
      setIsLargeScreen(window.innerWidth > 960);
    }
    window.addEventListener('resize', updateIsLargeScreen);
    return () => {
      window.removeEventListener('resize', updateIsLargeScreen);
    };
  }, []);

  if (isLargeScreen) {
    return (
      <>
        <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <nav className="navbar">{NavItemDisplay}</nav>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="header">
          <img src={logo_small} alt="logo" className="logo" />
          <nav className="navbar">{NavItemDisplay}</nav>
        </header>
      </>
    );
  }
}
