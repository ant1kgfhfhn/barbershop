import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const barbers = [
  {
    name: "Marcus Weber", role: "Master Barber", years: "10+ years",
    specialty: "Classic cuts & skin fades",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    bio: "Marcus is all about precision. His style combines traditional barbering with clean modern silhouettes."
  },
  {
    name: "Leon Fischer", role: "Senior Barber", years: "7 years",
    specialty: "Scissor work & beard design",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    bio: "Leon specializes in textured scissor work and detailed beard design, always tailored to the individual."
  },
  {
    name: "Daniel Koch", role: "Barber", years: "5 years",
    specialty: "Fades & modern styles",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    bio: "Daniel brings a fresh eye to modern cuts and is known for clean fades and effortless styling."
  },
];

export default function Barbers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">THE BLACKLINE TEAM</span>
          <h1>People behind<br /><em>the craft.</em></h1>
          <p>Three barbers. Different strengths. One obsession with getting the details right.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="barbers-list">
            {barbers.map((b, i) => (
              <article className="barber-profile" key={b.name}>
                <div className="barber-profile__image"><img src={b.img} alt={b.name} /><span>0{i + 1}</span></div>
                <div className="barber-profile__body">
                  <span className="eyebrow">{b.role}</span>
                  <h2>{b.name}</h2>
                  <p>{b.bio}</p>
                  <div className="profile-meta"><span>{b.specialty}</span><span>{b.years}</span><span><Star size={15} fill="currentColor" /> 4.9</span></div>
                  <Link className="btn btn--dark" to="/booking">Book with {b.name.split(" ")[0]} <ArrowRight size={18} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}