const form= document.getElementById("form")
const username= document.getElementById("username")
const email= document.getElementById("email")
const password= document.getElementById("password")
const password2= document.getElementById("password2")

//show input error mesage
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small= formControl.querySelector('small')
    small.innerText= message
 }
 //shows succes outline
 function showSuccess(input){
    const formControl= input.parentElement;
    formControl.className= 'form-control success'
 }

 //check email is valid
 const checkEmail = input => {
    const re= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if  (re.test(input)){
        showSuccess(input)

    } else {
        showError(input, 'Email is not valid')
    }
}
//che requiered fiels
const checkRequiered = inputArray => {
    inputArray.forEach(input => {
       
        if (input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}
// check input length
function checkLength (input , min, max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    }else if (input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }


}

//get field name
const getFieldName= input => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
//che password match
function checkPasswordMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2 , 'Paswords do not match')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    checkRequiered([username,email,password,password2])
    checkLength(username,3,15)
    checkLength(password,6,25)
    checkEmail(email)
    checkPasswordMatch(password, password2)

})