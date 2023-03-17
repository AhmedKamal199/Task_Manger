const { customError } = require('./custorm-error')

const errorHandler = (err, req, res, next)=>{
	if (err instanceof customError ){
		return res.status(err.statusCode).json({msg: err.message})
	}
	return res.status(500).json({msg: "Some thing wrong try again"})
} 


module.exports = errorHandler;
