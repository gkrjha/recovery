const express = require('express');
const router = express.Router();
const User = require('../DB/connectionDB'); 

router.post('/signup',(req,res)=>{
  try{
    const newUser=new User(req.body);
    newUser.save().then(()=>res.json({newUser:newUser}))
    }
  catch(err){
    return res.status(400).json({message:err.message})
  }
})

router.post('/login', async(req,res)=>{
  try{
    const { email, password } = req.body; 
    const user= await User.findOne({ email})
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
    if( user.password===password){
      console.log(user)
      return res.json({user})
    }else {
      return res.status(401).json({message:'Invalid password'})
    }
  }
  catch(err){
    return res.status(400).json({message:err.message})
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
})

module.exports = router;