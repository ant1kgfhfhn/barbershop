import { ArrowRight, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  ["Classic Cut", "Precision haircut, styling & hot towel finish.", "€32"],
  ["Beard Ritual", "Shape, trim and straight-razor detailing.", "€24"],
  ["Blackline Signature", "Haircut, beard, wash & premium styling.", "€55"],
];

const barbers = [
  ["Marcus", "Master Barber", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85"],
  ["Leon", "Senior Barber", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85"],
  ["Daniel", "Barber", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=85"],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__content">
          <span className="eyebrow">AUGSBURG · EST. 2019</span>
          <h1>Sharp look.<br /><em>Zero compromise.</em></h1>
          <p>Premium men's grooming with traditional barbering craft and a modern BLACKLINE attitude.</p>
          <div className="hero__actions">
            <Link className="btn" to="/booking">Book an appointment <ArrowRight size={18} /></Link>
            <Link className="btn btn--ghost" to="/services">View services</Link>
          </div>
          <div className="hero__meta">
            <span><Star size={16} fill="currentColor" /> 4.9 / 5</span>
            <span><Clock size={16} /> Mon–Sat · 09:00–20:00</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">WHAT WE DO</span><h2>Built around <em>your style.</em></h2></div>
            <Link className="text-link" to="/services">All services <ArrowRight size={16} /></Link>
          </div>
          <div className="cards cards--3">
            {services.map(([name, desc, price]) => (
              <article className="service-card" key={name}>
                <span className="service-card__num">0{services.indexOf(services.find(s => s[0] === name)) + 1}</span>
                <h3>{name}</h3><p>{desc}</p><strong>{price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">THE TEAM</span><h2>Meet the <em>barbers.</em></h2></div>
            <Link className="text-link" to="/barbers">Meet everyone <ArrowRight size={16} /></Link>
          </div>
          <div className="team-grid">
            {barbers.map(([name, role, img]) => (
              <Link to="/barbers" className="barber-card" key={name}>
                <img src={img} alt={name} /><div><h3>{name}</h3><p>{role}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="split-banner">
        <div className="split-banner__image" />
        <div className="split-banner__content">
          <span className="eyebrow">THE BLACKLINE WAY</span>
          <h2>Good style is<br /><em>in the details.</em></h2>
          <p>We combine classic barbering techniques with contemporary cuts to create a look that works every day, not just in the chair.</p>
          <Link className="btn" to="/about">Our story <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <span className="eyebrow">READY WHEN YOU ARE</span>
          <h2>Your next cut<br /><em>starts here.</em></h2>
          <Link className="btn" to="/booking">Book your chair <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}