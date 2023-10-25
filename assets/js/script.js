let datasFetch;
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/26";

const monSelect = document.querySelector("select");


// -------je charge mon select---------
await getDataFetch();
async function getDataFetch () {
    const res = await fetch(urlApi);
    datasFetch = await res.json();

    console.log("Les 26 pokemons : ", datasFetch);

    // const monSelect = document.querySelector("select");
    datasFetch.forEach(unPokemon => {
        let uneOption = document.createElement("option");
        uneOption.value = unPokemon.name;
        uneOption.innerText = unPokemon.name;
        monSelect.appendChild(uneOption);
        // ----------------je crée mes image de pokemon---------------------
    // let choixPokemon = monSelect.addEventListener('change', () => {
    //     let pokemonImg = document.createElement("img");
    //     pokemonImg.setAttribute("src", datasFetch[1].image)  ;
    //     document.querySelector(".img-box").appendChild(pokemonImg);
    // })
    })

    } 
    // ---------je met mes image dans la selection---------
      let pokemonImg = document.createElement("img");
    document.querySelector(".img-box").appendChild(pokemonImg);

    let choixPokemon = monSelect.addEventListener('change', () => {
        pokemonImg.setAttribute("src", datasFetch[monSelect.selectedIndex-1].image)  ;
        document.getElementById("img-box").appendChild(pokemonImg)
    })

    console.log(innerHeight);
    console.log(innerWidth);
// let uneOption
// let unPokemon = document.createElement("img")
// document.querySelector("select").addEventListener("change", (eventChange)=> {
//     console.log(eventChange.target.value);
//     let pokemonSelected = eventChange.target.value;
//     console.log(pokemonSelected);
//     const found = datasFetch.find((element) => unPokemon);
//     console.log(unPokemon);

// })

