const db=require('mongoose');

db.promise = global.promise;

async function connect(url) {
    await db.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    console.log('db conectada');;
}

module.exports = connect;

//'mongodb+srv://admin:jR7zD1znOPjRDDyy@cluster0.vsaka.mongodb.net/node?retryWrites=true&w=majority'

