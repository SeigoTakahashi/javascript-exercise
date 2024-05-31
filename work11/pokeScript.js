'use strict';

const number = 1010;

const typeColor = {
  normal: '#aea886',
  fighting: '#9a3d3e',
  flying: '#7e9ecf',
  poison: '#8f5b98',
  ground: '#916d3c',
  rock: '#878052',
  bug: '#989001',
  ghost: '#555fa4',
  steel: '	#9b9b9b',
  fire: '#f45c19',
  water: '#4a96d6',
  grass: '#28b25c',
  electric: '#eaa317',
  psychic: '#d56d8b',
  ice: '#45a9c0',
  dragon: '#454ba6',
  dark: '#7a0049',
  fairy: '#ffbbff'

}

function apiJson(url, params = {}, options = {}) {
  let requestUrl = url;
  if (!params?.length) {
    requestUrl = url + '?' + new URLSearchParams(params);
  }
  return fetch(requestUrl, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status + ':' + response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      //alert(error)
    });
}

async function createBook() {
  for (let i = 1; i <= number; i++) {
    await createCard(i);
  }
}

document.getElementById('open').addEventListener('click', async (e) => {
  document.getElementById('open').remove();

  let close = document.createElement('button');
  close.className = "btn";
  close.setAttribute('id', 'close');
  close.innerText = "Close";
  document.getElementById('buttons').appendChild(close);

  close.addEventListener('click', () => {
    location.reload();
  });

  await createBook();
});


async function createCard(number) {
  let url = `https://pokeapi.co/api/v2/pokemon/${number}`;
  try {
    const json = await apiJson(url);
    console.log(json);
    let card = document.createElement('div');
    card.className = "card";
    let image = document.createElement('img');
    image.className = "image";
    image.src = json.sprites.front_default;
    card.appendChild(image);
    let id = document.createElement('p');
    id.className = "id"
    id.innerText = "#" + json.id;
    card.appendChild(id);
    let name = document.createElement('h3');
    name.className = "name";
    name.innerText = json.name;
    card.appendChild(name);
    for (const type of json.types) {
      let t = document.createElement('p');
      t.className = "type";
      t.innerText = "type : " + type.type.name;
      card.appendChild(t);
    }

    console.log
    if (json.types.length == 1) {
      card.style.border = "solid 6px " + typeColor[json.types[0].type.name];
    } else if (json.types.length == 2) {
      card.style.borderTop = "solid 6px " + typeColor[json.types[0].type.name];
      card.style.borderLeft = "solid 6px " + typeColor[json.types[0].type.name];
      card.style.borderRight = "solid 6px " + typeColor[json.types[1].type.name];
      card.style.borderBottom = "solid 6px " + typeColor[json.types[1].type.name];
    }

    document.getElementById('output').appendChild(card);
  } catch (error) {
    console.log(error);
    // alert(error)
  }
}
