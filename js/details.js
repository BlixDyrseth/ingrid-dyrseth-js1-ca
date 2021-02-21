const characterContainer = document.querySelector(".character-details");

const titleDetails = document.querySelector("#titledetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rickandmortyapi.com/api/character/" + id;

console.log(url)

async function getOneCharacter() {
    try {
        const response = await fetch(url);
        const detail = await response.json();

        console.log(detail);

        characterContainer.innerHTML = ""

        createHtml(detail);

    }
    catch(error) {
        console.log(error);
        characterContainer.innerHTML = "error";
    }
    
} 

getOneCharacter();

function createHtml(detail) {
    characterContainer.innerHTML += `<h1>${detail.name}</h1>
    <div class="detail-image" style="background-image: url('${detail.image}')"</div>
    <div class="detail-text">
    <p>Status: ${detail.status}</p>
    <p>Gender: ${detail.gender}</p>
    <p>Species: ${detail.species}</p>
    </div>`

    titleDetails.innerHTML = `${detail.name}`
}