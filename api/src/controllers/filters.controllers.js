import Project from "../models/Project.js"

export const filterByTechs = async (req,res)=>{
    const { teches, payment } = req.body
    const projects = await Project.find({})
    const _setfilter = new Set()
    if(teches[0] !== "All") {
        for(let tech of teches){
            for(let iproject of projects){
                if(iproject.tech.includes(tech.toLowerCase())){
                    _setfilter.add(iproject)
                }
            }
        }
    } else {
        for(let iproject of projects){           
            _setfilter.add(iproject);
        }
    }
    if(payment !== undefined) {
        _setfilter.forEach((project) => {
            if(project.payment !== payment) _setfilter.delete(project);
        })
    }
    const setfilter= Array.from(_setfilter)
    res.status(200).json(setfilter)
}