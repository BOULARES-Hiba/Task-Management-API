
export const get_tasks = (req, res) => {
   console.log("get")
   
}

export const set_tasks = (req , res ) => {
console.log(req.body)
}

export const get_task = (req , res ) => {
   console.log(req.params.id)
}

export const  change_task = (req , res ) => {
   console.log("change task")
}

export const  delete_task = (req , res ) => {
   console.log("delete task")
}