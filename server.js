const express=require('express');
const router=express.Router();


var app=express();

// app.use('/',function(req,res){
//     res.send('Hello World');
// });

app.use(router);
router.get('/',function(req,res){
    res.send('Hello World');
});

router.post('/',function(req,res){
    res.send('Hello World');
});

router.get('/message',function(req,res){
    res.send('Lista de mensaje');
});

router.post('/message',function(req,res){
    res.send('Mensaje añadido');
});

app.listen(3000,function(){
    console.log('Server started at port 3000');
});

