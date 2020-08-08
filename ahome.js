function addelement()
{
    var li=document.createElement("li");
    var inputvalue=document.getElementById("myinput").value;
    var t=document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue===''){
        alert("Please add something");
    }
    else{
        document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("myinput").value="";
    }
