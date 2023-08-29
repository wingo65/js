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
        firstFirst.nextElementSibling.innerHTML = "*";
        firstFirst.classList.toggle("#red")
    }
    if(personFirst.test(lastLast.value) === false)
    {
        lastLast.nextElementSibling.innerHTML = "*";
    }
    if(conEmail.test(emailEmail.value) === false)
    {
        emailEmail.nextElementSibling.innerHTML = "*";
    }
    if(emailEmail.value != confirmConfirm.value) 
    {
        confirmConfirm.nextElementSibling.innerHTML = "*";
    }
   
    if(phoneNum.test(phonePhone.value) === false)
    {
        phonePhone.nextElementSibling.innerHTML = "*";
    }
    else
    {
        x.style.display = "block";
        w.style.display = "none";
        info.innerHTML = firstFirst.value + lastLast.value + emailEmail.value + phonePhone.value;
    }
   


    
   
 })