var models = require('../db/models.js');
// client to database methods
module.exports = {
  trainersView:{

    addClient: function(req, res){
      models.Users.findOrCreate({where:{
        $or:[
          {
            username: req.username
          },
          {
            email: req.email
          }
        ] }, defaults: {
          first_name: req.firstName, last_name:req.lastName, address:req.address, phone_number:req.phoneNumber, email:req.email, username:req.username
        }
      }).then(function(user){
        res.send(user)
      });
    },
    searchClients: function(req, res){

    },
    createWorkouts: function(req, res){

    }

  },
  clientsView:{
    grabWorkouts: function(req, res){

    }
  },
  usersView:{
    // params is an object that contains the properties of the user
    // models.Users.create({first_name:params.firstName, last_name:params.lastName, username:params.username, address:params.address, phone_number:params.phoneNumber, email:params.email})
    signUp: function(req, res){
      models.Users.findOrCreate({where:{
        $or:[
          {
            username: req.username
          },
          {
            email: req.email
          }
        ] }, defaults: {
          first_name: req.firstName, last_name:req.lastName, address:req.address, phone_number:req.phoneNumber, email:req.email, username:req.username
        }
      }).then(function(user){
        res.send(user)
      });
    },
    login: function(){

    }
  },
  exercises:{

  }


}



//testing grounds ignore past this point
// working method
// personParams = {firstName:'kale', lastName:'evad', username:'kaleevad1', address:'9521 hello world', phoneNumber:'110399123', email:'kaleevade1@gmail.com'}
// module.exports.usersView.signUp(personParams)

// // this query creates a user
// models.Users.create({first_name:'david1', last_name:'dave1', username:'helloworld', address:'1234 hello world', phone_number:3214443333, email:'helloworld@gmail.com'})
// models.Users.create({first_name:'inor', last_name:'mes', username:'inormes', address:'1234 inormes', phone_number:'13546665', email:'inormes@gmail.com'})

// this query sets the user as a trainer
// models.Trainers.create({id_user:1})

// this creates the trainer client relationship
// for some reason the forerign key gets changed to userId and trainer Id
// models.Trainer_Client.create({userId:2, trainerId:2})

      models.Trainer_Client.find({/*include:[models.Users],*/ where:{
          $or:[
              {
                trainerId: 2
              }
          ]
        }
      }).then(function(user){
        console.log(user)
      });














