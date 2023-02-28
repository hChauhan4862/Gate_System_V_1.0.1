
const TimerWithDate = () => {
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

    return { hours, minutes, seconds, day, date, month, year, ampm };
};

export default TimerWithDate;