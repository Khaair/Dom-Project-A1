var myArr = [];


function sum(a){
var summ = myArr.reduce((a, b) => a + b, 0);
var rate = summ/a
document.getElementById('show').innerHTML = summ;
return rate
}


function total(){
    let vv = sum(4)
    console.log(vv)
    document.getElementById('totall').innerHTML = vv
}



function  Calculation(){
    
       var inputText = document.getElementById('data').value;

       let num = parseFloat(inputText)
       
       myArr.push(num);
       
       var pval = "";
       
       for(i = 0; i < myArr.length; i++)
       {
           pval = pval + myArr[i]
       }
       
     
       document.getElementById('res').innerHTML = myArr;

   

}