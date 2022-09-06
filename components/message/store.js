
const Model=require('./model');

function addMessage(message) {
    const myMessage=new Model(message);
    myMessage.save();
};

async function getMessages(filterUser) {
    return new Promise((resolve,reject)=>{
        let filter={};
        if(filterUser) {
            filter={user:filterUser};
        }
        const messages= Model.find(filter)
        .populate('user')
        .catch(err=>{
            reject(err);
        });
        resolve(messages);
    })
    
};

async function updateText(id,message){
    const result=await Model.findOne({_id:id});
    result.message=message;
    const newMessage=await result.save();
    return newMessage;
}

function deleteMessage(id){
    return Model.deleteOne({_id:id});
}
module.exports = {
    add: addMessage, 
    list: getMessages,
    updateText:updateText,
    deleteMessage:deleteMessage,
};