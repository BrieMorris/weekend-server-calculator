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
app.get('/'), (req, res) => {
  res.send(calculations)
}

// send to calcularions to server and calculates the equation
app.post('/' , (req, res) => {
  let calculations = req.body;
  console.log(calculations);
  let firstInput = Number(calculations.firstInput);
  let operator = calculations.operator;
  let secondInput = Number(calculations.secondInput);
  let result = 0;
  switch(operator) {
    case '+': result = firstInput + secondInput; break;
    case '-': result = firstInput - secondInput; break;
    case  '*': result = firstInput * secondInput; break;
    case '/': result = firstInput / secondInput; break;
} 
  calculations.result = result;
  res.sendStatus(200);
})
