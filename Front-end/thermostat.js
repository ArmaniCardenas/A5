const popup = document.getElementById('expand')

const value = document.getElementById('value')

const progress = document.querySelector('.circle')

const radius = 80;


const circumference  = 2 * Math.PI * radius;

let current = 20; 

const min = 10;
const max = 30;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;
setProgress(current);


function showPopup() 
{
    popup.classList.add('show')
}


function hidePopup()
{
    popup.classList.remove('show')
}


function setProgress(temp)
{
    const percent = (temp - min) / (max - min);
    const offset = circumference - percent * circumference;
    circle.style.strokeDashoffset = offset;
}


function adjust(change)
{
    current = Math.max(min, Math.min(max, current + change));
    updtateUI();
}

function updtateUI() {
    value.textContent = current;
    setProgress(current);
}


const thermostat = document.querySelector('.thermostat');
thermostat.addEventListener('mousedown', startDrag);
thermostat.addEventListener('touchstart', startDrag);


function startDrag(e) {
    e.preventDefault();
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchmove', onDrag);
    document.addEventListener('touchend', endDrag);
}


function onDrag(e) {
    const rect = thermostat.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left - rect.width / 2;
    const y = (e.clientY || e.touches[0].clientY) - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    const normalizedAngle = angle < 0 ? 360 + angle : angle;
    const temp =
      minTemperature +
      (normalizedAngle / 360) * (maxTemperature - minTemperature);
    currentTemperature = Math.round(temp);
    updateUI();
  }
  
  function endDrag() {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('touchend', endDrag);
  }
