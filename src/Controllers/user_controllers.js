import user from '../Models/user.js'
import UserService from '../Services/UserService.js'
import ReviewService from '../Services/UserService.js'

class UserControllers{   
    async getUser (req, res){   
        try {
            if(!req.params.id){
                throw new Error('ID empty! ')
            }
            const user = await user.findById(req.params.id)
            return res.json(user)
        } 
        catch (error){
            res.status(500).json(e)
        }
        // console.log(req.params.id);
        // console.log(req.query)
    };

    async getUsers (req, res){
       try {
            return res.json(UserService.getALL())
       } 
       catch (error){
           res.status(500).json(e)
       }
   };

    async createUsers (req, res){
        try{
            return res.status(201).json(await user.create(req.body))
        } catch(e){
            res.status(500).json(e)
        }
    };
    
    async updateUser (req, res) {
        try {
            return res.json(UserService.ubdate(req.params.id, req.body))
        } 
        catch (error){
            res.status(500).json(e)
        }
    };

    async deleteUser (req, res) {
        try {
            return res.json(UserService.delete(req.params.id))
        } 
        catch (error){
            res.status(500).json(e)
        }
    }
}

export default new UserController();