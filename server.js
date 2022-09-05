const express=require('express');
const bodyParser=require('body-parser');
const router=express.Router();


var app=express();

app.use(bodyParser.json());
app.use(router);

router.get('/',function(req,res){
    res.send('Hello World');
});

router.post('/',function(req,res){
    res.send('Hello World');
});

router.get('/message',function(req,res){
    res.send('Lista de mensajes');
});

router.post('/message',function(req,res){
    res.send('Mensaje añadido');
});

router.delete('/message',function(req,res){
    console.log(req.body);
    console.log(req.query);
    res.send('Hello World');
});

app.listen(3000,function(){
    console.log('Server started at port 3000');
});

