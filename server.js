const path = require('path');
const express = require('express');
const app = express();

// Serve static files
//app.use(express.static(__dirname + '/src'));
app.use( express.static(path.join(__dirname, '/src/proyecto-tiempo')));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/proyecto-tiempo/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
