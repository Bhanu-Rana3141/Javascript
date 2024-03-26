const t1 = performance.now();

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'I am para ' + i;

    document.body.appendChild(newElement);
}

const t2 = performance.now();

console.log("time taken: " + (t2-t1) + " ms");


// Optimisation

const t3 = performance.now();

let myDiv = document.createElement('div');
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'I am Para ' + i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

const t4 = performance.now();

console.log("time taken: " + (t4-t3) + " ms");


/* Reflow and Repaint

Reflow - 
* It is the process of calculating the dimensions and position of page element. 
* This is very time consuming task
jb bhi koi naya element dalte hain kuch calculation hoti h i.e updation in DOM, is mathematical calculation krne wale process ko reflow bolte hain
FOR EX - added a circle pehle uski calculations hongi, dimension of circle kha pe rakhna h x ya y coordinate

Repaint -
* process drawing pixels on the screen
* faster than reflow
when all the calculations are done and naya screen layout aa gya, us naya screen layout ko pixel by pixel show krna usko repaint bolte hain

IN ABOVE CODE 100 REFLOW AND REPAINT

GOOD PRACTICE - fewest reflow and repaint

DOCUMENT FRAGMENT - PERFORMANCE OPTIMISATION

* light weight document object, here all the paragraphs will be added in fragment
* NO reflow and repaint on addition
* when this fragment will be added in document then 1 reflow and 1 repaint will occur

Q. When document fragment method should be used ?
- jb DOM m multiple times updation krni ho
*/

let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // 1 reflow and 1 repaint


// CALL STACK - memory manages function calls, when function will be invoked it will be added in call stack and when function will complete it's task it will be removed from the call stack


/* 
EVENT LOOP

Synchronous - occuring at same time 

ASYNCRONOUS - code is occuring at same time , occuring after some instant of time , ex - eventListner, network calls 
* Async code uses 
*/