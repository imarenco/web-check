export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function debounce(callback, wait) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param)
    return product
}

export async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
        return data;
    } else {
        throw { name: "servicesError", message: data };
    }
}

export function renderListWithTemplate(templateFn, parentElement, products, position = "afterbegin", clear = true) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const htmlItems = products?.map((product) => templateFn(product));
    parentElement.insertAdjacentHTML(position, htmlItems);
}