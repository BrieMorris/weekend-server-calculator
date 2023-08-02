// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser'); // 
const calculations = [];

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = process.env.PORT || 5001;

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //needed in the past


// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});

// tells the server the route
app.get('/calc', (req, res) => {
  console.log('calculations sent to client', calculations);
  res.send(calculations)
  
})

// send to calcularions to server and calculates the equation
app.post('/calc' , (req, res) => {
  let calc = req.body;
  console.log(calc);
  let firstInput = Number(calc.firstInput);
  let operator = calc.operator;
  let secondInput = Number(calc.secondInput);
  let result = 0;
  switch(operator) {
    case '+': result = firstInput + secondInput; break;
    case '-': result = firstInput - secondInput; break;
    case  '*': result = firstInput * secondInput; break;
    case '/': result = firstInput / secondInput; break;
} 
  calc.result = result;
  calculations.push(calc);
  console.log(calculations);
  res.sendStatus(200);
})
