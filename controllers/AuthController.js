const signup = (request , response ,nex)=>{
    response.json({
        status:true,
        message:'logged in success'
    });
};

module.exports = {signup}