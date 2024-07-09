import product from '../Models/product.js'

class ProductService{
  async delete(id){
    if(!id){
      throw new Error('ID empty!');
  }
  const product = await product.findByIdAndDelete(req.params.id)
  if(!product){
      throw new Error('Product empty!');
  }
  return product;
  }

  async ubdate(id, data){
    if(!id){
      throw new Error('ID empty!')
  }
  const products = await product.findByIdAndUpdate(id, data)
  return products;
  }

  async getALL(){
    return await product.find()
  }
}

export default new ProductService();