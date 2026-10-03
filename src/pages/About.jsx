import { ArrowRight, Award, Heart, Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  [Scissors, "Craft", "We respect the fundamentals of barbering and keep improving the details."],
  [Heart, "Personal", "No two guests are the same. Every cut starts with a real consultation."],
  [Sparkles, "Quality", "Premium products, sharp tools and a clean, comfortable environment."],
  [Award, "Consistency", "You should leave the chair looking exactly as good as you expected."],
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">OUR STORY</span>
          <h1>Not just a<br /><em>barbershop.</em></h1>
          <p>BLACKLINE was created around one simple idea: excellent grooming should feel personal, precise and uncomplicated.</p>
        </div>
      </section>

      <section className="story section">
        <div className="container story__grid">
          <div className="story__image" />
          <div>
            <span className="eyebrow">EST. 2019 · AUGSBURG</span>
            <h2>A modern space with <em>old-school discipline.</em></h2>
            <p>We opened BLACKLINE to create a place where traditional barbering and contemporary style could exist under one roof.</p>
            <p>From the first consultation to the final mirror check, every part of the experience is built around precision, comfort and a result you can wear with confidence.</p>
            <Link className="btn btn--dark" to="/booking">Visit the chair <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">WHAT MATTERS</span><h2>Our <em>standards.</em></h2></div>
          </div>
          <div className="values-grid">
            {values.map(([Icon, title, text]) => (
              <article className="value-card" key={title}>
                <Icon size={25} /><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}