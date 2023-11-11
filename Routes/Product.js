const express = require('express');
const {createProduct, getAllProducts , getSpecificProduct , replaceProduct , updateProduct ,deleteProduct} = require('../Controller/Product');
const router = express.Router();

router
   .post('/', createProduct)
   .get('/' , getAllProducts)
   .get('/:id' , getSpecificProduct)
   .put('/:id' , replaceProduct)
   .patch('/:id' , updateProduct)
   .delete('/:id' , deleteProduct);

   exports.router = router;