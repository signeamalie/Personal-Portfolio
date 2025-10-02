"use strict";

// renderer skills-siden og forsøger at hente data dynamisk
export async function renderSkills(root = "#app") {
  // root-element
  const el = document.querySelector(root);

  // grundlayout til siden
  el.innerHTML = `
    <section class="skills-page" style="max-width:var(--wrap);margin:0 auto;padding:var(--space-5);">
      <h1>kompetencer</h1>
      <div class="skills-grid" id="skills-grid"></div>
    </section>
  `;

  try {
    // loader datafilen (virker både med named og default export)
    const mod = await import("../data/skills.js");
    const list = mod.skills ?? mod.default ?? [];

    // mål for kort
    const grid = document.getElementById("skills-grid");

    // fallback hvis listen er tom
    const safeList = list.length ? list : [{title:"html/css/js"},{title:"ux"},{title:"seo"}];

    // bygger kortene
    grid.innerHTML = safeList.map(s => `
      <article class="skill-card" style="border:2px solid var(--text);padding:var(--space-3);border-radius:0;background:rgba(255,255,255,.5)">
        <h3 style="margin:0;">${s.title ?? s.name}</h3>
      </article>
    `).join("");
  } catch {
    // hvis import fejler, vis simpel besked
    document.getElementById("skills-grid").innerHTML = `<p>ingen data endnu.</p>`;
  }
}
