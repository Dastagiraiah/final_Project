const isEmail = (email) =>{
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
    if(email.match(regEx)) return true;
    else return false;
}
const isEmpty =(string) =>{
if(string.trim() === '') return true;
else return false;
}

exports.validateSignupData = (data) => {
    let errors={};
    if(isEmpty(data.email)){
        errors.email= "Must not empty";
    }
    else if(!isEmail(data.email)){
        errors.email = "Must be valid email adress"
    }
    if(isEmpty(data.password)) errors.password = "Must not  empty";
    if(data.password !== data.confirmPassword) errors.confirmPassword = "Password must match";
    if(isEmpty(data.handle)) errors.handle = "Must not  empty";
    return{
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
        
    }
}
exports.validateLoginData = (data) =>{
    let errors = {};
    if(isEmpty(data.email)) errors.email = "Must not  empty";
    if(isEmpty(data.password)) errors.password = "Must not  empty";
    return{
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
        
    }

}