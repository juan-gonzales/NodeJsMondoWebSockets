const express=require('express');
const bodyParser=require('body-parser');
const router=express.Router();
const response=require('./network/response');


var app=express();

app.use(bodyParser.json());
app.use(router);

router.get('/',function(req,res){
    res.send('Hello World');
});

router.post('/',function(req,res){
    res.status(201).send({error:false,message:'Successfully created'});
});

router.get('/message',function(req,res){
    console.log(req.headers);
    res.header({customHeader:'valor personalizado'});
    response.success(req,res,'Lista de mensajes',200);
});

router.post('/message',function(req,res){
    res.status(201).send({error:false,message:'Successfully created'});
});

router.delete('/message',function(req,res){
    console.log(req.body);
    console.log(req.query);
    res.status(201).send({message:'Mensaje eliminado'});
});

app.use('/app',express.static('public'));

app.listen(3000,function(){
    console.log('Server started at port 3000');
});

