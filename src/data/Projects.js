"use strict";

//model + lille dataservice for projekter - genererer kort-HTML og filtrerer på tag/tekst til projektsiden

export class Project {
  constructor({ title, meta, desc, img, href, tags = [] }) {
    Object.assign(this, { title, meta, desc, img, href, tags });
  }

  toCardHTML() {
    return `
      <article class="project-card" role="listitem" data-tags="${this.tags.join(" ")}">
        <div class="card-media">
          <img loading="lazy" src="${this.img}" alt="${this.title}">
        </div>
        <div class="card-body">
          <h3 class="card-title">${this.title}</h3>
          <small class="card-meta">${this.meta}</small>
          <p class="card-desc">${this.desc}</p>
          <a class="btn" href="${this.href}">vis mere</a>
        </div>
      </article>
    `;
  }
}

export class ProjectStore {
  constructor(items = []) {
    this.items = items.map(p => new Project(p));
  }

  filterBy(tag) {
    if (!tag) return this.items;
    const q = tag.toLowerCase();
    return this.items.filter(p =>
      p.tags?.includes(tag) ||
      (p.title + " " + p.desc).toLowerCase().includes(q)
    );
  }
}
