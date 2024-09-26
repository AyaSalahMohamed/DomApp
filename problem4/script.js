
function appeartext(){
    let btn = document.getElementById("show")
    let h1 = document.getElementById("h1")
    console.log(btn.innerHTML);
    
    if(btn.innerHTML==="show"){
        btn.innerHTML="hide"
        h1.style.display="block"
        
        
    }  
    else{
        btn.innerHTML="show"
        h1.style.display="none"

    }  
}








