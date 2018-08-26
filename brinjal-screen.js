(function r() {
  setTimeout(r, Math.random() * 10);
  let el = document.createElement(`div`);
  el.innerHTML = `🍆`;
  el.style.position = `absolute`;
  el.style.zIndex = 999999;
  el.style.fontSize = (((Math.random() * 48) | 0) + 16) + `px`;
  el.style.left = ((Math.random() * innerWidth) | 0) + `px`;
  el.style.top = ((Math.random() * (innerHeight + pageYOffset)) | 0) + `px`;
  document.body.appendChild(el);
})();


// More with rotation

(function r() {
  setTimeout(r, Math.random() * 10);
  let el = document.createElement(`div`);
  el.innerHTML = `🍆`;
  el.style.position = `absolute`;
  el.style.zIndex = 999999;
  el.style.transform = `rotate(${Math.random() * 360}deg)`;
  el.style.opacity = 0.3 + Math.random();
  el.style.fontSize = (((Math.random() * 48) | 0) + 16) + `px`;
  el.style.left = ((Math.random() * innerWidth) | 0) + `px`;
  el.style.top = ((Math.random() * (innerHeight + pageYOffset)) | 0) + `px`;
  document.body.appendChild(el);
})();
