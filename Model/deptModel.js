const  mongoose = require('../Config/empConfig');
const schema = mongoose.Schema;
const DeptSchema = new schema({

    deptName:{


        type:String,
        required:true
    },
    isDeleted:{

      type:Boolean,
        default:false
    }


});

const dept = mongoose.model('Department',DeptSchema);
module.exports = dept;