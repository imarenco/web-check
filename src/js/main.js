import { fetchRecipes } from "./api.mjs";
import { getLocalStorage, renderListWithTemplate, setLocalStorage, debounce } from "./utils.mjs";

const input = document.querySelector("#search");


input.addEventListener("input", debounce((event) => {
  updateValue(event);
}, 1000));

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
    <a href="./recipe/index.html?recipeId=${product.id}">
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