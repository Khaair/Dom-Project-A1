var myArr1 = [];


var myArr2 = [];

function sum(a){
var summ = myArr1.reduce((a, b) => a + b, 0);
var rate = summ/a
document.getElementById('show').innerHTML = summ;
return rate
}


function sum(a){
    var summ = myArr2.reduce((a, b) => a + b, 0);
    var rate = summ/a
    document.getElementById('show2').innerHTML = summ;
    return rate
    }


function total(){
    let vv = sum(4)
    console.log(vv)
    document.getElementById('totall').innerHTML = vv
}



function  Calculation1(){
    
       var inputText = document.getElementById('data').value;

       let num = parseFloat(inputText)
       
       myArr1.push(num);
       
       var pval = "";
       
       for(i = 0; i < myArr1.length; i++)
       {
           pval = pval + myArr1[i]
       }
       
     
       document.getElementById('res').innerHTML = myArr1;

   

}




function  Calculation2(){
    
    var inputText = document.getElementById('data2').value;

    let num = parseFloat(inputText)
    
    myArr2.push(num);
    
    var pval = "";
    
    for(i = 0; i < myArr2.length; i++)
    {
        pval = pval + myArr2[i]
    }
    
  
    document.getElementById('res2').innerHTML = myArr2;



}