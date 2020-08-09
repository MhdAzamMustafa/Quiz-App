var grade = 0;
function htm1(){
    var ht1_q1_a = document.getElementById("ht1_q1_a");
    if (ht1_q1_a.checked == true){
        grade++;
        document.getElementById("ht1ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("ht1ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + ht1_q1_a.value;
    }
    document.getElementById("ht1_q1_a").disabled = true;
    document.getElementById("ht1_q1_b").disabled = true;
    document.getElementById("ht1_q1_c").disabled = true;
}

function htm2(){
    var ht2_q2_b = document.getElementById("ht2_q2_b");
    if(ht2_q2_b.checked == true){
        grade++;
        document.getElementById("ht2ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("ht2ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + ht2_q2_b.value;
    }
    document.getElementById("ht2_q2_a").disabled = true;
    document.getElementById("ht2_q2_b").disabled = true;
    document.getElementById("ht2_q2_c").disabled = true;
}

function htm3(){
    var ht3_q3_a = document.getElementById("ht3_q3_a");
    if(ht3_q3_a.checked == true){
        grade++;
        document.getElementById("ht3ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("ht3ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + ht3_q3_a.value;
    }
    document.getElementById("ht3_q3_a").disabled = true;
    document.getElementById("ht3_q3_b").disabled = true;
    document.getElementById("ht3_q3_c").disabled = true;  
}

function htm4(){
    var ht4_q4_c = document.getElementById("ht4_q4_c");
    if(ht4_q4_c.checked == true){
        grade++;
        document.getElementById("ht4ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("ht4ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + ht4_q4_c.value;
    }
    document.getElementById("ht4_q4_a").disabled = true;
    document.getElementById("ht4_q4_b").disabled = true;
    document.getElementById("ht4_q4_c").disabled = true; 
}

function css1(){
    var css1_q1_b = document.getElementById("css1_q1_b");
    if(css1_q1_b.checked ==true){
        grade++;
        document.getElementById("css1ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("css1ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + css1_q1_b.value;
    }
    document.getElementById("css1_q1_b").disabled = true;
    document.getElementById("css1_q1_a").disabled = true;
    document.getElementById("css1_q1_c").disabled = true;
}

function css2(){
    var css2_q2_c = document.getElementById("css2_q2_c");
    if(css2_q2_c.checked ==true){
        grade++;
        document.getElementById("css2ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("css2ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + css2_q2_c.value;
    }
    document.getElementById("css2_q2_b").disabled = true;
    document.getElementById("css2_q2_a").disabled = true;
    document.getElementById("css2_q2_c").disabled = true;
}

function css3(){
    var css3_q3_b = document.getElementById("css3_q3_b");
    if(css3_q3_b.checked ==true){
        grade++;
        document.getElementById("css3ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("css3ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + css3_q3_b.value;
    }
    document.getElementById("css3_q3_b").disabled = true;
    document.getElementById("css3_q3_a").disabled = true;
    document.getElementById("css3_q3_c").disabled = true;
}

function css4(){
    var css4_q4_b = document.getElementById("css4_q4_b");
    if(css4_q4_b.checked ==true){
        grade++;
        document.getElementById("css4ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("css4ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + css4_q4_b.value;
    }
    document.getElementById("css4_q4_b").disabled = true;
    document.getElementById("css4_q4_a").disabled = true;
    document.getElementById("css4_q4_c").disabled = true;
}

function js1(){
    var js1_q1_a = document.getElementById("js1_q1_a");
    if(js1_q1_a.checked ==true){
        grade++;
        document.getElementById("js1ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("js1ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + js1_q1_a.value;
    }
    document.getElementById("js1_q1_a").disabled = true;
    document.getElementById("js1_q1_b").disabled = true;
    document.getElementById("js1_q1_c").disabled = true;
}

function js2(){
    var js2_q2_a = document.getElementById("js2_q2_a");
    if(js2_q2_a.checked ==true){
        grade++;
        document.getElementById("js2ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("js2ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + js2_q2_a.value;
    }
    document.getElementById("js2_q2_a").disabled = true;
    document.getElementById("js2_q2_b").disabled = true;
    document.getElementById("js2_q2_c").disabled = true;
}

function js3(){
    var js3_q3_c = document.getElementById("js3_q3_c");
    if(js3_q3_c.checked ==true){
        grade++;
        document.getElementById("js3ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("js3ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + js3_q3_c.value;
    }
    document.getElementById("js3_q3_a").disabled = true;
    document.getElementById("js3_q3_b").disabled = true;
    document.getElementById("js3_q3_c").disabled = true;
}

function js4(){
    var js4_q4_a = document.getElementById("js4_q4_a");
    if(js4_q4_a.checked ==true){
        grade++;
        document.getElementById("js4ans").innerHTML = "<h3>RESULT</h3><b>Correct Answer <br> Score = </b>" + grade;
    }
    else{
        document.getElementById("js4ans").innerHTML = "<b>InCorret Answer <br>  Right answer is: </b>" + js4_q4_a.value;
    }
    document.getElementById("js4_q4_a").disabled = true;
    document.getElementById("js4_q4_b").disabled = true;
    document.getElementById("js4_q4_c").disabled = true;
}


































