"use strict";
import { SkillStore } from "../models/Skills.js";

// bygger kompetence-siden (2 rækker: 3 + 2) via OOUX-objekter
export function renderSkills(root = "#app"){
  const el = document.querySelector(root);

  const skillsTop = new SkillStore([
    {
      icon: "fa-solid fa-laptop-code",
      title: "Front-end udvikling",
      text: "Jeg arbejder med HTML, CSS/SCSS og JavaScript - og har fokus på at skrive semantisk korrekt og tilgængelig kode. I mit arbejde bruger jeg Visual Studio Code og GitHub, hvor jeg strukturerer projekter med moderne metoder som OOP og modulær opbygning for at skabe overskuelig og skalerbar front-end kode."
    },
    {
      icon: "fa-solid fa-user",
      title: "Dataindsamling & UX",
      text: "Jeg bruger værktøjer som Google Trends og Keyword Planner til at indsamle og analysere data, der danner grundlag for stærke UX-beslutninger. Gennem research, interviews og analyser skaber jeg indsigt i brugeradfærd, som sikrer designløsninger med reel værdi for målgruppen."
    },
    {
      icon: "fa-solid fa-image",
      title: "Adobe Creative Cloud",
      text: "Jeg har solid erfaring med Photoshop og Illustrator, som jeg bruger til alt fra logo- og branddesign til visuelle koncepter. Jeg arbejder desuden med After Effects til motion design og prototyper, når der skal skabes ekstra liv og identitet i digitale løsninger."
    },
  ]);

  const skillsBottom = new SkillStore([
    {
      icon: "fa-solid fa-robot",
      title: "AI-specialist",
      text: "Med et 12-tal i mit AI-projekt har jeg arbejdet med prompting-strategier, Human in the Loop og GDPR i praksis. Jeg kan hjælpe med at integrere AI i arbejdsprocesser på en måde, der bevarer autenticitet, kvalitet og menneskelig kontrol."
    },
    {
      icon: "fa-solid fa-wifi",
      title: "SEO-optimering",
      text: "Jeg arbejder strategisk med søgeordsanalyse via Semrush, Google og Answerthepublic for at styrke digital synlighed. Gennem datadrevne beslutninger optimerer jeg indhold og struktur, så websites performer bedre i både trafik og relevans."
    },
  ]);

  el.innerHTML = `
    <section class="skills-page">
      <h1>kompetencer</h1>

      <div class="skills-rows">
        <div class="skills-row three">
          ${skillsTop.items.map(s => s.toCardHTML()).join("")}
        </div>

        <div class="skills-row two">
          ${skillsBottom.items.map(s => s.toCardHTML()).join("")}
        </div>
      </div>
    </section>
  `;
}
