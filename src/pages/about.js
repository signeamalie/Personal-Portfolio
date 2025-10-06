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
             loading="lazy"
             src="assets/images/portrait.webp"
             alt="Portræt af Signe Amalie Jensen" />

        <p class="about-intro">
          Jeg har altid været nysgerrig på verden. Som barn boede jeg i udlandet
          og gik på en international skole med over 40 nationaliteter.
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
          <div>
            <h2 class="visually-hidden">Uddannelse & ledelse</h2>
            <p>
              Min uddannelsesvej startede med en <strong>HHX i Global Studies</strong> og fortsatte i detailbranchen,
              hvor jeg arbejdede mig op som <strong>Assisterende Butikschef</strong>. Her fik jeg erfaring med ansvar,
              struktur og ledelse.
            </p>
          </div>
        </article>

        <!-- afsnit 2 -->
        <article class="about-item">
          <div class="about-icon" aria-hidden="true">
            <i class="fa-solid fa-video"></i>
          </div>
          <div>
            <h2 class="visually-hidden">Kreativ erfaring</h2>
            <p>
              Senere fulgte en periode som <strong>Content Creator</strong> med fokus på sociale medier, kampagner,
              visuelt indhold og videoproduktion - en rolle der styrkede mine kreative kompetencer.
            </p>
          </div>
        </article>

        <!-- afsnit 3 -->
        <article class="about-item">
          <div class="about-icon" aria-hidden="true">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <div>
            <h2 class="visually-hidden">Studie og fremtid</h2>
            <p>
              I dag studerer jeg <strong>Multimediedesign</strong> med speciale i <strong>Web Development</strong>. Mit mål er at kombinere
              kreativitet og teknologi for at skabe løsninger, der både fungerer og engagerer.
            </p>
          </div>
        </article>

        <!-- download knap -->
        <div class="about-actions">
          <a
            class="btn btn--lg"
            href="assets/docs/CV_Signe_Amalie_Jensen.pdf"
            download="Signe_Amalie_Jensen_CV.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Download mit CV som PDF"
          >download mit cv</a>
        </div>
      </div>
    </section>
  `;
}