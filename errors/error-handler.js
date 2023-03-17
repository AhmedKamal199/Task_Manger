const { customError } = require('./custorm-error')

const errorHandler = (err, req, res, next)=>{
	if (err instanceOf customError ){
		return res.status(err.statusCode),{msg: err.message}
	}
	return res.status(500).json({msg: "Some thing wrong try again"})
}


module.exports = errorHandler;
