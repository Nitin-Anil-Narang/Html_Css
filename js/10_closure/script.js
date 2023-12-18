// function outer() {
//     const outerVar = 'Hey I am the outer Var!';

//     return function inner() {
//     const innerVar = "inner var!"
//     console.log(outerVar);
//     console.log(innerVar);
//     }
    
// }
// // nested functions that returns the inner function
// const innerFN = outer();
// innerFN();

// function createGreeting(greeting = '') {
//     const myGreet = greeting.toUpperCase();
//     return function (name) {
//         return `${myGreet} ${name}`;
//     }
// }
// const sayHello = createGreeting('hello');
// const sayHey = createGreeting('hey');

// console.log(sayHello('Nandu'));
// console.log(sayHey('Nitin'));

// function createGame(gameName) {
//     let score = 0;
//     return function win() {
//       score++;
//       return `Your name ${gameName} score is ${score}`;
//     }
// }

// const hockeyGame = createGame('Hockey');
// const soccerGame = createGame('Soccer');

// for (let i = 0; i < 10; i++) {
//     console.log(hockeyGame());
    
// }

async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
  }


  