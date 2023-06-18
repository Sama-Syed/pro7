var a=Math.ceil(Math.random()*100);
var count=0;
var t;
check=()=>{
    
    var b=parseInt(document.getElementById("num").value);
    
    if(a>b)
    {
    document.getElementById("res").textContent="Too Small..Try it With a Large Number!!";
    count++;
    }
    else if(a<b)
    {
    document.getElementById("res").textContent="Too High..Try it With a Small Number!!";
    count++;
    }
    else
    {
       
    document.getElementById("res").textContent="Congrats!! You have got the Number in "+count+" Tries";
   
    }

}