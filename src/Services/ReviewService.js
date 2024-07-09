import review from '../Models/product_review.js'

class ReviewService{
  async delete(id){
    if(!id){
      throw new Error('ID empty!');
  }
  const review = await review.findByIdAndDelete(req.params.id)
  if(!review){
      throw new Error('Review empty!');
  }
  return review;
  }

  async ubdate(id, data){
    if(!id){
      throw new Error('ID empty!')
  }
  const reviews = await review.findByIdAndUpdate(id, data)
  return reviews;
  }

  async getALL(){
    return await review.find()
  }
}

export default new ReviewService();