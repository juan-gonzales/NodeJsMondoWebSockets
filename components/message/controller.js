const store=require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject)=> {
        if(!user || !message){
            reject('El usuario y el mensaje son obligatorios');
        }else{
            const fullMessage = {user,message,date:new Date()};
            store.add(fullMessage);
            resolve(fullMessage);
        }
    });
}

function getMessages(filterUser) {
    return new Promise((resolve, reject)=> {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id,message){
    return new Promise(async (resolve, reject)=> {
        if(!id || !message){
            reject('El id y el mensaje son obligatorios');
        }
        const result= await store.updateText(id,message);
        resolve(result);
    });
}

module.exports = {addMessage, getMessages,updateMessage};