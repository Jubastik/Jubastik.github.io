document.getElementById('day').onclick = function(){
  document.body.classList.remove('dark');
  document.getElementById('day').classList.add('active');
  document.getElementById('night').classList.remove('active');
}

document.getElementById('night').onclick = function(){
  document.body.classList.add('dark');
  document.getElementById('day').classList.remove('active');
  document.getElementById('night').classList.add('active');
}

document.getElementById('menu').onclick = function(){
  document.getElementById('nav').classList.toggle('active');
  document.getElementById('content').classList.toggle('active');
  if (document.getElementById('nav').classList.contains('active')) {
    document.getElementById('img_menu').src = 'close.png';
  } else {
    document.getElementById('img_menu').src = 'menu.png';
  }
}