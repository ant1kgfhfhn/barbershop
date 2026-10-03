import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="logo" to="/">
            <span className="logo__mark">B</span>
            <span>BLACKLINE</span>
          </Link>
          <p className="footer__text">
            Modern cuts. Classic craft. A barbershop built for men who care about the details.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/barbers">Barbers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About us</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p><MapPin size={15} /> Bahnhofstraße 18, Augsburg</p>
          <p><Phone size={15} /> +49 821 123 4567</p>
          <p><Clock size={15} /> Mon–Sat · 09:00–20:00</p>
        </div>

        <div>
          <h4>Follow</h4>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
          <Link className="btn btn--small footer__btn" to="/booking">Make an appointment</Link>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} BLACKLINE BARBERS</span>
        <span>Premium grooming in Augsburg</span>
      </div>
    </footer>
  );
}