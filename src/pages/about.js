"use strict";

// bygger 'om mig' siden i 2 kolonner
export function renderAbout(root = "#app"){
  const el = document.querySelector(root);

  // skriver markup ind i #app
  el.innerHTML = `
    <section class="about-grid">
      <!-- venstre kolonne -->
      <div class="about-left">
        <h1 class="about-hero">fra global baggrund<br>til digitalt håndværk</h1>

        <img class="about-portrait"
             src="assets/images/portrait.png"
             alt="portræt af signe" />

        <p class="about-intro">
          Jeg har altid været nysgerrig på verden. Som barn boede jeg i udlandet
          og gik på en international skole med over 40 nationaliteter. <br>
          Det gav mig en åben tilgang til kultur, samarbejde og kommunikation -
          noget jeg tager med i alt, jeg laver.
        </p>
      </div>

            <!-- højre kolonne -->
      <div class="about-right">
        <!-- afsnit 1 -->
        <article class="about-item">
          <div class="about-icon" aria-hidden="true">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <p>
            Min uddannelsesvej startede med en <strong>HHX i Global Studies</strong> og fortsatte i detailbranchen,
            hvor jeg arbejdede mig op som <strong>Assisterende Butikschef</strong>. Her fik jeg erfaring med ansvar,
            struktur og ledelse.
          </p>
        </article>

        <!-- afsnit 2 -->
        <article class="about-item">
          <div class="about-icon" aria-hidden="true">
            <i class="fa-solid fa-video"></i>
          </div>
          <p>
            Senere fulgte en periode som <strong>Content Creator</strong> med fokus på sociale medier, kampagner,
            visuelt indhold og videoproduktion – en rolle der styrkede mine kreative kompetencer.
          </p>
        </article>

        <!-- afsnit 3 -->
        <article class="about-item">
          <div class="about-icon" aria-hidden="true">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <p>
            I dag studerer jeg <strong>Multimediedesign</strong> med speciale i <strong>Web Development</strong>. Mit mål er at kombinere
            kreativitet og teknologi for at skabe løsninger, der både fungerer og engagerer.
          </p>
        </article>

        <!-- actions -->
        <div class="about-actions">
          <a
            class="btn btn--lg"
            href="assets/docs/signe-amalie-jensen-cv.pdf"
            download="Signe_Amalie_Jensen_CV.pdf"
            target="_blank"
            rel="noopener"
          >download mit cv</a>
        </div>
      </div>
  `;
}
