import category from '../Models/product_category'

class CategotyService{
  async delete(id){
    if(!id){
      throw new Error('ID empty!');
  }
  const category = await category.findByIdAndDelete(req.params.id)
  if(!category){
      throw new Error('Category empty!');
  }
  return category;
  }

  async ubdate(id, data){
    if(!id){
      throw new Error('ID empty!')
  }
  const categorys = await category.findByIdAndUpdate(id, data)
  return categorys;
  }

  async getALL(){
    return await category.find()
  }
}

export default new CategotyService();