function clock(){
    var today = new Date();
    var daytoday = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';
    
    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('time').innerHTML = day;

    switch(daytoday)
    {
       case 0 : document.getElementById("sun").style.color="fff"; break;
       case 1 : document.getElementById("mon").style.color="fff"; break;
       case 2 : document.getElementById("tue").style.color="fff"; break;
       case 3 : document.getElementById("wed").style.color="fff"; break;
       case 4 : document.getElementById("thu").style.color="fff"; break;
       case 5 : document.getElementById("fri").style.color="fff"; break;
       case 6 : document.getElementById("sat").style.color="fff";
    }
}
var inter = setInterval(clock,400);
