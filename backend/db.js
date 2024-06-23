const mongoose=require('mongoose');
const mongoURI='mongodb://localhost:27017/inotebook';

const connectToMOngo=async ()=>
    {
       mongoose.connect(mongoURI)
          .then((success)=> console.log('sucess'));
    }
module.exports=connectToMOngo;