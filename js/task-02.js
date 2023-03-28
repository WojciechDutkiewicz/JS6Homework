// const list = document.querySelector('ul');

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// // const item = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

// // list.innerHTML = item;

const list = document.getElementById('ingredients');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement('li');
  item.textContent = ingredients[i];
  list.append(item);
  item.classList.add('item');
}
