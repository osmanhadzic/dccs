
var getBtn = document.getElementById("getJSON");

var json;

const sentHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) =>{
    const req = new XMLHttpRequest();
    req.open(method,url);

    req.responseText = "json"

    req.onload = () => {
    if(req.status===200){
        resolve(req.response);
    }else{
        resolve("Error");    
    }
};

    req.send();

    });
    return promise;
};

const getData = () =>{
    sentHttpRequest("GET", "http://localhost:3000/form").then(responseData =>{

        json = responseData;
        var obj = JSON.parse(json);
        
        console.log(obj);
        for(var i = 0; i < obj.length;i++){
            var select = document.getElementById("seach");
	        select.options[select.options.length] = new Option(obj[i].formName, obj[i].id);
        }
    });
};

const getPost = () =>[
    
]

//when web page reload call function
var up = 120;

getData();

function search(){
    var o = document.getElementById("seach");
    var s = o.options[o.selectedIndex].text;
    if(s === ""){
        generateForm();
    }
    console.log(s);
    
}
// div position top + 10 px, when call add()
var select = document.getElementById("form_view");

function generateForm(){
    var btn = document.getElementById("btn_save");


    //var obj = JSON.parse(json);
    //var seach = document.getElementById("seach");

    if(btn.childNodes.length === 0 && select.childNodes.length===0){
        var btn_create = document.createElement("button");
        btn_create.innerText="Save";
        btn_create.setAttribute("onClick", "save()");
        btn.appendChild(btn_create);
    
    var form = document.createElement("form");
    form.setAttribute('method',"post");
    form.setAttribute('action',"");
    form.style.display="inline";
    form.style.padding="5px";

    var lablex = document.createElement("lable");
    lablex.setAttribute("for",1);
    lablex.setAttribute("id","labe1");
    lablex.innerHTML = "Element 1";
    lablex.style.padding="4px";
    

    var input = document.createElement("input");
    input.setAttribute("value", "Labe");
    input.setAttribute("type", "text");
    input.setAttribute("id","1");
    input.style.padding="4px";

    form.appendChild(input);
    form.insertBefore(lablex,input);

    var list = document.createElement("select");
    list.setAttribute("id", "list");

    var optionx = document.createElement("OPTION");
    optionx.setAttribute("value", "text");
    var optxt= document.createTextNode("TextBox");
    optionx.appendChild(optxt);

    list.appendChild(optionx);

    var optionx = document.createElement("OPTION");
    optionx.setAttribute("value", "checbox");
    var optxt= document.createTextNode("Checkbox");
    optionx.appendChild(optxt);

    list.appendChild(optionx);

    var optionx = document.createElement("OPTION");
    optionx.setAttribute("value", "radio");
    var optxt= document.createTextNode("Radio buttons");
    optionx.appendChild(optxt);

    list.appendChild(optionx);

    list.style.padding="4px";

    form.appendChild(list);


    var lis = document.createElement("select");
    lis.setAttribute("id", "lis");

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "*");
    var optxt= document.createTextNode("Mondatory");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "none");
    var optxt= document.createTextNode("None");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "numeric");
    var optxt= document.createTextNode("Numeric");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    lis.style.padding="4px";

    form.appendChild(lis);

    var btn1 = document.createElement("button");
    btn1.innerHTML = "+";
    btn1.style.padding="4px";

    select.appendChild(form);
    select.appendChild(btn1);
}
    //console.log(list.options[selectedIndex].value);
    //var option = search.options[search.selectedIndex].value;  
    //onsole.log(obj[option].typeFild);
    select.style.top=up +"px";

    btn1.setAttribute("onClick","add()");
}

var i = 1;
var j = 10;


function add(){

    var idf = document.getElementById("txt_search");

    var list = document.getElementById("list");
    var li = createSelect(list.options[list.selectedIndex].value);


    var lis = document.getElementById("lis");
    var va = createValidation(lis.options[list.selectedIndex].value);
        
    var d = document.createElement("div");    

    var se = document.getElementById("new_elm");

    
    var l = document.createElement("lable");
    l.setAttribute("id",i);
    l.setAttribute("for", j);
    l.innerHTML="Element " + i;

    var inp = document.createElement("input");
    inp.setAttribute("value", "Labe " + i);
    inp.setAttribute("type", "text");
    inp.setAttribute("id",j);
    
   

    
    d.appendChild(inp);
    d.insertBefore(l,inp);
    d.appendChild(li);
    d.appendChild(va);

    se.appendChild(d);

    ++i;
    ++j;
    select.style.top=up+"px";
    up = up + 27;
   
}

function createSelect(e){
    
    if(e === "text"){

    var li = document.createElement("select");
    li.setAttribute("id", "list");

    var optionx = document.createElement("OPTION");
    optionx.setAttribute("value", "text");
    var optxt= document.createTextNode("TextBox");
    optionx.appendChild(optxt);

    li.appendChild(optionx);

    var optionx = document.createElement("OPTION");
    optionx.setAttribute("value", "checbox");
    var optxt= document.createTextNode("Checkbox");
    optionx.appendChild(optxt);

    li.appendChild(optionx);

    var optionx = document.createElement("OPTION");
    optionx.setAttribute("value", "radio");
    var optxt= document.createTextNode("Radio buttons");
    optionx.appendChild(optxt);

    li.appendChild(optionx);
    return li;
    }else if(e === "checbox"){
        var li = document.createElement("select");
        li.setAttribute("id", "list");

        var optionx = document.createElement("OPTION");
        optionx.setAttribute("value", "checbox");
        var optxt= document.createTextNode("Checkbox");
        optionx.appendChild(optxt);
    
        li.appendChild(optionx);
    
        var optionx = document.createElement("OPTION");
        optionx.setAttribute("value", "text");
        var optxt= document.createTextNode("TextBox");
        optionx.appendChild(optxt);
    
        li.appendChild(optionx);
    
        
    
        var optionx = document.createElement("OPTION");
        optionx.setAttribute("value", "radio");
        var optxt= document.createTextNode("Radio buttons");
        optionx.appendChild(optxt);
    
        li.appendChild(optionx);
        return li;

    }else{
        var li = document.createElement("select");
        li.setAttribute("id", "list");

        var optionx = document.createElement("OPTION");
        optionx.setAttribute("value", "radio");
        var optxt= document.createTextNode("Radio buttons");
        optionx.appendChild(optxt);
    
        li.appendChild(optionx);

        var optionx = document.createElement("OPTION");
        optionx.setAttribute("value", "checbox");
        var optxt= document.createTextNode("Checkbox");
        optionx.appendChild(optxt);
    
        li.appendChild(optionx);
    
        var optionx = document.createElement("OPTION");
        optionx.setAttribute("value", "text");
        var optxt= document.createTextNode("TextBox");
        optionx.appendChild(optxt);
    
        li.appendChild(optionx);
    
    
        return li;

    }

}

function createValidation(v){
    if(v === "*"){
    var lis = document.createElement("select");
    lis.setAttribute("id", "lis");

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "*");
    var optxt= document.createTextNode("Mondatory");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "none");
    var optxt= document.createTextNode("None");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "numeric");
    var optxt= document.createTextNode("Numeric");
    optiony.appendChild(optxt);
    return lis;
    }else if(v ==="none"){
        var lis = document.createElement("select");
    lis.setAttribute("id", "lis");

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "none");
    var optxt= document.createTextNode("None");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "*");
    var optxt= document.createTextNode("Mondatory");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);


    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "numeric");
    var optxt= document.createTextNode("Numeric");
    optiony.appendChild(optxt);
    return lis;

    }else{
        var lis = document.createElement("select");
    lis.setAttribute("id", "lis");

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "numeric");
    var optxt= document.createTextNode("Numeric");
    optiony.appendChild(optxt);

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "*");
    var optxt= document.createTextNode("Mondatory");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    var optiony = document.createElement("OPTION");
    optiony.setAttribute("value", "none");
    var optxt= document.createTextNode("None");
    optiony.appendChild(optxt);

    lis.appendChild(optiony);

    
    return lis;
    }

    
}

function save(){
    var div = document.getElementById("new_elm");
    var fo = document.createElement("form");
    fo.setAttribute('method',"post");
    fo.setAttribute('action',"");
    fo.setAttribute('id','admin')
    fo.appendChild(div);
    
    var json = mapDOM(fo, true);
    console.log(json);

   
}


function mapDOM(element, json) {
    var treeObject = {};

    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
              parser = new DOMParser();
              docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
        } 
        element = docNode.firstChild;
    }

    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }
    treeHTML(element, treeObject);

    return (json) ? JSON.stringify(treeObject) : treeObject;
}

   

