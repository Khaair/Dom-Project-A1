function convert(){
    var miles = document.getElementById('data').value;
    const factor = 1.6;
    var km = miles * factor;
    document.getElementById('res').innerText= km + " km";

}