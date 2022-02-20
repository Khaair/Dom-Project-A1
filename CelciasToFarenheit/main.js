function convert(){
    var cel = document.getElementById('data').value;
    const factor = 9/5
    var far = (cel * factor) + 32
    document.getElementById('res').innerText= far + " far";

   

}