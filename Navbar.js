"use strict";

// bygger navigationen som et lille komponent
export function createNavbar(){
  // wrapper til nav
  const el = document.createElement("div");
  el.className = "site-nav";

  // logo + menulinks
  el.innerHTML = `
    <a class="logo" href="index.html">
      <img src="assets/images/sajlogo.png" alt="saj logo" />
    </a>
    <nav class="menu" aria-label="primær navigation">
      <a href="projects.html">projekter</a>
      <a href="skills.html">kompetencer</a>
      <a href="about.html">om mig</a>
      <a href="contact.html">kontakt</a>
    </nav>
  `;

  // returnerer et dom-element klar til at blive indsat i headeren
  return el;
}
