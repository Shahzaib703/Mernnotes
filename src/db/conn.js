const mongoose = require("mongoose");
const db = 'mongodb+srv://Shahzaib703:Gtk3162786@cluster0.d25jb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(db).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err)
})