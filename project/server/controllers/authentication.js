const passwordHash = require('password-hash');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userschema = mongoose.model( "users", new Schema(require( '../models/authmodel' ), {
	collection: 'users'
}) );
let authentication = {
    userRegister: function(req, res) {
      userschema.find({
        "email":req.body.email
      },function(err,data){
        if(err){
          res.json({
            status:500,
            message:err
          });
        }else if(data.length>0){
          res.json({
            status:402,
            message:"email id already exists"
          });
        }else{
          var hashedPassword = passwordHash.generate(req.body.password);
          let userdata=new userschema(req.body);
          userdata.password=hashedPassword;
          userdata.save(function(err,success){
            if(err){
              res.json({
                status:500,
                message:err
              });
            }else{
              res.json({
                status:200,
                message:"success"
              })
            }
          })
        }
      })
    },
    userLogin: function(req, res) {
      userschema.findOne({
        email:req.body.email
      },function(err,userdata){
        if(err){
          res.json({
            status:500,
            message:err
          });
        }else if(userdata){
					userdata=JSON.parse(JSON.stringify(userdata));
					console.log(userdata);
          if(passwordHash.verify(req.body.password, userdata.password)==true){
            res.json({
              status:200,
              message:"success"
            })
          }else{
            res.json({
              status:403,
              message:"incorrect password"
            });
          }
        }else{
          res.json({
            status:403,
            message:"user not exists"
          });
        }
      })
    }
};
module.exports = authentication;
