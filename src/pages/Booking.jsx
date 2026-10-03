import { useState } from "react";
import { Check, Clock, MapPin, Phone } from "lucide-react";

export default function Booking() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero page-hero--booking">
        <div className="container">
          <span className="eyebrow">BOOK YOUR CHAIR</span>
          <h1>Let's get<br /><em>you sorted.</em></h1>
          <p>Choose a service and preferred time. This demo form simulates a booking request.</p>
        </div>
      </section>

      <section className="section">
        <div className="container booking-grid">
          <div className="booking-info">
            <span className="eyebrow">BLACKLINE BARBERS</span>
            <h2>Ready for a<br /><em>fresh cut?</em></h2>
            <div className="contact-list">
              <p><MapPin /> Bahnhofstraße 18, Augsburg</p>
              <p><Phone /> +49 821 123 4567</p>
              <p><Clock /> Mon–Sat · 09:00–20:00</p>
            </div>
          </div>

          <div className="form-card">
            {sent ? (
              <div className="success">
                <span><Check size={28} /></span>
                <h2>Request received.</h2>
                <p>Thanks! In a real project, this form would send the booking to the barbershop.</p>
                <button className="btn btn--dark" onClick={() => setSent(false)}>Make another request</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-row">
                  <label>First name<input required placeholder="Alex" /></label>
                  <label>Phone<input required placeholder="+49 ..." /></label>
                </div>
                <label>Service
                  <select defaultValue="Blackline Signature">
                    <option>Classic Cut — €32</option>
                    <option>Skin Fade — €38</option>
                    <option>Beard Ritual — €24</option>
                    <option>Blackline Signature — €55</option>
                    <option>The Executive — €72</option>
                  </select>
                </label>
                <div className="form-row">
                  <label>Barber
                    <select defaultValue="Any barber">
                      <option>Any barber</option><option>Marcus Weber</option><option>Leon Fischer</option><option>Daniel Koch</option>
                    </select>
                  </label>
                  <label>Date<input type="date" required /></label>
                </div>
                <label>Preferred time
                  <select defaultValue="18:00">
                    <option>09:00</option><option>11:00</option><option>13:00</option><option>15:00</option><option>18:00</option><option>19:00</option>
                  </select>
                </label>
                <label>Message<textarea rows="4" placeholder="Anything we should know?"></textarea></label>
                <button className="btn btn--dark" type="submit">Request appointment <Check size={18} /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}