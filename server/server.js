const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());






app.listen(port, function() { 
  console.log('listening on port', port);
})