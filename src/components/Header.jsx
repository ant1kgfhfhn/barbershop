import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/barbers", "Barbers"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="logo" to="/" onClick={() => setOpen(false)}>
          <span className="logo__mark"><Scissors size={18} /></span>
          <span>BLACKLINE</span>
        </Link>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link className="btn btn--small" to="/booking" onClick={() => setOpen(false)}>
            Book now
          </Link>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}