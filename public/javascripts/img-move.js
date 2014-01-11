var foo = null; // object

function moveRight() {
  foo.style.left = parseInt(foo.style.left)+1+'px';
  setTimeout(moveRight,20); // call doMove in 20msec
}

function moveLeft() {
  foo.style.left = parseInt(foo.style.left)-1+'px';
  setTimeout(moveLeft, 20);
}

function init() {
  foo = document.getElementById('foo'); // get the "foo" object
  foo.style.left = '0px'; // set its initial position to 0px
  moveRight();
  setTimeout(moveLeft, 1000);
}


window.onload = init;
