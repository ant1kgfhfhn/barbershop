const photos = [
  ["https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85", "The signature fade"],
  ["https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85", "Clean contours"],
  ["https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85", "Classic barbering"],
  ["https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=85", "The chair"],
  ["https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85", "Blackline details"],
  ["https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85", "The team"],
  ["https://images.unsplash.com/photo-1593702295094-aea8c7c8c4a4?auto=format&fit=crop&w=1000&q=85", "Fresh finish"],
  ["https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1000&q=85", "Our studio"],
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">BLACKLINE GALLERY</span>
          <h1>The look<br /><em>speaks first.</em></h1>
          <p>A selection of cuts, details and moments from the BLACKLINE chair.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map(([src, alt], i) => (
              <figure className={i % 5 === 0 ? "gallery-item gallery-item--wide" : "gallery-item"} key={src}>
                <img src={src} alt={alt} loading="lazy" />
                <figcaption>{alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}