const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
display.value="";
}


function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="Error Encountered";
}
}

function deleteLastCharacter() {
    const currentValue = document.getElementById('display').value;
    const newValue = currentValue.slice(0, -1);
    document.getElementById('display').value = newValue;
}

function myFunction() {
  let person = prompt("Please enter your name", "Pvouh");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! Howre you today&#128516? contact P_vouh @ +254741739262";
  }
}

function diss() {
    document.getElementById("pop").style.display="none";
}

let popup = document.getElementById("pop");

function npop(){
  popup.classList.add("npop");
}

