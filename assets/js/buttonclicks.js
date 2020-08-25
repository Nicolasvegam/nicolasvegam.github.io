function showhide() {
  var div = document.getElementById("intra-b");
  var div1 = document.getElementById("intrapersonal");
  div.classList.toggle('active');
  div1.classList.toggle('hidden');

  var div2 = document.getElementById("inter-b");
  var div3 = document.getElementById("interpersonal");
  div2.classList.remove('active');
  div3.classList.add('hidden');
}

function showhide2() {
  var div = document.getElementById("inter-b");
  var div1 = document.getElementById("interpersonal");
  div.classList.toggle('active');
  div1.classList.toggle('hidden');

  var div2 = document.getElementById("intra-b");
  var div3 = document.getElementById("intrapersonal");
  div2.classList.remove('active');
  div3.classList.add('hidden');
}
