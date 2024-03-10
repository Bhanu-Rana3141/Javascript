
// let content = document.querySelector('h1');
// content.addEventListener('click', function() { content.style.background = 'orange' });


// document.addEventListener('click', function() { console.log('You clicked on page')});
// document.removeEventListener('click', function() { console.log('You clicked on page')})


// function eventFunction() {
//     console.log('clicked on page');
// }

// document.addEventListener('click', eventFunction);
// document.removeEventListener('click', eventFunction);

// let content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event) {
//     console.log(event);
// });




// Prevent default actions
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log("default event prevented");
// });



let myDiv = document.createElement('div');

for(let i=0; i<=20; i++) {

    let newElement = document.createElement('p');
    newElement.textContent = 'i am para ' + i;

    newElement.addEventListener('click', function(event) {
        console.log(('i have clicked'));
    });
    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);