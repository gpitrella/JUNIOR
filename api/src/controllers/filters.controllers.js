import Project from "../models/Project.js"

export const filterByTechs = async (req,res)=>{
    const {teches} = req.body
    console.log(teches)
    const projects = await Project.find({})
    const _setfilter = new Set()
    for(let tech of teches){
        for(let iproject of projects){
            if(iproject.tech.includes(tech)){
                _setfilter.add(iproject)
            }
        }
    }
    const setfilter= Array.from(_setfilter)
    console.log(setfilter)
    res.status(200).json(setfilter)
}