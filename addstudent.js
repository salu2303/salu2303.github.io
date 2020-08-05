function alertbox(){
    console.log(document.getElementById("name").value );
    if((document.getElementById("name").value)!=""  &&  (document.getElementById("pass").value)!="" &&(document.getElementById("dept").value)!="" &&(document.getElementById("sem").value)!="" && (document.getElementById("dept").value)!="sbranch" && (document.getElementById("sem").value)!="seme") 
    {
        alert("Added Successfully");
        document.getElementById("name").value="";
        document.getElementById("pass").value="";
        
    }
    else{
        alert("Please Enter All Credentials");
    }
   

}
function alertrem(){
    if((document.getElementById("name").value)!=""  &&  (document.getElementById("pass").value)!="" ) 
    {
        alert("Removed Successfully");
        document.getElementById("name").value="";
        document.getElementById("pass").value="";

    }
    else{
        alert("Please Enter All Credentials");
  
        
    }
   
}