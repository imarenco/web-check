import { fetchRecipe } from "./api.mjs";
import { getLocalStorage, getParam, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

async function getRecipe() {
  const id = getParam('movieId');
  const cached = getLocalStorage(id);

  const recipe = cached ? cached : await fetchRecipe(id);
  if (!cached) {
    setLocalStorage(id, recipe);
  }

  renderRecipe(recipe);
}

function renderInstruction(product) {
  return `<li class="ingredient_item">
    ${product.number}. ${product?.step} Ingredients: ${product.ingredients.map(ingredient => ingredient.name).join(' ')}
  .</li>`
}


function renderRecipe(recipe) {
  console.log(recipe);

  document.getElementById('title').innerHTML = recipe.title;
  document.getElementById('img').src = recipe.image;
  document.getElementById('summary').innerHTML = recipe.summary;
  const instructions = document.getElementById('instructions');

  const dataInstructions = recipe?.analyzedInstructions?.[0]?.steps;
  renderListWithTemplate(renderInstruction, instructions, dataInstructions);

}

getRecipe();