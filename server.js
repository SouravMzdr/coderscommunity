const express = require('express');
const path = require('path');
const compression = require('compression')
var cors = require('cors');

const app = express();
// app.use(compression())
app.use(cors({origin:true}));

// app.use(cors());

 app.use(function(req, res, next) {

     res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.setHeader("Access-Control-Allow-Methods","*");
     next();
   });


// Serve static files....
app.use(express.static(__dirname + '/dist/QandA'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/QandA/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);


