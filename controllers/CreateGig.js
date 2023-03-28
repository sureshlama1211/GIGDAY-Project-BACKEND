// const Creategig = require('../models/Creategig')
// const asyncWrapper = require('../middleware/async')
// const {createCustomnError} =  require('../errors/customn -error')

// const getAllGig = asyncWrapper( async (req,res)=>{
//         const gigs = await Creategig.find({})
//         res.status(200).json({gigs})
// })

// const createGig = asyncWrapper( async(req,res)=>{
//         const gig = await Creategig.create(req.body)
//         res.status(201).json({gig})

// })

// const getGig = asyncWrapper( async (req,res,next)=>{

//         const {id:gigID} = req.params
//         const gig = await Creategig.findOne({_id:gigID});
//         if(!gig){
//             return next(createCustomnError(`no gig with this id:${gigID}`,404))
//         }

//         res.status(200).json({gig})
// })

// const updateGig =asyncWrapper( async(req,res)=>{

//         const {id:gigID} = req.params;
//         const updategig = await Creategig.findOneAndUpdate({_id:gigID},req.body,{
//             new:true,
//             runValidators:true,
//         })
//         if(!updategig){
//             return next(createCustomnError(`no gig with this id:${gigID}`,404))
//         }
//         res.status(200).json({updategig})

// })

// const deleteGig =asyncWrapper( async (req,res)=>{
//         const {id:gigID} = req.params;
//         const gigdelete = await Creategig.findOneAndDelete({_id:gigID});
//         if(!gigdelete){
//             return next(createCustomnError(`no gig with this id:${gigID}`,404))
//         }
//         res.status(200).json({gigdelete})

// })

// module.exports = {
//     getAllGig,
//     createGig,
//     updateGig,
//     deleteGig,
//     getGig
// }
