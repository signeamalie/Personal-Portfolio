"use strict";

// renderer "om mig" siden ind i #app
export function renderAbout(root = "#app"){
  // finder det element vi skal skrive indhold i
  const el = document.querySelector(root);

  // sætter html-indholdet for denne side
  el.innerHTML = `
    <section class="page" style="max-width:var(--wrap);margin:0 auto;padding:var(--space-5);">
      <h1>om mig</h1>
      <p>her kommer om-mig indholdet.</p>
    </section>
  `;
}
