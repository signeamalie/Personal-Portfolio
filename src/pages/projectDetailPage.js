"use strict";
import { projectDetails } from "../data/projectDetails.js";

// bygger en projekt-detalje side med layout: billede venstre, tekst højre, pile i sider
export function renderProjectDetailPage(root = "#app"){
  // finder mål
  const el = document.querySelector(root);

  // læser id fra querystring (fx ?id=zerobuzz-brew)
  const id = new URLSearchParams(location.search).get("id");
  const data = projectDetails[id];

  // hvis ukendt id -> lille fallback
  if (!data){
    el.innerHTML = `
      <section class="page">
        <h1>projekt ikke fundet</h1>
        <p><a class="btn" href="projects.html">tilbage til projekter</a></p>
      </section>`;
    return;
  }

  // sikrer at hvert slide har tekstfelt (copy) – falder tilbage til data.intro
  const slides = (data.slides ?? []).map(s => ({
    src: s.src,
    alt: s.alt ?? data.title,
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
        <!-- venstre pil -->
        <button class="detail-arrow prev" aria-label="forrige slide">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>

        <!-- billede (venstre kolonne) -->
        <figure class="detail-media">
          ${slides.map((s,i)=>`
            <img class="detail-slide ${i===0?"is-active":""}" src="${s.src}" alt="${s.alt}">
          `).join("")}
        </figure>

        <!-- tekst (højre kolonne) -->
        <div class="detail-copy">
          ${slides.map((s,i)=>`
            <article class="detail-panel ${i===0?"is-active":""}">
              <p>${s.copy}</p>
            </article>
          `).join("")}
        </div>

        <!-- højre pil -->
        <button class="detail-arrow next" aria-label="næste slide">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>

      <p><a class="btn btn-outline" href="projects.html">tilbage til projekter</a></p>
    </section>
  `;

  // simpel slider logik
  const imgs   = [...el.querySelectorAll(".detail-slide")];
  const panels = [...el.querySelectorAll(".detail-panel")];
  const prev   = el.querySelector(".detail-arrow.prev");
  const next   = el.querySelector(".detail-arrow.next");

  let i = 0;
  const show = (n)=>{
    imgs[i].classList.remove("is-active");
    panels[i].classList.remove("is-active");
    i = (n + imgs.length) % imgs.length;
    imgs[i].classList.add("is-active");
    panels[i].classList.add("is-active");
  };

  prev.addEventListener("click", ()=> show(i-1));
  next.addEventListener("click", ()=> show(i+1));

  // tastatur: venstre/højre pil
  el.querySelector(".detail-layout").tabIndex = 0;
  el.querySelector(".detail-layout").addEventListener("keydown", (e)=>{
    if (e.key === "ArrowLeft")  show(i-1);
    if (e.key === "ArrowRight") show(i+1);
  });
}
