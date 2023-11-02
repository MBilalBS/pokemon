let arrayListPokemons;
let arrayListTypes;
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/700";
const urlApiElements = "https://pokebuildapi.fr/api/v1/types";

const monSelect = document.querySelector("select");
await getListTypes();

document.querySelectorAll("input[type='radio']").forEach(radio => {
    radio.addEventListener("change", (eventChange) => {
        document.querySelector("select").innerHTML = "";
        let optionDefault = document.createElement("option");
        optionDefault.textContent = eventChange.target.value == "nom" ? "--Choix Pokemon--" : "--Choix type--";
        optionDefault.value = "0";
        monSelect.appendChild(optionDefault);
        if (radio.value == "nom") {
            arrayListPokemons.forEach(unPokemon => {
                let uneOption = document.createElement("option");
                     uneOption.value = unPokemon.name;
                      uneOption.innerText = unPokemon.name;
              monSelect.appendChild(uneOption);
          })
        } else {
            const monSelect = document.querySelector("select");
            arrayListTypes.forEach(unType => {
                  let uneOption = document.createElement("option");
                       uneOption.value = unType.name;
                        uneOption.innerText = unType.name;
                monSelect.appendChild(uneOption);
            })
        }
    })
})


// -------je charge mon select---------
await getListPokemons();
async function getListPokemons () {
    const res = await fetch(urlApi);
    arrayListPokemons = await res.json();

    console.log("Les 26 pokemons : ", arrayListPokemons);

    // const monSelect = document.querySelector("select");
    let optionDefault = document.createElement("option");
    optionDefault.textContent = "--Choix Pokemon--";
    optionDefault.value = "0";
    monSelect.appendChild(optionDefault);
    arrayListPokemons.forEach(unPokemon => {
          let uneOption = document.createElement("option");
               uneOption.value = unPokemon.name;
                uneOption.innerText = unPokemon.name;
        monSelect.appendChild(uneOption);
    })

    } 
    

    async function getListTypes () {
    const res = await fetch(urlApiElements);
    arrayListTypes = await res.json();
    console.log("Les 18 types : ", arrayListTypes);

    

    } 

    // -----------je génère l'affichage des informatinos du pokemon choisi




        monSelect.addEventListener('change', (eventInfos) => {
            if (eventInfos.target.value != "0") {
                if (document.querySelector("input[type='radio']:checked").value == "nom") {
                    const pokemonChoisi = arrayListPokemons.find((pokemon) => pokemon.name == monSelect.value);
                    document.querySelector(".stats").innerHTML = "";
                // ---------je charge l'image dans pokemon-glob---------
                    document.querySelector(".img-box").setAttribute("src", pokemonChoisi.image);
                    // document.querySelector(".img-box").appendChild(pokemonImg);
                    // pokemonImg.classList.add("img-box");
                    console.log("Stats du pokemon : ", pokemonChoisi.stats);
                    let maTable = document.createElement("table");
                    for (const [propriete, valeur] of Object.entries(pokemonChoisi.stats)) {
                        // console.log(`${propriete}: ${valeur}`);
                        let uneStat = document.createElement("li");
                        // uneStat.textContent = propriete + " : " + valeur;
                        uneStat.textContent = `${propriete} : ${valeur}`;
                        document.querySelector(".stats").appendChild(uneStat);
                    }
                } else {
                    const typeChoisi = arrayListTypes.find((type) => type.name == monSelect.value);
                    document.querySelector(".stats").innerHTML = "";
                    document.querySelector(".img-box").setAttribute("src", typeChoisi.image);
                    const arrayPokemonsFromType = arrayListPokemons.filter((pokemon) => pokemon.apiTypes.some(type => type.name == monSelect.value));
                    console.log("array From types : ", arrayPokemonsFromType);
                    arrayPokemonsFromType.forEach(unPokemon => {
                        let uneListe = document.createElement("li");
                             uneListe.value = unPokemon.name;
                              uneListe.innerText = unPokemon.name;
                      document.querySelector(".stats").appendChild(uneListe);
                      uneListe.classList.add(".un-type-liste");
                  })
                    // document.querySelector(".stats").appendChild(unType)
                    
                }
                
    
            }
            
        })
    
      
        


















//        let pokemonHp = document.getElementById("hp");
//         pokemonHp.classList.add("colomne");
//             pokemonHp.innerText = "?";
//        let attack = document.getElementById("attack")
           
            
            
//  let choixPokemon = document.querySelector("selected")
//     choixPokemon = monSelect.addEventListener('change', () => {
//         pokemonImg.setAttribute("src", datasFetch[monSelect.selectedIndex-1].image) ;
        
//         pokemonHp.innerText = datasFetch[choixPokemon.selectedIndex-1].stats.HP;
//         attack

//     }
//     )
        
    
        

// let uneOption
// let unPokemon = document.createElement("img")
// document.querySelector("select").addEventListener("change", (eventChange)=> {
//     console.log(eventChange.target.value);
//     let pokemonSelected = eventChange.target.value;
//     console.log(pokemonSelected);
//     const found = datasFetch.find((element) => unPokemon);
//     console.log(unPokemon);

// 

