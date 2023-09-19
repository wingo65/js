// JavaScript Document
var person = 
{
    fname: '',
    lname: '',
    email: '',
    confirm: '',
    phone: '',
}

var x = document.querySelector("#confirmation")
var w = document.querySelector("#form")
var info = document.querySelector("#info")

var firstFirst = document.querySelector("#first-name") 
var lastLast = document.querySelector("#last-name")
var emailEmail = document.querySelector("#email") 
var confirmConfirm = document.querySelector("#confirm-email")
var phonePhone = document.querySelector("#phone")
var confirmation = document.querySelector("#confirmation")
console.log(firstFirst)
console.log(lastLast)

const button = document.querySelector("#confirm");



button.addEventListener('click', function(e){
    let personFirst = /^[A-Za-z][A-Z\-a-z]{1,}$/
    let conEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let phoneNum = /^\d{10}$/;
    if(personFirst.test(firstFirst.value) === false)
    {
        firstFirst.nextElementSibling.innerHTML = "Please input name/Name must not contain special characters";
        firstFirst.classList.toggle("#red")
    }
    if(personFirst.test(lastLast.value) === false)
    {
        lastLast.nextElementSibling.innerHTML = "Please enter last name";
        lastLast.classList.toggle("#red")
    }
    if(conEmail.test(emailEmail.value) === false)
    {
        emailEmail.nextElementSibling.innerHTML = "Email is not valid!";
        emailEmail.classList.toggle("#red")
    }
    if(emailEmail.value != confirmConfirm.value) 
    {
        confirmConfirm.nextElementSibling.innerHTML = "Emails do not match!";
        confirmConfirm.classList.toggle("#red")
    }
   
    if(phoneNum.test(phonePhone.value) === false)
    {
        phonePhone.nextElementSibling.innerHTML = "Please enter a 10 digit number (including area code)";
        phonePhone.classList.toggle("#red")
    }
    else
    {
        x.style.display = "block";
        w.style.display = "none";
        info.innerHTML = firstFirst.value+ "<br>" + lastLast.value + "<br>" + emailEmail.value + "<br>" + phonePhone.value;
    }
   


    
   
 })