/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
function  myfunction() {
    var element = document.getElementById("sides");
    element.classList.toggle("hidden");
}

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
var userIP = document.querySelectorAll(".fill");
console.log(userIP)


    for (let i=0; i<pad.length; i++)
    {
        userIP[i].value = player[i].fill;
        console.log(userIP)
        userIP[i].nextSibling.innerHTML = player[i].fill; 
        userIP[i].addEventListener("input", playerFill)
        function playerFill(e) {
            console.log(e.target.value)
            player[i].fill = e.target.value
            player[i].pad.fill = e.target.value
            userIP[i].nextSibling.innerHTML = player[i].fill; 
        }
        

    }


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
var input = document.querySelectorAll(`input`);
for (let i=0; i<input.length; i++){
    input[i].addEventListener(`focus`, function(e){currentState = `pause`})
}




var userU = document.querySelectorAll(".u");
console.log(userU)
for (let i=0; i<pad.length; i++)
{
    userU[i] = player[i].keys.u
    console.log(userU)
    userU[i].addEventListener(`keydown`, function(e){

        userU[i].value = [e.key]
        player[i].keys.u = userU[i].value
        userU[i].nextSibling.innerHTML = player[i].keys.u
     })
    
   
        

}


