const express=require('express');
const router=express.Router();
const response=require('../../network/response');
const controller=require('./controller');

router.get('/',function(req,res){
    controller.getMessages()
    .then(messageList=>{
        response.success(req,res,messageList,200);
    })
    .catch(err=>{
        response.error(req,res,'Error inesperado',500,err.message);
    });

});

router.post('/',function(req,res){
    controller.addMessage(req.body.user,req.body.message)
    .then((result)=>{
        response.success(req,res,result,200);
    })
    .catch((err)=>{
        console.error(err)
        response.error(req,res,'Informacion invalida',500,err.message);
    });
});

router.delete('/',function(req,res){
    console.log(req.body);
    console.log(req.query);
    res.status(201).send({message:'Mensaje eliminado'});
});

module.exports=router;