// JavaScript Document
var person = {
    fname: '',
    lname: '',
    email: '',
    confirm: '',
    phone: '',
   }
 
var firstFirst = document.querySelector("#first-name") 
var lastLast = document.querySelector("#last-name")
var emailEmail = document.querySelector("#email") 
var confirmConfirm = document.querySelector("#confirm-email")
var phonePhone = document.querySelector("#phone")
console.log(firstFirst)
console.log(lastLast)

const button = document.querySelector("#confirm");



button.addEventListener('click', function(e){
    let personFirst = /[A-Za-z]-[A-Z\-a-z]{1,}$/
    if(personFirst.test(firstFirst.value) == false)
    {
        firstFirst.nextElementSibling.innerHTML = "Invalid First Name"
    }
    if(personFirst.test(lastLast.value) == false)
    {
        lastLast.nextElementSibling.innerHTML = "Invalid Last Name"
    }
    let conEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(conEmail.test(emailEmail) == false)
    {
        emailEmail.nextElementSibling.innerHTML = "Invalid Email"
    }
    if(conEmail.test(emailEmail) == false)
    {
        emailEmail.nextElementSibling.innerHTML = "Invalid Email"
    }
    if(conEmail.test(confirmConfirm) == false)
    {
        confirmConfirm.nextElementSibling.innerHTML = "Emails do not match!"
    }
    let phoneNum = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    if(phoneNum.test(phonePhone) == false)
    {
        phonePhone.nextElementSibling.innerHTML = "Invalid Phone Number!"
    }


    
   
 })