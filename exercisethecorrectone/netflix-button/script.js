document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('animatedButton');
  let mouseMoved = false;

  function startAnimation() {
    button.classList.add('animate');
    button.classList.remove('none');
  }

  function endAnimation() {
    if (mouseMoved === false) {
      document.body.style.backgroundColor = "#ff0000";
      button.classList.add('none');
    } else {
      button.classList.remove('none');
    }
  }

  function buttonClicked() {
    mouseMoved = true;
  }
  if (button === null) {
    return;
  }

  button.addEventListener('click', () => {
    document.body.style.backgroundColor = "#ff0000";
    button.classList.add('none');
  });

  document.addEventListener('mousemove', buttonClicked);
  document.addEventListener('keydown', buttonClicked);

  startAnimation();
  setTimeout(endAnimation, 5000);
});
