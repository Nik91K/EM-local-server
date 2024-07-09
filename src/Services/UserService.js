import user from '../Models/user.js'

class UserService{
  async delete(id){
    if(!id){
      throw new Error('ID empty!');
  }
  const user = await user.findByIdAndDelete(req.params.id)
  if(!user){
      throw new Error('Review empty!');
  }
  return review;
  }

  async ubdate(id, data){
    if(!id){
      throw new Error('ID empty!')
  }
  const users = await user.findByIdAndUpdate(id, data)
  return users;
  }

  async getALL(){
    return await user.find()
  }
}

export default new UserService();