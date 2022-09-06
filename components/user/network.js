const express=require('express');
const router=express.Router();
const response=require('../../network/response');
const controller=require('./controller');

router.post('/',function(req,res){
    controller.addUser(req.body.name)
    .then((data)=>{
        response.success(req,res,data,201);
    })
    .catch((error)=>{
        response.error(req,res,'Error interno',500,error.message);
    });
});

router.get('/',function(req,res){
    controller.listUsers()
    .then((data)=>{
        response.success(req,res,data,200);
    })
    .catch((error)=>{
        response.error(req,res,'Error interno',500,error.message);
    });
})
module.exports=router;