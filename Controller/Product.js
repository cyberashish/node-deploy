const fs = require("fs");
const model = require("../Model/product");
// const index = fs.readFileSync('index.html','utf-8');
// const publicData = JSON.parse(fs.readFileSync('data.json' , 'utf-8'));
// const products = publicData.products;
const Product = model.Product;

exports.createProduct = (req,res) => {
    const product = new Product(req.body);
    product.save().then((doc) => {console.log(doc)
        res.json(doc);
    }).catch((error) => {console.log(error)
        res.status(400).json(error);
    })
    
}

exports.getAllProducts = async (req,res) => {
    const products = await Product.find({});
    res.status(201).json(products);
}

exports.getSpecificProduct = async (req,res) => {
    const id = req.params.id;
    const product = await Product.findById(id)
    res.json(product);
}

exports.replaceProduct = async (req,res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
        res.status(201).json(doc);
    }
    catch(error){
        console.log(error);
        res.status(400).json(err);
    }
}

exports.updateProduct = async (req,res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.status(201).json(doc);
    }
    catch(error){
        console.log(error);
        res.status(400).json(err);
    }
}

exports.deleteProduct = async (req,res) => {
    const id = req.params.id;
   try{
    const doc = await Product.findOneAndDelete({_id:id});
    res.status(201).json(doc);
   }
   catch(error){
    res.status(404).json(error);
   }
}