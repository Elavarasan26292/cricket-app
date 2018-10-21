"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.models = {};
let playerchema = mongoose.model( "players", new Schema(require( '../models/playermodel' ), {
	collection: 'players'
}) );
let controller = {
    getplayerlist: function(req, res) {
      playerchema.find({
      },function(err,players){
        if(err){
          res.json({
            status:500,
            message:err
          });
        }else if(players.length>0){
					res.json({
            status:200,
            playerdata:players
          });
        }else{
          res.json({
            status:403,
            message:"no players available"
          });
        }
      }).sort({updated_at:-1})
    },

		createplayer:function(req,res){
			let playerdata=new playerchema(req.body);
			playerdata.created_at=new Date();
			playerdata.updated_at=new Date();
			playerdata.visits=0;
			playerdata.save(function(err,resp){
				if(err){
					res.json({
            status:500,
            message:err
          });
				}else{
					res.json({
            status:200,
            message:"success"
          });
				}
			})
		},

		getplayer:function(req,res){
			playerchema.findOne({
				_id:req.params.id
			},function(err,player){
				if(err){
					res.json({
            status:500,
            message:err
          });
				}else if(player){
					res.json({
						status:200,
						datas:player
					})
				}else{
					res.json({
            status:403,
            message:"player not available"
          });
				}
			})
		},

		updateplayer:function(req,res){
			playerchema.findOne({
				_id:req.body._id
			},function(err,player){
				if(err){
					res.json({
						status:500,
						message:err
					});
				}else if(player){
					if(req.body.views=="UPDT"){
						player.visits=player.visits+1;
					}else{
					player.player_id=req.body.player_id;
					player.player_name=req.body.player_name;
					player.age=req.body.age;
					player.address_ln_1=req.body.address_ln_1;
					player.address_ln_2=req.body.address_ln_2;
					player.address_ln_3=req.body.address_ln_3;
					player.country=req.body.country;
					player.state=req.body.state;
					player.city=req.body.city;
					player.role=req.body.role;
					player.bating_style=req.body.bating_style;
					player.bowling_style=req.body.bowling_style;
					player.teams_played=req.body.teams_played;
					player.man_of_match=req.body.man_of_match;
					player.matches_played=req.body.matches_played;
					player.visits=req.body.visits;
					player.updated_at=new Date();
				}
					player.save(function(err,updtdata){
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

				}else{
					res.json({
						status:403,
						message:"player not available"
					});
				}
			})
		},
		deleteplayer:function(req,res){
			playerchema.remove({
				_id:req.params.id
			},function(err,deldata){
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
};
module.exports = controller;
