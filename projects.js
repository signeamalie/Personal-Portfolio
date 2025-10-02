"use strict";

// renderer projektsiden (to kolonner: intro + lodret kortliste)
export function renderProjects(root = "#app"){
  // hent root
  const el = document.querySelector(root);

  // data til projektkort (titel, meta, beskrivelse, billede, link)
  const list = [
    {
      title: "eksamensprojekt: udvikling af alkoholfri ølkoncept",
      meta:  "1. semester | 2024",
      desc:  "udvikling af visuelt udtryk og ux-flow for et alkoholfrit ølbrand.",
      img:   "assets/images/desktopzerobuzz.png",
      href:  "projectdetail.html?id=zerobuzz-brew"
    },
    {
      title: "real life project: konceptudvikling for eksisterende brand",
      meta:  "2. semester | 2025",
      desc:  "koncept, ui-komponenter og mockups for e-commerce.",
      img:   "assets/images/desktopbasicmore.png",
      href:  "projectdetail.html?id=basic-and-more"
    },
    {
      title: "brand identitet: makeover af eksisterende tøjbrand",
      meta:  "1. semester | 2024",
      desc:  "rebranding, typografi og billedstil.",
      img:   "assets/images/desktoppitaya.png",
      href:  "projectdetail.html?id=brand-identity"
    },
  ];

  // markup: venstre intro + højre kort-stack
  el.innerHTML = `
    <section class="projects-two-col">
      <div class="projects-intro">
        <h1>udvalgte projekter</h1>
        <p>her får du et indblik i udvalgte projekter. tryk på <strong>“vis mere”</strong> og
        find ud af hvordan processen førte til det endelige produkt.</p>
      </div>

      <div class="project-stack" role="list">
        ${list.map(p => `
          <article class="project-card" role="listitem">
            <div class="card-media">
              <!-- lazy loading for bedre performance -->
              <img loading="lazy" src="${p.img}" alt="${p.title}">
            </div>
            <div class="card-body">
              <h3 class="card-title">${p.title}</h3>
              <small class="card-meta">${p.meta}</small>
              <p class="card-desc">${p.desc}</p>
              <a class="btn" href="${p.href}">vis mere</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
