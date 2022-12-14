const store=require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('name is required');
    }
    const user={
        name:name,
    };
    return store.add(user);
}

function listUsers(){
    return store.list();
}
module.exports={
    addUser,
    listUsers,
}