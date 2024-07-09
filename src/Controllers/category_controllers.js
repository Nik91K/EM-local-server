import category from '../Models/product_category.js'
import CategoryService from '../Services/CategorytService.js'

class CategoryControllers{   
    async getCategory (req, res){   
        try {
            if(!req.params.id){
                throw new Error('ID empty! ')
            }
            const category = await category.findById(req.params.id)
            return res.json(category)
        } 
        catch (error){
            res.status(500).json(e)
        }
    };

    async getCategorys (req, res){
       try {
           return res.json(CategoryService.getALL())
       } 
       catch (error){
           res.status(500).json(e)
       }
   };

    async createCategorys (req, res){
        try{
            return res.status(201).json(await category.create(req.body))
        } catch(e){
            res.status(500).json(e)
        }
    };
    
    async updateCategory (req, res) {
        try {
            return res.json(CategotyService.ubdate(req.params.id, req.body))
        } 
        catch (error){
            res.status(500).json(e)
        }
    };

    async deleteCategory (req, res) {
        try {
            return res.json(CategotyService.delete(req.params.id))
        } 
        catch (error){
            res.status(500).json(e)
        }
    }
}

export default new CategoryController();