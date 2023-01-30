function getinfo(){
    cityName = document.getElementById('cityName').value;
    document.getElementById('city_name').innerText = cityName;
}
submitBtn.addEventListener('click', getinfo);

const d = new Date();
const date  = d.getDate();
const daylist = ['Sunday', 'Monday', 'Tueday', 'Wedday', 'Thuday', 'Friday', 'Satday'];
const today = daylist[d.getDay()];
document.getElementById('day').innerHTML = today;

const month = d.getMonth();
const monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const thismonth = monthlist[month];
const todate = `${date} ${thismonth}`
document.getElementById('today_date').innerHTML = todate;