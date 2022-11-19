let express = require('express'); //for required the express//

let app = express(); //creat object of the express//
const db = require('./db');

let port = process.env.PORT || 9800; //if that not find 2500 on .env file then it run on port no. 9800


//after doing all the things of mongodb we com here to connect nodejs with mongodb//
let cors = require('cors'); 

app.use(cors());

//all the route we have define that are inside the authcontroller
const AuthContoller = require('./controller/authController');
app.use('/api/auth',AuthContoller);



app.listen(port,() => {
    console.log(`listening on port ${port}`)
})