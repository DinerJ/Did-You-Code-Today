const entrySubmit = document.querySelector(".submit_new"); // Declares a new variable in JS, that represents items in the document that have a .submit new class.
const divContainer = document.getElementById("div-container"); // Declares a variable that represents the HTML element (div) with an ID of "div-container"
const dateValue = document.getElementById("date_entry");
const divCounter = document.querySelector(".counter");
const divCodedEntries = document.getElementsByClassName("coded-entries");
const divArray = [];


entrySubmit.addEventListener("click", AddNewDate); // event listener for the .submit class that runs a function called AddNewDate 

//This Function is adding the new Dates. It runs when you click the "Submit" button
function AddNewDate() {                             //This is the AddNewDate function that is being run with the entrySubmit event listener. 
    const newDiv = document.createElement("div");   //Declaring newDiv variable, which holds a new div.  These divs are being created, but are not going anywhere on the HTML.  
    newDiv.className = "coded-entries";          //This is adding the classlist of "coded-entries" to all newDiv variables. 
    const newEntry = document.createElement('li')
    newEntry.classList.add('entry-list');
    newEntry.innerText = dateValue.value;              // THIS ADDS THE NEW HTML ELEMENT!!!
    newDiv.appendChild(newEntry);

    //Trash Button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = "Delete";
    trashBtn.classList.add("trash-btn");
    newEntry.appendChild(trashBtn);
    trashBtn.addEventListener("click", removeDateEntry);
    trashBtn.addEventListener("click", removeDateCounter);
    //APPEND TO LIST
    divContainer.appendChild(newDiv);

    // Making the List appear in reverse Order through an Array 
    divArray.push(newEntry);                            // divArray is an empty array. We are pushing (adding to end) a newDiv with a classlist of "coded-entries" and value of date.Value.value.  
    let lastDivArray = divArray[divArray.length - 1];   // the last array item is now in the variable lastDivArray
    divArray.unshift(lastDivArray);                      // the lastDivArray (which is the last divarray) item is now the first array.
    divArray.pop(lastDivArray);  
    divContainer.prepend(divArray[0]);               // We are adding divArray[0] which is newDiv (which creates a new div with a classlist of coded-entries) to the divContainer varaible. 

       // Div Counter
   let divCount = divArray.length;
   divCounter.innerText = divCount;     
    console.log(divArray);
}


// Today's Current Date in Calendar Function
let today = new Date();                 // declares a new variable (today) and gives it a value equal to today's date in the format Mon-Sun, Month, Day, Year, Time, Timezone of browser
let dd = today.getDate();
    if (dd < 10) {
        dd = "0" + dd; 
    }
let mm = today.getMonth() + 1;
    if (mm < 10) {
         mm = "0" + mm;
    }
let yyyy = today.getFullYear();
let dateInputValue = yyyy + "-" + mm + "-" + dd;

dateValue.value = dateInputValue;

function removeDateEntry(e) {
   const removeEntry = e.target;
   if (removeEntry.classList[0] === "trash-btn") {
       const trash = removeEntry.parentElement;
       trash.remove();   
   }
   let divCount = divArray.length;
   divCounter.innerText = divCount;
}

function removeDateCounter() {
    divArray.splice(1, 1);
    let divCount = divArray.length;
    if (divArray.length === 1) {
        divArray.pop();
        divArray.pop();
        divCounter.innerHTML = "0";
    } else {
        divCounter.innerText = divCount; 
    } 
    console.log(divArray.length);
    console.log(divArray);
}

console.log("testdata");
