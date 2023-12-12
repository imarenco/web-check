import { fetchRecipes } from "./api.mjs";
import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

const input = document.querySelector("#search");

input.addEventListener("input", updateValue);

async function updateValue(event) {
  const query = event?.target?.value || '';
  const cached = getLocalStorage(query);
  const recipes = cached ? cached : await fetchRecipes(query);
  if (!cached) {
    setLocalStorage(query, recipes);
  }

  renderResults(recipes, '#list');
}

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="./movie/index.html?movieId=${product.id}">
      <img
        class="card_img"
        src="${product.image}"
        alt="Image of ${product?.title}"
      />
      <h2 class="card__name">${product?.title}</h2>
      </a>
  </li>`
}

export async function renderResults(list, selector) {
  let element = document.querySelector(selector);
  renderListWithTemplate(productCardTemplate, element, list);
}

updateValue();