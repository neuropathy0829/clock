function updateClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerHTML = timeString;
}
setInterval(updateClock, 1000);

//禁用右鍵
document.addEventListener('contextmenu',function(event){
    event.preventDefault();
 },true);
//禁用F12、Ctrl+Shift+I、Ctrl+Shift+J、Ctrl+U
document.onkeydown = function(e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}
