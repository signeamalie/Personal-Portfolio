"use strict";
import { ProjectStore } from "../models/Project.js";

// renderer projektsiden (2 kolonner: intro + kortliste + filtrering)
export function renderProjects(root = "#app"){
  const el = document.querySelector(root);

  // data med tags så der filtres 
  const list = [
    {
      title: "Eksamensprojekt: Udvikling af alkoholfri ølkoncept",
      meta:  "1. semester | 2024",
      desc:  "Udvikling af visuel identitet og UX-flow for et nyt alkoholfrit ølbrand - fra research og koncept til færdigt digitalt produkt.",
      img:   "assets/images/desktopzerobuzz.png",
      href:  "projectdetail.html?id=zerobuzz-brew",
      tags:  ["kodning","adobe","seo","dataindsamling"],
      featured: true,
      badge: "Mit første eksamensprojekt - Karakter 10"
    },
    {
      title: "Real life project: Konceptudvikling for eksisterende brand",
      meta:  "2. semester | 2025",
      desc:  "Konceptudvikling og UX-design med fokus på tilgængelighed, struktur og en brugervenlig oplevelse i e-commerce.",
      img:   "assets/images/desktopbasicmore.png",
      href:  "projectdetail.html?id=basic-and-more",
      tags:  ["kodning","dataindsamling"],
      badge: "Real life samarbejde - Karakter 12"
    },
    {
      title: "Brand identitet: Makeover af eksisterende tøjbrand",
      meta:  "1. semester | 2024",
      desc:  "Rebranding-projekt med fokus på typografi, billedstil og responsivt design - skabt for at give brandet et moderne og genkendeligt udtryk.",
      img:   "assets/images/desktoppitaya.png",
      href:  "projectdetail.html?id=brand-identity",
      tags:  ["adobe","kodning"],
       badge: "Min første designcase"
    },
  ];

  // faste filtre (rækkefølge bevidst)
  const filters = ["kodning","adobe","dataindsamling","seo"];

  // render skelet (intro + filter + kortcontainer)
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


  const stack = el.querySelector(".project-stack");
  const store = new ProjectStore(list);

  // renderer en samling Project-objekter til kort
  const renderCards = (items) => {
    stack.innerHTML = items.map(p => p.toCardHTML()).join("");
  };

  // initial visning (alle projekter)
  renderCards(store.items);

  // filtrering (klik = filtrér, klik igen = reset)
  let active = null; // ingen filter aktivt
  const btns = [...el.querySelectorAll(".filter-btn")];

  const applyFilter = (tag) => {
    renderCards(store.filterBy(tag));
  };

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.dataset.tag;

      // toggle: klik på aktivt tag = nulstil
      if (active === tag) {
        active = null;
        btns.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-pressed","false"); });
        renderCards(store.items);
        return;
      }

      // sæt nyt aktivt tag
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