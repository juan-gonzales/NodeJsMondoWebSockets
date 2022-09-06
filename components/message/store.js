const db=require('mongoose');
const Model=require('./model');

db.promise = global.promise;
db.connect('mongodb+srv://admin:jR7zD1znOPjRDDyy@cluster0.vsaka.mongodb.net/node?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});
console.log('db conectada');

function addMessage(message) {
    const myMessage=new Model(message);
    myMessage.save();
};

async function getMessages() {
    const messages=await Model.find();
    return messages;
};

async function updateText(id,message){
    const result=await Model.findOne({_id:id});
    result.message=message;
    const newMessage=await result.save();
    return newMessage;
}

module.exports = {
    add: addMessage, 
    list: getMessages,
    updateText:updateText,
};