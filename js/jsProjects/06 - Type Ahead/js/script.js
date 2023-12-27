const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
// console.dir(cities);

fetch(endpoint)
    .then(bigChuck => bigChuck.json())
    .then(data => cities.push(...data));


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findmatches(wordTomatch,city){

    return city.filter(places => {
        const pattern = new RegExp(wordTomatch,'gi');
        return places.city.match(pattern) || places.state.match(pattern)
    });

}

function displayMatches(){
    
    const tomatch = findmatches(this.value,cities);
    console.log(tomatch);

    

    const html = tomatch.map(place =>{
        const regex = new RegExp(this.value,'gi');
        const hLcity = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const hLstate = place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        console.log(this.value);
        return `
        <li>
            <span className="name">${hLcity},${hLstate}</span>
            <span className="population">${numberWithCommas(place.population)}</span>
            
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