const url = 'https://kea-alt-del.dk/kata-distortion/';

function fetchData() {
    fetch(url)
        .then(res => res.json())
        .then(data => updateSpeedometer(data.inQueue));
} 

fetchData();
setInterval(fetchData, 10000);

function updateSpeedometer(value) {
    const needle = document.getElementById('needle');
    const display = document.getElementById('display');
    
    // Konverter værdien til en vinkel (f.eks. 0-40 skala → 0° til 180°)
    const angle = (value / 40) * 180; 
    needle.style.transform = `rotate(${angle}deg)`;
    
    // Opdater digitalt display
    display.textContent = value;
}