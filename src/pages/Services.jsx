import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const groups = [
  { title: "Hair", items: [
    ["Classic Cut", "Consultation, precision cut, wash & styling.", "€32", "45 min"],
    ["Skin Fade", "Detailed fade with clean lines and styling.", "€38", "50 min"],
    ["Long Hair", "Scissor cut, texture and premium styling.", "€40", "60 min"],
    ["Kids Cut", "A relaxed professional cut for young guests.", "€22", "30 min"],
  ]},
  { title: "Beard", items: [
    ["Beard Ritual", "Shape, trim, hot towel and straight-razor finish.", "€24", "30 min"],
    ["Beard & Contours", "Quick trim and precise contouring.", "€18", "20 min"],
    ["Luxury Shave", "Traditional hot towel straight-razor shave.", "€30", "35 min"],
  ]},
  { title: "Signature", items: [
    ["Blackline Signature", "Haircut, beard, wash, hot towel & styling.", "€55", "75 min"],
    ["The Executive", "Premium grooming package for the full look.", "€72", "90 min"],
  ]},
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">SERVICES & PRICES</span>
          <h1>The craft behind<br /><em>the look.</em></h1>
          <p>Choose your service, pick your barber and leave the rest to us.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {groups.map((group) => (
            <div className="price-group" key={group.title}>
              <div className="price-group__title"><span>{group.title}</span><div /></div>
              {group.items.map(([name, desc, price, time]) => (
                <div className="price-row" key={name}>
                  <div><h3>{name}</h3><p>{desc}</p></div>
                  <span>{time}</span><strong>{price}</strong>
                  <Link to="/booking" className="icon-link" aria-label={`Book ${name}`}><ArrowRight /></Link>
                </div>
              ))}
            </div>
          ))}
          <div className="service-note"><Check size={18} /> All services include a styling consultation. Booking in advance is recommended.</div>
        </div>
      </section>
    </>
  );
}