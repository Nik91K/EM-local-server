import review from '../Models/product_review.js'
import ReviewService from '../Services/ReviewService.js'


class ReviewControllers{   
    async getReview (req, res){   
        try {
            if(!req.params.id){
                throw new Error('ID empty! ')
            }
            const review = await review.findById(req.params.id)
            return res.json(review)
        } 
        catch (error){
            res.status(500).json(e)
        }
    };

    async getReviews (req, res){
       try {
            return res.json(ReviewService.getALL())
       } 
       catch (error){
           res.status(500).json(e)
       }
   };

    async createReviews (req, res){
        try{
            return res.status(201).json(await review.create(req.body))
        } catch(e){
            res.status(500).json(e)
        }
    };
    
    async updateReview (req, res) {
        try {
            return res.json(ReviewService.ubdate(req.params.id, req.body))

        } 
        catch (error){
            res.status(500).json(e)
        }
    };

    async deleteReview (req, res) {
        try {
            return res.json(ReviewService.delete(req.params.id))
        } 
        catch (error){
            res.status(500).json(e)
        }
    }
}

export default new ReviewController();