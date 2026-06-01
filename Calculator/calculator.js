/*
let inputvalue = '';
function inputVal(x){
    if(x!= "C" && x!="="){
        inputvalue += x;
    }
    document.querySelector('#display').value = inputvalue;
    if(x== "="){
        document.querySelector("#display").value = inputvalue+`=`+eval(inputvalue);
        inputvalue= eval(inputvalue);
    }
    if(x == "C"){
        inputvalue= "";
       // document.querySelector("#display").value = inputvalue;
    }
    document.querySelector("#display").value = inputvalue; // remove this if dont want to overwrite full expression
    function backspace(){
        inputvalue = inputvalue.slice(0,-1);
        document.querySelector("#display").value = inputvalue;
    }
}
*/
