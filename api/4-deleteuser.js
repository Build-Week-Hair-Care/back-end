const express = require('express');
const Users = require('./5-usecasesmodel');
const deleteuser = express();


deleteuser.use(express.json());

deleteuser.delete('/username', (req, res) => {
    Users.remove(req.params['.id'])
     .then((data) => { 
         if (data === undefined) {
             res.status(404).json({message: "The user with the specified ID does not exist."})
         } else {res.status(200).json(data)}})
     .catch((err) => res.status(500).json({error: "The user could not be removed."}))
       });
   

module.exports = deleteuser;