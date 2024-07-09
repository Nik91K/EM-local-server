import product from '../Models/product.js'
import ProductService from '../Services/ProductService.js'

class ProductControllers{   
    async getProduct (req, res){   
        try {
            if(!req.params.id){
                throw new Error('ID empty! ')
            }
            const product = await product.findById(req.params.id)
            return res.json(product)
        } 
        catch (error){
            res.status(500).json(e)
        }
        // console.log(req.params.id);
        // console.log(req.query)
    };

    async getProducts (req, res){
       try {
            return res.json(ProductService.getALL())
       } 
       catch (error){
           res.status(500).json(e)
       }
   };

    async createProducts (req, res){
        try{
            return res.status(201).json(await product.create(req.body))
        } catch(e){
            res.status(500).json(e)
        }
    };
    
    async updateProduct (req, res) {
        try {
            return res.json(ProductService.ubdate(req.params.id, req.body))
        } 
        catch (error){
            res.status(500).json(e)
        }
    };

    async deleteProduct (req, res) {
        try {
            return res.json(ProductService.delete(req.params.id))
        } 
        catch (error){
            res.status(500).json(e)
        }
    }
}

export default new ProductController();

// module.exports = {
//     getProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct
// }