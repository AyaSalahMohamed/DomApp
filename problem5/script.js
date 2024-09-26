

function rotateme(){
    let input=document.getElementById("rotate")
    // console.log(input.value);
    
    let rote= document.getElementById("rote")
    let rot= "rotate("+input.value+"deg)"
    // console.log(rot);
    
    rote.style.transform = rot


    
}


