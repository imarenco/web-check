import{d as n,g as c,f as r,s as m,r as o}from"./api-d1360f9b.js";const f=document.querySelector("#search");f.addEventListener("input",n(e=>{l(e)},1e3));async function l(e){var i;const a=((i=e==null?void 0:e.target)==null?void 0:i.value)||"",s=c(a),t=s||await r(a);s||m(a,t),d(t,"#list")}function g(e){return`<li class="product-card">
    <a href="/web-check/movie/index.html?movieId=${e.id}">
      <img
        class="card_img"
        src="${e.image}"
        alt="Image of ${e==null?void 0:e.title}"
      />
      <h2 class="card__name">${e==null?void 0:e.title}</h2>
      </a>
  </li>`}async function d(e,a){let s=document.querySelector(a);o(g,s,e)}l();
