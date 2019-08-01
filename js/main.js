
$('button#add-skill').click(function() {
  console.log('click');
  var input =  document.getElementById('inputv').value;
  var template = $(`<li><button class="listBtn">X</button>${input}</li>`);
  $('#container div').append(template);
});

console.log('js');