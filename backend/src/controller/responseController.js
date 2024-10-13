const errorResponse = (res,{statusCode=500,message="Internal Server Error"})=>{

    return res.status(statusCode).json({
        success: false , 
        message:message,

    }) ; 

}

const successResponse = (res,
    {statusCode=200,message='Success',token={},user={}})=>{

    return res.status(statusCode).json({
        success: true , 
        message:message,
        token:token,
        user:user

    }) ; 

}

export default successResponse

//module.exports = {errorResponse,successResponse}