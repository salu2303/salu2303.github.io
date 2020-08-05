function display(){
    if((document.getElementById("name").value)!=""  &&  (document.getElementById("pass").value)!="" && (document.getElementById("hod").value)!="" && (document.getElementById("hod").value)!="sbranch") 
    {
        location.replace("ahome.html");
    }
    else{
        alert("Please enter all credentials..");
        
    }
    
}