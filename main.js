 var inputs=[];
 function para_1(){
    for (var i=1; i<=6; i++){
        inputs.push(getElementGetId("para1_input_box_"+i).value);
        inputs.join(".")
    }
    document.getElementById("show_para_1").innerHTML= inputs.join(".");
    documnet.getElementById("show_para_1").innerHTML= inputs;
}