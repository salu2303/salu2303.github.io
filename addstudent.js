function alertbox(){
    console.log(document.getElementById("name").value );
    if((document.getElementById("name").value)!=""  &&  (document.getElementById("pass").value)!="" &&(document.getElementById("dept").value)!="" &&(document.getElementById("sem").value)!="" && (document.getElementById("dept").value)!="sbranch" && (document.getElementById("sem").value)!="seme") 
    {
        
        
        
        confirm("After pressing ok"+" "+document.getElementById("name").value+" "+"will be added");
        document.getElementById("name").value="";
        document.getElementById("pass").value="";
        alert("Added Successfully");
        
        
    }
    else{
        alert("Please Enter All Credentials");
    }
    document.getElementById("fd").innerHTML="Details will be shown here.."; 

   

}
function alertrem(){
    if((document.getElementById("name").value)!=""  &&  (document.getElementById("pass").value)!="" ) 
    {
        confirm("After pressing ok"+" "+document.getElementById("name").value+" "+"will be removed");
       
        alert("Removed Successfully");
        document.getElementById("name").value="";
        document.getElementById("pass").value="";

    }
    else{
        alert("Please Enter All Credentials");
  
        
    }
   
}
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    function display_ct() {
    var x = new Date()
    //var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getYear(); 
    x1 =    x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    document.getElementById('ct').innerHTML = x1;
    display_c();
    }