console.log('client.js');
let output = 0;

//this is where you will put the fuctions 

// shows inputs on Dom and inputs and operators into objects runs on click =
function handleSubmit(event){
  event.preventDefault();
  console.log('in handlesubmit');
  let firstInput = document.querySelector('#inputOne').value;
  console.log(firstInput);
  let secondInput = document.querySelector('#inputTwo').value;
  console.log(secondInput);
  let inputToAdd = {
    firstInput: firstInput,
    operator: operator,
    secondInput: secondInput,
    }
  console.log(inputToAdd);

//  output === Number(inputToAdd);
//     document.querySelector('#outputDiv').innerHTML = Number(inputToAdd);
//     console.log(output);

  //send calculation to server
  axios.post('/', inputToAdd).then((response) => {
    console.log(response)
    }).catch((error) => {
      console.log(error);
      alert('something went wrong');
    })
} // end handleSubmit

// function calculatingOutput(num1, num2){


// }

let operator;
const operatorButtons = document.querySelectorAll(".operator");

// Add click event listeners to operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
     operator = button.value; // Get the operator from the button's value attribute
    // You can also use button.textContent if the operator is inside the button as text

    console.log(operator);
  });
});