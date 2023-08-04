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

  output === Number(inputToAdd);
  document.querySelector('#outputDiv').innerHTML = Number(inputToAdd);
  console.log(output);


  //send calculation to server
  axios.post('/calc', inputToAdd).then((response) => {
    getOutput();
    console.log(response)
    }).catch((error) => {
      console.log(error);
      alert('something went wrong');
    })
    
} // end handleSubmit

// I need to call the handleSubmit

  // get route
  function getOutput(){
    console.log('in getOutput');
    axios.get('/calc').then((response) => {
      let outputFromServer = response.data;
      console.log(response);
      renderToDOM(outputFromServer);
    }).catch((error) => {
    console.log(error);
    alert('something went wrong')
  })
  }

  // function renderToDOM(exps){
  //   let equation = document.querySelector('#outputDiv');
  //   equation.innerHTML = '';
  //   if (exps.length > 0){
  //     for (let i = 0; i < exps.length; i++) {
  //       equation.innerHTML += `
  //         - ${exps[i].calculations}
  //       `;
  //     }
  //   }
  // }

function renderToDOM(calculations){
  console.log('rendering to DOM', calculations);
  let history = document.querySelector('#history')
  history.innerHTML = '';

  for (let equation of calculations){
    history.innerHTML += `
      <p>${equation.firstInput} ${equation.operator} ${equation.secondInput} = ${equation.result} <p>
    `
  }
  
  let lastCalc = calculations[calculations.length - 1];
  let lastAnswer = lastCalc.result; 
  
  let outputDiv = document.querySelector('#outputDiv');
  outputDiv.innerHTML = `Last answer: ${lastAnswer}`;
  console.log('Last answer: ', lastAnswer); 
 
}

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