const express = require('express');
const app = express();
const port = 3000; // You can change this port if needed

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Import the routes from the "routes" folder
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
