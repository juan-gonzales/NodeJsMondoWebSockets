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

module.exports = {
    add: addMessage, 
    list: getMessages
};

//jR7zD1znOPjRDDyy