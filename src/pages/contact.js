"use strict";

// renderer "kontakt" siden ind i #app
export function renderContact(root = "#app") {
  // mål for rendering
  const el = document.querySelector(root);

  // markup til kontaktindhold
  el.innerHTML = `
    <section class="contact-page">
      <h1 class="contact-hero">
        jeg glæder mig til at høre fra dig!
        <i class="fa-regular fa-envelope-open"></i>
      </h1>

      <p class="contact-intro">
        <br>Kom hurtigt i kontakt med mig via nedenstående kontaktformular. <br><br>Jeg kan altid fanges direkte på <strong>signeamaliejensen@gmail.com</strong></a>.
      </p>

      <form id="contact-form" class="contact-form" novalidate>
        <div class="field">
          <label for="email">E-mail *</label>
          <input type="email" id="email" name="email" required placeholder="Skriv din email her..." />
        </div>

        <div class="field">
          <label for="message">Besked *</label>
          <textarea id="message" name="message" rows="8" required placeholder="Skriv din besked her..."></textarea>
        </div>

        <div class="form-footer">
          <button type="submit" class="btn">send</button>
        </div>
      </form>

      <div class="contact-social">
        <span>Lad os connecte på linkedin:</span>
        <a class="social-link" href="https://www.linkedin.com/in/signe-jensen-002a8028b" target="_blank" rel="noopener">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </section>
  `;

  // simpel mailto-submit (åbner mailprogram)
  const form = el.querySelector("#contact-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const from = (el.querySelector("#email")?.value || "").trim();
    const msg  = (el.querySelector("#message")?.value || "").trim();
    const to = "signeamaliejensen@gmail.com";
    const subject = encodeURIComponent("kontakt via saj-portfolio");
    const body = encodeURIComponent(`fra: ${from}\n\n${msg}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
