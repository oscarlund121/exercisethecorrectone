function updateColorProperties(event) {
  const lightness = (event.clientX / window.innerWidth) * 100;
  const saturation = (event.clientY / window.innerHeight) * 100;
  document.body.style.setProperty('--lightness', `${lightness}%`);
  document.body.style.setProperty('--saturation', `${saturation}%`);
}

document.addEventListener('mousemove', updateColorProperties);




