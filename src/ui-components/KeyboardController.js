"use strict";

// keyboard controller til at håndtere keydown events på et element
export class KeyboardController {
  constructor(targetEl, handlers = {}){
    this.el = targetEl;
    this.handlers = handlers;

    // gør element fokusbart
    this.el.tabIndex = -1;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.el.addEventListener("keydown", this.onKeyDown);
  }

  onKeyDown(e){
    const fn = this.handlers[e.key];
    if (typeof fn === "function") {
      e.preventDefault();
      fn();
    }
  }

  // rydder op
  destroy(){
    this.el.removeEventListener("keydown", this.onKeyDown);
  }
}
