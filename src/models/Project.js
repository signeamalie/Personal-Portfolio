"use strict";

/** model for et projekt med metode til at generere HTML til kort */
export class Project {
  constructor({ title, meta, desc, img, href, tags = [], badge = null, featured = false }) {
    Object.assign(this, { title, meta, desc, img, href, tags, badge, featured });
  }
  toCardHTML() {
    const badgeHTML = this.badge
      ? `<span class="card-badge" aria-label="${this.badge}">${this.badge}</span>`
      : "";
    const featuredCls = this.featured ? " is-featured" : "";

    return `
      <article class="project-card${featuredCls}" role="listitem" data-tags="${this.tags.join(" ")}">
        <div class="card-media">
          ${badgeHTML}
          <img loading="lazy" src="${this.img}" alt="${this.title}">
        </div>
        <div class="card-body">
          <h3 class="card-title">${this.title}</h3>
          <small class="card-meta">${this.meta}</small>
          <p class="card-desc">${this.desc}</p>
          <a class="btn" href="${this.href}">vis mere</a>
        </div>
      </article>`;
  }
}

/** arver og sætter altid featured=true samt default badge */
export class FeaturedProject extends Project {
  constructor(opts){
    super({ ...opts, featured: true });
    this.badge = this.badge ?? "featured";
  }
}

/** ProjectStore – samling af projekter med filter-metode */
export class ProjectStore {
  #items = [];
  constructor(items = []) {
    this.#items = items.map(p => (p.featured ? new FeaturedProject(p) : new Project(p)));
  }
  get items(){ return [...this.#items]; }
  filterBy(tag) {
    if (!tag) return this.items;
    const q = tag.toLowerCase();
    return this.#items.filter(p =>
      p.tags?.includes(tag) || (p.title + " " + p.desc).toLowerCase().includes(q)
    );
  }
}
