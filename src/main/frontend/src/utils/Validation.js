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

export const validateEmail = (email)=>{
    let validator={error:false, msg:''}
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        validator.error=true
        validator.msg='Must be an valid e-mail'
    }
    return validator
}

export const validateAddress =(address)=>{
    let validator={error:false, msg:''}

    if(!address.match(/^[a-zA-Z\s\d]*$/)){
        validator.error=true
        validator.msg='Must be just numbers or letters'
    }
    return validator
}

export const validateBirthday = (bday)=>{
    let validator={error:false, msg:''}
    if(!bday){
        validator.error=true
        validator.msg='birthday cannot be empty'
    }
    return validator
}

export const validateZipCode =(zipCode)=>{
    let validator={error:false, msg:''}

    if(!zipCode.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)){
        validator.error=true
        validator.msg='Enter a valid zip code'
    }
    return validator
}

export const validateCity=(city)=>{
    let validator={error:false, msg:''}
 
     if(!city.match(/^[a-zA-Z\s]*$/)){
         validator.error=true
         validator.msg = 'City name must contain just letters'
     }
 
     return validator
 }


