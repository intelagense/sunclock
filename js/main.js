/* 

6

330 noon degrees is noon antartica
every 15 degrees is an hour

calculate rotation from utc
    get utc
rotate map

display local time

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
*/
var timeControl 
var undefined
let rotateDeg

function showTime(){
    var date = new Date();
    var u = date.getUTCHours(); 

    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
   //  document.getElementById("timeNow").innerText = time;
   //  document.getElementById("timeNow").textContent = time;
    if (document.querySelector('input[type="number"]').value){
        
        const adjust = document.querySelector('input[type="number"]').value; 
        
        rotateDeg = (Number(u) + Number(adjust)) * 15 + 180 - 30; 
        document.querySelector("#clockFace").style.transform = 'rotate(' + rotateDeg + 'deg)';


    } else {
        rotateDeg = u * 15 + 180 - 30; 
        document.querySelector("#clockFace").style.transform = 'rotate(' + rotateDeg + 'deg)';
    }
 
    
    
    setTimeout(showTime, 1000);
    
}


showTime();





// var baseDate =  Date.UTC(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

// console.log(Date.getUTCHours());

// setInterval(
//     () => document.querySelector('#current').innerText = new Date().toLocaleTimeString(),
//     1000

// );



//   document.querySelector('#placeToSee').innerText = "Weekend"

// transform: rotate(60deg);