export const validateName=(name)=>{
   let validator={error:false, msg:''}

  
    if(!name){
        validator.error=true
        validator.msg='Name cannot be empty'
    }
    if(!name.match(/^[a-zA-Z\s]*$/)){
        validator.error=true
        validator.msg = 'Name must contain just letters'
    }

    return validator
}

export const validateMemberNumber =(number)=>{
    let validator={error:false, msg:''}

    if(!number){
        validator.error=true
        validator.msg='Enter a member number if the name is empty'
    }
    if(!number.match(/^[a-zA-Z\s\d]*$/)){
        validator.error=true
        validator.msg='Must be just numbers or letters'
    }
    return validator
}