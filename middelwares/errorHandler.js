import { CustomError } from "../errors/custom-error"

const erroHandler = (err, req, res, next) => {
   if (err instanceof CustomError) {
      return res.status(err.status).json({
         message: err.message, 
         status: err.status,   
     });
   }
   else {
      return res.status(500).json({
         message: "Server ERROR", 
         status: 500,           
     });
   }
}