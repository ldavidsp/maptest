'use strict';

(() => {
  let map = document.getElementById('maps-image');
  let offset = [0, 0];
  let draggable = false;

  /*
   * Zoom Map
   */
  document.getElementById('btn-zoomIn').addEventListener('click', () => {
    map.classList.add('zoomIn');
    map.style.width = (parseInt(map.width) + 150) + 'px';
    setTimeout(() => {
      map.classList.remove('zoomIn');
    }, 500);
  });

  document.getElementById('btn-zoomOut').addEventListener('click', () => {
    map.classList.add('zoomOut');
    map.style.width = (parseInt(map.width) - 150) + 'px';
    setTimeout(() => {
      map.classList.remove('zoomOut');
    }, 500);
  });

  /*
   *  Move Map
   */
  map.addEventListener('mousedown', (e) => {
    draggable = true;
    map.classList.add('map-move');
    offset = [
      map.offsetLeft - e.clientX,
      map.offsetTop - e.clientY
    ];
  }, true);

  document.addEventListener('mouseup', () => {
    draggable = false;
    map.classList.remove('map-move');
  }, true);

  document.addEventListener('mousemove', (e) => {
    event.preventDefault();
    if (draggable) {
      map.style.left = (e.clientX + offset[0]) + 'px';
      map.style.top = (e.clientY + offset[1]) + 'px';
      map.style.position = 'absolute';
    }
  }, true);


  /*
   * Touch Event Mobile
   */
  map.addEventListener('touchstart', (e) => {
    draggable = true;
    offset = [
      map.offsetLeft - e.touches[0].clientX,
      map.offsetTop - e.touches[0].clientY
    ];
  });

  map.addEventListener('touchend', () => {
    draggable = false;
  });

  map.addEventListener('touchmove', (e) => {
    event.preventDefault();
    if (draggable) {
      map.style.left = (e.touches[0].clientX + offset[0]) + 'px';
      map.style.top = (e.touches[0].clientY + offset[1]) + 'px';
      map.style.position = 'absolute';
    }
  });

})();

