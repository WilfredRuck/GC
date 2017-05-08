function funnyStuff() {
    alert("A joke is inbound!");
    var joke = prompt("Why did the chicken cross the road?", "");
    
    if (joke != null) {
        
        if (joke == "because he died") {
            alert(joke + ", is the answer! HOORAY!")
        }
        
        else {
            alert(joke + ", is not the answer!");
        }
    }
}

function notFunny() {
    
}
