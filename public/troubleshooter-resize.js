window.addEventListener('message', function(e) {
  if (!e.data || e.data.type !== 'resize') return;
  var frame = document.getElementById('troubleshooter');
  if (frame) frame.style.height = e.data.height + 'px';
});