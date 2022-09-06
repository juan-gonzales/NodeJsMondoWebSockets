const express=require('express');
const router=express.Router();
const response=require('../../network/response');
const controller=require('./controller');

router.get('/',function(req,res){
    const filterMessages=req.query.user || null;
    controller.getMessages(filterMessages)
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

router.patch('/:id',function(req,res){
    controller.updateMessage(req.params.id,req.body.message)
    .then((result)=>{
        response.success(req,res,result,200);
    })
    .catch((err)=>{
        response.error(req,res,'Error interno',500,err.message);
    })
})

router.delete('/:id',function(req,res){
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.success(req,res,`Mensaje ${req.params.id} eliminado`,200);
    })
    .catch((err)=>{
        response.error(req,res,'Error interno',500,err.message);
    })
})

module.exports=router;