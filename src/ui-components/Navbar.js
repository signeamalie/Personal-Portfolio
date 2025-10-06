"use strict";

// bygger navigationen som et lille komponent
export function createNavbar(){
  // wrapper til nav
  const el = document.createElement("div");
  el.className = "site-nav";

  // logo + menulinks
  // burger til højre, logo i midten, spacer til venstre, menu som drawer på mobil
  el.innerHTML = `
    <!-- spacer så logo kan centreres på mobil -->
    <div class="nav-pad" aria-hidden="true"></div>

    <a class="logo" href="index.html">
      <img src="assets/images/sajlogo.webp" alt="saj logo" />
    </a>

    <!-- burger (vises kun på mobil via css) -->
    <button class="burger" aria-label="åbn menu" aria-controls="site-menu" aria-expanded="false">
      <i class="fa-solid fa-bars" aria-hidden="true"></i>
    </button>

    <nav id="site-menu" class="menu" aria-label="primær navigation">
      <a href="projects.html">projekter</a>
      <a href="skills.html">kompetencer</a>
      <a href="about.html">om mig</a>
      <a href="contact.html">kontakt</a>
    </nav>

    <!-- mørk baggrund bag drawer -->
    <div class="menu-backdrop" hidden></div>
  `;

  // simple toggle logik til mobilmenu
  const btn = el.querySelector(".burger");
  const icon = btn.querySelector("i");
  const menu = el.querySelector("#site-menu");
  const backdrop = el.querySelector(".menu-backdrop");

  // lukker menuen
  function closeMenu(){
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "åbn menu");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    document.body.classList.remove("no-scroll");
    backdrop.hidden = true;
  }

  // åbner/lukker menuen
  function toggleMenu(){
    const willOpen = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
    btn.setAttribute("aria-label", willOpen ? "luk menu" : "åbn menu");
    icon.classList.toggle("fa-bars", !willOpen);
    icon.classList.toggle("fa-xmark", willOpen);
    document.body.classList.toggle("no-scroll", willOpen);
    backdrop.hidden = !willOpen;
  }

  // events til styring
  btn.addEventListener("click", toggleMenu);
  backdrop.addEventListener("click", closeMenu);
  el.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  // returnér selve nav-elementet, så main.js kan indsætte det i headeren
  return el;
}