"use strict";
import { KeyboardController } from "./KeyboardController.js";

// simpel slider komponent med pile og keyboard navigation
export class Slider {
  constructor(layoutEl) {
    this.layout = layoutEl;
    this.imgs   = [...layoutEl.querySelectorAll(".detail-slide")];
    this.panels = [...layoutEl.querySelectorAll(".detail-panel")];
    this.prev   = layoutEl.querySelector(".detail-arrow.prev");
    this.next   = layoutEl.querySelector(".detail-arrow.next");

    // find evt. aktivt slide, ellers 0
    this.i = Math.max(0, this.imgs.findIndex(el => el.classList.contains("is-active")));
    this.bind();

    this.keyboard = new KeyboardController(this.layout, {
      ArrowLeft : () => this.show(this.i - 1),
      ArrowRight: () => this.show(this.i + 1)
    });

    this.show(this.i);

    // gør layout fokusbart og sæt fokus på første pil-tryk
    this.layout.tabIndex = -1;
    this.layout.addEventListener("pointerdown", () => this.layout.focus({ preventScroll: true }));
    const activateOnFirstArrow = (e) => {
      if (e.target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        this.layout.focus({ preventScroll: true });
        if (e.key === "ArrowLeft")  this.show(this.i - 1);
        if (e.key === "ArrowRight") this.show(this.i + 1);
        document.removeEventListener("keydown", activateOnFirstArrow);
      }
    };
    document.addEventListener("keydown", activateOnFirstArrow);
  }

  bind() {
    this.prev?.addEventListener("click", () => this.show(this.i - 1));
    this.next?.addEventListener("click", () => this.show(this.i + 1));
  }

  show(n) {
    this.imgs[this.i]?.classList.remove("is-active");
    this.panels[this.i]?.classList.remove("is-active");

    this.i = (n + this.imgs.length) % this.imgs.length;

    this.imgs[this.i]?.classList.add("is-active");
    this.panels[this.i]?.classList.add("is-active");
  }

  // rydder op
  destroy(){
    this.keyboard?.destroy();
  }
}
