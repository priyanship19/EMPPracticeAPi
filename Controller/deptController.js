const deptModel = require('../Model/deptModel');

exports.addDept = ((req,res) => {


    var dept = new deptModel({
        deptName:req.body.deptName,
    })

    dept.save().then((result) => {

        res.status(200).json(result);
    })
        .catch((error) => {

            res.status(404).json(error);
        })

});
exports.getAlldept = ((req,res) => {
        deptModel.find({isDeleted: false}).then((result) => {
            if(!result) {
                return res.status(404).json("Not Found");
            }
            res.status(200).json(result);
        })

            .catch((error) => {

                res.status(404).json(error);
            })


});
exports.updateDept = ((req,res) => {

    deptModel.findOneAndUpdate({_id:req.params.id,isDeleted:false},{
        $set : {

            deptName:req.body.deptName
        }
    }).then((result) => {


        res.status(200).json(result);
        },(error) => {
                res.status(404).json(error);

        }).catch((error) => {

        res.status(404).json(error);
        })
})
exports.deleteDept = ((req,res) => {

    deptModel.findOneAndUpdate({_id:req.params.did},{
        $set : {

            isDeleted:true
        }
    }).then((result) => {

        res.status(200).json(result);
    },(error) => {
        res.status(404).json(error);

    }).catch((error) => {

        res.status(404).json(error);
    })
})