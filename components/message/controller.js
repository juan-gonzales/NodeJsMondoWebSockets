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

function deleteMessage(id){
    return new Promise(async (resolve, reject)=> {
        if(!id){
            reject('El id es obligatorio');
        }
        store.deleteMessage(id)
        .then(()=>{
            resolve();
        })
        .catch(err=>{ reject(err)});
    });
}

module.exports = {addMessage, getMessages,updateMessage,deleteMessage};