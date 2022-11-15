


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shifas:shifas369@cluster0.snkrm7g.mongodb.net/datasets?retryWrites=true&w=majority',{
useNewUrlParser:true,
useunifiedtopology:true
}).then(()=>{
    console.log("mongodb connected sucessfully")
}).catch((error)=>{
    console.log(error.msg)
})
