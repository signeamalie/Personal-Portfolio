"use strict";
import { projectDetails } from "../data/projectDetails.js";
import { Slider } from "../ui-components/Slider.js";

// bygger en projekt-detalje side med layout: billede venstre, tekst højre, pile i sider
export function renderProjectDetailPage(root = "#app"){
  const el = document.querySelector(root);

  // læser id fra querystring (fx ?id=zerobuzz-brew)
  const id = new URLSearchParams(location.search).get("id");
  const data = projectDetails[id];

  // hvis ukendt id -> lille fallback
  if (!data){
    el.innerHTML = `
      <section class="page">
        <h1>Projekt ikke fundet</h1>
        <p><a class="btn" href="projects.html">tilbage til projekter</a></p>
      </section>`;
    return;
  }

  // sikrer at hvert slide har tekstfelt (copy)
  const slides = (data.slides ?? []).map(s => ({
    src:  s.src,
    alt:  s.alt ?? data.title,
    copy: s.copy ?? s.caption ?? data.intro ?? ""
  }));

  // markup
  el.innerHTML = `
    <section class="page detail">
      <header class="detail-head">
        <h1>${data.title}</h1>
        ${data.intro ? `<p class="detail-sub">${data.intro}</p>` : ""}
      </header>

      <div class="detail-layout">
        <button class="detail-arrow prev" aria-label="forrige slide">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>

        <figure class="detail-media">
          ${slides.map((s,i)=>`
            <img class="detail-slide ${i===0?"is-active":""}" src="${s.src}" alt="${s.alt}">
          `).join("")}
        </figure>

        <div class="detail-copy">
          ${slides.map((s,i)=>`
            <article class="detail-panel ${i===0?"is-active":""}">
              <p>${s.copy}</p>
            </article>
          `).join("")}
        </div>

        <button class="detail-arrow next" aria-label="næste slide">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>

      <p><a class="btn btn-outline" href="projects.html">tilbage til projekter</a></p>
    </section>
  `;

  // OOP: kør slider-klassen på layoutet
  new Slider(el.querySelector(".detail-layout"));
}
