"use strict";

// bygger kompetence-siden (2 rækker: 3 + 2)
export function renderSkills(root = "#app"){
  const el = document.querySelector(root);

  // øverste række: 3 kort
  // ikon = font awesome klasse
  const skillsTop = [
    {
      icon: "fa-solid fa-laptop-code",
      title: "Programmering",
      text: "HTML, CSS/SCSS, JavaScript.<br>Jeg bruger Visual Studio Code til at kode og benytter mig af Github. Det er vigtigt for mig at skrive semantisk korrekt og tilgængelig kode."
    },
    {
      icon: "fa-solid fa-user",
      title: "Dataindsamling & UX",
      text: "Til dataindsamling er Google Trends og Keyword Planner en gamechanger for mig. Gennem research, interviews og analyser formår jeg derudover at skabe en solid base for den optimale brugeroplevelse. "
    },
    {
      icon: "fa-solid fa-image",
      title: "Adobe Creative Cloud",
      text: "Jeg har meget erfaring med Adobe Photoshop og Illustrator, og en smule med After Effects. Jeg bruger dem, når der skal laves logo eller andet grafik."
    },
  ];

  // nederste række: 2 kort
  const skillsBottom = [
    {
      icon: "fa-solid fa-robot",
      title: "AI-specialist",
      text: "Med et 12-tal i AI projekt - som involverede prompting strategier, Human in the Loop og GDPR - kan jeg være med til, at løfte jeres brug af AI uden at gå på kompromis med kvalitet eller autencitet."
    },
    {
      icon: "fa-solid fa-wifi",
      title: "SEO-optimering",
      text: "Værktøjer som Semrush, Google og Answerthepublic benyttes her til at identificere nøje udvalgte ord, baseret på performance og trafik."
    },
  ];

  // dom: skriver markup ind i #app
  el.innerHTML = `
    <section class="skills-page">
      <h1>kompetencer</h1>

      <!-- wrapper med to rækker (top=3, bund=2) -->
      <div class="skills-rows">
        <div class="skills-row three">
          ${skillsTop.map(card).join("")}
        </div>

        <div class="skills-row two">
          ${skillsBottom.map(card).join("")}
        </div>
      </div>
    </section>
  `;

  // lille helper til at lave et kort fra data
  function card(s){
    return `
      <article class="skill">
        <!-- ikon fra font awesome -->
        <div class="skill-icon">
          <i class="${s.icon}" aria-hidden="true"></i>
        </div>

        <!-- titel + beskrivelse -->
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </article>
    `;
  }
}
