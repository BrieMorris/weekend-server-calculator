# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

I had to build a server side calculator that could compute two input numbers using a variety of operators. The operators included are +, -, /, *. The end goal needed to include the calc, last answer and a list of all the equations on the DOM.

First I added the inputs and buttons to HTML. The eaqual button I included the onclick handle submit function with the params being event. For the c (clear) button the onclich has an empty string and an id of clear. 

Next I worked on my handleSubmit function with event param. This captures two input values, performs a calculation, and then displaying the result in the outputDiv.

Then using the axios library to make a POST request to a server endpoint (/calc) with the inputToAdd object, and then handling the response using a .then() block. Also, there is an error handling block using .catch().

My getOutput() function is making a GET request to the /calc endpoint, retrieve the calculated output from the server, and then use the renderToDOM() function to render the output on the client side. 

The renderToDOM() function is rendering both the history of calculations and the last answer to the DOM. It will iterate through the calculations array, generate HTML elements for each equation, and append them to the #history element. It will also get the result from the last calculation and update the #outputDiv element with the last answer.

For my operators I set up event listeners for operator buttons and capturing the selected operator. Then adding click event listeners to buttons with the class "operator," and when clicked, it gets the operator value from the button's value attribute.

On the sever side I set up a route to handle a GET request to /calc and send back the calculations to the client. Connecting server to the client.

My app.post('/calc') route handles a POST request to the /calc endpoint. It receives calculation data from the client. Uses a switch statement, the server performs the calculation based on the received operator (+, -, *, or /). Then adds the calculated result to the data, pushes the calculation to the calculations array, and responds with a status code.


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
