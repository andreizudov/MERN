const {Router}=require('express')
const router =Router()

// /api/auth/ 

 router.get('/', async(req,res)=>{
     try{


    }
 catch(e)
   {res.status(500).json({message:"Что то пошло не так, попрубуйте снова"})}

 })

 /api/auth/table
 router.get('/table', async(req,res)=>{

 })

  module.exports= router