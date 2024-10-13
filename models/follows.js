import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const FollowShema = Shema({
following_user:{
type: Shema.objectId,
ref:"User",
required: true
},
followed_user:{
    type: Shema.objectId,
    ref:"User",
    required: true

},
created_at: {
type:Date,
default: Date.now

}


})

FollowShema.index({following_user: 1,followed_user:1 }, {unique: true});

FollowShema.plugin(mongoosePaginate);

export default model("Follow" , FollowShema, "follows");