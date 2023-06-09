function reg()
{
    let name_s = document.getElementById("name_sign").value;
    let email_s = document.getElementById("email_sign").value;
    let pass_s = document.getElementById("pass_sign").value;
    let sex_s = document.getElementById("sex_sign").value;
    let date_s = String(document.getElementById("date_sign").value);

    let raw = localStorage.getItem("users");
    let users = raw ? JSON.parse(raw) : [];

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email_s)) {
        alert("ERROR: account with this email already exists");
        return;
      }
      else{
        let newUser = { 
            name: name_s, 
            email: email_s, 
            pass: pass_s,
            sex: sex_s,
            date: date_s
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    
        //for (let i = 0; i < localStorage.length; i++) {
            //let key = localStorage.key(i);
            //let value = localStorage.getItem(key);
            //console.log(`${key}: ${value}`);
          //}

        alert("You've successfully signed up!");
      }
}  

function log()
{
    let email = document.getElementById("email_log").value;
    let pass = document.getElementById("pass_log").value;

    let raw = localStorage.getItem("users");
    let users = JSON.parse(raw);

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email)) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if(users[i].pass === pass){
                    alert("You've successfully logged in!");
                    sessionStorage.setItem('logged', '1');
                    sessionStorage.setItem('name', users[i].name);
                    sessionStorage.setItem('email', users[i].email);
                    sessionStorage.setItem('sex', users[i].sex);
                    sessionStorage.setItem('date', users[i].date);
                }
                else{
                    alert("ERROR: wrong password has been entered");
                    break;
                }
            }
          }
      }
      else{
        alert("ERROR: account with this email isn't exist");
      }
}   

function tmr()
{
  let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendHours = document.querySelector('#hours');
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;
  
    const startTimer = () => {
      tens++;
      if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
      }
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
      }
  
      if (seconds <= 9) {
        appendSeconds.innerHTML = '0' + seconds;
      }
      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }
      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
      }

      if (minutes <= 9) {
        appendMinutes.innerHTML = '0' + minutes;
      }
      if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
      }
      if (minutes > 59) {
        hours++;
        appendHours.innerHTML = '0' + hours;
        minutes = 0;
        appendMinutes.innerHTML = '0' + 0;
      }

      if (hours <= 9) {
        appendHours.innerHTML = '0' + hours;
      }
      if (hours > 9) {
        appendHours.innerHTML = hours;
      }
    };
  
    startBtn.onclick = () => {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
  
    stopBtn.onclick = () => {
      clearInterval(Interval);
    };
  
    resetBtn.onclick = () => {
      clearInterval(Interval);
      tens = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
      appendTens.innerHTML = '00';
      appendSeconds.innerHTML = '00';
      appendMinutes.innerHTML = '00';
      appendHours.innerHTML = '00';
    };
}
