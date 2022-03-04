const { findByIdAndUpdate } = require('../model/model');
var Userdb = require('../model/model');
exports.create = (req, res)=>{

    if(!req.body){
        res.status(400).send({message:"Empty content"});
        return;
    }

    const user = new Userdb(
        { 
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        }
    )


    user
    .save(user)
    .then(data=>{
        //res.send(data)
        res.redirect('/add-user')
    })
    .catch(err=>{
        res.status(500).send({message:"Error creatibg user"})
    })

}

exports.find = (req, res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error getting data"})
    })
}

exports.update = (req, res)=>{
    if(!req.body){
        return res.status(400).send({message:"Empty content"});
        
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message:"Error found no data"})
        }else{
            res.send(data)
            }
})
.catch(err=>{
    res.status(500).send({message:err.message||"Error no data"})
})
    
}

exports.delete = (req, res)=>{
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:"Error found no data"})
        }else{
            res.send({message:"User deleted"})
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Cannot delete user "})
 })
    
}