const searchAlgoliaPlaces = (event) => {
  const url = "https://places-dsn.algolia.net/1/places/query";
  
  // se fosse ruby,
  // { chave: valor }.to_string

  // encontro o valor do meu input
  const searchedPlace = event.currentTarget.value;
  // construo um JSON com esse input
  const json = { query: searchedPlace };
  // transformo esse JSON em uma string
  const jsonStringified = JSON.stringify(json)
  
  // A diferença entre um GET e um POST request são os OPTIONS
  const options = {
    method: "POST",
    body: jsonStringified
  }
  
  fetch(url, options)
    .then(response => response.json())
    .then((json) => {
      // console.log(json.hits[0].locale_names.default[0])
      // console.log(json.hits[1].locale_names.default[0])
      // console.log(json.hits[2].locale_names.default[0])
      // console.log(json.hits[3].locale_names.default[0])
      const ul = document.getElementById('results');

      
      // limpar resultados anteriores
      ul.innerHTML = '';


      json['hits'].forEach( (result) => {
        // console.log(result.locale_names.default[0])
        ul.insertAdjacentHTML('beforeend', `<li>${result.locale_names.default[0]}</li>`);

      });
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
