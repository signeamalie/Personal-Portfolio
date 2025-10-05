"use strict";

// navigation komponent
import { createNavbar }  from "./ui-components/Navbar.js";


// sider der kan rendres
import { renderHome }     from "./pages/home.js";
import { renderAbout }    from "./pages/about.js";
import { renderProjects } from "./pages/projects.js";
import { renderSkills }   from "./pages/skills.js";
import { renderContact }  from "./pages/contact.js";
import { renderProjectDetailPage } from "./pages/projectDetailPage.js";


// map: filnavn -> render-funktion
const routes = {
  "": renderHome, "/": renderHome, "index.html": renderHome,
  "about.html": renderAbout,
  "projects.html": renderProjects,
  "skills.html": renderSkills,
  "contact.html": renderContact,
  "projectdetail.html": renderProjectDetailPage,
};

// titler pr. side (til document.title)
const titles = {
  "": "SAJ | Forside", "/": "SAJ | Forside", "index.html": "SAJ | Forside",
  "about.html": "SAJ | Om mig",
  "projects.html": "SAJ | Projekter",
  "skills.html": "SAJ | Kompetencer",
  "contact.html": "SAJ | Kontakt",
};

document.addEventListener("DOMContentLoaded", () => {
  // indsæt navigation i header
  document.querySelector("#site-header").appendChild(createNavbar());

  // find nuværende side ud fra URL-stien
  const current = location.pathname.split("/").pop() || "/";

  // render den rigtige side (standard = forside)
  (routes[current] || renderHome)("#app");

  // sæt sidetitel
  document.title = titles[current] || "SAJ | Portfolio";

  // markér aktivt menupunkt i menuen
  document.querySelectorAll(".menu a").forEach(a => {
    const isActive = a.getAttribute("href") === current;
    a.classList.toggle("is-active", isActive);
    a.toggleAttribute("aria-current", isActive);
  });


  // rul til top ved ny side
  window.scrollTo({ top: 0 });
});
