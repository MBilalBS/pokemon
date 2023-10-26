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
    pokemonImg.classList.add("img-box");

    
    let choixPokemon = document.querySelector("selected")
    choixPokemon = monSelect.addEventListener('change', () => {
        document.querySelector(".colomne").innerHTML = "";
        pokemonImg.setAttribute("src", datasFetch[monSelect.selectedIndex-1].image) ;

        let pokemonHp = document.createElement("p");
        pokemonHp.classList.add("HP");
        pokemonHp.textContent = datasFetch[monSelect.selectedIndex-1].stats.HP ;
        document.querySelector(".colomne").appendChild(pokemonHp);
        choixPokemon = document.querySelector("selected");

        let pokemonAttack = document.createElement("p");
        pokemonAttack.classList.add("attack")
        pokemonAttack.textContent = datasFetch[monSelect.selectedIndex-1].stats.attack ;
        document.querySelector(".colomne").appendChild(pokemonAttack);
        choixPokemon = document.querySelector("selected");
        
        let pokemonDefense = document.createElement("p");
        pokemonDefense.classList.add("defense");
        pokemonDefense.textContent = datasFetch[monSelect.selectedIndex-1].stats.defense ;
        document.querySelector(".colomne").appendChild(pokemonDefense);
        choixPokemon = document.querySelector("selected");

        let pokemonAttackSpecial = document.createElement("p");
        pokemonAttackSpecial.classList.add("attack-special")
        pokemonAttackSpecial.textContent = datasFetch[monSelect.selectedIndex-1].stats.special_attack ;
        document.querySelector(".colomne").appendChild(pokemonAttackSpecial) 
        choixPokemon = document.querySelector("selected");

        let pokemonDefenseSpecial = document.createElement("p");
        pokemonDefenseSpecial.classList.add("defense-special");
        pokemonDefenseSpecial.textContent = datasFetch[monSelect.selectedIndex-1].stats.special_defense ;
        document.querySelector(".colomne").appendChild(pokemonDefenseSpecial);
        choixPokemon = document.querySelector("selected");

        let pokemonSpeed = document.createElement("p");
        pokemonSpeed.innerText = ("SPEED")
        pokemonSpeed.classList.add("defense-special");
        pokemonSpeed.textContent = datasFetch[monSelect.selectedIndex-1].stats.speed ;
        document.querySelector(".colomne").appendChild(pokemonSpeed);
        choixPokemon = document.querySelector("selected");
        
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

