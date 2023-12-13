import{d as l,g as n,f as r,s as m,r as o}from"./api-59dbf784.js";const f=document.querySelector("#search");f.addEventListener("input",l(e=>{c(e)},1e3));async function c(e){var i;const a=((i=e==null?void 0:e.target)==null?void 0:i.value)||"",s=n(a),t=s||await r(a);s||m(a,t),d(t,"#list")}function g(e){return`<li class="product-card">
    <a href="/web-check/recipe/index.html?recipeId=${e.id}">
      <img
        class="card_img"
        src="${e.image}"
        alt="Image of ${e==null?void 0:e.title}"
      />
      <h2 class="card__name">${e==null?void 0:e.title}</h2>
      </a>
  </li>`}async function d(e,a){let s=document.querySelector(a);o(g,s,e)}c();
