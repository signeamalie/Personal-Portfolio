"use strict";

// renderer projekt-detalje siden ind i #app
export function renderProjectDetailPage(root = "#app"){
  // finder container
  const el = document.querySelector(root);

  // læser id fra querystring (fx ?id=zerobuzz-brew)
  const id = new URLSearchParams(location.search).get("id") ?? "ukendt";

  // midlertidigt indhold indtil slider mv er bygget
  el.innerHTML = `
    <section class="page" style="max-width:var(--wrap);margin:0 auto;padding:var(--space-5);">
      <h1>projekt-detaljer</h1>
      <p>id: ${id}</p>
      <p>her kommer billede-slideren og teksten.</p>
    </section>
  `;
}
