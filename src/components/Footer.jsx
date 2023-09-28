import logo from '../assets/footer-logo.png';
import { Navbar } from './Header';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-container">
        <img src={logo} alt="Logo" className="footer-logo" />
        <nav className="footer-navbar">
          {Navbar(
            'footer-navbar-list',
            'footer-navbar-item',
            'footer-navbar-link',
          )}
        </nav>
        <div className="footer-contact">
          Find us at
          <ul className="footer-contact-list">
            <li>
              123 ABC St. <br /> Chicago, Illinois, <br /> 60601, USA.
            </li>
            <li>
              <i>+(01) 0000 1111 12</i>
            </li>
            <li>
              <i>customersupport@littlelemon.com</i>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          Follow us on
          <ul className="footer-social-list">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
