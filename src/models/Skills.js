"use strict";

/** model: skill – med metode til at generere HTML til kort */
export class Skill {
  constructor({ icon, title, text }) {
    Object.assign(this, { icon, title, text });
  }
  toCardHTML(){
    return `
      <article class="skill">
        <div class="skill-icon">
          <i class="${this.icon}" aria-hidden="true"></i>
        </div>
        <h3>${this.title}</h3>
        <p>${this.text}</p>
      </article>`;
  }
}

/** model: skill store – samling af skills */
export class SkillStore {
  #items = [];
  constructor(items = []){ this.#items = items.map(s => new Skill(s)); }
  get items(){ return [...this.#items]; }
}
