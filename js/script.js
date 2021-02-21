const url = "https://rickandmortyapi.com/api/character";

const characterContainer = document.querySelector(".results")

async function getCharacters() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details.results);

        const characters = details.results;

        characterContainer.innerHTML = "";

        characters.forEach(function(character) {
            characterContainer.innerHTML += `<a href="details.html?id=${character.id}" class="item">
            <div class="image" style="background-image: url('${character.image}')"</div>
            <div class="details-card">
            <h4>${character.name}</h4>
            <p>Status: ${character.status}</p>
            </div>
            </a>` 
        }); 
    }
    catch(error) {
        console.log(error);
        characterContainer.innerHTML = "error";
    }
    
} 

getCharacters();