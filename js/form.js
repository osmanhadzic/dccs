
function loadForm(){
    var v = document.getElementById("form_render");
    if(v.childElementCount===0){
    var b = document.getElementById("btn_save");
    var ifr = document.createElement("iframe");
    ifr.setAttribute("src","http://localhost:3000/test");
    
    var bs = document.createElement("button");
    bs.setAttribute("value","load");
    bs.innerHTML="Load"
    v.appendChild(ifr);
    b.appendChild(bs);
    post();
    }
}

function post(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
    }
  };
  xhttp.open("POST", "http://localhost:3000/admin", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify({"name":"osman"}));
}



