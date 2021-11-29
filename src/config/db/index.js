const mongoose=require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.6iqnb.mongodb.net/PTUDWShop?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('success')
    }catch(error){
        console.log('fail')
    }

}
module.exports={connect}
