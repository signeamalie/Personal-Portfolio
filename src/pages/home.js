"use strict";

// bygger landing page og sætter den ind i #app
export function renderHome(rootSelector = "#app") {
  // finder main-root
  const root = document.querySelector(rootSelector);

  // html for de to kolonner (intro + showcase)
  root.innerHTML = `
    <section class="home">
      <!-- venstre kolonne -->
      <div class="intro">
        <h1>signe | 25 år</h1>

        <!-- kompetencer som kort lead-tekst -->
        <p class="lead">
          Frontend-udvikler | Webdesigner
          <br />
          AI-specialist | UX/UI | SEO-optimering
        </p>

        <!-- primær call to action -->
        <a class="btn btn-outline" href="about.html">lær mig bedre at kende</a>

        <!-- portræt imellem knapperne -->
        <img class="portrait" src="assets/images/portrait.png" alt="portrait af signe" />

        <!-- sekundær call to action -->
        <a class="btn" href="contact.html">lad os komme i dialog</a>
      </div>

      <!-- højre kolonne: to billeder + overlay-knap -->
      <div class="showcase">
        <img src="assets/images/pitayahomepage.png" alt="projekt eksempel 1" />
        <img src="assets/images/zbhomepage.png" alt="projekt eksempel 2" />
        <a class="btn btn-cta" href="projects.html">udforsk mine projekter</a>
      </div>
    </section>

    <!-- ankre til senere sektioner -->
    <section id="skills" class="anchor-space"></section>
    <section id="contact" class="anchor-space"></section>
  `;
}