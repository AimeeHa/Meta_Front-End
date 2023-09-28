import logo from '../assets/logo.png';
import logo_small from '../assets/logo_small.png';
import { useState, useEffect } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <nav className="navbar">
            {Navbar('navbar-list', 'navbar-item', 'navbar-link')}
          </nav>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className="header-small">
          <img
            src={logo_small}
            alt="logo"
            className="logo"
            style={{ paddingLeft: '36px' }}
          />
          {isMenuOpen ? (
            <>
              <nav className="navbar-small">
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <CloseRoundedIcon style={{ width: '30px', height: '30px' }} />
                </div>
                {Navbar('navbar-list-small', 'navbar-item', 'navbar-link')}
              </nav>
            </>
          ) : (
            <nav
              className="navbar-small"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuRoundedIcon style={{ width: '30px', height: '30px' }} />
            </nav>
          )}
        </header>
      </>
    );
  }
}

export function Navbar(ulClassName, liClassName, aClassName) {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/#about' },
    { name: 'Menu', link: '/#menu' },
    { name: 'Reservations', link: '/booking' },
    { name: 'Order Online', link: '/' },
    { name: 'Login', link: '/' },
  ];

  return (
    <ul className={ulClassName}>
      {navItems.map((item, index) => {
        return (
          <li
            className={liClassName}
            key={index}
            onClick={(e) => {
              let element = document.getElementById(item.name.toLowerCase());
              if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <a href={item.link} className={aClassName}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
