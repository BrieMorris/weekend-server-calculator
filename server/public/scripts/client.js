console.log('client.js');

//this is where you will put the fuctions 


function handleSubmit(event){
  event.preventDefault();
  let firstInput = document.querySelector('#inputOne').value;
  let secondInput = document.querySelector('#inputTwo').value;
  //let add = document.querySelector('#addition').value;
  //let subtract = document.querySelector('#subtraction').value;
  //let times = document.querySelector('#multiplication').value;
  //let divide = document.querySelector('#division').value;
  let inputToAdd = {
    firstInput: firstInput,
    secondInput: secondInput,
    operator: operator
    }
  console.log(inputToAdd);

  //send calculation to server
  axios.post('/calculations', inputToAdd).then((response) => {
    }).catch((error) => {
      console.log(error);
      alert('something went wrong');
    })
} // end handleSubmit

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