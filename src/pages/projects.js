"use strict";

// renderer projektsiden (2 kolonner: intro + kortliste + filtrering)
export function renderProjects(root = "#app"){
  const el = document.querySelector(root);

  // data med tags så der filtres 
  const list = [
    {
      title: "Eksamensprojekt: Udvikling af alkoholfri ølkoncept",
      meta:  "1. semester | 2024",
      desc:  "Udvikling af visuelt udtryk og UX-flow for et alkoholfrit ølbrand.",
      img:   "assets/images/desktopzerobuzz.png",
      href:  "projectdetail.html?id=zerobuzz-brew",
      tags:  ["kodning","adobe","seo","dataindsamling"]
    },
    {
      title: "Real life project: Konceptudvikling for eksisterende brand",
      meta:  "2. semester | 2025",
      desc:  "Koncept, UI-komponenter og mockups for e-commerce.",
      img:   "assets/images/desktopbasicmore.png",
      href:  "projectdetail.html?id=basic-and-more",
      tags:  ["kodning","dataindsamling"]
    },
    {
      title: "Brand identitet: Makeover af eksisterende tøjbrand",
      meta:  "1. semester | 2024",
      desc:  "Rebranding, typografi og billedstil.",
      img:   "assets/images/desktoppitaya.png",
      href:  "projectdetail.html?id=brand-identity",
      tags:  ["adobe","kodning"]
    },
  ];

  // faste filtre (rækkefølge bevidst)
  const filters = ["kodning","adobe","dataindsamling","seo"];

  // helper: bygger ét kort
  const card = (p) => `
    <article class="project-card" role="listitem" data-tags="${(p.tags||[]).join(" ")}">
      <div class="card-media">
        <img loading="lazy" src="${p.img}" alt="${p.title}">
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <small class="card-meta">${p.meta}</small>
        <p class="card-desc">${p.desc}</p>
        <a class="btn" href="${p.href}">vis mere</a>
      </div>
    </article>
  `;

  // render skelet
  el.innerHTML = `
    <section class="projects-two-col">
      <div class="projects-intro">
        <h1>udvalgte projekter</h1>
        <p>Her får du et indblik i udvalgte projekter. Tryk på <strong>“vis mere”</strong> og
        find ud af hvordan processen førte til det endelige produkt.</p>

        <!-- filter-ui -->
        <div class="project-filter">
          <p class="filter-lead">Vis projekter med konkrete eksempler på:</p>
          <div class="filter-row" role="toolbar" aria-label="filtrer projekter">
            ${filters.map(t => `
              <button class="btn btn-outline btn--sm filter-btn" data-tag="${t}" aria-pressed="false">${t}</button>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="project-stack" role="list"></div>
    </section>

  `;
  // render kortliste
  const stack = el.querySelector(".project-stack");
  const renderCards = (arr) => { stack.innerHTML = arr.map(card).join(""); };
  renderCards(list);

  // filtrering (klik = filtrér, klik igen = reset)
  let active = null; // ingen filter aktivt
  const btns = [...el.querySelectorAll(".filter-btn")];

  const applyFilter = (tag) => {
    // tekstsøgning fallback (title+desc) udover tags
    const filtered = list.filter(p =>
      (p.tags && p.tags.includes(tag)) ||
      (p.title + " " + p.desc).toLowerCase().includes(tag.toLowerCase())
    );
    renderCards(filtered);
  };

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.dataset.tag;

      // toggle logik
      if (active === tag) {
        active = null;
        btns.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-pressed","false"); });
        renderCards(list); // vis alle igen
        return;
      }

      active = tag;
      btns.forEach(b => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      applyFilter(tag);
    });
  });
}
