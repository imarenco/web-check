import { convertToJson } from "./utils.mjs";

const API_KEY = 'b7cf483dd09d4d7e9b543688ac588f5d';

export async function fetchRecipes(text = "") {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${text}`, options);
  const data = await convertToJson(response);
  return data.results;
}

export async function fetchRecipe(id) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`, options);
  const data = await convertToJson(response);
  return data;
}