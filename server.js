express = require('express');

let app = express();
const bodyParser = require('body-parser');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req,res){
	res.send("response done");
})


var server = app.listen( process.env.PORT || 2020, function(){
    console.log('Listening on port ' + server.address().port);
});

module.exports = app;
