// document.addEventListener('click', function() { console.log('I have clicked on document') });
// document.removeEventListener('click', function() { console.log('I have clicked on document') });


/* To remove event listener
1. event target should be same - document
2. event type should be same - click
3. function should be same - eventAction


function eventAction() {
    console.log('clicked on document');
}

document.addEventListener('click', eventAction);
document.removeEventListener('click', eventAction);


// Event Object

let content = document.querySelector('#wrapper');
content.addEventListener('click', function(event) {
    console.log(event);
});
*/


// Default Action

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("maza aaya");
});


//  Too many events 

// The code is optimised but having one issue paragraphs have lost their individuality

let myDiv = document.createElement('div');
function paraStatus(event) {
    console.log('I have clicked on para');
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'I am para ' + i;

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv)

