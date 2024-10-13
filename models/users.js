import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const UserShema = Schema ({
name: {
    type:String,
    required: true
},

last_name: {
    type:String,
    required: true
},

nick: {
    type:String,
    required: true,
    unique: true
},

email:{
    type:String,
    required: true,
    unique:true
},

bio: String,
  

password: {
    type:String,
    required: true
},

role: {
    type:String,
    default: "role_user"
},

image: {
    type:String,
    default: "default_user.png"
},

created_at: {
    type: Date ,
    default:  Date.now 

},



});


UserShema.plugin(mongoosePaginate);

export default model("User", UserShema, "users");