let arrayListPokemons;
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/1200";

const monSelect = document.querySelector("select");


// -------je charge mon select---------
await getListPokemons();
async function getListPokemons () {
    const res = await fetch(urlApi);
    arrayListPokemons = await res.json();

    console.log("Les 26 pokemons : ", arrayListPokemons);

    // const monSelect = document.querySelector("select");
    arrayListPokemons.forEach(unPokemon => {
        let uneOption = document.createElement("option");
        uneOption.value = unPokemon.name;
        uneOption.innerText = unPokemon.name;
        monSelect.appendChild(uneOption);
        // ----------------je crée mes image de pokemon---------------------
    // let choixPokemon = monSelect.addEventListener('change', () => {
    //     let pokemonImg = document.createElement("img");
    //     pokemonImg.setAttribute("src", arrayListPokemons[1].image)  ;
    //     document.querySelector(".img-box").appendChild(pokemonImg);
    // })
    })

    } 
    
    // -----------je génère l'affichage des informatinos du pokemon choisi

        monSelect.addEventListener('change', (eventInfos) => {
            document.querySelector(".stats").innerHTML = "";
            const pokemonChoisi = arrayListPokemons.find((pokemon) => pokemon.name == eventInfos.target.value);
        // ---------je charge l'image dans pokemon-glob---------
            document.querySelector(".img-box").setAttribute("src", pokemonChoisi.image);
            // document.querySelector(".img-box").appendChild(pokemonImg);
            // pokemonImg.classList.add("img-box");
            console.log("Stats du pokemon : ", pokemonChoisi.stats);
            let maTable = document.createElement("table");
            for (const [propriete, valeur] of Object.entries(pokemonChoisi.stats)) {
                console.log(`${propriete}: ${valeur}`);
                let uneStat = document.createElement("li");
                // uneStat.textContent = propriete + " : " + valeur;
                uneStat.textContent = `${propriete} : ${valeur}`;
                document.querySelector(".stats").appendChild(uneStat);
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

// })

