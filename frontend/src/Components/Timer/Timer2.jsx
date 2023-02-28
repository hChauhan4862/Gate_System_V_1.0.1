
function TimerWithDate(){
    const time = new Date();
    const h = time.getHours();
    const mint = time.getMinutes();
    const s = time.getSeconds();
    const d = time.getDay();
    const dt = time.getDate();
    const m = time.getMonth();
    const y = time.getFullYear();
    const exch = h >= 12 ? 'pm' : 'am';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let hours = h > 12 ? h - 12 : h;
    hours = hours < 10 ? '0' + hours : hours;
    const minutes = mint < 10 ? '0' + mint : mint;
    const seconds = s < 10 ? '0' + s : s;
    const day = days[d];
    const date = dt < 10 ? '0' + dt : dt;
    const month = months[m];
    const year = y;
    const ampm = exch;
    // console.log(hours, minutes, seconds, day, date, month, year, ampm)
    const hm_ampm = document.getElementById('hm_ampm');
    const day_dom = document.getElementById('day_dom');
    const date_dom = document.getElementById('date_dom');

    hm_ampm.innerHTML = `${hours}:${minutes} <span>${ampm}</span>`;
    day_dom.innerHTML = day
    date_dom.innerHTML = `${date} ${month} ${year}`


};

setInterval(TimerWithDate, 1000);