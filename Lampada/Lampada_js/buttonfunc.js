let isOn = false;

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('light');
  const btn = document.getElementById('switch');
  const body = document.body;

  btn.addEventListener('click', () => {
    if (isOn) {
      img.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
      btn.innerText = "Acender";
      body.style.backgroundColor = "#000000";
    } else {
      img.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
      btn.innerText = "Apagar";
      body.style.backgroundColor = "#f1f17e";
    }

    isOn = !isOn;
  });
});
