const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://localhost:27017/neelhostdata",{ useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex:true })
.then( ()=>console.log("connection succesfull....") )
.catch((err)=>console.log(err));

// Schema
const playlistSchema= new mongoose.Schema({
    name :{
        type : String,
        required : true,
        uppercase : false,
        lowercase : true,
        trim : true,
        minlength:[3,"Minimum 3 letter is allowed"],
        maxlength : 30

    },
    ctype:{
        type: String,
        required : true,
        lowercase:true,
        enum:["frontend","backend","database"]
    },
    videos:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("Videos count should not be negative");
            }
        }

    },
    author : String,
    email : {
            type:String,
            required:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is invalid");
                 }     }
    },
    active: Boolean,
    date : {
        type : Date,
        default : Date.now
    }
})

//collection creation
const Playlist = new mongoose.model('Playlist',playlistSchema);

// create document or insertion

const createDocument = async ()=> {
    try{
        // const jsPlaylist = new Playlist({
        //     name :"Java Script",
        //     ctype: "Full Devlopment",
        //     videos:23,
        //     author : "Neel Shukla",
        //     active: true
        // })
        // const mongoPlaylist = new Playlist({
        //     name :"MongoDB",
        //     ctype: "Database",
        //     videos:70,
        //     author : "Neel Shukla",
        //     active: true
        // })
        const mongoosePlaylist = new Playlist({
            name :"Mongoose JS",
            ctype: "Database",
            videos:4,
            author : "Neel Shukla",
            email : "neel@gmail.co",
            active: true
        })
        // const expressPlaylist = new Playlist({
        //     name :"Express JS",
        //     ctype: "Back End",
        //     videos:36,
        //     author : "Neel Shukla",
        //     active: true
        // })
        // const javaPlaylist = new Playlist({
        //     name :"Java",
        //     ctype: "Software Devlopement",
        //     videos:65,
        //     author : "Neel Shukla",
        //     active: true
        // })
    
        const result = await Playlist.insertMany([mongoosePlaylist]);
        console.log(result);
    } catch(err){
        console.log(err);
    }
   
}

createDocument();
//promise return
//  reactPlaylist.save();

const getDocument = async ()=> {
    try{
    const result = await Playlist
    .find({$and : [{author:"Neel Shukla"}]})
    .select({_id:0,name:1})
    .sort({name:-1})
    // .countDocuments()
    
    // .limit(1)
    // .skip(2);
    console.log(result);
}catch(err){
    console.log(err);
}}

// getDocument();

//update data
const updateDocument = async(_id)=>{
    try{
    const result = await Playlist.findByIdAndUpdate({_id},{
        $set:{
            name:"Mongoos" 
        }
    },
    {
            useFindModify : false
        
    });
    console.log(result);
}catch(err){
    console.log(err);
} 
}
//updateDocument("60ec8407a390fc25d07f13df");