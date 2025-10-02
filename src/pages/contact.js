"use strict";

// renderer "kontakt" siden ind i #app
export function renderContact(root = "#app") {
  // mål for rendering
  const el = document.querySelector(root);

  // markup til kontaktindhold
  el.innerHTML = `
    <section class="contact-page">
      <h1>kontakt</h1>
      <p class="contact-lead">jeg glæder mig til at høre fra dig!</p>

      <div class="contact-grid">
        <article class="card">
          <h3>mail</h3>
          <p>skriv til mig direkte:</p>
          <a class="btn" href="mailto:signeamaliejensen@gmail.com">
            signeamaliejensen@gmail.com
          </a>
        </article>

        <article class="card">
          <h3>linkedin</h3>
          <p>lad os connecte:</p>
          <a class="btn btn-outline" href="https://www.linkedin.com/in/signe-jensen-002a8028b"
             target="_blank" rel="noopener noreferrer">åbn linkedin</a>
        </article>
      </div>
    </section>
  `;
}
