"use strict";

// navigation komponent
import { createNavbar }  from "./ui-components/Navbar.js";

// sider der kan rendres
import { renderHome }     from "./pages/home.js";
import { renderAbout }    from "./pages/about.js";
import { renderProjects } from "./pages/projects.js";
import { renderSkills }   from "./pages/skills.js";
import { renderContact }  from "./pages/contact.js";

// map: filnavn -> render-funktion
const routes = {
  "": renderHome, "/": renderHome, "index.html": renderHome,
  "about.html": renderAbout,
  "projects.html": renderProjects,
  "skills.html": renderSkills,
  "contact.html": renderContact,
};

// titler pr. side (til document.title)
const titles = {
  "": "saj | forside", "/": "saj | forside", "index.html": "saj | forside",
  "about.html": "saj | om mig",
  "projects.html": "saj | projekter",
  "skills.html": "saj | kompetencer",
  "contact.html": "saj | kontakt",
};

document.addEventListener("DOMContentLoaded", () => {
  // indsæt navigation i header
  document.querySelector("#site-header").appendChild(createNavbar());

  // find nuværende filnavn
  const current = location.pathname.split("/").pop() || "/";

  // render den rigtige side (fallback = forside)
  (routes[current] || renderHome)("#app");

  // sæt sidetitel
  document.title = titles[current] || "saj | portfolio";

  // markér aktivt menupunkt i menuen
  document.querySelectorAll(".menu a").forEach(a => {
    const isActive = a.getAttribute("href") === (current || "index.html");
    a.classList.toggle("is-active", isActive);
    a.toggleAttribute("aria-current", isActive);
  });

  // rul til top ved ny side
  window.scrollTo({ top: 0 });
});
