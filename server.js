const express=require('express');
const bodyParser=require('body-parser');

const db=require('./db');
const router=require('./network/routes');
db('mongodb+srv://admin:jR7zD1znOPjRDDyy@cluster0.vsaka.mongodb.net/node?retryWrites=true&w=majority');

var app=express();

app.use(bodyParser.json());
router(app);


app.use('/app',express.static('public'));

app.listen(3000,function(){
    console.log('Server started at port 3000');
});

