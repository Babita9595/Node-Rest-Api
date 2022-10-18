let express = require('express'); //for required the express//
let app = express(); //creat object of the express//

//to replicate the environment variable means set the system environment varible//
let dotenv = require('dotenv');
dotenv.config() //this basically pic the env variable that we set 2500 in .env file //

// for logging purposes here morgan package is used//
let morgan = require('morgan');

let fs = require('fs'); //for save the  log data from cmd

let port = process.env.PORT || 9800; //if that not find 2500 on .env file then it run on port no. 9800

//after doing all the things of mongodb we com here to connect nodejs with mongodb//
let cors = require('cors'); 
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoLive;
let bodyParser = require('body-parser') //use this for postman tool of post api
let db;




//also we can add the prorty of morgan (also called middleware) //app.logs is filename
app.use(morgan('short',{stream:fs.createWriteStream('./app.logs')}))
//mongodb middle ware//
app.use(cors());


//bodyparser is also middle ware 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) //here that achieve data in json format

//route define here//
app.get('/',(req,res) => {

res.send(`this is from express and express hello hii morgan`)
})

//another route define for 'category'
app.get('/category',(req,res) => { //route for collection
categoryId = req.query.categoryId //query param not work

    let query = {};
    if(categoryId){

        query = {category_id:categoryId}
    }


db.collection('category').find().toArray((err,result)=>{
if(err) throw err;
res.send(result)

})
   // res.send(`this is from home page,namste`)
    })


// again route for 'topoffers' collections (under category) 
app.get('/topoffers',(req,res) => { //route for collection
    db.collection('topoffers').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})


// again route for 'mobile' collections 
app.get('/mobile',(req,res) => { //route for collection

    
    db.collection('mobile').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})

// again route for 'babyboyfashion' collections 
app.get('/babyboyfashion',(req,res) => { //route for collection
    db.collection('babyboyfashion').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})


// again route for 'babygirlfashion' collections 
app.get('/babygirlfashion',(req,res) => { //route for collection
    db.collection('babygirlfashion').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})


// again route for 'menfashion' collections 
app.get('/menfashion',(req,res) => { //route for collection
    db.collection('menfashion').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})


// again route for 'womenfashion' collections 
app.get('/womenfashion',(req,res) => { //route for collection
    db.collection('womenfashion').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})


// again route for 'electronic' collections 
app.get('/electronic',(req,res) => { //route for collection


    db.collection('electronic').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})



// again route for 'toy' collections 
app.get('/toy',(req,res) => { //route for collection
    db.collection('toy').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
   
    
})

})


// again route for 'beauty&more' collections 
app.get('/beauty&more',(req,res) => { //route for collection

 //find data wrt to types use this code//
 let query = {};
 let Price = Number(req.query.Price);
 if(Price){
    query={price:Price}
 }

db.collection('beauty&more').find().toArray((err,result)=>{
if(err) throw err; 
 res.send(result)
    
})

})





   // again route for 'scroll'  and collections 
 app.get('/scroll',(req,res) => { //route for collection
        db.collection('scroll').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
        
   })
})



    // again route for 'Deals of the day' collections 
 app.get('/DealsOfTheDay',(req,res) => { //route for collection
 
   
   
    db.collection('DealsOfTheDay').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    

})

})



  // again route for 'MoreProduct' collections 
  app.get('/MoreProduct',(req,res) => { //route for collection
//aplly query param here// //it not work here
   let query ={};
   let MoreProductId = Number(req.query.MoreProductId); //convert string into number 
   if(MoreProductId){
    query ={more_product_id:MoreProductId}
   }


    db.collection('MoreProduct').find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
    
})

})


//list of order
app.get('/orders',(req,res) => {
    let email = req.query.email
    let query = {};
    if(email){
       // query={email:email}
        query={email}
    }
    db.collection('orders').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})


//make request for post call in postman //
app.post('/placeOrder',(req,res) => {
    console.log(req.body);
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})




//connection with mongo//


MongoClient.connect(mongoUrl,(err,client)=>{
if(err) console.log('Error while connecting');
db = client.db('FlipkartData') //you have to give database name here//


app.listen(port,() => {

    console.log(`listing to post  ${port}`) // mongo ke pahle se hai ye expessn
})



})