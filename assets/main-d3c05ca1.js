import{g as n,f as c,s as r,r as m}from"./api-93959e8c.js";const o=document.querySelector("#search");o.addEventListener("input",l);async function l(e){var i;const a=((i=e==null?void 0:e.target)==null?void 0:i.value)||"",s=n(a),t=s||await c(a);s||r(a,t),g(t,"#list")}function f(e){return`<li class="product-card">
    <a href="/web-check/movie/index.html?movieId=${e.id}">
      <img
        class="card_img"
        src="${e.image}"
        alt="Image of ${e==null?void 0:e.title}"
      />
      <h2 class="card__name">${e==null?void 0:e.title}</h2>
      </a>
  </li>`}async function g(e,a){let s=document.querySelector(a);m(f,s,e)}l();
