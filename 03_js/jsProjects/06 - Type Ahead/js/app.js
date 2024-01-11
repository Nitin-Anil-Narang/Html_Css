const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const dogs= [];

const startpoint = "https://dog.ceo/api/breed/hound/list"

const test = fetch(startpoint)
    .then(data => data.json())
    .then(set => {
        const temp = [];
        temp.push(set);
        const temp1 = temp.map(obj => obj.message);
        return temp1

    })
    .then(final => dogs.push(final))
console.log(test);
console.log(dogs);

// async function test2(){

//     const response = await fetch("https://dog.ceo/api/breed/hound/list");
//     const {body} = await response.json();
//     return body;
// }
// console.log(test2());

// async function fetchMessage(url) {
//     const response = await fetch(url);  // Fetch the resource at the given URL
//     const {message} = await response.json(); // Parse the response as JSON & remember its 'message' value
//     return message; // Return the message
// }

// console.log(fetchMessage("https://dog.ceo/api/breed/hound/list"));


console.table(dogs);

fetch(endpoint)
    .then(bigChunk => bigChunk.json())
    .then(data => cities.push(...data));



function findMatches(wordToMatch,cities) {
    return cities.filter(places =>{

        const regex = new RegExp(wordToMatch,'gi');
        return places.city.match(regex) || places.state.match(regex);

    })
}

function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    console.log(matchArray);
    const html = matchArray.map(place =>{
        const regex = new RegExp(this.value,'gi');
        return `
        <li>
            <span className="name">${place.city},${place.state}</span>
            <span className="population">${place.population}</span>
        </li>
        `
    }).join('');
    suggestions.innerHTML = html;

    if(this.value === ''){
        suggestions.innerHTML = 
        `
        <li>Filter for a city</li>
        <li>or a state</li>
        `;
    }
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')


searchInput.addEventListener('keyup',displayMatches)


