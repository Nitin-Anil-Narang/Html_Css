const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
// console.dir(cities);

fetch(endpoint)
    .then(bigChuck => bigChuck.json())
    .then(data => cities.push(...data));



function findmatches(wordTomatch,city){

    return city.filter(places => {
        const pattern = new RegExp(wordTomatch,'gi');
        return places.city.match(pattern) || places.state.match(pattern)
    });

}

function displayMatches(){
    
    const tomatch = findmatches(this.value,cities);
    console.log(tomatch);

    `<hl><hl>`

    const html = tomatch.map(place =>{
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
        suggestions.innerHTML = `
        <li>Filter for a city</li>
        <li>or a state</li>
        `
    }


}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')
    
    
searchInput.addEventListener('keyup',displayMatches)