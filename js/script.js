function date_time() {
    now = moment().format('dddd Do MMMM YYYY h:mm:ss a');
    document.getElementById('time-display').innerHTML = now;
    setTimeout(function () { date_time(); }, 
    
    1000);
  }

  date_time();