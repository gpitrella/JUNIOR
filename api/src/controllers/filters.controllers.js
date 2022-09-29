import Project from "../models/Project.js"

export const filterByTechs = async (req,res)=>{
    try {
        const { teches, payment, status, orderby, order } = req.body
        const errors = [];
        if (teches === undefined || teches === null) {
            errors.push({ text: "Please Write a Tech to filter." });
        }
        if (payment === undefined || payment === null) {
            errors.push({ text: "Please Write a payment to filter." });
        }
        if (status === undefined || status === null) {
            errors.push({ text: "Please Write a status to filter." });
        }
        if (order === undefined || order === null) {
            errors.push({ text: "Please Write a order to filter." });
        }
        if (orderby === undefined || orderby === null) {
            errors.push({ text: "Please Write a orderby to filter." });
        }
        if (errors.length > 0) {
            return res.send(errors)
        } else {
            
            
            // // Order
            // let queryParameters = setQueryParameters(order, orderby)
            // console.log('Data que viene de función setQueryParameters', queryParameters)
            // let projectOrdered = await Project.findAndCountAll(queryParameters)
            // console.log('Projectos ordenados:', projectOrdered)

            // Filter by Tech
            const projects = await Project.find({}).sort( { [order]: orderby, "_id": 1 } )
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

            // Filter by Payment
            if(payment !== "All") {
                _setfilter.forEach((project) => {
                    if(project.payment !== payment) _setfilter.delete(project);
                })
            }

            // Filter by Status
            if(status !== "All") {
                _setfilter.forEach((project) => {
                    if(project.status !== status) _setfilter.delete(project);
                })
            }
            const setfilter = Array.from(_setfilter)
            res.status(200).json(setfilter)
        }
    } catch (err) {
        res.status(400).json(err.message)
    }
};