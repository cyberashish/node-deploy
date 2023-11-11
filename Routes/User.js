const express = require('express');
const {createuser, getAllusers , getSpecificuser , replaceuser , updateuser ,deleteuser} = require('../Controller/User');
const router = express.Router();

router
   .post('/', createuser)
   .get('/' , getAllusers)
   .get('/:id' , getSpecificuser)
   .put('/:id' , replaceuser)
   .patch('/:id' , updateuser)
   .delete('/:id' , deleteuser);

   exports.userRouter = router;