import validator from 'validator'

// Validate Form values 

export const ValidateForm = (data) => {

    const {name,email,gender,dob,country} = data

    if(!name || !gender || !country || !email || !dob){
        alert("All Fields are required")
        return
    }

    if(name && /\d/.test(name)){
        alert("name should be a character")
        return;
    }

    if(email && !validator.isEmail(email)){
        alert("Invalid email")
        return
    }

 
    return true
}

// Validate Login form values 

export const loginValidation = (username , password) => {

    if(!username || !password){

        alert("All fields are required")
        return
    }

    if(username && !validator.isEmail(username)){
        alert("Invalid email")
        return
    } 

    if(password.length < 6){
        alert("password must have atleast 6 characters")
        return
    }

    if(password.search(/[0-9]/) < 0){
        alert("password must have atleast one number")
        return
    }

    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password)) {
        alert("Password must contain at least one Special Symbol.")
        return
    }
    
    return true
}